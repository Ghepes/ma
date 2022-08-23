import React, { useState } from 'react'
import {useHistory } from "react-router"
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { API } from '../Config'
import avatar from '../assets/images/avatar.png'
import { useTranslation } from 'react-i18next'
import { element } from 'prop-types'
const TheHeaderDropdown = () => {
  const history=useHistory();
  const [count,setCount]=useState(0);
  const [profile,setProfile]=useState();
  const [t,i18n]=useTranslation();
  const handle_logout=()=>{
    API.get('/api/logout').then((res)=>{
      localStorage.clear();
      history.push('/login');
    })
  }
  const setLang=(value)=>{
    if(value=="ar"){
      Array.from(document.getElementsByClassName('mb-3 mb-xl-0 text-left col')).forEach(element=>{
        element.className="mb-3 mb-xl-0 text-right col"
      })
      //document.getElementsByClassName('c-wrapper')[0].style.marginLeft="0px";
      //document.getElementsByClassName('bt-one')[0].style.cssFloat="left";
    }
    else{
      Array.from(document.getElementsByClassName('mb-3 mb-xl-0 text-right col')).forEach(element=>{
        element.className="mb-3 mb-xl-0 text-left col"
      })
      //document.getElementsByClassName('c-wrapper')[0].style.marginLeft='';
    }
    i18n.changeLanguage(value);
    document.dir=i18n.dir();
    document.lang=value;
    document.body.dir = i18n.dir();
  }
  React.useEffect(()=>{
    setProfile(JSON.parse(localStorage.getItem("profile")));
    // console.log(profile);
  },[count])
  return (
    <>
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={true}>{t('translations.Language')}</CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-start">
        <CDropdownItem className="text-center" onClick={()=>setLang('en')}>
          English
        </CDropdownItem>
        <CDropdownItem className="text-center" onClick={()=>setLang('ar')}>
          Arabic
        </CDropdownItem>
        <CDropdownItem className="text-center" onClick={()=>setLang('es')}>
          Spanish
        </CDropdownItem>
        <CDropdownItem className="text-center" onClick={()=>setLang('it')}>
          Italic
        </CDropdownItem>
        <CDropdownItem className="text-center" onClick={()=>setLang('de')}>
          German
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={avatar}
            className="c-avatar-img"
            // alt={profile.email}
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" /> 
          Updates
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" /> 
          Messages
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" /> 
          Tasks
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" /> 
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" /> 
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
        <CDropdownItem to="/dashboard/help">
          <CIcon name="cil-file" className="mfe-2" /> 
          {t('translations.Account.Help')}
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={handle_logout}>
          <CIcon name="cil-lock-locked" className="mfe-2" /> 
          {t('translations.Account.Logout')}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    </>
  )
}

export default TheHeaderDropdown
