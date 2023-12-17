import React from 'react'
import logo from '../../assets/img/logo.png'

function Sidebar() {
  return (
	<div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
		<div className='flex'>
			<img src={logo} alt="Logo" className='h-16' />
		</div>
		<div className='flex-1'>Top Part</div>
		<div>Bottom part</div>
	</div>
  )
}

export default Sidebar