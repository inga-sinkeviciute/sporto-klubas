import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer className="Footer" />
    </>
  );
};

export default Layout;
