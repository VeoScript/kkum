import NavigationBar from '~/components/NavigationBar'

export default function Layout({ children, getUser }) {
  return (
    <div className="flex flex-col items-center w-full max-w-full h-screen text-kkum-white bg-kkum-dark">
      <div className="flex flex-col w-full max-w-screen-2xl h-full">
        <NavigationBar getUser={getUser} />
        <div className="flex w-full max-w-6xl h-full px-32 py-5">
          { children }
        </div>
      </div>
    </div>
  )
}