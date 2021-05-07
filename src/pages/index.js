import React , {useState}from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import WelcomeSection from '../components/WelcomeSection'
import InfoSection from '../components/InfoSection'
import {homeObjOne,homeObjTwo,homeObjThree} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            <WelcomeSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home
