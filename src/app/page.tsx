import { Chat } from '@/components/Chat'
/**
 * Renders the Home page component.
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className='flex min-h-screen bg-gray-900 items-center justify-center' >
     <Chat />
   </div>
  )
}
