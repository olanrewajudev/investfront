import React, { useCallback } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from 'react-router'
import { HomeBanner } from '../utils/utils';
import { NextButton, PrevButton, usePrevNextButtons } from './carousel-button';

export default function HomeCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])
    const { } = usePrevNextButtons(emblaApi);

    return (
        <div className="embla relative" ref={emblaRef}>

           <div className="embla__container flex">
                {HomeBanner.map((item: any) => (

                    <div className="embla__slide relative flex-shrink-0 w-full" key={item.id}>
                        <img src={item.img} alt={item.title} className="w-full brightness-80 h-[40rem] object-top object-cover" />
                        <div className="absolute custom-bounce transition-all duration-75 pt-20 px-32 inset-0 z-20 w-[60%] flex flex-col items-center justify-center mx-auto text-center "><div className=""><p className="text-5xl font-bold text-yellow">{item.title}</p><p className="text-white text-xl py-5 px-2 font-medium text-center">{item.text}</p></div></div>
                        <div className="absolute custom-bounce transition-all duration-75 pt-2 px-3 inset-0 flex items-center justify-between z-20">
                            {emblaApi && <PrevButton onClick={scrollPrev} />}
                            {emblaApi && <NextButton onClick={scrollNext} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
