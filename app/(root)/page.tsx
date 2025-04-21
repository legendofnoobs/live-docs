import Header from '@/components/Header'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

import doc from "@/public/assets/icons/doc.svg"
import AddDocumentBtn from '@/components/AddDocumentBtn'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Home = async () => {
  const clerkUser = await currentUser()
  if (!clerkUser) redirect('/sign-in');

  const documnents = []
  return (
    <main className='home-container'>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {
        documnents.length > 0 ? (
          <div></div>
        ) : (
          <div className='document-list-empty'>
            <Image
              src={doc}
              alt='doc'
              width={40}
              height={40}
              className='mx-auto'
            />

            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )
      }
    </main>
  )
}

export default Home