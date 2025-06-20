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

function ServicePageLymph() {
   const contentHead = {
      title: 'Lymphatic Compression',
      text: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system. Through scientific research, Lymphatic Compression treatments use the same principles of a manual lymphatic massage, but with more effective results.',
      cost: 'Cost: from $200/session',
      image: './img/Services/lymphatic/head-new.jpg'
   }

   const contentFit = [
      {
         title: 'Lymphapress Pants',
         textList: [
            {
               text: '<p>cost: $150.00 / 30 min</p>',
            },
            {
               text: '<p>cost: $200.0 / 45 min</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/XHY2KWEQGPJZSNFXTHVBAVLK'
      },
      {
         title: 'Ballancer Pro Lymphatic Drainage',
         textList: [
            {
               text: '<p>cost: $200.00 / 15 min</p>',
            },
            {
               text: '<p>cost: $350.00 / 30 min</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/5YRNIOANQ3OTGQYPEOOVZCE2'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Ballancer Pro Lymphatic Drainage & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/BTB7H5SEB2C7PNYSA5H43LNI'
      },
      {
         'title': 'Reforme Your Jet Lag',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/L34DF5G2N2VBNZHOK6MWF72B'
      },
      {
         'title': 'Reforme Your After Party',
         'text': 'since $500',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Reforme Your Time Together',
         'text': 'since $450',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LOGRYR7WGTTLPGPZ7V4STNZG'
      },
      {
         'title': 'Red Carpet',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/2QMFOOD5EYHSO4ZYEIK5PXER'
      },
      {
         'title': 'Reforme Your Libido',
         'text': 'since $900',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/P7PGD2PUWEYYPMIBAOPT7FIG'
      },
      {
         'title': 'Magic Endosphere',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/Q3G3CPHY3UE2DQXKJBDQOSCN'
      },
      {
         'title': '',
         'text': '',
         'link': ''
      },
   ]

   const contentAbout = {
      headText: '',
      listWorks: [
         { workText: 'Through a custom pressure program, the client slides into the inflatable compression pants. ' },
         { workText: 'Using sensors, the Lymphatic Compression treatment targets areas of the body that need the most attention, and moves the waste and toxicity out of the body. ' },
         { workText: 'The massage treatment boosts metabolism as well as the body’s natural ability to detox.' },
      ],
      listImages: [
         { image: './img/Services/lymphatic/slide1.jpg', alt: '' },
         { image: './img/Services/lymphatic/slide2.jpg', alt: '' },
         { image: './img/Services/lymphatic/slide1.jpg', alt: '' },
         { image: './img/Services/lymphatic/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'The Lymphatic Compression treatment is a very relaxing experience. It massages key parts of the body linked to the lymphatic system. After a session, clients report better sleep and less fatigue. Clients feel energized, and because of its detoxification abilities, many clients notice a reduction in clothing size. It offers a wellness boost, and enhances circulation throughout the body.',
      videoLink: './img/Services/lymphatic/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'Because the Lymphatic Compression treatment detoxes the body and flushes fluids and toxins, many clients notice that their bodies feel more contoured. Areas like the abdomen, buttocks, and thighs feel especially taught and flushed.',
      indicationsText: 'Lymphatic Compression treatment is beneficial for anyone. It can be especially beneficial, however, for people with rheumatoid arthritis, chronic venous insufficiency, fibromyalgia, lipedema, and Lyme disease. ',
      indicationsList: [
         { text: 'For contraindications, those with active cancer who are being treated with chemotherapy or radiation should not use Lymphatic Compression.' },
         { text: 'If you have heart problems, blood clots, or skin eruptions, it’s also wise to avoid the treatment.' },
         { text: 'If you are pregnant, speak with your doctor before seeking treatment.' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'A session, using the Lymphatic Compression pants, lasts 45-60 minutes.',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><path d="M10.6 15.6667H13C16.9764 15.6667 20.2 12.3834 20.2 8.33333C20.2 4.28324 16.9764 1 13 1H8.2C4.22355 1 1 4.28324 1 8.33333C1 10.2115 1.69325 11.9248 2.83335 13.2222M17.8 23C21.7764 23 25 19.7167 25 15.6667C25 13.7885 24.3068 12.0752 23.1666 10.7778M13 23C9.02355 23 5.8 19.7167 5.8 15.6667C5.8 11.6166 9.02355 8.33333 13 8.33333H15.4" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>,
         text: 'You may combine this treatment with other treatments, like the IV drip since the increased blood flow from the Lymphatic Compression makes the IV therapy even more effective.',
      },]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/lymphatic/questions.jpg",
      questions: [
         {
            title: "How quickly will I see results? ",
            text: "You will see results from the Lymphatic Compression treatment after a few treatments, and see noticeable results after around 12 treatments. "
         },
         {
            title: "How often should I do Lymphatic Compression?",
            text: "You can do the treatment 2-3 times every week, and consult with your practitioner about a long-term treatment plant."
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/lymphatic/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/rkgt920z9wn6x7/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/rkgt920z9wn6x7/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageLymph;