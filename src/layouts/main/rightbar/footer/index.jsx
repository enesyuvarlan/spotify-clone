import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[13px]">
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Terms of
        Service</Link>
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Privacy Policy</Link>
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Cookie Policy</Link>
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Imprint</Link>
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Accessibility</Link>
      <Link to="/" className="text-[#8b98a5] leading-4 hover:underline">Ads info</Link>
      <div className="inline-flex gap-2 flex-wrap">
        <Popover className="relative inline-flex leading-4">
          <Popover.Button
            className="text-[#8b98a5] outline-none leading-4 hover:underline inline-flex items-center">
            More
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel
            className="w-[176px] text-[15px] max-w-[384px] bg-[#15202b] shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
            <Link to="/"
                  className="py-3 px-4 leading-5 font-bold hover:bg-white/[0.03] transition-colors">
              About
            </Link>
            <Link to="/"
                  className="py-3 px-4 leading-5 font-bold hover:bg-white/[0.03] transition-colors">
              Download the X app
            </Link>
            <Link to="/"
                  className="py-3 px-4 leading-5 font-bold hover:bg-white/[0.03] transition-colors">
              X for Business
            </Link>
            <Link to="/"
                  className="py-3 px-4 leading-5 font-bold hover:bg-white/[0.03] transition-colors">
              Developers
            </Link>
          </Popover.Panel>
        </Popover>
      </div>
      <p className="w-full text-left text-[#8b98a5] leading-4">
        &copy; 2024 X Corp.
      </p>
    </footer>
  )
}
