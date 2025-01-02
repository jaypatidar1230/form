import {useForm} from 'react-hook-form'
export function Users() {
    
    const { register } = useForm<{ email : string }>();

  return (
    <input {...register('email')}/>
  )
}
