import { type TabType } from '../data'

type BtnContainerProps = {
	data: TabType[]
	currentItem: number
	setCurrentItem: (value: number) => void
}

const BtnContainer = ({
	data,
	currentItem,
	setCurrentItem,
}: BtnContainerProps) => {
	return (
		<div className='btn-container'>
			{data.map((item, index) => {
				return (
					<button
						key={item.id}
						className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
						type='button'
						onClick={() => setCurrentItem(index)}>
						{item.company}
					</button>
				)
			})}
		</div>
	)
}

export default BtnContainer
