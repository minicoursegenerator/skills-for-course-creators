# Rubric design

Rubrics are scored by a single end-of-conversation LLM call. Clarity here directly controls scoring stability.

## Structure

```html
<edu-rubric>
  <criterion objective="discover-pain" weight="3">
    Full credit (3): learner names a specific pain Sarah owns AND ties it to a process.
    Partial (1-2): learner gets a generic complaint or a pain Sarah doesn't own.
    No credit (0): no pain surfaced or learner supplies the pain instead of eliciting it.
  </criterion>
</edu-rubric>
```

## Rules

- One criterion per objective. No orphans, no duplicates.
- Weight is a positive integer. Sum of weights across all criteria must be in [1, 20]. Higher weight = more important objective.
- Criterion text describes **observable** evidence: words said, numbers given, commitments made. Not "felt" or "seemed".
- Spell out full / partial / zero credit explicitly. LLMs trained on natural language score more consistently when the ladder is written out.

## Weight calibration

| Total weight sum | Use when |
| --- | --- |
| 5–8 | 2–3 objectives of similar importance (quick drills). |
| 9–14 | 3–4 objectives, one of them dominant. |
| 15–20 | 4 objectives with clear importance differences. |

If you find yourself wanting weight > 5 on one objective, split it into two objectives instead.
