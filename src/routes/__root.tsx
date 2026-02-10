import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type * as React from 'react';
import { Toaster } from 'sonner';
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary';
import { NotFound } from '~/components/NotFound';
import { ThemeInitScript } from '~/components/theme-init-script';
import { ThemeProvider } from '~/components/theme-provider';
// import { getTheme } from '~/lib/theme';
import type { Theme } from '~/lib/theme';
import { seo } from '~/utils/seo';
import appCss from '../styles/app.css?url';
import customCss from '../styles/custom.css?url';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  //   loader: () => getTheme(),
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'Instructa Start',
        description: 'Building better applications, faster with Instructa Start',
      }),
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: customCss,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      {import.meta.env.DEV ? (
        <>
          <ReactQueryDevtools buttonPosition="bottom-right" />
          <TanStackRouterDevtools />
        </>
      ) : null}
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const initial = Route.useLoaderData() as Theme;
  return (
    <html lang="en" className={initial === 'system' ? '' : initial} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <HeadContent />
      </head>
      <body className="">
        <ThemeProvider initial={initial}>
          <div className="flex min-h-svh flex-col">{children}</div>
          <Toaster />
        </ThemeProvider>
        <Scripts />
        {/* --- PASTE YOUR TAWK.TO SCRIPT HERE --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6989ec1d3bf67e1c31fcce92/1jh1c4lea';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
