import React from 'react'
import {render} from '@testing-library/react'
import App from '../src/pages/app'
/*global test*/
test('renders learn react link', () => {
	const {getByText} = render(<App />)
	const linkElement = getByText(/learn react/i)
	/*global expect*/
	expect(linkElement).toBeInTheDocument()
})