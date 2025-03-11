import React from 'react'
import { Menu } from '../components/inicio'

export  function Plantilla({children}) {
  return (
    <div>
        <div className='header'>
            <Menu/>
        </div>
        <div className='body'>
            {children}
        </div>
      
    </div>
  )
}
