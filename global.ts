
import type { ReactNode } from "react"

export interface ForminputProps {
    valueName?: string
    tagNames?: string[] | undefined
    nobg?: boolean
    readOnly?: boolean
    styles?: any
    currencyValue?: string
    setup?: (value: phoneSelectorSetup) => void
    setFieldValue?: any
    valueText?: string | null
    className?: string
    dateTag?: 'From' | 'To' | ""
    formtype?: "textarea" | "password" | "select" | "input" | "date" | "phone" | "currency" | "custom-selector" | "url" | "number" | 'tags' | "otp"
    content: string
    type?: string
    children?: ReactNode
    options?: any
    placeholder?: string
    error: string
    pinerror?: string
    value?: string
    minDate?: string
    maxDate?: string
    defaultDate?: string
    onChange?: any
    picker?: "date" | "month" | "quarter" | "time" | "week" | "year"
    textareaHeight?: string | number

}

export interface phoneSelectorSetup {
  code?: string
  dial_code?: string
  abbreviation?: string
}
export interface FormbuttonProps {
  title: string
  disabled?: boolean
  className?: string
  Icon?: any
  loading?: boolean
  type?: "submit" | "reset" | "button"
  position?: "left" | "right"
  onClick?: (val: any) => void
}

