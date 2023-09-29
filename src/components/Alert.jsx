import React from 'react'
import Swal from 'sweetalert2'
export default function Alert(title) {
 return (
  Swal.fire({
   position: 'top-end',
   icon: 'success',
   title: title,
   showConfirmButton: false,
   timer: 1500,
   toast: true,
   timerProgressBar: true,
   background: "#282828",
   color: "#fff"
  })
 )
}
