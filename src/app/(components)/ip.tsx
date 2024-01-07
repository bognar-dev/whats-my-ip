import React from 'react';
import { IP } from '../(types)/ip';
import Location from './location';

interface IPProps {
    ipInfo: IP;
}

const IpDisplay: React.FC<IPProps> = ({ ipInfo}) => {
    return (
        <div className='flex flex-col gap-5 justify-center justify-items-center items-center'>
            <p className=' p-5 font-extrabold text-8xl'>{ipInfo.ip}</p>
           <Location ipInfo={ipInfo}/>
        </div>
    );
};

export default IpDisplay;

