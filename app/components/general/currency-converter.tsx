import React, { useState, useEffect } from "react";

export default function CurrencyConverter() {
    const [btc, setBtc] = useState<number | string>(1);
    const [fiat, setFiat] = useState<number | string>(0);
    const [currency, setCurrency] = useState("usd");
    const [rates, setRates] = useState<Record<string, number>>({});

    // Fetch all BTC conversion rates once
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp,jpy,inr,aud,cad,chf,cny"
                );
                const data = await res.json();
                setRates(data.bitcoin);
                setFiat((Number(btc) * data.bitcoin[currency]).toFixed(2));
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        fetchRates();
        const id = setInterval(fetchRates, 60_000); // refresh every 60s
        return () => clearInterval(id);
    }, [btc, currency]);

    // Handle BTC input change
    const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBtc(value);
        if (rates[currency]) setFiat((Number(value) * rates[currency]).toFixed(2));
    };

    // Handle Fiat input change
    const handleFiatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFiat(value);
        if (rates[currency]) setBtc((Number(value) / rates[currency]).toFixed(8));
    };

    // Handle currency select change
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
        if (rates[newCurrency]) setFiat((Number(btc) * rates[newCurrency]).toFixed(2));
    };

    return (
        <div className="flex flex-col gap-4 w-full mt-10 text-black font-semibold">
            {/* BTC Input */}
            <div className="flex items-center justify-between  outline-none bg-white/30 backdrop-blur-xl w-full rounded-md px-4 py-4"><input type="text" value={btc} onChange={handleBtcChange} className=" outline-none w-full" /><span className="font-semibold">BTC</span></div>
            {/* Fiat Input */}
            <div className="flex items-center justify-between  outline-none bg-white/30 backdrop-blur-xl w-full rounded-md px-3 py-4">
                <input type="text" disabled value={fiat} onChange={handleFiatChange} className=" outline-none w-full" />
                <select value={currency} onChange={handleCurrencyChange} className="font-semibold outline-none bg-transparent">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="jpy">JPY</option>
                    <option value="inr">INR</option>
                    <option value="aud">AUD</option>
                    <option value="cad">CAD</option>
                    <option value="chf">CHF</option>
                    <option value="cny">CNY</option>
                </select>
            </div>

            <p className="text-sm ">1 BTC ≈{" "}{rates[currency] ? `${rates[currency].toLocaleString()} ${currency.toUpperCase()}` : "loading…"}</p>
        </div>
    );
}
