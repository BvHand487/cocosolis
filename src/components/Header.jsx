import React from 'react'

function Header() {
  return (
    <header className="w-full px-10 drop-shadow-md flex flex-row justify-around border-b-[0.1px] border-solid border-gray-100 items-center h-[18vh] z-[100] bg-white sticky top-0 md:justify-end">
        <div className="hidden lg:block basis-[12em] shrink-0"> 
            <a href="http://localhost:3000">
                <img src="https://cocosolis.com/wp-content/uploads/cocosolis-logo.svg"/>
            </a>
        </div>

        <ul className="hidden md:flex flex-row justify-around flex-1 px-4 text-primary-dark">
            <li className="hover:text-primary-light cursor-pointer">НАЧАЛО</li>
            <li className="hover:text-primary-light cursor-pointer">ПРОДУКТИ</li>
            <li className="hover:text-primary-light cursor-pointer">CLUB</li>
            <li className="text-nowrap hover:text-primary-light cursor-pointer">ЗА НАС</li>
            <li className="hover:text-primary-light cursor-pointer">КОНТАКТИ</li>
            <li className="size-5 hover:cursor-pointer shrink-0">
                <svg focusable="false" viewBox="0 0 24 24" className="fill-current">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
            </li>
        </ul>

        <div className='flex flex-row gap-4 justify-self-end shrink-0'>
            <div className="cursor-pointer">
                <img className="size-5" src="https://cocosolis.com/wp-content/uploads/search-icon.svg"/>
            </div>
            <div className="cursor-pointer shrink-0">
                <img className="size-5" src="https://cocosolis.com/wp-content/uploads/cart-shopping-solid.svg"/>
            </div>
            <div className="flex flex-row gap-2 cursor-pointer">
                <img className="size-5" src="https://cocosolis.com/wp-content/uploads/icon-profile-not-logged-in.svg"/>
                <h3 className="text-nowrap text-primary-dark hover:text-primary-light">
                    ВЛЕЗ В ПРОФИЛ
                </h3>
            </div>
        </div>
    </header>
  )
}

export default Header