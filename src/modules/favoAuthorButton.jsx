import * as React from 'react';
import { useState } from 'react';
import Button from "@mui/material/Button";
import { set_favo_Author, delete_favo_Author, get_favo_Author } from '../request';
import { useEffect } from 'react';

export default function FavoAuthor(props) {
  const [favoAuthorButton, setFavoAuthorButton] = useState(false);
  const [pending, setPending] = useState(true)
  
  const getFavoAuthorResult = async () => {
    const result = await get_favo_Author(localStorage.getItem("token"))
    if (-1 === result.indexOf(props.bookInfo.book.author)) {
      setFavoAuthorButton(false);
    } else {
      setFavoAuthorButton(true);
    }
    setPending(false)
  }

  useEffect(()=>{
    getFavoAuthorResult()
  },[])


  const onClick = () => {
    if (favoAuthorButton) {
      //delete
      delete_favo_Author(localStorage.getItem("token"), props.bookInfo.book.author)
      setFavoAuthorButton(false)
    } else {
      set_favo_Author(localStorage.getItem("token"), props.bookInfo.book.author)
      setFavoAuthorButton(true)
    }
    setFavoAuthorButton(!favoAuthorButton)
  }

  if (pending) {
    return (
      <Button variant="outlined" sx={{mt:1}}>
        Loading...
      </Button>
    )
  } else if (favoAuthorButton) {
    return (
      <Button variant="outlined" onClick={onClick} sx={{mt:1}}>
        この書籍の作者をお気に入り登録済み
      </Button>
    )
  } else {
    return (
      <Button variant="contained" onClick={onClick} sx={{mt:1}}>
        この書籍の作者をお気に入り登録する
      </Button>
    )
  }
}