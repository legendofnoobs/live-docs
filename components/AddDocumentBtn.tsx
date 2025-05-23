"use client";

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import addIcon from "@/public/assets/icons/add.svg"
import { createDocument } from '@/lib/actions/room.actions';

const AddDocumentBtn = ({userId, email}: AddDocumentBtnProps) => {
    const router = useRouter()
    const addDocumentHandler = async () => {
        try {
            const room = await createDocument({userId, email})
            if (room) {
                router.push(`/documents/${room.id}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Button type='submit' onClick={addDocumentHandler} className='gradient-blue flex gap-1 shadow-md'>
            <Image
                src={addIcon}
                alt='add'
                width={24}
                height={24}
                className='mx-auto'
            />
            <p className='hidden sm:block'>Start a blank document</p>
        </Button>
    )
}

export default AddDocumentBtn