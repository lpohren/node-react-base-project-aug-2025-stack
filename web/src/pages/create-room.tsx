import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

interface GetRoomsApiResponse {
  id: string
  name: string
}

const CreateRoom = () => {
  const { data, isLoading } = useQuery<GetRoomsApiResponse[]>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3333/rooms')
      const result = await res.json()

      return result
    },
  })

  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <p>Loading...</p>}

      <div>
        {data?.map((room) => (
          <pre key={room.id}>
            <Link className="underline" key={room.id} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          </pre>
        ))}
      </div>
    </div>
  )
}

export default CreateRoom
