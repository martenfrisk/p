import Head from 'next/head'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Projects } from '../components/Projects'
export default () => (
	<div>
		<Head>
			<title>Mårten Frisk's portfolio</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
		</Head>
		<div>
			<div className="my-4 md:my-20 text">Mårten Frisk</div>
			<div className="container pt-48 mx-auto md:pt-64">
				<div className="flex flex-wrap items-center justify-center w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2">
					<Contact />
				</div>
				<div className="w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2">
					<Skills />
				</div>
				<div className="w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2">
					<Projects />
				</div>
			</div>
		</div>
	</div>
)
