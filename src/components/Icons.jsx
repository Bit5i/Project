// import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
// import { Button, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


const Icons = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    {/* <Space direction="vertical">
    <Space wrap>
      <div className='mx-auto'>
      <Button icon={<SearchOutlined />}>MORE BRANDS</Button>
      </div>
    </Space>
    
  </Space> */}

      <div className='cent'>
      <Button variant='outline-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       More Brands
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
      </div>
    </>
  )
}

export default Icons