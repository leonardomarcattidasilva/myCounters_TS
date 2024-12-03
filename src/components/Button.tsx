interface Props {
   txt: string
   className: string,
   onClick: () => void
}

const Button = (props: Props) => {
   const {txt, className, onClick} = props
   return <button type="button" onClick={onClick} className={className} >{txt}</button>
}

export default Button;