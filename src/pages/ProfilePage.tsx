import { useMeArtisanQuery } from '../generated/graphql.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfilePage = () => {
  const { data, loading } = useMeArtisanQuery({})

  return (
    <div>
      <h1>This is the Profile Page</h1>
      {loading && <FontAwesomeIcon className='ml-4' icon={['fas', 'spinner']} spin />}
      <div>{data?.meArtisan?.email}</div>
    </div>
  )
}
