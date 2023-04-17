import classes from './Post.module.css'

type PostProps = {
  author: String
  body: String
}
function Post(props: PostProps) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  )
}
export default Post
