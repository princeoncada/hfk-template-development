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
        <div className="match-desc top-[24px] left-[22px] tracking-[1.4px] w-67">Draw a line to match each picture to its word.</div>
        <svg className="match-pic m1 top-[57px] left-[12px]">
          <use href="#dog" />
        </svg>
        <svg className="match-pic m2 top-[112px] left-[14px]">
          <use href="#log" />
        </svg>
        <svg className="match-pic m3 top-[161px] left-[10px] rotate-7">
          <use href="#mop" />
        </svg>
        <span className="dot left-dot md1 top-[79px] left-[103px]"></span>
        <span className="dot left-dot md2 top-[135px] left-[103px]"></span>
        <span className="dot left-dot md3 top-[189px] left-[103px]"></span>
        <span className="dot right-dot md1 top-[79px] left-[240px]"></span>
        <span className="dot right-dot md2 top-[135px] left-[240px]"></span>
        <span className="dot right-dot md3 top-[189px] left-[240px]"></span>
        <div className="match-word mw1 tracking-[4px] top-[62px] left-[278px]">mop</div>
        <div className="match-word mw2 tracking-[4px] top-[117px] left-[280px]">dog</div>
        <div className="match-word mw3 tracking-[4px] top-[174px] left-[280px]">log</div>
      </section>
    </>
  );
}
