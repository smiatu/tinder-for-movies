import {IconButton} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const CardFooter = () => {
    return (
        <div>
            <IconButton>
                <CheckIcon />
            </IconButton>
            <IconButton>
                <CloseIcon />
            </IconButton>
        </div>
    )
}

export default CardFooter;