// Just one example
import Mole from './Mole'

function MoleContainer(props){
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole setScore={props.setScore} score={props.score}/>
        </div>
    )
}

export default MoleContainer