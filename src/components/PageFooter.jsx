export function PageFooter() {
  return (
    <>
      {/* ZONE: FOOTER. Edit .footer, .great, .reader, .sun, .verse-ribbon, .verse-text. */}
          <footer className="footer">
            <svg className="anton-child left-[-8px]">
              <use href="#anton-child" />
            </svg>
            <svg className="leaf-c top-[38px] left-[135px] size-10">
              <use href="#leaf" />
            </svg><svg className="star-c left-[186px] top-[31px] size-8">
              <use href="#star" />
            </svg>
            <div className="great top-[24px] w-full tracking-[12px] left-[32px]">GREAT JOB!</div>
            <div className="reader top-[68px] tracking-[3.5px] left-[233px]">You are a super reader!
              <svg className="absolute left-[310px] top-[2px] size-5">
                <use href="#heart" />
              </svg></div>
            <svg className="sun size-18 left-[605px] top-[21px]">
              <use href="#sun" />
            </svg>
            <svg className="leaf-d size-12 top-[34px] right-[3px]">
              <use href="#leaf" />
            </svg><svg className="star-d right-[30px] size-8 bottom-[14px]">
              <use href="#star" />
            </svg>
            <svg className="verse-ribbon top-[90px] left-[117px] h-[75px]" viewBox="0 0 590 67">
              <path className="draw" d="M20 8h550l-40 25 40 25H20l40-25z" />
              <path className="thin" d="M64 13h465M64 55h465" />
            </svg>
            <svg className="verse-leaf-left size-8 bottom-[12px] left-[200px]">
              <use href="#leaf" />
            </svg><svg className="verse-leaf-right size-8 bottom-[12px] left-[589px]">
              <use href="#leaf" />
            </svg>
            <div className="verse-text left-[213px] bottom-[6.5px]">“Give thanks to the Lord.”<span className="psalm -mt-1.5">Psalm 107:1</span></div>
          </footer>
    </>
  );
}

