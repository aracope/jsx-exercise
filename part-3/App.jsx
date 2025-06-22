function App() {
    return (
        <div>
            <Person
                name="Kaya"
                age={10}
                hobbies={["chasing greebles", "screaming for food", "screaming for pats"]}
            />
            <Person
                name="Mylo"
                age={9}
                hobbies={["snuggling", "eating food", "begging for food"]}
            />
            <Person
                name="Tyler"
                age={32}
                hobbies={["guitar", "painting minifigs", "computer games"]}
            />
        </div>
    );
}