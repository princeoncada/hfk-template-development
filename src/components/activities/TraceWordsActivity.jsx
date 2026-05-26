export function TraceWordsActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 1, TRACE THE WORDS. Edit .c1, .trace-row, .trace-word. */}
      <section className="card c1 top-47 h-66 left-7.5 w-93.25">
        <div className="label -top-3.75 left-1">
          <div className="num-tab"><svg viewBox="0 0 58 36">
            <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
          </svg><span>1</span></div>
          <div className="label-title">TRACE THE WORDS</div>
        </div>
        <div className="trace-row r1">
          <svg className="pic top-[-18px] left-[-4px]">
            <use href="#dog" />
          </svg>
          <svg className="trace-word" viewBox="0 0 220 68">
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="9" x2="210" y2="9" />
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="50" x2="210" y2="50" />
            {/* <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
              strokeLinejoin="round" strokeDasharray="1.5 5"
              d="M63 6v51 M63 38c0-16-28-16-28 0s28 16 28 0 M92 38c0-16 28-16 28 0s-28 16-28 0 M155 38c0-16 29-16 29 0s-29 16-29 0 M184 25v38c0 14-22 15-28 4" /> */}
          </svg>
        </div>
        <div className="trace-row r2">
          <svg className="pic top-[1px] left-[-3px]">
            <use href="#log" />
          </svg>
          <svg className="trace-word top-[6px]" viewBox="0 0 220 68">
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="9" x2="210" y2="9" />
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="50" x2="210" y2="50" />
            {/* <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
              strokeLinejoin="round" strokeDasharray="1.5 5"
              d="M34 6v51 M80 38c0-16 28-16 28 0s-28 16-28 0 M142 38c0-16 29-16 29 0s-29 16-29 0 M171 25v38c0 14-22 15-28 4" /> */}
          </svg>
        </div>
        <div className="trace-row r3">
          <svg className="pic top-[4px] left-[-12px] rotate-7 size-20">
            <use href="#mop" />
          </svg>
          <svg className="trace-word top-[20px]" viewBox="0 0 220 68">
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="9" x2="210" y2="9" />
            <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="50" x2="210" y2="50" />
            {/* <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
              strokeLinejoin="round" strokeDasharray="1.5 5"
              d="M25 57V26c0-16 25-16 25 4v27 M50 31c6-20 32-12 32 10v16 M113 38c0-16 28-16 28 0s-28 16-28 0 M171 63V25 M171 38c0-16 28-16 28 0s-28 16-28 0" /> */}
          </svg>
        </div>
      </section>
    </>
  );
}
