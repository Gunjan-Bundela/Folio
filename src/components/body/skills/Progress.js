import React,{useState} from 'react'
import './Progress.css'
function Progress({data}) {
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${data.proficiency}%`
		}
		
		setStyle(newStyle);
	}, 200);
    return (
        <div className='progress'>
            <div className='progress-done' style={style}>
                {data.language}
            </div>
        </div>
    )
}

export default Progress
