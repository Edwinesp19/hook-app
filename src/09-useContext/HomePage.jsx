import {useContext} from 'react';
import { UserContext } from './context/UserContext';
export const HomePage = () => {

  const {user} = useContext(UserContext);
    return (
        <>
        <h1 className="text-3xl p-4 ">HomePage</h1>
          <hr />
          <p className='py-4 font-bold text-xl'>
            Hola, {  user?.name }
          </p>

          <pre>
            {JSON.stringify(user,null,3)}
          </pre>
      </>
    )
  }
  