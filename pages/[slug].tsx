import Link from 'next/link'

const SlugPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-3">
      <div className="my-3 text-xl font-bold">Slug Page</div>
      <div>
        <Link href="/">
          <a className="px-5 py-2 transition bg-blue-300 rounded-full hover:to-blue-700">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SlugPage
