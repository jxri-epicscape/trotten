# Trotten

Most note apps get in the way before you've written a single word. Account, onboarding, workspace setup, pricing plan. By the time you're ready to capture the thought, it's gone.

Trotten is one HTML file. Open the URL. Start typing. Everything syncs to your own private GitHub Gist — no Trotten server, no subscription, no lock-in.

---

## What it does

**Capture fast.** The bar at the top is always ready. Type anything, press Enter. If the text is longer than ten words, Trotten splits it automatically — first four words become the title, the rest goes into the body. Paste a long paragraph and it just works.

**Paste images.** Copy a screenshot or photo to your clipboard and press `⌘+V` anywhere in Trotten. Claude reads the image and extracts the text. You review it, edit if needed, and save. Receipts, whiteboards, handwritten notes — anything with text in it becomes a searchable note.

**Organize without overhead.** Labels, colors, deadlines, hashtags. Write `#idea` or `#work` anywhere in a note and it becomes a clickable filter automatically. No tag manager, no settings — just `#` in front of a word.

**Send to AI.** Every note has a ✨ button. One click, choose a preset, and Trotten opens Claude.ai (or ChatGPT, or Perplexity) with the note content already in the prompt. No copy-pasting, no switching tabs to write the prompt yourself.

**Add to calendar.** Set a deadline on a note and a calendar button appears. One click opens Google Calendar pre-filled with the event, or downloads an `.ics` file for Apple Calendar and Outlook.

**Your data, always.** Notes live in a plain JSON file in your own GitHub account. Export anytime. If Trotten disappeared tomorrow, your notes would still be there.

---

## Features

**Capture**
- Quick capture bar — type and press Enter
- Smart split — pastes longer than 10 words auto-split into title + body
- Paste image (`⌘+V` / `Ctrl+V`) — AI reads the text, you review and save

**Organize**
- Four labels — choose any icon from the Lucide library in Settings
- Color stripes for visual grouping
- Deadlines with countdown (today, tomorrow, X days, overdue warning)
- Hashtags — write `#tag` anywhere, click to filter
- Archive — done notes out of sight, searchable anytime

**Act**
- AI prompts with six presets: Summarize, Next steps, Code, Rewrite, Write email, Ask more
- Add to calendar — Google Calendar or iCal/Outlook, one click
- Copy note to clipboard
- Attach one note to another (content appended, source archived)

**Search**
- Filter by text, `#hashtag`, color, or label — mix freely
- Search reaches the archive automatically when results are found there

**Sync**
- Stored in your own private GitHub Gist
- Multiple Gists — switch between workspaces from the header
- Share a Gist with someone: same Gist ID, their own token = shared workspace
- Auto-saves 1.5s after last change

**Export / Import**
- JSON export and import from Settings

---

## Setup

### What you need

- A GitHub account
- A GitHub Personal Access Token with `gist` scope
- The app hosted on GitHub Pages

### Step 1 — Host the app

1. Fork this repo or upload `index.html` to a new repository
2. Go to **Settings → Pages**, set source to `main` branch, root folder
3. Your app is live at `https://yourusername.github.io/trotten/`

> The app must be served over HTTPS for API features to work. GitHub Pages is the easiest way.

### Step 2 — Create a GitHub Token

1. Go to [github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click **Generate new token (classic)**
3. Select only the `gist` scope
4. Copy the token — you won't see it again

### Step 3 — First launch

A setup screen appears on first open:

1. Paste your token
2. Choose **New Gist** (created automatically) or connect an existing one
3. Click to start

Token and Gist config are stored in `localStorage` per device. Repeat on each device, point them to the same Gist ID.

### Step 4 — Add more Gists

Open **Settings** (sliders icon, top right):

- Add Gists and name them
- Switch between them instantly from the header (layers icon)
- Share a Gist: give someone your Gist ID — they add it in their own Settings with their own token

### Step 5 — Enable image-to-text (optional)

1. Get an [Anthropic API key](https://console.anthropic.com/) or an OpenAI key
2. Deploy `proxy-worker.js` to [Cloudflare Workers](https://workers.cloudflare.com) (free) — paste the file, save and deploy, copy the worker URL
3. Open **Settings → AI-palvelu — Kuva → teksti**, paste your API key and the worker URL
4. Copy any image to your clipboard and press `⌘+V` anywhere in Trotten

A Cloudflare Worker is required because browsers block direct API calls to Anthropic. The worker just forwards the request — it never stores anything. The `proxy-worker.js` file is in this repo.

Cost: approximately $0.002 per image with Claude Haiku.

### Step 6 — iPhone home screen

1. Open the app URL in Safari on iPhone
2. Tap **Share → Add to Home Screen**
3. Tap Add

Opens full screen like a native app.

---

## AI prompts

Every note has a ✨ button. Trotten builds a prompt with your note content and opens your chosen AI service in a new tab. No API key needed.

| Preset | What it does |
|---|---|
| Summarize | Three concise bullet points |
| Next steps | Prioritized action list |
| Code | Turns ideas into a code snippet |
| Rewrite | Professional, clear, concise |
| Write email | Draft with subject line |
| Ask more | AI asks three clarifying questions |

Choose between Claude.ai, ChatGPT, and Perplexity in Settings.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `N` | New note (when no input focused) |
| `Enter` | Save (quick capture) |
| `⌘ / Ctrl + Enter` | Save from modal |
| `⌘ / Ctrl + V` | Paste image → extract text |
| `Esc` | Close any overlay |

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
      "createdAt": "2026-05-01T10:00:00.000Z",
      "updatedAt": "2026-05-12T08:30:00.000Z"
    }
  ]
}
```

---

## Tech

- Vanilla HTML / CSS / JavaScript — no frameworks, no build step
- [Lucide Icons](https://lucide.dev) via CDN
- GitHub Gist API — storage and sync
- GitHub Pages — hosting
- Anthropic / OpenAI API — image-to-text (optional, via Cloudflare Worker)
- Cloudflare Workers — CORS proxy for image-to-text
- `localStorage` — token and config per device

---

## License

MIT
