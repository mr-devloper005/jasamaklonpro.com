import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2, MapPin } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-slate-950">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
          <div className="rounded-lg border border-black/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b6fdc]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.auth.login.description}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['Manage listing', Building2],
                ['Update coverage', MapPin],
                ['Keep details ready', CheckCircle2],
              ].map(([label, Icon]) => (
                <div key={String(label)} className="rounded-lg border border-black/10 bg-[#f8fbff] p-4 text-sm font-bold text-slate-700">
                  <Icon className="mb-3 h-5 w-5 text-[#0b6fdc]" />
                  {String(label)}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-slate-600">New here? <Link href="/signup" className="font-black text-[#0b6fdc] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
