'use client'
import React, { useEffect, useState } from 'react'
import AuctionCard from './AuctionCard';
import AppPagination from '../components/AppPagination';
import { Auction, PagedResult } from '@/types';
import { getData } from '../actions/auctionActions';
import Filters from './Filters';
import { useParamsStore } from '@/hooks/useParamsStore';
import { useShallow } from 'zustand/react/shallow';
import qs from 'query-string';


export default function Listings() {
    const [data, setData] = useState<PagedResult<Auction>>();
    const params = useParamsStore(useShallow(state => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm
})));
    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({url: '', query: params});

    function setPageNumber(pageNumber: number){
      setParams({pageNumber});
    }

    useEffect(() => {
        getData(url).then(data => {
            setData(data);
        })
    }, [url])

    if(!data) {
        return <div>Loading...</div>
    }
  

  return (
    <>
      <Filters />
      <div className='grid grid-cols-4 gap-6'>
        {data.results.map((auction) => (
          <AuctionCard auction={auction} key={auction.id}/>
        ))}
      </div>

      <div className='flex justify-center mt-4'>
        <AppPagination pageChanged={setPageNumber} 
        currentPage={params.pageNumber} pageCount={data.pageCount}/>
      </div>
    </>
    
  )
}
