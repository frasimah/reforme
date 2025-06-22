import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class AnimateText extends React.Component {
   constructor(props) {
      super(props);
      this.containerRef = React.createRef();
      this.scrollTrigger = null;
   }

   componentDidMount() {
      const { textClass, colorStart, colorEnd } = this.props;
      const container = this.containerRef.current;
      const textElements = container.querySelectorAll(`${textClass}`);
      if (container) {
         textElements.forEach(textElement => {
            const textNodes = textElement.childNodes;
            textNodes.forEach(node => {
               if (node.nodeType === Node.TEXT_NODE) {
                  const cleanedText = node.textContent.replace(/\s{2,}/g, ' ').trim();
                  const spannedText = cleanedText.split('').map(char => `<span>${char}</span>`).join('');
                  const spanWrapper = document.createElement('span');
                  spanWrapper.innerHTML = spannedText;
                  textElement.replaceChild(spanWrapper, node);
               }
            });

            const childSpans = textElement.querySelectorAll('span');
            this.scrollTrigger = null;
            this.scrollTrigger = ScrollTrigger.create({
               trigger: container,
               start: "top bottom-=10%",
               end: "+=80%",
               scrub: true,
               toggleActions: "play none none reverse",
               animation: gsap.fromTo(childSpans, {
                  color: colorStart
               }, {
                  color: colorEnd,
                  duration: 0.5,
                  stagger: {
                     amount: 1,
                  }
               })
            });
         });
      }
   }

   render() {
      const { containerClass, children } = this.props;
      return (
         <div className={containerClass} ref={this.containerRef}>
            {children}
         </div>
      );
   }
}

export default AnimateText;
