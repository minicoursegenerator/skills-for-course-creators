# CLI reference

All commands are non-interactive and flag-driven. Users don't type these — their agent does.

## `edu-role-play init <name> [--archetype <id>] [--force]`

Scaffolds `<name>.erp` from an archetype (e.g. `skeptical-buyer`) or the blank template. `--force` to overwrite. The `.erp` extension keeps editor / Claude Code app HTML previews from auto-opening the unbundled source; `bundle` produces the playable `<name>.html`.

## `edu-role-play lint <file>`

Validates the composition. Accepts a `.erp` source or a `.html` file. Exits 0 on success, 1 on any error. Warnings do not fail.

## `edu-role-play bundle <file> [-o <out>] [--model <id>] [--proxy-url <url>] [--skip-lint]`

Runs lint (unless `--skip-lint`), then writes a self-contained HTML with the runtime and config inlined. Default output: `<file>.html` for `.erp` sources, `<file>.bundled.html` for legacy `.html` sources. Model defaults to whatever the proxy picks (`@cf/meta/llama-3.3-70b-instruct-fp8-fast`) — pass `--model` only to override.

**No API key is ever baked into the HTML.** The bundle calls `POST {proxy}/v1/chat` on the project's Cloudflare Worker proxy, which forwards to Cloudflare Workers AI through its `env.AI` binding (no token needed). Learners can optionally switch to their own key at runtime via the BYO-key UI (stored in browser localStorage, not in the HTML).

A proxy URL is required at bundle time. Set once via `EDU_ROLE_PLAY_PROXY_URL` (or pass `--proxy-url <url>`). Deploy the Worker from the source repository's proxy package — see <https://github.com/minicoursegenerator/edu-role-play/tree/main/packages/proxy-worker>.

Overrides:
- `--model <id>`: force a specific Workers AI model instead of the proxy default.
- `--proxy-url <url>` (or `EDU_ROLE_PLAY_PROXY_URL`): point bundles at a specific Worker (staging, self-hosted, etc.).

## `edu-role-play start <file> [--model <id>] [--proxy-url <url>]`

Bundles the composition (using the same defaults as `bundle`) and opens the resulting bundled HTML in the user's default browser. This is the one-shot "try the role-play" command to hand the user.

Behavior by input:
- `<name>.erp` → bundles to `<name>.html`, then opens it.
- `<name>.bundled.html` → opens as-is.
- `<name>.html` → if a sibling `<name>.erp` exists, re-bundles from source and opens. If no sibling source exists and the file already contains the inlined runtime, opens as-is. Otherwise treats it as a legacy unbundled composition and bundles to `<name>.bundled.html`.

## `edu-role-play preview <file> [--port <n>] --api-key <key> --account-id <id>`

Serves the bundled artifact at `http://localhost:<port>/` with a local dev server that proxies Cloudflare calls server-side — the key stays on the user's machine and is never written into the HTML. Does not open a browser (agent-friendly). Ctrl-C to stop.

## Exit codes

- `0` — success
- `1` — lint errors, missing flags, or file-system errors
