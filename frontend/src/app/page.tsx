import Link from "next/link";

const products=[
    {
        id:'amour',
        name:"Amour",
        image:"/landingPage/amour.png",
        flavours:["DARK CHOCOLATE","VANILLA"],
        buttonText:"Buy Now",
        link:"/product/amour"
        
    },
    {
        id:'gentlemen',
        name:"Gentlemen",
        image:"/landingPage/gentlemen.png",
        flavours:["WHITE ODD","LEATHER", "TOBACCO"],
        buttonText:"Buy Now",
        link:"/product/gentlemen"
    },
    {
        id:'nirvana',
        name:'Nirvana',
        image:"/landingPage/nirvana.png",
        flavours:["LAVENDER","JASMINE"],
        buttonText:"Buy Now",
        link:"/product/nirvana"
    }
]

const ProductSection=({id, flavours, buttonText, image, link}: {id: string, flavours: string[], buttonText: string, image: string, link: string})=>{
    return(
        <div
        id={id}
        className="bg-cover bg-top h-[940px] w-full relative"
        style={{backgroundImage: `url('${image}')`}}
      >
        <div
          id="flavour"
          className="font-[100] text-white flex text-[clamp(14px,2vw,20px)] gap-[clamp(20px,5vw,120px)] absolute right-[clamp(12px,5vw,48px)] top-12"
        >
            {flavours.map((flavour,index)=>(
                <p key={index}>{flavour}</p>
            ))}
        </div>
        <Link href={link} className="flex items-center gap-2 h-[44px] md:h-[52px] bg-[#fff] w-[145px] md:w-[200px] justify-center text-[18px] md:text-[24px] font-[500] absolute bottom-10 right-10 cursor-pointer">
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M-4 12h19" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    )
}

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      {products.map((product)=>(
        <ProductSection key={product.id} id={product.id} flavours={product.flavours} buttonText={product.buttonText} image={product.image} link={product.link}/>
      ))}
      {/* Vertical Heading */}
      <div className="h-[clamp(40px,10vw,100px)] border-t-2 border-b-2  border-white transform -rotate-90 absolute left-[-1450px] md:left-[-1300px] top-[1300px] w-[3000px] flex items-center justify-evenly text-[clamp(40px,10vw,76px)] text-white font-bold">
        <div className="absolute left-[100px]">NIRVANA</div>
        <div className="absolute left-[1000px]">THE GENTLEMEN</div>
        <div className="absolute left-[2000px]">THE AMOUR</div>
      </div>
    </div>
  );
}
