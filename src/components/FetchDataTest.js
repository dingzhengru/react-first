import axios from 'axios';
import { useState, useEffect } from 'react';

async function fetchData() {
  return await axios.get('https://jsonplaceholder.typicode.com/users');
}

function FetchDataTest() {
  const [dataList, setDataList] = useState([]);

  //* 第二個參數放 []，避免重複執行
  useEffect(async () => {
    console.log('[Fetch Data]');
    const result = await fetchData();
    setDataList(result.data);
    return;
  }, []);

  if (dataList.length == 0) {
    return null;
  }

  return <div>{JSON.stringify(dataList[0].name)}</div>;
}
export default FetchDataTest;
