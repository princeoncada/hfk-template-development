import { useEffect, useMemo, useState } from 'react';
import { DevToolbar } from './components/DevToolbar.jsx';
import { MiddleContent } from './components/MiddleContent.jsx';
import { PageFooter } from './components/PageFooter.jsx';
import { PageHeader } from './components/PageHeader.jsx';
import { WorksheetChrome } from './components/WorksheetChrome.jsx';

export function App() {
  const [refOpacity, setRefOpacity] = useState('0.22');
  const [sheetOpacity, setSheetOpacity] = useState('0.78');
  const [cardOpacity, setCardOpacity] = useState('0');
  const [refOn, setRefOn] = useState(true);
  const [gridOn, setGridOn] = useState(false);
  const [zonesOn, setZonesOn] = useState(false);
  const [finalOn, setFinalOn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--reference-opacity', refOn ? refOpacity : 0);
    root.style.setProperty('--sheet-opacity', sheetOpacity);
    root.style.setProperty('--card-opacity', cardOpacity);
  }, [cardOpacity, refOn, refOpacity, sheetOpacity]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      const key = event.key.toLowerCase();
      if (key === 'r') setRefOn((value) => !value);
      if (key === 'g') setGridOn((value) => !value);
      if (key === 'z') setZonesOn((value) => !value);
      if (key === 'f') setFinalOn((value) => !value);
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const sheetClassName = useMemo(() => ['sheet', finalOn ? 'final-mode' : 'trace-mode', gridOn ? 'show-grid' : '', zonesOn ? 'show-zones' : ''].filter(Boolean).join(' '), [finalOn, gridOn, zonesOn]);

  return (
    <>
      <div id="worksheet" className={sheetClassName}>
        <WorksheetChrome />
        <PageHeader />
        <MiddleContent />
        <PageFooter />
      </div>
      <DevToolbar refOpacity={refOpacity} sheetOpacity={sheetOpacity} cardOpacity={cardOpacity} refOn={refOn} gridOn={gridOn} zonesOn={zonesOn} finalOn={finalOn} onRefOpacityChange={setRefOpacity} onSheetOpacityChange={setSheetOpacity} onCardOpacityChange={setCardOpacity} onToggleRef={() => setRefOn((value) => !value)} onToggleGrid={() => setGridOn((value) => !value)} onToggleZones={() => setZonesOn((value) => !value)} onToggleFinal={() => setFinalOn((value) => !value)} />
    </>
  );
}
