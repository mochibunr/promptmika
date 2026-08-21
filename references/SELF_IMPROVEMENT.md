---
version: 2.1.0
last_updated: 2026-06-09
related:
  - iteration-workflow.md (Step Eight: Self-Improvement)
  - TOKEN_EFFICIENCY.md (token efficiency scoring criterion)
  - CONTEXT_ENGINE.md (consistency enforcement)
---

# Self-Improvement — Multi-Model Critique & Selection

## Philosophy
A single draft is never the best draft. Before delivering any refined prompt to the user, you must subject it to rigorous internal critique, simulate alternative phrasings, and select the absolute best result. This process is invisible to the user. They receive only the winner.

## The Ten-Model Simulation

### Step One: Generate the Baseline
Produce the first refined prompt draft using the standard refinement workflow and token efficiency rules.

### Step Two: Generate Nine Variants
Create nine additional variants of the refined prompt by deliberately varying key dimensions:
- Variant one: more aggressive token compression. Test if meaning survives at ULTRA intensity.
- Variant two: more explicit examples. Test if additional examples improve clarity.
- Variant three: reordered structure. Test if a different block sequence improves comprehension.
- Variant four: expanded constraints. Test if more negative constraints prevent failure modes.
- Variant five: different role framing. Test if an alternative persona produces better target AI behavior.
- Variant six: added cross-skill injection. Test if enriching with design, security, or context knowledge improves output.
- Variant seven: simplified for junior AI. Test if reducing complexity helps weaker models.
- Variant eight: added reasoning depth. Test if more explicit chain-of-thought instructions improve accuracy.
- Variant nine: hybrid approach. Test if combining the best elements of variants one through eight produces a superior synthesis.

### Step Three: Critique Each Variant
For each of the ten variants, evaluate against these criteria:
- Clarity: would any AI model understand every requirement without asking questions
- Completeness: does it cover all seven prompt layers comprehensively
- Measurability: can the output be objectively evaluated against success criteria
- Feasibility: is the prompt asking something an AI can actually deliver
- Token efficiency: does it achieve eighty-five percent or greater savings
- Domain accuracy: are technical terms, patterns, and constraints correct for the domain
- Universal compatibility: does it work in Claude, GPT, Gemini, Llama, and Mistral
- Edge case coverage: does it prevent common failure modes and hallucinations
- Build-Test-Loop strength: for software prompts, is the verification cycle clear and mandatory
- Cross-skill enrichment: for design, security, or context prompts, is the injected knowledge precise and relevant

### Step Four: Score and Rank
Assign a score from one to ten for each criterion per variant. Sum to produce a total score. Rank all ten variants by total score.

### Step Five: Select the Winner
The highest-scoring variant becomes the delivered prompt. If two variants tie, prefer the one with higher token efficiency. If still tied, prefer the one with stronger Build-Test-Loop or cross-skill injection.

### Step Six: Final Polish
Apply a final polish pass to the winner:
- Remove any remaining filler or redundancy
- Verify all cross-skill references are accurate
- Confirm the Build-Test-Loop block is present and correct for software prompts
- Ensure the intensity level is appropriate for the target audience
- Validate that the prompt would produce high-quality output if pasted into any major AI model

## Edge Case Stress Testing

Before finalizing, mentally simulate how the prompt would behave under these stress conditions:
- The target AI has a short context window. Does the prompt still work if truncated?
- The target AI is a weaker model. Does the prompt avoid implicit assumptions?
- The target AI is overeager. Do the constraints prevent it from adding unwanted features?
- The target AI is lazy. Do the success criteria force complete execution?
- The user pastes the prompt into a non-English interface. Are technical terms still universally understood?
- The project evolves mid-generation. Does the prompt include enough context anchors for continuity?

## Meta-Commentary Delivery
After delivering the winning prompt, provide a brief meta-commentary explaining:
- What was added compared to the user's raw input
- Why each addition improves output quality
- Which intensity level was selected and why
- Which cross-skill knowledge was injected and how it helps
- How the Build-Test-Loop ensures delivery quality
- How the prompt achieves token savings
This teaches the user to write better prompts independently over time.
