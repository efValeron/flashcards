import { IconComponent } from '@/components/commonComponents/IconComponent/IconComponent'
import {Typography} from "@/components/ui/typography";

export function App() {
  return (
    <div style={{ backgroundColor: 'green', height: '300px', width: '300px' }}>
      <IconComponent name={'enterIcon'} size={16}></IconComponent>
        <Typography variant={'body2'}>{'Hello'}</Typography>
    </div>
  )
}
