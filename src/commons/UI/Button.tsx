/*
 *
 * @author QuanganhDo
 * Created at Sun Sep 25 2022
 * @description
 * @param
 * @returns
 * @example
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'danger' | 'text'

type ButtonProps = {
  fullWidth?: boolean
  onClick?: () => void
  children?: string | JSX.Element
  disabled?: boolean
  loading?: boolean
  iconRight?: JSX.Element
  variant?: ButtonVariant
  hideOnKeyboard?: boolean
  styleMore?: string
}

const Button = ({
  fullWidth = false,
  onClick,
  children,
  disabled = false,
  loading = false,
  iconRight = <></>,
  variant = 'primary',
  styleMore = '',
  hideOnKeyboard = false,
}: ButtonProps) => {
  const style = {
    primary: {
      value: `text-black dark:text-white ] `,
      textStyle: `text-red-500`,
    },
    secondary: {
      value: `bg-gray-200 border-gray-200 hover:bg-gray-50`,
      textStyle: `text-red-500`,
    },
    danger: {
      value: `bg-red-400 border-red-400 text-[#e36868]`,
      textStyle: `text-red-500`,
    },
    outlined: {
      value: `bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
      textStyle: `text-white`,
    },
    text: {
      value: `bg-transparent border-transparent`,
      textStyle: `text-red-500`,
    },
    disabled: {
      value: `bg-gray-300 border-gray-300 dark:bg-gray-700 dark:border-gray-700 focus:outline-none`,
      textStyle: `text-red-500`,
    },
  }
  console.log('style[variant].value', style[variant].value)
  return (
    <button
      className={`flex flex-row  items-center justify-center w-64 p-4 mt-2 border-2 rounded-2xl 
         ${style[variant].value} ${styleMore}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* {loading && (
        <div className={`mr-1`}>
          <Spinner />
        </div>
      )} */}
      {/* {disabled &&  <View style={`mr-1`}>
          <BanIcon color="red" />
        </View>} */}
      {children}
    </button>
  )
}

export default Button
