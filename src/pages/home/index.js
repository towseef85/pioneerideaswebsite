import React from 'react'
import HeroArea from './components/HeroArea'
import useContentful from '../../hooks/useContentful'
import FeatureArea from './components/FeatureArea.jsx'
import BrandArea from './components/BrandArea.jsx'
import Services from '../../common/Services.jsx'
import LoadingScreen from '../../common/LoadingScreen.jsx'

export default function Home() {
  const {data, isLoading, error} = useContentful('homepage')
  if(isLoading) return <LoadingScreen/>
  return (
    <>
    {
      data &&
      <>
    <HeroArea data={ data[0].fields} />
    <FeatureArea data={data[0].fields.whychooseus}/>
    <Services data={data[0].fields.pioneerMessage} maindata={data[0].fields}/>
    <BrandArea data={data[0].fields}/>
   
    </>
    }
    </>
  )
}
