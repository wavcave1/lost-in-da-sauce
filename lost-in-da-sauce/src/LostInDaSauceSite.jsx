export default function LostInDaSauceSite() {
  const hours = [
    { day: 'Tuesday', time: '11:30 AM – 8:00 PM' },
    { day: 'Wednesday', time: '11:30 AM – 8:00 PM' },
    { day: 'Thursday', time: '11:30 AM – 8:00 PM' },
    { day: 'Friday', time: '11:30 AM – 9:00 PM' },
    { day: 'Saturday', time: '11:30 AM – 10:00 PM' },
    { day: 'Sunday', time: '11:30 AM – 7:00 PM' },
  ]

  const gallery = [
    {
      title: 'Brand art',
      type: 'graphic',
      image:
        'https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Sauced wings',
      type: 'food',
      image:
        'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Fries + tenders',
      type: 'food',
      image:
        'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Pickup + delivery',
      type: 'service',
      image:
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const reviews = [
    {
      quote: 'Come visit our shop to experience a different kind of great food and service.',
      name: 'Google review',
    },
    {
      quote: 'From the moment we walked in, the staff made us feel welcomed and taken care of.',
      name: 'Google review',
    },
    {
      quote: '5/5 Facebook rating shows people already like what they are getting.',
      name: 'Facebook',
    },
  ]

  return (
    <div className="min-h-screen bg-[#190603] text-[#fff4df]">
      <section className="relative overflow-hidden border-b border-[#4a150d] bg-[radial-gradient(circle_at_top,#ff6a00_0%,#c71809_45%,#190603_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#ffb347] blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ff3d00] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#ff8a00] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-16 lg:py-16">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#ffb347]/40 bg-[#2a0a06]/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd27a] backdrop-blur">
              Columbia, Tennessee
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl">
              Lost In Da Sauce
            </h1>

            <p className="mt-4 max-w-xl text-lg font-semibold text-[#ffe6b3] md:text-xl">
              Wings, tenders, burgers, sandwiches, fries, and heat that actually looks like the brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#order"
                className="rounded-2xl bg-[#ffd166] px-6 py-4 text-base font-black uppercase tracking-wide text-[#2b0c05] shadow-2xl shadow-[#190603]/30 transition hover:-translate-y-0.5"
              >
                Order Pickup
              </a>
              <a
                href="#menu"
                className="rounded-2xl border border-[#ffd166]/40 bg-[#2a0a06]/50 px-6 py-4 text-base font-black uppercase tracking-wide text-[#fff4df] backdrop-blur transition hover:border-[#ffd166]"
              >
                View Menu
              </a>
              <a
                href="#reviews"
                className="rounded-2xl border border-[#ffd166]/30 px-6 py-4 text-base font-black uppercase tracking-wide text-[#ffd27a] transition hover:bg-[#2a0a06]/40"
              >
                Leave A Review
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#ffb347]/20 bg-[#250805]/60 p-4 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.2em] text-[#ffb347]">Rating</div>
                <div className="mt-2 text-3xl font-black">5.0</div>
                <div className="text-sm text-[#f4d7b2]">Google reviews</div>
              </div>
              <div className="rounded-2xl border border-[#ffb347]/20 bg-[#250805]/60 p-4 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.2em] text-[#ffb347]">Location</div>
                <div className="mt-2 text-xl font-black">908 Woodland St</div>
                <div className="text-sm text-[#f4d7b2]">Columbia, TN 38401</div>
              </div>
              <div className="rounded-2xl border border-[#ffb347]/20 bg-[#250805]/60 p-4 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.2em] text-[#ffb347]">Delivery</div>
                <div className="mt-2 text-xl font-black">DoorDash</div>
                <div className="text-sm text-[#f4d7b2]">Grubhub</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#ff7b00]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ffb347]/20 bg-[#2a0a06]/70 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[#4a150d] bg-[linear-gradient(180deg,#ff6a00_0%,#c71809_45%,#210704_100%)]">
                <div className="flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#2b0c05] bg-[#ffd166] text-4xl shadow-lg shadow-black/30">
                      🍗
                    </div>
                    <div className="rounded-full bg-[#2b0c05]/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ffd166]">
                      Where Flavor Finds You
                    </div>
                  </div>

                  <div>
                    <div className="text-[3rem] font-black uppercase leading-none tracking-tight text-[#fff1cc] md:text-[4rem]">
                      Lost In
                    </div>
                    <div className="text-[3rem] font-black uppercase leading-none tracking-tight text-[#fff1cc] md:text-[4rem]">
                      Da Sauce
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://www.doordash.com"
                      className="rounded-2xl bg-[#fff1cc] px-4 py-4 text-center text-sm font-black uppercase tracking-wide text-[#2b0c05]"
                    >
                      DoorDash
                    </a>
                    <a
                      href="https://www.grubhub.com"
                      className="rounded-2xl bg-[#2b0c05] px-4 py-4 text-center text-sm font-black uppercase tracking-wide text-[#fff1cc] border border-[#ffb347]/20"
                    >
                      Grubhub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#4a150d] bg-[#240907] p-8">
            <div className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Hours</div>
            <div className="mt-6 space-y-4">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 border-b border-[#4a150d] pb-4 last:border-none last:pb-0"
                >
                  <span className="text-lg font-black uppercase text-[#fff4df]">{item.day}</span>
                  <span className="text-right font-semibold text-[#ffdba1]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[#4a150d] bg-[#240907] p-8">
              <div className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Order</div>
              <div className="mt-4 text-3xl font-black uppercase leading-tight">Fast path to pickup or delivery</div>
              <div id="order" className="mt-6 grid gap-3">
                <a href="https://www.doordash.com" className="rounded-2xl bg-[#ff6a00] px-5 py-4 text-center font-black uppercase tracking-wide text-white">
                  Order Delivery
                </a>
                <a href="https://www.grubhub.com" className="rounded-2xl bg-[#ffd166] px-5 py-4 text-center font-black uppercase tracking-wide text-[#2b0c05]">
                  Order On Grubhub
                </a>
                <a href="tel:9319824542" className="rounded-2xl border border-[#ffb347]/30 px-5 py-4 text-center font-black uppercase tracking-wide text-[#fff4df]">
                  Call 931-982-4542
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#4a150d] bg-[#240907] p-8">
              <div className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Location</div>
              <div className="mt-4 text-3xl font-black uppercase leading-tight">908 Woodland St</div>
              <div className="mt-2 text-lg font-semibold text-[#ffdba1]">Columbia, TN 38401</div>
              <div className="mt-6 grid gap-3">
                <a
                  href="https://maps.google.com/?q=908+Woodland+St+Columbia+TN+38401"
                  className="rounded-2xl bg-[#2b0c05] px-5 py-4 text-center font-black uppercase tracking-wide text-[#fff4df] border border-[#ffb347]/20"
                >
                  Get Directions
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="rounded-2xl border border-[#ffb347]/30 px-5 py-4 text-center font-black uppercase tracking-wide text-[#ffd166]"
                >
                  Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#4a150d] bg-[#1b0705]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Gallery</div>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight">Built for heat, sauce, and scroll-stopping food shots</h2>
            </div>
            <a href="#reviews" className="font-black uppercase tracking-wide text-[#ffd166]">Push reviews next →</a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-[#4a150d] bg-[#240907]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-black uppercase tracking-[0.25em] text-[#ffb347]">{item.type}</div>
                  <div className="mt-2 text-xl font-black uppercase">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#4a150d] bg-[#240907] p-8">
            <div className="text-sm font-black uppercase tracking-[0.25em] text-[#ffb347]">Reviews</div>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight">Get more people talking</h2>
            <p className="mt-4 max-w-md text-lg font-medium text-[#f4d7b2]">
              One tap to Google reviews. One clean prompt at the counter. More local trust.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                href="https://www.google.com/search?q=lost+in+da+sauce+columbia+tn"
                className="rounded-2xl bg-[#ffd166] px-5 py-4 text-center font-black uppercase tracking-wide text-[#2b0c05]"
              >
                Review On Google
              </a>
              <a
                href="https://www.facebook.com/"
                className="rounded-2xl border border-[#ffb347]/30 px-5 py-4 text-center font-black uppercase tracking-wide text-[#ffd166]"
              >
                Review On Facebook
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-[2rem] border border-[#4a150d] bg-[#240907] p-6">
                <div className="text-[#ffd166]">★★★★★</div>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-[#fff4df]">“{review.quote}”</p>
                <div className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-[#ffb347]">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#4a150d] bg-[#130403]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <div className="text-3xl font-black uppercase tracking-tight">Lost In Da Sauce</div>
            <div className="mt-2 text-[#f4d7b2]">908 Woodland St · Columbia, TN 38401 · 931-982-4542</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=908+Woodland+St+Columbia+TN+38401" className="rounded-2xl border border-[#ffb347]/30 px-5 py-3 font-black uppercase tracking-wide text-[#ffd166]">
              Maps
            </a>
            <a href="https://www.facebook.com/" className="rounded-2xl border border-[#ffb347]/30 px-5 py-3 font-black uppercase tracking-wide text-[#ffd166]">
              Facebook
            </a>
            <a href="https://www.doordash.com" className="rounded-2xl bg-[#ff6a00] px-5 py-3 font-black uppercase tracking-wide text-white">
              Order Now
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}