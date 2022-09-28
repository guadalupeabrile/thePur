import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages
import CreativeAgency from "./pages/home/CreativeAgency";
import SmallBusiness from "./pages/home/SmallBusiness";
import CorporateBusiness from "./pages/home/CorporateBusiness";
import StartupBusiness from "./pages/home/StartupBusiness";
import MinimalDesign from "./pages/home/MinimalDesign";
import CreativeOnePage from "./pages/home/CreativeOnePage";
import CreativePortfolio from "./pages/home/CreativePortfolio";
import PersonalResume from "./pages/home/PersonalResume";
import SEOAgency from "./pages/home/SEOAgency";
import DigitalAgency from "./pages/home/DigitalAgency";
import Architecture from "./pages/home/Architecture";
import Restaurant from "./pages/home/Restaurant";
import OnlineShop from "./pages/home/OnlineShop";
import Photography from "./pages/home/Photography";
import GymFitness from "./pages/home/GymFitness";
import AppStyle from "./pages/home/AppStyle";
import TravelAgency from "./pages/home/TravelAgency";
import Construction from "./pages/home/Construction";
import Music from "./pages/home/Music";
import Weddings from "./pages/home/Weddings";
import DesignStudio from "./pages/home/DesignStudio";

// Pages
import AboutUs from "./pages/about/AboutUs";
import AboutCreative from "./pages/about/AboutCreative";
import ServiceSimple from "./pages/services/ServiceSimple";
import ServiceCreative from "./pages/services/ServiceCreative";
import ContactSimple from "./pages/contact/ContactSimple";
import ContactCreative from "./pages/contact/ContactCreative";
import Page404 from "./pages/others/Page404";
import ComingSoon from "./pages/others/ComingSoon";
import FAQs from "./pages/others/FAQs";
import TermCondition from "./pages/others/TermCondition";
import Privacy from "./pages/others/Privacy";
import Career from "./pages/others/Career";
import Login from "./pages/others/Login";

// Blog
import BlogStandard from "./pages/blog/BlogStandard";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogSidebar from "./pages/blog/BlogSidebar";
import BlogMasonry from "./pages/blog/BlogMasonry";
import BlogCarousel from "./pages/blog/BlogCarousel";
import BlogSidebarRight from "./pages/blog/BlogSidebarRight";
import BlogSidebarLeft from "./pages/blog/BlogSidebarLeft";

// Portfolio
import PortfolioBoxedTwo from "./pages/portfolio/PortfolioBoxedTwo";
import PortfolioBoxedThree from "./pages/portfolio/PortfolioBoxedThree";
import PortfolioBoxedFour from "./pages/portfolio/PortfolioBoxedFour";
import PortfolioBoxedSpaceTwo from "./pages/portfolio/PortfolioBoxedSpaceTwo";
import PortfolioBoxedSpaceThree from "./pages/portfolio/PortfolioBoxedSpaceThree";
import PortfolioBoxedSpaceFour from "./pages/portfolio/PortfolioBoxedSpaceFour";
import PortfolioWideTwo from "./pages/portfolio/PortfolioWideTwo";
import PortfolioWideThree from "./pages/portfolio/PortfolioWideThree";
import PortfolioWideFour from "./pages/portfolio/PortfolioWideFour";
import PortfolioWideSpaceTwo from "./pages/portfolio/PortfolioWideSpaceTwo";
import PortfolioWideSpaceThree from "./pages/portfolio/PortfolioWideSpaceThree";
import PortfolioWideSpaceFour from "./pages/portfolio/PortfolioWideSpaceFour";
import SinglePortfolio from "./pages/portfolio/SinglePortfolio";

// Shops
import ShopFullwidth from "./pages/shops/ShopFullwidth";
import ShopStandard from "./pages/shops/ShopStandard";
import ShopBoxed from "./pages/shops/ShopBoxed";
import ShopMasonry from "./pages/shops/ShopMasonry";
import ShopSingleProduct from "./pages/shops/ShopSingleProduct";
import ShopCart from "./pages/shops/ShopCart";
import ShopCheckout from "./pages/shops/ShopCheckout";

// Elements
import Buttons from "./pages/elements/Buttons";
import Typography from "./pages/elements/Typography";
import Alerts from "./pages/elements/Alerts";
import PricingTables from "./pages/elements/PricingTables";
import CallToActions from "./pages/elements/CallToActions";
import ParallaxSections from "./pages/elements/ParallaxSections";
import Tabs from "./pages/elements/Tabs";
import Accordions from "./pages/elements/Accordions";
import Sliders from "./pages/elements/Sliders";
import ProgressBars from "./pages/elements/ProgressBars";
import ContactForms from "./pages/elements/ContactForms";
import GoogleMaps from "./pages/elements/GoogleMaps";
import ProgressBarRing from "./pages/elements/ProgressBarRing";
import ThemeIcons from "./pages/elements/ThemeIcons";
import BoxedIcons from "./pages/elements/BoxedIcons";
import GridColumns from "./pages/elements/GridColumns";
import TeamMembers from "./pages/elements/TeamMembers";
import Countdowns from "./pages/elements/Countdowns";
import ScrollToTop from "./helpers/ScrollToTop";
import Demos from "./pages/Demos";

function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog/:blogID`}
            component={BlogStandard}
          />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}`}
            component={PersonalResume}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
