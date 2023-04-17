import Post from './Post'
import NewPost from '@components/NewPost'
import classes from './PostsList.module.css'
import { useState } from 'react'
// import Modal from './Modal'
function PostList() {
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')

  const handleTextOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAuthor(event.target.value)
  }
  const handleBodyOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value)
  }
  return (
    <>
      <NewPost
        handleTextOnChange={handleTextOnChange}
        handleBodyOnChange={handleBodyOnChange}
      />

      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author={author} body={body} />
      </ul>
    </>
  )
}
export default PostList
