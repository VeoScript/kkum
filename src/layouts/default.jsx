import NavigationBar from '~/components/NavigationBar'

export default function Layout({ children, getUser }) {
  return (
    <div className="flex flex-col w-full h-screen text-kkum-white bg-kkum-dark">
      <NavigationBar getUser={getUser} />
      <div className="flex w-full h-full px-32 py-5">
        { children }
      </div>
    </div>
  )
}