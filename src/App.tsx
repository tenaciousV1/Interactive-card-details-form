import cardLogo from "./assets/images/card-logo.svg";
import CardForm from "./components/CardForm";
import { useFormStore } from "./store";

function App() {
  const cardHolderName = useFormStore((state) => state.cardHolderName);
  const cardNumber = useFormStore((state) => state.cardNumber);
  const Cvc = useFormStore((state) => state.Cvc);
  const ExpirationMonth = useFormStore((state) => state.ExpirationMonth);
  const ExpirationYear = useFormStore((state) => state.ExpirationYear);

  return (
    <>
      <main className="flex flex-col items-center font-display xl:flex-row">
        <div className="h-[240px] w-full bg-main-mobile bg-cover xl:hidden" />
        <div className="hidden h-screen w-[483px] bg-main-desktop bg-cover xl:block"></div>
        <div className="absolute left-0 right-0 top-8 mx-auto h-[251px] w-[343px] drop-shadow-[0_39px_60px_rgba(0,0,0,0.1425)] xl:bottom-0 xl:right-auto xl:top-0 xl:my-auto xl:ml-[164px] xl:h-[527px] xl:w-[541px]">
          <div className="absolute right-0 flex h-[157px] w-[286px] items-center justify-end bg-card-back bg-cover xl:bottom-0 xl:block xl:h-[245px] xl:w-[447px]">
            <p className="mr-[37px] text-body-xs uppercase text-white xl:float-right xl:mr-[57px] xl:mt-[111px] xl:text-body-large">
              {Cvc.length !== 0 && Cvc}
              {Cvc.length === 0 && "000"}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 h-[157px] w-[286px] bg-card-front bg-cover pl-5 text-white xl:bottom-auto xl:top-0 xl:h-[245px] xl:w-[447px] xl:pl-8">
            <img
              src={cardLogo}
              className="xl:[64px] mb-[37px] mt-[18px] h-[30px] xl:mt-7 xl:h-[47px]"
            />
            <p className="mb-[17px] text-heading-large uppercase tracking-[2.2px] xl:mb-[25px] xl:text-heading-xl">
              {cardNumber.length !== 0 && cardNumber}
              {cardNumber.length === 0 && "0000 0000 0000 0000"}
            </p>
            <div className="mr-[21px] flex justify-between text-body-xs xl:mr-8 xl:text-body-large">
              <p className="uppercase">
                {cardHolderName.length !== 0 && cardHolderName}
                {cardHolderName.length === 0 && "Jane Appleseed"}
              </p>
              <p className="uppercase">
                {ExpirationMonth.length !== 0 && ExpirationMonth}
                {ExpirationMonth.length === 0 && "00"}/
                {ExpirationYear.length !== 0 && ExpirationYear}
                {ExpirationYear.length === 0 && "00"}
              </p>
            </div>
          </div>
        </div>
        <CardForm />
      </main>
    </>
  );
}

export default App;
