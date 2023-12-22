import { useForm } from 'react-hook-form'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/common/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().trim().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must be identical!',
    path: ['confirmPassword'],
  })

type Props = {
  onSubmit?: (data: FormValues) => void
}

export const SignUpForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const handleOnSubmit = (data: FormValues) => {
    onSubmit?.(data)
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Sign Up</Typography>
      <form className={s.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <DevTool control={control} />
        <ControlledInput
          className={s.formInput}
          control={control}
          error={!!errors.email?.message}
          errorMessage={errors.email?.message}
          label={'Email'}
          name={'email'}
        />
        <ControlledInput
          className={s.formInput}
          control={control}
          error={!!errors.password?.message}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          variant={'password'}
        />
        <ControlledInput
          className={s.formInput}
          control={control}
          error={!!errors.confirmPassword?.message}
          errorMessage={errors.confirmPassword?.message}
          label={'Confirm password'}
          name={'confirmPassword'}
          variant={'password'}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
      <Typography className={s.or} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography className={s.link} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
