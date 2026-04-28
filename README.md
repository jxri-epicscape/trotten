# Trotten

A lightweight, single-file project management app that runs entirely in your browser — no server, no installation, no subscription.

Built for personal use across multiple devices (iPhone, Mac, Windows) using GitHub Pages for hosting and GitHub Gist for cloud sync.

---

## What is it?

Trotten is a dark-themed project and task manager packed into one `index.html` file. Everything — the UI, logic, and styles — lives in that single file. Your data is stored in a private GitHub Gist, so it syncs automatically across every device you use.

**Core features:**

- Add, edit, reorder and archive projects via drag & drop
- Kanban view (Planning / In Progress / Done) or list view
- Subtasks with progress bar
- Deadlines with countdown (today, tomorrow, X days, X weeks)
- Color stripes for visual grouping
- Category icons (7 Lucide icons as category markers)
- Draft cards — quick capture bar with yellow border, attach content to any project as subtasks
- Search and filter by status, color, category
- Time tracking (estimated vs logged hours)
- JSON export / import (also supports todo.json format)
- Archive with a dedicated toggle in the header
- Cross-device sync via GitHub Gist (automatic, debounced)
- Works as a home screen app on iPhone (Add to Home Screen)
- No frameworks, no build step, no dependencies except Lucide icons via CDN

---

## Setup

### What you need

- A **GitHub account**
- A **GitHub Personal Access Token** with `gist` scope
- The app hosted on **GitHub Pages** (or just opened locally)

---

### Step 1 — Host the app

**Option A — GitHub Pages (recommended, works on all devices)**

1. Fork or clone this repository, or create a new repo and upload `index.html`
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Save — your app will be live at `https://yourusername.github.io/Trotten/`

**Option B — Local**

Just open `index.html` in Chrome or any modern browser. Cross-device sync still works as long as you open the same file or the Pages URL on each device.

> ⚠️ Safari on iOS works fine. Safari on macOS may block cross-origin requests to the GitHub API — use Chrome on Mac if you run into issues.

---

### Step 2 — Create a GitHub Token

1. Go to [github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Give it a name (e.g. `trotten`)
4. Select **only** the `gist` scope — nothing else
5. Click **Generate token** and copy it immediately

---

### Step 3 — First launch

When you open the app for the first time, a setup screen appears:

1. Paste your token into the **GitHub Token** field
2. Choose one of two options:

   - **New Gist** — the app creates a new private Gist automatically. Done.
   - **Connect existing** — paste an existing Gist ID, or click **Hae lista** (Fetch list) to see all your Trotten Gists and pick one with a click

3. Click **Aloita →**

Your token and Gist ID are stored in `localStorage` on that device. Repeat Step 3 on each new device — point them all to the same Gist ID for full sync.

---

### Step 4 — iPhone home screen

1. Open the app URL in Safari on iPhone
2. Tap the **Share** button (square with arrow)
3. Tap **Add to Home Screen**
4. Name it `Trotten` and tap **Add**

The app opens full screen like a native app.

---

## How sync works

Every change (new project, edit, reorder, status change) triggers a debounced auto-save that fires 1.5 seconds after the last action. The app sends a PATCH request to the GitHub Gist API and stores the full data as `trotten-data.json`. On load, it fetches the latest version from the Gist.

There is no real-time sync — if you have the app open on two devices simultaneously, the last save wins. For personal use this is rarely an issue.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `N` | New project (when no input is focused) |
| `Enter` | Save project (in modal) or quick-add (in capture bar) |
| `Ctrl / ⌘ + Enter` | Save project from modal |
| `Esc` | Close modal |

---

## Data format

Data is stored as JSON in your private Gist:

```json
{
  "projects": [
    {
      "id": "abc123",
      "title": "Project name",
      "desc": "Notes...",
      "status": "todo",
      "priority": "",
      "deadline": "2026-05-01",
      "est": 4,
      "logged": 1.5,
      "color": "#ff4757",
      "group": "shapes",
      "subs": [{ "id": "x1", "title": "Subtask", "done": false }],
      "archived": false,
      "draft": false,
      "createdAt": "2026-04-01T10:00:00.000Z",
      "updatedAt": "2026-04-28T08:30:00.000Z"
    }
  ],
  "view": "list"
}
```

You can export a backup at any time via the **JSON** menu in the header, and import it back later (supports both Trotten native format and `todo.json` format).

---

## Tech

- Vanilla HTML / CSS / JavaScript — no frameworks
- [Lucide Icons](https://lucide.dev) via CDN
- GitHub Gist API for storage
- GitHub Pages for hosting
- `localStorage` for config (token + Gist ID per device)

---

## License

MIT — do whatever you want with it.
