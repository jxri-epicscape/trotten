# Trotten — User Guide

Trotten is a note and task tool that lives in a single browser tab. No app to install. No account to create. Open the URL and start capturing.

Your data is stored in a GitHub Gist — a private file in your own GitHub account. Trotten never touches a server of its own.

---

## Capturing notes

**Quick capture bar** (yellow bar at the top) — type anything and press Enter. The note is saved instantly.

If your text is longer than 10 words, Trotten splits it automatically: the first four words become the title, the rest goes into the body. This way pasting a long paragraph doesn't turn into a wall of text in the title.

**Post-it** — the multiline version. First line becomes the title, everything below becomes the body. Good for longer thoughts.

**Label shortcuts** — the four icon buttons above the capture bar. Click one to open a new note with that label pre-selected.

---

## Organizing notes

**Labels** — four icons you define yourself. Labels are visual — they show as small icons on the card. Click a label on a card to filter by it.

**Colors** — a color stripe on the left edge of the card. Purely visual grouping, no logic attached.

**Deadline** — a date. Trotten shows a countdown: *today*, *tomorrow*, *3 days*, *2 weeks*. Overdue notes get a warning.

**Hashtags** — write `#idea`, `#work`, or any `#word` directly in the title or body. Trotten detects them automatically and shows them as clickable badges on the card. Click a hashtag to filter all notes with that tag. Type `#idea` in the search bar to search by tag. No tag manager, no settings — just words with a `#` in front.

---

## Actions on a note

| Button | What it does |
|---|---|
| ✏️ | Edit the note |
| 🗄 | Archive — moves the note out of the main view |
| 🔗 | Attach to another note — appends this note's content to a target note and archives the source |
| 📋 | Copy content to clipboard |
| ✨ | Send as Prompt — opens your AI tool with the note content pre-loaded |

---

## Send as Prompt

Every note has a ✨ button. Click it, choose a preset, and Trotten builds a prompt with your note content and opens it in Claude.ai, ChatGPT, or Perplexity — whichever you've set in Settings.

Presets available:
- **Summarize** — three concise bullet points
- **Next steps** — prioritized action list
- **Code** — turn an idea into a code snippet
- **Rewrite** — professional, clear, concise
- **Write email** — draft an email with a subject line
- **Ask more** — Claude asks three clarifying questions

> Claude.ai shows a "Use caution before running this prompt" warning when the link opens. This is Claude's own safety feature and appears for any prompt arriving via external URL — it is not a security issue with Trotten. Click Continue.

---

## Search and filter

The **search icon** (top right) opens the filter panel.

- Type to search by title or body text
- Type `#idea` to filter by hashtag
- Mix both: `ruttopuisto #idea` finds notes containing "ruttopuisto" that also have the `#idea` tag
- Filter by color
- Filter by label using the icon buttons

**Search reaches the archive too.** If your search finds notes in the archive, Trotten opens the archive section automatically and shows the matches — even if the archive was closed.

---

## Archive

Archiving is not deleting. It moves the note to the bottom of the page, out of your main view. Click the archive icon in the header to expand it. Notes in the archive can be restored or permanently deleted.

---

## Gists and sync

Trotten stores your data in a GitHub Gist — a plain JSON file in your GitHub account. Every change triggers an auto-save after 1.5 seconds.

You can have multiple Gists. Click the switcher next to the Trotten logo in the header to switch between them. Each Gist is a separate workspace — use them for different contexts or share one with someone else.

To share a workspace: give someone your Gist ID. They connect it in their own Trotten with their own token. Both of you read and write to the same data.

### What is safe to store in a Gist

A private Gist is not publicly listed, but it is not encrypted. Anyone with the direct URL can read it.

Regular notes, tasks, ideas, even passwords — they are fine. GitHub does not read your content for the purpose of sharing it.

However, **API keys are a different story.** GitHub automatically scans all Gists — including private ones — for known API key patterns from major providers (Anthropic, OpenAI, and others). This is a security feature GitHub runs to protect developers. If GitHub finds an API key in your content, it reports it to the provider, and the provider revokes the key immediately — usually within minutes.

So there is no point writing an API key into a Trotten note. It is not that Trotten is insecure — it is that GitHub will make the key useless before you even close the tab.

---

## Settings

Open Settings from the sliders icon in the top right.

**Gists** — add, name, and switch between Gists. The active Gist is highlighted. You can also switch directly from the header.

**Labels** — choose the four icons that appear in your label bar. Click a slot to select it, then pick an icon from the grid. Search by name if you know what you want. The change is instant and updates all existing notes that used the old icon.

**Send as Prompt — AI service** — choose which AI tool opens when you click ✨.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `N` | New note (when no input is focused) |
| `Enter` | Save (in quick capture) |
| `⌘ / Ctrl + Enter` | Save from modal |
| `Esc` | Close any overlay |

---

## Your data

Your notes are a plain JSON file in your own GitHub account. If Trotten disappeared tomorrow, your data would still be there. Export it any time via the JSON button in the header.
