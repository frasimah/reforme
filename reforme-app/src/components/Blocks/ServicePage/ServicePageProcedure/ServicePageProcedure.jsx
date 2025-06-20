import { useRef, useEffect, useState, useCallback } from 'react'
import './ServicePageProcedure.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);


function ServicePageProcedure({ content }) {
   const listRef = useRef()

   // useEffect(() => {
   //    const listItems = gsap.utils.toArray(listRef.current.children)
   //    gsap.set(listItems, { opacity: 0, y: 30, })
   //    listItems.forEach((item, index) => {
   //       let animation = gsap.timeline()
   //          .to(item, { y: 0, opacity: 1, duration: .4, })
   //       ScrollTrigger.create({
   //          trigger: item,
   //          start: "top bottom-=10px",
   //          animation: animation,
   //          scrub: false,
   //       })
   //    })
   // }, []);

   // Отрытие/закрытие списка
   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const [lineClamp, setLineClamp] = useState(isMobile ? '8' : '9');
   const tariffsRef = useRef(null);
   const [heights, setHeights] = useState([]);
   const prevWidthRef = useRef(window.innerWidth); // Сохраняем предыдущую ширину экрана

   const handleClick = (e) => {
      const thisTarget = e.target;
      const thisParent = thisTarget.closest('.right');
      const textElement = thisParent.querySelector('.right__list');
      const totalHeight = textElement.scrollHeight;
      const thisBtn = thisParent.querySelector('.btn_more');
      // const thisBtnIndex = thisBtn.getAttribute('data-btn-id');

      // Задаем класс кнопке
      thisBtn.classList.toggle('active');

      // Выполняем действия в зависимости от класса на кнопке
      if (thisBtn.classList.contains('active')) {
         textElement.style.maxHeight = `${totalHeight}px`;
         thisBtn.textContent = 'Close';
      } else {
         textElement.style.maxHeight = `${heights}px`;
         thisBtn.textContent = 'More';
      }
   };


   const setMaxHeight = useCallback(() => {
      if (listRef.current) {

         // Получаеи массив все тарифов
         const thisTariff = Array.from(listRef.current);

         const returnNewHeight = () => {
            const thisText = listRef.current;

            // Убираем длительность анимации и высоту
            thisText.style.transition = 'unset';
            thisText.style.maxHeight = 'unset';
            thisText.style.display = '-webkit-box';
            // Получаем всю высоту
            const thisTextheight = thisText.scrollHeight;
            // задаем ограничение по строчка
            thisText.style.webkitLineClamp = lineClamp;
            // Получаем высоту с ограничением по строчкам
            const thisTextClampHeight = thisText.clientHeight;

            // Убираем ограничение по строкам
            thisText.style.webkitLineClamp = '';
            // Задаем высоту по ограничению
            thisText.style.maxHeight = `${thisTextClampHeight}px`;
            thisText.style.display = 'block';
            // Вовзращаем длительность анимации
            thisText.style.transition = '.4s';

            if (thisTextClampHeight < thisTextheight) {
               thisText.parentNode.querySelector('.btn_more').style.display = 'flex';
            } else {
               thisText.parentNode.querySelector('.btn_more').style.display = 'none';
            }


            // Вовзвращаем ограниченную высоту
            return thisTextClampHeight;
         }



         const newHeights = returnNewHeight()

         // Убираем при ресайзе активные классы у кнопок и меняем текст

         const thisBtn = listRef.current.parentNode.querySelector('.btn_more')
         thisBtn.classList.remove('active')
         thisBtn.textContent = 'More';


         // Собираем массив со значением высот
         setHeights(newHeights);
      }
   }, [lineClamp]);


   // Проверка ширины и выполнение функции
   useEffect(() => {
      setMaxHeight();

      const handleResize = () => {
         const currentWidth = window.innerWidth;

         if (currentWidth !== prevWidthRef.current) { // Проверяем, изменилась ли ширина
            const newIsMobile = currentWidth <= 767;
            setLineClamp(newIsMobile ? '8' : '9');
            setMaxHeight();
            prevWidthRef.current = currentWidth; // Обновляем предыдущую ширину
         }
      };

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, [setMaxHeight]);

   return (
      <section className='service_page_procedur'>
         <div className="container">
            <div className="procedur_wrap">
               <div className="procedur_wrap__head row">
                  <div className="offset-xl-7 col-xl-4 offset-md-6 col-md-6">
                     <div className="meta">
                        <h2 className="meta__title">
                           Additional benefits of the treatment
                        </h2>
                        <div className="meta__text" dangerouslySetInnerHTML={{ __html: content.headText }} />
                     </div>
                  </div>
               </div>
               <div className="procedur_wrap__body row">
                  <div className="col-md-6">
                     <div className="content">
                        <div className="left">
                           <div className="icon">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <circle cx="25" cy="25" r="23.5" fill="white" stroke="white" strokeWidth="3" />
                                 <path d="M23.55 26.4L22.89 18V12H26.79V18L26.1 26.4H23.55ZM26.43 32.7C25.99 33.14 25.46 33.36 24.84 33.36C24.22 33.36 23.69 33.14 23.25 32.7C22.81 32.26 22.59 31.73 22.59 31.11C22.59 30.49 22.8 29.96 23.22 29.52C23.66 29.08 24.2 28.86 24.84 28.86C25.46 28.86 25.99 29.08 26.43 29.52C26.87 29.96 27.09 30.49 27.09 31.11C27.09 31.73 26.87 32.26 26.43 32.7Z" fill="#2E2D2D" />
                              </svg>
                           </div>
                        </div>
                        <div className="right">
                           <h2 className="right__title">
                              Treatment Contraindications
                           </h2>
                           {content.indicationsText.length > 1 ? (
                              <div className="right__text" dangerouslySetInnerHTML={{ __html: content.indicationsText }} />
                           ) : <></>}
                           <ul className='right__list' ref={listRef}>
                              {content.indicationsList.map((item, index) => (
                                 <li key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
                              ))}
                           </ul>
                           <button type='button' className="btn_more" onClick={handleClick}>More</button>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col_img">
                     <div className="image">
                        <img src="./img/Services/procedure-new.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ServicePageProcedure;