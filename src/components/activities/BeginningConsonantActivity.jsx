export function BeginningConsonantActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 2, CIRCLE THE BEGINNING CONSONANT. Edit .c2, .letters-row, .letter positions. */}
      <section className="card c2 top-47.25 h-66 left-104.5 w-92.5">
        <div className="label -top-4 left-1">
          <div className="num-tab"><svg viewBox="0 0 58 36">
            <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
          </svg><span>2</span></div>
          <div className="label-title tracking-tight">CIRCLE THE BEGINNING CONSONANT</div>
        </div>
        <div className="subtext absolute w-77.5 text-center text-[16.5px] leading-[1.05] whitespace-nowrap top-[27px] left-[34px] tracking-[1.2px]">
          Circle the beginning consonant in each word.</div>
        <div className="letters-row lr1">
          <svg className="pic top-[-27px] left-[-8px]">
            <use href="#dog" />
          </svg>
          <span className="letter l1 top-[-10px] left-[118px]">d</span>
          <span className="letter l2 top-[-10px] left-[193px]">o</span>
          <span className="letter l3 top-[-10px] left-[264px]">g</span>
        </div>
        <div className="letters-row lr2">
          <svg className="pic left-[-8px]">
            <use href="#log" />
          </svg>
          <span className="letter l1 left-[123px]">l</span>
          <span className="letter l2 left-[193px]">o</span>
          <span className="letter l3 left-[263px]">g</span>
        </div>
        <div className="letters-row lr3">
          <svg className="pic left-[-8px] top-[-6px]">
            <use href="#mop" />
          </svg>
          <span className="letter l1 top-[13px] left-[115px]">m</span>
          <span className="letter l2 top-[13px] left-[193px]">o</span>
          <span className="letter l3 top-[13px] left-[264px]">p</span>
        </div>
        <svg className="pencil-small bottom-[2px] right-[6px] rotate-0 size-13">
          <use href="#pencil" />
        </svg>
      </section>
    </>
  );
}
