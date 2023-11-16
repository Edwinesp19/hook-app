import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {data,isLoading,hasError}=  useFetch('https://rickandmortyapi.com/api/character');

    console.log(data,isLoading,hasError)

    // if(isLoading){
    //     return (<h1>Esta cargando...</h1>)
    // }

  return (
    <>
    <h1 className="text-4xl my-3 mb-6">Rick & Morty</h1>
    <hr />

    {!isLoading?
    (
    
    <article className=" p-2 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded max-w-[250px]">

        <div className="h-[240px] w-[240px] bg-gray-200">
        </div>
       <div className="flex flex-col w-full align-start gap-2">
        <div className="h-2 mb-2 bg-gray-200 rounded w-full"></div>
        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
        <div className="h-2 bg-gray-200 rounded w-1/2"></div>

       </div>

    </article>
    ):

    (<article className=" p-2 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded max-w-[250px]">

        <div className="h-[240px] w-[240px]">
            <img src={data[0].image} alt="" />
        </div>
       <div className="flex flex-col w-full align-start">
        <h2 className="mb-2 font-bold font-mono text-2xl">{data[0].name}</h2>
        <p className="text-sm text-green-600">status</p>
        <h2 className="mb-2 text-md">{data[0].status}</h2>

       </div>

    </article>)
    

    }


    
    </>
  )
}
