import React, { useEffect } from "react";
import { themes } from "../themes/theme";

const NavBar = () => {
  const html = document.querySelector("html");
  const handleThemeChange = (theme) => {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  };

  useEffect(() => {
    const themeMemory = localStorage.getItem("data-theme") || "light";
    html.setAttribute("data-theme", themeMemory);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">FadGPT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="flex items-center justify-center">
                <p>Themes</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <div className="h-[400px] overflow-scroll overflow-x-hidden">
                  {themes.map((theme, index) => (
                    <li key={index}>
                      <a
                        className="mb-2"
                        onClick={() => handleThemeChange(theme)}
                      >
                        {theme}
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
