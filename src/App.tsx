import {Button} from "@/components/ui/button";
import {useState} from "react";
import s from '@/components/ui/button/button.module.scss'

export function App() {
  let [state, setState]= useState(0)

  const onHandlerClick = ()=> {
    setState(state + 1)
  }

  return <div>
    {state}
    <Button as={'button'} onClick={onHandlerClick} variant={'primary'}>Click me </Button>
    <Button className={s.disabledLink} href={'https://www.google.com/'} as={'a'} variant={'link'}> It is Link</Button>
    <Button variant={'secondary'}>Secod</Button>
  </div>
}
