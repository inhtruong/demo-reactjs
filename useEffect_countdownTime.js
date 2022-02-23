
function Content() {
    const [countdown, setCountdown] = useState(180);

    // useEffect(() => {
    //     const timeId = setTimeout(() => {
    //         setCountdown(countdown - 1);
    //     }, 1000);

    //     // cleanup function
    //     return () => {
    //         clearInterval(timeId);
    //     }
    // }, [countdown])

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountdown(prevState => prevState - 1);
        }, 1000);
        
        // cleanup function
        return () => {
            clearInterval(timeId);
        }
    }, [])


    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}