import { Checkbox, FormControl, FormControlLabel, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneSelector from './phone-selector';

type FormInputProps = {
  onChange?: (value?: any) => void;
  setup?: (value?: any) => void;
  onClick?: () => void;
  content: string;
  placeholder?: string;
  type?: string;
  height?: string;
  children?: React.ReactNode;
  title?: string;
  label?: string;
  value?: any;
  className?: string;
  name?: string;
  maxLength?: any;
  iserror?: any;
  phoneerror?: any;
  formtype?: 'text' | 'checkbox' | 'select' | 'textarea' | 'password' | 'phone' | 'email' | 'number';
}
export default function FormInput({ onChange, setup, onClick, content, placeholder, type = "text", height = "h-12", children, title, label, value, className, name, maxLength, iserror, phoneerror, formtype }: FormInputProps, ...refs: any[]) {
  const [showpassword, setShowPassword] = React.useState(false);
  const handlePasswordToggle = () => setShowPassword((show) => !show);
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
  return (
    <div>
      <div className='mb-3'>
        <div className="">{content}</div>
        <FormControl fullWidth error={iserror} >
          {formtype === 'text' && <OutlinedInput name={name} value={value} onChange={onChange} onClick={onClick} {...refs} />}
          {label && <InputLabel className='' htmlFor='component-outlined'>{label}</InputLabel>}
          {formtype === 'textarea' && <textarea maxLength={maxLength} name={name} value={value} onChange={onChange} onClick={onClick} {...refs} placeholder={placeholder} />}
          {formtype === 'select' && <><Select labelId='demo-simple-select-label' name={name} value={value} onChange={onChange}><MenuItem value={''} >Select</MenuItem> {children} </Select></>}
          {formtype === 'checkbox' && <FormControlLabel checked={value} name={name} value={value} onChange={onChange} onClick={onClick} {...refs} control={<Checkbox />} label={placeholder} />}
          {formtype === 'password' && <><OutlinedInput name={name} value={value} onChange={onChange} type={showpassword ? 'text' : "password"} endAdornment={<InputAdornment position='end'><IconButton aria-label='' onClick={handlePasswordToggle} onMouseDown={handleMouseDown} edge='end'>{showpassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>} /></>}
          {iserror && <FormHelperText>{iserror}</FormHelperText>}
        </FormControl>
      </div>

      {formtype === 'phone' && <div className="relative -mt-5">
        <div className={`flex items-center border ${phoneerror ? 'border-red-600' : 'border-zinc-400'} rounded-md`}><div className="w-1/5"><PhoneSelector title='' defaultvalue='+1' setup={setup ? setup : () => { }} /></div></div>
        <div className="w-full"><input type="numer" name={name} value={value} onChange={onChange} className='w-full p-3 roumded-md' placeholder='Enter phone number' /></div>
        {phoneerror && <div className='absolute -bottom-4 font-medium left-0 text-xs text-red-600 ml-4'>{phoneerror}</div>}
      </div>}
    </div >

  )
}
