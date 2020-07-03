import React from 'react'
import { Gem } from './Icons'

export const Skills = () => {
	return (
		<div className="flex flex-wrap">
			<div className="w-full text-xl text-center">Skills</div>
			<div className="mx-6 mt-2">
			  <div className="inline-block w-1/2 ">React/JavaScript</div>
  			<div className="inline-block w-1/2 text-right">{Gem('green', 4)}</div>
  			<div className="inline-block w-1/2">HTML/CSS</div>
  			<div className="inline-block w-1/2 text-right">{Gem('green', 4)}</div>
  			<div className="inline-block w-1/2">Photoshop</div>
  			<div className="inline-block w-1/2 text-right">
  				{Gem('green', 3)}
  				{Gem('gray', 1)}
  			</div>
  			<div className="inline-block w-1/2">Angular & Vue</div>
  			<div className="inline-block w-1/2 text-right">
  				{Gem('green', 2)}
  				{Gem('gray', 2)}
  			</div>
  			<div className="inline-block w-1/2">AWS & PHP</div>
  			<div className="inline-block w-1/2 text-right">
  				{Gem('green', 1)}
  				{Gem('gray', 3)}
  			</div>
			</div>
			<div className="w-full mt-2 text-xl text-center">Languages</div>

		<div className="flex flex-wrap w-full mx-6 mt-2">
		  	<div className="inline-block w-1/2">English/Swedish</div>
  			<div className="inline-block w-1/2 text-right">{Gem('green', 4)}</div>
  
  			<div className="inline-block w-1/2">Korean</div>
  			<div className="inline-block w-1/2 text-right">
  				{Gem('green', 3)}
  				{Gem('gray', 1)}
  			</div>
		</div>
		</div>
	)
}
