"use client"
import IpDisplay from './(components)/ip'
import { IP } from './(types)/ip'

export default async function Home() {
  
   const data = await fetch('https://api.my-ip.io/v2/ip.json',{cache:'no-store'})
  const ip = await data.json() as IP
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center justify-center p-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
        </div>
      </div>
      <IpDisplay ipInfo={ip}/>
    </main>
  )
}
