import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { schema, Schema } from '../types/schema';

import { Stack, TextField } from '@mui/material';

export function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <div className="m-3">
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register('name')}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField {...register('email')} label="Email" error={!!errors.email}
          helperText={errors.email?.message}/>
      </Stack>
    </div>
  );
}
