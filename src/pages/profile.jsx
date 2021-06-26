import { useSession } from 'next-auth/client'
import dynamic from 'next/dynamic'

const UnauthenticatedComponent = dynamic(() =>
  import('~/components/Unauthenticated')
)
const AuthenticatedComponent = dynamic(() =>
  import('~/components/Authenticated')
)

export default function Profile() {
  const [session, loading] = useSession()

  if (typeof window !== 'undefined' && loading) return <p>Loading...</p>

  if (!session) return <UnauthenticatedComponent />

  return <AuthenticatedComponent user={session.user} />
}