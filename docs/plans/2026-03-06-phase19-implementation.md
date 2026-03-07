# Phase 19: Missing UI Feature Panels — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add frontend UI surfaces for 8 backend features that already have APIs but lack UI controls.

**Architecture:** All changes are frontend-only (Svelte 5 components). No server changes needed. Each task wires existing API functions from `switch-api.ts` to new or modified UI components. TDD with Vitest + @testing-library/svelte.

**Tech Stack:** SvelteKit, Svelte 5 runes ($state/$derived/$effect), TypeScript, Vitest, CSS custom properties

---

### Task 1: Complete Keyboard Overlay (19.6)

**Files:**
- Modify: `ui/src/components/KeyboardOverlay.svelte:7-16`
- Test: `ui/src/components/KeyboardOverlay.test.ts`

**Step 1: Write failing test**

In `ui/src/components/KeyboardOverlay.test.ts`, add tests verifying the new shortcuts appear in the rendered output:

```ts
it('displays macro shortcut Ctrl+1-9', () => {
    render(KeyboardOverlay, { props: { visible: true } });
    expect(screen.getByText('Ctrl + 1-9')).toBeInTheDocument();
    expect(screen.getByText('Run macro')).toBeInTheDocument();
});

it('displays tab switching shortcut', () => {
    render(KeyboardOverlay, { props: { visible: true } });
    expect(screen.getByText('Ctrl+Shift + 1-6')).toBeInTheDocument();
    expect(screen.getByText('Switch bottom tab')).toBeInTheDocument();
});

it('displays DSK toggle shortcut', () => {
    render(KeyboardOverlay, { props: { visible: true } });
    expect(screen.getByText('F2')).toBeInTheDocument();
    expect(screen.getByText('Toggle DSK')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/KeyboardOverlay.test.ts`
Expected: FAIL — new shortcut text not found

**Step 3: Implement — add missing shortcuts**

In `ui/src/components/KeyboardOverlay.svelte`, replace the `shortcuts` array (lines 7–16) with a categorized structure:

```ts
const shortcuts = [
    // Switching
    { key: '1-9',              action: 'Select preview source' },
    { key: 'Shift + 1-9',     action: 'Hot-punch to program' },
    { key: 'Space',            action: 'Cut (swap preview → program)' },
    // Transitions
    { key: 'Enter',            action: 'Auto transition (mix/dip)' },
    { key: 'F1',               action: 'Fade to black' },
    { key: 'F2',               action: 'Toggle DSK' },
    // Macros
    { key: 'Ctrl + 1-9',      action: 'Run macro' },
    // Tabs
    { key: 'Ctrl+Shift + 1-6', action: 'Switch bottom tab' },
    // Misc
    { key: '` (backtick)',     action: 'Toggle fullscreen' },
    { key: '?',                action: 'Toggle this overlay' },
    { key: 'Esc',              action: 'Close overlay' },
];
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/KeyboardOverlay.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add missing shortcuts to keyboard overlay (macros, tabs, DSK)
```

---

### Task 2: Confirm Mode Toggle (19.4)

**Files:**
- Modify: `ui/src/components/OutputControls.svelte:10,44-52`
- Test: `ui/src/components/OutputControls.test.ts`

**Step 1: Write failing test**

In `ui/src/components/OutputControls.test.ts`, add:

```ts
import { getConfirmMode, setConfirmMode } from '$lib/state/preferences.svelte';

it('renders confirm toggle button', () => {
    render(OutputControls, { props: { state: mockState } });
    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
});

it('toggles confirm mode on click', async () => {
    setConfirmMode(false);
    render(OutputControls, { props: { state: mockState } });
    const btn = screen.getByRole('button', { name: /confirm/i });
    await fireEvent.click(btn);
    expect(getConfirmMode()).toBe(true);
});

it('shows active state when confirm mode is on', () => {
    setConfirmMode(true);
    render(OutputControls, { props: { state: mockState } });
    const btn = screen.getByRole('button', { name: /confirm/i });
    expect(btn.classList.contains('confirm-active')).toBe(true);
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/OutputControls.test.ts`
Expected: FAIL — button not found

**Step 3: Implement confirm toggle**

In `ui/src/components/OutputControls.svelte`:

Add import at top of script:
```ts
import { getConfirmMode, setConfirmMode } from '$lib/state/preferences.svelte';
```

Add after the SRT button (line 49), before the `{#if switchLayout}` block:

```svelte
<button
    class="header-btn confirm-btn"
    class:confirm-active={getConfirmMode()}
    onclick={() => setConfirmMode(!getConfirmMode())}
    title="Require double-press of Space or Shift+number for hot punches"
>CONFIRM</button>
```

Add CSS:

```css
.confirm-btn {
    font-size: 0.65rem;
    letter-spacing: 0.06em;
}
.confirm-active {
    background: var(--accent-orange-dim);
    color: var(--accent-orange);
    border-color: var(--accent-orange);
}
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/OutputControls.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add confirm mode toggle button to header bar
```

---

### Task 3: FTB Button in Simple Mode (19.7)

**Files:**
- Modify: `ui/src/components/SimpleMode.svelte:3,7-15,139-150,319-326`
- Test: `ui/src/components/SimpleMode.test.ts`

**Step 1: Write failing test**

In `ui/src/components/SimpleMode.test.ts`, add:

```ts
it('renders FTB button', () => {
    render(SimpleMode, { props: { state: mockState } });
    expect(screen.getByRole('button', { name: /fade to black/i })).toBeInTheDocument();
});

it('calls onFTB callback when FTB clicked', async () => {
    const onFTB = vi.fn();
    render(SimpleMode, { props: { state: mockState, onFTB } });
    await fireEvent.click(screen.getByRole('button', { name: /fade to black/i }));
    expect(onFTB).toHaveBeenCalled();
});

it('shows active state when ftbActive is true', () => {
    const activeState = { ...mockState, ftbActive: true };
    render(SimpleMode, { props: { state: activeState } });
    const btn = screen.getByRole('button', { name: /fade to black/i });
    expect(btn.classList.contains('ftb-active')).toBe(true);
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/SimpleMode.test.ts`
Expected: FAIL — FTB button not found

**Step 3: Implement FTB button**

In `ui/src/components/SimpleMode.svelte`:

1. Add `fadeToBlack` to import on line 3:
```ts
import { setPreview, cut, startTransition, fadeToBlack, apiCall } from '$lib/api/switch-api';
```

2. Add `onFTB` to Props interface (after `onDissolve`):
```ts
onFTB?: () => void;
```

3. Add to destructuring:
```ts
let { state, onSwitchLayout, onCanvasReady, onPreview, onCut, onDissolve, onFTB } = $props<Props>();
```

4. Add handler function:
```ts
function handleFTB() {
    if (onFTB) {
        onFTB();
    } else {
        apiCall(fadeToBlack(), 'FTB');
    }
}
```

5. Add third button in `.action-buttons` section (after DISSOLVE button, before `</section>`):
```svelte
<button
    class="action-btn ftb-btn"
    class:ftb-active={state.ftbActive}
    onclick={handleFTB}
>
    FADE TO BLACK
</button>
```

6. Update `.action-buttons` CSS grid from `1fr 1fr` to `1fr 1fr 1fr`.

7. Add FTB CSS:
```css
.ftb-btn {
    background: var(--accent-orange-dim);
    color: var(--accent-orange);
    border: 1px solid color-mix(in srgb, var(--accent-orange) 30%, transparent);
}
.ftb-btn:hover {
    background: color-mix(in srgb, var(--accent-orange) 25%, transparent);
}
.ftb-active {
    background: var(--accent-orange);
    color: var(--text-on-color);
    animation: ftb-pulse 1s ease-in-out infinite;
}
@keyframes ftb-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/SimpleMode.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add FTB button to simple mode
```

---

### Task 4: Simple Mode Source Health Indicators (19.8)

**Files:**
- Modify: `ui/src/components/SimpleMode.svelte:127-137`
- Test: `ui/src/components/SimpleMode.test.ts`

**Step 1: Write failing test**

In `ui/src/components/SimpleMode.test.ts`, add:

```ts
it('dims source button when stale', () => {
    const staleState = { ...mockState, sources: { cam1: { key: 'cam1', status: 'stale', position: 1 } } };
    render(SimpleMode, { props: { state: staleState } });
    const btn = screen.getByRole('button', { name: /cam1/i });
    expect(btn.classList.contains('source-stale')).toBe(true);
});

it('disables source button when offline', () => {
    const offlineState = { ...mockState, sources: { cam1: { key: 'cam1', status: 'offline', position: 1 } } };
    render(SimpleMode, { props: { state: offlineState } });
    const btn = screen.getByRole('button', { name: /cam1/i });
    expect(btn).toBeDisabled();
    expect(btn.textContent).toContain('OFFLINE');
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/SimpleMode.test.ts`
Expected: FAIL — class/disabled not present

**Step 3: Implement health indicators**

In `ui/src/components/SimpleMode.svelte`, update the source button (lines 127–137):

```svelte
<section class="source-buttons">
    {#each sourceKeys as key, i}
        {@const health = state.sources[key]?.status}
        <button
            class="source-btn {tallyClass(key)}"
            class:source-stale={health === 'stale' || health === 'no_signal'}
            class:source-offline={health === 'offline'}
            onclick={() => handleSourceClick(key)}
            disabled={health === 'offline'}
        >
            <span class="source-number">{i + 1}</span>
            {#if health === 'offline'}
                <span class="offline-overlay">OFFLINE</span>
            {:else}
                {state.sources[key].label || key}
            {/if}
            {#if health === 'stale' || health === 'no_signal'}
                <span class="health-warning">⚠</span>
            {/if}
        </button>
    {/each}
</section>
```

Add CSS:
```css
.source-stale {
    opacity: 0.6;
}
.source-offline {
    opacity: 0.3;
    pointer-events: none;
}
.offline-overlay {
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    color: var(--text-secondary);
}
.health-warning {
    position: absolute;
    top: 2px;
    right: 4px;
    font-size: 0.6rem;
}
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/SimpleMode.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add source health indicators to simple mode
```

---

### Task 5: Compressor Bypass Toggle (19.5)

**Files:**
- Modify: `ui/src/components/AudioMixer.svelte:279-457`
- Test: `ui/src/components/AudioMixer.test.ts`

**Step 1: Write failing test**

In `ui/src/components/AudioMixer.test.ts`, add:

```ts
it('renders compressor ON toggle when expanded', () => {
    render(AudioMixer, { props: expandedProps('cam1') });
    expect(screen.getByRole('button', { name: /compressor on/i })).toBeInTheDocument();
});

it('dims compressor sliders when bypassed', async () => {
    render(AudioMixer, { props: expandedProps('cam1') });
    const toggleBtn = screen.getByRole('button', { name: /compressor on/i });
    await fireEvent.click(toggleBtn);
    const compSection = document.querySelector('.comp-section');
    expect(compSection?.classList.contains('comp-bypassed')).toBe(true);
});
```

Where `expandedProps` is a helper that provides mock state with the channel expanded (check existing test file for the pattern).

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/AudioMixer.test.ts`
Expected: FAIL — button not found

**Step 3: Implement compressor bypass**

In `ui/src/components/AudioMixer.svelte`:

1. Add per-channel bypass state in the script section (near line 40):
```ts
let compBypass: Record<string, boolean> = $state({});
let compSaved: Record<string, { threshold: number; ratio: number; attack: number; release: number; makeupGain: number }> = $state({});
```

2. Add toggle handler:
```ts
function toggleCompBypass(source: string, channel: AudioChannel) {
    const isBypassed = compBypass[source] ?? false;
    if (!isBypassed) {
        // Save current values and send bypass
        compSaved[source] = {
            threshold: channel.compressor.threshold,
            ratio: channel.compressor.ratio,
            attack: channel.compressor.attack,
            release: channel.compressor.release,
            makeupGain: channel.compressor.makeupGain,
        };
        compBypass[source] = true;
        applyResult(apiSetCompressor(source, channel.compressor.threshold, 1.0, channel.compressor.attack, channel.compressor.release, 0));
    } else {
        // Restore saved values
        const saved = compSaved[source];
        if (saved) {
            applyResult(apiSetCompressor(source, saved.threshold, saved.ratio, saved.attack, saved.release, saved.makeupGain));
        }
        compBypass[source] = false;
    }
}
```

3. In the comp-section (line 360), add the ON toggle before the first param row:
```svelte
<div class="comp-section" class:comp-bypassed={compBypass[key]}>
    <div class="section-header">
        <span class="section-title">COMP</span>
        <button
            class="bypass-toggle"
            class:bypass-active={!compBypass[key]}
            onclick={() => toggleCompBypass(key, channel)}
            aria-label="Compressor {compBypass[key] ? 'off' : 'on'}"
        >ON</button>
    </div>
```

4. Add CSS:
```css
.comp-bypassed .comp-param {
    opacity: 0.4;
    pointer-events: none;
}
.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.bypass-toggle {
    font-size: 0.55rem;
    padding: 1px 5px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
    background: var(--bg-control);
    color: var(--text-secondary);
    cursor: pointer;
    font-family: var(--font-ui);
    font-weight: 600;
    letter-spacing: 0.06em;
}
.bypass-active {
    background: color-mix(in srgb, var(--accent-green, #4caf50) 20%, transparent);
    color: var(--accent-green, #4caf50);
    border-color: var(--accent-green, #4caf50);
}
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/AudioMixer.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add compressor bypass toggle to audio mixer
```

---

### Task 6: Source Delay Configuration (19.2)

**Files:**
- Modify: `ui/src/components/AudioMixer.svelte:455-457` (after compressor, before closing expanded section)
- Modify: `ui/src/components/SourceTile.svelte:106-108`
- Test: `ui/src/components/AudioMixer.test.ts`
- Test: `ui/src/components/SourceTile.test.ts`

**Step 1: Write failing tests**

In `ui/src/components/AudioMixer.test.ts`:
```ts
it('renders delay slider when expanded', () => {
    render(AudioMixer, { props: expandedProps('cam1') });
    expect(screen.getByLabelText(/source delay/i)).toBeInTheDocument();
});
```

In `ui/src/components/SourceTile.test.ts`:
```ts
it('shows delay badge when delayMs > 0', () => {
    const source = { key: 'cam1', status: 'healthy', position: 1, delayMs: 40 };
    render(SourceTile, { props: { source, tally: 'none', index: 0 } });
    expect(screen.getByText('D:40ms')).toBeInTheDocument();
});

it('hides delay badge when delayMs is 0', () => {
    const source = { key: 'cam1', status: 'healthy', position: 1, delayMs: 0 };
    render(SourceTile, { props: { source, tally: 'none', index: 0 } });
    expect(screen.queryByText(/D:\d+ms/)).not.toBeInTheDocument();
});
```

**Step 2: Run tests to verify they fail**

Run: `cd ui && npx vitest run src/components/AudioMixer.test.ts src/components/SourceTile.test.ts`
Expected: FAIL

**Step 3: Implement delay slider and badge**

In `ui/src/components/AudioMixer.svelte`:

1. Add import at top: `import { setSourceDelay } from '$lib/api/switch-api';`

2. Add throttled setter:
```ts
const setDelayThrottled = throttle((source: string, delayMs: number) => {
    applyResult(setSourceDelay(source, delayMs));
}, 50);
```

3. After the comp-section closing `</div>` (around line 455), before `</div><!-- eq-comp-section -->`, add:
```svelte
<!-- Source Delay -->
<div class="delay-section">
    <div class="section-header">
        <span class="section-title">DELAY</span>
        <span class="param-value">{state.sources?.[key]?.delayMs ?? 0}ms</span>
    </div>
    <input
        type="range"
        class="eq-slider"
        min="0"
        max="500"
        step="1"
        value={state.sources?.[key]?.delayMs ?? 0}
        oninput={(e) => setDelayThrottled(key, parseInt(e.currentTarget.value))}
        aria-label="Source delay"
    />
</div>
```

4. Add CSS:
```css
.delay-section {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-top: 1px solid var(--border-subtle);
    padding-top: 6px;
    margin-top: 3px;
}
```

In `ui/src/components/SourceTile.svelte`, after the `.tile-status` span (line 106), add:

```svelte
{#if source.delayMs && source.delayMs > 0}
    <span class="delay-badge">D:{source.delayMs}ms</span>
{/if}
```

Add CSS:
```css
.delay-badge {
    position: absolute;
    bottom: 2px;
    left: 3px;
    font-size: 0.5rem;
    font-family: var(--font-mono);
    color: var(--accent-orange);
    background: rgba(0, 0, 0, 0.6);
    padding: 0 2px;
    border-radius: 2px;
}
```

**Step 4: Run tests to verify they pass**

Run: `cd ui && npx vitest run src/components/AudioMixer.test.ts src/components/SourceTile.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add source delay slider to audio mixer and delay badge to source tiles
```

---

### Task 7: Stinger Upload UI (19.3)

**Files:**
- Modify: `ui/src/components/TransitionControls.svelte:3,20-21,171-180`
- Test: `ui/src/components/TransitionControls.test.ts`

**Step 1: Write failing test**

In `ui/src/components/TransitionControls.test.ts`:
```ts
it('renders upload button when stinger type selected', async () => {
    render(TransitionControls, { props: stingerProps() });
    // Need to select stinger type first, then check for upload button
    expect(screen.getByRole('button', { name: /upload stinger/i })).toBeInTheDocument();
});

it('renders delete button for each stinger', () => {
    render(TransitionControls, { props: stingerPropsWithNames(['intro', 'outro']) });
    const deleteBtns = screen.getAllByRole('button', { name: /delete stinger/i });
    expect(deleteBtns.length).toBe(2);
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/TransitionControls.test.ts`
Expected: FAIL

**Step 3: Implement stinger upload/delete UI**

In `ui/src/components/TransitionControls.svelte`:

1. Add imports on line 3:
```ts
import { cut, startTransition, setTransitionPosition, fadeToBlack, listStingers, uploadStinger, deleteStinger, apiCall } from '$lib/api/switch-api';
```

2. Add state variables after line 21:
```ts
let uploading = $state(false);
let fileInput: HTMLInputElement;
let showDeleteConfirm = $state('');
```

3. Add upload handler:
```ts
async function handleUpload() {
    const file = fileInput?.files?.[0];
    if (!file) return;
    const name = file.name.replace(/\.zip$/i, '');
    uploading = true;
    try {
        await uploadStinger(name, file);
        const names = await listStingers();
        stingerNames = names;
        if (!stingerName && names.length > 0) stingerName = names[0];
    } catch (err) {
        apiCall(Promise.reject(err), 'Upload stinger');
    } finally {
        uploading = false;
        if (fileInput) fileInput.value = '';
    }
}

async function handleDeleteStinger(name: string) {
    try {
        await deleteStinger(name);
        stingerNames = stingerNames.filter(n => n !== name);
        if (stingerName === name) stingerName = stingerNames[0] ?? '';
    } catch (err) {
        apiCall(Promise.reject(err), 'Delete stinger');
    }
    showDeleteConfirm = '';
}
```

4. Replace the stinger select section (lines 171-180) with:
```svelte
{#if transType === 'stinger'}
    <div class="stinger-controls">
        <select class="stinger-select" aria-label="Stinger clip" bind:value={stingerName}>
            {#each stingerNames as name}
                <option value={name}>{name}</option>
            {/each}
            {#if stingerNames.length === 0}
                <option value="" disabled>No stingers loaded</option>
            {/if}
        </select>
        <button
            class="stinger-action-btn"
            onclick={() => fileInput.click()}
            disabled={uploading}
            title="Upload stinger (.zip)"
            aria-label="Upload stinger"
        >{uploading ? '...' : '↑'}</button>
        {#if stingerName}
            <button
                class="stinger-action-btn stinger-delete-btn"
                onclick={() => showDeleteConfirm = stingerName}
                title="Delete {stingerName}"
                aria-label="Delete stinger"
            >✕</button>
        {/if}
        <input
            bind:this={fileInput}
            type="file"
            accept=".zip"
            onchange={handleUpload}
            style="display:none"
        />
    </div>
    {#if showDeleteConfirm}
        <div class="delete-confirm">
            <span>Delete "{showDeleteConfirm}"?</span>
            <button class="confirm-yes" onclick={() => handleDeleteStinger(showDeleteConfirm)}>Yes</button>
            <button class="confirm-no" onclick={() => showDeleteConfirm = ''}>No</button>
        </div>
    {/if}
{/if}
```

5. Add CSS:
```css
.stinger-controls {
    display: flex;
    align-items: center;
    gap: 4px;
}
.stinger-action-btn {
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
    background: var(--bg-control);
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.stinger-action-btn:hover {
    background: var(--bg-hover);
}
.stinger-delete-btn:hover {
    color: var(--tally-program);
    border-color: var(--tally-program);
}
.delete-confirm {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.6rem;
    color: var(--text-secondary);
    margin-top: 4px;
}
.confirm-yes {
    font-size: 0.6rem;
    padding: 1px 6px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--tally-program);
    background: transparent;
    color: var(--tally-program);
    cursor: pointer;
}
.confirm-no {
    font-size: 0.6rem;
    padding: 1px 6px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-subtle);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
}
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/TransitionControls.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add stinger upload and delete UI to transition controls
```

---

### Task 8: Preset Panel — Component (19.1a)

**Files:**
- Create: `ui/src/components/PresetPanel.svelte`
- Test: `ui/src/components/PresetPanel.test.ts`

**Step 1: Write failing test**

Create `ui/src/components/PresetPanel.test.ts`:

```ts
import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PresetPanel from './PresetPanel.svelte';

// Mock the API module
vi.mock('$lib/api/switch-api', () => ({
    listPresets: vi.fn().mockResolvedValue([]),
    createPreset: vi.fn().mockResolvedValue({ id: '1', name: 'Test' }),
    recallPreset: vi.fn().mockResolvedValue({ preset: { id: '1', name: 'Test' } }),
    deletePreset: vi.fn().mockResolvedValue(undefined),
    apiCall: vi.fn(),
}));

describe('PresetPanel', () => {
    it('renders save button', () => {
        render(PresetPanel);
        expect(screen.getByRole('button', { name: /save preset/i })).toBeInTheDocument();
    });

    it('shows empty state when no presets', () => {
        render(PresetPanel);
        expect(screen.getByText(/no presets saved/i)).toBeInTheDocument();
    });

    it('shows name input when save button clicked', async () => {
        render(PresetPanel);
        await fireEvent.click(screen.getByRole('button', { name: /save preset/i }));
        expect(screen.getByPlaceholderText(/preset name/i)).toBeInTheDocument();
    });
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/PresetPanel.test.ts`
Expected: FAIL — module not found

**Step 3: Implement PresetPanel component**

Create `ui/src/components/PresetPanel.svelte`:

```svelte
<script lang="ts">
    import { listPresets, createPreset, recallPreset, deletePreset, apiCall } from '$lib/api/switch-api';
    import type { Preset } from '$lib/api/types';

    interface Props {
        onStateUpdate?: (state: import('$lib/api/types').ControlRoomState) => void;
    }
    let { onStateUpdate } = $props<Props>();

    let presets = $state<Preset[]>([]);
    let saving = $state(false);
    let presetName = $state('');
    let deleteConfirmId = $state('');

    $effect(() => {
        loadPresets();
    });

    async function loadPresets() {
        try {
            presets = await listPresets();
        } catch {
            // API may not be available yet
        }
    }

    async function handleSave() {
        if (!presetName.trim()) return;
        try {
            await createPreset(presetName.trim());
            presetName = '';
            saving = false;
            await loadPresets();
        } catch (err) {
            apiCall(Promise.reject(err), 'Save preset');
        }
    }

    async function handleRecall(id: string) {
        try {
            const resp = await recallPreset(id);
            if (resp.warnings?.length) {
                // Could show warnings as toasts
            }
        } catch (err) {
            apiCall(Promise.reject(err), 'Recall preset');
        }
    }

    async function handleDelete(id: string) {
        try {
            await deletePreset(id);
            deleteConfirmId = '';
            await loadPresets();
        } catch (err) {
            apiCall(Promise.reject(err), 'Delete preset');
        }
    }

    function formatDate(dateStr: string): string {
        try {
            const d = new Date(dateStr);
            return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        } catch {
            return '';
        }
    }
</script>

<div class="preset-panel">
    <div class="preset-header">
        {#if saving}
            <input
                class="preset-name-input"
                type="text"
                placeholder="Preset name"
                bind:value={presetName}
                onkeydown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') { saving = false; presetName = ''; } }}
            />
            <button class="preset-btn save-confirm" onclick={handleSave} disabled={!presetName.trim()}>Save</button>
            <button class="preset-btn save-cancel" onclick={() => { saving = false; presetName = ''; }}>Cancel</button>
        {:else}
            <button class="preset-btn save-btn" onclick={() => saving = true} aria-label="Save preset">Save Preset</button>
        {/if}
    </div>

    {#if presets.length === 0}
        <div class="empty-state">No presets saved</div>
    {:else}
        <div class="preset-list">
            {#each presets as preset}
                <div class="preset-card">
                    <button class="preset-recall" onclick={() => handleRecall(preset.id)} title="Recall {preset.name}">
                        <span class="preset-name">{preset.name}</span>
                        <span class="preset-date">{formatDate(preset.createdAt)}</span>
                    </button>
                    {#if deleteConfirmId === preset.id}
                        <div class="delete-inline">
                            <span>Delete?</span>
                            <button class="preset-btn confirm-yes" onclick={() => handleDelete(preset.id)}>Yes</button>
                            <button class="preset-btn confirm-no" onclick={() => deleteConfirmId = ''}>No</button>
                        </div>
                    {:else}
                        <button class="preset-btn delete-btn" onclick={() => deleteConfirmId = preset.id} aria-label="Delete preset {preset.name}">✕</button>
                    {/if}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .preset-panel {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        height: 100%;
    }
    .preset-header {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .preset-name-input {
        flex: 1;
        background: var(--bg-control);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
        font-family: var(--font-ui);
        font-size: 0.7rem;
        padding: 4px 8px;
    }
    .preset-name-input:focus {
        outline: none;
        border-color: var(--accent-blue);
    }
    .preset-btn {
        font-size: 0.6rem;
        font-family: var(--font-ui);
        font-weight: 600;
        letter-spacing: 0.06em;
        padding: 3px 8px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border-subtle);
        background: var(--bg-control);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .preset-btn:hover {
        background: var(--bg-hover);
    }
    .save-btn {
        background: color-mix(in srgb, var(--accent-blue) 15%, transparent);
        color: var(--accent-blue);
        border-color: color-mix(in srgb, var(--accent-blue) 30%, transparent);
    }
    .save-confirm {
        background: color-mix(in srgb, var(--accent-blue) 15%, transparent);
        color: var(--accent-blue);
        border-color: var(--accent-blue);
    }
    .save-confirm:disabled {
        opacity: 0.4;
        cursor: default;
    }
    .empty-state {
        text-align: center;
        color: var(--text-tertiary);
        font-size: 0.7rem;
        padding: 24px 0;
    }
    .preset-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        overflow-y: auto;
        flex: 1;
    }
    .preset-card {
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .preset-recall {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 10px;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border-subtle);
        background: var(--bg-elevated);
        cursor: pointer;
        text-align: left;
        color: var(--text-primary);
    }
    .preset-recall:hover {
        background: var(--bg-hover);
        border-color: var(--border-default);
    }
    .preset-name {
        font-size: 0.7rem;
        font-family: var(--font-ui);
        font-weight: 600;
    }
    .preset-date {
        font-size: 0.55rem;
        font-family: var(--font-mono);
        color: var(--text-tertiary);
    }
    .delete-btn {
        color: var(--text-tertiary);
        border-color: transparent;
        background: transparent;
    }
    .delete-btn:hover {
        color: var(--tally-program);
    }
    .delete-inline {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.55rem;
        color: var(--text-secondary);
    }
    .confirm-yes {
        color: var(--tally-program);
        border-color: var(--tally-program);
    }
</style>
```

**Step 4: Run test to verify it passes**

Run: `cd ui && npx vitest run src/components/PresetPanel.test.ts`
Expected: PASS

**Step 5: Commit**

```
feat: add PresetPanel component for preset save/recall/delete
```

---

### Task 9: Preset Panel — Wire to BottomTabs (19.1b)

**Files:**
- Modify: `ui/src/components/BottomTabs.svelte:9,29`
- Modify: `ui/src/routes/+page.svelte:20-26,463-498`
- Test: `ui/src/components/BottomTabs.test.ts`

**Step 1: Write failing test**

In `ui/src/components/BottomTabs.test.ts`, add:

```ts
it('renders Presets tab', () => {
    render(BottomTabs, { props: { children: snippetFn } });
    expect(screen.getByRole('tab', { name: /presets/i })).toBeInTheDocument();
});

it('responds to Ctrl+Shift+6 for Presets tab', async () => {
    render(BottomTabs, { props: { children: snippetFn } });
    await fireEvent.keyDown(document, { key: '6', code: 'Digit6', ctrlKey: true, shiftKey: true });
    const tab = screen.getByRole('tab', { name: /presets/i });
    expect(tab.getAttribute('aria-selected')).toBe('true');
});
```

**Step 2: Run test to verify it fails**

Run: `cd ui && npx vitest run src/components/BottomTabs.test.ts`
Expected: FAIL

**Step 3: Implement — add Presets tab**

In `ui/src/components/BottomTabs.svelte`:

1. Line 9 — Add `'Presets'` to the tabs array:
```ts
const tabs = ['Audio', 'Graphics', 'Macros', 'Keys', 'Replay', 'Presets'] as const;
```

2. Line 29 — Update keyboard shortcut regex:
```ts
const match = e.code.match(/^Digit([1-6])$/);
```

In `ui/src/routes/+page.svelte`:

1. Add import (near line 20):
```ts
import PresetPanel from '../components/PresetPanel.svelte';
```

2. In the BottomTabs snippet (around line 494), before `{/if}`, add:
```svelte
{:else if activeTab === 'Presets'}
    <div class="tab-panel">
        <PresetPanel onStateUpdate={handleStateUpdate} />
    </div>
```

**Step 4: Run tests to verify they pass**

Run: `cd ui && npx vitest run src/components/BottomTabs.test.ts`
Expected: PASS

**Step 5: Run all frontend tests**

Run: `cd ui && npx vitest run`
Expected: All tests PASS

**Step 6: Commit**

```
feat: wire PresetPanel to BottomTabs as 6th tab with Ctrl+Shift+6 shortcut
```

---

### Task 10: Final Verification

**Step 1: Run all frontend tests**

Run: `cd ui && npx vitest run`
Expected: All tests PASS (existing ~495 + new tests)

**Step 2: Run E2E tests**

Run: `cd ui && npx playwright test`
Expected: All PASS

**Step 3: Run Go tests (ensure nothing broken)**

Run: `cd server && go test ./... -race`
Expected: All PASS

**Step 4: Build check**

Run: `cd ui && npm run build`
Expected: Clean build, no TypeScript errors

**Step 5: Commit any fixes if needed, then update CLAUDE.md**

Update CLAUDE.md "Current State" section to reflect Phase 19 completion. Add test count updates. Update "What works" list.

```
docs: update CLAUDE.md for Phase 19 completion
```
