import React from 'react'
import useContentful from '../../hooks/useContentful'
import Breadcrumb from '../../common/Breadcrumb'
import { localise } from '../../utils/localize'
import Aboutarea from './component/Aboutarea'
import Investmentsection from '../../common/Investmentsection'
import Teamarea from './component/Teamarea'
import LoadingScreen from '../../common/LoadingScreen'

export default function Whoweare() {
    const {data, isLoading, error} = useContentful("whoweare")
    if(isLoading) return <LoadingScreen/>
  return (
    <>
    {
        data &&
        <>
        <Breadcrumb title={localise(data[0].fields.title,data[0].fields.titlearb)}/>
        <Aboutarea content={data[0].fields}/>
        <Investmentsection content={data[0].fields}/>
        <Teamarea content={data[0].fields}/>
        </>
    }
    </>
  )
}
