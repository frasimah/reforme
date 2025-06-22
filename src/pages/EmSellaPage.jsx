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

function EmSellaPage() {
   const contentHead = {
      title: 'The BTL EmSella chair',
      text: 'The BTL EmSella chair offers a non-invasive solution to strengthen pelvic floor muscles using electromagnetic technology. A 30-minute session equals 10,000 Kegels, enhancing sexual health, blood flow, and vaginal tightness. It also aids in preventing prostatitis and alleviating urinary incontinence.',
      cost: 'Cost: from $200',
      image: './img/Services/emsella/head-new.jpg'
   }

   const contentFit = [
      {
         title: '15 min',
         textList: [
            {
               text: '<p>cost: $200.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/8gk8ny6kghqnjr/location/LVMDQHE5HPTQR/services/CEHQCH4QPTTUUONTQ72VNK2Y'
      },
      {
         title: '30 min',
         textList: [
            {
               text: '<p>cost: $350.00</p>',
            },
         ],
         link: 'https://book.squareup.com/appointments/8gk8ny6kghqnjr/location/LVMDQHE5HPTQR/services/CEHQCH4QPTTUUONTQ72VNK2Y'
      },
   ]

   const contentFitAlso = [
      {
         'title': 'Magic Endosphere',
         'text': 'since $600',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/Q3G3CPHY3UE2DQXKJBDQOSCN'
      },
      {
         'title': 'Reforme Your After Party',
         'text': 'since $650',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LALLPVPWDH65H7HOFU4LREIE'
      },
      {
         'title': 'Reforme Your Time Together',
         'text': 'since $650',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/LOGRYR7WGTTLPGPZ7V4STNZG'
      },
      {
         'title': 'Red Carpet',
         'text': 'since $1300',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/2QMFOOD5EYHSO4ZYEIK5PXER'
      },
      {
         'title': 'Reforme Your Libido',
         'text': 'since $500',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/P7PGD2PUWEYYPMIBAOPT7FIG'
      },
      {
         'title': 'BTL Emsella Chair & IV',
         'text': 'since $400',
         'link': 'https://book.squareup.com/appointments/ajrcmyfzqm6qio/location/LVMDQHE5HPTQR/services/OIENT6DODVX34R5VNQOGNBM5'
      },
   ]

   const contentAbout = {
      headText: 'The EmSella chair works through focused electromagnetic exposure, called HIFEM. There is no discomfort during the procedure. All sensations are limited to the contraction and relaxation of the pelvic floor muscles.',
      listWorks: [
         { workText: 'The treatment alleviates:  prolapse of the pelvic organs after childbirth or other stress, sexual dysfunction and problems in intimate life, chronic pelvic pain, erectile dysfunction, congestion in prostatitis, consequences of impaired neuromuscular control of the bladder, urinary incontinence, including stress and urgent incontinence, the procedure is often prescribed to women for accelerated recovery after childbirth. If gynecological operations and physiotherapy were performed, training with the BTL EmSella will be useful.' },
         { workText: 'Advantages of the technology: Patients notice positive changes after just one session, reduction in the severity of symptoms and discomfort by 75%. cumulative effect: the more procedures, the more noticeable the result of the therapy.' },
      ],
      listImages: [
         { image: './img/Services/emsella/slide1.jpg', alt: '' },
         { image: './img/Services/emsella/slide2.jpg', alt: '' },
         { image: './img/Services/emsella/slide1.jpg', alt: '' },
         { image: './img/Services/emsella/slide2.jpg', alt: '' },
      ]
   }

   const contentResult = {
      resultText: 'Both men and women quickly noticed improved intimate life, restored control over urination, and strengthened pelvic floor muscles at any age, even after complicated childbirth, all achieved effortlessly without physical exercises or significant time investment.',
      videoLink: './img/Services/emsella/video-new.jpg'
   }

   const contentProcedure = {
      headText: '<p>Patients also noticed improvements in the following areas:</p> <ul><li>-Increased blood circulation in the pelvic muscles.</li><li>-Alleviation of chronic pelvic pain in men.</li><li>-Treatment of erectile dysfunction.</li><li>-Treatment of prostatitis.</li></ul>',
      indicationsText: '',
      indicationsList: [
         { text: '<p>The treatment is contraindicated for:</p><ul><li>• Pregnancy</li><li>• Menstruation</li><li>• Implantation of a cardiac pacemaker</li><li>• Insulin pump</li><li>• Other electronic implantable devices</li><li>• Metal implants (except dental)</li><li>• Intrauterine device with a metal component and other devices containing metal, piercing</li><li>• Gynecological diseases requiring surgical treatment</li></ul>' },
         { text: '<p>Severe somatic conditions, including:</p><ul><li>• Respiratory and cardiovascular failure</li><li>• Uncontrolled cardiac arrhythmia</li><li>• Feverish conditions</li><li>• Malignant tumors</li><li>• Severe hemostasis disorders requiring permanent anticoagulant therapy</li></ul>' },
      ]
   }

   const contentTech = {
      listTech: [{
         icon: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 6.88889V13L16.0556 11.1667M24 13C24 19.0752 19.0752 24 13 24C6.92487 24 2 19.0752 2 13C2 6.92487 6.92487 2 13 2C19.0752 2 24 6.92487 24 13Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
         text: 'Sessions typically last for 15-30 minutes. You will be offered a blanket for added coverage, since you’ll sit with your legs apart.',
      },
      ]
   }

   const contentSpecialist = {
      imageSpecialist: [
         { image: './img/Services/specialists/spec1.jpg', alt: '' },
         { image: './img/Services/specialists/spec2.jpg', alt: '' },
         { image: './img/Services/specialists/spec3.jpg', alt: '' },
      ],
      imageQuestions: "./img/Services/emsella/questions.jpg",
      questions: [
         {
            title: "What do I wear for an Emsella session?",
            text: "You can wear the comfortable clothing that you arrived in. There is no need to undress. You will sit comfortably in the chair with your feet planted on the ground. We will provide a blanket should you wish to cover your legs, should you wish for added coverage. The secret of the technique lies in the radiation of an electromagnetic field, which is generated by the BTL EmSella chair itself."
         },
         {
            title: "How many treatments does it take to see results?",
            text: "On average, the course involves 6 to 10 therapy sessions with an interval of 2-3 days between sessions. The minimum number of procedures is 6 sessions. This is a standard course that can be extended if necessary. Also, check out the gynecology programs that are available in our clinic."
         },
         {
            title: "Is the treatment uncomfortable?",
            text: "No, EmSella is a comfortable procedure which does not cause pain. The workout can be done even during menstruation, if there are no special contraindications. Since it’s a non-invasive technique, you can relax during the procedure, and you will not need any down time following the procedure."
         },
      ],
   }

   const contentSpace = {
      image: '../img/Services/emsella/space.jpg', alt: 'Immersive beauty space'
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
         <Space content={contentSpace} link={'https://app.squareup.com/appointments/buyer/widget/4dx27s2ybcafkt/LVMDQHE5HPTQR'} />
         <BtnServices link={'https://app.squareup.com/appointments/buyer/widget/4dx27s2ybcafkt/LVMDQHE5HPTQR'} />
      </>
   );
}

export default EmSellaPage;