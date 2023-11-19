
export const LoadingCard = () => {
  return (
    <article className=" p-3 pb-5 gap-3 flex flex-col items-center justify-start  bg-white shadow-lg rounded-xl max-w-[650px]">

    <div className="animate-pulse duration-100 h-[240px] w-[240px] bg-gray-300 rounded">
    </div>
   <div className=" animate-pulse duration-100 flex flex-col w-full align-start gap-2">
    <div className="h-2 mb-2 bg-gray-300 rounded w-full"></div>
    <div className="h-2 bg-gray-300 rounded w-1/3"></div>
    <div className="h-2 bg-gray-300 rounded w-1/2"></div>

   </div>

</article>
  )
}
