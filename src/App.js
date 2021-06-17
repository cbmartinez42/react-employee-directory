import React, {useState} from "react";
import './App.css';
import Wrapper from './Components/Wrapper/Wrapper';
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'


function App() {
  const [search, setSearch] = useState(''); 
  return (
    <Wrapper>
    <Header 
      search = {search}
      setSearch = {setSearch}
    />
  
    
    <Table 
      search = {search}
    />
    </Wrapper>
  );
}

export default App;
