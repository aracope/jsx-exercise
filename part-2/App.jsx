function App() {
    return (
        <div>
            <Tweet
                username="princesspants"
                name="Kaya"
                date={new Date().toDateString()}
                message="You are all peasants."
            />
            <Tweet
                username="happyboiii"
                name="Mylo"
                date={new Date().toDateString()}
                message="I love bananas and hate cats!"
            />
            <Tweet
                username="bubbleboy"
                name="Floyd"
                date={new Date().toDateString()}
                message="blurp bubble blupblup"
            />
        </div>
    );
}