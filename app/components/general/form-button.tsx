import React from 'react'
type FormButtonProps = {
  title: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}
export default function FormButton({ title, type = "submit", onClick, loading, className }: FormButtonProps) {
  return (
    <div className='mt-6'>
      <button disabled={loading ? true : false} onClick={onClick} type={type} className={className} >
        <div className="">{title} {loading && <div></div>}</div>
      </button>
    </div>
  )
}
