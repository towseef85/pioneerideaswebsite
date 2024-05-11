import React from 'react'
import useContentful from '../../hooks/useContentful'
import { localise } from '../../utils/localize'
import Breadcrumb from '../../common/Breadcrumb'
import Contactarea from './components/Contactarea'
import LoadingScreen from '../../common/LoadingScreen'

export default function Contact() {
    const {data, isLoading, error} = useContentful("contact")

    if(isLoading) return <LoadingScreen/>
  return (
    <>
    {
        data &&
        <>
        <Breadcrumb title={localise(data[0].fields.title, data[0].fields.titlearabic)}/>
        <Contactarea data={data[0].fields}/>
        </>
    }
    </>
  )
}
