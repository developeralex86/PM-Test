function RoundedNumber({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="116"
      height="116"
      viewBox="0 0 116 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4477_10027)">
        <circle
          cx="58"
          cy="58"
          r="35"
          fill="#ED1D25"
          fill-opacity="0.05"
          shape-rendering="crispEdges"
        />
      </g>
      <circle
        cx="58"
        cy="58"
        r="25"
        fill="url(#paint0_linear_4477_10027)"
        stroke="url(#paint1_linear_4477_10027)"
        stroke-width="2"
      />
      <g clip-path="url(#clip0_4477_10027)">
        <circle cx="58" cy="58" r="41" fill="#ED1D25" fill-opacity="0.05" />
      </g>
      <defs>
        <filter
          id="filter0_d_4477_10027"
          x="0"
          y="0"
          width="116"
          height="116"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="11.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929412 0 0 0 0 0.113725 0 0 0 0 0.145098 0 0 0 0.54 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4477_10027"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4477_10027"
            result="shape"
          />
        </filter>

        <linearGradient
          id="paint0_linear_4477_10027"
          x1="40.45"
          y1="31.3305"
          x2="70.4904"
          y2="75.5063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF696F" />
          <stop offset="1" stop-color="#ED1D25" />
        </linearGradient>

        <linearGradient
          id="paint1_linear_4477_10027"
          x1="73"
          y1="44"
          x2="58"
          y2="84"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#FF9797" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_4477_10027">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(34 34)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default RoundedNumber;
