"use client";
import Image from "next/image";
import { productData } from "../productData";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const productId = params.productId as string;

  const product = productData.find(
    (product) => product.link === productId
  );
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  if (!product) return notFound();

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row md:gap-[3px] md:h-[865px] h-auto ">
        <div
          className=" md:w-[50%] w-full relative md:h-auto h-[471px]"
          style={{
            backgroundImage: `url(${product?.topLeftImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Nav buttons */}
          <div className="flex gap-[20px] !p-10 absolute md:bottom-0 w-full md:w-auto justify-between top-1/2 -translate-y-1/2 md:top-auto">
            <button
              className="rounded-full"
              style={{
                backgroundColor: product?.btnColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m14 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className="rounded-full"
              style={{
                backgroundColor: product?.btnColor,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m10 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="md:w-[50%] w-full flex justify-center items-center"
          style={{
            backgroundImage: `url(${product?.topRightImg})`,
            backgroundSize: 'cover',
          }}
        >
          <div className={`flex flex-col justify-center w-full self-center items-center !p-4 md:!p-10 md:!mx-[60px] md:!my-[60px]   border-[2px] border-[#FFFFFF33] relative before:absolute before:inset-0 ${product?.productName === "NIRVANA" ? "before:bg-[#482A7D1A]" : ""} before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPgo8L3N2Zz4=')] before:z-[-1] z-1 before:opacity-100 before:pointer-events-none`}>
            {/* Product Details Heading */}
            <div className="flex justify-between items-center w-full">
              <div className="text-white">
                <h2 className="text-[36px] font-[500]">
                  {product?.productName}
                </h2>
                <p className="text-[16px] font-[200] text-[#FFFFFFCC]">
                  {product?.subTitle}
                </p>
              </div>
              <div className="bg-[#ffffff1a] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
            </div>

            <hr className="w-full border-[#FFFFFF33] border-t-[2px] !my-6" />

            <div className="text-white flex flex-col gap-4 justify-between self-start">
              <h3 className="text-[24px] font-[700]">{product?.price}</h3>
              <p className="text-[16px] font-[400] bg-[#000] h-[36px] w-[74px] flex justify-center items-center ">
                {product?.weigth}
              </p>
            </div>

            <hr className="w-full border-[#FFFFFF33] border-t-[2px] !my-6" />

            <div className="flex flex-col gap-2 text-white w-full">
              <button className="bg-black w-full h-[48px]">Add to Bag</button>
              <button className="border-[1px] border-[#FFFFFF] w-full h-[48px]">
                Order via whatsapp
              </button>
            </div>

            <hr className="w-full border-[#FFFFFF33] border-t-[2px] !my-6" />

            <div className="self-start w-full">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("details")}
              >
                <h2 className="text-[16px] text-white font-[400]">
                  PRODUCT DETAILS
                </h2>
                <div className="flex gap-2">
                  {openSection === "details" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === "details"
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[16px] font-[400] text-[#FFFFFFCC]">
                  {product?.prodDet}
                </p>
              </div>
            </div>

            <hr className="w-full border-[#FFFFFF33] border-t-[2px] !my-6" />

            <div className="self-start w-full">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("ingredients")}
              >
                <h2 className="text-[16px] text-white font-[400]">
                  ANOTHER ONE
                </h2>
                <div className="flex gap-2">
                  {openSection === "ingredients" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === "ingredients"
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-[16px] font-[400] text-[#FFFFFFCC]">
                  <p className="mb-2">
                    This is another expandable section with different content.
                  </p>
                  <p className="mb-2">
                    You can add any information you want here.
                  </p>
                  <p>
                    It follows the same design pattern as the other sections.
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-full border-[#FFFFFF33] border-t-[2px] !my-6" />

            <div className="self-start w-full">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("shipping")}
              >
                <h2 className="text-[16px] text-white font-[400]">
                  SHIPPING & HANDLING / RETURNS
                </h2>
                <div className="flex gap-2">
                  {openSection === "shipping" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === "shipping"
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-[16px] font-[400] text-[#FFFFFFCC]">
                  <p className="mb-2">
                    <strong>Shipping:</strong> Free shipping on orders above
                    ₹999. Standard delivery takes 3-5 business days.
                  </p>
                  <p className="mb-2">
                    <strong>Handling:</strong> All products are carefully
                    packaged to ensure safe delivery.
                  </p>
                  <p>
                    <strong>Returns:</strong> 30-day return policy. Items must
                    be unused and in original packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {product?.productName === "AMOUR" ? (
        <div className="h-[413px] md:h-[662px] bg-gradient-to-b from-[#890F0F] to-[#180B04] flex flex-col justify-center items-center relative md:!mt-[2px] !mt-0 overflow-hidden">
          <Image
            src={product?.belowHeroImg}
            alt="story"
            fill
            className="object-cover"
          />
          <Image
            src={product?.twoProductImg}
            alt="story"
            height={500}
            width={500}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
          />
          <div className="relative z-10 flex-col items-center text-[36px] md:text-[50px] !px-[30px] lg:hidden flex">
            <p className="text-white font-[100] text-center">
            With <b className="font-[300]">Seductive, Indulgent</b> and <b className="font-[300]">Addictive</b> character, this scent profile combines <b className="font-[300]">Dark Chocolate</b> and <b className="font-[300]">Vanilla</b>
            </p>
          </div>
          <div className="relative z-10 flex-col w-[1500px] items-center text-[74px] lg:flex hidden">
            <p className="text-white font-[100] text-center">
              With <b className="font-[300]">Seductive, Indulgent,</b> and{" "}
              <b className="font-[300]">Addictive</b>
            </p>
            <p className="text-white font-[100] text-center">
              character,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              this&nbsp;&nbsp;&nbsp; scent profile
            </p>
            <p className="text-white font-[100] text-center">
              combines&nbsp;&nbsp;{" "}
              <b className="font-[300]">Dark&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chocolate</b>
            </p>
            <p className="text-white font-[100] text-center">
              and&nbsp; <b className="font-[300]">Vanilla</b>
            </p>
          </div>
        </div>
      ) : product?.productName === "NIRVANA" ? (
        <div className="!py-[50px] md:!py-[100px] bg-gradient-to-b from-[#890F0F] to-[#180B04] flex flex-col justify-center items-center relative md:!mt-[2px] !mt-0 overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-20 z-[1]"></div>
          <Image
            src={product?.belowHeroImg}
            alt="story"
            fill
            className="object-cover"
          />
          <Image
            src={product?.twoProductImg}
            alt="story"
            height={500}
            width={500}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
          />
          <div className="relative z-10 flex-col items-center text-[36px] md:text-[50px] !px-[30px] lg:hidden flex">
            <p className="text-black font-[100] text-center">
              With <b className="font-[300] text-[#482A7D]">Vibrant, Harmonious</b> and <b className="font-[300] text-[#482A7D]">Enlightning</b> character, this scent profile combines <b className="font-[300] text-[#482A7D]">Lavender</b> and <b className="font-[300] text-[#482A7D]">Jasmine</b>
            </p>
          </div>
          <div className="relative z-10 flex-col w-[1500px] items-center text-[74px] lg:flex hidden">
            <p className="text-black font-[100] text-center">
              With <b className="font-[300] text-[#482A7D]">Vibrant, Harmonious,</b> and{" "}
              <b className="font-[300] text-[#482A7D]">Enlightning</b>
            </p>
            <p className="text-black font-[100] text-center">
              character,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              this&nbsp; scent profile &nbsp;&nbsp;
            </p>
            <p className="text-black font-[100] text-center">
              combines{" "}
              <b className="font-[300] text-[#482A7D]">Lavender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
            </p>
            <p className="text-[#482A7D] font-[100] text-center">
              <b className="font-[300]">Jasmine</b>
            </p>
          </div>
        </div>
      ) : (
        <div className="!py-[50px] md:!py-[100px] bg-gradient-to-b from-[#890F0F] to-[#180B04] flex flex-col justify-center items-center relative md:!mt-[2px] !mt-0 overflow-hidden">
          <Image
            src={product?.belowHeroImg}
            alt="story"
            fill
            className="object-cover"
          />
          <Image
            src={product?.twoProductImg}
            alt="story"
            height={500}
            width={500}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] hidden lg:block"
          />
          <div className="relative z-10 flex-col items-center text-[36px] md:text-[50px] !px-[30px] lg:hidden flex">
            <p className="text-white font-[100] text-center">
              With <b className="font-[300]">Refined, Bold</b> and <b className="font-[300]">Magnetic</b> character, this scent profile combines <b className="font-[300]">Tobacco, Leather</b> and <b className="font-[300]">White Oud</b>
            </p>
          </div>
          <div className="relative z-10 flex-col w-[1500px] items-center text-[74px] lg:flex hidden">
            <p className="text-white font-[100] text-center">
              With <b className="font-[300]">Refined, Bold</b> and{" "}
              <b className="font-[300]">Magnetic</b>
            </p>
            <p className="text-white font-[100] text-center">
            &nbsp;&nbsp;character,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;this&nbsp; scent profile &nbsp;&nbsp;
            </p>
            <p className="text-white font-[100] text-center">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;combines{" "}
              <b className="font-[300]">Tobacco,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leather&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
            </p>
            <p className="text-white font-[100] text-center">
              and <b className="font-[300]">White Oud</b>
            </p>
          </div>
        </div>
      )}
      {/* Model */}
      <div className="h-[405px] md:h-[1000px]"
      style={{
        backgroundImage: `url(${product?.modelImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ></div>
      {/* Story */}
      <div className={` flex flex-col justify-center items-center gap-10 !py-[50px] md:!py-[100px] ${product?.link === "nirvana" ? "md:!px-[200px] !px-[30px]" : "md:!px-[100px] !px-[30px]"}`}
      style={{
        backgroundImage: `url(${product?.storyImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: product?.link === "nirvana" ? "#482A7D" : "#fff",
      }}
      >
        <h2 className="font-[500] text-[32px] md:text-[56px]">Story Behind</h2>
        <p className="font-[100] text-[20px] md:text-[24px] text-center"
        style={{
          color: product?.link === "nirvana" ? "#1F0847" : "#fff",
        }}
        >
          {product?.story}
        </p>
      </div>

    </div>
  );
}
