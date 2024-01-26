export type Item = {
	name: string
	url: string
	createdAt: string
	updatedAt: string
}[]

export type SubmenuItem = {
	name: string
	items: Item
}
