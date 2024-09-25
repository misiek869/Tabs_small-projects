import { type TabType } from '../data'

type BtnContainerProps = {
	data: TabType[]
	currentItem: number
}

const BtnContainer = ({ data, currentItem }: BtnContainerProps) => {
	return (
		<div className='btn-container'>
			{data.map(item => {
				return (
					<button key={item.id} className='job-btn' type='button'>
						{item.company}
					</button>
				)
			})}
		</div>
	)
}

export default BtnContainer
