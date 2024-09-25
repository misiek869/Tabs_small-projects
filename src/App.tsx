import { useState } from 'react'
import tabs from './data'
import { type TabType } from './data'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'

function App() {
	const [data, setData] = useState<TabType[]>(tabs)
	const [currentItem, setCurrentItem] = useState<number>(0)

	return (
		<section className='jobs-center'>
			<JobInfo data={data} currentItem={currentItem} />
			<BtnContainer />
		</section>
	)
}

export default App
