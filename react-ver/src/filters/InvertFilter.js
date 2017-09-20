import Beautimage from './Beautimage';

export default class InvertFilter extends Beautimage{
  constructor(props){
    super(props);

    this.imageMountCanvas = this.imageMountCanvas.bind(this);
    this.invertFilter = this.invertFilter.bind(this);
  }

  componentDidMount(){
    this.imageMountCanvas(this.refs.image,this.refs.canvas,this.invertFilter);
  }

  invertFilter(){
    let canvasContext = this.state.canvasContext;
    let pixels = canvasContext.getImageData(0,0,500,500);
    let pixelData = pixels.data;

    for(let i = 0; i<pixels.data.length; i+=4){
      pixelData[i] = 255 - pixelData[i];
      pixelData[i+1] = 255 - pixelData[i+1];
      pixelData[i+2] = 255 - pixelData[i+2];
    }
    canvasContext.putImageData(pixels,0,0);

  }
}