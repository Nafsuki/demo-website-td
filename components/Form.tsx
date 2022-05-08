const Form = () => {
  return (
    <div className="relative mx-auto my-20 w-full bg-[#39BDFF] px-3 md:px-8 xl:px-0">
      {/* Letter Airplane Icon */}
      <img
        src="/assets/home/fly_mail.svg"
        alt="mail"
        className="absolute top-0 w-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"
      />

      {/* Section Header */}
      <div className="flex flex-col items-center mx-auto mt-20 mb-10 md:max-w-3xl lg:mx-auto">
        <h2 className="my-5 text-2xl font-black text-center uppercase md:text-3xl lg:my-10 lg:text-5xl">
          Don't Miss Out
        </h2>
        <p className="w-4/5 font-serif text-xl font-light text-center border md:max-w-3xl">
          In our newsletter we regularly give updates on the intersection
          between the digital economy and compliance!
        </p>

        {/* Input Form */}
        <form className="flex flex-col w-full my-10 md:max-w-2xl">
          <label className="mt-5 text-left">
            Email<span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="h-10 bg-white border border-blue-300 rounded-lg"
          />
          <label className="mt-5 text-left">
            Are you an online merchant or tax consultant?
            <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="h-10 bg-white border border-blue-300 rounded-lg"
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
