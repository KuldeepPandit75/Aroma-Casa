"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gifting", path: "/gifting" },
    { name: "Perfumes", path: "/perfumes" },
  ];

  const mobileMenuItems = [
    { name: "Wishlist", icon: "/navIcons/Heart.svg", action: () => console.log("Wishlist clicked") },
    { name: "Cart", icon: "/navIcons/Suitcase.svg", action: () => console.log("Cart clicked") },
    { name: "Profile", icon: "/navIcons/User.svg", action: () => console.log("Profile clicked") },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      {/* Main Navbar */}
      <div className="h-[74px] flex items-center !px-[20px] md:!px-[50px] justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          className="ml-[100px] mt-[21px] md:h-[23px] md:w-[200px] cursor-pointer"
          width={160}
          height={18}
          onClick={()=>{
            router.push("/")
          }}
        />
        <div className="items-center gap-[40px] font-[300] !pr-[20px] hidden md:flex">
          {navItems.map((item) => (
            <p
              key={item.name}
              onClick={() => router.push(item.path)}
              className={`cursor-pointer transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-black font-[500] border-b-2 border-black pb-1"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-[30px]">
          {/* Search Section */}
          <div className="flex items-center relative">
            <Image 
              src="/navIcons/search.svg" 
              alt="search" 
              width={20} 
              height={20} 
              className={`cursor-pointer hover:opacity-70 transition-all duration-300 ${
                isSearchOpen ? 'transform min-[1400px]:-translate-x-[200px]' : ''
              }`}
              onClick={toggleSearch}
            />
            {/* Desktop Search Input - Inline */}
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-0 transition-all duration-300 ease-in-out border border-gray-300 rounded-lg !px-3 !py-1 text-[14px] focus:outline-none focus:ring-1 focus:ring-black hidden min-[1400px]:block text-black ${
                isSearchOpen 
                  ? 'w-[180px] opacity-100 translate-x-0' 
                  : 'w-0 opacity-0 translate-x-[20px] pointer-events-none'
              }`}
              autoFocus={isSearchOpen}
            />
          </div>
          
          <Image 
            src="/navIcons/Heart.svg" 
            alt="heart" 
            width={20} 
            height={20} 
            className="hidden lg:block cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => router.push("/wishlist")}
          />
          <Image 
            src="/navIcons/Suitcase.svg" 
            alt="cart" 
            width={20} 
            height={20} 
            className="hidden lg:block cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => router.push("/cart")}
          />
          <Image 
            src="/navIcons/User.svg" 
            alt="user" 
            width={20} 
            height={20} 
            className="hidden lg:block cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => router.push("/profile")}
          />
          <Image 
            src="/navIcons/menu.svg" 
            alt="menu" 
            width={20} 
            height={20} 
            className="block lg:hidden cursor-pointer hover:opacity-70 transition-opacity"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Search Bar - Below Navbar */}
      <div className={`absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out max-[1399px]:block hidden bg-white border-b border-gray-200 ${
        isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="!px-6 !py-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg !px-4 !py-2 text-[16px] focus:outline-none focus:ring-1 focus:ring-black text-black"
            autoFocus={isSearchOpen}
          />
        </div>
      </div>

      {/* Mobile Menu - Overlays Content */}
      <div className={`absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out lg:hidden bg-white shadow-lg ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } ${isSearchOpen ? 'top-[calc(100%+80px)]' : ''}`}>
        <div className="!px-4 !py-2 bg-gray-50">
          {/* Navigation Items */}
          <div className="!mb-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    router.push(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`!py-2 !px-4 cursor-pointer transition-colors ${
                    isActive(item.path)
                      ? "bg-black text-white font-[500]"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-[16px]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Icon Items */}
          <div>
            <h3 className="text-[14px] font-[500] text-gray-500 uppercase tracking-wide !mb-3">Account</h3>
            <div className="!space-y-2">
              {mobileMenuItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center !py-2 !px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <Image src={item.icon} alt={item.name} width={20} height={20} />
                  <span className="!ml-3 text-[16px] text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
