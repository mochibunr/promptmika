import { App, applyHostFonts, applyHostStyleVariables } from "@modelcontextprotocol/ext-apps";

interface ScaffoldFile {
  path: string;
  content: string;
}

interface ScaffoldResult {
  language: string;
  project_name: string;
  project_type: string;
  build_command: string;
  files: ScaffoldFile[];
}

const app = new App({ name: "PromptMika Scaffold", version: "1.0.0" });

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

function copyText(text: string, btn: HTMLButtonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "Copied!";
    btn.classList.add("ok");
    setTimeout(() => {
      btn.textContent = old;
      btn.classList.remove("ok");
    }, 1200);
  });
}

function render(result: ScaffoldResult) {
  $("app").hidden = false;
  $("loading").hidden = true;

  $("title").textContent = `${result.project_name}/`;
  $("subtitle").textContent = "PromptMika scaffold";
  $("lang-badge").textContent = result.language;
  $("type-badge").textContent = result.project_type;
  $("count-badge").textContent = `${result.files.length} files`;
  $("build-cmd").textContent = result.build_command;

  $("copy-cmd").addEventListener("click", () =>
    copyText(result.build_command, $("copy-cmd"))
  );

  const tree = $("tree");
  tree.innerHTML = "";

  for (const file of result.files.sort((a, b) => a.path.localeCompare(b.path))) {
    const depth = file.path.split("/").length - 1;

    const row = document.createElement("div");
    row.className = "file";
    row.style.paddingLeft = `${depth * 14 + 8}px`;

    const icon = document.createElement("span");
    icon.className = "file-icon";
    icon.textContent = file.path.endsWith("/") ? "▸" : "·";
    row.appendChild(icon);

    const name = document.createElement("span");
    name.className = "file-name";
    name.textContent = file.path;
    name.title = file.path;
    row.appendChild(name);

    const copy = document.createElement("button");
    copy.className = "copy small";
    copy.textContent = "Copy";
    copy.addEventListener("click", () => copyText(file.content, copy));
    row.appendChild(copy);

    const view = document.createElement("button");
    view.className = "view small";
    view.textContent = "View";
    view.addEventListener("click", () => {
      const overlay = $("overlay");
      $("overlay-title").textContent = file.path;
      $("overlay-code").textContent = file.content;
      overlay.hidden = false;
    });
    row.appendChild(view);

    tree.appendChild(row);
  }
}

$("overlay-close").addEventListener("click", () => {
  $("overlay").hidden = true;
});
$("overlay-copy").addEventListener("click", () => {
  copyText($("overlay-code").textContent ?? "", $("overlay-copy"));
});

app.ontoolresult = (result) => {
  const text = result.content?.find((c) => c.type === "text")?.text;
  if (!text) return;
  try {
    render(JSON.parse(text) as ScaffoldResult);
  } catch {
    $("loading").textContent = "Received result but could not parse scaffold data.";
  }
};

app.onhostcontextchanged = (ctx) => {
  if (ctx.styles?.css?.fonts) applyHostFonts(ctx.styles.css.fonts);
  if (ctx.styles?.variables) applyHostStyleVariables(ctx.styles.variables);
};

app.connect().then(() => {
  const ctx = app.getHostContext();
  if (ctx?.styles?.css?.fonts) applyHostFonts(ctx.styles.css.fonts);
  if (ctx?.styles?.variables) applyHostStyleVariables(ctx.styles.variables);
});
