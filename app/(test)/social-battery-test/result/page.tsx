"use client"
import Image from 'next/image'
export default function Page() {


const result = localStorage.getItem('result')

    return(
       < div className="text-white  h-full flex flex-col items-center">
        <h1 className="text-[35px] pt-[150px]">Your Social Battery is......</h1>
        <div className="h-[1px] bg-gray-100 w-[500px] mb-[130px] mt-[2px]"></div>
        
        <div className="relative pb-[150px] flex justify-center items-center">
            <Image src="/battery-yellow.png" width={250} height={130} alt='battery' className="object-cover"></Image>
            <h1 className="text-[80px] absolute text-black">{result}%</h1>
        </div>


        <p className="w-[500px] text-justify font-light">
        A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained.A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained. A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained. A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained. A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained. A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained. A social battery is a metaphor for the amount of time and energy someone is able to put into socializing until they feel mentally and sometimes physically drained.
        </p>
        
        <h1></h1>
</div>)
    
}