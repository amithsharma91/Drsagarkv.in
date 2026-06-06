import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AboutPage from "../pages/about/page";
import ReviewsPage from "../pages/reviews/page";
import TreatmentsPage from "../pages/treatments/page";
import KneePainPage from "../pages/treatments/knee-pain/page";
import JointReplacementPage from "../pages/treatments/joint-replacement/page";
import BackPainPage from "../pages/treatments/back-pain/page";
import SportsInjuriesPage from "../pages/treatments/sports-injuries/page";
import ArthroscopyPage from "../pages/treatments/arthroscopy/page";
import ArthritisPage from "../pages/treatments/arthritis/page";
import FractureTraumaPage from "../pages/treatments/fracture-care/page";
import TraumaSurgeryPage from "../pages/treatments/trauma-surgery/page";
import PelviAcetabularPage from "../pages/treatments/pelvi-acetabular-surgery/page";
import LimbReconstructionPage from "../pages/treatments/limb-reconstruction/page";
import ShoulderPainPage from "../pages/treatments/shoulder-pain/page";
import FootAnklePage from "../pages/treatments/foot-ankle/page";
import HipPainPage from "../pages/treatments/hip-pain/page";
import RehabilitationPage from "../pages/treatments/rehabilitation/page";
import PainManagementPage from "../pages/treatments/pain-management/page";
import PaediatricOrthopaedicsPage from "../pages/treatments/paediatric-orthopaedics/page";
import GalleryPage from "../pages/gallery/page";
import FAQPage from "../pages/faq/page";
import ContactPage from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
  {
    path: "/treatments",
    element: <TreatmentsPage />,
  },
  {
    path: "/treatments/knee-pain",
    element: <KneePainPage />,
  },
  {
    path: "/treatments/joint-replacement",
    element: <JointReplacementPage />,
  },
  {
    path: "/treatments/back-pain",
    element: <BackPainPage />,
  },
  {
    path: "/treatments/sports-injuries",
    element: <SportsInjuriesPage />,
  },
  {
    path: "/treatments/arthroscopy",
    element: <ArthroscopyPage />,
  },
  {
    path: "/treatments/arthritis",
    element: <ArthritisPage />,
  },
  {
    path: "/treatments/fracture-care",
    element: <FractureTraumaPage />,
  },
  {
    path: "/treatments/trauma-surgery",
    element: <TraumaSurgeryPage />,
  },
  {
    path: "/treatments/pelvi-acetabular-surgery",
    element: <PelviAcetabularPage />,
  },
  {
    path: "/treatments/limb-reconstruction",
    element: <LimbReconstructionPage />,
  },
  {
    path: "/treatments/shoulder-pain",
    element: <ShoulderPainPage />,
  },
  {
    path: "/treatments/foot-ankle",
    element: <FootAnklePage />,
  },
  {
    path: "/treatments/hip-pain",
    element: <HipPainPage />,
  },
  {
    path: "/treatments/rehabilitation",
    element: <RehabilitationPage />,
  },
  {
    path: "/treatments/pain-management",
    element: <PainManagementPage />,
  },
  {
    path: "/treatments/paediatric-orthopaedics",
    element: <PaediatricOrthopaedicsPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
