import { useCounter,useFetch } from "../hooks";

export const MultipleCustomHooks =  () => {

    const {counter,increment,decrement} = useCounter(1);
    const {data,isLoading,hasError}=   useFetch('https://rickandmortyapi.com/api/character/'+counter);
    console.log(data,isLoading,hasError)
    const {image, name, status} = !!data && data;

    // if(isLoading){
    //     return (<h1>Esta cargando...</h1>)
    // }

  return (
    <>
    <h1 className="text-4xl my-3 mb-6">Rick & Morty</h1>
    <hr />

    <section className="flex flex-col items-center justify-end gap-2 h-full py-4">
   

   <div className="flex w-full gap-3 items-center max-w-[600px] justify-center">
       <button type='button' onClick={()=>decrement(1)} disabled={isLoading}
       className=' z-[9999] transition ease-in-out group hover:scale-105 hover:bg-slate-800 bg-slate-100 flex items-center justify-between  rounded-3xl p-4 '>
           <svg className="transition ease-in-out rotate-180 text-slate-800 group-hover:text-white" width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
           <path fillRule='evenodd' clipRule='evenodd'
               d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
               fill='currentColor' />
           </svg>
       </button>

    {isLoading? (
        <article className=" p-3 pb-5 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded-xl max-w-[250px]">

        <div className=" h-[240px] w-[240px] bg-gray-200 rounded">
        </div>
       <div className=" animate-pulse flex flex-col w-full align-start gap-2">
        <div className="h-2 mb-2 bg-gray-200 rounded w-full"></div>
        <div className="h-2 bg-gray-200 rounded w-1/3"></div>
        <div className="h-2 bg-gray-200 rounded w-1/2"></div>

       </div>

    </article>):


    (
    <div className="group relative">
            <div className="transition-all ease-in-out duration-200 group-hover:opacity-80  z-[0] opacity-0 scale-110 top-0 absolute h-auto rounded-lg filter blur-xl">
                <img className=" h-full w-[370px]" src={image} alt="" />
            </div>
    <article className="group relative z-[9999] p-3 pb-5 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded-xl h-auto max-w-[650px]">
            <div className="h-auto w-full rounded">
                <img src={image} alt="" />
            </div>

            <div className=" bg-white flex flex-col w-full align-start">
            <h2 className="mb-2 font-bold font-mono text-2xl">{name}</h2>
            <p className="text-sm text-green-600">status</p>
            <h2 className="mb-2 text-md">{status}</h2>

            </div>

        </article>
        </div>
         ) }

    <button type='button' onClick={()=>increment(1)} disabled={isLoading}
    className=' z-[9999] transition ease-in-out group hover:scale-105 hover:bg-slate-800 bg-slate-100 break-inside rounded-3xl p-4 '>
    <svg className="transition ease-in-out text-slate-800 group-hover:text-white" width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path fillRule='evenodd' clipRule='evenodd'
            d='M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z'
            fill='currentColor' />
        </svg>
    </button>
    </div>

    </section>
       

    
    </>
  )
}
