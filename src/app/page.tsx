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
     
     <IpDisplay ipInfo={ipInfoJson}/>
    </main>
  )
}
