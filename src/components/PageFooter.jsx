export function PageFooter() {
  return (
    <>
      {/* ZONE: FOOTER. Edit .footer, .great, .reader, .sun, .verse-ribbon, .verse-text. */}
          <footer className="footer">
            <svg className="anton-child -left-2">
              <use href="#anton-child" />
            </svg>
            <svg className="leaf-c top-9.5 left-33.75 size-10">
              <use href="#leaf" />
            </svg><svg className="star-c left-46.5 top-7.75 size-8">
              <use href="#star" />
            </svg>
            <div className="great top-6 w-full tracking-[12px] left-8">GREAT JOB!</div>
            <div className="reader top-17 tracking-[3.5px] left-58.25">You are a super reader!
              <svg className="absolute left-77.5 top-0.5 size-5">
                <use href="#heart" />
              </svg></div>
            <svg className="sun size-18 left-151.25 top-5.25">
              <use href="#sun" />
            </svg>
            <svg className="leaf-d size-12 top-8.5 right-0.75">
              <use href="#leaf" />
            </svg><svg className="star-d right-7.5 size-8 bottom-3.5">
              <use href="#star" />
            </svg>
            <svg className="verse-ribbon top-22.5 left-29.25 h-18.75" viewBox="0 0 590 67">
              <path className="draw" d="M20 8h550l-40 25 40 25H20l40-25z" />
              <path className="thin" d="M64 13h465M64 55h465" />
            </svg>
            <svg className="verse-leaf-left size-8 bottom-3 left-50">
              <use href="#leaf" />
            </svg><svg className="verse-leaf-right size-8 bottom-3 left-147.25">
              <use href="#leaf" />
            </svg>
            <div className="verse-text left-53.25 bottom-[6.5px]">“Give thanks to the Lord.”<span className="psalm -mt-1.5">Psalm 107:1</span></div>
          </footer>
    </>
  );
}


