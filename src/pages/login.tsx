import Head from 'next/head'
import { supabase } from 'components/utils/supabase/client'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Login() {
  const login = async (event: any) => {
    event.preventDefault();
 
    // Get data from the form.
    const formData = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    console.log(formData)
    const { data, error } = await supabase.auth.signInWithPassword(
      {
        email: formData.email,
        password: formData.password
      }
    )
  }
  return (
    <>
      <Head>
        <title>Nextjs tailwind starter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
          <div className="form-container">
            <form onSubmit={login}>
                <div className="form-header">
                    <h1 className="headline">Login to your Account</h1>
                    <p className="subtitle">Continue where you left off. Good Luck!</p>
                </div>
                <input className="input" type="email" name="email" placeholder="E-Mail" required/>
                <input className="input" type="password" name="password" placeholder="Password" required minLength={10} maxLength={32}/>
                <div className="button-group">
                    <button className="button button-primary" type="submit">Login to account</button>
                </div>
                <div className="text-center py-3">
                  <Link className="py-3" href="/signup">You don't have an account yet? Create one here!</Link>
                </div>
              </form>
          </div>
        
        <div className="image-container">
            <img className="image" src="/images/signup.jpg" alt="hi"/>
        </div>
        
      </main>
    </>
  )
}
