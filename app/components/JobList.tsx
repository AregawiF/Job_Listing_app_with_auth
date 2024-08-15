"use client";

import React from 'react'
import JobCard from './JobCard'
import Link from 'next/link';
import { useGetAllOpportunitiesQuery } from '../service/apiData';
import { useSession } from 'next-auth/react';

const JobList = () => {
    const session = useSession();
    const {data, isError, isLoading} = useGetAllOpportunitiesQuery(undefined);
    const jobs = data?.data
    if (!session.data){
        return <h1>Redirecting...{session.status}{session.data}</h1>
    }

    if (isError){ 
        return <h1>Ooops there seems to be an error</h1>
    }
    if (isLoading){
        return <h1 className='text-center text-lg mt-96'>Loading ....</h1>
    }
    
    return (
    <div className='pl-28 pr-52 '>
        <div className="header flex justify-between">
            <div>
                <h1 className='text-3xl font-black font-Poppins'>Opportunities</h1>
                <span className='text-sm text-mygray'>Showing 73 results</span>
            </div>
            <div className='text-sm'>
                <span className='mr-3 text-mygray '>Sort by:</span>
                <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="btn m-1">Choose an option</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Most Relevant</a></li>
                        <li><a>Most Recent</a></li>
                        <li><a>Title</a></li>
                        <li><a>Location</a></li>
                    </ul>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
        </div>
        <div>
            {jobs?.map((job:any) => 
                <Link href={`/jobs/${job.id}`} key={job.id}>
                    <JobCard image={job.logoUrl} title={job.title} location={job.location} description={job.description} opType={job.opType} categories={job.categories} />
                </Link>)}
        </div>
    </div>
  )
}

export default JobList