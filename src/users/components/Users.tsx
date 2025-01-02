import { useForm } from 'react-hook-form';
export function Users() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({ mode: 'all' });

  const onSubmit = () => {
    console.log("object")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="m-2 border-blue-400 pl-2 border-2 rounded"
        {...register('email', {
          required: { value: true, message: 'The email is required' },
          maxLength: { value: 10, message: 'To many characters' },
        })}
        placeholder="Email"
      />
      <p>{errors.email?.message}</p>
    </form>
  );
}
