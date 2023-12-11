
import{useContext} from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);

    return (
        <>
        <h1 className="text-3xl p-4 ">LoginPage</h1>
          <hr />

          <pre>
            { JSON.stringify(user) }
          </pre>

          <button onClick={()=>setUser({id:123,name:'Juan',email:'juan@google.com'})}>Establecer usuario </button>
      </>
    )
  }
  