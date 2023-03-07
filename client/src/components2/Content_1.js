import React from 'react';
import Content1 from './Content1';
import Content_2 from './Content_2';



const Content=()=>{
    const obj = {
        heading:'Naruto:Shippuden',
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente minima eligendi amet perferendis quam esse. Autem sequi quasi necessitatibus quas possimus. Harum aperiam, voluptate nisi eos iste omnis doloremque temporibus fugit a optio nesciunt veniam autem vitae blanditiis perferendis ullam odit. Harum quos vel maxime eos inventore amet delectus explicabo eius in et porro necessitatibus dolores exercitationem itaque, non iusto facilis at quas quam voluptate dolorem. Voluptate, quaerat. Ipsam consequatur earum, commodi doloribus, dolore unde minus sequi nisi, et itaque voluptatem rerum harum quam illo magni consectetur quibusdam voluptate alias. Tempora dolor fugit accusamus nulla qui excepturi est iusto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eum minus magnam natus iste mollitia labore facere sed ipsam nesciunt, voluptatum explicabo saepe blanditiis beatae voluptatem vitae dolore eligendi doloremque?',
        src:'https://w0.peakpx.com/wallpaper/262/128/HD-wallpaper-naruto-anime-anime-black-vertical.jpg'
    
    }
   
    

    
    return(
        <>
        <Content1 heading = {obj.heading} content={obj.content} src = {obj.src}/>
        <Content_2 />
        </>
    )
}

export default Content