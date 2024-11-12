import clsx from "clsx";
import { useState } from "react";

export default function Selector() {
  const [selectedTab, setSelectedTab] = useState('monthly');

  const selections = {
    'monthly': {
      price: '$3.99',
    },
    'yearly': {
      price: '$39.99',
    },
    'lifetime': {
      price: '$169.99',
    },
  };

  const currentPrice = selections[selectedTab].price;

  return (
    <section aria-labelledby="pricing-section" id="pricing">
  <div class="lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-24 scroll-mt-12">
    <div class="text-center max-w-3xl mx-auto">
      <img class="inline bg-center w-32 pb-8" src="/ProModeIcon-Light3x.png"/>
      <h2 class="text-4xl tracking-tight font-medium text-black md:text-5xl font-display">
        Take your beauty stash to the next level with BeautyMark Pro
      </h2>

      <span class="mt-8 text-center max-w-3xl mx-auto inline-flex rounded-md shadow-sm rounded-xl ring-1 ring-gray-300">
        <button
          type="button"
          onClick={() => setSelectedTab('monthly')}
          className={clsx(
            'relative inline-flex items-center rounded-l-xl  px-3 py-2 text-sm font-semibold  ring-inset focus:z-10',
            selectedTab === 'monthly' ? 'bg-pink-500 hover:bg-pink-600 text-white ' : '',
            )}>
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab('yearly')}
          class={clsx(
            'relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold ring-inset focus:z-10',
            selectedTab === 'yearly' ? 'bg-pink-500 hover:bg-pink-600 text-white ' : '',
          )}>
          Yearly
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab('lifetime')}
          class={clsx(
            'relative -ml-px inline-flex items-center rounded-r-xl px-3 py-2 text-sm font-semibold ring-inset focus:z-10',
            selectedTab === 'lifetime' ? 'bg-pink-500 hover:bg-pink-600 text-white' : '',
          )}>
          Lifetime
        </button>
      </span>
    </div>
    
    <div
      class="flex flex-wrap-reverse gap-4 items-start justify-center py-4 mt-24 mx-4 xl:-mx-12 sm:mx-auto md:flex-wrap lg:max-w-none"
    >
      <section class="free-tier flex flex-col order-first px-6 py-8 rounded-3xl sm:px-8 ring-1 ring-gray-300 sm:order-1 lg:order-2">
        <h3 class="mt-5 text-lg text-black font-display">Standard</h3>
        <p class="mt-2 text-sm text-gray-500">
          Good for those managing just the essentials.
        </p>
        <p
          class="order-first text-5xl font-light tracking-tight text-black font-display"
        >
          Free
        </p>
        <ul
          role="list"
          class="flex flex-col order-last mt-10 text-sm text-gray-600 gap-y-3"
        >
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">
              Save up to 30 products</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Organize with one collection</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">iCloud syncing</span>
          </li>
        </ul>
        <a
          class="inline-flex items-center justify-center w-full px-6 py-3 h-12 mt-8 text-center text-black transition duration-200 ease-in-out transform bg-white border hover:bg-gray-200 hover:border-gray-200 rounded-xl focus:outline-none border-gray-200"
          aria-label="Wannabe tier"
          href="/register">Get started</a>
      </section>

      <section
        class="pro-tier flex flex-col order-first bg-pink-500 px-6 py-8 rounded-3xl  sm:px-8 sm:order-1 lg:order-2"
      >
        <h3 class="mt-5 text-lg text-white font-display">BeautyMark Pro</h3>
        <p class="mt-2 text-sm text-pink-100">
          Perfect for people with large beauty collections.
        </p>
        <p class="order-first text-5xl font-light tracking-tight text-white font-display">
          {currentPrice}
        </p>
        <ul
          role="list"
          class="flex flex-col order-last mt-10 text-sm text-white gap-y-3">
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Save unlimited products</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">
              Organize into unlimited collections</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Themes and custom app icons</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Rich search</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Express-lane support</span>
          </li>
          <li class="flex items-center">
            <ion-icon
              class="w-4 h-4 md hydrated"
              name="checkmark-outline"
              role="img"
              aria-label="checkmark outline"></ion-icon><span class="ml-4">Support indie developers</span>
          </li>
        </ul>
        <a
          class="inline-flex items-center justify-center w-full px-6 py-3 h-12 mt-8 text-center text-black transition duration-200 ease-in-out transform bg-white border-2 border-white hover:bg-transparent hover:border-white rounded-xl hover:text-white focus:outline-none"
          aria-label="Indie hacker tier"
          href="/register">Get started</a>
      </section>
    </div>
  </div>
</section>
  )
}