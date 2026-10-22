import RightCard from "./RightCard";

const Rightcontent = (props) => {
    const loop = [...props.users, ...props.users]; // cards duplicate, jate loop endless dekhay

    return (
        <div
            id="right-content"
            className="h-full w-2/3 overflow-hidden rounded-4xl [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
            <div className="flex w-max h-full p-4 animate-marquee hover:[animation-play-state:paused]">
                {loop.map((elem, idx) => (
                    <div key={idx} className="h-full pr-8 shrink-0">
                        <RightCard
                            img={elem.img}
                            id={idx}
                            intro={elem.intro}
                            tag={elem.tag}
                            color={elem.color}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rightcontent;
