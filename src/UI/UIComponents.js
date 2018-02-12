import React from 'react';
export function Avatar(props) {
    let src = props.src;
    return(
        <div className={props.style.l1}>
            <div className={props.style.l2}>
                <img src={src} alt="avatar" className={props.style.l3}/>
            </div>
        </div>
    );
}

export function IconButtonGroup(props) {
    let btnGroup = props.iClassName.map(item => <button className={props.btnClassName} name={item} value={props.value} onClick={props.onClick} key={item.toString()}><i className={item}></i></button> );
    return (
        <div className={props.divClassName}>
            {btnGroup}
        </div>
    );
}