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

function ServicePageLiashi() {
   const contentHead = {
      title: 'Iyashi Dôme Japanese Sauna',
      text: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly. ',
      cost: 'Cost: from $150/session',
      image: './img/Services/iyashi/head-new.jpg'
   }

   const contentFit = [
      {
         title: '45 min',
         textList: [
            {
               text: '<p>cost: $150.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/ict6o1xx80waq7/location/LVMDQHE5HPTQR/services/CIN3VMF4K2YMYYHMD3V2LWSY'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Reforme Your After Party',
         'text': 'since $500',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Reforme your time together',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LOGRYR7WGTTLPGPZ7V4STNZG'
      },
      {
         'title': 'Red Carpet',
         'text': 'since $1300',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/2QMFOOD5EYHSO4ZYEIK5PXER'
      },
      {
         'title': 'Magic Endosphere',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/Q3G3CPHY3UE2DQXKJBDQOSCN'
      },
   ]

   const contentAbout = {
      headText: 'Thanks to the infrared rays, the Japanese sauna cleanses the body of toxins caused by stress, pollution, and ultra processed foods. The sauna helps with weight loss, detoxification, anti-aging and skin rejuvenation, as well as improved sleep and relaxation.',
      listWorks: [
         { workText: 'Through perspiration, the Iyashi Dôme helps the body flush toxins.' },
         { workText: 'It also increases the metabolism, and helps in weight loss as well as the reduction of cellulite.' },
         { workText: 'The infrared therapy dilates the veins, increasing blood flow and relaxation. ' },
         { workText: 'After several sessions, clients notice a more toned body, and long term, consistent use of the Iyashi Dôme can prompt the body to flush heavy metal toxins.' },
      ],
      listImages: [
         { image: './img/Services/iyashi/slide1.jpg', alt: '' },
         { image: './img/Services/iyashi/slide2.jpg', alt: '' },
         { image: './img/Services/iyashi/slide1.jpg', alt: '' },
         { image: './img/Services/iyashi/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'Clients feel detoxed after a session in the Iyashi Dôme. Skin feels softer, and the body feels more relaxed, aiding in deeper sleep and relieving jet lag. For athletes, a session in the Japanese sauna can be extremely helpful with recovering from fatigue.',
      videoLink: './img/Services/iyashi/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'The effects of a 30 minute session in the Iyashi Dôme equal a 20 kilometer run, flushing 1,200 milliliters of sweat, and burning 600 calories.',
      indicationsText: 'The Iyashi Dôme is an effective treatment for anyone seeking to incorporate more wellness practices into their lifestyle. ',
      indicationsList: [
         { text: 'The Iyashi Dôme is contraindicated during pregnancy; for anyone with serious health conditions, consult a physician first. ' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'Each session lasts for approximately 30 minutes. During the first 15 minutes, clients lie on their back and soak up the heat. This part of the process is very relaxing. ',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.0002 4.66667L10.7856 8.33333M17.5 4.66667C19.2084 4.66667 20.0626 4.66667 20.7366 4.94577C21.6349 5.31792 22.3488 6.03173 22.7208 6.93016C23 7.60398 23 8.45822 23 10.1667V17.1333C23 19.1869 23 20.2136 22.6003 20.998C22.2488 21.6879 21.6879 22.2488 20.998 22.6003C20.2136 23 19.1869 23 17.1333 23H6.86667C4.81314 23 3.78637 23 3.00204 22.6003C2.3121 22.2488 1.75118 21.6879 1.39964 20.998C1 20.2136 1 19.1869 1 17.1333V10.1667C1 8.45822 1 7.60398 1.27911 6.93016C1.65125 6.03173 2.36506 5.31792 3.26349 4.94577C3.93732 4.66667 4.79155 4.66667 6.5 4.66667M9.55556 18.1111H14.4444M10.2174 1H13.783C15.1041 1 15.7647 1 16.2536 1.22661C16.9055 1.52876 17.3915 2.10243 17.5824 2.79518C17.7255 3.31473 17.617 3.96631 17.3998 5.26947C17.2387 6.23571 17.1581 6.71883 16.9438 7.09618C16.658 7.59932 16.203 7.98477 15.6597 8.18395C15.2523 8.33333 14.7625 8.33333 13.783 8.33333H10.2174C9.23785 8.33333 8.74807 8.33333 8.34062 8.18395C7.79734 7.98477 7.34233 7.59932 7.05655 7.09618C6.84221 6.71883 6.76169 6.23571 6.60065 5.26947C6.38346 3.96631 6.27487 3.31473 6.418 2.79518C6.60885 2.10243 7.09484 1.52876 7.74678 1.22661C8.23573 1 8.8963 1 10.2174 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'During the last 15 minutes, clients lie on their back and the sweating increases; this is considered the more athletic session of the sauna, since clients sweat so much and typically burn around 600 calories. ',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 20 26" fill="none"><path d="M10 4C14.9705 4 19 8.02944 19 13V14.5H1V13C1 8.02944 5.02944 4 10 4ZM10 4V1M4 20.5H4.015M4 25H4.015M10 20.5H10.015M10 25H10.015M16 20.5H16.015M16 25H16.015" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'It’s important to strip down before a session, and to shower after a session. ',
      },
      ]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/iyashi/questions.jpg",
      questions: [
         {
            title: "How many sessions in the Iyashi Dôme do I need?",
            text: "Typically, people notice results as quickly as one session, but it’s recommended to use the sauna in a treatment package of ten sessions. "
         },
         {
            title: "Should I remove skincare and makeup before a session?",
            text: "Yes, it’s best that your skin is totally free of any products, including skincare products, before a treatment, due to the amount of sweat your body will produce. Skincare products are perfectly acceptable to apply after showering following the treatment. "
         },
         {
            title: "What do I wear to a session? ",
            text: "It’s best to be naked in the Iyashi Dôme. Linens and towels will be provided for your comfort. "
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/iyashi/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/ict6o1xx80waq7/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/ict6o1xx80waq7/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageLiashi;