import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'
import Image from './Image'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between font-sans">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
      {/* <Image
          width={1512}
          height={550}
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
          src='/static/images/gradient-background-top.png'
          alt=''
          role='presentation'
          priority
        />
        <Image
          width={1512}
          height={447}
          className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
          src='/static/images/gradient-background-bottom.png'
          alt=''
          role='presentation'
          priority
        /> */}
    </SectionContainer>
  )
}

export default LayoutWrapper
