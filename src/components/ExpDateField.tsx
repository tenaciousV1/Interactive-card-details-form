function ExpDateField() {
  return (
    <div className="col-span-1 grid max-w-[152px] gap-x-2 gap-y-[9px] xl:max-w-[170px] xl:gap-x-[10px]">
      <p className="col-span-2 text-body-medium uppercase">exp. date (mm/yy)</p>
      <input
        type="text"
        required
        placeholder="MM"
        className="col-span-1 w-[72px] cursor-pointer rounded-lg border border-light-grayish-violet py-[11px] pl-4 text-heading-large text-very-dark-violet placeholder:text-light-grayish-violet"
      />
      <input
        type="text"
        placeholder="YY"
        required
        className="col-span-1 w-[72px] cursor-pointer rounded-lg border border-light-grayish-violet py-[11px] pl-4 text-heading-large text-very-dark-violet placeholder:text-light-grayish-violet"
      />
      <span className="col-span-2 -mt-[1px] hidden text-body-small text-red">
        Cant be blank
      </span>
    </div>
  );
}

export default ExpDateField;
