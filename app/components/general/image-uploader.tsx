import React from 'react'
import { ErrorAlert } from '../utils/utils';
import Image from './image';
import { PiX } from "react-icons/pi";

type ImageState = {
  img: string | null;
  file: File | null;
}
type ImageUploaderProps = {
  image: ImageState
  setImage: any
  iserror: string
}
export default function ImageUploader({ image, setImage, iserror }: ImageUploaderProps) {
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return ErrorAlert('Please upload a valid image file');
    if (file.size > 2_000_000) return ErrorAlert('Image size should not exceed 2MB');

    setImage({ img: URL.createObjectURL(file), file })

  }
    const onClose = () => { setImage({ img: null, file: null }); }

  return (
    <div className='relative w-full'>
      {image.img && (
        <div className="absolute top-0 left-0 w-full bg-black/60  flex justify-end p-2 rounded-tr-lg rounded-tl-lg text-white text-xl"><PiX className='cursor-pointer' onClick={onClose} /></div>
      )}

      <label className="cursor-pointer">
        {!image.img ? (
          <div className={`border-2 cursor-pointer rounded-lg flex items-center justify-center flex-col gap-3 py-5 ${iserror ? ' border-red-600' : 'border-zinc-200'}`}>
            <div className="relative size-16"> <Image src='/general/featured-icon.svg' /> </div>
            <div className="text-zinc-300 text-sm text-center"> <span className="text-gray-500">Click to upload</span> or drag and drop </div>
            <div className="text-xs text-zinc-500 text-center">SVG, PNG, JPG or GIF (max. 800x400px)</div>
          </div>
        ) : (
          <img src={image.img} alt="Cryptocoin" className="w-full h-[15rem] object-cover rounded-lg" />
        )}
        <input type="file" onChange={handleImage} hidden />
      </label>
      {iserror && <div className="text-sm text-red-700">{iserror}</div> }
    </div>
  )
}
