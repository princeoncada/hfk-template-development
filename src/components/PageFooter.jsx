export function PageFooter() {
  return (
    <>
      {/* ZONE: FOOTER. Edit .footer, .great, .reader, .sun, .verse-ribbon, .verse-text. */}
          <footer className="footer">
            <svg className="anton-child">
              <use href="#anton-child" />
            </svg>
            <svg className="leaf-c">
              <use href="#leaf" />
            </svg><svg className="star-c">
              <use href="#star" />
            </svg>
            <div className="great">GREAT JOB!</div>
            <div className="reader">You are a super reader!<svg>
                <use href="#heart" />
              </svg></div>
            <svg className="sun">
              <use href="#sun" />
            </svg>
            <svg className="leaf-d">
              <use href="#leaf" />
            </svg><svg className="star-d">
              <use href="#star" />
            </svg>
            <svg className="verse-ribbon" viewBox="0 0 590 67">
              <path className="draw" d="M20 8h550l-40 25 40 25H20l40-25z" />
              <path className="thin" d="M64 13h465M64 55h465" />
            </svg>
            <svg className="verse-leaf-left">
              <use href="#leaf" />
            </svg><svg className="verse-leaf-right">
              <use href="#leaf" />
            </svg>
            <div className="verse-text">“Give thanks to the Lord.”<span className="psalm">Psalm 107:1</span></div>
          </footer>
    </>
  );
}

