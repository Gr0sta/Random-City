import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { loadCountryData } from '../loadCountryData';
import { useEffect, useState } from 'react';

import s from '../Styles/app.module.css'


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
