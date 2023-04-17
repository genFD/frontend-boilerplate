import { useState } from 'react'
import classes from './NewPost.module.css'

type OnchangeProps = {
  handleTextOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleBodyOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function NewPost(props: OnchangeProps) {
  return (
    <>
      <form action=""></form>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={props.handleTextOnChange}
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={props.handleBodyOnChange}
          />
        </p>
      </form>
    </>
  )
}

export default NewPost
