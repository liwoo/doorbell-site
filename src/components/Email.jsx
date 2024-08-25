export default function Email() {
  return (
    <section className="bg-primary-dark" id={'get-in-touch'}>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Do you have any question?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            Whether you have some suggestions, feedback or you just want to say
            hi, we’d love to hear from you. Email us on
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="mailto:cto@doorbell.mw"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              support@doorbell.mw
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
