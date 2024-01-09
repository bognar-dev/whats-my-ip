import { useState, useEffect } from 'react'
import IpDisplay from './(components)/ip'
import { IP } from './(types)/ip'
import { useSearchParams } from 'next/navigation';
import { headers } from 'next/headers';


export default async function Home() {
  const header = headers()
  let ip = (header.get('x-forwarded-for'))
  if(ip === "::1") {
    ip = '92.10.130.85'
  }
  console.log(ip);
  const ipInfo = await fetch(`http://ip-api.com/json/${ip}`)
  const ipInfoJson = await ipInfo.json() as IP
  console.log(ipInfoJson);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center justify-center p-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
        </div>
      </div>
     <IpDisplay ipInfo={ipInfoJson}/>
    </main>
  )
}
