import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback } from 'react'

export default function Scroller({ children }: { children: React.ReactNode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000 })]
    );

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <div className="embla relative" ref={emblaRef}><div className="embla__container flex">{React.Children.map(children, (child, i) => (<div className="embla__slide relative flex-shrink-0 w-full" key={i}>{child}</div>))}</div></div>
    );
}
