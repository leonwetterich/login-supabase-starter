import 'components/styles/globals.css'
import type { AppProps } from 'next/app'
import { supabase } from 'components/utils/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<any>() 
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/login')
      }
    })
    const getUser = async () => {
      const {data, error} = await supabase.auth.getSession();

      if (error || !data.session) {
        console.log('no account')
        if (router.pathname.includes('app') || ['/login', '/signup'].includes(router.pathname)) {
          console.log('no account - redirect to login')
          router.push('/login')
          return
        }
      }

      if (['/login', '/signup'].includes(router.pathname)) {
        console.log('account - redirect to dashboard')
        router.push('/app/dashboard')
        return
      }
      console.log(data?.session)
      return data?.session?.user
    }
    

    const user = getUser();

    setUser(user)
  }, []);
  return <Component {...pageProps} user={user} />
}
