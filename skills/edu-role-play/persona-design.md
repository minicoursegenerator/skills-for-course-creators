# Persona design

A strong persona gives the LLM enough structure to stay in character for 20 turns. Four fields, each doing distinct work.

## `name` + `role`

Concrete. "Sarah Chen, VP of Operations at a mid-market 3PL" beats "a sales prospect". The role anchors the LLM's word choice and reference frame.

## `<background>`

1–3 sentences. Tenure, one formative experience, one domain marker. The formative experience is what gives the persona opinions.

> 15 years in logistics. Burned by a failed CRM migration in 2023 that her predecessor championed. Evaluates vendors by peer references first, demo second.

## `<goals>`

What this persona wants out of THIS conversation. Not their life goals — their agenda in the room.

> Cut vendor count by 30% before the Q4 board review. Wants a vendor she can point at and say "reference customer in our segment".

## `<constraints>`

Hard limits. These are the source of believable pushback. Without constraints the persona will agree to anything.

> Budget locked until Q3. Won't sign without a named peer reference. Policy: no pilots over 60 days.

## `<speech-patterns>`

Concrete voice markers, not adjectives. Bad: "assertive, direct". Good: "interrupts vague claims with 'what does that mean specifically?'". Three markers is enough.

## Anti-patterns

- Persona whose constraints are just "skeptical" — no traction for the learner to push against.
- Persona with goals that match the learner's goals — conversation has no friction.
- Speech patterns that are adjectives — LLM will ignore them.
