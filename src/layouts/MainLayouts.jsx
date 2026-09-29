import { Outlet } from "react-router-dom";
import SiteExperience from "@/components/common/SiteExperience";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function MainLayouts() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteExperience />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
