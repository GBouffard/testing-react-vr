import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    imageSrc: 'chess-world.jpg',
    buttonImageSrc: 'button-00.png',
  },
  {
    key: 1,
    imageSrc: 'broken-house.jpg',
    buttonImageSrc: 'button-01.png',
  },
  {
    key: 2,
    imageSrc: 'medieval-place.jpg',
    buttonImageSrc: 'button-02.png',
  }
];

export default class HelloVR extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      src: 'reactconf_00.jpg'
    }
  }


  render() {
    return (
      <View>
        <Canvas src={this.state.src}/>
        <UI buttonConfig={Config} onClick={(key) =>{
          this.setState({src: Config[key].imageSrc});
        }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVR', () => HelloVR);