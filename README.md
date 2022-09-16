# PayLink

PayLink is a payment organizer and an open source alternative to [Paynest](https://paynest.app).

## Live example

[https://paylink-danielcastillo.netlify.app/](https://paylink-danielcastillo.netlify.app/)

## How to use

PayLink uses React and Boostrap to create pre-built components for your PayLink page. You only need to work in the **App.jsx** file.

### Hero component

The **Hero** component is going to have your photo, name and description. It has four props:

- src: the path to your photo. I recommend to put it in the **images** folder.
- alt: an alternative text for your photo
- name: your name
- description: your description

For example:

    import Hero from "./components/Hero";
    import imageHero from "./images/daniel-castillo.png";

    <Hero
        src={imageHero}
        alt="Photo of Daniel Castillo"
        name="Daniel Castillo"
        description="Frontend web developer"
    />

### Social media components

There are 16 social media components: **Discord**, **Facebook**, **GitHub**, **Instagram**, **Link**, **LinkedIn**, **Medium**, **Pinterest**, **Snapchat**, **Telegram**, **TikTok**, **Twitch**, **Twitter**, **Vimeo**, **WhatsApp** and **YouTube**.

All these components has one prop:

- href: the link to the social media account

They need to be inside the section element with the `id="social-media"`.

For example:

    import GitHub from "./components/social-media/GitHub";
    import Instagram from "./components/social-media/Instagram";
    import LinkedIn from "./components/social-media/LinkedIn";
    import Link from "./components/social-media/Link";
    import Twitter from "./components/social-media/Twitter";

    <section id="social-media" className="...">
        <Link href="https://danielcastillop.netlify.app" />
        <GitHub href="https://github.com/dlcastillop" />
        <Twitter href="https://twitter.com/dlcastillop" />
        <LinkedIn href="https://linkedin.com/in/dlcastillop" />
        <Instagram href="https://instagram.com/dlcastillop" />
    </section>

### Payment components

There is 1 payment component with the following props:

- img: the path to the payment method icon. I recommend the ones that are in the **images/crypto** directory.
- label: the name of the payment method
- value: the address or link of the payment method
- id: an unique identifier. should be a string

They need to be inside the section element with the `id="payment-options"`.

For example:

    import Payment from "./components/payments/Payment";
    import btc from "./images/crypto/btc.svg";
    import eth from "./images/crypto/eth.svg";
    import qvapay from "./images/crypto/qvapay.svg";

    <section id="payment-options" className="...">
        <Payment img={btc} label="Bitcoin" value="bc1qejahgjmqnmyrw7jvn0d7evfdq6ssjl3wq7hfle" id="btc" />
        <Payment img={eth} label="Ethereum" value="0x59C864f658caD68A19a97499755080c056079988" id="eth" />
        <Payment img={qvapay} label="QvaPay" value="https://qvapay.com/payme/dlcastillop" id="qvapay" />
    </section>

## Contributions

Suggestions and pull requests are welcomed!
