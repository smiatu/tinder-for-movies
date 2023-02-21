import React from 'react'
import { IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { acceptMovie, rejectMovie } from '../../actions/actions'

interface Props {
  id: string
  onContentChange: () => Promise<void>
}

const CardFooter: ({ id, onContentChange }: Props) => JSX.Element = ({ id, onContentChange }: Props) => {
  return (
    <div>
      <IconButton
        onClick={() => {
          acceptMovie(id).then(
            () => {
              onContentChange().catch(e => {
                console.log(e)
              })
            }
          ).catch(
            (e) => {
              console.log(e)
            }
          )
        }}
        className='pressable'
      >
        <CheckIcon/>
      </IconButton>
      <IconButton
        onClick={() => {
          rejectMovie(id).then(
            () => {
              onContentChange().catch(e => {
                console.log(e)
              })
            }
          ).catch(
            (e) => {
              console.log(e)
            }
          )
        }}
        className='pressable'
      >
        <CloseIcon/>
      </IconButton>
    </div>
  )
}

export default CardFooter
