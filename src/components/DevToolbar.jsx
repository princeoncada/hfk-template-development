export function DevToolbar({ refOpacity, sheetOpacity, cardOpacity, refOn, gridOn, zonesOn, finalOn, onRefOpacityChange, onSheetOpacityChange, onCardOpacityChange, onToggleRef, onToggleGrid, onToggleZones, onToggleFinal }) {
  return (
    <div className="dev-toolbar rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/10 p-4 text-sm print:hidden">
      <div className="font-bold text-base mb-2">HFK Trace Controls</div>
      <p className="text-xs leading-snug mb-3 text-neutral-600">Use this while manually nudging x/y/w/h values. Final mode hides the reference and tracing helpers.</p>
      <label className="block mb-2 font-semibold" htmlFor="refOpacity">Reference opacity</label>
      <input id="refOpacity" className="w-full accent-black" type="range" min="0" max="1" step="0.02" value={refOpacity} onChange={(event) => onRefOpacityChange(event.target.value)} />
      <label className="block mt-3 mb-2 font-semibold" htmlFor="sheetOpacity">Sheet opacity</label>
      <input id="sheetOpacity" className="w-full accent-black" type="range" min="0.25" max="1" step="0.02" value={sheetOpacity} onChange={(event) => onSheetOpacityChange(event.target.value)} />
      <label className="block mt-3 mb-2 font-semibold" htmlFor="cardOpacity">Card opacity</label>
      <input id="cardOpacity" className="w-full accent-black" type="range" min="0.25" max="1" step="0.02" value={cardOpacity} onChange={(event) => onCardOpacityChange(event.target.value)} />
      <div className="grid grid-cols-2 gap-2 mt-4">
        <button type="button" className="rounded-lg border border-black px-2 py-1 hover:bg-neutral-100" onClick={onToggleRef}>Ref: {refOn ? 'On' : 'Off'}</button>
        <button type="button" className="rounded-lg border border-black px-2 py-1 hover:bg-neutral-100" onClick={onToggleGrid}>Grid: {gridOn ? 'On' : 'Off'}</button>
        <button type="button" className="rounded-lg border border-black px-2 py-1 hover:bg-neutral-100" onClick={onToggleZones}>Zones: {zonesOn ? 'On' : 'Off'}</button>
        <button type="button" className="rounded-lg border border-black px-2 py-1 hover:bg-neutral-100" onClick={onToggleFinal}>Final: {finalOn ? 'On' : 'Off'}</button>
      </div>
      <div className="mt-3 text-[11px] leading-snug text-neutral-500">Run with <code className="bg-neutral-100 px-1 rounded">npm run dev</code>. Vite auto-refreshes HTML/CSS changes.</div>
    </div>
  );
}
