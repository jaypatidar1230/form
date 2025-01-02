import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '../types/schema';

import { TextField } from '@mui/material';

export function Users() {
  const { register } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <>
      <TextField {...register('name')} />
    </>
  );
}
