import React from 'react'

const WithoutJSX = () => {
    /**
     *? output will be non-decorative(not bold)
     * return React.createElement('div',null,'Code Without JSX'); 
     *? output will print the tags also "<h1>Code without JSX</h1>"
     * return React.createElement('div',null, '<h1>Code without JSX</h1>'); 
     *? to get the decorartive(bold text and without printing tag names), use nested 'createElement'  
     */

    return React.createElement(
        'div',
        null, 
        React.createElement('h3', null, 'Code without JSX')) 
}

export default WithoutJSX;