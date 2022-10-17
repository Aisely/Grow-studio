import Lottie from "lottie-react"
import loading from './loading.json'
import { Oval } from 'react-loader-spinner'

const Connecting = ({ 
    height, 
    width, 
    color, 
    visible, 
    ariaLabel, 
    secondaryColor,
    strokeWidth,
    strokeWidthSecondary
  }) => (
    <Oval
  height={height}
  width={width}
  color={color}
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#16e585a6"
  strokeWidth={strokeWidth}
  strokeWidthSecondary={strokeWidthSecondary}

/>
)

export default Connecting