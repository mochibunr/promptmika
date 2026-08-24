// Ported from lib/scaffold-generator.ts — pure template logic, Worker-safe.
export type ScaffoldFileMap = Record<string, string>;

const SCAFFOLD_MAP: Record<string, (name: string, projectType?: string) => ScaffoldFileMap> = {
  c: (name) => ({
    "CMakeLists.txt": `cmake_minimum_required(VERSION 3.20)\nproject(${name} VERSION 1.0.0 LANGUAGES C)\n\nset(CMAKE_C_STANDARD 11)\nset(CMAKE_C_STANDARD_REQUIRED ON)\n\nadd_executable(${name} src/main.c)\ntarget_compile_options(${name} PRIVATE\n    $<$<C_COMPILER_ID:MSVC>:/W4 /WX>\n    $<$<NOT:$<C_COMPILER_ID:MSVC>>:-Wall -Wextra -Wpedantic -Werror>\n)\n\nenable_testing()\nadd_subdirectory(tests)\n`,
    "src/main.c": `#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n    (void)argc;\n    (void)argv;\n\n    printf("Hello, ${name}!\\n");\n\n    size_t size = 256;\n    char *buffer = malloc(size);\n    if (buffer == NULL) {\n        fprintf(stderr, "Allocation failed\\n");\n        return EXIT_FAILURE;\n    }\n\n    strncpy(buffer, "Secure by default", size - 1);\n    buffer[size - 1] = '\\0';\n    printf("%s\\n", buffer);\n\n    free(buffer);\n    buffer = NULL;\n\n    return EXIT_SUCCESS;\n}\n`,
    "tests/CMakeLists.txt": `find_package(unity REQUIRED)\nadd_executable(test_${name} test_main.c)\ntarget_link_libraries(test_${name} unity)\nadd_test(NAME ${name}_tests COMMAND test_${name})\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build\n        run: |\n          cmake -B build -S . -DCMAKE_BUILD_TYPE=Release\n          cmake --build build\n      - name: Test\n        run: ctest --test-dir build --output-on-failure\n      - name: Security Scan\n        run: |\n          pip install semgrep\n          semgrep --config=auto .\n`,
  }),
  cpp: (name) => ({
    "CMakeLists.txt": `cmake_minimum_required(VERSION 3.20)\nproject(${name} VERSION 1.0.0 LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 20)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\nset(CMAKE_CXX_EXTENSIONS OFF)\n\nadd_executable(${name} src/main.cpp)\ntarget_compile_features(${name} PRIVATE cxx_std_20)\ntarget_compile_options(${name} PRIVATE\n    $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX /permissive->\n    $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra -Wpedantic -Werror>\n)\n\nenable_testing()\nadd_subdirectory(tests)\n`,
    "src/main.cpp": `#include <iostream>\n#include <memory>\n#include <string>\n\nint main() {\n    std::cout << "Hello, ${name}!" << std::endl;\n\n    auto buffer = std::make_unique<std::string>("Secure by default");\n    std::cout << *buffer << std::endl;\n\n    return 0;\n}\n`,
    "tests/CMakeLists.txt": `find_package(GTest REQUIRED)\nadd_executable(test_${name} test_main.cpp)\ntarget_link_libraries(test_${name} GTest::gtest_main)\nadd_test(NAME ${name}_tests COMMAND test_${name})\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    strategy:\n      matrix:\n        os: [ubuntu-latest, windows-latest, macos-latest]\n    runs-on: \$\{{ matrix.os }}\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build\n        run: |\n          cmake -B build -S . -DCMAKE_BUILD_TYPE=Release\n          cmake --build build\n      - name: Test\n        run: ctest --test-dir build --output-on-failure\n      - name: Security Scan\n        run: |\n          pip install semgrep\n          semgrep --config=auto .\n`,
  }),
  csharp: (name) => ({
    [`${name}.csproj`]: `<Project Sdk="Microsoft.NET.Sdk">\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>net8.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>\n  </PropertyGroup>\n</Project>\n`,
    "Program.cs": `Console.WriteLine("Hello, ${name}!");\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: '8.0.x'\n      - name: Build\n        run: dotnet build --configuration Release\n      - name: Test\n        run: dotnet test\n      - name: Security Scan\n        run: |\n          dotnet tool install --global security-scan\n          security-scan ${name}.sln\n`,
  }),
  python: (name) => ({
    "pyproject.toml": `[build-system]\nrequires = ["hatchling"]\nbuild-backend = "hatchling.build"\n\n[project]\nname = "${name}"\nversion = "1.0.0"\ndescription = "A secure Python project"\nrequires-python = ">=3.11"\ndependencies = []\n\n[project.optional-dependencies]\ndev = ["pytest", "mypy", "ruff", "bandit", "safety"]\n\n[tool.ruff]\nline-length = 100\nselect = ["E", "F", "W", "I", "N", "D", "UP", "B", "C4", "SIM"]\n\n[tool.mypy]\nstrict = true\nwarn_return_any = true\nwarn_unused_configs = true\n\n[tool.bandit]\nexclude_dirs = ["tests"]\n`,
    [`src/${name}/__init__.py`]: `"""${name} - A secure Python package."""\n__version__ = "1.0.0"\n`,
    [`src/${name}/main.py`]: `def main() -> None:\n    """Main entry point."""\n    print("Hello, ${name}!")\n\nif __name__ == "__main__":\n    main()\n`,
    "tests/test_main.py": `import pytest\nfrom ${name}.main import main\n\ndef test_main():\n    main()  # Should not raise\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        python-version: ['3.11', '3.12', '3.13']\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \$\{{ matrix.python-version }}\n      - name: Install\n        run: pip install -e '.[dev]'\n      - name: Lint\n        run: ruff check .\n      - name: Type Check\n        run: mypy src\n      - name: Security Scan\n        run: bandit -r src\n      - name: Test\n        run: pytest\n`,
  }),
  rust: (name) => ({
    "Cargo.toml": `[package]\nname = "${name}"\nversion = "1.0.0"\nedition = "2021"\n\n[dependencies]\n\n[dev-dependencies]\n`,
    "src/main.rs": `fn main() {\n    println!("Hello, ${name}!");\n}\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: dtolnay/rust-toolchain@stable\n      - name: Build\n        run: cargo build --release\n      - name: Test\n        run: cargo test\n      - name: Lint\n        run: cargo clippy -- -D warnings\n      - name: Security Audit\n        run: cargo audit\n`,
  }),
  go: (name) => ({
    "go.mod": `module github.com/user/${name}\n\ngo 1.22\n`,
    "main.go": `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, ${name}!")\n}\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-go@v5\n        with:\n          go-version: '1.22'\n      - name: Build\n        run: go build -v ./...\n      - name: Test\n        run: go test -v -race ./...\n      - name: Lint\n        uses: golangci/golangci-lint-action@v6\n      - name: Security Scan\n        run: go vet ./...\n`,
  }),
  js: (name) => ({
    "package.json": JSON.stringify(
      {
        name,
        version: "1.0.0",
        type: "module",
        scripts: { test: "vitest", lint: "eslint .", typecheck: "tsc --noEmit" },
        devDependencies: { eslint: "^9.0.0", vitest: "^2.0.0" },
      },
      null,
      2
    ) + "\n",
    "src/index.js": `console.log('Hello, ${name}!');\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm audit --audit-level=moderate\n`,
  }),
  ts: (name, projectType) => tsTemplate(name, projectType ?? "app"),
  java: (name) => {
    const pkg = `com/example/${name}`;
    return {
      "pom.xml": `<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>${name}</artifactId>\n  <version>1.0.0</version>\n  <properties>\n    <maven.compiler.source>21</maven.compiler.source>\n    <maven.compiler.target>21</maven.compiler.target>\n    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.junit.jupiter</groupId>\n      <artifactId>junit-jupiter</artifactId>\n      <version>5.10.0</version>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n</project>\n`,
      [`src/main/java/${pkg}/Main.java`]: `package com.example.${name};\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, ${name}!");\n    }\n}\n`,
      ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-java@v4\n        with:\n          java-version: '21'\n          distribution: 'temurin'\n      - name: Build\n        run: mvn -B package --file pom.xml\n      - name: Test\n        run: mvn test\n      - name: Security Scan\n        run: mvn org.owasp:dependency-check-maven:check\n`,
    };
  },
  haskell: (name) => ({
    "package.yaml": `name: ${name}\nversion: 1.0.0\ndependencies:\n  - base >= 4.16\n  - text\n\nlibrary:\n  source-dirs: src\n\ntests:\n  ${name}-test:\n    main: Spec.hs\n    source-dirs: test\n    dependencies:\n      - ${name}\n      - hspec\n`,
    "src/Main.hs": `module Main where\n\nmain :: IO ()\nmain = putStrLn "Hello, ${name}!"\n`,
    ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: haskell-actions/setup@v2\n        with:\n          ghc-version: '9.6'\n      - name: Build\n        run: stack build\n      - name: Test\n        run: stack test\n`,
  }),
  elixir: (name) => {
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    return {
      "mix.exs": `defmodule ${Name}.MixProject do\n  use Mix.Project\n\n  def project do\n    [\n      app: :${name},\n      version: "1.0.0",\n      elixir: "~> 1.16",\n      start_permanent: Mix.env() == :prod,\n      deps: deps()\n    ]\n  end\n\n  def application do\n    [extra_applications: [:logger]]\n  end\n\n  defp deps do\n    []\n  end\nend\n`,
      [`lib/${name}.ex`]: `defmodule ${Name} do\n  def hello do\n    :world\n  end\nend\n`,
      ".github/workflows/ci.yml": `name: CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: erlef/setup-beam@v1\n        with:\n          elixir-version: '1.16'\n          otp-version: '26'\n      - run: mix deps.get\n      - run: mix compile --warnings-as-errors\n      - run: mix test\n      - run: mix format --check-formatted\n`,
    };
  },
  docker: (name) => ({
    "Dockerfile": `# Build stage\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Production stage\nFROM node:20-alpine\nRUN addgroup -g 1001 -S nodejs\nRUN adduser -S nextjs -u 1001\nWORKDIR /app\nCOPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules\nCOPY --chown=nextjs:nodejs . .\nUSER nextjs\nEXPOSE 3000\nENV NODE_ENV=production\nCMD ["node", "server.js"]\n`,
    ".dockerignore": `node_modules\n.git\n.env\n.env.local\nDockerfile\n.dockerignore\n`,
    ".github/workflows/docker.yml": `name: Docker Build\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build image\n        run: docker build -t ${name}:latest .\n      - name: Scan image\n        uses: aquasecurity/trivy-action@master\n        with:\n          image-ref: '${name}:latest'\n          format: 'sarif'\n          output: 'trivy-results.sarif'\n`,
  }),
  terraform: (name) => ({
    "main.tf": `terraform {\n  required_version = ">= 1.7"\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = var.aws_region\n}\n`,
    "variables.tf": `variable "aws_region" {\n  description = "AWS region"\n  type        = string\n  default     = "us-east-1"\n}\n`,
    "outputs.tf": `output "region" {\n  description = "The AWS region"\n  value       = var.aws_region\n}\n`,
    ".github/workflows/terraform.yml": `name: Terraform\non: [push, pull_request]\njobs:\n  validate:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: hashicorp/setup-terraform@v3\n      - run: terraform fmt -check\n      - run: terraform init\n      - run: terraform validate\n      - run: terraform plan\n      - name: Security Scan\n        uses: bridgecrewio/checkov-action@master\n`,
  }),
  github_actions: () => ({
    ".github/workflows/ci.yml": `name: Universal CI\non:\n  push:\n    branches: [main, develop]\n  pull_request:\n    branches: [main]\n\njobs:\n  security-scan:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Run security scanner\n        run: |\n          pip install semgrep\n          semgrep --config=auto --error .\n\n  dependency-check:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Check dependencies\n        run: |\n          if [ -f package-lock.json ]; then npm audit --audit-level=moderate; fi\n          if [ -f Cargo.toml ]; then cargo audit; fi\n          if [ -f requirements.txt ]; then pip install safety && safety check; fi\n`,
  }),
};

const TS_CI = `name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm test
      - run: npm audit --audit-level=moderate
`;

const TS_GITIGNORE = `node_modules
dist
.env
`;

const TS_ESLINT = `import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended
);
`;

const TS_TSCONFIG_BASE = {
  target: "ES2022",
  module: "NodeNext",
  moduleResolution: "NodeNext",
  strict: true,
  esModuleInterop: true,
  skipLibCheck: true,
  forceConsistentCasingInFileNames: true,
  outDir: "./dist",
  rootDir: "./src",
  types: ["node"],
};

const tsconfig = (extra: Record<string, unknown> = {}): string =>
  JSON.stringify(
    { compilerOptions: { ...TS_TSCONFIG_BASE, ...extra }, include: ["src/**/*"] },
    null,
    2
  ) + "\n";

const TS_COMMON_DEV_DEPS = {
  typescript: "^5.8.0",
  eslint: "^9.0.0",
  "@eslint/js": "^9.0.0",
  "typescript-eslint": "^8.0.0",
  vitest: "^3.2.0",
  "@types/node": "^22.0.0",
};

function tsTemplate(name: string, projectType: string): ScaffoldFileMap {
  const pkg = (extra: Record<string, unknown>): string =>
    JSON.stringify({ name, version: "1.0.0", type: "module", ...extra }, null, 2) + "\n";

  const webScripts = {
    build: "tsc",
    start: "node dist/server.js",
    dev: "node --watch dist/server.js",
    test: "vitest run",
    "test:watch": "vitest",
    lint: "eslint src",
    typecheck: "tsc --noEmit",
  };
  const webDevDeps = {
    ...TS_COMMON_DEV_DEPS,
    "@types/express": "^5.0.0",
    supertest: "^7.0.0",
    "@types/supertest": "^6.0.0",
  };

  switch (projectType) {
    case "cli":
      return {
        "package.json": pkg({
          bin: { [name]: "./dist/index.js" },
          scripts: {
            build: "tsc",
            start: "node dist/index.js",
            test: "vitest run",
            "test:watch": "vitest",
            lint: "eslint src",
            typecheck: "tsc --noEmit",
          },
          devDependencies: TS_COMMON_DEV_DEPS,
        }),
        "tsconfig.json": tsconfig(),
        "src/index.ts": `#!/usr/bin/env node
import { parseArgs } from "node:util";

export function run(args: string[]): string {
  let options: { name?: string; help?: boolean };
  try {
    options = parseArgs({
      args,
      options: {
        name: { type: "string" },
        help: { type: "boolean", short: "h" },
      },
      strict: true,
    }).values;
  } catch (err) {
    return "error: " + (err as Error).message;
  }

  if (options.help) {
    return "Usage: ${name} --name <name>\\n  -h, --help    Show this help";
  }

  return "Hello, " + (options.name ?? "world") + "!";
}

const output = run(process.argv.slice(2));
if (output.startsWith("error:")) {
  console.error(output);
  process.exitCode = 1;
} else {
  console.log(output);
}
`,
        "src/index.test.ts": `import { describe, expect, it } from "vitest";
import { run } from "./index.js";

describe("run", () => {
  it("greets with the provided name", () => {
    expect(run(["--name", "Mika"])).toBe("Hello, Mika!");
  });

  it("greets the world by default", () => {
    expect(run([])).toBe("Hello, world!");
  });

  it("shows usage with --help", () => {
    expect(run(["--help"])).toContain("Usage:");
  });

  it("reports unknown options as errors", () => {
    expect(run(["--bogus"])).toMatch(/^error:/);
  });
});
`,
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };

    case "api":
      return {
        "package.json": pkg({
          scripts: webScripts,
          dependencies: { express: "^5.1.0" },
          devDependencies: webDevDeps,
        }),
        "tsconfig.json": tsconfig(),
        "src/app.ts": `import express from "express";

export const app = express();

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/items", (_req, res) => {
  res.json([{ id: 1, name: "item-1" }]);
});
`,
        "src/server.ts": `import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log("${name} listening on http://localhost:" + port);
});
`,
        "src/app.test.ts": `import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "./app.js";

describe("app", () => {
  it("reports health as JSON", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("returns items as JSON", async () => {
    const res = await request(app).get("/api/items");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
`,
        ".env.example": "PORT=3000\n",
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };

    case "game":
      return {
        "package.json": pkg({
          scripts: {
            build: "tsc",
            test: "vitest run",
            "test:watch": "vitest",
            lint: "eslint src",
            typecheck: "tsc --noEmit",
          },
          devDependencies: TS_COMMON_DEV_DEPS,
        }),
        "tsconfig.json": tsconfig({ lib: ["ES2022", "DOM"] }),
        "src/game.ts": `export interface GameState {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function createState(): GameState {
  return { x: 0, y: 0, vx: 2, vy: 2 };
}

export function step(state: GameState, width: number, height: number): GameState {
  const next = { ...state, x: state.x + state.vx, y: state.y + state.vy };
  if (next.x <= 0 || next.x >= width) next.vx *= -1;
  if (next.y <= 0 || next.y >= height) next.vy *= -1;
  return next;
}

if (typeof document !== "undefined") {
  const canvas = document.getElementById("game") as HTMLCanvasElement | null;
  const ctx = canvas?.getContext("2d");
  let state = createState();

  if (canvas && ctx) {
    const loop = (): void => {
      state = step(state, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(state.x, state.y, 8, 0, Math.PI * 2);
      ctx.fill();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}
`,
        "src/game.test.ts": `import { describe, expect, it } from "vitest";
import { createState, step } from "./game.js";

describe("game", () => {
  it("moves the ball by its velocity", () => {
    const next = step(createState(), 400, 300);
    expect(next.x).toBe(2);
    expect(next.y).toBe(2);
  });

  it("bounces off the right edge", () => {
    let state = createState();
    state.x = 399;
    const next = step(state, 400, 300);
    expect(next.vx).toBeLessThan(0);
  });
});
`,
        "public/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name}</title>
  <style>
    canvas { border: 1px solid #ccc; }
  </style>
</head>
<body>
  <canvas id="game" width="400" height="300"></canvas>
  <script src="../dist/game.js"></script>
</body>
</html>
`,
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };

    case "test":
      return {
        "package.json": pkg({
          scripts: {
            test: "vitest run",
            "test:watch": "vitest",
            lint: "eslint src",
            typecheck: "tsc --noEmit",
          },
          devDependencies: TS_COMMON_DEV_DEPS,
        }),
        "tsconfig.json": tsconfig(),
        "src/example.ts": `export function add(a: number, b: number): number {
  return a + b;
}
`,
        "src/example.test.ts": `import { describe, expect, it } from "vitest";
import { add } from "./example.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("handles negative numbers", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
`,
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };

    case "embedded":
    case "lib":
      return {
        "package.json": pkg({
          main: "./dist/index.js",
          types: "./dist/index.d.ts",
          files: ["dist"],
          scripts: {
            build: "tsc",
            test: "vitest run",
            "test:watch": "vitest",
            lint: "eslint src",
            typecheck: "tsc --noEmit",
          },
          devDependencies: TS_COMMON_DEV_DEPS,
        }),
        "tsconfig.json": tsconfig({ declaration: true }),
        "src/index.ts": `export function greet(name: string): string {
  return "Hello, " + name + "!";
}
`,
        "src/index.test.ts": `import { describe, expect, it } from "vitest";
import { greet } from "./index.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("Mika")).toBe("Hello, Mika!");
  });
});
`,
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };

    case "web":
    default:
      return {
        "package.json": pkg({
          scripts: webScripts,
          dependencies: { express: "^5.1.0" },
          devDependencies: webDevDeps,
        }),
        "tsconfig.json": tsconfig(),
        "src/app.ts": `import express from "express";

export const app = express();

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

app.use(express.json());
app.use(express.static("public"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
`,
        "src/server.ts": `import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3000);

app.listen(port, () => {
  console.log("${name} listening on http://localhost:" + port);
});
`,
        "src/app.test.ts": `import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "./app.js";

describe("app", () => {
  it("serves the homepage", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  it("reports health as JSON", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
`,
        "public/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${name}</title>
</head>
<body>
  <h1>Hello, ${name}!</h1>
</body>
</html>
`,
        ".env.example": "PORT=3000\n",
        "eslint.config.js": TS_ESLINT,
        ".gitignore": TS_GITIGNORE,
        ".github/workflows/ci.yml": TS_CI,
      };
  }
}

export const SUPPORTED_LANGUAGES = Object.keys(SCAFFOLD_MAP);
export const PROJECT_TYPES = ["app", "lib", "test", "web", "api", "cli", "game", "embedded"] as const;

export function generateScaffold(
  language: string,
  projectName: string,
  projectType: string = "app"
): { files: ScaffoldFileMap; buildCommand: string; error?: string } {
  const generator = SCAFFOLD_MAP[language];
  if (!generator) {
    return {
      files: {},
      buildCommand: "",
      error: `Language '${language}' not yet supported. Supported: ${SUPPORTED_LANGUAGES.join(", ")}`,
    };
  }

  const files = generator(projectName, projectType);
  const buildCommands: Record<string, string> = {
    c: `cd ${projectName} && cmake -B build -S . && cmake --build build`,
    cpp: `cd ${projectName} && cmake -B build -S . && cmake --build build`,
    csharp: `cd ${projectName} && dotnet build`,
    python: `cd ${projectName} && pip install -e '.[dev]' && pytest`,
    rust: `cd ${projectName} && cargo build && cargo test`,
    go: `cd ${projectName} && go mod tidy && go test ./...`,
    js: `cd ${projectName} && npm install && npm test`,
    ts: `cd ${projectName} && npm install && npm test`,
    java: `cd ${projectName} && mvn compile && mvn test`,
    haskell: `cd ${projectName} && stack build && stack test`,
    elixir: `cd ${projectName} && mix deps.get && mix test`,
    docker: `cd ${projectName} && docker build -t ${projectName}:latest .`,
    terraform: `cd ${projectName} && terraform init && terraform validate`,
  };

  return {
    files,
    buildCommand:
      language === "ts"
        ? projectType === "test"
          ? `cd ${projectName} && npm install && npm test`
          : `cd ${projectName} && npm install && npm run build && npm test`
        : buildCommands[language] ?? "Check language-specific build instructions",
  };
}
