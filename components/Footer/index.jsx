import React from 'react'
import { config } from 'config'

class Footer extends React.Component {
  render() {
    return (
    	<footer style={{
    		background: config.baseColor,
    		fontSize: '14px',
    		color: 'white',
    		textAlign: 'center',
    	}}>
    		<div style={{
    			padding: '15px',
    		}}
    		>
    			&copy; {config.siteTitle} 2017
    		</div>
    	</footer>
    	)
  }
}

export default Footer;