import React from 'react';
import ReactDOM from 'react-dom';

// const Home = () => {
//   return (
//     <div>
//       <h2 id="heading">Home</h2>
//     </div>
//   );
// };

class Home extends React.Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    setTimeout(() => {
      el.className = 'loaded';
    }, 0);
  }

  render() {
    return (
      <div className="loading" >
        <h2 id="heading">Home</h2>
      </div>
    );
  }
}

export default Home;
