import Header from "./components/Header/Header"
import Cartao from './components/Card/Cartao.jsx';
import Footer from './components/Footter/Footer.jsx';

export default function App() {
    return (
        <div className="app">
      <Header />
      <div className="content">
        <Cartao />
      </div>
      <Footer />
    </div>
    )
}