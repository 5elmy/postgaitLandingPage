export default function Demo({header , body})  {
    return (
      <div>
            <p className="font-[Barlow] fint-bold text-[25px] text-[#FC746C]">
                {header}
              </p>
              <p className="leading-[40px]  font-medium px-5">
           {body}
              </p>
      </div>
    )
  }