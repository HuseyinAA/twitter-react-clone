import React from 'react';
import "./SidebarOption.css";

function SidebarOption({active, text, Icon }) { 
    /*To pass an Componenent(Whole of it not just a text or image etc ie widget(flutter)) I would need to make sure the 
    Place a CAP on the first char since Componenets begin with a CAP */
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption;
