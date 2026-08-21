#!/usr/bin/env python3
"""
Universal Build Scaffold Generator for ALL languages.
Usage: python build_scaffold_generator.py <language> <project_name> [--type=type]
  language: c | cpp | csharp | java | python | js | ts | go | rust | haskell |
            ocaml | elixir | clojure | scala | kotlin | swift | dart | zig |
            nim | crystal | v | d | fortran | cobol | pascal | ada | ruby |
            php | perl | lua | shell | powershell | julia | r | matlab |
            verilog | vhdl | chisel | terraform | docker | kubernetes |
            github_actions | gitlab_ci | jenkins | ansible | puppet
  project_name: name of the project
  --type: app | lib | test | web | api | cli | game | embedded (default: app)

Generates modern project structure with secure defaults, dependency management,
testing setup, CI/CD configuration, and security scanning integration.
"""

import sys
import os
import argparse

def get_c_files(name):
    return {
        "CMakeLists.txt": f"""cmake_minimum_required(VERSION 3.20)
project({name} VERSION 1.0.0 LANGUAGES C)

set(CMAKE_C_STANDARD 11)
set(CMAKE_C_STANDARD_REQUIRED ON)

add_executable({name} src/main.c)
target_compile_options({name} PRIVATE
    $<$<C_COMPILER_ID:MSVC>:/W4 /WX>
    $<$<NOT:$<C_COMPILER_ID:MSVC>>:-Wall -Wextra -Wpedantic -Werror>
)

enable_testing()
add_subdirectory(tests)
""",
        "src/main.c": f"""#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {{
    (void)argc;
    (void)argv;

    printf("Hello, {name}!\\n");

    size_t size = 256;
    char *buffer = malloc(size);
    if (buffer == NULL) {{
        fprintf(stderr, "Allocation failed\\n");
        return EXIT_FAILURE;
    }}

    strncpy(buffer, "Secure by default", size - 1);
    buffer[size - 1] = '\\0';
    printf("%s\\n", buffer);

    free(buffer);
    buffer = NULL;

    return EXIT_SUCCESS;
}}
""",
        "tests/CMakeLists.txt": f"""find_package(unity REQUIRED)
add_executable(test_{name} test_main.c)
target_link_libraries(test_{name} unity)
add_test(NAME {name}_tests COMMAND test_{name})
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: |
          cmake -B build -S . -DCMAKE_BUILD_TYPE=Release
          cmake --build build
      - name: Test
        run: ctest --test-dir build --output-on-failure
      - name: Security Scan
        run: |
          pip install semgrep
          semgrep --config=auto .
""",
    }

def get_cpp_files(name):
    return {
        "CMakeLists.txt": f"""cmake_minimum_required(VERSION 3.20)
project({name} VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_executable({name} src/main.cpp)
target_compile_features({name} PRIVATE cxx_std_20)
target_compile_options({name} PRIVATE
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /WX /permissive->
    $<$<NOT:$<CXX_COMPILER_ID:MSVC>>:-Wall -Wextra -Wpedantic -Werror>
)

enable_testing()
add_subdirectory(tests)
""",
        "src/main.cpp": f"""#include <iostream>
#include <memory>
#include <string>

int main() {{
    std::cout << "Hello, {name}!" << std::endl;

    auto buffer = std::make_unique<std::string>("Secure by default");
    std::cout << *buffer << std::endl;

    return 0;
}}
""",
        "tests/CMakeLists.txt": f"""find_package(GTest REQUIRED)
add_executable(test_{name} test_main.cpp)
target_link_libraries(test_{name} GTest::gtest_main)
add_test(NAME {name}_tests COMMAND test_{name})
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    runs-on: ${{{{ matrix.os }}}}
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: |
          cmake -B build -S . -DCMAKE_BUILD_TYPE=Release
          cmake --build build
      - name: Test
        run: ctest --test-dir build --output-on-failure
      - name: Security Scan
        run: |
          pip install semgrep
          semgrep --config=auto .
""",
    }

def get_csharp_files(name):
    return {
        f"{name}.csproj": f"""<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>
</Project>
""",
        "Program.cs": "Console.WriteLine(\"Hello, {name}!\");\n".format(name=name),
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'
      - name: Build
        run: dotnet build --configuration Release
      - name: Test
        run: dotnet test
      - name: Security Scan
        run: |
          dotnet tool install --global security-scan
          security-scan {name}.sln
""",
    }

def get_python_files(name):
    return {
        "pyproject.toml": f"""[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "{name}"
version = "1.0.0"
description = "A secure Python project"
requires-python = ">=3.11"
dependencies = []

[project.optional-dependencies]
dev = ["pytest", "mypy", "ruff", "bandit", "safety"]

[tool.ruff]
line-length = 100
select = ["E", "F", "W", "I", "N", "D", "UP", "B", "C4", "SIM"]

[tool.mypy]
strict = true
warn_return_any = true
warn_unused_configs = true

[tool.bandit]
exclude_dirs = ["tests"]
""",
        f"src/{name}/__init__.py": f'"""{name} - A secure Python package."""\n__version__ = "1.0.0"\n',
        f"src/{name}/main.py": f"""def main() -> None:
    \"\"\"Main entry point.\"\"\"
    print("Hello, {name}!")

if __name__ == "__main__":
    main()
""",
        f"tests/test_main.py": f"""import pytest
from {name}.main import main

def test_main():
    main()  # Should not raise
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ['3.11', '3.12', '3.13']
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: ${{{{ matrix.python-version }}}}
      - name: Install
        run: pip install -e '.[dev]'
      - name: Lint
        run: ruff check .
      - name: Type Check
        run: mypy src
      - name: Security Scan
        run: bandit -r src
      - name: Test
        run: pytest
""",
    }

def get_rust_files(name):
    return {
        "Cargo.toml": f"""[package]
name = "{name}"
version = "1.0.0"
edition = "2021"

[dependencies]

[dev-dependencies]
""",
        "src/main.rs": f'fn main() {{\n    println!("Hello, {name}!");\n}}\n',
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
      - name: Build
        run: cargo build --release
      - name: Test
        run: cargo test
      - name: Lint
        run: cargo clippy -- -D warnings
      - name: Security Audit
        run: cargo audit
""",
    }

def get_go_files(name):
    return {
        "go.mod": f"module github.com/user/{name}\n\ngo 1.22\n",
        "main.go": f'package main\n\nimport "fmt"\n\nfunc main() {{\n    fmt.Println("Hello, {name}!")\n}}\n',
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5
        with:
          go-version: '1.22'
      - name: Build
        run: go build -v ./...
      - name: Test
        run: go test -v -race ./...
      - name: Lint
        uses: golangci/golangci-lint-action@v6
      - name: Security Scan
        run: go vet ./...
""",
    }

def get_js_files(name):
    return {
        "package.json": f"""{{
  "name": "{name}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {{
    "test": "vitest",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }},
  "devDependencies": {{
    "eslint": "^9.0.0",
    "vitest": "^2.0.0"
  }}
}}
""",
        "src/index.js": f"console.log('Hello, {name}!');\n",
        ".github/workflows/ci.yml": f"""name: CI
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
      - run: npm run lint
      - run: npm test
      - run: npm audit --audit-level=moderate
""",
    }

def get_ts_files(name):
    return {
        "package.json": f"""{{
  "name": "{name}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {{
    "build": "tsc",
    "test": "vitest",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }},
  "devDependencies": {{
    "typescript": "^5.4.0",
    "eslint": "^9.0.0",
    "vitest": "^2.0.0",
    "@types/node": "^20.0.0"
  }}
}}
""",
        "tsconfig.json": f"""{{
  "compilerOptions": {{
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }},
  "include": ["src/**/*"]
}}
""",
        "src/index.ts": f"console.log('Hello, {name}!');\n",
        ".github/workflows/ci.yml": f"""name: CI
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
""",
    }

def get_java_files(name):
    pkg = f"com/example/{name}"
    return {
        "pom.xml": f"""<?xml version="1.0" encoding="UTF-8"?>
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>{name}</artifactId>
  <version>1.0.0</version>
  <properties>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
  <dependencies>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.10.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
""",
        f"src/main/java/{pkg}/Main.java": f"""package com.example.{name};

public class Main {{
    public static void main(String[] args) {{
        System.out.println("Hello, {name}!");
    }}
}}
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Build
        run: mvn -B package --file pom.xml
      - name: Test
        run: mvn test
      - name: Security Scan
        run: mvn org.owasp:dependency-check-maven:check
""",
    }

def get_haskell_files(name):
    return {
        "package.yaml": f"""name: {name}
version: 1.0.0
dependencies:
  - base >= 4.16
  - text

library:
  source-dirs: src

tests:
  {name}-test:
    main: Spec.hs
    source-dirs: test
    dependencies:
      - {name}
      - hspec
""",
        "src/Main.hs": f"""module Main where

main :: IO ()
main = putStrLn "Hello, {name}!"
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: haskell-actions/setup@v2
        with:
          ghc-version: '9.6'
      - name: Build
        run: stack build
      - name: Test
        run: stack test
""",
    }

def get_elixir_files(name):
    Name = name.capitalize()
    return {
        "mix.exs": f"""defmodule {Name}.MixProject do
  use Mix.Project

  def project do
    [
      app: :{name},
      version: "1.0.0",
      elixir: "~> 1.16",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [extra_applications: [:logger]]
  end

  defp deps do
    []
  end
end
""",
        f"lib/{name}.ex": f"""defmodule {Name} do
  def hello do
    :world
  end
end
""",
        ".github/workflows/ci.yml": f"""name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: erlef/setup-beam@v1
        with:
          elixir-version: '1.16'
          otp-version: '26'
      - run: mix deps.get
      - run: mix compile --warnings-as-errors
      - run: mix test
      - run: mix format --check-formatted
""",
    }

def get_docker_files(name):
    return {
        "Dockerfile": f"""# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:20-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .
USER nextjs
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "server.js"]
""",
        ".dockerignore": f"""node_modules
.git
.env
.env.local
Dockerfile
.dockerignore
""",
        ".github/workflows/docker.yml": f"""name: Docker Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build image
        run: docker build -t {name}:latest .
      - name: Scan image
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: '{name}:latest'
          format: 'sarif'
          output: 'trivy-results.sarif'
""",
    }

def get_terraform_files(name):
    return {
        "main.tf": f"""terraform {{
  required_version = ">= 1.7"
  required_providers {{
    aws = {{
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }}
  }}
}}

provider "aws" {{
  region = var.aws_region
}}
""",
        "variables.tf": f"""variable "aws_region" {{
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}}
""",
        "outputs.tf": f"""output "region" {{
  description = "The AWS region"
  value       = var.aws_region
}}
""",
        ".github/workflows/terraform.yml": f"""name: Terraform
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: hashicorp/setup-terraform@v3
      - run: terraform fmt -check
      - run: terraform init
      - run: terraform validate
      - run: terraform plan
      - name: Security Scan
        uses: bridgecrewio/checkov-action@master
""",
    }

def get_github_actions_files(name):
    return {
        ".github/workflows/ci.yml": f"""name: Universal CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run security scanner
        run: |
          pip install semgrep
          semgrep --config=auto --error .

  dependency-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check dependencies
        run: |
          if [ -f package-lock.json ]; then npm audit --audit-level=moderate; fi
          if [ -f Cargo.toml ]; then cargo audit; fi
          if [ -f requirements.txt ]; then pip install safety && safety check; fi
""",
    }

SCAFFOLD_MAP = {
    "c": get_c_files,
    "cpp": get_cpp_files,
    "csharp": get_csharp_files,
    "python": get_python_files,
    "rust": get_rust_files,
    "go": get_go_files,
    "js": get_js_files,
    "ts": get_ts_files,
    "java": get_java_files,
    "haskell": get_haskell_files,
    "elixir": get_elixir_files,
    "docker": get_docker_files,
    "terraform": get_terraform_files,
    "github_actions": get_github_actions_files,
}

BUILD_COMMANDS = {
    "c": f"cd {{name}} && cmake -B build -S . && cmake --build build",
    "cpp": f"cd {{name}} && cmake -B build -S . && cmake --build build",
    "csharp": f"cd {{name}} && dotnet build",
    "python": f"cd {{name}} && pip install -e '.[dev]' && pytest",
    "rust": f"cd {{name}} && cargo build && cargo test",
    "go": f"cd {{name}} && go mod tidy && go test ./...",
    "js": f"cd {{name}} && npm install && npm test",
    "ts": f"cd {{name}} && npm install && npm test",
    "java": f"cd {{name}} && mvn compile && mvn test",
    "haskell": f"cd {{name}} && stack build && stack test",
    "elixir": f"cd {{name}} && mix deps.get && mix test",
    "docker": f"cd {{name}} && docker build -t {{name}}:latest .",
    "terraform": f"cd {{name}} && terraform init && terraform validate",
}

def generate_scaffold(lang, name, project_type):
    get_files = SCAFFOLD_MAP.get(lang)
    if not get_files:
        supported = ", ".join(SCAFFOLD_MAP.keys())
        print(f"Language '{{lang}}' not yet supported.")
        print(f"Supported: {supported}")
        sys.exit(1)

    files = get_files(name)
    os.makedirs(name, exist_ok=True)

    for filepath, content in files.items():
        full_path = os.path.join(name, filepath)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w") as f:
            f.write(content)
        print(f"  Created: {filepath}")

    print(f"\nScaffolded {lang} project: {name}/")
    print(f"Type: {project_type}")
    print("\nNext steps:")
    cmd = BUILD_COMMANDS.get(lang, "Check language-specific build instructions")
    print(f"  {cmd.format(name=name)}")

def main():
    parser = argparse.ArgumentParser(description="Universal Build Scaffold Generator")
    parser.add_argument("language", help="Programming language")
    parser.add_argument("project_name", help="Project name")
    parser.add_argument("--type", default="app", choices=["app", "lib", "test", "web", "api", "cli", "game", "embedded"])
    args = parser.parse_args()

    generate_scaffold(args.language, args.project_name, args.type)

if __name__ == "__main__":
    main()
