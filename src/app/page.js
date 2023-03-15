
import styles from './page.module.css'
import Link from 'next/link'



export default function Home() {
  return (
      <div >
       
        <div>
          <Link className='Logo' href="/">InviteGo</Link>
        </div>

        <div>
         <Link href="/calendar">Calendar</Link><br/>
         <Link href="/contacts">Contacts</Link><br/>
         <Link href="/coolness-tracker">Coolness Tracker</Link><br/>
         <Link href="/event-reply">EventReply</Link><br/>
         <Link href="/Main-event">My Social Media</Link><br/>
         <Link href="/user-info">My Info</Link><br/>
         <Link href="/sign-up">Sign up</Link><br/>
         <Link href="/about">about</Link><br/>
         <Link href="/sign-in">Sign in</Link><br/>
        </div>



      </div>
      
   
  )
}
