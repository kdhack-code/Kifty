function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#2B2020]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9A4F5A] via-[#E0A6A6] to-[#B76E79] flex items-center justify-center text-white shadow-md">
            ✦
          </div>

          <h1 className="text-2xl font-bold tracking-wide">
            KIFTIE
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#" className="hover:text-[#B76E79] transition">
            Discover
          </a>

          <a href="#" className="hover:text-[#B76E79] transition">
            How it works
          </a>

          <a href="#" className="hover:text-[#B76E79] transition">
            About
          </a>

          <button className="border border-[#B76E79] text-[#9A4F5A] px-5 py-2.5 rounded-full hover:bg-[#B76E79] hover:text-white transition">
            Sign in
          </button>

        </div>

        <button className="md:hidden text-xl">
          ☰
        </button>

      </nav>


      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3DDD8] text-[#9A4F5A] text-sm font-medium mb-7">

              <span>✦</span>
              Thoughtful gifting, reimagined

            </div>


            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">

              Find a gift
              <br />

              <span className="bg-gradient-to-r from-[#8F4855] via-[#D49A9F] to-[#9A4F5A] bg-clip-text text-transparent">
                that feels personal.
              </span>

            </h2>


            <p className="mt-8 text-lg text-[#6E5D5D] max-w-xl leading-relaxed">

              Tell Kiftie who you're shopping for, what they love,
              and the moment you're celebrating. We'll help you find
              something they'll genuinely appreciate.

            </p>


            <div className="mt-10 flex flex-wrap gap-4">

              <button className="
                bg-gradient-to-r
                from-[#984F5A]
                via-[#D49A9F]
                to-[#A85F69]
                text-white
                px-8 py-4
                rounded-full
                font-semibold
                shadow-lg
                shadow-[#B76E79]/20
                hover:scale-105
                transition
              ">
                Begin your search ✦
              </button>


              <button className="
                border
                border-[#D8B7B5]
                bg-white/60
                px-8 py-4
                rounded-full
                font-medium
                hover:bg-white
                transition
              ">
                Explore gifts
              </button>

            </div>


            <div className="mt-10 flex items-center gap-6 text-sm text-[#806E6E]">

              <div>
                <span className="text-[#B76E79]">✦</span> Personalized
              </div>

              <div>
                <span className="text-[#B76E79]">✦</span> Thoughtful
              </div>

              <div>
                <span className="text-[#B76E79]">✦</span> Simple
              </div>

            </div>

          </div>


          {/* ROSE GOLD GIFT */}
          <div className="relative flex justify-center">

            <div className="
              relative
              w-[330px] h-[390px]
              md:w-[430px] md:h-[500px]
              rounded-[3rem]
              bg-gradient-to-br
              from-[#F5E3DF]
              via-[#EAC5C2]
              to-[#C98C91]
              shadow-2xl
              shadow-[#B76E79]/20
              overflow-hidden
            ">

              {/* Decorative circles */}

              <div className="
                absolute
                -top-24
                -right-24
                w-64 h-64
                rounded-full
                bg-[#FFF9F6]/30
              " />

              <div className="
                absolute
                -bottom-32
                -left-20
                w-72 h-72
                rounded-full
                bg-[#9A4F5A]/10
              " />


              {/* Gift box */}

              <div className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              ">

                <div className="relative">

                  {/* Box lid */}

                  <div className="
                    w-52 h-20
                    md:w-64 md:h-24
                    bg-gradient-to-r
                    from-[#914B56]
                    via-[#D9A0A3]
                    to-[#A75D67]
                    rounded-xl
                    shadow-xl
                    relative
                    z-10
                  ">

                    {/* Ribbon */}

                    <div className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-0
                      w-12
                      h-full
                      bg-[#F7D9D5]/70
                    " />

                  </div>


                  {/* Box */}

                  <div className="
                    w-44 h-36
                    md:w-56 md:h-44
                    bg-gradient-to-br
                    from-[#B76E79]
                    via-[#D99EA0]
                    to-[#9A4F5A]
                    rounded-b-xl
                    mx-auto
                    relative
                    shadow-2xl
                  ">

                    <div className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-0
                      w-10
                      h-full
                      bg-[#F7D9D5]/60
                    " />

                  </div>

                </div>

              </div>


              {/* Floating label */}

              <div className="
                absolute
                bottom-7
                left-7
                right-7
                bg-white/80
                backdrop-blur-md
                rounded-2xl
                p-4
                shadow-lg
              ">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-widest text-[#9A4F5A] font-semibold">
                      Your gift
                    </p>

                    <p className="font-semibold mt-1">
                      Made just for them
                    </p>

                  </div>

                  <span className="text-2xl">
                    ✦
                  </span>

                </div>

              </div>

            </div>


            {/* Floating badge */}

            <div className="
              absolute
              top-8
              -right-2
              md:right-2
              bg-white
              px-5 py-3
              rounded-2xl
              shadow-xl
            ">

              <p className="text-xs text-[#806E6E]">
                Kiftie pick
              </p>

              <p className="font-semibold text-[#9A4F5A]">
                ✦ Personalized
              </p>

            </div>

          </div>

        </div>

      </main>


      {/* OCCASIONS */}

      <section className="py-24 bg-[#2B2020] text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <p className="text-[#D49A9F] text-sm uppercase tracking-[0.25em] font-semibold">
            Every moment matters
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-4">
            What are you celebrating?
          </h2>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            {[
              ["🎂", "Birthday"],
              ["❤️", "Anniversary"],
              ["🎓", "Achievement"],
              ["✨", "Just because"],
            ].map(([icon, title]) => (

              <div
                key={title}
                className="
                  group
                  p-7
                  rounded-3xl
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-gradient-to-br
                  hover:from-[#9A4F5A]
                  hover:to-[#D49A9F]
                  transition
                  cursor-pointer
                "
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-12 text-xl font-medium">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-white/50 group-hover:text-white/80">
                  Find something special
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="py-24 bg-[#FFF9F6]">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-2xl">

            <p className="text-[#B76E79] text-sm uppercase tracking-[0.25em] font-semibold">
              The Kiftie way
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mt-4">
              Less guessing.
              <br />
              More meaning.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-12 mt-16">

            <div>

              <span className="text-[#B76E79] font-bold">
                01
              </span>

              <h3 className="text-2xl font-semibold mt-5">
                Tell us about them
              </h3>

              <p className="text-[#806E6E] mt-4 leading-relaxed">
                Share their interests, personality, relationship,
                occasion and your budget.
              </p>

            </div>


            <div>

              <span className="text-[#B76E79] font-bold">
                02
              </span>

              <h3 className="text-2xl font-semibold mt-5">
                Let Kiftie think
              </h3>

              <p className="text-[#806E6E] mt-4 leading-relaxed">
                Our recommendation system connects those details
                with gift ideas that fit.
              </p>

            </div>


            <div>

              <span className="text-[#B76E79] font-bold">
                03
              </span>

              <h3 className="text-2xl font-semibold mt-5">
                Give something meaningful
              </h3>

              <p className="text-[#806E6E] mt-4 leading-relaxed">
                Pick the gift that feels right and make someone's
                day a little more special.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="px-6 md:px-10 pb-24 bg-[#FFF9F6]">

        <div className="
          max-w-7xl
          mx-auto
          rounded-[2.5rem]
          bg-gradient-to-r
          from-[#8F4855]
          via-[#B76E79]
          to-[#D49A9F]
          p-10
          md:p-16
          text-white
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
        ">

          <div>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Someone special deserves
              <br />
              something special.
            </h2>

            <p className="mt-4 text-white/75">
              Let's find it.
            </p>

          </div>


          <button className="
            bg-white
            text-[#8F4855]
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition
            whitespace-nowrap
          ">
            Start gifting ✦
          </button>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-[#E8D8D4] bg-[#FFF9F6]">

        <div className="
          max-w-7xl
          mx-auto
          px-6 md:px-10
          py-8
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        ">

          <div className="font-bold text-xl">
            KIFTIE<span className="text-[#B76E79]">✦</span>
          </div>

          <p className="text-sm text-[#806E6E]">
            Thoughtful gifting, made simple.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App
