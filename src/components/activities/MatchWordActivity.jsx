export function MatchWordActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 3, MATCH THE WORD. Edit .c3, .match-desc, .match-pic, .dot, .match-word. */}
      <section className="card c3 top-119.75 left-7.5 w-90.75 h-57">
        <div className="label -top-4 left-1">
          <div className="num-tab"><svg viewBox="0 0 58 36">
            <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
          </svg><span>3</span></div>
          <div className="label-title">MATCH THE WORD</div>
        </div>
        <div className="match-desc">Draw a line to match each picture to its word.</div>
        <svg className="match-pic m1">
          <use href="#dog" />
        </svg><svg className="match-pic m2">
          <use href="#log" />
        </svg><svg className="match-pic m3">
          <use href="#mop" />
        </svg>
        <span className="dot left-dot md1"></span><span className="dot left-dot md2"></span><span className="dot left-dot md3"></span>
        <span className="dot right-dot md1"></span><span className="dot right-dot md2"></span><span
          className="dot right-dot md3"></span>
        <div className="match-word mw1">mop</div>
        <div className="match-word mw2">dog</div>
        <div className="match-word mw3">log</div>
      </section>
    </>
  );
}
