import React from 'react'

const Loading = () => {
  return (
    // <div>Loading...</div>
    <div style={{
      borderRadius: '8px',
      height: '100px',
      width: '100%',
      background: `url('https://blog.hubspot.com/hs-fs/hubfs/7a8f8d634013568124e130728834d47a.gif?width=1500&name=7a8f8d634013568124e130728834d47a.gif')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    }}>
    </div>
  )
}

export default Loading;