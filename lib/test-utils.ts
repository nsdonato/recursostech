/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'

afterEach(() => {
	cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
	render(ui, {
		// Agregar los providers acá de ser necesario o crear un render custom especifico
		wrapper: ({ children }) => children,
		...options,
	})

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// Sobreescribimos el export de render.
export { customRender as render }
