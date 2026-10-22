import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
    console.log(props)
return (
    <div className="flex items-center gap-10 mb-10 px-14 flex-1">
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
)
}

export default Page1content 