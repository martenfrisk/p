import React from 'react'

const GemSize = `h-4 w-4 inline-block`
const SocialIcons = `h-5 w-5 mr-2 inline-block`

// All icons from flaticon.com
export const Gem = (color: string, repeat: number) => {
	if (color === 'gray') {
	return (	[...Array(repeat)].map((e, i) =>
	<div key={i} className={GemSize} >

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#aeaeae" d="M89.4 415V97L256 0l166.6 97v318L256 512z" />
  <path fill="#989898" d="M256 0l166.6 97v318L256 512z" />
  <path fill="#c5c5c5" d="M256 192.7L89.4 97 256 0zM256 319.3L89.4 415 256 512z" />
    <path fill="#aeaeae" d="M256 192.7L422.6 97 256 0zM256 319.3L422.6 415 256 512z" />
  <path fill="#e3e9ed" d="M256 418.7l86-50V143.3l-86-50-86 50v225.4z" />
  <path fill="#c5c5c5" d="M256 93.3v325.4l86-50V143.3z" />
</svg>
	</div>
		))
	} else if (color === 'green') {
	return (	[...Array(repeat)].map((e, i) =>
	<div key={i} className={GemSize}   >

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs/>
  <path fill="#62b400" d="M89.4 415V97L256 0l166.6 97v318L256 512z"/>
  <path fill="#4c8c00" d="M256 0l166.6 97v318L256 512z"/>
  <path fill="#92e200" d="M256 192.7L89.4 97 256 0zM256 319.3L89.4 415 256 512z"/>
  <g fill="#62b400">
    <path d="M256 192.7L422.6 97 256 0zM256 319.3L422.6 415 256 512z"/>
  </g>
  <path fill="#c6ea4b" d="M256 418.7l86-50V143.3l-86-50-86 50v225.4z"/>
  <path fill="#92e200" d="M256 93.3v325.4l86-50V143.3z"/>
</svg>
</div>
		)	) 
	}
}

export const Gmail = () => {
  return (<div className={SocialIcons}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs/>
  <path fill="#eceff1" d="M64 64h384v384H64z"/>
  <path fill="#cfd8dc" d="M256 296.4L448 448V148.7z"/>
  <path fill="#f44336" d="M464 64h-16L256 215.6 64 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h16V148.7l192 147.7 192-147.8V448h16a48 48 0 0048-48V112a48 48 0 00-48-48z"/>
</svg></div>)
}

export const Github = () => {
  return (<div className={SocialIcons}>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.1 511.1">
  <defs/>
  <path fill="#455a64" d="M255.5 2.5A256 256 0 00200 508.3a10.7 10.7 0 0013-10.4v-58c0-6-4.8-10.7-10.7-10.7h-21.4c-26.6 0-44.8-25.2-60.7-47.5l-4.9-6.8c7.2 4 14 8.6 20.5 13.6 12 11.2 27.5 18 43.8 19.2a29.4 29.4 0 0033.3-31.8v-7.5c0-4.8-3.1-9-7.7-10.2-59.2-16.8-99-61.1-99-110.3.5-26.7 11.4-52 30.5-70.7 3-3.1 3.9-7.9 2-11.9a59.7 59.7 0 013.1-54.4 105 105 0 0139.1 27.5c3 3.4 7.7 4.7 11.9 3.2 40.6-14.7 85-14.7 125.7 0 4.2 1.5 8.9.2 11.8-3.2a105 105 0 0139-27.5 59.7 59.7 0 013.2 54.4c-1.9 4-1 8.7 2 11.9 19 18.6 30 44 30.4 70.7 0 51.6-44.1 97.9-107.3 112.5a10.7 10.7 0 00-7 15.3c6 13.5 8.6 28.2 7.7 42.8V498a10.7 10.7 0 0013 10.4A256 256 0 00255.4 2.5z"/>
</svg>
  </div>)
}

export const Pin = () => {
  return (<div className={SocialIcons}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs/>
  <path fill="#fb5252" d="M256 0C150.1 0 64 86.1 64 192c0 133 173.3 308 180.7 315.3a16 16 0 0022.6 0C274.7 500 448 325.1 448 192 448 86.1 361.9 0 256 0z" />
  <circle cx="256" cy="192" r="96" fill="#fff" />
</svg>
  </div>)
}

export const Linkedin = () => {
  return (<div className={SocialIcons}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs/>
  <g fill="#2196f3">
    <circle cx="64" cy="64" r="64"/>
    <path d="M10.7 170.7h106.6c6 0 10.7 4.7 10.7 10.6v320c0 6-4.8 10.7-10.7 10.7H10.7c-6 0-10.7-4.8-10.7-10.7v-320c0-5.9 4.8-10.6 10.7-10.6zM435.2 156c-46.7-13.3-97-5-136.8 22.7-1.2-4.7-5.5-8-10.4-8H181.3c-5.9 0-10.6 4.7-10.6 10.6v320c0 6 4.7 10.7 10.6 10.7H288c5.9 0 10.7-4.8 10.7-10.7v-230a56 56 0 0157.6-11.8 50.2 50.2 0 0127.7 49.8v192c0 6 4.8 10.7 10.7 10.7h106.6c6 0 10.7-4.8 10.7-10.7V288c-1.2-87.7-42.5-120.2-76.8-132z"/>
  </g>
</svg>
  </div>)
}

export const ExtLink = () => {
  return (
    <div className="w-4 h-4 ml-1 align-baseline inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
  <defs/>
  <path d="M20 12h-1a.5.5 0 00-.4.5v6H5.5v-13h6A.5.5 0 0012 5v-.9a.5.5 0 00-.5-.5h-6a2 2 0 00-2 1.9v13a2 2 0 002 2h13a2 2 0 002-2v-6a.5.5 0 00-.6-.5z"/>
  <path d="M16.4 6.2l-5.2 5.2a.5.5 0 000 .7l.7.8a.5.5 0 00.7 0l5.3-5.3 1.8 1.8a.4.4 0 00.7-.2V4a.4.4 0 00-.4-.4h-5.2a.4.4 0 00-.2.7z"/>
</svg>
    </div>
  )
}