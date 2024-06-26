import {useState} from "react"



export default function TestForm ({question, qNumber, handleClick}: {question: string,qNumber: string, handleClick: any}) {

const [value, setValue] = useState(0)  
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    handleClick(newValue);
};



    return(
        <div className="flex flex-col w-[600px]  h-[300px] items-center text-white ">
            <h1 className="text-[24px] text-center"> {question}</h1>
            <form className="w-[400px] justify-between items-center flex mt-[40px]">


        <input type="radio" name={qNumber} value={1} className="appearance-none w-[40px] h-[40px] border-2 border-[#FECACA] rounded-full checked:bg-[#FECACA] " onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={2} className="appearance-none w-[32px] h-[32px] border-2 border-[#FECACA] rounded-full checked:bg-[#FECACA]" onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={3} className="appearance-none w-[23px] h-[24px] border-2 border-[#FECACA] rounded-full checked:bg-[#FECACA]" onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={4} className="appearance-none w-[16px] h-[16px] border-2 border-[#FFFFFF] rounded-full checked:bg-[#D4D4D4]" onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={5} className="appearance-none w-[24px] h-[24px] border-2 border-[#DEFECA] rounded-full checked:bg-[#DEFECA]" onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={6} className="appearance-none w-[32px] h-[32px] border-2 border-[#DEFECA] rounded-full checked:bg-[#DEFECA]" onChange={handleChange}></input>
        <input type="radio" name={qNumber} value={7} className="appearance-none w-[40px] h-[40px] border-2 border-[#DEFECA] rounded-full checked:bg-[#DEFECA]" onChange={handleChange}></input>

            </form>

            <div className="flex w-full justify-between px-[80px] pt-[15px]">
<h1>Not really</h1>
<h1>Very much</h1>

            </div>


        </div>
    )

}