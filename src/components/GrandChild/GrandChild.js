import React, { useContext } from "react";
import PropTypes from 'prop-types'
import { AppContext } from "../../App";

export const GrandChild = () => {
   const {grandChild} = useContext(AppContext)
    return <>Grandchild {grandChild}</>
}

GrandChild.propTypes = {
    name: PropTypes.number
}