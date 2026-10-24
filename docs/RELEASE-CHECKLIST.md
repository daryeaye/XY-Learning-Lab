# Release checks for frontend module and startup changes

These checks are required when changing an app entry, import, shared runtime module or delivered JavaScript URL. They also apply to an artwork task if cache invalidation changes an app script URL. Read the current handoff and AGENTS.md first. For context, [Handoff v25](../Handoff-v25.md) records the duplicate-app incident that motivated these requirements.

## 1. Capture the actual baseline and dependency graph

- Freshly capture active/latest versions, complete modules, settings, bindings, managed asset configuration, schedules and exposure for the main Worker and required artwork service. Fetch current GitHub. Reconcile changes before editing or publishing; use one publisher.
- Start at the real HTML/bootstrap and recursively resolve static imports, re-exports and dynamic imports. Include modules outside the native directory, especially Project 2 integration, plus Gradebook/PDF lazy modules and their back-imports.
- Identify the modules that own application startup and React. Record the canonical entry for each document/rendering tree. Older pinned helpers, model files and CSS remain valid; the gate is shared-runtime consistency, not a blanket ban on older version strings.

## 2. Produce one consistent module set

- Prefer the application's build/dependency machinery where available. For the existing finite derived-body mechanism, construct one explicit alias map from the complete dependency graph. Apply it to every participating module, including Project 2's import back to the main app.
- After edits, traverse the resulting static and dynamic graph again. Every participating module must resolve its app/React back-import to the same canonical URL. Reject two independently bundled app/React owners in the same rendering tree, even if both return valid JavaScript or have similar contents.
- Check all output bodies against their recorded hashes and source guards. Verify relative imports, absolute imports and lazy dependencies. Keep every prior required immutable source object and old public URL.
- Use new URLs for changed immutable bodies. Revalidate the stable bootstrap. Verify an old bootstrap ETag receives the new body after the entry changes; a stale cached entry must not silently mix old/new app runtimes. Never overwrite an immutable URL merely to fix cache symptoms.

## 3. Test the complete signed-in application

Use the normal visible app root and real entry/bootstrap graph. Fictional authenticated APIs and local fixtures are appropriate; do not create or modify production student data for smoke tests.

- Load both teacher and student entry pages, sign in through the ordinary UI with intercepted fictional authentication, then continue beyond the login/home screen.
- Cover the changed feature and shared integration boundaries. For a shared app-entry change, include Project 2 teacher setup at `/playground/teacher/new?unit=2`, a retained/direct project URL, student project display and the relevant Gradebook/PDF lazy views. Exercise navigation and refresh, not only a direct component render.
- Include representative populated project/assignment records. Empty teacher/student HOME fixtures passed during the V25 incident despite two app entries; an empty-dashboard result is insufficient.
- Assert one unique canonical app-entry URL/runtime instance in the document, a nonempty application root with the expected page content, and no unhandled browser exceptions or React errors. Network retries or revalidation of the same URL are not themselves duplicate runtimes. Check for the blink-then-empty-root failure after asynchronous authentication/data resolves. A hidden app root with isolated test components is supplemental coverage only.
- Run the same affected workflows against the actual published public code bodies after activation. Compare their bytes/hashes with the tested package; API data may remain intercepted fictional fixtures. State that scope in the handoff.

## 4. State browser coverage accurately

- Record browser engine, version and viewport/user-agent separately. An iPhone viewport or Safari user-agent in Chromium is not a Safari/WebKit test.
- If actual Safari/WebKit is available, run the relevant phone sign-in, affected route and reload flow there. If it is unavailable, record the limitation and do not claim Safari verification or a Safari-only cause.
- Separate HTTP/server availability, Worker error telemetry, JavaScript loading and authenticated UI health. HTTP 200, a working login page or no Worker crashes cannot by itself clear a blank-page report. A user's failure remains actionable even when anonymous checks pass.

## 5. Preserve data and verify publication

- Confirm the intended code difference and complete preservation of unrelated backend/data handlers. Keep all student work, grades, points, ownership, histories, bank revisions and media. Do not clear browser storage as an unexplained repair step.
- Preserve existing bindings, managed assets and settings unless an authorized change explicitly requires otherwise. Keep the complete 153-image artwork package and all old paths; never replace that service with a partial diagnostic directory.
- Match official dry-run and staged modules with the tested package. Recheck active/latest before activation, respecting current user authorization and any approval-review outcome. Read back active code/configuration and verify affected public assets and workflows on both app domains.
- For YY/shared entry changes, confirm saved outfit/headwear IDs, independent tier ownership, the 047 bare-head URLs, transparent canvas registration, four student/two teacher reaction cycles and −1/+1 CSS-pixel headwear movement remain correct.
- Log the exact version, deployment, hashes, timestamps, scenarios, test data and browser-engine limits. Mark failures and unrun cases explicitly. Update the newest handoff and starting instructions with the current baseline; retain all previous handoffs. GitHub remains documentation/reference only, without bundles, credentials, captures, fixture databases, generated artwork or student records.

## Evidence and model choice

An assertion total, a confident answer, a model label or a high reasoning-effort setting is not a substitute for these scenario checks. Use independent review when it can improve coverage, but show the dependency and workflow evidence. Do not attribute an incident to a model ranking without comparative evidence; record the demonstrated implementation error and verification gap.
