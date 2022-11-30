import React from 'react'
import './soundbox.css'
import s1 from './sounds/Cev_H2.mp3'
import s2 from './sounds/Dsc_Oh.mp3'
import s3 from './sounds/Heater-6.mp3'
import s4 from './sounds/Kick_n_Hat.mp3'
import s5 from './sounds/RP4_KICK_1.mp3'




function Soundbox() {
  return (
    <div className='letss'>
        <h1 className='head'>The Radio Shack 🤍</h1>
        <div className='buttonGroup'>
          <button onClick={() => {
            var a = new Audio(s1)
            a.play()
          }}>
            Plates
          </button>

          <button onClick={() => {
            var a = new Audio(s2)
            a.play()
          }}>
            Kick
          </button>

          <button onClick={() => {
            var a = new Audio(s3)
            a.play()
          }}>
            Clap
          </button>

          <button onClick={() => {
            var a = new Audio(s4)
            a.play()
          }}>
            Bam
          </button>

          <button onClick={() => {
            var a = new Audio(s5)
            a.play()
          }}>
            Bass
          </button>
        </div>
    </div>
  )
}

export default Soundbox