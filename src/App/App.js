import './App.css';

function App() {
  const name = "PATRYK PUSZKA";
  const names = ['PATRYK', 'ADRIAN', 'MACIEJ', 'PAWEL', 'MARCEL', 'BARBARA', 'SOFIA'];
  
  return (
    <>
    <div className="App">
    <p>{ name.length > 4 ? name : 'Hello friends!' }</p>
    <p>{ names.map((name) => <li key={name}>{name}</li>)}</p>
     </div>  
    <p>TEST</p>
    
    </>
  );
}

export default App;
