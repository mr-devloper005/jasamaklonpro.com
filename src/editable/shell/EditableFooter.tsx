'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#ffffff', '--editable-footer-text': '#101828', '--editable-container': '1180px' } as CSSProperties
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing')?.route || '/listing'
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  const directoryLinks = [
    { label: 'Business Listings', href: listingRoute },
    { label: 'Search Businesses', href: '/search' },
    { label: 'Free Listing', href: '/create' },
    { label: 'Contact Support', href: '/contact' },
  ]

  const verticals = ['Restaurants', 'Beauty & Spa', 'Repairs & Services', 'Real Estate', 'Doctors', 'Education', 'Hotels', 'Contractors', 'Packers & Movers', 'Pet Shops', 'Event Services', 'Home Decor']

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.85fr_1.35fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white">
              <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-9 w-9 object-contain" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-[-0.04em]">{slot4BrandConfig.siteName}</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">{globalContent.footer.tagline}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">{globalContent.footer.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
            {['Verified listings', 'Local services', 'Fast search'].map((item) => <span key={item} className="rounded-md border border-[var(--editable-border)] px-3 py-1.5">{item}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {directoryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0b6fdc]">
                {item.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-slate-700 hover:text-[#0b6fdc]">Logout {session.name}</button> : <Link href="/login" className="text-sm font-bold text-slate-700 hover:text-[#0b6fdc]">Login / Sign Up</Link>}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Popular Verticals</h3>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-slate-600">
            {verticals.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="hover:text-[#0b6fdc]">{item}</Link>)}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold text-slate-500">
        © {year} {slot4BrandConfig.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
