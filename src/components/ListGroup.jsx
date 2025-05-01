function ListGroup( {YourMetal} ) {
    let Metals = [
        'Titanium',
        'Vibranium',
        'Adamantium',
        'Uru',
        'Underwater-Vibranium',
        YourMetal
    ];


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
                {Metals.map((item) => (
                    <li key={item} className="list-group-item">{item}</li>
                ))
                }
                {/* <li className="your-Custom-Metal"> {YourMetal}</li> */}
            </ul>
        </>
    );
}
export default ListGroup;