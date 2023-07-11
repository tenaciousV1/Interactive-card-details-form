import { useFormStore } from "../store";
import iconComplete from "../assets/images/icon-complete.svg";

function CompletedMessage({ setIsCompleted }) {
  const restoreDefaultValues = useFormStore(
    (state) => state.restoreDefaultValues
  );
  return (
    <div className="mt-[91px] flex w-[327px] flex-col items-center xl:ml-[400px] xl:mt-0 xl:w-[381px]">
      <img src={iconComplete} className="mb-[35px] " />
      <h6 className="mb-4 text-heading-xl text-very-dark-violet">THANK YOU!</h6>
      <p className="mb-[48px] text-heading-large text-purplish-grey">
        We've added your card details
      </p>
      <button
        className="w-full rounded-lg bg-very-dark-violet py-[15px] text-heading-large text-white hover:bg-gradient-to-b hover:from-gradient-blue hover:to-gradient-violet"
        onClick={() => {
          setIsCompleted(false);
          restoreDefaultValues();
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default CompletedMessage;
