import React from 'react';
import { IP } from '../(types)/ip';
import Location from './location';

interface IPProps {
    ipInfo: IP;
}

const IpDisplay: React.FC<IPProps> = ({ ipInfo}) => {
    return (
        <div className='flex flex-col gap-5 justify-center justify-items-center items-center'>
            <p className=' p-5 font-extrabold text-4xl md:text-8xl'>{ipInfo.query}</p>
           <Location ipInfo={ipInfo}/>
           <p className='font-bold text-3xl'>{}</p>
        </div>
    );
};

export default IpDisplay;

