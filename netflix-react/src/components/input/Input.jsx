export const Input = ({values})=>{
    return values.map((value)=>(<input className={value.cls} type={value.inputType} placeholder={value.placeholder} />));
}