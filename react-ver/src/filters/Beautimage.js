import React,{Component} from 'react';

export default class Beautimage extends Component{
  constructor(props){
    super(props);
    this.imageMountCanvas = this.imageMountCanvas.bind(this);
  }

  render() {
    return (
        <div>
          <canvas ref="canvas" width="500" height="500">

          </canvas>
          <div style={{display: "none"}}>
            <img src={this.props.imagePath} ref="image" alt="Beautimage"/>
          </div>
        </div>
    )
  }

  imageMountCanvas(image, canvas,callback) {
    this.setState({ canvasContext : canvas.getContext('2d')});

    image.addEventListener('load', ()=>{
      this.state.canvasContext.drawImage(image,0,0,500,500);
      callback();
    });
  }
}