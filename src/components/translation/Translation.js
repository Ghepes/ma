import {CTabContent,CTabPane,CRow,CCol, CCard, CCardHeader, CCardBody, CFormGroup, CInputFile,CForm, CCardFooter, CButton, CTabs, CNav, CNavItem, CNavLink } from '@coreui/react'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import {FAKER_API} from '../../Config'
import axios from 'axios';
import swal from 'sweetalert';
const Translation=()=>{
    const arabic_file=useRef(null);
    const italic_file=useRef(null);
    const german_file=useRef(null);
    const spanish_file=useRef(null);
    const [t,i18n]=useTranslation();
    useEffect(()=>{
        //console.log(window.location.origin);
        // PUBLIC_API.get(window.location.origin+'/upload').then(response=>{
        //     console.log(response.data);
        // })
    });
    const handle_ar_submit=()=>{
        var formData=new FormData();
        formData.append('file',arabic_file.current.files[0]);
        FAKER_API.post(window.location.origin+'/upload/ar',formData).then(response=>{
            swal('File Uploaded','Translation File has been uploaded','success')
        })
    }
    const download_ar=()=>{
        axios({
            url: window.location.origin+'/download/ar', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
              console.log(response.data)
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'translate.json'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }
    const download_it=()=>{
        axios({
            url: window.location.origin+'/download/it', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'translate.json'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }
    const download_de=()=>{
        axios({
            url: window.location.origin+'/download/de', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'translate.json'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }
    const download_es=()=>{
        axios({
            url: window.location.origin+'/download/es', //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'translate.json'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
    }
    const handle_it_submit=()=>{
        var formData=new FormData();
        formData.append('file',italic_file.current.files[0]);
        FAKER_API.post(window.location.origin+'/upload/it',formData).then(response=>{
            swal('File Uploaded','Translation File has been uploaded','success')
        })
    }
    const handle_de_submit=()=>{
        var formData=new FormData();
        formData.append('file',german_file.current.files[0]);
        FAKER_API.post(window.location.origin+'/upload/de',formData).then(response=>{
            swal('File Uploaded','Translation File has been uploaded','success')
        })
    }
    const handle_es_submit=()=>{
        var formData=new FormData();
        formData.append('file',spanish_file.current.files[0]);
        FAKER_API.post(window.location.origin+'/upload/es',formData).then(response=>{
            swal('File Uploaded','Translation File has been uploaded','success')
        })
    }
    return(
        <>
        <CRow>
            <CCol md="3">
                <CCard>
                    <CCardHeader>
                        <h3>Arabic</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem><CNavLink>Upload</CNavLink></CNavItem>
                                <CNavItem><CNavLink>Download</CNavLink></CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                <CCard>
                                    <CCardBody>
                                        <CForm>
                                            <CFormGroup row>
                                                <CCol md="6">
                                                    <CInputFile innerRef={arabic_file} type="file" placeholder="Choose" />
                                                </CCol>
                                            </CFormGroup>
                                        </CForm>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton onClick={handle_ar_submit} color="primary">{t('translations.buttons.Save')}</CButton>
                                    </CCardFooter>
                                </CCard>
                                </CTabPane>
                                <CTabPane>
                                    <CCard>
                                        <CCardBody>
                                            <CButton onClick={download_ar} color="primary">Download</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol md="3">
                <CCard>
                    <CCardHeader>
                        <h3>Italic</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem><CNavLink>Upload</CNavLink></CNavItem>
                                <CNavItem><CNavLink>Download</CNavLink></CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                <CCard>
                                    <CCardBody>
                                        <CForm>
                                            <CFormGroup row>
                                                <CCol md="6">
                                                    <CInputFile innerRef={italic_file} type="file" placeholder="Choose" />
                                                </CCol>
                                            </CFormGroup>
                                        </CForm>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton onClick={handle_it_submit} color="primary">{t('translations.buttons.Save')}</CButton>
                                    </CCardFooter>
                                </CCard>
                                </CTabPane>
                                <CTabPane>
                                    <CCard>
                                        <CCardBody>
                                            <CButton onClick={download_it} color="primary">Download</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol md="3">
                <CCard>
                    <CCardHeader>
                        <h3>German</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem><CNavLink>Upload</CNavLink></CNavItem>
                                <CNavItem><CNavLink>Download</CNavLink></CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                <CCard>
                                    <CCardBody>
                                        <CForm>
                                            <CFormGroup row>
                                                <CCol md="6">
                                                    <CInputFile type="file" innerRef={german_file} placeholder="Choose" />
                                                </CCol>
                                            </CFormGroup>
                                        </CForm>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton onClick={handle_de_submit} color="primary">{t('translations.buttons.Save')}</CButton>
                                    </CCardFooter>
                                </CCard>
                                </CTabPane>
                                <CTabPane>
                                    <CCard>
                                        <CCardBody>
                                            <CButton onClick={download_de} color="primary">Download</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol md="3">
                <CCard>
                    <CCardHeader>
                        <h3>Spanish</h3>
                    </CCardHeader>
                    <CCardBody>
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem><CNavLink>Upload</CNavLink></CNavItem>
                                <CNavItem><CNavLink>Download</CNavLink></CNavItem>
                            </CNav>
                            <CTabContent>
                                <CTabPane>
                                <CCard>
                                    <CCardBody>
                                        <CForm>
                                            <CFormGroup row>
                                                <CCol md="6">
                                                    <CInputFile type="file" innerRef={spanish_file} placeholder="Choose" />
                                                </CCol>
                                            </CFormGroup>
                                        </CForm>
                                    </CCardBody>
                                    <CCardFooter>
                                        <CButton onClick={handle_es_submit} color="primary">{t('translations.buttons.Save')}</CButton>
                                    </CCardFooter>
                                </CCard>
                                </CTabPane>
                                <CTabPane>
                                    <CCard>
                                        <CCardBody>
                                            <CButton onClick={download_es} color="primary">Download</CButton>
                                        </CCardBody>
                                    </CCard>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
        </>
    )
}

export default Translation;