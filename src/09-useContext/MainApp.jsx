import { Navigate, Route,Routes } from "react-router-dom"
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
      <UserProvider>
        <section className="p-2">

      <div className="min-w-[1200px] flex items-center gap-6 py-4">
       <Navbar/>
      </div>
        </section>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="about" element={<AboutPage/>}/>

        {/* <Route path="/*" element={<LoginPage/>}/> */}
        <Route path="/*" element={<Navigate to="/about"/>} />
      </Routes>
    </UserProvider>
  )
}
 