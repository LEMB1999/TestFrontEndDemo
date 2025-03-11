export default function Todo ({ info: { id, todo, completed, userId } }) {
  return (
    <div className='todo'>
      <p>{todo}</p>
      <p>completed:<input type='checkbox' defaultChecked={completed} /></p>
    </div>
  )
}
