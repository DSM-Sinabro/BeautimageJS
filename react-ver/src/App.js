import React, { Component } from 'react';
import InvertFilter from './filters/InvertFilter';
import AlphaFilter from './filters/AlphaFilter';
import GrayScaleFilter from './filters/GrayScaleFilter';
import SepiaFilter from './filters/SepiaFilter';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      alphaValue : 50
    }
  }

  render() {
    return (
      <div className="App">
        <InvertFilter imagePath={require('./IMG_0768.JPG')}/>
        <AlphaFilter imagePath={require('./IMG_0768.JPG')} filterValue={this.state.alphaValue}/>
        <GrayScaleFilter imagePath={require('./IMG_0768.JPG')} filterValue={100}/>
        <SepiaFilter imagePath={require('./IMG_0768.JPG')} />
      </div>
    );
  }

  changeAlphaValue(){

  }
}

export default App;
