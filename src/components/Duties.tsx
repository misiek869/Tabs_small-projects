type DutiesProps = {
	duties: string[]
}

const Duties = ({ duties }) => {
	return (
		<div>
			{duties.map(duty => {
				return <div className=''></div>
			})}
		</div>
	)
}

export default Duties
