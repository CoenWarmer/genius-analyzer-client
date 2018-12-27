import React from 'react'

type Props = {
  width: string,
  height: string
}

const Angry = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 110 110">
    <title>{'Angry 2'}</title>
    <defs>
      <path
        d="M57 2c30.376 0 55 24.624 55 55s-24.624 55-55 55S2 87.376 2 57 26.624 2 57 2z"
        id="prefix__a"
      />
      <filter
        x="-35.8%"
        y="-35.8%"
        width="172.6%"
        height="172.6%"
        filterUnits="objectBoundingBox"
        id="prefix__b"
      >
        <feGaussianBlur
          stdDeviation={30}
          in="SourceAlpha"
          result="shadowBlurInner1"
        />
        <feOffset dy={-25} in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0.8980392 0 0 0 0 0.25490198 0 0 0 0 0.015686275 0 0 0 1 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feOffset in="SourceAlpha" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
      <linearGradient
        x1="50%"
        y1="25.073%"
        x2="50%"
        y2="-43.597%"
        id="prefix__c"
      >
        <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="50%" id="prefix__e">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </linearGradient>
      <path
        d="M57 7c27.614 0 50 23.281 50 52s-22.386 52-50 52S7 87.719 7 59 29.386 7 57 7z"
        id="prefix__d"
      />
      <path
        d="M57 80c6.45 0 15 7.886 15 11.943 0 1.063-1 .995-1 .995s-7.408-4.976-14-4.976V88c-6.592 0-14 5-14 5s-1 .069-1-1c0-4.076 8.55-12 15-12z"
        id="prefix__g"
      />
      <filter
        x="-3%"
        y="5.9%"
        width="103%"
        height="100%"
        filterUnits="objectBoundingBox"
        id="prefix__f"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-10.8%"
        y="-9.1%"
        width="118.5%"
        height="130%"
        filterUnits="objectBoundingBox"
        id="prefix__h"
      >
        <feMorphology
          radius={0.5}
          in="SourceAlpha"
          result="shadowSpreadInner1"
        />
        <feGaussianBlur
          stdDeviation={2.3}
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        />
        <feOffset dy={2} in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feGaussianBlur
          stdDeviation={1.5}
          in="SourceAlpha"
          result="shadowBlurInner2"
        />
        <feOffset in="shadowBlurInner2" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
      <path
        d="M68.031 58.903c-1.736 1.594-2.824 2.882-2.824 2.882s-.499.488-.99 0c-.492-.488 0-1.967 0-1.967S67.939 49 81.049 49c5.272 0 4.95 1.967 4.95 1.967s-.083 1.418-6.93 1.967c-3.378.27-6.797 2.428-9.394 4.545A3.796 3.796 0 0 1 71.5 57c3.038 0 5.5 3.806 5.5 8.5S74.538 74 71.5 74 66 70.194 66 65.5c0-2.662.792-5.038 2.031-6.597z"
        id="prefix__j"
      />
      <filter
        x="0%"
        y="0%"
        width="100%"
        height="103.6%"
        filterUnits="objectBoundingBox"
        id="prefix__i"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-9.8%"
        y="-9.1%"
        width="119.6%"
        height="121.8%"
        filterUnits="objectBoundingBox"
        id="prefix__k"
      >
        <feMorphology
          radius={0.5}
          in="SourceAlpha"
          result="shadowSpreadInner1"
        />
        <feGaussianBlur
          stdDeviation={2.3}
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        />
        <feOffset dy={2} in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feGaussianBlur
          stdDeviation={1.5}
          in="SourceAlpha"
          result="shadowBlurInner2"
        />
        <feOffset in="shadowBlurInner2" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
      <path
        d="M44.325 57.479c-2.598-2.117-6.016-4.275-9.394-4.545C28.084 52.385 28 50.967 28 50.967S27.68 49 32.95 49c13.111 0 16.833 10.818 16.833 10.818s.492 1.479 0 1.967c-.491.488-.99 0-.99 0s-1.088-1.288-2.824-2.882C47.209 60.462 48 62.838 48 65.5c0 4.694-2.462 8.5-5.5 8.5S37 70.194 37 65.5s2.462-8.5 5.5-8.5c.64 0 1.254.169 1.825.479z"
        id="prefix__m"
      />
      <filter
        x="0%"
        y="0%"
        width="100%"
        height="103.6%"
        filterUnits="objectBoundingBox"
        id="prefix__l"
      >
        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-9.8%"
        y="-9.1%"
        width="119.6%"
        height="121.8%"
        filterUnits="objectBoundingBox"
        id="prefix__n"
      >
        <feMorphology
          radius={0.5}
          in="SourceAlpha"
          result="shadowSpreadInner1"
        />
        <feGaussianBlur
          stdDeviation={2.3}
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        />
        <feOffset dy={2} in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feGaussianBlur
          stdDeviation={1.5}
          in="SourceAlpha"
          result="shadowBlurInner2"
        />
        <feOffset in="shadowBlurInner2" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-2 -2)">
        <use fill="#F97D1D" xlinkHref="#prefix__a" />
        <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="url(#prefix__c)" xlinkHref="#prefix__d" />
        <use
          fillOpacity={0.9}
          fill="url(#prefix__e)"
          style={{
            mixBlendMode: 'overlay'
          }}
          xlinkHref="#prefix__d"
        />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__f)" xlinkHref="#prefix__g" />
        <use fill="#772806" xlinkHref="#prefix__g" />
        <use fill="#000" filter="url(#prefix__h)" xlinkHref="#prefix__g" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__i)" xlinkHref="#prefix__j" />
        <use fill="#772806" xlinkHref="#prefix__j" />
        <use fill="#000" filter="url(#prefix__k)" xlinkHref="#prefix__j" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__l)" xlinkHref="#prefix__m" />
        <use fill="#772806" xlinkHref="#prefix__m" />
        <use fill="#000" filter="url(#prefix__n)" xlinkHref="#prefix__m" />
      </g>
    </g>
  </svg>
)

export default Angry
