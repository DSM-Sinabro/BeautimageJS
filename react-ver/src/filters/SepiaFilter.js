import Beautimage from './Beautimage';

export default class SepiaFilter extends Beautimage {

  constructor(props){
    super(props);
    this.imageMountCanvas = this.imageMountCanvas.bind(this);
    this.sepiaFilter = this.sepiaFilter.bind(this);
  }

  componentDidMount() {
    this.imageMountCanvas(this.refs.image, this.refs.canvas, this.sepiaFilter);
  }

  sepiaFilter(){
   let canvasContext = this.state.canvasContext;
   let pixels = canvasContext.getImageData(0,0,500,500);
   let pixelData = pixels.data;
   //
   for(let pixel = 0; pixel < pixelData.length; pixel += 4){
    let r = pixelData[pixel];
    let g = pixelData[pixel];
    let b = pixelData[pixel];

     pixelData[pixel] = r*0.3588 + g*0.7044 + b*0.1368;
     pixelData[pixel+1] = r*0.2990 + g*0.5870 + b*0.1140;
     pixelData[pixel+2] = r*0.2392 + g*0.4696 + b*0.0912;
   }
    canvasContext.putImageData(pixels, 0, 0);
  }
}