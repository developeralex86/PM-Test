import type {
  PaymentMethod,
  MarketFeature,
  MarketCard,
  MarketData,
  Testimonial,
} from "./types";
import paypal from "./assets/paypal.png";
import mastercard from "./assets/master-card.png";
import skrill from "./assets/skrill.png";
import applePay from "./assets/apple-pay.png";
import visa from "./assets/visa.png";
import usdFlag from "./assets/us.png";
import xauIcon from "./assets/xauusd.png";
import DollarCoin from "./components/ui/coin";
import BarGraph from "./components/ui/bar-graph";
import TickMark from "./components/ui/tick-mark";
import StockArrow from "./components/ui/stock";
import PieChart from "./components/ui/pie";
import EarthBlank from "./components/ui/earth";
import Headphone from "./components/ui/headphone";
import Email from "./components/ui/email";
import Globe from "./components/ui/globe";
import Rocket from "./components/ui/rocket";
import Shield from "./components/ui/shield";
import ShieldStar from "./components/ui/shieldStar";

export const paymentMethods: PaymentMethod[] = [
  { name: "PayPal", src: paypal },
  { name: "Mastercard", src: mastercard },
  { name: "Skrill", src: skrill },
  { name: "Apple Pay", src: applePay },
  { name: "Visa", src: visa },
];

export const marketFeatures: MarketFeature[] = [
  { icon: <DollarCoin className="w-6 h-6" />, text: "$0 Deposit Fees" },
  { icon: <BarGraph />, text: "Spreads from 0.0 pips" },
  { icon: <TickMark />, text: "Secure Funds" },
];

export const marketCards: MarketCard[] = [
  {
    icon: <DollarCoin />,
    title: "Forex",
    description:
      "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
  },
  {
    icon: <StockArrow />,
    title: "Stocks",
    description:
      "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
  },
  {
    icon: <PieChart />,
    title: "Indices",
    description:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
  },
  {
    icon: <EarthBlank />,
    title: "Commodities",
    description:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
  },
];

export const marketTickerData: MarketData[] = [
  {
    pair: "USD/EUR",
    icon: usdFlag,
    price: "0.00014",
    change: "-234.45",
    isPositive: true,
  },
  {
    pair: "XAUUSD",
    icon: xauIcon,
    price: "0.00014",
    change: "-234.45",
    isPositive: false,
  },
  {
    pair: "USD/EUR",
    icon: usdFlag,
    price: "0.00014",
    change: "+244.45",
    isPositive: true,
  },
  {
    pair: "XAUUSD",
    icon: xauIcon,
    price: "0.00014",
    change: "-234.45",
    isPositive: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Adam Keller",
    initials: "AK",
    text: "I'm new in trading and I really like that Premier let me start small. I can trade crypto and other assets easy. Withdraws are quick too. Help Center is simple to use and I learned a lot from there.",
    icon: <Headphone />,
    bgColor: "bg-white",
  },
  {
    name: "Lucas Vermeer",
    initials: "LV",
    text: "Premier works well for me. KYC was fast and support people (Thx miles) 😊 helped me right away when I had a question. I was able to deposit and start trading in same day. Withdrawal came to my bank after 2 days. All smooth.",
    icon: <Headphone />,
    bgColor: "bg-white",
  },
  {
    name: "David Lorens",
    initials: "DL",
    text: "Been using Premier for about 3 months now. Card deposits go through all away and how in balance within a minute. I withdraw my profit each month and it's always in my bank by end of day. Very happy.",
    icon: <Email />,
    bgColor: "bg-white",
  },
  {
    name: "Marco Lazzari",
    initials: "ML",
    text: "My experience with PM is perfect so far. Payouts come same day, few hours max. Works good with both crypto and credit card. You can take money out many times per day, no fees. Spreads are ok too 😊",
    icon: <Globe />,
    bgColor: "bg-white",
  },
  {
    name: "Petar Ilic",
    initials: "PL",
    text: "I think Premier's trading cost are low compare to others. Spreads are good on most pairs, deposit is free, for withdraw they have a small fee but it's fine. Thanks guys.",
    icon: <Headphone />,
    bgColor: "bg-white",
  },
  {
    name: 'Mark "Clips" Renard',
    initials: "MR",
    text: "Premier is a serious broker. Web platform looks nice and runs good. Support reply quick and helpful. Sometimes small slippage in busy time but nothing crazy. Commissions are low so I stay here.",
    icon: <Email />,
    bgColor: "bg-white",
  },
  {
    name: "TradeAce92",
    initials: "TA",
    text: "Good service 😊 Never had a single problem with withdraw. Usually takes me 24 hours. You get update when it's submitted and when it's done. Got many assets to trade and the spreads are not bad. And mT5. Thank you!",
    icon: <Globe />,
    bgColor: "bg-white",
  },
  {
    name: "Shivani Kaur",
    initials: "SK",
    text: "Multiple withdraws made, all success. Used both bank and international transfer. Also few friends joined from my referral and no issue for them. Been here long time, still all fine.",
    icon: <Globe />,
    bgColor: "bg-white",
  },
  {
    name: "Mateusz Durek",
    initials: "MD",
    text: "Deposit and withdraws are fast. One time my payout came before my bank even show the deduction lol. Trade speed is good and data feed fast too. Feels like pro level broker.",
    icon: <Email />,
    bgColor: "bg-white",
  },
];

export const withdrawalFeatures = [
  {
    icon: <Rocket />,
    title: "Ultra-Fast Processing",
    description:
      "Get 99% of withdrawals processed within 24 hours. Need it fast? Cash hits your account in just 2-3 business days.",
  },
  {
    icon: <Shield />,
    title: "Secure & Transparent",
    description:
      "Tier 1 banking and custody partners keep your funds protected at every stage.",
  },
  {
    icon: <ShieldStar />,
    title: "Effortless Access",
    description:
      "Quick and seamless with no hidden fees. Get what's yours, exactly when you need it.",
  },
];

export const marketChartData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 55 },
  { name: "May", value: 65 },
  { name: "Jun", value: 50 },
  { name: "Jul", value: 80 },
  { name: "Aug", value: 90 },
  { name: "Sep", value: 70 },
  { name: "Oct", value: 75 },
  { name: "Nov", value: 60 },
  { name: "Dec", value: 85 },
];

export const marketTabs = [
  { id: "most-traded", label: "Most Traded" },
  { id: "commodities", label: "Commodities" },
  { id: "indices", label: "Indices" },
  { id: "cryptocurrencies", label: "Cryptocurrencies" },
  { id: "shares", label: "Shares" },
  { id: "etfs", label: "ETFs" },
];

export const cryptoData = [
  { name: "BTC", fullName: "Bitcoin", price: "₱ 524.0", change: "+3.25%" },
  { name: "BTC", fullName: "Bitcoin", price: "₱ 524.0", change: "+3.25%" },
  { name: "BTC", fullName: "Bitcoin", price: "₱ 524.0", change: "+3.25%" },
  { name: "BTC", fullName: "Bitcoin", price: "₱ 524.0", change: "+3.25%" },
  { name: "ETH", fullName: "Ethereum", price: "₱ 524.0", change: "+3.25%" },
];

export const timeframes = ["1d", "1h", "4h", "1m", "5m", "15m", "30m", "1w"];
