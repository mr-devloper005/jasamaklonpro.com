import { BarChart3, Building2, MapPin, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  const metrics = [
    ['Categories', 'Popular services arranged for quick scanning'],
    ['Locations', 'City and area discovery for local intent'],
    ['Actions', 'Call, website, and enquiry paths on listing pages'],
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f4f4f4] px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-black/10 bg-white p-7 shadow-sm lg:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b6fdc]">{pagesContent.about.badge}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.about.description}</p>
            <div className="mt-7 space-y-4 text-base leading-8 text-slate-700">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-4">
            <div className="rounded-lg border border-black/10 bg-[#0b2d57] p-6 text-white shadow-sm">
              <ShieldCheck className="h-7 w-7 text-[#ffb199]" />
              <h2 className="mt-4 text-2xl font-black">Built around trust signals</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">A useful business directory needs more than names. It needs categories, service details, area context, images, and contact routes that feel dependable.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map(([title, body], index) => {
                const Icon = [Building2, MapPin, BarChart3][index]
                return (
                  <div key={title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                    <Icon className="h-5 w-5 text-[#0b6fdc]" />
                    <h3 className="mt-3 text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </div>
                )
              })}
            </div>
          </aside>
        </section>
        <section className="mx-auto mt-6 grid max-w-[1180px] gap-4 md:grid-cols-3">
          {pagesContent.about.values.map((value) => (
            <div key={value.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black tracking-tight">{value.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
            </div>
          ))}
        </section>
      </main>
    </EditableSiteShell>
  )
}
