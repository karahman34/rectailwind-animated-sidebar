import { FaFire, FaPoo } from 'react-icons/fa'
import { BsPlus, BsFillLightningFill } from 'react-icons/bs'

import SideBarIcon from '../SideBarIcon/SideBarIcon'

export default function SideBar() {
  return (
    <div className="h-screen w-16 m-0 flex flex-col shadow bg-white dark:bg-primary transition-all">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  )
}
