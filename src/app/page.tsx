'use client'
import Link from 'next/link'
import Image from 'next/image'


import React from 'react'

// section
import Explore from './section/explore'
import Competition from './section/competition'

//svg
import Diesnat from '../../public/image/Tipografi-DN8.webp'

export default function Home() {
  return (
    <main className="text-center flex flex-col">
      <section className="h-screen mask-image-to-bottom">
        <video className="mask-image-to-bottom object-cover fixed h-screen w-screen -z-50 top-0 left-0 right-0 bottom-0" id="videoBackground" muted autoPlay loop><source src="/videos/header.webm" type='video/webm'/></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src={Diesnat} width={1000} height={1000} alt='Logo Diesnat 8' loading='lazy'/>

          <button className="hover:scale-105 transition duration-200 ease-in-out" type="button"
            onClick={()=>{
              var video1 = document.getElementById("videoBackground");
              var iconPause = document.getElementById("iconPause");
              var iconPlay = document.getElementById("iconPlay");
              if(video1 instanceof HTMLVideoElement) {
                if(video1.paused) {
                  iconPause?.classList.remove("hidden");
                  iconPause?.classList.add("block");
                  iconPlay?.classList.add("hidden")
                  video1.play();
                } else {
                  iconPlay?.classList.remove("hidden");
                  iconPlay?.classList.add("block");
                  iconPause?.classList.add("hidden");
                  video1.pause();
                }
              }
            }}
          >
            <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden" id="iconPlay">
              <path d="M178.5 129.134C179.167 129.519 179.167 130.481 178.5 130.866L106.5 172.435C105.833 172.82 105 172.339 105 171.569L105 88.4308C105 87.661 105.833 87.1799 106.5 87.5648L178.5 129.134Z" fill="white"/>
              <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
            </svg>

            <svg width="50" height="50" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="" id="iconPause">
              <circle cx="130" cy="130" r="127.5" stroke="white" stroke-width="5"/>
              <rect x="95" y="87" width="23" height="87" fill="white"/>
              <rect x="141" y="87" width="23" height="87" fill="white"/>
            </svg>
          </button>
        </div>  
      </section>

      <Explore/>

      <Competition/>

      <Image src={"/image/footer.jpg"} width={1000} height={1000} alt='Gambar' loading='lazy' style={{width:"100vw",height:"100vh"}} className="flex object-cover object-center mask-image-to-top"/>
    </main>
  )
}
