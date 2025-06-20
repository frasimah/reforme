import ServicesItem from '../ServicesItem/ServicesItem';
import './ServicesList.scss';

function ServicesList() {

   const serviceList = [
      {
         title: 'Endospheres',
         description: 'Endospheres Compressive Micro Vibration is a non-invasive treatment that reduces cellulite, tightens skin, and tones muscle.',
         cost: 'Cost: from $180/session',
         link: '/endospheres'
      },
      {
         title: 'Lymphatic Compression',
         description: 'The Lymphatic Compression treatments at Reforme use BallancerPro compression therapy to treat and drain the lymphatic system.',
         cost: 'Cost: from $200/session',
         link: '/lymphatic-compression'
      },
      {
         title: 'Iyashi Dôme Japanese Sauna',
         description: 'Iyashi means wellbeing in Japanese. The Iyashi Dôme is a type of Japanese sauna that uses far infrared rays to heat up the body directly. ',
         cost: 'Cost: from $150/session',
         link: '/iyashi-dôme-japanese-sauna'
      },
      {
         title: 'Hyperbaric Oxygen Chamber',
         description: 'Hyperbaric Oxygen Therapy delivers pure oxygen in an environment where the air is 2-3 times more pressurized than normal. ',
         cost: 'Cost: from $150/session 30 minutes',
         link: '/hyperbaric-oxygen-chamber'
      },
      {
         title: 'Red Light Therapy & LED Collagen Bed',
         description: 'The Red Light Therapy & LED Collagen Bed uses low-level wavelengths to minimize the appearance of wrinkles and fine lines.',
         cost: 'Cost: from $150/session 10 minutes',
         link: '/red-light-therapy-led-collagen-bed'
      },
      {
         title: 'IV Therapy',
         description: 'IV Therapy offers a combination of hydration and mixtures of much-needed supplements through an intravenous treatment. ',
         cost: 'Cost: from $150/session',
         link: '/iv-therapy'
      },
      {
         title: 'The BTL EmSella chair',
         description: 'The BTL EmSella chair offers a non-invasive solution to strengthen pelvic floor muscles using electromagnetic technology. A 30-minute session equals 10,000 Kegels, enhancing sexual health, blood flow, and vaginal tightness. It also aids in preventing prostatitis and alleviating urinary incontinence.',
         cost: 'Cost: from $200',
         link: '/the-btl-emsella-chair'
      },
      {
         title: 'Biologique Rechercher',
         description: 'Our methodology is the fruit of over four decades of experience. Based on unique and personalized skincare protocols, each stage is adapted to the Skin Instant© of each individual. These treatments include face, body and scalp and are equally suitable for both men and women. The three principal stages include:',
         cost: '',
         link: '/biologique-recherche'
      },
   ]

   return (
      <div className='service_page_list'>
         {serviceList.map((item, index) => (
            <ServicesItem thisItem={item} key={index} />
         ))}
      </div>

   );
}

export default ServicesList;