import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <Card 
              title="Card Title" 
              description="Some quick example text to build on the card title and make up the bulk of the card's content." 
              buttonText="Go somewhere"
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Card Title 2" 
              description="Another example of a description for the second card." 
              buttonText="Go somewhere"
            />
          </div>
          <div className="col-md-4">
            <Card 
              title="Card Title 3" 
              description="Here is a description for the third card." 
              buttonText="Go somewhere"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
