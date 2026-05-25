export function PageHeader() {
  return (
    <>
      {/* ZONE: TOP NAME / DATE / BRAND ROW. Edit .header, .name, .date, .brand. */}
          <div className="header">
            <div className="name top-1.5 -left-1">Name:<span className="line w-57"></span></div>
            <div className="date top-1.5 left-81">Date:<span className="line w-44"></span></div>
            <div className="brand text-xl">Homeschooling<br />for Kiddos <svg className="brand-heart">
                <use href="#heart" />
              </svg></div>
          </div>
      
          {/* ZONE: HERO TITLE AREA. Edit .hero, .anton-ribbon, .hero-title, .subtitle, and hero doodle classes. */}
          <div className="hero">
            <svg className="anton-ribbon" viewBox="0 0 190 78">
              <path className="draw" d="M20 18L160 4l-12 27 16 23L22 68l12-24z" />
              <path className="thin" d="M30 24L146 12M34 60l112-10" />
              <text x="33" y="50" transform="rotate(-7 92 38)" fontFamily="Caveat, sans-serif" fontSize="42"
                fontWeight="700" fill="#111">Anton&apos;s</text>
            </svg>
            <svg className="hero-title overflow-visible rotate-2" viewBox="-35 -24 760 145" preserveAspectRatio="xMidYMid meet">
              {/* Longer curve so the full title has room */}
              <path id="short-o-title-curve" d="M10 88 C190 28 520 28 735 88" fill="none" />
      
              <text fontFamily="Caveat, sans-serif" fontSize="100" fontWeight="700" fill="#fff" stroke="#111"
                strokeWidth="3.1" strokeLinejoin="round" paintOrder="stroke" letterSpacing="5.7">
                <textPath href="#short-o-title-curve" startOffset="50%" textAnchor="middle">Short O Word Fun!</textPath>
              </text>
            </svg>
            <div className="subtitle left-44.75 top-24 tracking-[1.6px]">Let&apos;s sound out and read short O words!</div>
            <svg className="abs mag-big size-20 top-14 left-13 -rotate-3">
              <use href="#magnify" />
            </svg>
            <svg className="abs star-a size-6 left-3.5">
              <use href="#star" />
            </svg>
            <svg className="abs leaf-a left-33 top-20">
              <use href="#leaf" />
            </svg>
            <svg className="abs leaf-b -right-2 top-22 size-12">
              <use href="#leaf" />
            </svg>
            <svg className="abs star-b size-6 top-9.5 right-0.5">
              <use href="#star" />
            </svg>
            <svg className="abs swirl rotate-205 top-7 right-8">
              <use href="#swirl" />
            </svg>
          </div>
    </>
  );
}

