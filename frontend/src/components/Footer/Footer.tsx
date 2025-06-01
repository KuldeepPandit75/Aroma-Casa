import Image from "next/image";

const columns = [
  {
    name: "Socials",
    links: [
      {
        text: "Instagram",
        link: "https://www.instagram.com/",
      },
      {
        text: "X (Twitter)",
        link: "https://www.x.com/",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/",
      },
      {
        text: "Facebook",
        link: "https://www.facebook.com/",
      },
    ],
  },
  {
    name: "Contact US",
    links: [
      { text: "contact@aromacasa.in", link: "mailto:contact@aromacasa.in" },
      { text: "+91-9651471902", link: "tel:+91-9651471902" },
      { text: "+91-9651471901", link: "tel:+91-9651471901" },
    ],
  },
  {
    name: "Policies & More",
    links: [
      { text: "FAQs", link: "#" },
      { text: "Terms & Conditions", link: "#" },
      { text: "Shipping", link: "#" },
      { text: "Privacy Policy", link: "#" },
      { text: "Return Policy", link: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white min-h-[580px] !p-[40px] md:!p-[80px] ">
      <Image
        src="/darkLogo.svg"
        alt="logo"
        className="!mb-[100px]"
        width={280}
        height={32}
      />
      <div className="flex justify-between gap-[50px] flex-col md:flex-row">
        {/* Footer Column */}
        <div className='flex justify-between md:w-[500px] gap-[50px] flex-wrap'>
            {columns.map((column)=>(
                <div key={column.name} className="">
                    <h1 className="text-[16px] font-[300] !mb-[40px]">{column.name}</h1>
                    <div className="flex flex-col gap-[20px]">
                        {column.links.map((link)=>(
                            <a href={link.link} target="_blank" key={link.text} className="text-[#FFFFFFB2] text-[14px] font-[200]">{link.text}</a>
                        ))}
                    </div>
                </div>
            ))}

        </div>
        {/* Newsletter */}
        <div>
            <h1 className="text-[16px] font-[300] !mb-[60px]">SIGN UP FOR OUR NEWSLETTER</h1>
            <div>
                <input type="text" placeholder="Enter your Email..." className="bg-[#313131] text-[#fff] text-[14px] font-[500] !p-[15px] w-full md:w-[400px] h-[50px] !mb-[30px]"/>
            </div>
            <button className="!px-[25px] !py-[15px] bg-white text-black">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}
