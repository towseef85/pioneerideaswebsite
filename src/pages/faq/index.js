import React from 'react'
import useContentful from '../../hooks/useContentful'
import Breadcrumb from '../../common/Breadcrumb'
import { localise } from '../../utils/localize'
import Faqarea from './component/Faqarea'
import Cta from '../../common/Cta'
import LoadingScreen from '../../common/LoadingScreen'

export default function Faq() {
    const {data, isLoading, error} = useContentful("faqpage")
    if(isLoading) return <LoadingScreen/>
  return (
    <>
    {
        data &&
        <>
        <Breadcrumb title={localise(data[0].fields.title, data[0].fields.titleArb)}/>
        <Faqarea questions={data[0].fields.questions}/>
        <Cta/>
        </>
    }
    </>
  )
}
