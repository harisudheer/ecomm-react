import React from 'react'
import "./Fruits.css"
import Fruits from './Fruits'

export default function Fruitshtml() {
  return (
   <> <div><h1 id='title'>Fruits Shop</h1></div>
    <hr></hr>
    <div id="products" class="main"><Fruits /></div>
    </>
    )
}