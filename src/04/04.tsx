import './04.css'

type ButtonType = {
    name: string
    callback: () =>void
}

export const Button = (props: ButtonType) => {
    const ButtonOnclick = () => {
        {props.callback()}
    }

    return (
        <div className={'parents-btn'}>
           <button className={'btn'} onClick={ButtonOnclick}>{props.name}</button>
        </div>
    )

}