export function TinyChallengeActivity() {
  return (
    <>
      {/* ZONE: ACTIVITY 5 + SAY THE SOUNDS. Edit .bottom-card, .tiny-text, .draw-box, .sound-divider, .sounds. */}
                <section className="card bottom-card top-[728px] h-[168px] left-[30px] w-[572px]">
                  <div className="label top-[-13px] left-1">
                    <div className="num-tab"><svg viewBox="0 0 58 36">
                        <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
                      </svg><span>5</span></div>
                    <div className="label-title">TINY CHALLENGE</div>
                  </div>
                  <div className="tiny-text">Draw your favorite short O word and say it!</div>
                  <div className="draw-box"><svg className="tiny-mag">
                      <use href="#magnify" />
                    </svg></div>
                  <div className="sound-divider"></div>
                  <div className="sounds">
                    <div className="sounds-title">Say the sounds:</div>
                    <div className="sound-row"><span className="sound-word">dog</span><span className="sound-arrow">→</span><span
                        className="sound-circle"><span>(first)</span></span><span className="sound-circle"><span>(middle)</span></span><span
                        className="sound-circle"><span>(last)</span></span></div>
                    <div className="sound-row"><span className="sound-word">log</span><span className="sound-arrow">→</span><span
                        className="sound-circle"><span>(first)</span></span><span className="sound-circle"><span>(middle)</span></span><span
                        className="sound-circle"><span>(last)</span></span></div>
                    <div className="sound-row"><span className="sound-word">mop</span><span className="sound-arrow">→</span><span
                        className="sound-circle"><span>(first)</span></span><span className="sound-circle"><span>(middle)</span></span><span
                        className="sound-circle"><span>(last)</span></span></div>
                  </div>
                </section>
    </>
  );
}
