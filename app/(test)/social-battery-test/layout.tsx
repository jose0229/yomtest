
type LandingProp ={children: React.ReactNode}

export default function landinLayout  ({children}:LandingProp)  {
    return(
        <div className="w-full flex flex-col items-center">{children}</div>
    )
}