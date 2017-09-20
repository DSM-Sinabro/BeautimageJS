import Beautimage from './Beautimage';

export default class GrayScaleFilter extends Beautimage {

  constructor(props){
    super(props);
    this.grayScaleFilter = this.grayScaleFilter.bind(this);
    this.imageMountCanvas = this.imageMountCanvas.bind(this);
  }

  componentDidMount() {
    this.imageMountCanvas(this.refs.image, this.refs.canvas, this.grayScaleFilter);
  }

  grayScaleFilter(){
    let canvasContext = this.state.canvasContext;
    let pixels = canvasContext.getImageData(0, 0, 500, 500);
    let pixelData = pixels.data;


    for (let i = 0; i < pixelData.length; i += 4) {
      let r = pixelData[i];
      let g = pixelData[i + 1];
      let b = pixelData[i + 2];

      let v = (r+g+b) / 3 * (this.props.filterValue / 100);

      pixelData[i] = pixelData[i + 1] = pixelData[i + 2] = v
    }

    canvasContext.putImageData(pixels, 0, 0);
  }
}