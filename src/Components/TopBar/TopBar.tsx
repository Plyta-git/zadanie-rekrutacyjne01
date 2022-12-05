import {StyledTopBar, FormButton} from './StylesTopBar'
import { creator } from '../../data/Data';

export const TopBar = () => (
  <StyledTopBar>
    <div>{creator}</div>
    <FormButton className=" text-white bg-greenGray right-0 px-[43px] pt-[10px] pb-[12px] text-shadow-text italic ">
      <a>
        <div>formularz</div>
        <div>rejestracyjny</div>
      </a>
    </FormButton>
  </StyledTopBar>
);
