import RightcardContent from "./RightcardContent"

const RightCard = () => {
return (
    <div className="h-full w-60 rounded-4xl overflow-hidden relative">
        <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        
        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between">
            <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-md font-semibold">1</h2>
            <RightcardContent/>
        </div>

    </div>
    
)
}

export default RightCard