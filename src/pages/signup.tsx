import Head from 'next/head'
import Image from 'next/image'

export default function SignUp() {
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
            <div className="form-header">
                <h1 className="headline">Create an Account</h1>
                <p className="subtitle">Let's get started with your 30 day free trial.</p>
            </div>
            <input className="input" type="text" name="name" placeholder="Name"/>
            <input className="input" type="text" name="email" placeholder="E-Mail"/>
            <input className="input" type="text" name="password" placeholder="Password"/>
            <div className="button-group">
                <button className="button button-primary" type="submit">Create account</button>
                <button className="button button-secondary" type="submit">Google</button>
            </div>
        </div>
        <div className="image-container">
            <img className="image" src="/images/signup.jpg" alt="hi"/>
        </div>
        
      </main>
    </>
  )
}
