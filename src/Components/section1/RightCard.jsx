import RightcardContent from "./RightcardContent"

const RightCard = (props) => {
return (
    <div className="h-full w-60 rounded-4xl overflow-hidden relative shrink-0">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-md font-semibold">{props.id+1}</h2>
            <RightcardContent intro={props.intro} tag={props.tag} color={props.color}/>
        </div>

    </div>
    
)
}

export default RightCard