export function ReadingCheckActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 4, READING CHECK. Edit .c4, .check-desc, .check-row. */}
      <section className="card c4 top-120 left-101.5 h-57 w-95">
        <div className="label -top-4 left-1">
          <div className="num-tab"><svg viewBox="0 0 58 36">
            <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
          </svg><span>4</span></div>
          <div className="label-title">READING CHECK</div>
        </div>
        <div className="check-desc top-[26px] tracking-[1.4px]">Check (✓) if the sentence is true.</div>
        <div className="check-row cr1 top-[70px] left-[20px]">
          <span className="checkbox size-5.5"></span>
          <span className="sentence tracking-[1px]">“dog” has 3 letters.</span>
          <svg
            className="mini absolute right-[-25px] top-[-35px] size-18">
            <use href="#dog" />
          </svg>
        </div>
        <div className="check-row cr2 top-[127px] left-[20px]">
          <span className="checkbox size-5.5"></span>
          <span className="sentence tracking-[1px]">“log” is a CVC word.</span>
          <svg
            className="mini absolute right-[-30px] top-[-26px] size-18">
            <use href="#log" />
          </svg>
        </div>
        <div className="check-row cr3 top-[180px] left-[20px]">
          <span className="checkbox size-5.5"></span>
          <span className="sentence tracking-[1px]">“mop” has 3 letters.</span>
          <svg
            className="mini absolute right-[-21.5px] top-[-21px] size-15 rotate-7">
            <use href="#mop" />
          </svg>
        </div>
      </section>
    </>
  );
}
