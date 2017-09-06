import React from 'react'

const Tab = ({tab_name, onSelected, visible}) => {

    const tabSelected = () => {
        return tab_name === visible
    }
    
    return (
        <div onClick={() => onSelected(tab_name)} className={"tabItem " + (tabSelected() ? 'selected' : '')}>
            {tab_name}
        </div>
    )
}

export default Tab