import React from 'react'
import {Redirect, useHistory} from "react-router"
import {Link} from "react-router-dom"
import {
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CImg
  } from '@coreui/react'
import './Home.css'
import slideImage from '../../assets/images/slide_image.jpeg'
import logo from '../../assets/images/logo.png'
import person_image from '../../assets/images/person01.jpg'
import {TOKEN} from '../../Config'
import { useTranslation } from 'react-i18next';
const isLoggedIn=()=>{
    if(localStorage.getItem(TOKEN)===null){
      return false;
    }
    return true;
  }
const Home=()=>{
    let history=useHistory();
    const { t, i18n } = useTranslation();
    return(
        <>
        <div id="canvas">
		    <div id="box_wrapper">
                <section className="page_toplogo ls s-py-15 text-center">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                            </div>
                            <div className="col-lg-4 col-md-4 col-lg-offest-4 text-center">
                                <div className="text-center">
                                    <div className="header_logo_center">
                                        <Link to="/">
                                            <a className="logo">
                                                <img src={logo} alt=""/>
                                                <span className="logo_subtext">{t('Home.company_name')}</span>
                                            </a>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <div className="col-lg-3">
                                <CDropdown
                                    inNav
                                    className="c-header-nav-items mx-2"
                                    direction="down"
                                >
                                    <CDropdownToggle className="c-header-nav-link" caret={true}>Language</CDropdownToggle>
                                    <CDropdownMenu className="pt-0" placement="bottom-start">
                                        <CDropdownItem className="text-center" onClick={()=>{i18n.changeLanguage('en')}}>
                                        English
                                        </CDropdownItem>
                                        <CDropdownItem className="text-center" onClick={()=>{i18n.changeLanguage('ar')}}>
                                        Arabic
                                        </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </div> */}
                            <div className="col-lg-4">
                            {
                                isLoggedIn()===true && 
                                <button onClick={()=>{history.push('/dashboard')}} className="bt-one">{t('Side_Nav.Dashboard')}</button>
                            }
                            {
                                isLoggedIn()===false && 
                                <button onClick={()=>{history.push('/login')}} className="bt-one"> Login</button>
                            }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page_slider cs text-center">
                    <img src={slideImage} alt=""/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="intro_layers_wrapper">
                                    <div className="intro_layers">
                                        <div className="intro_layer" data-animation="fadeInLeft">
                                            <h3 className="intro_before_featured_word">
                                            {t('Home.text1')}
                                            </h3>
                                        </div>
                                        <div className="intro_layer" data-animation="fadeInRight">
                                            <h2 className="text-uppercase intro_featured_word">
                                            {t('Home.text2')}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ds slider-bottomline d-none d-xl-block py-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="info-block">
                                    <p>
                                        Call Us 24/7
                                    </p>
                                    <h3>
                                        +8801XXXXXX
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="info-block">
                                    <p>
                                        Email Address
                                    </p>
                                    <h3>
                                        info@hr.com
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="info-block">
                                    <p>
                                        Open Hours
                                    </p>
                                    <h3>
                                        Daily 9:00-20:00
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ls about s-pt-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 ">
                                <div className="heading-about">
                                    <h2>
                                        HR
                                    </h2>
                                    <h4>
                                        {t('Home.welcome_text')}
                                    </h4>
                                    <h3>
                                        {t('Home.company_name')}
                                    </h3>
                                    <p>
                                        {t('Home.brief_text')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6" >
                                <img src={person_image} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page_copyright ds s-py-30 ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="divider-20 d-none d-lg-block"></div>
                            <div className="col-md-12 text-center">
                                <p>&copy; Copyright
                                    <span className="copyright_year">2018</span> All Rights Reserved</p>
                            </div>
                            <div className="divider-20 d-none d-lg-block"></div>
                        </div>
                    </div>
                </section>


		    </div>
		
	    </div>
        </>
    )
}

export default Home;