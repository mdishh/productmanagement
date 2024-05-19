import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

function Alert({message,err}) {
    useEffect(() => {
        if (err) {
          toast.error(message);
        } else {
          toast.success(message);
        }
      }, [message, err]);
    
      return <Toaster />
}

export default Alert