import logo from './logo.svg';
import './App.css';
import Main from './main/Main';
import FilmsList from './footer/FilmsList';
import { useCallback, useEffect, useState } from 'react';
import Sidebar from './sidebar/Sidebar';

function App() {

  const [data,setData] = useState({
        Featured : null,
        TendingNow : []
  })

  const handleSelect = useCallback((item)=> {
      setData((prevData)=> {
        return {
          ...prevData,
          Featured : item
          
        }
      })
  },[])


  const getData = useCallback(()=> {
      fetch("/data.json")
      .then(stream => stream.json())
      .then(obj => setData({
          Featured : obj.Featured,
          TendingNow : obj.TendingNow
      }))
  },[])

  useEffect(()=> {
    getData()
  },[])

  return (
    <div className="App">
      {data.Featured ? <> <Sidebar/> <Main activeItem = {data.Featured}/><FilmsList filmsInfo={data.TendingNow} onSelect={handleSelect}/></> : "Loading...."}
    </div>
  );
}

export default App;
