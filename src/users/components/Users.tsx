import { useForm } from 'react-hook-form';
export function Users() {
  const { register } = useForm<{ email: string }>();

  return (
    <input
      className="m-2 border-blue-400 pl-2 border-2 rounded"
      {...register('email', {
        required: { value: true, message: 'the email is required' },
        maxLength: { value: 10, message: 'to many characters' },
      })}
      placeholder="Email"
    />
  );
}
