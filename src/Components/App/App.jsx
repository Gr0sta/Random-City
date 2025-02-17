import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import s from './app.module.css'


function App() {
  return<>
  <div className={s.app}>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
  </>
}

export default App;
