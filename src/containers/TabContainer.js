import React from 'react'
import Tab from '../components/Tab'
import {connect} from 'react-redux'
import {filterByTab} from '../actions/filter'

const TabContainer = (props) => {

    let tabList = [{tab_name: 'ARTICLE'}, {tab_name: 'EVENT'}]
    return (
        <div className='tabContainer'>
            <ul className='tabs'>
                {tabList.map((tab, i) => {
                    return <Tab {...props} key={i} {...tab}></Tab>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        visible: state.filter.visible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelected: (tab_name) => dispatch(filterByTab(tab_name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer)