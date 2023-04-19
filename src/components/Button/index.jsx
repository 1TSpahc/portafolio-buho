export function Button ({ text, path }) {
  return (
    <a href={path} target="_blank" className=' rounded-md border border-blue-500 px-4 py-1 text-text-200 dark:-text--dark-text-200 duration-300 hover:bg-primary-100 hover:dark:-bg--dark-primary-100 hover:text-[#fff] hover:dark:text-text-100'>
        {text}
    </a>
  )
}
