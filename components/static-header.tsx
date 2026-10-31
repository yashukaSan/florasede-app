"use client";

import Link from 'next/link'
import Image from 'next/image';
import logo from '@/public/bouquet100.png'
import user from '@/public/user.png'
import cart from '@/public/cart.png'
import menu from '@/public/menu.png'
import close from '@/public/close.png'
import redirection from '@/public/redirect-arrow.png'
import { useState } from 'react';

export default function StaticHeader(){
  const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
      <section className="bg-[#efefef] grid grid-cols-2 w-full gap-[40vw] 2xl:gap-[80vw] overflow-hidden justify-between border-red-400 border-x border-7 rounded-xl h-30 lg:h-40">
        <h1 className="flex items-center gap-10 w-[45vw]">
          <Link href="/">
            <Image
              src={logo}
              height={75}
              width={75}
              alt="bouquet logo"
              className="text-white w-20 h-20 xl:w-30 xl:h-30 ml-5 bg-red-200 rounded-full p-2 "
            />
          </Link>
          <Link href="/" className="text-black text-3xl lg:text-4xl 2xl:text-5xl font-bold font-serif">
            FLORASEDE
          </Link>
        </h1>
        <div className="flex justify-center gap-10 items-center w-[30vw] 2xl:w-[10vw]">
          <Image
            src={user}
            height={50}
            width={50}
            alt="user section"
            className="p-3 border-black object-fill border-2 rounded-full hover:cursor-pointer hover:scale-125 duration-400"
          />
          <Image
            src={cart}
            height={40}
            width={40}
            alt="cart button"
            className=" object-fill  hover:cursor-pointer hover:scale-125 duration-400"
          />
          <Image
            src={menu}
            height={50}
            width={50}
            alt="menu button"
            className=" object-fill  hover:cursor-pointer hover:scale-125 duration-400"
            onClick={() => setIsOpen(true)}
          />
        </div>
        {isOpen && (
          <section className="fixed z-100 bg-linear-to-tr from-pink-800 to-red-600 text-white via-purple-600 h-full transparent w-full items-center justify-center text-center ">
            <Image
              src={close}
              height={40}
              width={40}
              alt="close button"
              className=" align-center text-center relative left-[92.5vw] pt-3 top-3 duration-700 hover:rotate-360 items-center flex rounded-full"
              onClick={() => setIsOpen(false)}
            />
            <h1 className="text-6xl">A little flower-filled Mood</h1>
            <p className="text-4xl">Explore Petals & Stem</p>
            <hr />
            <Link href="/bonquote" className="">
              <div className=" items-center py-5 flex justify-between px-20 text-center hover:bg-red-700/30  hover:text-white ">
                <p className="text-2xl">Bouquets</p>
                <Image
                  src={redirection}
                  height={30}
                  width={30}
                  alt="redirect to Bonquote section"
                  className="hover:scale-125 animation duration-400"
                />
              </div>
            </Link>

            <hr />
            <div className=" items-center flex py-5 justify-between px-20 text-center hover:bg-red-700/30  hover:text-white ">
              <p className="text-2xl">Out Atlier</p>
              <Image
                src={redirection}
                height={30}
                width={30}
                alt="redirect to our arlier section"
                className="hover:scale-125 animation duration-400"
              />
            </div>

            <hr />
            <div className=" items-center flex py-5 justify-between px-20 text-center hover:bg-red-700/30  hover:text-white ">
              <p className="text-2xl">Wedding & Events</p>
              <Image
                src={redirection}
                height={30}
                width={30}
                alt="redirect to wedding and events section"
                className="hover:scale-125 animation duration-400"
              />
            </div>

            <hr />
            <div className=" items-center flex py-5 justify-between px-20 text-center hover:bg-red-700/30  hover:text-white ">
              <p className="text-2xl">Flower Subscription</p>
              <Image
                src={redirection}
                height={30}
                width={30}
                alt="redirect to subscription section"
                className="hover:scale-125 animation duration-400"
              />
            </div>

            <hr />
            <div className=" items-center py-5 flex justify-between px-20 text-center hover:bg-red-700/30  hover:text-white ">
              <p className="text-2xl">Sign in / Create Account</p>
              <Image
                src={redirection}
                height={30}
                width={30}
                alt="redirect to sign in / sign up section"
                className="hover:scale-125 animation duration-400"
              />
            </div>
          </section>
        )}
      </section>
    );
}