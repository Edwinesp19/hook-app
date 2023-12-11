import { NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-2 px-2 rounded-full">
        <h1 className="text-xl px-3 font-bold">useContext</h1>
    <NavLink  className={(arg)=>
        `hover:font-bold transition-all ease-in-out duration-150  p-1 px-4 rounded-full ${ arg.isActive ? 'bg-indigo-600 text-white font-bold' :''}`
    } to="/">Home</NavLink>
    <NavLink className={(arg)=>
        `hover:font-bold transition-all ease-in-out duration-150  p-1 px-4 rounded-full ${ arg.isActive ? 'bg-indigo-600 text-white font-bold' :''}`
    } to="/about">About</NavLink>
    <NavLink className={(arg)=>
        `hover:font-bold transition-all ease-in-out duration-150  p-1 px-4 rounded-full ${ arg.isActive ? 'bg-indigo-600 text-white font-bold' :''}`
    } to="/login">Login</NavLink>
    </div>
  )
}
