
interface CustomButtonProps {
    backgroundColor?: string,
    textColor?: string,
    btnName: string,
    handleClick: () => void
}

const CustomButton = ({backgroundColor, textColor, btnName, handleClick}: CustomButtonProps) => {
  return (
    <button onClick={handleClick} className={`flex justify-between
    items-center gap-2 pl-4 pr-4 py-4 border
    font-montserrat text-sm leading-none rounded-full 
    h-[35px] ${backgroundColor} ${textColor} 
    hover:bg-black hover:text-white
    focus:bg-black focus:text-white`}>
        {btnName}
    </button>
  )
}

export default CustomButton