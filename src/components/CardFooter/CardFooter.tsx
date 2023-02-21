import React from 'react'
import { IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { acceptMovie, rejectMovie } from '../../actions/actions'
import './CardFooter.css'

interface Props {
  id: string
  onContentChange: () => Promise<void>
}

const CardFooter: ({ id, onContentChange }: Props) => JSX.Element = ({ id, onContentChange }: Props) => {
  return (
    <div className={'footer__container'}>
      <IconButton
        className={'button--accept pressable'}
        data-testid={'accept-button'}
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
      >
        <CheckIcon/>
        Accept
      </IconButton>
      <IconButton
        className={'button--reject pressable'}
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
      >
        Reject
        <CloseIcon/>
      </IconButton>
    </div>
  )
}

export default CardFooter
