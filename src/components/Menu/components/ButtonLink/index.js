import React from 'react';

function ButtonLink(props){
    //props => { className: o que alguem passa no index.js Menu, href: '/'}
    return(
<a href={props.href} className={props.className} >
        Novo Video
</a>

    );
}

export default ButtonLink;