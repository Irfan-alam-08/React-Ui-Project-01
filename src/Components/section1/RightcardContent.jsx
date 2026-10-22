
const RightcardContent = (props) => {
  return (
    <div>
                <p className="text-white text-md mb-8">{props.intro}</p>
                <div className="flex justify-between">
                    <button style={{ backgroundColor: props.color }} className="text-white px-7 py-1 rounded-full font-semibold text-sm">
                        {props.tag}
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded-full font-semibold text-sm cursor-pointer"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
  )
}

export default RightcardContent