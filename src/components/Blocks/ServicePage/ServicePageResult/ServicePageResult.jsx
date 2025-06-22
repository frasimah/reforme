import './ServicePageResult.scss'

function ServicePageResult({ content, isHeader = false, headerContent }) {
   return (
      <>
         {isHeader && (
            <div className="result_header">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                        <h2 className='result_header-title' dangerouslySetInnerHTML={{ __html: headerContent?.title }} />
                     </div>
                     <div className="col-xxl-5 col-md-6">
                        <div className="result_header-text" dangerouslySetInnerHTML={{ __html: headerContent?.text }} />
                     </div>
                  </div>
               </div>
            </div>
         )}
         <section className={`service_page_result ${content.isIndex ? 'index' : ''}`}>
            <div className="result_wrap">
               {!content.showIcon &&
                  <div className="result_wrap__icon icon">
                     <svg width="50" height="58" viewBox="0 0 50 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 1C2 1 10.7552 16.8879 10.9948 28.0667C11.2493 39.9368 2 57 2 57" stroke="white" strokeWidth="2.5" />
                        <ellipse cx="24" cy="47" rx="3" ry="4" fill="white" />
                        <path d="M48 1C48 1 39.2448 16.8879 39.0052 28.0667C38.7507 39.9368 48 57 48 57" stroke="white" strokeWidth="2.5" />
                     </svg>
                  </div>
               }
               <h2 className="result_wrap__title">
                  {content.title ? content.title : 'The results of the procedure'}
               </h2>
               <div className="result_wrap__text">
                  <p>
                     {content.resultText}
                  </p>
               </div>
               <div className="result_wrap__image">
                  <img src={content.videoLink} alt="" />
               </div>
            </div>
         </section>
      </>
   );
}

export default ServicePageResult;