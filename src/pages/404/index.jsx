import React from 'react';
import img from './404.png';
import './index.scss'
class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <img src={img} alt="404" className={`animated swing`} />
            </div>
        )
    }
}

export default NotFound;