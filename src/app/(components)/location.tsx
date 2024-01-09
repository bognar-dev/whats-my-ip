import React from 'react';
import { IP } from '../(types)/ip';
import { Compass, MapPin } from 'lucide-react';

interface LocationProps {
    ipInfo: IP
}

const Location = ({ ipInfo }: LocationProps) => {
    return (
        <>
        <div className='flex gap-2 justify-items-start items-center'>
            <MapPin />
            <p className=' self-start font-bold text-3xl'>{ipInfo.city}</p>
            
        </div>
        <div className='flex gap-2 justify-items-start items-center'>
            <Compass />
            <p className='font-bold text-3xl'>{ipInfo.country}</p>
            
        </div>
        
        </>
    );
};

export default Location;
