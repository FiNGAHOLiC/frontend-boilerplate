import React from 'react';
import Header from './components/Header/Header';
import Props from './components/Props/Props';
import Footer from './components/Footer/Footer';

const App = () => {
  const companyName = 'Company Name';
  return (
    <div>
      <Header name={companyName} />
      <Props />
      <Footer name={companyName} />
    </div>
  );
};

export default App;
