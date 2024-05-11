import React from 'react'
import useContentful from '../../hooks/useContentful'
import Breadcrumb from '../../common/Breadcrumb'
import { translate } from '../../utils/translate'
import Services from './components/Services'
import RegisterArea from './components/RegisterArea'
import BusinessFlow from './components/BusinessFlow'
import ShareProgress from './components/ShareProgress'
import LoadingScreen from '../../common/LoadingScreen'


export default function Investment() {
    const {data, isLoading, error} = useContentful("investmentpage")

    if(isLoading) return <LoadingScreen/>

  return (
    <>
    {data &&
    <>
    <Breadcrumb title={translate("investment")} />
    <Services data={data[0].fields}/>
    <BusinessFlow data={data[0].fields.businessflow}/>
    <RegisterArea data={data[0].fields}/>
    <ShareProgress data={data[0].fields}/>
    </>
    }
    </>
  )
}
