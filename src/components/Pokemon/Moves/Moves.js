import './Moves.css';
import MovesList from '../MovesList';

const Moves = ({ moves }) => {
    return (
        <div className="content-moves">
            <MovesList
                moves={moves}
            />
        </div>
    );
}

export default Moves;