import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const authView = searchParams.get('type') === 'recovery' ? 'update_password' : 'sign_in';

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      // Only redirect to home if it's not a password recovery flow
      // and a session exists (meaning user is logged in or password updated)
      if (session && authView !== 'update_password') {
        navigate('/');
      }
      // If it's a password recovery and a session exists, it means the token was valid.
      // The Auth component should then display the update_password form.
      // After the password is *actually* updated, the Auth component will handle the final redirect.
    });

    return () => subscription.unsubscribe();
  }, [navigate, authView]); // Add authView to dependencies

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Login to CodeElevate</h1>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github', 'bitbucket']}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(222.2 47.4% 11.2%)',
                    brandAccent: 'hsl(210 40% 98%)',
                  },
                },
              },
            }}
            theme="light"
            // Redirect to the current URL to ensure all parameters are preserved for the Auth component
            redirectTo={window.location.href}
            view={authView}
          />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Login;