export function MiddleContent() {
  return (
    <>
      {/* ZONE: ACTIVITY 1, TRACE THE WORDS. Edit .c1, .trace-row, .trace-word. */}
          <section className="card c1">
            <div className="label">
              <div className="num-tab"><svg viewBox="0 0 58 36">
                  <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
                </svg><span>1</span></div>
              <div className="label-title">TRACE THE WORDS</div>
            </div>
            <div className="trace-row r1">
              <svg className="pic">
                <use href="#dog" />
              </svg>
              <svg className="trace-word" viewBox="0 0 220 68">
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="18" x2="210" y2="18" />
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="52" x2="210" y2="52" />
                <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
                  strokeLinejoin="round" strokeDasharray="1.5 5"
                  d="M63 6v51 M63 38c0-16-28-16-28 0s28 16 28 0 M92 38c0-16 28-16 28 0s-28 16-28 0 M155 38c0-16 29-16 29 0s-29 16-29 0 M184 25v38c0 14-22 15-28 4" />
              </svg>
            </div>
            <div className="trace-row r2">
              <svg className="pic">
                <use href="#log" />
              </svg>
              <svg className="trace-word" viewBox="0 0 220 68">
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="18" x2="210" y2="18" />
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="52" x2="210" y2="52" />
                <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
                  strokeLinejoin="round" strokeDasharray="1.5 5"
                  d="M34 6v51 M80 38c0-16 28-16 28 0s-28 16-28 0 M142 38c0-16 29-16 29 0s-29 16-29 0 M171 25v38c0 14-22 15-28 4" />
              </svg>
            </div>
            <div className="trace-row r3">
              <svg className="pic">
                <use href="#mop" />
              </svg>
              <svg className="trace-word" viewBox="0 0 220 68">
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="18" x2="210" y2="18" />
                <line className="trace-guide" stroke="#888" strokeWidth="1" x1="0" y1="52" x2="210" y2="52" />
                <path className="trace-path" fill="none" stroke="#111" strokeWidth="2.05" strokeLinecap="round"
                  strokeLinejoin="round" strokeDasharray="1.5 5"
                  d="M25 57V26c0-16 25-16 25 4v27 M50 31c6-20 32-12 32 10v16 M113 38c0-16 28-16 28 0s-28 16-28 0 M171 63V25 M171 38c0-16 28-16 28 0s-28 16-28 0" />
              </svg>
            </div>
          </section>
      
          {/* ZONE: ACTIVITY 2, CIRCLE THE BEGINNING CONSONANT. Edit .c2, .letters-row, .letter positions. */}
          <section className="card c2">
            <div className="label small-label">
              <div className="num-tab"><svg viewBox="0 0 58 36">
                  <path className="white" d="M2 2H43L56 18 43 34H2Q8 18 2 2Z" />
                </svg><span>2</span></div>
              <div className="label-title">CIRCLE THE BEGINNING CONSONANT</div>
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
      
          {/* ZONE: ACTIVITY 3, MATCH THE WORD. Edit .c3, .match-desc, .match-pic, .dot, .match-word. */}
          <section className="card c3">
            <div className="label">
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
      
          {/* ZONE: ACTIVITY 4, READING CHECK. Edit .c4, .check-desc, .check-row. */}
          <section className="card c4">
            <div className="label">
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
      
          {/* ZONE: ACTIVITY 5 + SAY THE SOUNDS. Edit .bottom-card, .tiny-text, .draw-box, .sound-divider, .sounds. */}
          <section className="card bottom-card">
            <div className="label">
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
      
          <section className="parent-card">
            <div className="parent-banner">PARENT NOTE</div>
            <div className="parent-text">Encourage your child to sound out each word and read with confidence. Small steps lead to
              big success!</div>
            <svg className="parent-heart">
              <use href="#heart" />
            </svg>
          </section>
    </>
  );
}

