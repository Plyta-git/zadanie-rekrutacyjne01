import {StyledTopBar, FormButton} from './StylesTopBar'
import {BoxProps} from './Types'
import { creator } from '../../data/Data';

export const TopBar = ({setIsFormOpen}: BoxProps) => (
  <StyledTopBar>
    <div>{creator}</div>
    <FormButton onClick={(e)=> setIsFormOpen(true)} >
      <div >
        <div>formularz</div>
        <div>rejestracyjny</div>
      </div>
    </FormButton>
  </StyledTopBar>
);
