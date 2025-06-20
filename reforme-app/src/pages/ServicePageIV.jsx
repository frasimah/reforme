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

function ServicePageIV() {
   const contentHead = {
      title: 'IV Therapy',
      text: 'IV Therapy offers a combination of hydration and mixtures of much-needed supplements through an intravenous treatment. ',
      cost: 'Cost: from $150/session',
      image: './img/Services/therapy/head-new.jpg'
   }

   const contentFit = [
      {
         title: 'IV',
         textList: [
            {
               text: '<p>Price varies depending on your ingredients ($150-450) / 30 min</p>',
            },
            {
               text: '<p>Add On to IV: Alleviate / Free</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/s5o0gsmn7j6g20/location/LVMDQHE5HPTQR/services'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Reforme Your Jet Lag',
         'text': 'since $750',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/L34DF5G2N2VBNZHOK6MWF72B'
      },
      {
         'title': 'Reforme Your After Party',
         'text': 'since $500',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Reforme Your Time Together',
         'text': 'since $400',
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
         'title': 'Red Light Therapy & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/FHIITD7XPZNRK4KQHP5J7RMH'
      },
      {
         'title': 'BTL Emsella Chair & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/OIENT6DODVX34R5VNQOGNBM5'
      },
      {
         'title': 'Ballancer Pro Lymphatic Drainage & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/BTB7H5SEB2C7PNYSA5H43LNI'
      },
   ]

   const contentAbout = {
      headText: 'The nutrients enter directly into the bloodstream, giving instant results. This means that it’s possible to digest 100% of the vitamins in the IV drip. ',
      listWorks: [
         { workText: 'IV Therapy offers a variety of treatments depending on particular needs. Some IV Treatments focus on hydration, while others focus on immunity and detox, offering instant wellness and recovery.' },
         { workText: 'The therapy increases energy, while aiding in recovery from dehydration as well as jet lag' },
      ],
      listImages: [
         { image: './img/Services/therapy/slide1.jpg', alt: '' },
         { image: './img/Services/therapy/slide2.jpg', alt: '' },
         { image: './img/Services/therapy/slide1.jpg', alt: '' },
         { image: './img/Services/therapy/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'Since the results are immediate, the IV Treatment can distribute its benefits throughout the body during the session. Enjoy a nutrient and hydration boost through these customizable IV drips.',
      videoLink: './img/Services/therapy/video-new.jpg'
   }

   const contentProcedure = {
      headText: 'An IV Treatment can be easily joined with other treatments at Reforme, to make the most of your visit.',
      indicationsText: '',
      indicationsList: [
         { text: 'While IV Treatments tend to be safe and beneficial to all, consult your doctor if you have any concerns prior to a treatment.' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'The IV Treatments typically take about 30 minutes, and since the treatment enters the bloodstream, your body can immediately absorb all of the benefits.',
      },
      ]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/therapy/questions.jpg",
      questions: [
         {
            title: "What do I do during my IV Treatment?",
            text: "Since you’ll be sitting to receive your IV treatment, many like to rest or meditate during the experience. However, you can bring a book or use your phone during the process."
         },
         {
            title: "Do I need to eat before my appointment? ",
            text: "It’s important to drink fluids before your appointment, and it’s wise to eat 1-2 hours before an IV Treatment so that the food supports your parasympathetic nervous system."
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/therapy/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/s5o0gsmn7j6g20/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/s5o0gsmn7j6g20/LVMDQHE5HPTQR'} />
      </>
   );
}

export default ServicePageIV;