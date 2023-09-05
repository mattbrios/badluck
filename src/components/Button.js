export const Button = (props) => {
  return (
    <button 
      type="button"
      className="rounded-full bg-cyan-900 px-4 py-2 w-full uppercase hover:bg-cyan-600 duration-300"
      {...props}
    >
      {props.children}
    </button>
  )
}
