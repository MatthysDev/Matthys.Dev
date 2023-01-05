import * as React from "react";

interface HeaderProps {
  pageTitle: any;
}

const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <>
      <title>{pageTitle}</title>
      <header className=" border-b-2 border-green-400 text-white text-3xl lg:text-5xl font-bold pb-8 ">
        {pageTitle}
      </header>
    </>
  );
};

export default Header;
