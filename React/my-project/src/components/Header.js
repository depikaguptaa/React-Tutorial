import React, {useState} from 'react'

const Header = () => {

    // const arr = ["item1", "item2", "item3", "item4", "item5"];

    const arr = [10, 12, 11, 15, 18]

    // const newarr = arr.filter((item) => {
    //     return item % 2 === 0;
    // })

    const callback = (accumulator, currentValue) => {
        return accumulator + currentValue;
    };

    const newarr = arr.reduce(callback, 10);

    // const [inputValue, setInputValue] = useState([]);

    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    // }

    return (
        <div>
            {
                newarr.map((item, index) => {
                    return <h1 key={index}>{item}</h1>
                })
        }
        </div>
    )
}
export default Header;