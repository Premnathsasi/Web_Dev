import React from 'react';
import {Col} from 'react-bootstrap';

function ProjectCards({title,link, description,imgUrl}) {


  return (
    <Col sm={6} md={6}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt='proj'/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                <a href={link} target='blank'>Click here to view.</a>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards