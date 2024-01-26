type DividerProps = {
	className?: string
}
export const Divider = ({ className }: DividerProps) => (
	<div className={`divider ${className}`} />
)
