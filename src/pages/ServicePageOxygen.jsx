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

function ServicePageOxygen() {
   const contentHead = {
      title: 'Hyperbaric Oxygen Chamber',
      text: 'Hyperbaric Oxygen Therapy delivers pure oxygen in an environment where the air is 2-3 times more pressurized than normal. This allows the lungs to safely absorb more oxygen than it normally could.',
      cost: 'Cost: from $150/session 30 minutes',
      image: './img/Services/oxygen/head-new.jpg'
   }

   const contentFit = [
      {
         title: '45 min',
         textList: [
            {
               text: '<p>cost: $150.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/w4q2wks6hva8ha/location/LVMDQHE5HPTQR/services/LHWTOTKBXNS7L4TOAAUXGTJP'
      },
      {
         title: '60 min',
         textList: [
            {
               text: '<p>cost: $200.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/w4q2wks6hva8ha/location/LVMDQHE5HPTQR/services/LHWTOTKBXNS7L4TOAAUXGTJP'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Reforme Your Jet Lag',
         'text': 'since $800',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/L34DF5G2N2VBNZHOK6MWF72B'
      },
      {
         'title': 'Reforme Your Time Together',
         'text': 'since $1000',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LOGRYR7WGTTLPGPZ7V4STNZG'
      },
   ]

   const contentAbout = {
      headText: 'This treatment infuses the body with 50% more oxygen to contribute to overall wellness, speed up healing processes, and reverse aging. ',
      listWorks: [
         { workText: 'Hyperbaric Oxygen Therapy fights bacteria, and aids in healing processes by allowing the blood to absorb an increased level of oxygen.' },
         { workText: 'In fact, Hyperbaric Oxygen Therapy increases the body’s oxygen content by 15 times its normal level.' },
         { workText: 'The therapy reduces swelling and inflammation. ' },
         { workText: 'Thanks to the infusion of oxygen, the body is able to grow new capillaries after a treatment in order to accelerate healing.' },
      ],
      listImages: [
         { image: './img/Services/oxygen/slide1.jpg', alt: '' },
         { image: './img/Services/oxygen/slide2.jpg', alt: '' },
         { image: './img/Services/oxygen/slide1.jpg', alt: '' },
         { image: './img/Services/oxygen/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'Hyperbaric Oxygen Therapy results in more mental clarity, boosts the immune system, and increases energy levels. Since oxygen is an anti-inflammatory, it helps the body heal and reduces inflammation. It decreases stress and helps facilitate deep, restful sleep.',
      videoLink: './img/Services/oxygen/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'Hyperbaric Oxygen Therapy is also helpful with anti-aging and beauty, because the treatment rejuvenates the skin and increases blood flow. It heals the skin from within.',
      indicationsText: 'Hyperbaric Oxygen Therapy is a safe, effective, and noninvasive treatment for anyone wishing to increase energy levels, prompt healing in the body, and detoxify. ',
      indicationsList: [
         { text: 'The treatment is contraindicated for anyone who underwent recent ear surgery, because of the pressurized chamber, and those with some kinds of lung diseases. Consult your doctor if you are pregnant. ' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'The treatments typically last between 60-90 minutes.',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none"><path d="M0.657203 22C0.514391 22.0002 0.375408 21.9538 0.261354 21.8678C0.1473 21.7819 0.0643931 21.661 0.0251988 21.5237C-0.0139954 21.3864 -0.00731904 21.24 0.044189 21.1068C0.095697 20.9736 0.189222 20.8609 0.310612 20.7857C0.403165 20.7279 9.59938 14.9706 11.8981 9.08001C11.963 8.92008 12.0882 8.79212 12.2467 8.72384C12.4052 8.65557 12.5842 8.65245 12.745 8.71519C12.9058 8.77793 13.0354 8.90147 13.1057 9.05906C13.1761 9.21664 13.1816 9.39562 13.121 9.55721C10.6628 15.8587 1.39566 21.6573 1.00247 21.8976C0.899283 21.9635 0.779625 21.999 0.657203 22Z" fill="white" /><path d="M2.80658 20.1325L2.79543 19.4171C2.76984 15.9519 3.72022 12.5495 5.53786 9.59922L5.7348 9.30976H8.23307L7.6272 7.35173L7.81953 7.08915C11.5026 2.01253 17.8572 0.454214 20.4185 0.0196755C20.6406 -0.0168537 20.8681 -0.00238754 21.0838 0.0619827C21.2995 0.126353 21.4977 0.238944 21.6635 0.391226C21.8292 0.543508 21.9582 0.73151 22.0406 0.94098C22.1229 1.15045 22.1566 1.37591 22.139 1.60031C20.9634 18.0727 3.69075 20.0452 3.51615 20.0616L2.80658 20.1325ZM6.44765 10.6226C5.04061 13.074 4.2407 15.8266 4.11478 18.6504C7.33707 18.118 19.8573 15.1714 20.8327 1.50448C20.8355 1.47623 20.8317 1.44772 20.8214 1.42126C20.8111 1.3948 20.7948 1.37115 20.7736 1.35219C20.7566 1.33546 20.7358 1.32312 20.7129 1.31626C20.69 1.30939 20.6658 1.30822 20.6424 1.31281C18.2859 1.7119 12.5076 3.11924 9.08047 7.59788L9.58984 9.25792C9.63831 9.41567 9.64911 9.58258 9.62133 9.74525C9.59356 9.90793 9.52799 10.0618 9.42993 10.1945C9.33187 10.3273 9.20403 10.4351 9.0567 10.5095C8.90936 10.5838 8.74663 10.6226 8.5816 10.6226H6.44765Z" fill="white" /></svg>,
         text: 'It is a painless, noninvasive treatment.',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13.487 2.09524C13.0218 3.90262 11.3811 5.2381 9.42857 5.2381C7.47602 5.2381 5.8353 3.90262 5.37012 2.09524H4.19048V3.33334C4.19048 4.85288 3.34316 6.17452 2.09524 6.85158V19.9048H16.7619V6.85158C15.514 6.17452 14.6667 4.85288 14.6667 3.33334V2.09524H13.487ZM2.96825 0C2.4861 0 2.09524 0.390867 2.09524 0.873012V3.33334C2.09524 4.3853 1.24244 5.2381 0.190478 5.2381C0.0852761 5.2381 0 5.32337 0 5.42857V19.9048C0 21.062 0.93807 22 2.09524 22H16.7619C17.9191 22 18.8571 21.062 18.8571 19.9048V5.42857C18.8571 5.32337 18.7719 5.2381 18.6667 5.2381C17.6147 5.2381 16.7619 4.3853 16.7619 3.33334V0.873012C16.7619 0.390867 16.371 0 15.8889 0H12.0476C11.7584 0 11.5238 0.23452 11.5238 0.52381V1.04762C11.5238 2.20479 10.5858 3.14286 9.42857 3.14286C8.27137 3.14286 7.33333 2.20479 7.33333 1.04762V0.52381C7.33333 0.23452 7.09881 0 6.80952 0H2.96825Z" fill="white" /></svg>,
         text: 'Dress comfortably, as you will be lying down for your treatment.',
      },
      ]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/oxygen/questions.jpg",
      questions: [
         {
            title: "How many sessions do I need to see results?",
            text: "Typically, we suggest around 10 sessions of Hyperbaric Oxygen Therapy to fully immerse yourself in the healing results."
         },
         {
            title: "Will my ears pop in the chamber?",
            text: "Some clients experience a slight ear popping noise, similar to take off and landing on a plane. This levels out within a few minutes in the session."
         },
         {
            title: "What do I do during a session?",
            text: "Lay back and relax! Some clients like to read, relax, meditate, or sleep during their treatment sessions"
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/oxygen/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/w4q2wks6hva8ha/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/w4q2wks6hva8ha/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageOxygen;