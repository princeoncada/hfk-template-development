export function PageHeader() {
  return (
    <>
      {/* ZONE: TOP NAME / DATE / BRAND ROW. Edit .header, .name, .date, .brand. */}
          <div className="header">
            <div className="name">Name:<span className="line"></span></div>
            <div className="date">Date:<span className="line"></span></div>
            <div className="brand">Homeschooling<br />for Kiddos <svg className="brand-heart">
                <use href="#heart" />
              </svg></div>
          </div>
      
          {/* ZONE: HERO TITLE AREA. Edit .hero, .anton-ribbon, .hero-title, .subtitle, and hero doodle classes. */}
          <div className="hero">
            <svg className="anton-ribbon" viewBox="0 0 190 78">
              <path className="draw" d="M20 18L160 4l-12 27 16 23L22 68l12-24z" />
              <path className="thin" d="M30 24L146 12M34 60l112-10" />
              <text x="38" y="50" transform="rotate(-7 92 38)" fontFamily="Caveat, sans-serif" fontSize="42"
                fontWeight="700" fill="#111">Anton's</text>
            </svg>
            <svg className="hero-title overflow-visible" viewBox="-35 -24 760 145" preserveAspectRatio="xMidYMid meet">
              {/* Longer curve so the full title has room */}
              <path id="short-o-title-curve" d="M10 88 C190 28 520 28 735 88" fill="none" />
      
              <text fontFamily="Caveat, sans-serif" fontSize="100" fontWeight="700" fill="#fff" stroke="#111"
                strokeWidth="3.1" strokeLinejoin="round" paintOrder="stroke" letterSpacing="5.7">
                <textPath href="#short-o-title-curve" startOffset="50%" textAnchor="middle">Short O Word Fun!</textPath>
              </text>
            </svg>
            <div className="subtitle left-[179px] top-[96px] tracking-[1.8px]">Let's sound out and read short O words!</div>
            <svg className="abs mag-big">
              <use href="#magnify" />
            </svg>
            <svg className="abs star-a">
              <use href="#star" />
            </svg>
            <svg className="abs leaf-a">
              <use href="#leaf" />
            </svg>
            <svg className="abs leaf-b">
              <use href="#leaf" />
            </svg>
            <svg className="abs star-b">
              <use href="#star" />
            </svg>
            <svg className="abs swirl">
              <use href="#swirl" />
            </svg>
          </div>
    </>
  );
}

