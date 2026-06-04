'use client'

import { Building2, Mail, MapPin, Phone, Wrench } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Add or improve a listing', body: 'Send business details, service areas, profile corrections, and listing improvement requests.' },
    { icon: Phone, title: 'Lead and enquiry support', body: 'Ask about contact visibility, enquiry flow, business categories, and customer response options.' },
    { icon: MapPin, title: 'Area coverage', body: 'Request city, locality, or category updates so customers can find the right provider faster.' },
    { icon: Wrench, title: 'Technical help', body: 'Report form issues, incorrect links, missing images, or listing pages that need attention.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] text-slate-950">
        <section className="mx-auto grid max-w-[1180px] gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="rounded-lg border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b6fdc]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.contact.description}</p>
              <div className="mt-6 flex items-center gap-3 rounded-lg border border-[#d8e8ff] bg-[#f8fbff] p-4 text-sm font-bold text-slate-700">
                <Mail className="h-5 w-5 text-[#0b6fdc]" />
                Clear requests help us route listing updates faster.
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5 text-[#0b6fdc]" />
                  <h2 className="mt-3 text-lg font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
