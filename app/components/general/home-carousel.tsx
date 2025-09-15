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
                        <img src={item.img} alt={item.title} className="w-full brightness-60 lg:h-[40rem] h-[30rem] object-top object-cover" />
                        <div className="absolute custom-bounce transition-all duration-75 lg:pt-20 lg::px-32 inset-0 z-20 lg:w-[60%] flex flex-col items-center justify-center lg:mx-auto text-center "><div className=""><p className="md:text-5xl font-bold text-yellow text-[2rem]">{item.title}</p><p className="text-white md:text-xl textsm py-5 px-2 font-medium text-center">{item.text}</p></div></div>
                        <div className="absolute custom-bounce transition-all duration-75 pt-2 px-3 inset-0 lg:flex items-center justify-between z-20 hidden">
                            {emblaApi && <PrevButton onClick={scrollPrev} />}
                            {emblaApi && <NextButton onClick={scrollNext} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
