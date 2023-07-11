import { useFormStore } from "../store";

function CompletedMessage({ setIsCompleted }) {
  const restoreDefaultValues = useFormStore(
    (state) => state.restoreDefaultValues
  );
  return (
    <>
      <button
        className="rounded-lg bg-very-dark-violet py-[15px] text-heading-large text-white hover:bg-gradient-to-b hover:from-gradient-blue hover:to-gradient-violet"
        onClick={() => {
          setIsCompleted(false);
          restoreDefaultValues();
        }}
      >
        Continue
      </button>
    </>
  );
}

export default CompletedMessage;
