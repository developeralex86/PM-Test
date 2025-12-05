import React from "react";

export type Testimonial = {
  name: string;
  initials: string;
  text: string;
  icon: React.ReactElement;
  bgColor: string;
};

export type PaymentMethod = {
  name: string;
  src: string;
};

export type MarketFeature = {
  icon: React.ReactElement;
  text: string;
};

export type MarketCard = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

export type MarketData = {
  pair: string;
  icon: string;
  price: string;
  change: string;
  isPositive: boolean;
};

export type CryptoCardProps = {
  item: {
    name: string;
    fullName: string;
    price: string;
    change: string;
  };
  isActive: boolean;
  onClick: () => void;
};

export type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
};
