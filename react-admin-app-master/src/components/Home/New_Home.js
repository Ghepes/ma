import React,{useRef} from 'react'
import Background from './img/why-us.png'
import { useHistory } from 'react-router-dom'
import {TOKEN} from '../../Config'
import $ from 'jquery'
import { useTranslation } from 'react-i18next'
import {Link} from 'react-scroll'

const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
  }
const Home=()=>{
    let history=useHistory();
    let myRef = React.createRef();
    const [t,i18n]=useTranslation();
    return(
        <>
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <h1 className="logo mr-auto"><a onClick={()=>{history.push('/')}} href="#">{t('translations.Home.company_name')}</a></h1>
                {
                    isLoggedIn()===true && <a href="#" onClick={()=>{history.push('/dashboard')}} className="get-started-btn scrollto">{t('translations.Side_Nav.Dashboard')}</a>
                }
                {
                    isLoggedIn()===false && <a href="#" onClick={()=>{history.push('/login')}} className="get-started-btn scrollto">{t('translations.Account.Login')}</a>
                }
            </div>
        </header>
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h1>{t('translations.Home.text1')}</h1>
                        <h2>{t('translations.Home.text2')}</h2>
                        <div className="d-lg-flex">
                          {/* <Link to="#about">{t('Home.button_text')}</Link> */}
                            {/* <a href="#about" className="btn-get-started scrollto">{t('Home.button_text')}</a> */}
                            <Link style={{cursor:'pointer'}} className="btn-get-started scrollto" spy={true} smooth={true} to="about">{t('translations.Home.button_text')}</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <main id="main">
        <section id="about" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t('translations.Home.Key_Features.name')}</h2>
          <p>{t('translations.Home.Key_Features.para1')}</p>
          <p>{t('translations.Home.Key_Features.para2')}</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="">{t('translations.Home.Key_Features.card1.title')}</a></h4>
              <p>{t('translations.Home.Key_Features.card1.body')}</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="">{t('translations.Home.Key_Features.card2.title')}</a></h4>
              <p>{t('translations.Home.Key_Features.card2.body')}</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="">{t('translations.Home.Key_Features.card3.title')}</a></h4>
              <p>{t('translations.Home.Key_Features.card3.body')}</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-layer"></i></div>
              <h4><a href="">{t('translations.Home.Key_Features.card4.title')}</a></h4>
              <p>{t('translations.Home.Key_Features.card4.body')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
            {/* <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>{t('translations.Home.Key_Features.name')}</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                            {t('translations.Home.Key_Features.para1')}
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> {t('translations.Home.Key_Features.keys.1')}</li>
                                <li><i className="ri-check-double-line"></i> {t('translations.Home.Key_Features.keys.2')}</li>
                                <li><i className="ri-check-double-line"></i> {t('translations.Home.Key_Features.keys.3')}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                        {t('translations.Home.Key_Features.para2')}
                        </p>
                        <Link to="why-us" spy={true} smooth={true} className="btn-learn-more scrollto" style={{cursor:'pointer'}} >{t('translations.Home.Key_Features.button_text')}</Link>
                    </div>
                </div>
            </div>
        </section> */}

    
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>{t('translations.Home.text3')} <strong>{t('translations.Home.text4')}</strong></h3>
              <p>
              {t('translations.Home.text5')}
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a data-toggle="collapse" className="collapse" href="#accordion-list-1"><span>01</span> {t('translations.Home.section1.title')} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-parent=".accordion-list">
                    <p>
                    {t('translations.Home.section1.body')}
                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span> {t('translations.Home.section2.title')} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                    <p>
                    {t('translations.Home.section2.body')}
                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span> {t('translations.Home.section3.title')} <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                    <p>
                    {t('translations.Home.section3.body')}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${Background})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
    </section>

    
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/skills.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>{t('translations.Home.benifit_section.title')}</h3>
            <p className="font-italic">
            {t('translations.Home.benifit_section.para1')}
            </p>
            <p className="font-italic">
              {t('translations.Home.benifit_section.para2')}
            </p>
          </div>
        </div>

      </div>
    </section>
    <section id="cta" className="cta">
      <div className="container aos-init aos-animate" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3></h3>
            <p>{t('translations.Home.action_section.para')}</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle">{t('translations.Home.action_section.button_text')}</a>
          </div>
        </div>

      </div>
    </section>
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>{t('translations.Home.contact_section.name')}</h2>
          <p>{t('translations.Home.contact_section.para')}</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>{(t('translations.Home.contact_section.form.left.label1'))}:</h4>
                <p>Road name, Country, NY 1234562</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>{(t('translations.Home.contact_section.form.left.label2'))}:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>{(t('translations.Home.contact_section.form.left.label3'))}:</h4>
                <p>+1 585 4587 4454</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:0,width:"100%",height:"290px"}} allowFullScreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="#" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">{(t('translations.Home.contact_section.form.right.name'))}</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">{(t('translations.Home.contact_section.form.right.email'))}</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">{(t('translations.Home.contact_section.form.right.subject'))}</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">{(t('translations.Home.contact_section.form.right.message'))}</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">{(t('translations.Home.contact_section.form.button_text'))}</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer id="footer">
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Company Name</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

    <a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
    {/* <div id="preloader"></div> */}
    </>
    )
}

export default Home;