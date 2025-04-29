function ListGroup() {
    let Metals = [
        'Titanium',
        'Vibranium',
        'Adamantium',
        'Uru',
        'Underwater-Vibranium'
    ];
    Metals = [];

    if (Metals.length === 0) {
        return (
            <>
                <h1> List of Metals </h1>
                <p> No Metals Found </p>;
            </>
        );
    }


    return (
        <>
            <h1> List of Metals </h1>
            <ul className="list-group">
                {Metals.map((item) => (<li key={item}> {item} </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;