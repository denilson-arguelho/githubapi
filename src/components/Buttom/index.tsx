import './styles.css'

type Props = {
    text: string;
  };
  
export const Buttom = ({text}:Props) => {
  return (
    <div>
        
        <div className='bt-generic'> {text}</div>
    </div>
  )
}
