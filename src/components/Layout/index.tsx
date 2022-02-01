import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import { TopBar } from '../TopBar'
import { Content, Main } from './styles'

interface ILayout {
  children?: ReactElement;
}

export default function Layout({
  children,
}: ILayout) {
  const { asPath } = useRouter();

  function formatPageNames(pageName:string) {
    const titlePageWeb = pageName.replace("/", "")
    if (titlePageWeb === "" ) {
      return 'Pokedex | Home'
    }
    return `Pokedex | ${titlePageWeb[0].toUpperCase() + titlePageWeb.slice(1)}`
  }

  return (
    <Main>
      <Head>
        <title>{formatPageNames(asPath)}</title>
      </Head>
      <TopBar />
      <Content>
        {children}
      </Content>
    </Main>
  )
}
