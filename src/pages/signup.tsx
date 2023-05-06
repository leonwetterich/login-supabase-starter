import Head from 'next/head'
import { supabase } from 'components/utils/supabase/client'
import Link from 'next/link'

export default function SignUp() {
  const signUp = async (event: any) => {
    
    event.preventDefault();
 
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    };
    console.log(formData)
    const { data, error } = await supabase.auth.signUp(
      {
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          }
        }
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
            <form onSubmit={signUp}>
                <div className="form-header">
                    <h1 className="headline">Create an Account</h1>
                    <p className="subtitle">Get started playing in a matter of minutes.</p>
                </div>
                <input className="input" type="text" name="name" placeholder="Name" required/>
                <input className="input" type="email" name="email" placeholder="E-Mail" required/>
                <input className="input" type="password" name="password" placeholder="Password" required minLength={10} maxLength={32}/>
                <div className="button-group">
                    <button className="button button-primary" type="submit">Create account</button>
                </div>
                <div className="text-center py-3">
                  <Link className="py-3" href="/login">You already have an account? Login here!</Link>
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
