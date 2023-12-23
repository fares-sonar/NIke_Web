
const ServicesCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
        <h3 className="font-palanquin text-3xl leading-normal font-bold mt-5 ">{label}</h3>
        <p className="break-words mt-3 font-montserrat text-slate-gray leading-normal text-lg ">{subtext}</p>
    </div>
  )
}

export default ServicesCard