import React from 'react'
import './SidebarOption.css'
/**
 * On Hover turn blue
 * Flex row
 * Pass component as pro
 * @returns 
 */ 

function SidebarOption({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active? 'sidebarOption--active':""}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption