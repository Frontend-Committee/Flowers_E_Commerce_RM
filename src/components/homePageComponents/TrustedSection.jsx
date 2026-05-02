const companies = [
  { 
    name:"coconut",
    src:'src/assets/companiesIcons/coconut..png'},
  {
    src:"src/assets/companiesIcons/ginyard.png",
    name: "ginyard",
  },
  { 
    src:"src/assets/companiesIcons/ingoude1.png",
    name: "Ingoude company"},
    {
      src:"src/assets/companiesIcons/velvet.png",
      name: "velvet",
    },
    {
        src:"src/assets/companiesIcons/ingoude2.png",
         name: "Ingoude" },
    {
        src:"src/assets/companiesIcons/hobu.png",
         name: "Hobu company" }
];

export default function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 mb-15">
      <div className="rounded-2xl bg-rose-50 px-6 py-6">
          <h2 className="text-[#741C21] mb-4 text-3xl font-bold m-auto text-center">
            Trusted by over <span className="text-[#FF668B]">4.5k+</span> companies
          </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {companies.map((company) => (
            <img
            src={company.src}
            // key={i}
              alt={company.name}
              className={`max-w-40 cursor-default select-none`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
