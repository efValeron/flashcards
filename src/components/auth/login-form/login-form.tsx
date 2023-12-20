import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { Input } from '@/components/ui/input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Input
        {...register('email')}
        error={!!errors.email?.message}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <Input
        {...register('password')}
        error={!!errors.password?.message}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
