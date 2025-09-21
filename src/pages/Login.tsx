import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/'); // Redirect to home page after successful login
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24 flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Login to CodeElevate</h1>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'facebook', 'github', 'bitbucket']}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: 'hsl(222.2 47.4% 11.2%)', // Primary color from your Tailwind config
                    brandAccent: 'hsl(210 40% 98%)', // Primary foreground
                  },
                },
              },
            }}
            theme="light" // You can make this dynamic based on your app's theme
            redirectTo={window.location.origin} // Redirect to the current origin after auth
          />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Login;