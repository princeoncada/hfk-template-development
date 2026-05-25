export function ReadingCheckActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 4, READING CHECK. Edit .c4, .check-desc, .check-row. */}
                <section className="card c4 top-[480px] left-[406px] h-[228px] w-[380px]">
                  <div className="label top-[-16px] left-1">
                    <div className="num-tab"><svg viewBox="0 0 58 36">
                        <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
                      </svg><span>4</span></div>
                    <div className="label-title">READING CHECK</div>
                  </div>
                  <div className="check-desc">Check (✓) if the sentence is true.</div>
                  <div className="check-row cr1"><span className="checkbox"></span><span className="sentence">“dog” has 3 letters.</span><svg
                      className="mini">
                      <use href="#dog" />
                    </svg></div>
                  <div className="check-row cr2"><span className="checkbox"></span><span className="sentence">“log” is a CVC word.</span><svg
                      className="mini">
                      <use href="#log" />
                    </svg></div>
                  <div className="check-row cr3"><span className="checkbox"></span><span className="sentence">“mop” has 3 letters.</span><svg
                      className="mini">
                      <use href="#mop" />
                    </svg></div>
                </section>
    </>
  );
}
