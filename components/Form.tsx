const Form = () => {
  return (
    <div className="relative mx-auto my-20 w-full max-w-7xl bg-[#39BDFF] px-3 md:px-8 xl:px-0">
      <img
        src="/assets/home/fly_mail.svg"
        alt="mail"
        className="absolute top-0 w-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />
      <div className="flex flex-col items-center mt-20 mb-10 lg:mx-auto lg:max-w-2xl">
        <h2 className="my-5 text-2xl font-black text-center uppercase">
          Don't Miss Out
        </h2>
        <p className="w-4/5 font-serif text-xl font-light text-center xl:w-full xl:text-2xl">
          In our newsletter we regularly give updates on the intersection
          between the digital economy and compliance!
        </p>
        <form className="flex flex-col w-full my-10">
          <label className="mt-5 text-left">
            Email<span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="h-10 bg-blue-100 border border-blue-300 rounded-lg"
          />
          <label className="mt-5 text-left">
            Are you an online merchant or tax consultant?
          </label>
          <input
            type="email"
            name="email"
            className="h-10 bg-blue-100 border border-blue-300 rounded-lg"
          />
          <p className="my-8 font-serif text-lg">
            Taxdoo benötigt die Kontaktinformationen, die Sie uns zur Verfügung
            stellen, um Sie bezüglich unserer Produkte und Dienstleistungen zu
            kontaktieren. Sie können sich jederzeit von diesen
            Benachrichtigungen abmelden. Informationen zum Abbestellen sowie
            unsere Datenschutzpraktiken und unsere Verpflichtung zum Schutz
            Ihrer Privatsphäre finden Sie in unseren Datenschutzbestimmungen.
          </p>
          <button className="px-10 py-2 mx-auto my-5 text-white transition-opacity bg-black rounded w-min hover:opacity-80">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
