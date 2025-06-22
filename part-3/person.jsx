function Person({ name, age, hobbies }) {
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    const voteMessage = age >= 18 ? "Please go vote!" : "You must be 18, sorry!";
    const hobbiesLi = hobbies.map(hobby => <li key={hobby}>{hobby}</li>);

    return (
        <div className="person">
            <p>Learn some information about this person</p>
            <h3>{ voteMessage }</h3>
            <p>Name: {displayName}</p>
            <p>Age: {age}</p>
            <p>Hobbies:</p>
            <ul>
                {hobbiesLi}
            </ul>

        </div>
    );
}