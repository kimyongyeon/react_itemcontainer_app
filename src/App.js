import React from 'react';
import ItemContainers from "./components/ItemContainers";
import SwitchContainer from "./components/SwitchContainer";
import InformationContainer from "./components/InformationContainer";
import SalesRanking from "./components/SalesRanking";

const productData = [
    {name: 'Product 1', url: 'http://www.example/p1'},
    {name: 'Product 2', url: 'http://www.example/p2'},
    {name: 'Product 3', url: 'http://www.example/p3'},
    {name: 'Product 4', url: 'http://www.example/p4'},
]

const users = [
    {name: 'user00'},
    {name: 'user01'},
    {name: 'user02'}
]

const regions = [
    {name: 'Korea', code:'KO'},
    {name: 'Japan', code:'JR'},
]


function App() {
  return (
    <div className="App">
      <ItemContainers />
      <SwitchContainer />
      <InformationContainer />
      <SalesRanking items={productData} users={users} regions={regions} />
    </div>
  );
}

export default App;
