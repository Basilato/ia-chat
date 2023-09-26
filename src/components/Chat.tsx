'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";

import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";


export function Chat() {
    /**
     * A chat component that displays messages and allows users to send new messages.
     * @remarks
     * Uses the `useChat` hook to handle input and submit events.
     * @param api - The API endpoint for sending and receiving messages.
     * @returns A JSX element that displays the chat interface.
     */
    const { messages, input, handleInputChange, handleSubmit } = useChat( {
      api: '/api/chat',
    } )
    return (
      <Card className='  w-[440px]  '>
        <CardHeader>
          <CardTitle>Chat</CardTitle>
          <CardDescription>Using Vercel SDK to react a chat bot</CardDescription>
        </CardHeader>
          <CardContent>
          <ScrollArea className='w-full h-[600px] pr-4 ' >
            {
              messages.map(message => {
                return (
                    <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4' >
                      {
                        message.role === 'user' && (
                        <Avatar>
                          <AvatarFallback>LB</AvatarFallback>
                          <AvatarImage src='https://github.com/basilato.png' />      {/* change to user photo   */}
                     
                        </Avatar>
                        )
                      }
                      {
                        message.role === 'assistant' && (
                        <Avatar>
                          <AvatarFallback>DF</AvatarFallback>
                          <AvatarImage src='https://github.com/basilato.png' />  {/* change bot photo */}
                        </Avatar>
                        )
                      }
                      <p className='leading-relaxed'  >
                        <span className='block font-bold text-slate-800 '>
                          {
                            message.role === 'user' ?  ' Usuário' : 'AI'
                          }:
                        </span> 
                        {message.content} 
                      </p>
                    </div>
                  )
              })
            }
            </ScrollArea>
          </CardContent>
        <CardFooter >
          <form  className=' w-full flex gap-2 '  onSubmit={handleSubmit}  >
            <Input placeholder='Digite sua mensagem' value={input} onChange={handleInputChange} />
            <Button type='submit' >Enviar</Button>
          </form>
        </CardFooter>
      </Card> 
    )
}