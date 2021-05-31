import React from 'react'
import { Code, H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-vue@v0.5.5',
}

const Page = () => {
  return (
    <>
      <H1>inertia-vue@v0.5.5</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on January 21, 2021</div>
      <P>
        Add <Code>GET</Code> support to the form helper.
      </P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page