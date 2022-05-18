import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
 const [data, setData] = useState('과연');

 useEffect(() => {
    axios.get('/api/post')
    .then((res) => {console.log(res.data.test);setData(res.data.test)})
    
 },[])
  
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;