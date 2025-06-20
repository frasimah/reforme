import Space from "../components/Blocks/FrontPage/Space/Space";
import ServicesList from "../components/Blocks/Services/ServicesList/ServicesList";
import BreadCrumbsStroke from "../components/Utilities/BreadCrumbsStroke/BreadCrumbsStroke";

function ServicesPage() {
   return (
      <>
         <BreadCrumbsStroke />
         <ServicesList />
         <Space title={''} link={'https://app.squareup.com/appointments/buyer/widget/ajrcmyfzqm6qio/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicesPage;