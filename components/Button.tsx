import { forwardRef } from "react"

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean
    secondary?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  secondary,
  type = "button",
  ...props
}, ref) => {
  const primaryStyle = `
    bg-[#FFB432]
    hover:opacity-75
  `
  const secondaryStyle = `
    border
    border-gray-500
    bg-white
    text-gray-600/90
    hover:bg-gray-200
    hover:border-gray-300
    hover:opacity-50
  `

  const colorStyle = secondary ? secondaryStyle : primaryStyle

  return (
    <button
      type={type}
      className={`
        px-8
        py-4
        min-w-[120px]
        rounded-[4px]
        font-medium
        disabled:cursor-not-allowed
        disabled:opacity-40
        disabled:bg-slate-300
        ${colorStyle}
      `}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
})

Button.displayName = "Button"

export default Button;