import { BrowserRouter , Routes, Route } from "react-router-dom";
import './App.css';
import Main from './Main';
import Stake from './Stake';
import Swap from './Swap';
import Lottery from './Lottery';
import Faq from './Faq';
import Contracts from './Contracts';          

function App(){
  return (
    
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Main/>}  /> */}
      <Route path='/' element={<Stake/>}  />
      <Route path='/swap' element={<Swap/>}  />
      <Route path='/lottery' element={<Lottery/>}  />
      {/* <Route path='/faq' element={<Faq/>}  />
      <Route path='/contracts' element={<Contracts/>}  /> */}
    </Routes>

    </BrowserRouter>
    
    
  );
}

export default App;
