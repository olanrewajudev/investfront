import React from 'react'

type ImageProps = {
    src?: string;
    style?: any;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
}
export default function Image(props: ImageProps) {
    return (
        <img {...props} alt="Cryptocoin" />
  )
}
