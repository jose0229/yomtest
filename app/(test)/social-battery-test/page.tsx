"use client"
import TestForm from "../../../components/test/TestForm"
import { useState } from "react"
import {useRouter} from "next/navigation"
import Image from "next/image"  
  


export default function Page () {
    const router = useRouter()

    const [q1, setQ1] = useState(null)
    const [q2, setQ2] = useState(null)
    const [q3, setQ3] = useState(null)
    const [q4, setQ4] = useState(null)
    const [q5, setQ5] = useState(null)
    const [q6, setQ6] = useState(null)
    const [q7, setQ7] = useState(null)
    const [q8, setQ8] = useState(null)
    const [q9, setQ9] = useState(null)
    const [q10, setQ10] = useState(null)
    const [q11, setQ11] = useState(null)
    const [q12, setQ12] = useState(null)
    const [q13, setQ13] = useState(null)
    const [q14, setQ14] = useState(null)
    const [q15, setQ15] = useState(null)
    const [modal, setModal] = useState(false)

    const handleCloseButton = () => {
        setModal(false)
    }

    const handleResultClick = () => {
        let total = Math.floor((q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15) * 0.95238)
        const totalString = total.toString();
        localStorage.setItem('result', totalString);
        if ([q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15].includes(null)) {  // null 값을 검사
            setModal(true)
        } else {
            router.push('/social-battery-test/result')
        }
    }

return (<div className="text-white  flex flex-col items-center w-full mb-[250px]">
    <div className=" w-full flex flex-col justify-center items-center h-[700px] bg-gradient-to-r from-cyan-500 to-blue-500"> 

    <Image  className="" src="/battery-logo.png" width={100} height={150} alt="battery logo"></Image>    
    <h1 className="text-[80px] font-semibold mt-[10px]">Social Battery Test</h1>
               



    </div>
               
                <div className="text-white  flex flex-col items-center gap-[50px] mt-[200px]">
                <TestForm question="I feel energized when I am around other people." qNumber="q1" handleClick={setQ1}/>
                <TestForm question="After spending time with others, I often feel more lively and active." qNumber="q2" handleClick={setQ2}/>
                <TestForm question="I enjoy attending social gatherings and events." qNumber="q3" handleClick={setQ3}/>
                <TestForm question="I often seek out opportunities to meet new people." qNumber="q4" handleClick={setQ4}/>
                <TestForm question="I frequently need time alone to recharge after social interactions." qNumber="q5" handleClick={setQ5}/>
                <TestForm question="I feel comfortable and at ease in large crowds." qNumber="q6" handleClick={setQ6}/>
                <TestForm question="Being in a crowded place makes me feel anxious or overwhelmed." qNumber="q7" handleClick={setQ7}/>
                <TestForm question="I like to have a packed social calendar with frequent events." qNumber="q8" handleClick={setQ8}/>
                <TestForm question="I enjoy participating in group activities and team sports." qNumber="q9" handleClick={setQ9}/>
                <TestForm question="I recover quickly from social interactions and can jump into another one soon after." qNumber="q10" handleClick={setQ10}/>
                <TestForm question="It takes me a long time to recover from social interactions." qNumber="q11" handleClick={setQ11}/>
                <TestForm question="I often accept social invitations without hesitation." qNumber="q12" handleClick={setQ12}/>
                <TestForm question="I usually decline social invitations to avoid interactions." qNumber="q13" handleClick={setQ13}/>
                <TestForm question="Social interactions generally improve my mood and make me feel happy." qNumber="q14" handleClick={setQ14}/>
                <TestForm question="I thrive in dynamic and interactive social settings." qNumber="q15" handleClick={setQ15}/>
                </div>
                    <button className="w-[200px] h-[70px] border-2 rounded-full hover:bg-[#FF9400]" onClick={handleResultClick}>See results!</button>
                        {modal && <div className="w-full h-full fixed top-0 justify-center items-center flex bg-gray-950/80"> 
                        <div className="w-[400px] h-[250px] border-solid border-gray-400 border-[1px] rounded-xl p-[20px] flex flex-col justify-center items-center  bg-white text-black">
                            <h1 className="font-semibold text-[25px] pb-[30px]">Oops....</h1>
                       <div className="pb-[40px] text-center"> 
                            <h1>It looks like you've missed some questions. </h1>
                            <h1>Please go back, and check every questions.</h1>
                        </div>
                            
                            <button className="w-[120px] h-[40px] border-solid border-[#ffb957] bg-[#ffb957] hover:bg-[#FF9400] border-[1px] text-white rounded-full" onClick={handleCloseButton}>Close</button>
                        </div>
                    </div>}
    </div> ) }