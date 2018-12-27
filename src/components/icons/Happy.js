import React from 'react'

type Props = {
  width: string,
  height: string
}

const Happy = ({ width, height }: Props) => (
  <svg width={width} height={height} viewBox="0 0 110 110">
    <defs>
      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="prefix__b">
        <stop stopColor="#FFF" stopOpacity={0} offset="0%" />
        <stop stopColor="#FFF" offset="100%" />
      </linearGradient>
      <path
        d="M56 2c30.376 0 55 24.624 55 55s-24.624 55-55 55S1 87.376 1 57 25.624 2 56 2z"
        id="prefix__a"
      />
      <filter
        x="-36.7%"
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
        d="M56 7c27.614 0 50 23.281 50 52s-22.386 52-50 52S6 87.719 6 59 28.386 7 56 7z"
        id="prefix__e"
      />
      <path
        d="M40.5 26c3.038 0 5.5 6.716 5.5 15 0 8.284-2.462 15-5.5 15S35 49.284 35 41c0-8.284 2.462-15 5.5-15z"
        id="prefix__h"
      />
      <filter
        x="-7.7%"
        y="0%"
        width="115.4%"
        height="103%"
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
        x="-27.3%"
        y="-7.7%"
        width="154.6%"
        height="118.5%"
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
        d="M71.5 26c3.038 0 5.5 6.716 5.5 15 0 8.284-2.462 15-5.5 15S66 49.284 66 41c0-8.284 2.462-15 5.5-15z"
        id="prefix__k"
      />
      <filter
        x="-7.7%"
        y="0%"
        width="115.4%"
        height="103%"
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
        x="-27.3%"
        y="-7.7%"
        width="154.6%"
        height="118.5%"
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
        d="M56.03 70c17.69 0 26.689-3.925 33.96-6.004 1.96 0 2.01 1.376 2.01 3.004 0 8.328-4.153 15.39-10.991 22-6.444 6.23-15.28 10-24.98 10 0-.016-.01-.028-.029-.038V99s-.24-.037-.485-.056c-.245.02-.485.056-.485.056v-.038c-.02.01-.03.022-.03.038-9.707 0-18.551-3.77-25-10-6.843-6.61-11-13.672-11-22 0-1.628.05-3.004 2.012-3.004C28.29 66.075 37.296 70 55 70h1.03z"
        id="prefix__n"
      />
      <filter
        x="-1.3%"
        y="2.6%"
        width="102.7%"
        height="102.6%"
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
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-4.7%"
        y="-4.1%"
        width="109.5%"
        height="116.1%"
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
      <linearGradient x1="0%" y1="50%" x2="100%" y2="57.887%" id="prefix__r">
        <stop stopColor="#C7CACD" offset="0%" />
        <stop stopColor="#FFF" offset="43.06%" />
        <stop stopColor="#C7CACD" offset="100%" />
      </linearGradient>
      <path
        d="M55 81.5c0-1.845.5-5.545.5-8.5 16.944-.066 31.462-3.425 34-6 0 3.982-1.385 8.397-2.472 9.5-1.087 1.103-19.161 5-32.028 5-13.05 0-29.897-3.897-31-5-1.103-1.103-2.5-5.538-2.5-9.5 2.587 2.587 16.462 5.967 33.748 6z"
        id="prefix__q"
      />
      <filter
        x="-2.9%"
        y="-9.3%"
        width="105.9%"
        height="130%"
        filterUnits="objectBoundingBox"
        id="prefix__p"
      >
        <feMorphology
          radius={0.1}
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.4}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-3.7%"
        y="-12.7%"
        width="107.4%"
        height="136.9%"
        filterUnits="objectBoundingBox"
        id="prefix__s"
      >
        <feMorphology
          radius={0.5}
          in="SourceAlpha"
          result="shadowSpreadInner1"
        />
        <feGaussianBlur
          stdDeviation={1.25}
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        />
        <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          in="shadowInnerInner1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-1 -2)">
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
      <g transform="translate(-1 -2)">
        <use fill="url(#prefix__d)" xlinkHref="#prefix__e" />
        <use
          fill="url(#prefix__f)"
          style={{
            mixBlendMode: 'overlay'
          }}
          xlinkHref="#prefix__e"
        />
      </g>
      <g transform="translate(-1 -2)">
        <use fill="#000" filter="url(#prefix__g)" xlinkHref="#prefix__h" />
        <use fill="#A66707" xlinkHref="#prefix__h" />
        <use fill="#000" filter="url(#prefix__i)" xlinkHref="#prefix__h" />
      </g>
      <g transform="translate(-1 -2)">
        <use fill="#000" filter="url(#prefix__j)" xlinkHref="#prefix__k" />
        <use fill="#A66707" xlinkHref="#prefix__k" />
        <use fill="#000" filter="url(#prefix__l)" xlinkHref="#prefix__k" />
      </g>
      <g transform="translate(-1 -2)">
        <use fill="#000" filter="url(#prefix__m)" xlinkHref="#prefix__n" />
        <use fill="#A66707" xlinkHref="#prefix__n" />
        <use fill="#000" filter="url(#prefix__o)" xlinkHref="#prefix__n" />
      </g>
      <g transform="translate(-1 -2)">
        <use fill="#000" filter="url(#prefix__p)" xlinkHref="#prefix__q" />
        <use fill="#FFF" xlinkHref="#prefix__q" />
        <use fill="url(#prefix__r)" xlinkHref="#prefix__q" />
        <use fill="#000" filter="url(#prefix__s)" xlinkHref="#prefix__q" />
      </g>
    </g>
  </svg>
)

export default Happy
