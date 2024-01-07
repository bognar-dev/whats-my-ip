"use client"
import { useState, useEffect } from 'react'
import IpDisplay from './(components)/ip'
import { IP } from './(types)/ip'


export default function Home() {
  
  
  const [data, setData] = useState<IP>()
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://api.my-ip.io/v2/ip.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center justify-center p-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
        </div>
      </div>
      <IpDisplay ipInfo={data} />
    </main>
  )
}
