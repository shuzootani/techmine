import React from 'react';
import SearchBox from '../components/SearchBox'
import {connect} from 'react-redux'

export const SearchBoxContainer = () => {
    return <div><SearchBox/></div>
}

export default connect()(SearchBox)