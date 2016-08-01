import React from 'react';

import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';

const App = (props) => (
  <div>
    <Header />
    <ItemList items={props.items} />
    <Footer />
  </div>
);

App.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default App;
