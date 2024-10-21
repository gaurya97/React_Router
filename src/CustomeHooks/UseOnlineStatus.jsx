import React, { useEffect, useState } from 'react'

export const UseOnlineStatus = () => {
const [online , setOnline] = useState(null);

useEffect(()=>{
window.addEventListener('online',()=>{
    setOnline(true)
    console.log('hii from online')
})
window.addEventListener('offline',()=>{
    setOnline(false)

})
},[])

return online
    
}
