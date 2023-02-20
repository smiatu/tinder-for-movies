import {IconButton} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { acceptMovie, rejectMovie } from "../../actions/actions";

const CardFooter = ({ id }) => {
    return (
        <div>
            <IconButton onClick={() => acceptMovie(id)} className="pressable">
                <CheckIcon />
            </IconButton>
            <IconButton onClick={() => rejectMovie(id)} className="pressable">
                <CloseIcon />
            </IconButton>
        </div>
    )
}

export default CardFooter;