import './EV.css';

export const EventHandling = () => {

    function handleButtonClick(event) {
        alert('hii');
        console.log(event.target);
    }
    return (    
        <>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    )
}