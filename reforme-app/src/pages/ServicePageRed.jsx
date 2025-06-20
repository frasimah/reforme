import Expect from "../components/Blocks/FrontPage/Expect/Expect";
import Space from "../components/Blocks/FrontPage/Space/Space";
import ServiceFit from "../components/Blocks/ServicePage/ServiceFit/ServiceFit";
import ServicePageAbout from "../components/Blocks/ServicePage/ServicePageAbout/ServicePageAbout";
import ServicePageHead from "../components/Blocks/ServicePage/ServicePageHead/ServicePageHead";
import ServicePageProcedure from "../components/Blocks/ServicePage/ServicePageProcedure/ServicePageProcedure";
import ServicePageResult from "../components/Blocks/ServicePage/ServicePageResult/ServicePageResult";
import ServicePageSpecialist from "../components/Blocks/ServicePage/ServicePageSpecialist/ServicePageSpecialist";
import ServicePageTech from "../components/Blocks/ServicePage/ServicePageTech/ServicePageTech";
import BtnServices from "../components/Utilities/BtnServices/BtnServices";

function ServicePageRed() {
   const contentHead = {
      title: 'Red Light Therapy & LED Collagen Bed',
      text: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
      cost: 'Cost: from $150/session 10 minutes',
      image: './img/Services/red/head-new.jpg'
   }

   const contentFit = [
      {
         title: '20 min',
         textList: [
            {
               text: '<p>cost: $150.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/8gk8ny6kghqnjr/location/LVMDQHE5HPTQR/services/CEHQCH4QPTTUUONTQ72VNK2Y'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Red Light Therapy & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/FHIITD7XPZNRK4KQHP5J7RMH'
      },
      {
         'title': 'Reforme Your Jet Lag',
         'text': 'since $1200',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/L34DF5G2N2VBNZHOK6MWF72B'
      },
      {
         'title': 'Red Carpet',
         'text': 'since $1300',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/2QMFOOD5EYHSO4ZYEIK5PXER'
      },
      {
         'title': '',
         'text': '',
         'link': ''
      },
   ]

   const contentAbout = {
      headText: 'The treatment reduces discoloration, scars, and acne. It also stimulates cellular regeneration and prompts collagen production. The treatment also helps with muscle fatigue; it’s a full-body treatment that targets both the skin and muscle groups.',
      listWorks: [
         { workText: 'Red Light Therapy targets chronic fatigue by flushing the body of free radicals.' },
         { workText: 'The therapy targets the root causes of poor health by increasing mitochondrial energy production, leaving the body feeling restored and refreshed.' },
         { workText: 'It soothes chronic pain as well as pain caused by arthritis by reducing inflammation. It also lessens symptoms caused by Lyme Disease.' },
         { workText: 'The treatment is also anti-aging, because of its ability to enhance collagen production. The treatment reduces scarring, and helps with other skin conditions like acne, Psoriasis, and Eczema.' },
      ],
      listImages: [
         { image: './img/Services/red/slide1.jpg', alt: '' },
         { image: './img/Services/red/slide2.jpg', alt: '' },
         { image: './img/Services/red/slide1.jpg', alt: '' },
         { image: './img/Services/red/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'Skin texture improves and the overall look of the skin is more radiant. Tense muscles feel more relaxed, and the body feels rested and rejuvenated.',
      videoLink: './img/Services/red/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'For collagen production, regular, frequent treatments are beneficial.',
      indicationsText: '',
      indicationsList: [
         { text: 'The treatment is contraindicated for anyone with photosensitizing medical conditions, such as lupus, or for anyone on a photo-sensitizing drug.' },
         { text: 'Anyone with recent burns or epilepsy should also not use this treatment.' },
         { text: 'It is also not advisable if you are pregnant. ' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'Sessions typically last for 40 minutes. Clients like on their back for the first 20 minutes, then lie on their stomachs for the remaining 20 minutes..',
      },
      ]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/red/questions.jpg",
      questions: [
         {
            title: "What do I wear for a red light therapy session? ",
            text: "The more skin that is exposed, the better. However, if you would prefer not to be naked, you can still experience the benefits of this treatment with some clothing on, like underwear. "
         },
         {
            title: "How many treatments does it take to see results? ",
            text: "In 2-4 treatments, people typically notice changes in their skin tone and texture. For chronic health conditions, ten sessions is the recommended time to notice benefits. "
         },
         {
            title: "Do I need eye protection? ",
            text: "No, eye protection isn’t necessary in Red Light Therapy because the wavelength of red and near-infrared light isn’t harmful to your eyes. Many people like to nap during the treatment, so the rest is an added bonus. "
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/red/space.jpg', alt: 'Immersive beauty space'
   }

   return (
      <>
         <ServicePageHead content={contentHead} />
         <ServiceFit content={contentFit} contentAlso={contentFitAlso} />
         <ServicePageAbout content={contentAbout} />
         <ServicePageResult content={contentResult} />
         <ServicePageProcedure content={contentProcedure} />
         <ServicePageTech content={contentTech} />
         <ServicePageSpecialist content={contentSpecialist} />
         <Expect />
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/8gk8ny6kghqnjr/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/8gk8ny6kghqnjr/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageRed;