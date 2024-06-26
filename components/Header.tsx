import Image from "next/image"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  





export default function Header () {
    return (<div className="w-full px-[20px]  bg-black h-[60px] flex justify-between items-center sticky top-0">
    <Sheet>
        <SheetTrigger>        
            <Image src ="/menu.png" width={31} height={31} alt="menu"/>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
            <SheetHeader>
                <SheetTitle className="flex justify-center">     
                <Link href="/">
                <h1 className=" text-[35px] font-semibold">yom</h1>
                </Link>
                
                </SheetTitle>
                <div className="py-1"></div>
                <hr></hr>
                    <SheetDescription className="py-[40px] flex flex-col gap-9 items-center">
                        <div className="text-[18px] text-black w-[250px] flex justify-between gap-[18px]">
                        <h1>🔋</h1>
                        <div className="flex justify-start w-full">
                        <Link href="/social-battery-test"> Social Battery Test</Link>
                        </div>  
                        </div>


                        <div className="text-[18px] text-gray-400 w-[250px] flex justify-between gap-[18px]">
                        <h1>📊</h1>
                        <div className="flex justify-start w-full ">
                        <Link href="/shop"> Productivity test (soon) </Link>

                        </div>
                        </div>



                        <div className="text-[18px] text-black w-[250px] flex justify-between gap-[18px]">
                        <h1>🏠</h1>
                        <div className="flex justify-start w-full">
                        <Link href="/shop"> Shop</Link>
                        </div>
                        </div>

                    </SheetDescription>
                </SheetHeader>
        </SheetContent>
    </Sheet>
    <Link href="/"><h1 className="text-white text-[24px] font-semibold">yom</h1></Link>
        
        <Image src ="/logo.png" width={30} height={30} alt="logo"/>
</div>)
}