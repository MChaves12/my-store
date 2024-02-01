"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

const Page = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <>
    <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <h3 className='h-20 w-20'> Amarílis </h3>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Acesse com sua conta
          </h1>

          <Link
            className={buttonVariants({
              variant: 'link',
              className: 'gap-1.5',
            })}
            href='/sign-up'>
            Não tem um conta?
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid gap-6'>
          <form>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  {...register('email')}
                  className={cn({
                    'focus-visible:ring-red-500':
                      errors.email,
                  })}
                  placeholder='you@example.com'
                />
                {errors?.email && (
                  <p className='text-sm text-red-500'>
                    Email ou senha incorretos
                  </p>
                )}
              </div>

              <div className='grid gap-1 py-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  {...register('password')}
                  type='password'
                  className={cn({
                    'focus-visible:ring-red-500':
                      errors.password,
                  })}
                  placeholder='Password'
                />
                {errors?.password && (
                  <p className='text-sm text-red-500'>
                    Email ou senha incorretos
                  </p>
                )}
              </div>

              <Button>
                Entrar
              </Button>
            </div>
          </form>

          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Page