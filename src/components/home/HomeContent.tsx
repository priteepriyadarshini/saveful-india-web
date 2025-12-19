import Image from "next/image";
import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="bg-[#4E267A] text-white">
      {/* HERO SECTION */}
      <section className="max-w-screen-xl mx-auto px-4 pt-[148px] pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT – SPLASH IMAGE */}
        <div className="flex justify-center items-start">
          <Image
            src="/images/splash.png"
            alt="Saveful App"
            width={420}
            height={720}
            priority
            className="max-h-[520px] w-auto object-contain rounded-3xl"
          />
        </div>

        {/* RIGHT – TEXT */}
        <div className="text-center md:text-left">
          <h1 className="mb-6 font-sans-bold text-5xl sm:text-6xl lg:text-7xl leading-tight">
            A FRIDGE <br /> FULL OF RECIPES
          </h1>

          <p className="mb-6 max-w-xl mx-auto md:mx-0 font-sans-semibold text-2xl sm:text-3xl">
            Turn ingredients you have into meals you&apos;ll love
          </p>

          <p className="mb-10 max-w-xl mx-auto md:mx-0 font-sans text-lg sm:text-xl opacity-90">
            From the wilted greens that are best after a blitz with some garlic
            and oil, to the parmesan rind that’s best after a slow cook in
            something saucy — Saveful is a free app that helps you create
            money-saving meals the family will love.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="https://apps.apple.com/us/app/saveful/id6460647948"
              target="_blank"
            >
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={150}
                height={50}
              />
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.saveful.app"
              target="_blank"
            >
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={150}
                height={50}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE ICONS */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <ValueIcon
            src="/homeImages/Save-Money.png"
            label="Save money"
          />
          <ValueIcon
            src="/homeImages/Save-Food.png"
            label="Save food"
          />
          <ValueIcon
            src="/homeImages/Save-Time.png"
            label="Save time"
          />
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="py-24 px-4 text-center">
        <p className="h3 mb-4 text-white">
          Some say we’re biting off more than we can chew.
        </p>

        <h2 className="h2 mb-6 text-white">
          We say we’re just getting started.
        </h2>

        <div className="flex justify-center mb-10">
          <Image
            src="/homeImages/SmallBites-Rev2.gif"
            alt="Saveful Seal"
            width={90}
            height={90}
          />
        </div>

        <p className="bodyLargeRegular max-w-4xl mx-auto leading-relaxed text-white">
          Governments all around the world are committed to the{" "}
          <a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400"
          >
            United Nations’ Sustainable Development Goal
          </a>{" "}
          of halving global food waste by 2030.
          <br />
          <br />
          And Australia is committed to doing our bit, starting right now.
        </p>

        {/* SOURCES */}
        <div className="bodyMediumRegular max-w-4xl mx-auto mt-6 space-y-3 text-white opacity-90">
          <p>
            Global stats sourced from:{" "}
            <a
              href="https://www.dcceew.gov.au/environment/protection/waste/food-waste"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              Department of Climate Change, Energy, the Environment and Water
            </a>
          </p>

          <p>
            Australian stats sourced from:{" "}
            <a
              href="https://www.fial.com.au/sharing-knowledge/food-waste"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-400"
            >
              The National Food Waste Strategy Feasibility Study by Food
              Innovation Australia Limited
            </a>
          </p>

          <p>Cost of grocery prices from: Choice</p>
        </div>
      </section>
    </div>
  );
}

/* SMALL REUSABLE COMPONENT */

function ValueIcon({ src, label }: { src: string; label: string }) {
  return (
    <div>
      <Image
        src={src}
        alt={label}
        width={220}
        height={220}
        className="mx-auto mb-4"
      />
      <p className="h3 uppercase text-white">{label}</p>
    </div>
  );
}
