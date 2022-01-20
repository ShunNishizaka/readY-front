import * as React from 'react';
import { useState } from 'react';
import Button from "@mui/material/Button";
import { set_favo_series, delete_favo_series, get_favo_series } from '../request';
import { useAsyncRun, useAsyncTask } from "react-hooks-async"
import { useEffect } from 'react';

export default function FavoSeries(props) {
  const [favoSeriesButton, setFavoSeriesButton] = useState(false);
  const [pending, setPending] = useState(true)
  
  const getFavoSeriesResult = async () => {
    const result = await get_favo_series(localStorage.getItem("token"))
    if (-1 === result.indexOf(props.bookInfo.book.series_name)) {
      setFavoSeriesButton(false);
    } else {
      setFavoSeriesButton(true);
    }
    setPending(false)
  }

  useEffect(()=>{
    getFavoSeriesResult()
  },[])


  const onClick = () => {
    if (favoSeriesButton) {
      //delete
      delete_favo_series(localStorage.getItem("token"), props.bookInfo.book.series_name)
      setFavoSeriesButton(false)
    } else {
      set_favo_series(localStorage.getItem("token"), props.bookInfo.book.series_name)
      setFavoSeriesButton(true)
    }
    setFavoSeriesButton(!favoSeriesButton)
  }

  if (pending) {
    return (
      <Button variant="outlined">
        Loading...
      </Button>
    )
  } else if (favoSeriesButton) {
    return (
      <Button variant="outlined" onClick={onClick}>
        このシリーズをお気に入り登録済み
      </Button>
    )
  } else {
    return (
      <Button variant="contained" onClick={onClick}>
        このシリーズをお気に入り登録する
      </Button>
    )
  }
}