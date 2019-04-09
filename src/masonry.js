import React, {Component} from 'react';
import styles from './css/masonry.css';
import PropTypes from 'prop-types'
class Masonry extends Component {
    static propTypes = {
        width:PropTypes.string.isRequired,
        gap:PropTypes.string.isRequired,
    }
    render() {
        let children = React.Children.map(this.props.children,(thisArg)=>{
            return React.cloneElement(thisArg,{className:styles.item});
        });
        return (
            <div style={{columnWidth:this.props.width,columnGap:this.props.gap}}>
                {children}
            </div>
        )
    }
}
export default Masonry;