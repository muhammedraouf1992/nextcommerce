import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-blue-500 p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
          <>
            {/*Widget One*/}
            <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3"></div>
            {/*Widget Two*/}
            <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3"></div>
          </>

          {/*	Footer Menus*/}
          <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3"></div>
        </div>
        <div className="mb-8 mt-8 w-full flex flex-wrap">
          {/*Copyright Text*/}
          <div className="w-full md:w-1/2 lg:w-1/4 text-white">
            © Codeytek Academy 2021
          </div>
          <div className="w-full lg:w-3/4 flex justify-end">
            <ul className="flex item-center mb-0">
              <li className="no-dots-list mb-0 flex items-center">
                <span className="sr-only">footer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
