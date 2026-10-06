import Image from "next/image";
import { Leaf, Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

const benefits = {
  left: [
    {
      icon: Leaf,
      title: "Real Food",
      description: "Wholesome recipes for dogs with real meat and veggies.",
      bg: "#e7f8d9",
    },
    {
      icon: Sparkles,
      title: "Premium Ingredient",
      description: "Elevating pet care with unmatched safety and quality.",
      bg: "#f8f0d7",
    },
  ],
  right: [
    {
      icon: ShieldCheck,
      title: "Made Fresh",
      description:
        "We prioritize maintaining the integrity of whole foods and nutrition.",
      bg: "#dff6f2",
    },
    {
      icon: HeartPulse,
      title: "Vet Developed",
      description:
        "We raise the bar for dog nutrition, surpassing industry expectations.",
      bg: "#f8d8d0",
    },
  ],
};

const paymentLogos = [
  {
    name: "PayPal",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/paypal.svg",
    width: 58,
    height: 18,
    className: "h-[18px]",
  },
  {
    name: "Visa",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/visa.svg",
    width: 58,
    height: 24,
    className: "h-[24px]",
  },
  {
    name: "Mastercard",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/mastercard.svg",
    width: 58,
    height: 24,
    className: "h-[25px]",
  },
  {
    name: "Apple Pay",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/applepay.svg",
    width: 58,
    height: 24,
    className: "h-[18px]",
  },
  {
    name: "Google Pay",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/googlepay.svg",
    width: 58,
    height: 24,
    className: "h-[18px]",
  },
];

const keyPoints = [
  {
    percentage: "97%",
    text: "Made with carefully selected natural ingredients.",
  },
  {
    percentage: "84%",
    text: "Supports digestive health and everyday wellbeing.",
  },
  {
    percentage: "92%",
    text: "Designed to provide balanced nutrition for dogs.",
  },
];

function Benefit({
  icon: Icon,
  title,
  description,
  bg,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  bg: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {/* Icon */}
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9"
        style={{ backgroundColor: bg }}
      >
        <Icon size={15} strokeWidth={1.5} className="text-[#535353]" />
      </div>

      {/* Content */}
      <div className="pt-[1px]">
        <h3 className="text-[11px] font-semibold leading-[1.2] text-[#202020] sm:text-[12px]">
          {title}
        </h3>

        <p className="mt-1 max-w-[175px] text-[8.5px] leading-[1.45] text-[#666666] sm:max-w-[185px] sm:text-[9px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#202020]">
      <section className="w-full px-5 py-8 sm:px-8 sm:py-10 md:py-12">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <h1 className="text-[22px] font-bold leading-[1.12] tracking-[-0.6px] text-[#191919] sm:text-[25px] md:text-[27px]">
              What makes us different
              <br />
              makes them stronger
            </h1>
          </div>

          <div
            className="
              mx-auto
              mt-7
              grid
              max-w-[660px]
              grid-cols-[1fr_auto_1fr]
              items-center
              gap-5
              sm:mt-8
              sm:gap-8
              md:gap-10
            "
          >
            <div className="flex flex-col gap-8 sm:gap-10">
              {benefits.left.map((item) => (
                <Benefit
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  bg={item.bg}
                />
              ))}
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/images/dog2.png"
                alt="Fresh and wholesome dog food"
                width={210}
                height={210}
                priority
                className="
                  h-[175px]
                  w-[175px]
                  object-contain
                  sm:h-[190px]
                  sm:w-[190px]
                  md:h-[205px]
                  md:w-[205px]
                "
              />
            </div>

            <div className="flex flex-col gap-8 sm:gap-10">
              {benefits.right.map((item) => (
                <Benefit
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  bg={item.bg}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center sm:mt-7">
            <button
              className="
                h-[27px]
                w-full
                max-w-[253px]
                rounded-[3px]
                bg-[#f36b4b]
                px-4
                text-[9px]
                font-medium
                text-white
                transition
                hover:bg-[#e95d3d]
              "
            >
              {"Get your dog's healthy meal today!"}
            </button>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {/* Guarantee */}
              <div className="flex items-center gap-1">
                <ShieldCheck
                  size={10}
                  strokeWidth={1.5}
                  className="text-[#777]"
                />

                <span className="text-[7px] text-[#777]">
                  30-day money back guarantee
                </span>
              </div>

              {/* Payment methods */}
              <div className="flex items-center gap-3">
                {paymentLogos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={`${logo.className} w-auto object-contain`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[900px] items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Text */}
          <div>
            <h2 className="max-w-[380px] text-[21px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[25px]">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>

            <p className="mt-3 max-w-[430px] text-[10px] leading-[1.5] text-gray-500 sm:text-[11px]">
              Good nutrition plays an important role in keeping your dog
              healthy, active and happy. Our carefully developed recipes provide
              the nutrients your dog needs every day.
            </p>

            <h3 className="mt-5 text-[10px] font-bold sm:text-[11px]">
              Key Points:
            </h3>

            <div className="mt-2 space-y-2.5">
              {keyPoints.map((point) => (
                <div key={point.percentage} className="flex items-start gap-3">
                  <span className="w-8 shrink-0 text-[13px] font-bold text-[#f05d3d] sm:text-[15px]">
                    {point.percentage}
                  </span>

                  <p className="pt-0.5 text-[9px] leading-[1.4] text-gray-500 sm:text-[10px]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-5 rounded-[3px] bg-[#f56d4e] px-6 py-2.5 text-[9px] font-semibold text-white transition hover:bg-[#e85d3e]">
              Give your dog better nutrition
            </button>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-[390px] overflow-hidden">
            <Image
              src="/images/dog1.png"
              alt="Dog enjoying healthy food"
              width={700}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[900px] items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-[390px] overflow-hidden">
            <Image
              src="/images/dog3.png"
              alt="Dogs eating healthy food"
              width={700}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[21px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[25px]">
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>

            <p className="mt-4 text-[10px] leading-[1.55] text-gray-500 sm:text-[11px]">
              A healthy digestive system helps your dog absorb essential
              nutrients and maintain overall wellbeing. Our thoughtfully
              formulated nutrition supports healthy digestion every day.
            </p>

            <p className="mt-3 text-[10px] leading-[1.55] text-gray-500 sm:text-[11px]">
              {`Supporting your dog's gut health can contribute to better nutrient
              absorption and long-term health.`}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-12 pt-2 sm:px-8 sm:pb-16 lg:px-10">
        <div className="mx-auto grid max-w-[900px] items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h2 className="text-[21px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[25px]">
              Probiotics nourish the beneficial gut bacteria, supporting
              digestive health
            </h2>

            <p className="mt-4 text-[10px] leading-[1.55] text-gray-500 sm:text-[11px]">
              {`Beneficial bacteria play an important role in your dog's digestive
              system. Supporting a balanced gut can help maintain healthy
              digestion and overall wellbeing.`}
            </p>
          </div>

          {/* Image */}
          <div className="order-1 mx-auto w-full max-w-[390px] overflow-hidden md:order-2">
            <Image
              src="/images/dog4.png"
              alt="Healthy dog food close-up"
              width={700}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
