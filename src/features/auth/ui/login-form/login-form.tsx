import { useForm } from 'react-hook-form'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { ControlledCheckbox } from '@/common/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/controlled-input'
import { Typography } from '@/common/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './login-form.module.scss'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type Props = {
  onSubmit?: (data: FormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const handleOnSubmit = (data: FormValues) => {
    onSubmit?.(data)
  }

  return (
    <Card className={s.card}>
      <Typography variant={'large'}>Sign In</Typography>
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
        <ControlledCheckbox control={control} name={'rememberMe'} />
        <Typography className={s.forgotPassword} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button type={'submit'}>Submit</Button>
      </form>
      <Typography className={s.or} variant={'body2'}>
        Don&apos;t have an account?
      </Typography>
      <Typography className={s.link} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
