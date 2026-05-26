export function TinyChallengeActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 5 + SAY THE SOUNDS. Edit .bottom-card, .tiny-text, .draw-box, .sound-divider, .sounds. */}
      <section className="card bottom-card top-182 h-42 left-7.5 w-143">
        <div className="label -top-3.25 left-1">
          <div className="num-tab"><svg viewBox="0 0 58 36">
            <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
          </svg><span>5</span></div>
          <div className="label-title">TINY CHALLENGE</div>
        </div>
        <div className="tiny-text top-[28px] left-[20px] w-64 tracking-[0.7px] text-[18px]">Draw your favorite short O word and say it!</div>
        <div className="draw-box bottom-[6px] left-[11px] h-[83px] w-[251px]">
          <svg className="tiny-mag size-14 -left-[13px] -bottom-[13px]">
            <use href="#magnify" />
          </svg></div>
        <div className="sound-divider left-[277px] top-[7px]"></div>
        <div className="sounds top-[6px] left-[307px]">
          <div className="sounds-title text-[18px] tracking-[0.8px]">Say the sounds:</div>
          <div className="sound-row h-[45px] space-x-2 -mt-0.5">
            <span className="sound-word">
              dog
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (first)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (middle)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (last)
              </span>
            </span>
          </div>
          <div className="sound-row h-[45px] space-x-2">
            <span className="sound-word">
              log
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (first)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (middle)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (last)
              </span>
            </span>
          </div>
          <div className="sound-row h-[45px] space-x-2">
            <span className="sound-word">
              mop
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (first)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (middle)
              </span>
            </span>
            <span className="sound-arrow">→</span>
            <span className="sound-circle">
              <span>
                (last)
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
