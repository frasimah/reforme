import Seriveces from "../components/Blocks/FrontPage/Seriveces/Seriveces";
import Space from "../components/Blocks/FrontPage/Space/Space";
import ServicePageAbout from "../components/Blocks/ServicePage/ServicePageAbout/ServicePageAbout";
import ServicePageHead from "../components/Blocks/ServicePage/ServicePageHead/ServicePageHead";
import BtnServices from "../components/Utilities/BtnServices/BtnServices";

function ServicePageBio() {

   const contentHead = {
      title: 'Biologique Recherche',
      text: `Our methodology is the fruit of over four decades of experience. Based on unique and personalized skincare protocols, each stage is adapted to the Skin Instant© of each individual. These treatments include face, body and scalp and are equally suitable for both men and women. The three principal stages include:.`,
      listBenefits:
         [
            {
               nameBenefit: 'The Assessment'
            },
            {
               nameBenefit: 'The Tnitialization'
            },
            {
               nameBenefit: 'The Treatment'
            },
         ],
      image: './img/Services/Bio/bio-head-new.jpg'
   }

   const contentAbout = {
      headText: `Endosphères Therapy is a revolutionary treatment designed to address
               your body's needs holistically, delivering long-lasting results for both
               wellness and beauty.
               `,
      listWorks: [
         { workText: 'The low-frequency sound waves aid in lymphatic drainage, which reduces cellulite and stored fluid.' },
         { workText: 'The treatment also increases blood circulation to the treated areas and promotes microcirculation.' },
         { workText: 'It hydrates tissue and increases the function of blood vessels.' },
         { workText: 'It also provides pain relief for those dealing with chronic pain and inflammation.' },
      ],
      listImages: [
         { image: './img/Services/Bio/bio1.jpg', alt: '' },
         { image: './img/Services/Bio/bio2.jpg', alt: '' },
         { image: './img/Services/Bio/bio1.jpg', alt: '' },
         { image: './img/Services/Bio/bio2.jpg', alt: '' },
      ]
   }

   const contentSpace = {
      image: '../img/Services/Endo/space.jpg', alt: 'Immersive beauty space', title: 'Reforme offers you the chance to escape, recharge, and emerge as your optimal self'
   }

   return (
      <>
         <ServicePageHead className={'bio_page_head'} content={contentHead} />
         <Seriveces />
         <ServicePageAbout className={'service_page_bio'} content={contentAbout} isHeader={false} isBenefit={false} />
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/m4vlx9j92uyvel/LVMDQHE5HPTQR'} />
         {/* <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/m4vlx9j92uyvel/LVMDQHE5HPTQR'} /> */}
      </>
   );
}

export default ServicePageBio;