// Just one example
import Mole from './Mole'

function MoleContainer(props){
    return (
        <div>
            <Mole setScore={props.setScore} score={props.score}/>
        </div>
    )
}

export default MoleContainer