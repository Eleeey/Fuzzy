import React from 'react'
import SideBar from '../../components/sidebar'
import InfoBar from '../../components/infobar'



type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout