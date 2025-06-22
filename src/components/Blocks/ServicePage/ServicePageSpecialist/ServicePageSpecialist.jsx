import { useEffect, useRef } from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './ServicePageSpecialist.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function ServicePageSpecialist({ content }) {
   const listRef = useRef()

   useEffect(() => {
      const listItems = gsap.utils.toArray(listRef.current.children)
      gsap.set(listItems, { opacity: 0, y: 30, })
      listItems.forEach((item, index) => {
         let animation = gsap.timeline()
            .to(item, { y: 0, opacity: 1, duration: .4, })
         ScrollTrigger.create({
            trigger: item,
            start: "top bottom-=10px",
            animation: animation,
            scrub: false,
         })
      })
   }, []);
   return (
      <section className='service_page_spec'>
         <div className="container">
            <div className="page_spec_wrap">
               <div className="head row">
                  <div className="col-xl-6 col-md-5">
                     <h2 className='head__title'>
                        The specialist <br />
                        who performs <br />
                        the procedure <br />
                     </h2>
                  </div>
                  <div className="col-xl-6 col-md-7">
                     <div className="head_right no_doctor row">
                        <div className="head_right_top">
                           <div className="head_right__text">
                              <p>
                                 A&nbsp;trained and certified practitioner at&nbsp;Reforme will conduct the&nbsp;procedure.
                              </p>
                           </div>
                           {/* <div className="head_right__specialist">
                              <div className="avatar">
                                 <img src="./img/Services/specialists/spec1.jpg" alt="" />
                              </div>
                              <div className="meta">
                                 <div className="name">Melanie Smith</div>
                                 <div className="job">Cosmetologist</div>
                              </div>
                           </div> */}
                        </div>
                        <div className="col-12">
                           <div className="head_right_warn">
                              <div className="icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8.5" fill="white" stroke="white" strokeWidth="3" />
                                    <path d="M9.23686 11.8577L8.84575 7.66294V4.66669H11.1569V7.66294L10.748 11.8577H9.23686ZM10.9435 15.0038C10.6828 15.2235 10.3687 15.3334 10.0013 15.3334C9.63389 15.3334 9.31982 15.2235 9.05908 15.0038C8.79834 14.784 8.66797 14.5194 8.66797 14.2098C8.66797 13.9001 8.79241 13.6355 9.0413 13.4158C9.30204 13.196 9.62204 13.0862 10.0013 13.0862C10.3687 13.0862 10.6828 13.196 10.9435 13.4158C11.2043 13.6355 11.3346 13.9001 11.3346 14.2098C11.3346 14.5194 11.2043 14.784 10.9435 15.0038Z" fill="#2E2D2D" />
                                 </svg>
                              </div>
                              <div className="head_right_warn-text">
                                 <p>
                                    The number of sessions is determined by the specialist for each patient according
                                    to individual criteria, based on the indications, health condition, age, and other factors.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="body_content row">
                  <div className="col-xl-4">
                     <div className="body_content__image">
                        <img src={content.imageQuestions} alt="" />
                     </div>
                  </div>
                  <div className="offset-xl-2 col-xl-6">
                     <div className="questions">
                        <h2 className="questions__title">
                           Q&A about <br />
                           the procedure
                        </h2>
                        <Accordion className='questions__list' transition transitionTimeout={400} ref={listRef}>
                           {content.questions.map((question, index) => (
                              <AccordionItem
                                 className="questions__list-item"
                                 header={
                                    <h3 className="title">
                                       <span>{question.title}</span>
                                       <div className="icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                                             <path d="M1 1.24512L8 7.24512L15 1.24512" stroke="#929191" strokeWidth="1.8" />
                                          </svg>
                                       </div>
                                    </h3>
                                 }
                                 key={index}>
                                 {question.text}
                              </AccordionItem>
                           ))}
                        </Accordion>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section >
   );
}

export default ServicePageSpecialist;