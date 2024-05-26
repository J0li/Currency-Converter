import React, { useState, useEffect } from "react";
import './CurrencyConverter.css';

function CurrencyConverter() {
    const [coins, setCoins] = useState([]);
    const [ofCoin, setOfCoin] = useState('USD');
    const [forCoin, setForCoin] = useState('EUR');
    const [much, setMuch] = useState('1');
    const [result, setResult] = useState(0);

    useEffect(() => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key = JvsBmUhGh423HkOFkJkfH8CzQes9khwZ')
                .then(response => response.json())
                .then(data => {
                    setCoins([...Object.keys(data.rates)]);
                })

                .catch(error => console.error('Error searching for coins:', error));
    }, []);

    const currencyConverter = () => {
        fetch('https://api.exchangeratesapi.io/v1/latest? access_key = JvsBmUhGh423HkOFkJkfH8CzQes9khwZ base=${ofCoin}&symbols=${forCoin}')
            .then(response => response.json())
            .then(data => {
                const exchangeTax = data.rates[forCoin];
                setResult(much * exchangeTax);
            })
            .catch(error => console.error('Error searching for coins:', error));
    };

    return (
        <div className="exchange-box">
            <h2>Currency Converter</h2>
            <div>
                <label>To:</label>
                <select value={ofCoin} onChange={(e) => setOfCoin(e.target.value)}>
                    {coins.map(coins => (
                        <option key={coins} value={coins}>{coins}</option>
                    ))}
                </select>
                <input type="number" value={much} onChange={(e) =>
                    setMuch(e.target.value)} />
            </div>
            <div>
                <label>From:</label>
                <select value={forCoin} onChange={(e) =>
                    setForCoin(e.target.value)}>
                    {coins.map(coins => (
                        <option key={coins} value={coins}>{coins}</option>
                    ))}
                </select>
                <button className="btn" onClick={currencyConverter}>Convert</button>
            </div>
            <div>
                <h3>Result:</h3>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default CurrencyConverter;
