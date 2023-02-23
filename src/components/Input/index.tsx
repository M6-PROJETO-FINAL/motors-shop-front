import { ReactNode } from "react";
import { InputStyled, StyledDiv } from "./style";

interface InputProps {
  label?: string | number;
  children?: ReactNode | string;
  placeholder?: string;
  type?: string;
  register?: any;
  name?: string;
  error?: any;
  width: string;
  defaultValue?: any;
}

export const InputBase = ({
  label,
  children,
  placeholder,
  type,
  register,
  name,
  error,
  width,
  ...rest
}: InputProps) => {
  return (
    <StyledDiv width={width}>
      <div className="label--input">
        <label>
          <p>{label}</p>
        </label>
      </div>
      <div>
        <InputStyled
          placeholder={placeholder}
          type={type}
          width={width}
          {...(register !== undefined && register(name))}
          {...rest}
        >
          {children}
        </InputStyled>
      </div>

      {error !== undefined && (
        <div className="label--error">
          <label>
            <p>{error}</p>
          </label>
        </div>
      )}
    </StyledDiv>
  );
};
