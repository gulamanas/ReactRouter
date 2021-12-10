import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: '1px solid black',
          paddingBottom: '1 rem'
        }}
      >
        <Link to="invoices">Invoices</Link>
        <Link to="expenses">Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
