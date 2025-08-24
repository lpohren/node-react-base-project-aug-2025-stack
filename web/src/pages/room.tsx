import { Navigate, useParams } from 'react-router-dom'

const Room = () => {
  const { roomId } = useParams()

  if (!roomId) {
    return <Navigate replace to="/" />
  }

  return <div>Room details {roomId}</div>
}

export default Room
