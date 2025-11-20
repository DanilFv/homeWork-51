interface Props {
    number: number;
}


const Circle: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">
            <p>{number}</p>
        </div>
    );
};

export default Circle;