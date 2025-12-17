import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">Saveful</h1>
          <Link href="/cart" className="text-lg font-medium">[0]</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">A Fridge Full of Recipes</h1>
          <p className="text-2xl md:text-3xl mb-8">Turn ingredients you have into meals you&apos;ll love</p>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            From the wilted greens that are best after a blitz with some garlic and oil, to the parmesan rind that’s best after a slow cook in something saucy — <strong>Saveful is a free app</strong> that helps you create money-saving meals the family will love.
          </p>
          <div className="flex justify-center gap-8 text-xl font-semibold">
            <span>Save money</span>
            <span>Save food</span>
            <span>Save time</span>
          </div>
          {/* Placeholder for hero image (e.g., fridge or ingredients) */}
          <div className="mt-12">
            <Image src="/images/hero-fridge.jpg" alt="Fridge full of ingredients" width={800} height={600} className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Intro */}
      <section className="py-16 text-center bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Saveful helps you turn whatever is in your fridge, freezer or pantry into delicious, chef created meals.
          </h2>
          {/* Carousel placeholder - in a real app, use a library like swiper */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>Make meals with what&apos;s on hand</div>
            <div>Get rewarded for your savings</div>
            <div>Unlock chef hacks, tips and tricks</div>
            <div>Create and join Communities to save together</div>
            <div>Track your impact and see your savings grow</div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <div className="text-center">
            <h3 className="text-3xl font-bold uppercase">Make meals with what you’ve got</h3>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Turn whatever is in your fridge, freezer or pantry into delicious, chef created meals everyone will love.
            </p>
            {/* Image placeholder */}
            <Image src="/images/feature-meals.jpg" alt="Meals from ingredients" width={800} height={500} className="mx-auto mt-8 rounded-lg" />
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold uppercase">Save food, save money</h3>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Saving food from the bin will make your tastebuds (and wallet) sing. Saveful helps you use ingredients you have, create leftover makeovers, and gives you tips and hacks to make your food last longer.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold uppercase">Track your impact</h3>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              See your savings add up! Understand how your actions impact your wallet and our planet. Your personal dashboard lets you see your progress over time.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold uppercase">Chef-created, home-tested</h3>
            <p className="mt-6 text-xl max-w-3xl mx-auto">
              Co-created with leading chefs, Saveful meals boost your creativity and confidence in the kitchen. The best bit? Handy flavour guides for fail-proof creations.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h4 className="text-3xl font-bold">Watch Saveful on Sunrise</h4>
        <p className="mt-6 text-xl max-w-4xl mx-auto">
          Eating fresh, seasonal produce is better for us and our planet. Saveful is designed to help families understand what is in season and ultimately make reducing waste easy, empowering, and fun for the whole family.
        </p>
        <p className="mt-8 italic text-lg">— Matt Moran, Chef, Restaurateur, Farmer and Saveful Partner</p>
        {/* Embed video placeholder */}
        <div className="mt-12 max-w-4xl mx-auto aspect-video bg-black rounded-lg">
          {/* Replace with actual iframe if available */}
          <iframe className="w-full h-full rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID" allowFullScreen></iframe>
        </div>
      </section>

      {/* Partners, Testimonials, School Challenge - Simplified */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our partners</h2>
        {/* Logo grid placeholder */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-12">
          {/* Add partner logos here */}
        </div>
      </section>

      <section className="py-16 bg-green-50 text-center">
        <h4 className="text-3xl font-bold">Are you Australia’s most Saveful school?</h4>
        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Looking for a fun, easy, and practical way to get your school community to make a big impact on sustainability? Join the Saveful School Challenge!
        </p>
        <Link href="/schools" className="mt-8 inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700">
          Register your school now
        </Link>
      </section>

      {/* Statistics Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold">come on Australia, let&apos;s be Saveful</h2>
        <div className="mt-12 space-y-8 text-xl max-w-5xl mx-auto">
          <p>83% of Australians are worried about the rising cost of groceries. Meanwhile, food waste costs the Australian economy around <strong>$36.6 billion each year.</strong></p>
          <p><strong>70%</strong> of food binned by Australians is perfectly edible.</p>
          <p>About <strong>2,600 Gigalitres</strong> of water is used to grow food that isn’t used. That’s the volume of <strong>5 Sydney Harbours.</strong></p>
          <p>Throwing away one burger wastes the same amount of water as a <strong>90-minute shower.</strong></p>
          <p>Food waste produces <strong>8%</strong> of global greenhouse gas emissions.</p>
          <p>Over a billion tonnes (33%) of the world&apos;s food is wasted.</p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-4xl font-bold">ready to save?</h2>
        <button className="mt-8 bg-white text-green-700 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-gray-100">
          Download saveful today
        </button>
        <p className="mt-12 text-lg max-w-4xl mx-auto">
          some say we’re biting off more than we can chew. we say we’re just getting started.
        </p>
        <Link href="/contact" className="mt-8 inline-block underline text-xl">Contact us</Link>
      </footer>
    </div>
  );
}