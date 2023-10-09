import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
