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
      if (event === 'SIGNED_IN') {
        router.push('dashboard')
      } else if (event === 'SIGNED_OUT') {
        router.push('login')
      }
      
    })
    const getUser = async () => {
      const {data, error} = await supabase.auth.getSession();

      if (error || !data.session) {
        if (router.pathname) {
          router.push('login')
        }
      }

      if (['/login', '/signup'].includes(router.pathname)) {
        router.push('dashboard')
      }
      console.log(data?.session)
      return data?.session?.user
    }
    

    const user = getUser();

    setUser(user)
  }, []);
  return <Component {...pageProps} user={user} />
}
