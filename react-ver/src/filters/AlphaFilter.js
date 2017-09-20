import Beautimage from './Beautimage';

export default class AlphaFilter extends Beautimage{

  componentDidMount(){
    let canvas = this.refs.canvas;
    let canvasContext = canvas.getContext('2d');
    let image = this.refs.image;

    image.addEventListener('load',()=>{
      canvasContext.drawImage(image,0,0,500,500);
      let pixels = canvasContext.getImageData(0,0,500,500);
      let pixelData = pixels.data;
      for(let i = 0; i<pixels.data.length; i+=4){
        pixelData[i+3] = 255 / 100 * this.props.filterValue;
      }

      canvasContext.putImageData(pixels,0,0);
    });
  }
}