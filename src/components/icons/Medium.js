// @flow
import React from 'react'

type Props = {
  width: string,
  height: string
}

const Medium = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 110 110">
    <defs>
      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="prefix__b">
        <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
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
        id="prefix__c"
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
          values="0 0 0 0 1 0 0 0 0 0.6039216 0 0 0 0 0 0 0 0 1 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feMorphology
          radius={0.6}
          in="SourceAlpha"
          result="shadowSpreadInner2"
        />
        <feGaussianBlur
          stdDeviation={2.7}
          in="shadowSpreadInner2"
          result="shadowBlurInner2"
        />
        <feOffset dy={2} in="shadowBlurInner2" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMorphology
          radius={3.9}
          in="SourceAlpha"
          result="shadowSpreadInner3"
        />
        <feGaussianBlur
          stdDeviation={4.55}
          in="shadowSpreadInner3"
          result="shadowBlurInner3"
        />
        <feOffset in="shadowBlurInner3" result="shadowOffsetInner3" />
        <feComposite
          in="shadowOffsetInner3"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner3"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          in="shadowInnerInner3"
          result="shadowMatrixInner3"
        />
        <feGaussianBlur
          stdDeviation={7.5}
          in="SourceAlpha"
          result="shadowBlurInner4"
        />
        <feOffset dy={-8} in="shadowBlurInner4" result="shadowOffsetInner4" />
        <feComposite
          in="shadowOffsetInner4"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner4"
        />
        <feColorMatrix
          values="0 0 0 0 0.6509804 0 0 0 0 0.40392157 0 0 0 0 0.02745098 0 0 0 0.5 0"
          in="shadowInnerInner4"
          result="shadowMatrixInner4"
        />
        <feOffset dy={-1} in="SourceAlpha" result="shadowOffsetInner5" />
        <feComposite
          in="shadowOffsetInner5"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner5"
        />
        <feColorMatrix
          values="0 0 0 0 0.70980394 0 0 0 0 0.3647059 0 0 0 0 0.019607844 0 0 0 1 0"
          in="shadowInnerInner5"
          result="shadowMatrixInner5"
        />
        <feGaussianBlur
          stdDeviation={0.5}
          in="SourceAlpha"
          result="shadowBlurInner6"
        />
        <feOffset dy={1} in="shadowBlurInner6" result="shadowOffsetInner6" />
        <feComposite
          in="shadowOffsetInner6"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner6"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          in="shadowInnerInner6"
          result="shadowMatrixInner6"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
          <feMergeNode in="shadowMatrixInner3" />
          <feMergeNode in="shadowMatrixInner4" />
          <feMergeNode in="shadowMatrixInner5" />
          <feMergeNode in="shadowMatrixInner6" />
        </feMerge>
      </filter>
      <linearGradient
        x1="50%"
        y1="25.073%"
        x2="50%"
        y2="-43.597%"
        id="prefix__d"
      >
        <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="50%" id="prefix__f">
        <stop stopColor="#FFF" offset="0%" />
        <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </linearGradient>
      <path
        d="M57 7c27.614 0 50 23.281 50 52s-22.386 52-50 52S7 87.719 7 59 29.386 7 57 7z"
        id="prefix__e"
      />
      <path d="M32 71h50a3 3 0 1 1 0 6H32a3 3 0 0 1 0-6z" id="prefix__h" />
      <filter
        x="-1.7%"
        y="0%"
        width="101.7%"
        height="111.1%"
        filterUnits="objectBoundingBox"
        id="prefix__g"
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
        x="-6%"
        y="-28.3%"
        width="110.3%"
        height="167.8%"
        filterUnits="objectBoundingBox"
        id="prefix__i"
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
        d="M40 37c3.314 0 6 4.03 6 9s-2.686 9-6 9-6-4.03-6-9 2.686-9 6-9z"
        id="prefix__k"
      />
      <filter
        x="0%"
        y="0%"
        width="106.7%"
        height="104.8%"
        filterUnits="objectBoundingBox"
        id="prefix__j"
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
        x="-17%"
        y="-12.1%"
        width="140.7%"
        height="129%"
        filterUnits="objectBoundingBox"
        id="prefix__l"
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
        d="M74 37c3.314 0 6 4.03 6 9s-2.686 9-6 9-6-4.03-6-9 2.686-9 6-9z"
        id="prefix__n"
      />
      <filter
        x="-7.1%"
        y="0%"
        width="114.3%"
        height="104.8%"
        filterUnits="objectBoundingBox"
        id="prefix__m"
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
        x="-25.4%"
        y="-12.1%"
        width="150.7%"
        height="129%"
        filterUnits="objectBoundingBox"
        id="prefix__o"
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
        <use fill="#FFEE40" xlinkHref="#prefix__a" />
        <use
          fill="url(#prefix__b)"
          style={{
            mixBlendMode: 'overlay'
          }}
          xlinkHref="#prefix__a"
        />
        <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__a" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="url(#prefix__d)" xlinkHref="#prefix__e" />
        <use
          fill="url(#prefix__f)"
          style={{
            mixBlendMode: 'overlay'
          }}
          xlinkHref="#prefix__e"
        />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__g)" xlinkHref="#prefix__h" />
        <use fill="#A66707" xlinkHref="#prefix__h" />
        <use fill="#000" filter="url(#prefix__i)" xlinkHref="#prefix__h" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__j)" xlinkHref="#prefix__k" />
        <use fill="#A66707" xlinkHref="#prefix__k" />
        <use fill="#000" filter="url(#prefix__l)" xlinkHref="#prefix__k" />
      </g>
      <g transform="translate(-2 -2)">
        <use fill="#000" filter="url(#prefix__m)" xlinkHref="#prefix__n" />
        <use fill="#A66707" xlinkHref="#prefix__n" />
        <use fill="#000" filter="url(#prefix__o)" xlinkHref="#prefix__n" />
      </g>
    </g>
  </svg>
)

export default Medium
