function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#2B2020]">

      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          KIFTIE<span className="text-[#B76E79]">✦</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-[#B76E79]">
            Discover
          </a>

          <a href="#" className="hover:text-[#B76E79]">
            How it works
          </a>

          <button className="border border-[#B76E79] px-5 py-2 rounded-full text-[#9A4F5A]">
            Sign in
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#B76E79] uppercase tracking-widest text-sm font-semibold">
              Thoughtful gifting, reimagined
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold leading-tight mt-6">
              Find a gift
              <br />
              <span className="text-[#B76E79]">
                that feels personal.
              </span>
            </h2>

            <p className="text-[#806E6E] text-lg mt-6 max-w-lg">
              Tell us who you're shopping for, what they love,
              and your budget. Kiftie helps you find something
              they'll genuinely appreciate.
            </p>

            <button className="mt-8 bg-gradient-to-r from-[#984F5A] via-[#D49A9F] to-[#A85F69] text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Begin your search ✦
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#F3DDD8] via-[#EAC5C2] to-[#B76E79] flex items-center justify-center shadow-2xl">

              <div className="text-9xl">
                🎁
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  )
}

export default Home