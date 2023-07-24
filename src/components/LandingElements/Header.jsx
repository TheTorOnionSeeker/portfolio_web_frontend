import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "./ThemeContext";

const navigation = [
  /* { name: "Categorias", href: "#categorias" },
  { name: "Marcas", href: "#" },
  { name: "Ofertas", href: "#ofertas" },
  { name: "Productos", path: "/home" }, */
  { name: "Proyectos", path: "/projects" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const themeClass = darkTheme
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";
  const themeButtonClass = darkTheme
    ? "bg-indigo-500 hover:bg-indigo-600"
    : "bg-gray-200 hover:bg-gray-300";

  return (
    <header
      className={`inset-x-0 top-0 z-50 sticky shadow-sm shadow-slate-300 ${themeClass}`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-2 bg-[#E60011] text-white font-semibold rounded-sm"
          >
            <span className="sr-only">Your Company</span>
            <h1>Home</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <React.Fragment key={item.name}>
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-base font-semibold leading-6 text-[#484848] hover:text-[#E60011]"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-base font-semibold leading-6 text-[#484848] hover:text-[#E60011]"
                >
                  {item.name}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className={`text-base font-semibold leading-6 ${themeButtonClass} py-2 px-4 rounded`}
            onClick={toggleTheme}
          >
            {darkTheme ? "Volver a Tema Original" : "Tema Oscuro"}
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className=" bg-transparent fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-4/6 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-2 py-6">
                {navigation.map((item) => (
                  <React.Fragment key={item.name}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="text-base font-semibold leading-6 text-[#484848] hover:text-[#E60011]"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-base font-semibold leading-6 text-[#484848] hover:text-[#E60011]"
                      >
                        {item.name}
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/details"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
