---
name: prd
description: "Generate a Product Requirements Document (PRD) for a new feature, enhancement or optimization. Use when planning a feature, starting a new project, or when asked to create a PRD. Triggers on: create a prd, write prd for, plan this feature, requirements for, spec out."
---

# PRD Generator

Create detailed Product Requirements Documents that are clear, actionable, and suitable for implementation.

---

## The Job

1. Receive a feature description from the user by using AskUserQuestionTool.
2. Ask 3-5 essential clarifying questions and keep interviewing me continually until it is completed and clear (with lettered options).
3. Generate a structured PRD based on answers.
4. Use AskUserQuestionsTool to ask clarifying questions if needed.
5. Save to `./projects/[project-name]/PRD.md`.

**Important constraints (DoR - Definition of Ready):**

1. **NO CODE:** Do NOT generate any implementation code in this step.
2. **STOP & WAIT:** After saving the file, you MUST stop and wait for the user's explicit "Approve" command.
3. **VALIDATION:** The PRD is considered "Ready" only when all clarifying questions are resolved.

---

## Step 1: Clarifying Questions

Ask only critical questions where the initial prompt is ambiguous. Focus on:

- **Problem/Goal:** What problem does this solve?
- **Core Functionality:** What are the key actions?
- **Scope/Boundaries:** What should it NOT do?
- **Success Criteria:** How do we know it's done?

### Format Questions Like This:

```
1. What is the primary goal of this feature?
   A. Improve user onboarding experience
   B. Increase user retention
   C. Reduce support burden
   D. Other: [please specify]

2. Who is the target user?
   A. New users only
   B. Existing users only
   C. All users
   D. Admin users only
   E. Other: [please specify]

3. What is the scope?
   A. Minimal viable version
   B. Full-featured implementation
   C. Just the backend/API
   D. Just the UI
   E. Other: [please specify]
```

This lets users respond with "1A, 2C, 3B" for quick iteration.

---

## Step 2: PRD Structure

Generate the PRD with these sections:

### 1. Introduction/Overview

Brief description of the project, feature, or optimization and the problem it solves.

### 2. Goals

Specific, measurable objectives (bullet list).

### 3. User Stories

Each story needs:

- **ID:** US-XXX(001~)
- **Title:** Short descriptive name
- **Description:** "As a [user], I want [feature] so that [benefit]"
- **Rules:** Backend logic, validation, data handling, and UX behavior constraints that define how the system must behave for this story. Every story MUST have at least one rule.
- **Acceptance Criteria:** Verifiable checklist of what "done" means
- **Dependencies:** List of other stories this depends on

Each story should be small enough to implement in one focused session.

**Format:**

```markdown
### US-001: [Title]

**Description:** As a [user], I want [feature] so that [benefit].

**Rules:**
1. [Input validation, format constraints, or boundary conditions]
2. [Data storage/processing logic]
3. [UI feedback or behavior triggered by backend logic]
4. [Edge case handling]
5. [Security or permission rules, if applicable]

**Acceptance Criteria:**
- [ ] Specific verifiable criterion
- [ ] Another criterion
- [ ] npm run typecheck passes
- [ ] **[UI stories only]** Verify in browser using dev-browser skill

**Dependencies:**
- [ ] Requires US-XXX (Delete if none)
```

**Important:**

- Acceptance criteria must be verifiable, not vague. "Works correctly" is bad. "Button shows confirmation dialog before deleting" is good.
- **For any story with UI changes:** Always include "Verify in browser using dev-browser skill" as acceptance criteria. This ensures visual verification of frontend work.
- **Every user story MUST have Rules.** Rules define the backend logic, validation, and system/UX behavior constraints. They answer "how should the system behave?" rather than "what should it do?".

**Rules should cover (where applicable):**

- **Input validation:** Format, length, allowed characters, required fields
- **Data handling:** What gets stored, in what format, transformations before saving
- **UI feedback:** Error messages, auto-formatting, visual cues triggered by logic
- **Edge cases:** What happens with empty input, duplicates, boundary values
- **Defaults:** Default values, fallback behavior
- **Permissions/Security:** Who can do what, access restrictions
- **Business logic:** Calculations, status transitions, conditional behavior

Rules must be specific and numbered. "Input must be valid" is bad. "Phone number must be exactly 11 digits; non-numeric characters are rejected on input" is good.

### 4. Functional Requirements

Numbered list of specific functionalities:

- "FR-1: The system must allow users to..."
- "FR-2: When a user clicks X, the system must..."

Be explicit and unambiguous.

### 5. Non-Goals (Out of Scope)

What this feature will NOT include. Critical for managing scope.

### 6. Design Considerations (Optional)

- UI/UX requirements
- Link to mockups if available
- Relevant existing components to reuse

### 7. Technical Considerations (Optional)

- Known constraints or dependencies
- Integration points with existing systems
- Performance requirements

### 8. Success Metrics

How will success be measured?

- "Reduce time to complete X by 50%"
- "Increase conversion rate by 10%"

### 9. Open Questions

Remaining questions or areas needing clarification.

---

## Writing for Junior Developers

The PRD reader may be a junior developer or AI agent. Therefore:

- Be explicit and unambiguous
- Avoid jargon or explain it
- Provide enough detail to understand purpose and core logic
- Number requirements for easy reference
- Use concrete examples where helpful

---

## Output

- **Format:** Markdown (`.md`)
- **Location:** `./projects/[project-name]/`
- **Filename:** `PRD.md`

---

## Example PRD

```markdown
# PRD: Task Priority System

## Introduction

Add priority levels to tasks so users can focus on what matters most. Tasks can be marked as high, medium, or low priority, with visual indicators and filtering to help users manage their workload effectively.

## Goals

- Allow assigning priority (high/medium/low) to any task
- Provide clear visual differentiation between priority levels
- Enable filtering and sorting by priority
- Default new tasks to medium priority

## User Stories

### US-001: Add priority field to database

**Description:** As a developer, I need to store task priority so it persists across sessions.

**Rules:**
1. The priority column must only accept one of three values: 'high', 'medium', or 'low'. Any other value must be rejected at the database level.
2. If no priority is provided when creating a task, the system must default to 'medium'.
3. The priority value must be stored as a string enum, not as a numeric value.
4. Existing tasks without a priority value must be backfilled with 'medium' during migration.

**Acceptance Criteria:**
- [ ] Add priority column to tasks table: 'high' | 'medium' | 'low' (default 'medium')
- [ ] Generate and run migration successfully
- [ ] npm run typecheck passes

**Dependencies:**
- [ ] None

### US-002: Display priority indicator on task cards

**Description:** As a user, I want to see task priority at a glance so I know what needs attention first.

**Rules:**
1. The color mapping must be strictly enforced: red for 'high', yellow for 'medium', gray for 'low'. No other color assignments are allowed.
2. If the priority value is null or missing from the API response, the UI must render the 'medium' badge as a fallback rather than showing no badge.
3. The badge must be rendered as a static element — no hover or click interaction is required to see the priority.
4. Icon and color must always appear together; showing only the color without the icon (or vice versa) is not acceptable.

**Acceptance Criteria:**
- [ ] Each task card shows colored priority badge (red=high, yellow=medium, gray=low)
- [ ] Badge includes icon: 🔴 high, 🟡 medium, ⚪ low
- [ ] Priority visible without hovering or clicking
- [ ] npm run typecheck passes
- [ ] Verify in browser using dev-browser skill

**Dependencies:**
- [ ] None

### US-003: Add priority selector to task edit

**Description:** As a user, I want to change a task's priority when editing it.

**Rules:**
1. The dropdown must only show the three valid options: 'High', 'Medium', 'Low'. No blank/empty option is allowed.
2. On opening the edit modal, the dropdown must pre-select the task's current priority value.
3. When the user changes the selection, the system must send an API request immediately (optimistic update) — no separate "Save" button click is required for the priority field.
4. If the API request fails, the dropdown must revert to the previous value and display an error toast notification to the user.
5. While the save request is in flight, the dropdown must be temporarily disabled to prevent duplicate submissions.

**Acceptance Criteria:**
- [ ] Priority dropdown in task edit modal
- [ ] Shows current priority as selected
- [ ] Saves immediately on selection change
- [ ] npm run typecheck passes
- [ ] Verify in browser using dev-browser skill

**Dependencies:**
- [ ] None

### US-004: Filter tasks by priority

**Description:** As a user, I want to filter the task list to see only high-priority items when I'm focused.

**Rules:**
1. The default filter value must be 'All' — showing tasks of every priority level when no filter is explicitly selected.
2. The selected filter must be persisted in the URL query parameter (e.g., `?priority=high`). On page reload, the filter must be restored from the URL.
3. If the URL contains an invalid priority value (e.g., `?priority=urgent`), the system must ignore it and fall back to 'All'.
4. Only one priority filter can be active at a time — multi-select is not supported.
5. When the filter results in zero tasks, the UI must show an empty state message (e.g., "No tasks with this priority") rather than a blank list.
6. Changing the filter must not trigger a full page reload; the task list must update in-place.

**Acceptance Criteria:**
- [ ] Filter dropdown with options: All | High | Medium | Low
- [ ] Filter persists in URL params
- [ ] Empty state message when no tasks match filter
- [ ] npm run typecheck passes
- [ ] Verify in browser using dev-browser skill

**Dependencies:**
- [ ] None

## Functional Requirements

- FR-1: Add `priority` field to tasks table ('high' | 'medium' | 'low', default 'medium')
- FR-2: Display colored priority badge on each task card
- FR-3: Include priority selector in task edit modal
- FR-4: Add priority filter dropdown to task list header
- FR-5: Sort by priority within each status column (high → medium → low)

## Non-Goals

- No priority-based notifications or reminders
- No automatic priority assignment based on due date
- No priority inheritance for subtasks

## Technical Considerations

- Reuse existing badge component with color variants
- Filter state managed via URL search params
- Priority stored in database, not computed

## Success Metrics

- Users can change priority in <2 clicks
- High-priority tasks immediately visible at top of lists
- No regression in task list performance

## Open Questions

- Should priority affect task ordering within a column?
- Should we add keyboard shortcuts for priority changes?
```

---

## Checklist

Before saving the PRD:

- [ ] Asked clarifying questions with lettered options
- [ ] Use AskUserQuestionsTool to ask clarifying questions if needed.
- [ ] Incorporated user's answers
- [ ] User stories are small and specific
- [ ] Every user story has numbered Rules defining backend logic, validation, and UX behavior constraints
- [ ] Functional requirements are numbered and unambiguous
- [ ] Non-goals section defines clear boundaries
- [ ] Saved to `./projects/[project-name]/PRD.md`

---

*Last Updated: 2026-03-09*
