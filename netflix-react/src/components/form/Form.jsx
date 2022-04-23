import { Input } from "../input/Input";

const values  =[
    {
     cls:"email",inputType:"email",placeholder:"email"   
    },
    {
     cls:"password",inputType:"password",placeholder:"password"   
    },
    {
     cls:"sign-in",inputType:"submit",placeholder:"#"   
    }
];
export const Form = () => {
  return (
    <form action="Sign In">
        <Input values={values}/>
    </form>
  );
};
