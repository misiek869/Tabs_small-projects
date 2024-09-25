import { useState } from 'react'
import tabs from './data'
import { type TabType } from './data'

function App() {
	const [data, setData] = useState<TabType[]>(tabs)

	return <div></div>
}

export default App
