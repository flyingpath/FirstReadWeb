import React from 'react'
import ReactDom from 'react-dom'
import Homepage from 'component/Homepage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

try {
	injectTapEventPlugin();
} catch (error) {
	
}

const App = () =>{
	return (
		<MuiThemeProvider>
			<Homepage />
		</MuiThemeProvider>	
	)
}

ReactDom.render(
	<App />,
	document.getElementById('app')
)

