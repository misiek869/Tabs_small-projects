import { type TabType } from '../data'
import Duties from './Duties'

type JobInfoProps = {
	data: TabType[]
	currentItem: number
}

const JobInfo = ({ data, currentItem }: JobInfoProps) => {
	const { company, dates, duties, title } = data[currentItem]

	return (
		<article className='job-info'>
			<h3>{title}</h3>
			<span className='job-company'>{company}</span>
			<p className='job-date'>{dates}</p>
			<Duties duties={duties} />
		</article>
	)
}

export default JobInfo
