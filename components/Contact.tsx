import React from 'react'
import { Gmail, Github, Pin, Linkedin } from './Icons'

export const Contact = () => {
	return (
		<React.Fragment>
			<div className="w-full my-4 text-center">Full-stack Web Development student at Chas Academy 2019-21.</div>
			<div className="flex items-center justify-center inline w-full mt-3 mb-2 md:w-1/2">
				<Gmail />
				<div>marten.frisk@gmail.com</div>
			</div>
			<div className="flex items-center justify-center inline-block w-full my-2 md:w-1/2">
				<Github />
				<a href="https://github.com/martenfrisk" target="_blank" rel="noopener noreferrer" className="border-b-2 border-dashed">
					martenfrisk
				</a>
			</div>
			<div className="flex items-center justify-center inline-block w-full my-2 md:w-1/2">
				<Pin />
				<div>Stockholm, Sweden</div>
			</div>
			<div className="flex items-center justify-center inline-block w-full my-2 md:w-1/2">
				<Linkedin />
				<a href="https://linkedin.com/in/martenfrisk/" target="_blank" rel="noopener noreferrer" className="border-b-2 border-dashed">
					/in/martenfrisk
				</a>
			</div>
		</React.Fragment>
	)
}
