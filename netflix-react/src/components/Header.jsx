import { Form } from "./form/Form";
import { SubHeader } from "./sub-header/SubHeader";
import { Image } from "./img/Image";

export const Header = ()=>{
    return (<header>
        <div class="login-form-container">
         <Form/>
         <SubHeader/>
          <hr />
        <Image/>
        </div>
      </header>);
}