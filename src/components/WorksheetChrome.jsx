export function WorksheetChrome() {
  return (
    <>
      {/*
          REFERENCE UNDERLAY
          This is the original image placed behind the editable HTML.
          Toggle it with the toolbar or press R.
          For final export, enable Final Mode or remove this img.
        */}
      <img className="reference-underlay" src="/reference.jpg" alt="Reference worksheet underlay" />

      {/* Optional zone overlays. Toggle with the toolbar or press Z. */}
      <div className="zone-outline left-7 top-8.5 w-190 h-33.5"><span>hero</span></div>
      <div className="zone-outline left-9.25 top-45.75 w-92.5 h-60.5"><span>activity 1</span></div>
      <div className="zone-outline left-104.75 top-45.75 w-90 h-60.5"><span>activity 2</span></div>
      <div className="zone-outline left-9.25 top-111 w-92.5 h-59"><span>activity 3</span></div>
      <div className="zone-outline left-104.75 top-111 w-90 h-59"><span>activity 4</span></div>
      <div className="zone-outline left-9.25 top-174 w-142.5 h-49.5"><span>activity 5</span></div>
      <div className="zone-outline left-155 top-174 w-39.75 h-49.5"><span>parent</span></div>
      <div className="zone-outline left-7.75 top-221.75 w-188.5 h-39"><span>footer</span></div>
      <svg className="defs" aria-hidden="true">
        <symbol id="star" viewBox="0 0 40 40">
          <path className="draw" d="M20 3l4.9 11.1 12.1 1.2-9.1 8.1 2.7 11.8L20 29.1 9.4 35.2l2.7-11.8-9.1-8.1 12.1-1.2z" />
        </symbol>
        <symbol id="heart" viewBox="0 0 32 30">
          <path className="draw" d="M16 26C7 18 3 14 4 8.8 5 4 11 3 16 9c5-6 11-5 12-0.2C29 14 25 18 16 26z" />
        </symbol>
        <symbol id="leaf" viewBox="0 0 50 50">
          <path className="draw" d="M25 43C20 29 24 15 40 7c1 16-5 29-15 36z" />
          <path className="thin" d="M25 43c4-13 8-24 15-36" />
          <path className="draw" d="M22 38C13 36 8 29 7 19c10 3 16 10 15 19z" />
          <path className="thin" d="M22 38C16 31 11 25 7 19" />
        </symbol>
        <symbol id="swirl" viewBox="0 0 90 36">
          <path className="thin" strokeDasharray="3 5"
            d="M4 22c15-15 26 10 40-3 8-8-4-19-15-10 13-17 37-8 30 9-5 13-21 12-16-2 5-16 31-9 42-2" />
        </symbol>
        <symbol id="magnify" viewBox="0 0 80 80">
          <circle className="draw" cx="33" cy="33" r="20" />
          <circle className="thin" cx="33" cy="33" r="14" />
          <path className="draw" d="M48 48l20 20M61 62l7 6" />
        </symbol>
        <symbol id="pencil" viewBox="0 0 70 70">
          <path className="draw" d="M14 54l10-4 31-31-6-6-31 31z" />
          <path className="draw" d="M49 13l8-8 6 6-8 8M18 44l6 6M14 54l-4 8 8-4" />
        </symbol>
        <symbol id="dog" viewBox="0 0 90 80">
          <path className="draw" d="M28 31c-10-8-22-3-22 10 0 11 9 12 15 6" />
          <path className="draw" d="M62 31c10-8 22-3 22 10 0 11-9 12-15 6" />
          <circle className="draw" cx="45" cy="38" r="24" />
          <path className="draw" d="M29 59c-7 4-10 10-12 17M60 59c7 4 10 10 12 17M37 59l-3 16M53 59l3 16" />
          <circle className="solid" cx="36" cy="35" r="2" />
          <circle className="solid" cx="54" cy="35" r="2" />
          <path className="solid" d="M43 43c2-2 4-2 6 0-1 3-5 3-6 0z" />
          <path className="thin" d="M45 47c-1 5-8 5-10 0M45 47c1 5 8 5 10 0" />
        </symbol>
        <symbol id="log" viewBox="0 0 95 70">
          <path className="draw" d="M24 13l48 2c12 1 16 37 4 39l-51 2" />
          <ellipse className="draw" cx="24" cy="35" rx="19" ry="23" />
          <ellipse className="thin" cx="24" cy="35" rx="12" ry="15" />
          <ellipse className="thin" cx="24" cy="35" rx="5" ry="7" />
          <path className="thin"
            d="M38 22c10-2 20-2 32 0M41 35c12-3 24-2 35 1M39 48c12 2 23 1 34-2M51 18c-4 6-5 15-3 24M63 19c-6 8-6 18-2 28" />
        </symbol>
        <symbol id="mop" viewBox="0 0 80 90">
          <path className="draw" d="M55 5L36 62" />
          <path className="thin" d="M58 7L39 64" />
          <path className="draw"
            d="M34 61c-10 5-16 12-20 24M39 62c-2 10-2 17 0 25M43 62c7 9 10 16 12 25M30 65c-8 2-16 2-24 1M46 65c9 1 16 3 24 7M23 72c-4 5-8 9-13 13M50 72c3 5 6 10 8 15" />
          <path className="thin" d="M28 58h18" />
        </symbol>
        <symbol id="sun" viewBox="0 0 90 90">
          <circle className="draw" cx="45" cy="45" r="24" />
          <path className="draw" d="M45 4v14M45 72v14M4 45h14M72 45h14M16 16l10 10M64 64l10 10M74 16L64 26M26 64L16 74" />
          <circle className="solid" cx="37" cy="40" r="2" />
          <circle className="solid" cx="53" cy="40" r="2" />
          <path className="thin" d="M35 51c8 8 16 8 23 0" />
        </symbol>
        <symbol id="anton-child" viewBox="0 0 180 160">
          <circle className="draw" cx="68" cy="47" r="34" />
          <path className="solid" d="M35 42c8-30 52-39 72-12-13-3-19-10-29-18 1 9-10 17-26 18 4 6-6 11-17 12z" />
          <circle className="solid" cx="56" cy="47" r="2.5" />
          <circle className="solid" cx="81" cy="47" r="2.5" />
          <path className="thin" d="M56 61c12 9 24 8 35-2" />
          <path className="draw"
            d="M42 82c-22 18-31 41-35 70M94 82c18 22 26 45 31 70M34 104l35 33 35-33M66 137l8-24 12 9-9 31" />
          <path className="draw" d="M110 84l28 27" />
          <circle className="draw" cx="128" cy="79" r="19" />
          <path className="draw" d="M141 93l27 25" />
        </symbol>
      </svg>

      {/* ZONE: PAGE BORDERS. Edit .outer-border and .inner-border only. */}
      <div className="outer-border"></div>
      <div className="inner-border"></div>
    </>
  );
}

