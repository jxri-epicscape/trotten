# Trotten

A lightweight, single-file workspace that lives in your browser. No installation, no account, no subscription. Open the URL and you're in.

Built for people who work across multiple devices and need one place to capture, organize and act on information — without committing to a complex tool.

---

## What it is

Trotten is a note and task manager packed into one `index.html` file. Everything — UI, logic, styles — lives in that single file. Your data is stored in private GitHub Gists, so it syncs automatically across every device. Multiple Gists let you switch between different workspaces or share a Gist with someone else.

---

## Features

**Capture**
- Quick capture bar — type and press Enter, note is saved instantly
- Post-it bar — freeform multi-line note, first line becomes the title
- Paste an image (`⌘+V` / `Ctrl+V`) — Trotten reads the text from the image using AI and offers it as a new note for editing before saving

**Organize**
- Four labels: ⚡ Urgent · 🌿 Cannabis · ◆ Shapes · 💡 Lamp — or leave unlabeled
- Color stripes for visual grouping
- Deadlines with countdown (today, tomorrow, X days, X weeks, overdue warning)
- Archive — swipe a note away when done, retrieve it anytime

**Act**
- AI Actions on every note — opens Claude.ai in a new tab with the note content pre-loaded into one of five prompts:
  - **Summarize** — three bullet points
  - **Next steps** — prioritized action list
  - **Code** — transform ideas into a code snippet
  - **Rewrite** — professional, clear, concise
  - **Ask more** — Claude asks three clarifying questions
- Copy note content to clipboard in one click
- Attach a Post-it note to another note (content appended)

**Sync**
- Data stored in your own private GitHub Gist — no Trotten server involved
- Multiple Gists with instant switching — separate workspaces for home, work, or shared projects
- Share a Gist with anyone: same token, different Gist ID = shared workspace without user accounts
- Works on iPhone, Mac, Windows, any browser

**Export / Import**
- JSON export at any time — your data, your file
- JSON import — supports native Trotten format and `todo.json` format

---

## Setup

### What you need

- A GitHub account
- A GitHub Personal Access Token with `gist` scope
- The app hosted on GitHub Pages (or opened locally in Chrome)

---

### Step 1 — Host the app

**GitHub Pages (recommended)**

1. Fork this repo or upload `index.html` to a new repository
2. Go to **Settings → Pages**, set source to `main` branch, root folder
3. Your app is live at `https://yourusername.github.io/trotten/`

**Local**
Open `index.html` directly in Chrome. Sync still works.

> Safari on macOS may block GitHub API requests. Use Chrome on Mac if you run into issues. Safari on iOS works fine.

---

### Step 2 — Create a GitHub Token

1. Go to [github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Select **only** the `gist` scope
4. Copy the token immediately

---

### Step 3 — First launch

A setup screen appears on first open:

1. Paste your token
2. Choose **New Gist** (created automatically) or **Connect existing** (paste ID or click Fetch to see your Gists)
3. Click **Aloita →**

Token and Gist ID are stored in `localStorage` per device. Repeat on each device, point them to the same Gist ID.

---

### Step 4 — Add more Gists

Open **Settings** (sliders icon, top right):

- Your existing Gist appears automatically as "Oletus"
- Click **+ Lisää Gist** to add more workspaces
- Give each a name, paste the Gist ID
- Switch between them instantly with the arrow button — Trotten saves to whichever is active

To share a workspace: give someone your Gist ID. They add it in their Settings with their own token. Both of you read and write to the same data.

---

### Step 5 — Enable image-to-text (optional)

1. Get an [Anthropic API key](https://console.anthropic.com/)
2. Open **Settings → Anthropic API** and paste your key
3. Copy any image to your clipboard (`⌘+V` / `Ctrl+V` anywhere in Trotten)
4. Trotten sends the image to Claude Haiku, strips formatting, and shows you clean editable text
5. Review, edit if needed, and save as a new note

Cost: approximately $0.002 per image using Claude Haiku. Your key, your bill — Trotten never touches it.

> Works in Chrome. Safari does not support `navigator.clipboard.read()` for images.

---

### Step 6 — iPhone home screen

1. Open the app URL in Safari on iPhone
2. Tap **Share → Add to Home Screen**
3. Name it Trotten, tap Add

Opens full screen like a native app.

---

## AI Actions

Every note has a ✨ button. Click it to choose a preset — Trotten builds a prompt with your note content and opens Claude.ai in a new tab with everything pre-filled. No API key needed for this feature.

| Preset | What it does |
|---|---|
| Summarize | Three concise bullet points |
| Next steps | Prioritized action list |
| Code | Turns ideas into a code snippet |
| Rewrite | Professional, clear, concise version |
| Ask more | Claude asks three clarifying questions |

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `N` | New note (when no input focused) |
| `Enter` | Save (in quick capture or modal) |
| `⌘ / Ctrl + Enter` | Save from modal |
| `⌘ / Ctrl + V` | Paste image → extract text |
| `Esc` | Close modal |

---

## How sync works

Every change triggers a debounced auto-save (1.5s after last action) — a PATCH request to the GitHub Gist API. On load, the latest version is fetched from the active Gist.

No real-time sync between devices. If the app is open on two devices simultaneously, last save wins. For personal use this is rarely a problem.

---

## Data format

```json
{
  "projects": [
    {
      "id": "abc123",
      "title": "Note title",
      "desc": "Content...",
      "status": "todo",
      "deadline": "2026-06-01",
      "color": "#ff4757",
      "group": "zap",
      "archived": false,
      "draft": false,
      "createdAt": "2026-05-01T10:00:00.000Z",
      "updatedAt": "2026-05-12T08:30:00.000Z"
    }
  ],
  "view": "list"
}
```

---

## Tech

- Vanilla HTML / CSS / JavaScript — no frameworks, no build step
- [Lucide Icons](https://lucide.dev) via CDN
- GitHub Gist API — storage and sync
- GitHub Pages — hosting
- Claude Haiku (Anthropic API) — image-to-text, optional
- `localStorage` — stores token and Gist config per device

---

## Philosophy

Trotten doesn't try to be everything. It's fast to open, fast to use, and easy to leave. Your data is a plain JSON file in your own GitHub account. If Trotten disappears tomorrow, your notes are still there.

---

## License

MIT
