# mtⁿ · mountainhigh.codes — bootstrap

> Pick-up doc for rebuilding the site + standing up the company. Stack is in flux (Ara will
> likely move to Astro + a git-based CMS, matching the deploystrata site) — this captures the
> **brand, concept, and content** so it survives a stack change. Track/refer from `ahoward/me`
> issue #59.

## Brand (go back to the OG — simpler, cooler, by hand)

- **Name:** `mtⁿ` / `mtn^codes` / `m^c` / mountainhigh.codes
- **Wordmark:** `mtⁿ` — `m`=**fireweed**, `t`=**glacier**, `ⁿ`=**sun** (superscript-n `&#x207F;`).
  Canonical source: `brand/wordmark.html` → headless-chrome → favicons (`npm run brand`).
- **Palette (Alaska screen-print — pigmented, not neon):**
  - fireweed `#C81E6E` · glacier `#1A9CB5` · sun `#D99209`
  - paper `#F2ECDD` / ink `#171310` (light) · ink `#111013` / bone `#EFE9DB` (dark)
- **Type:** Overpass Mono **Bold** (`brand/fonts/OverpassMono-Bold.ttf`), everywhere. Mono, heavy.
- **Tagline (OG):** *"a hacker company. radically simple. utter zen."*
- **Look:** brutalist. Nothing but words, images, a little color. **No buttons if we can avoid it.**

## Hero copy (the OG one-pager, current-good)

```
mtⁿ   (mountainhigh.codes · m^c)

a hacker company. radically simple. utter zen.

one repo. one inbox. nothing required beyond getting access to this repo —
get added, get the key, go.

we build cutting-edge software for smbs that have never built software. a
stop-loss against the firms that would have failed them. one-stop ai-tech
partners. the cost of doing business.

a collective. flat. distributed. lightweight. you book half a person per month,
in half-month chunks, paid half up front and half at the end. no exceptions.
estimates in person-units and wallclock time, min and max. proposals ship as
working mvps you may take to the next firm.

spun from dojo4 cloth, rewoven in the mountains of alaska and colorado. deep dev
for think-tanks, p.e., and .gov. no #vcevil. not accepting clients until march 2027.

hello@mountainhigh.codes
```

A reviewed one-pager rendering of this lives as a Claude artifact (see #59 for the link).

## Company concept (the guild)

A **guild** (not an agency): a consortium of independent, successful generalist-entrepreneurs
(Ara + ex-colleagues like Steve) working at the **bleeding edge of AI**. They **partner with CEO/
visionary entrepreneurs to teach them to build it themselves** — pairing with pros on their
private, in-development systems, not off-the-shelf tools.

- **Ethos:** light-and-fast alpine mountaineering — speedboat vs Titanic; ship in days/weeks.
- **NOT** relaunching under Dojo 4, but **link to / lean on** Dojo 4 hard. (Deciding Dojo 4 reboot
  vs Mountain High → chose Mountain High.)
- **Target:** SMBs that never built software (e.g. a 700-trucker company) — outsourced one-stop
  ai-tech partner; help them run a "mini-saas" if they want. See destroysaas.coop for the logic.

### Economics
- 1099 collective; LLC now → LCA later (tax). Flat, but Ara calls shots initially.
- **Unit billing:** 1 unit ≈ a person. **Min = ½ person/month** (~$6k), paid ½ up front / ½ at end.
  Everyone has 2 chunks/mo; overbooking = 3/mo (~50–60 hr/wk, ~$18k/mo billable). Discount > 6 mos.
- Estimate in **person-units + wallclock** (min & max). Deliverable is **always a repo**.
- Hands-on pairing (idea-studio style): ~2hr blocks, several days/wk; delegate AI tasks each side.

## Run-the-company infra (radically simple)

- **one gh repo** (this one) + **one protonmail inbox** = the whole company. All issues/projects in GH.
- **one cloud provider** (leaning **Cloudflare + R2**, vs S3) for media/storage, separate from GH.
- **one CLI/MCP** to manage the company. Agent-friendly workflow; GH is the backplane / agent memory.
- **Secrets:** 2-way encryption, files checked in — patterns from `ahoward/sekrets` / `ahoward/xenv`.
- **Onboarding:** get added to the repo → get the secret key → go.
- **Tech:** ruby + bunjs for this repo (in flux). Leaning GH + CF for everything.

## Website structure (later / from #59)

- Tumblr-style feed: alpine/nature photos + video, sometimes music, + a Seth-Godin-ish ~3-para blurb.
- Personally branded first (Ara's mountaineering content); call out other members as individuals,
  promote their independent work (loose affiliation is the brand). **Not AI writing.**
- Posts: **nested** URLs (not flat global slugs).
- **Semantic-lens filtering:** organize posts by arbitrary dimensions (color / weather / indoor·outdoor
  / loud·quiet / …). Dynamic, **LLM-classified** — later; static tags first is fine.

## Immediate goals

1. Rebuild the **site** (Astro + git CMS, matching deploystrata — confirm which CMS).
2. Stand up **internal playbooks** here so members PR (a) their bio/raw material, (b) doc edits.
3. Strong **Dojo 4** cross-links.

## Open questions

- Which git-based CMS does deploystrata use? (match it)
- Keep the ruby/`ro` static builder, or move to Astro? (Ara changing stacks)
- Semantic filtering: static tags MVP → LLM-dynamic later.
- CF/R2 vs S3 for media; bunjs vs ruby for the company CLI.
