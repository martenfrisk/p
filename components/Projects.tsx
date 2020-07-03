import React from 'react'
import { ExtLink } from './Icons'

export const Projects = () => {
	return (
		<React.Fragment>

			<div className="w-full text-xl text-center">Projects</div>

			<div className="flex flex-wrap items-stretch my-4 justify-evenly">
				<div className="w-full text-justify md:w-2/3 md:pr-4">
					<div className="text-lg font-semibold cursor-pointer hover:underline">
						<a
							href="https://martenfrisk.github.io/seekerslounge/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Seekers' Lounge<ExtLink />
						</a>
					</div>
					Instant search engine with 45k+ lines from the "Teachers's Lounge" podcast. Powered by AWS
					ElasticSearch and built with React.
				</div>
				<div className="flex self-end justify-center w-full h-auto md:w-1/3 md:justify-end">
					<img
						src="/screen-teacher-thumb.png" 
						alt="Seekers' Lounge screenshot"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>
			<hr />
			<div className="flex flex-wrap items-stretch my-4 justify-evenly">
				<div className="w-full text-justify md:w-2/3 md:pr-4">
					<div className="text-lg font-semibold cursor-pointer hover:underline">
						<a href="https://martenfrisk.github.io/dhammapada/" target="_blank" rel="noopener noreferrer">
							Dhammapada Reader
							<ExtLink />
						</a>
					</div>
					Lightweight and distraction-free site for reading the Dhammapada. Built with React.
				</div>
				<div className="flex justify-center w-full h-auto md:w-1/3 md:justify-end">
					<img
						src="/screen-dhamma-thumb.png"
						alt="Dhammapada Reader screenshot"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>

			<hr />

			<div className="flex flex-wrap items-stretch my-6 justify-evenly">
				<div className="flex flex-wrap w-full text-justify">
					<div className="w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline">
						<a
							href="https://martenfrisk.github.io/FootballLines/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Football Lines<ExtLink />
						</a>
					</div>
					<div className="w-full md:w-2/3 ">
						View historical table placements of Swedish football teams. Built with React.
					</div>
				</div>
				<div className="flex justify-center w-full h-auto mt-2 cursor-pointer">
					<img
						src="/screen-football-thumb.png"
						alt="Football Lines screenshot"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>
			<hr />

			<div className="flex flex-wrap items-stretch my-6 justify-evenly">
				<div className="w-full text-justify md:w-2/3 md:pr-4">
					<div className="text-lg font-semibold cursor-pointer hover:underline">
						<a
							href="https://martenfrisk.github.io/KoreanDynastyGenerator/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Korean Dynasty Generator
							<ExtLink />
						</a>
					</div>
					Generate a fully staffed, randomized medieval Korean bureaucracy. Built with React.
				</div>
				<div className="flex justify-center w-full h-auto md:w-1/3 md:justify-end">
					<img
						src="/screen-dynasty-thumb.png"
						alt="Korean Dynasty Generator screenshot"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>

			<hr className="w-full" />
			<div className="flex flex-wrap items-stretch my-4 justify-evenly">
				<div className="flex flex-wrap w-full my-2 text-justify">
					<div className="w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline">
						Fan art
					</div>
					<div className="w-full md:w-2/3 ">
						Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.
					</div>
				</div>
				<div className="flex justify-center w-full h-auto mt-2 cursor-pointer">
					<img
						src="/teachers-faces-thumb.jpg"
						alt="Teachers' Lounge fan art"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>

			<hr />

			<div className="w-full mt-8 text-xl text-center">One-day projects</div>
			<div className="flex flex-wrap items-stretch my-6 justify-evenly">
				<div className="w-full text-justify md:w-2/3 md:pr-4">
					<div className="text-lg font-semibold cursor-pointer hover:underline">
						<a
							href="https://martenfrisk.github.io/dailyui/#/calculator"
							target="_blank"
							rel="noopener noreferrer"
						>
							TI-108 Calculator
							<ExtLink />
						</a>
					</div>
					Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript.
				</div>
				<div className="flex justify-center w-full h-auto md:w-1/3 md:justify-end">
					<img
						src="/screen-calc-thumb.png"
						alt="TI-108 Calculator screenshot"
						className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
					/>
				</div>
			</div>
			<hr />
			<div className="flex flex-wrap w-full">
				<div className="flex flex-wrap items-stretch w-1/2 my-6 justify-evenly">
					<div className="w-full mb-4 text-center">
						<div className="text-lg font-semibold cursor-pointer hover:underline">
							<a
								href="https://martenfrisk.github.io/dailyui01/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Newsletter
								<ExtLink />
							</a>
						</div>
					</div>
					<div className="flex justify-center w-full h-auto md:justify-end">
						<img
							src="/screen-newsletter-thumb.png"
							alt="Newsletter screenshot"
							className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
						/>
					</div>
				</div>
				<div className="flex flex-wrap items-stretch w-1/2 my-6 justify-evenly">
					<div className="w-full mb-4 text-center">
						<div className="text-lg font-semibold cursor-pointer hover:underline">
							<a
								href="https://martenfrisk.github.io/dailyui03/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Landing page
								<ExtLink />
							</a>
						</div>
					</div>
					<div className="flex justify-center w-full h-auto md:justify-end">
						<img
							src="/screen-landing.png"
							alt="Landing page screenshot"
							className="w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
