# Skills for Course Creators

A curated directory of practical Agent Skills for educators, L&D teams, instructional designers, and course creators.

This is a small, high-confidence catalog: skills are included because they help create, convert, research, visualize, practice, analyze, or publish learning material. It is not a full scrape of every available skill.

## What are Agent Skills?

Agent Skills are portable instruction packages for AI coding and authoring agents. A skill is usually a folder with a `SKILL.md` file, plus optional scripts, templates, references, and examples. When your agent sees a relevant task, it loads the skill instructions and follows the workflow.

For course creators, this means you can give an agent repeatable production workflows: turn a transcript into a worksheet, convert a lesson draft into a slide deck, analyze learner interview notes, or build an interactive practice scenario.

## How to use this directory

1. Pick the outcome you need from the task guide below.
2. Open the listed skill's source and review its instructions, dependencies, and license.
3. Install it with the source repository's documented command. Many skills support:

```bash
npx skills add owner/repository --skill skill-name
```

For first-party Mini Course Generator skills:

```bash
npx skills add minicoursegenerator/edu-role-play
```

## How to choose a skill

- Create: use `docx`, `pptx`, `xlsx`, `canvas-design`, `hyperframes`, or `edu-role-play` when you need a finished learning asset.
- Research: use `content-research-writer`, `deep-research`, `youtube-full`, or `notebooklm-skill` when source material needs to be gathered, summarized, or grounded.
- Convert: use `pdf`, `docx`, `pptx`, `xlsx`, or `markdown-to-epub-converter` when you need to move between source formats and learner-ready formats.
- Visualize: use `d3js-visualization`, `canvas-design`, or `image-enhancer` for charts, diagrams, visuals, and presentation polish.
- Practice: use `edu-role-play` to create learner-vs-AI scenario practice with objectives and scoring.
- Analyze: use `meeting-insights-analyzer` for transcripts from trainings, coaching sessions, stakeholder interviews, or team meetings.
- Publish: use `google-workspace-skills`, `file-organizer`, and Mini Course Generator to organize assets, collaborate, and deliver courses.

## Featured first-party skills

### edu-role-play

**Best for:** L&D, sales enablement, customer success training, compliance training, educators, instructional designers

Create interactive AI role-play training activities as self-contained HTML. Learners chat with a persona, work toward observable objectives, and receive a scored debrief based on a rubric.

- Install: `npx skills add minicoursegenerator/edu-role-play`
- Local copy in this directory: [`skills/edu-role-play`](skills/edu-role-play)
- Source: <https://github.com/minicoursegenerator/edu-role-play>

## Catalog

The machine-readable source for this list is [`catalog.yml`](catalog.yml).

### Interactive practice

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`edu-role-play`](skills/edu-role-play) | L&D, instructional designer, educator | Build scenario-based practice with AI personas, measurable objectives, and rubric scoring. |

### Course assets

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`docx`](https://github.com/anthropics/skills/tree/main/skills/docx) | instructional designer, course creator | Create and revise handouts, facilitator guides, worksheets, and policy documents. |
| [`pdf`](https://github.com/anthropics/skills/tree/main/skills/pdf) | L&D, educator | Extract, inspect, merge, and annotate PDF source material before turning it into lessons. |
| [`pptx`](https://github.com/anthropics/skills/tree/main/skills/pptx) | trainer, instructional designer | Create and edit slide decks for workshops, webinars, and instructor-led training. |
| [`xlsx`](https://github.com/anthropics/skills/tree/main/skills/xlsx) | learning operations, L&D | Analyze learner data, build trackers, and prepare course planning spreadsheets. |
| [`markdown-to-epub-converter`](https://github.com/smerchek/claude-epub-skill) | course creator, educator | Convert long-form Markdown lessons, research notes, or guides into portable EPUB ebooks. |

### Research and source material

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`content-research-writer`](https://github.com/ComposioHQ/awesome-claude-skills) | course creator, marketer, educator | Research and improve written course content with citations, hooks, outlines, and section feedback. |
| [`deep-research`](https://github.com/eugeniughelbur/obsidian-second-brain) | instructional designer, researcher | Run deeper source gathering from an existing knowledge vault before drafting learning material. |
| [`youtube-full`](https://github.com/ZeroPointRepo/youtube-skills) | educator, course creator | Pull transcripts and video metadata from YouTube source material for summaries, lessons, and quizzes. |
| [`notebooklm-skill`](https://github.com/PleasePrompto/notebooklm-skill) | L&D, researcher, educator | Query NotebookLM notebooks for source-grounded answers from uploaded documents. |

### Training analysis

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`meeting-insights-analyzer`](https://github.com/skillcreatorai/Awesome-Agent-Skills) | L&D, coach, team lead | Analyze transcripts for behavior patterns such as speaking ratios, conflict avoidance, and leadership style. |

### Visual learning

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`d3js-visualization`](https://github.com/ComposioHQ/awesome-claude-skills) | educator, data trainer | Create interactive charts and learning visuals from datasets or concept models. |
| [`hyperframes`](https://github.com/heygen-com/hyperframes) | course creator, trainer, instructional designer | Create HTML-based lesson videos, animated explainers, captions, voiceovers, overlays, and training recaps. |
| [`canvas-design`](https://github.com/skillcreatorai/Awesome-Agent-Skills) | course creator, instructional designer | Create static visual assets for course pages, worksheets, and quick explainers. |
| [`image-enhancer`](https://github.com/skillcreatorai/Awesome-Agent-Skills) | course creator, trainer | Improve screenshots and rough visuals before placing them into lessons or slides. |

### Delivery and productivity

| Skill | Best for | Why it is useful |
| --- | --- | --- |
| [`google-workspace-skills`](https://github.com/ComposioHQ/awesome-claude-skills) | L&D, learning operations | Coordinate Docs, Sheets, Slides, Drive, Calendar, and Gmail workflows around course production. |
| [`file-organizer`](https://github.com/ComposioHQ/awesome-claude-skills) | course creator, learning operations | Organize source files, exports, and course assets into clean project folders. |

## Mini Course Generator

Mini Course Generator helps course creators build and deliver interactive mini-courses, share courses publicly or privately, embed them, and export learning content for training workflows. This directory focuses on complementary Agent Skills that help create the source material, practice activities, and operating workflows around course production.

- Website: <https://minicoursegenerator.com/>
- Skills site: <https://skills.minicoursegenerator.com/>

## Contributing

Submissions are welcome when the skill is genuinely useful for education, training, course creation, or learning operations. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a PR.

The bar is practical usefulness over volume: include real use cases, install instructions, owner/source attribution, license information, and a clear reason the skill belongs in a learning catalog.
