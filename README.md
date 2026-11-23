# squawk.studiographic.ca

The Squawk website. Plain HTML, CSS and a little JS, served by GitHub Pages.

```
index.html   the page
style.css
app.js       stamps the boarding pass once, places its notches, honours reduced motion
media/       preview video, poster, screen crops, rule diagrams, icons, og image
fonts/       Fredoka and JetBrains Mono (SIL OFL, licences beside them)
CNAME        the custom domain
```

Media is rendered from the Squawk Godot project with the default Warbird and day sky: screens from `tools/store_shots.gd`, the video from `tools/promo.gd` with slower, human pacing, and the Flight rules boards from the How to Play scene. Full-size sources sit in `media/src/` (not committed or served).

## One-time setup

1. Create a public repo (e.g. `squawk-site`) and push this folder to `main`.
2. Repo › Settings › Pages › Source: *Deploy from a branch*, `main`, `/ (root)`.
3. DNS for studiographic.ca: add `CNAME` `squawk` → `<github-username>.github.io`.
4. Once the domain check passes, tick **Enforce HTTPS**.

## At launch

Swap the ticket's "Tell me when it lands" button for App Store / Google Play links, and change the stamp and the Gate fact.

## Local preview

```bash
python3 -m http.server 8765
```
