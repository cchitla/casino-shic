import React from 'react';
import PropTypes from 'prop-types';
import jackpot from '../assets/audio/jackpot.wav';
import win from '../assets/audio/win.wav';
import fail from '../assets/audio/fail.wav';
import coin from '../assets/audio/coin.wav';
import spinning from '../assets/audio/spinning.wav';
import button from '../assets/audio/button.wav'

const audios = { jackpot, win, fail, coin, spinning, button}

const Sound = ({ audio }) => (
  <audio autoPlay="autoplay" preload="false">
    <source src={audios[audio]} />
  </audio>
)

Sound.propTypes = {
  audio: PropTypes.string.isRequired
}

export default Sound
