import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, Camera, PhoneCall } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-slate-950">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-7">
            <h1 className="text-2xl font-black tracking-tight">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-slate-600">Already have an account? <Link href="/login" className="font-black text-[#0b6fdc] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="rounded-lg border border-black/10 bg-[#0b2d57] p-7 text-white shadow-sm sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/60">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{pagesContent.auth.signup.description}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['Business profile', BadgeCheck],
                ['Photos and details', Camera],
                ['Quick contact', PhoneCall],
              ].map(([label, Icon]) => (
                <div key={String(label)} className="rounded-lg border border-white/10 bg-white/10 p-4 text-sm font-bold text-white/85">
                  <Icon className="mb-3 h-5 w-5 text-[#ffb199]" />
                  {String(label)}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
