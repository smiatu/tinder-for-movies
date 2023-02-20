import {IconButton} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { acceptMovie, rejectMovie } from "../../actions/actions";
import React from "react";

type Props = {
    id: string,
    onContentChange: () => void,
}

const CardFooter = ({ id, onContentChange }: Props) => {
    return (
        <div>
            <IconButton
                onClick={() => {
                    acceptMovie(id);
                    onContentChange();
                }}
                className="pressable"
            >
                <CheckIcon/>
            </IconButton>
            <IconButton
                onClick={() => {
                    rejectMovie(id);
                    onContentChange();
                }}
                className="pressable"
            >
                <CloseIcon/>
            </IconButton>
        </div>
    )
}

export default CardFooter;