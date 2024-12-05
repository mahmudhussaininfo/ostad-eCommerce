import { UserStore } from "../Store/UserStore";

export const SubmitButton = (props) => {
  const { isFormSubmit } = UserStore();
  if (isFormSubmit === false) {
    return (
      <button onClick={props.onClick} className={props.className}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={props.className}>
        <div className="spinner-border spinner-border-sm"></div>
        processing...
      </button>
    );
  }
};
