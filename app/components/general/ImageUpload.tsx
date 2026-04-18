import React, { useEffect, useState } from "react"
import { FiUploadCloud } from "react-icons/fi"
import { LuUpload } from "react-icons/lu"
import Linked from "./linked"

type ComponentProps = { title: string, description: string, className?: string, variant?: "full" | "compact" | "small", value?: (File | string)[], onChange?: (files: File[]) => void }

export default function ImageUpload({ title, description, value, className = "", variant = "full", onChange }: ComponentProps) {

  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (value && value.length > 0) {
      const fileOrUrl = value[0]
      if (typeof fileOrUrl === "string") {
        setPreview(fileOrUrl)
      } else {
        const url = URL.createObjectURL(fileOrUrl)
        setPreview(url)
      }
    } else {
      setPreview(null)
    }
  }, [value])
  const isFull = variant === "full"
  const isSmall = variant === "small"

  const inputId = `image-upload-${title}-${Math.random().toString(36).slice(2)}`
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (files.length > 0) {
      const url = URL.createObjectURL(files[0])
      setPreview(url)
    }
    onChange?.(files)
  }

  return (
    <div className="mb-4">
      {!isSmall && <div className="text-sm font-semibold mb-1">{title}</div>}

      {!isSmall && (
        <label htmlFor={inputId} className={`relative border border-lightest rounded-lg cursor-pointer flex items-center justify-center overflow-hidden px-4 ${isFull ? "h-[12rem]" : "h-[9rem]"} ${className}`}>
          {preview ? (
            <img src={preview} alt="preview" className="" />) : (
            <div className="flex flex-col items-center text-zinc-500 font-semibold text-sm text-center">
              <div className="bg-iconbg-light p-2 rounded-full mb-2"><div className="bg-iconbg-dark p-1 rounded-full"><FiUploadCloud size={22} /></div></div>
              <span><span className="text-discount">Click to upload</span> or drag and drop</span>
              {isFull && (
                <>
                </>
              )}
              <span className="text-xs">SVG, PNG, JPG or GIF (max. 800×400px)</span>
            </div>
          )}
          <input id={inputId} type="file" hidden multiple accept="image/png,image/jpeg,image/svg+xml,image/gif" onChange={handleChange} />
        </label>
      )}

      {isSmall && (
        <>
          <label className="text-sm">{title}</label>
          <label htmlFor={inputId} className="relative mt-2 rounded-2xl border-2 border-lightest h-[8rem] cursor-pointer flex items-center justify-center overflow-hidden">
            {preview ? (
              <img src={preview} alt="preview" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center text-zinc-500 text-xs">
                <LuUpload size={20} />
                <span>Upload</span>
              </div>
            )}
            <input id={inputId} type="file" hidden multiple accept="image/png,image/jpeg" onChange={handleChange} />
          </label>
          <span className="text-xs text-text-gray">{description}</span>
        </>
      )}
    </div>
  )
}