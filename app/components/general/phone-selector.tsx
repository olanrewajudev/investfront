import { SlArrowDown } from "react-icons/sl";
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ApiCountries, ApiCountryFlags } from '../utils/country-api';

type PhoneSelectorProps = {
    title: string;
    setup: (value: { code: string }) => void;
    defaultvalue?: string;
}
export default function PhoneSelector({ title, setup, defaultvalue = '+1' }: PhoneSelectorProps) {
    const [text, setText] = useState('')
    const [code, setCode] = useState(ApiCountries || [])
    const [view, setView] = useState(false)
    const [content, setContent] = useState({ img: '', code: '' })
    const togref = useRef<HTMLDivElement>(null)

    const getContent = useCallback(() => {
        const findCode = defaultvalue && ApiCountries.find(ele => (ele.dial_code === defaultvalue))
        if (findCode) {
            const itemFlag = ApiCountryFlags.find((ele) => ele.name.toLocaleLowerCase() === findCode.code?.toLocaleLowerCase())
            setContent({ img: itemFlag?.data ?? '', code: findCode.code })
        }
    }, [defaultvalue])

    useEffect(() => {
        getContent()
        togref && window.addEventListener("click", (e) => { togref.current !== null && !togref.current.contains(e.target as Node) && setView(false) }, true)
    }, [getContent])

    const handleChange = (value: string) => {
        setText(value)
        if (value.length > 0) {
            const findText = ApiCountries.filter(ele => ele.name?.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || ele.dial_code.toLocaleLowerCase().includes(value?.toLocaleLowerCase()))
            setCode(findText)
        } else {
            setCode(ApiCountries)
        }
    }

    const handleSelection = (value: { code: string }) => {
        setContent({ ...content, code: `${value.code}` })
        setup(value)
        setView(false)
    }

    return (
        <div className='relative'>
            <div ref={togref} className={`${view ? "" : "hidden"} absolute top-[4rem] left-0 z-10 w-full bg-white border shadow-2xl`}>
                <div className="w-11/12 mx-auto mt-3">
                    <input value={text} onChange={(e) => handleChange(e.target.value)} placeholder='Search!...' type="text" className='w-full p-2 text-sm border rounded-sm' />
                    <div className="h-[20rem] overflow-y-auto scrolls scrollsdown">
                        {code.map((item: any, i: any) => {
                            const itemFlag = ApiCountryFlags.find((ele) => ele.name.toLocaleLowerCase() === item.code?.toLocaleLowerCase())
                            return (<div className="" onClick={() => handleSelection(item)} key={i}><img className="w-5" loading='lazy' decoding='async' data-nimg='1' src={itemFlag?.data} /> {item.dial_code} </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className={`outline-none flex items-center justify-between cursor-pointer text-sm h-14 w-full rounded-lg py-2.5 px-3 ${defaultvalue ? 'text-slate-600' : ''}`} onClick={() => setView(true)}>{!content.code ? <span className="text-slate-500">{title}</span> : <span className="flex items-center gap-2">{content.code}</span>} <SlArrowDown /> </div>
        </div>
    )
}
