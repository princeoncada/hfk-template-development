export function BeginningConsonantActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 2, CIRCLE THE BEGINNING CONSONANT. Edit .c2, .letters-row, .letter positions. */}
                <section className="card c2 top-[189px] h-[264px] left-[418px] w-[370px]">
                  <div className="label top-[-16px] left-1">
                    <div className="num-tab"><svg viewBox="0 0 58 36">
                        <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
                      </svg><span>2</span></div>
                    <div className="label-title tracking-tight">CIRCLE THE BEGINNING CONSONANT</div>
                  </div>
                  <div className="subtext absolute left-[25px] top-[38px] w-[310px] text-center text-[16.5px] leading-[1.05] whitespace-nowrap">
                    Circle the beginning consonant in each word.</div>
                  <div className="letters-row lr1"><svg className="pic">
                      <use href="#dog" />
                    </svg><span className="letter l1">d</span><span className="letter l2">o</span><span className="letter l3">g</span></div>
                  <div className="letters-row lr2"><svg className="pic">
                      <use href="#log" />
                    </svg><span className="letter l1">l</span><span className="letter l2">o</span><span className="letter l3">g</span></div>
                  <div className="letters-row lr3"><svg className="pic">
                      <use href="#mop" />
                    </svg><span className="letter l1">m</span><span className="letter l2">o</span><span className="letter l3">p</span></div>
                  <svg className="pencil-small">
                    <use href="#pencil" />
                  </svg>
                </section>
    </>
  );
}
