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

function ServicePageEndo() {

   const contentHead = {
      title: 'Endospheres',
      text: `Endospheres is a revolutionary, non-invasive treatment designed to
            sculpt, tone, and rejuvenate your body. By delivering low-frequency
            vibrations deep into muscle tissue, it effectively reduces cellulite,
            tightens skin, and enhances muscle tone. This innovative therapy
            stimulates lymphatic drainage, eliminates toxins, and minimizes fluid
            retention, leaving you feeling refreshed, revitalized, and more confident
            in your skin.
            `,
      cost: 'Cost: from $180/session',
      image: './img/Services/Endo/endo-head-new.jpg'
   }

   const contentFit = [
      {
         title: 'Endosfera Body Therapy',
         textList: [
            {
               text: '<p>cost: $180.00 / 45 min</p>',
            },
            {
               text: '<p>cost: $250.00 / 1 hr</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/VIXQ6YUJFMTEQOZA7I22WX5S'
      },
      {
         title: 'Endospheres Facial Treatment',
         textList: [
            {
               text: '<p>Cost: $350.00 / 45 min</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/AY3NEGVUMIUY4T2RWPXYDUDU'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Magic Endosphere',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/Q3G3CPHY3UE2DQXKJBDQOSCN'
      },
      {
         'title': 'Reforme Your Jet Lag',
         'text': 'since $750',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/L34DF5G2N2VBNZHOK6MWF72B'
      },
      {
         'title': 'Reforme Your After Party',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Reforme your time together',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Red Carpet',
         'text': 'since $40',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/2QMFOOD5EYHSO4ZYEIK5PXER'
      },
      {
         'title': 'Reforme Your Libido',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/P7PGD2PUWEYYPMIBAOPT7FIG'
      }
   ]

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
         { image: './img/Services/Endo/endo1.jpg', alt: '' },
         { image: './img/Services/Endo/endo2.jpg', alt: '' },
         { image: './img/Services/Endo/endo1.jpg', alt: '' },
         { image: './img/Services/Endo/endo2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: `Endosphères Therapy delivers noticable and transformative results. The
                  treatment sculpts the body, firms the skin, and enhances elasticity,
                  leaving you with a smoother, more toned appearance. It also alleviates
                  muscle tension and promotes overall wellness, offering a non-invasive
                  solution for a healthier, more sculpted body`,
      videoLink: './img/Services/Endo/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'Endosphères Therapy offers powerful pain relief by reducing inflammation, soothing sore muscles, and relieving tension',
      indicationsText: 'Your safety is our priority. Please avoid this treatment if you:',
      indicationsList: [
         { text: 'Are pregnant or breastfeeding' },
         { text: 'Have deep vein thrombosis or phlebitis' },
         { text: 'Suffer from severe varicose veins' },
         { text: 'Are taking anticoagulants' },
         {
            text: 'Have undergone surgery within the past 3 months'
         },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 8.22222V16L19.8889 13.6667M30 16C30 23.732 23.732 30 16 30C8.26802 30 2 23.732 2 16C2 8.26802 8.26802 2 16 2C23.732 2 30 8.26802 30 16Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'The treatments typically take between 30-60 minutes depending on the targeted areas.',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="42" viewBox="0 0 22 42" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895431 0 0 0.895432 0 2V27.0282C0 28.1328 0.89543 29.0282 2 29.0282H7.33594V38.2505C7.33594 39.9073 8.67909 41.2505 10.3359 41.2505H11.6693C13.3261 41.2505 14.6693 39.9073 14.6693 38.2505V29.0282H20C21.1046 29.0282 22 28.1328 22 27.0282V2C22 0.895431 21.1046 0 20 0H2ZM9.53073 6.87445C9.53073 8.56201 8.21743 9.93005 6.5974 9.93005C4.97736 9.93005 3.66406 8.56201 3.66406 6.87445C3.66406 5.18689 4.97736 3.81885 6.5974 3.81885C8.21743 3.81885 9.53073 5.18689 9.53073 6.87445ZM15.3984 9.93005C17.0184 9.93005 18.3317 8.56201 18.3317 6.87445C18.3317 5.18689 17.0184 3.81885 15.3984 3.81885C13.7783 3.81885 12.465 5.18689 12.465 6.87445C12.465 8.56201 13.7783 9.93005 15.3984 9.93005ZM9.53073 14.5148C9.53073 16.2024 8.21743 17.5704 6.5974 17.5704C4.97736 17.5704 3.66406 16.2024 3.66406 14.5148C3.66406 12.8273 4.97736 11.4592 6.5974 11.4592C8.21743 11.4592 9.53073 12.8273 9.53073 14.5148ZM15.3984 17.5704C17.0184 17.5704 18.3317 16.2024 18.3317 14.5148C18.3317 12.8273 17.0184 11.4592 15.3984 11.4592C13.7783 11.4592 12.465 12.8273 12.465 14.5148C12.465 16.2024 13.7783 17.5704 15.3984 17.5704ZM9.53073 22.1539C9.53073 23.8414 8.21743 25.2095 6.5974 25.2095C4.97736 25.2095 3.66406 23.8414 3.66406 22.1539C3.66406 20.4663 4.97736 19.0983 6.5974 19.0983C8.21743 19.0983 9.53073 20.4663 9.53073 22.1539ZM15.3984 25.2095C17.0184 25.2095 18.3317 23.8414 18.3317 22.1539C18.3317 20.4663 17.0184 19.0983 15.3984 19.0983C13.7783 19.0983 12.465 20.4663 12.465 22.1539C12.465 23.8414 13.7783 25.2095 15.3984 25.2095Z" fill="white" /></svg>,
         text: 'Using the Endospheres roller, the practitioner will roll over a targeted area to create a rhythmic massage.',
      },
      {
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M26.3147 0.130282C22.6788 1.97414 18.6817 2.93042 14.4437 2.93042C7.22942 2.93042 1.74126 0.130282 1.67818 0.130282C0.582841 -0.304914 -0.0881249 0.410869 0.00936593 1.37861L2.63588 18.231C4.41939 26.8204 11.4043 28 14.0251 28C16.6459 28 24.3018 26.4711 25.357 18.294L27.9835 1.37861C28.1383 0.324975 27.1749 -0.282009 26.3147 0.130282ZM23.0917 17.939C22.0193 24.6959 16.1756 25.6809 14.0251 25.6809C11.8746 25.6809 6.03086 24.3638 4.95846 17.939L2.63015 3.05068C5.0158 4.00124 9.31114 5.25529 14.5011 5.25529C18.3204 5.25529 21.9563 4.60249 25.357 3.17093L23.0917 17.939Z" fill="white" /><path d="M11.4626 10.7922C12.0016 10.4372 12.1163 9.72142 11.7034 9.18315C11.3479 8.64488 10.631 8.53036 10.092 8.94265C8.89914 9.83595 7.70631 9.0629 7.58588 8.94265C7.10989 8.58762 6.39305 8.64488 5.97441 9.18315C5.61886 9.65843 5.67621 10.3742 6.21527 10.7922C6.75434 11.2102 7.76365 11.6855 8.95648 11.6855C9.73068 11.6855 10.6884 11.445 11.4626 10.7922Z" fill="white" /><path d="M16.5317 10.7922C17.0707 11.2102 18.0801 11.6855 19.2729 11.6855C20.1102 11.6855 21.0048 11.445 21.779 10.7922C22.318 10.4372 22.4327 9.72142 22.0198 9.18315C21.6643 8.64488 20.9474 8.53036 20.4084 8.94265C19.2155 9.83595 18.0227 9.0629 17.9023 8.94265C17.4263 8.58762 16.7095 8.64488 16.2908 9.18315C15.9353 9.65843 15.9926 10.3742 16.5317 10.7922Z" fill="white" /><path d="M19.335 15.9697C18.859 15.4945 18.0848 15.5517 17.6662 16.027C16.5938 17.2181 15.401 17.8136 14.2081 17.8136C12.1207 17.8136 10.3888 16.0843 10.3888 16.027C9.9128 15.5517 9.19595 15.5517 8.71997 15.9697C8.24399 16.445 8.24399 17.1608 8.66262 17.6361C8.78305 17.7563 11.0483 20.1957 14.2081 20.1957C16.1178 20.1957 17.844 19.3024 19.3981 17.6361C19.811 17.1608 19.811 16.3878 19.335 15.9697Z" fill="white" /></svg>,
         text: 'If you are having Endospheres therapy on the face, cleanse your face before arriving so that it’s makeup free.',
      }]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/Endo/questions.jpg",
      questions: [
         {
            title: "Do I need to prepare for an Endospheres treatment?",
            text: "No, there’s nothing you need to do to prepare for an Endospheres treatment. It’s helpful to be hydrated, though, so drink water beforehand. "
         },
         {
            title: "Does it hurt?",
            text: "You’ll start to notice results right away, and results can last up to six months. Your practitioner will discuss the best course of treatment, as the more consistent you are, the better the results."
         },
         {
            title: "How long do results last?",
            text: "You’ll start to notice results right away, and results can last up to six months. Your practitioner will discuss the best course of treatment, as the more consistent you are, the better the results."
         },
         {
            title: "How many treatments do I need?",
            text: "You can see results like cellulite reduction and skin tightening in as little as a few sessions, though most practitioners recommend around six sessions. "
         }
      ],
   }

   const contentSpace = {
      image: '../img/Services/Endo/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/m4vlx9j92uyvel/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/m4vlx9j92uyvel/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageEndo;