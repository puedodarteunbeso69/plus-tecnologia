'use client'

import Script from 'next/script'

export function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              // Enhanced ecommerce events
              allow_enhanced_conversions: true,
              // Conversion tracking
              conversion_linker: true,
              // User engagement
              engagement_time_msec: 100,
              // Custom parameters for business tracking
              custom_map: {
                'dimension1': 'service_type',
                'dimension2': 'client_type',
                'dimension3': 'project_size'
              }
            });

            // Track outbound links
            gtag('config', '${GA_MEASUREMENT_ID}', {
              custom_map: {'dimension4': 'outbound_link'}
            });

            // Track file downloads
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.href) {
                const href = target.href;
                // Track PDF downloads
                if (href.includes('.pdf')) {
                  gtag('event', 'file_download', {
                    file_name: href.split('/').pop(),
                    file_extension: 'pdf',
                    link_url: href
                  });
                }
                // Track external links
                if (href.includes('http') && !href.includes('plustecnologia.com')) {
                  gtag('event', 'click', {
                    event_category: 'outbound',
                    event_label: href,
                    transport_type: 'beacon'
                  });
                }
              }
            });

            // Track scroll depth
            let scrollDepthTracked = false;
            window.addEventListener('scroll', function() {
              const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

              if (scrollPercent >= 75 && !scrollDepthTracked) {
                gtag('event', 'scroll', {
                  event_category: 'engagement',
                  event_label: '75%',
                  value: 75
                });
                scrollDepthTracked = true;
              }
            });

            // Track form submissions
            document.addEventListener('submit', function(e) {
              const form = e.target;
              if (form.tagName === 'FORM') {
                gtag('event', 'form_submit', {
                  event_category: 'form',
                  event_label: form.id || 'contact_form',
                  value: 1
                });
              }
            });
          `,
        }}
      />

      {/* GTM NoScript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Utility functions for manual event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'EUR'
    })
  }
}

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// Types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
