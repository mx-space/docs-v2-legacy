import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
const logo = (
  <span>
    <img src='/logo.png' />
    Mix Space
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
      }
      img {
        margin-right: 8px;
        height: 24px;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)
const config: DocsThemeConfig = {
  logo,
  head: function useHead() {
    const { title } = useConfig()

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="A flexible, modular CMS Blog System."
        />
        <meta
          name="og:description"
          content="A flexible, modular CMS Blog System."
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        <meta name="twitter:site:domain" content="mog.js.org" />
        <meta name="twitter:url" content="https://mog.js.org" />
        <meta
          name="og:title"
          content={title ? title + ' | Mix Space' : 'Mix Space'}
        />
        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="Mix Space" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  project: {
    link: 'https://github.com/mx-space/core',
  },
  docsRepositoryBase: 'https://github.com/mx-space/docs',
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
      <p className="text-xs">
        © {new Date().getFullYear()} This project is licensed under AGPLv3 licensed. 2021 Innei
      </p>
    </div>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Mix Space'
      }
    }
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  banner: {
    key: 'theme-shiro',
    text: <a href="https://github.com/Innei/Shiro" target="_blank">
      🎨 New Mix Space theme `Shiro` is released. Read more →
    </a>,
  },
}

export default config
