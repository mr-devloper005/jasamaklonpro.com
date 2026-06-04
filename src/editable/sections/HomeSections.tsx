import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, BadgeIndianRupee, Building2, Car, GraduationCap, HeartPulse, Home, Hotel, MapPin, PartyPopper, PawPrint, Search, ShieldCheck, Sparkles, Star, Utensils, Wrench } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const categoryTiles = [
  { label: 'Restaurants', icon: Utensils, href: '/search?q=restaurants' },
  { label: 'Hotels', icon: Hotel, href: '/search?q=hotels' },
  { label: 'Beauty Spa', icon: Sparkles, href: '/search?q=beauty spa' },
  { label: 'Home Decor', icon: Home, href: '/search?q=home decor' },
  { label: 'Education', icon: GraduationCap, href: '/search?q=education' },
  { label: 'Hospitals', icon: HeartPulse, href: '/search?q=hospitals' },
  { label: 'Contractors', icon: Building2, href: '/search?q=contractors' },
  { label: 'Pet Shops', icon: PawPrint, href: '/search?q=pet shops' },
  { label: 'Car Service', icon: Car, href: '/search?q=car service' },
  { label: 'Repairs', icon: Wrench, href: '/search?q=repairs' },
  { label: 'Events', icon: PartyPopper, href: '/search?q=event organisers' },
  { label: 'Loans', icon: BadgeIndianRupee, href: '/search?q=loans' },
]

const serviceGroups = [
  {
    title: 'Wedding Requisites',
    items: ['Banquet Halls', 'Bridal Services', 'Caterers'],
    tone: 'bg-[#fff7ed]',
  },
  {
    title: 'Beauty & Spa',
    items: ['Beauty Parlours', 'Spa & Massage', 'Salons'],
    tone: 'bg-[#fdf2f8]',
  },
  {
    title: 'Repairs & Services',
    items: ['AC Service', 'Car Service', 'Bike Service'],
    tone: 'bg-[#eff6ff]',
  },
  {
    title: 'Daily Needs',
    items: ['Grocery', 'Electricians', 'Courier Services'],
    tone: 'bg-[#f0fdf4]',
  },
]

const cityLinks = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Surat', 'Lucknow', 'Indore']
const footerSearches = ['Interior Designers', 'Real Estate Agents', 'Dentists', 'Water Suppliers', 'Packers And Movers', 'Wedding Photographers', 'Income Tax Consultants', 'Home Delivery Restaurants', 'Motorcycle Repair', 'Solar Panel Dealers', 'Beauty Parlours', 'Courier Services']

function listingRoute() {
  return SITE_CONFIG.tasks.find((task) => task.key === 'listing')?.route || '/listing'
}

function listingHref(post: SitePost, fallbackRoute = listingRoute()) {
  const task = (post.content && typeof post.content === 'object' && (post.content as Record<string, unknown>).type === 'listing') ? 'listing' : 'listing'
  return postHref(task as TaskKey, post, fallbackRoute)
}

function Rail({ children }: { children: ReactNode }) {
  return <div className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
}

function SectionShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
}

function BusinessMiniCard({ post, index }: { post: SitePost; index: number }) {
  const image = getEditablePostImage(post)
  return (
    <Link href={listingHref(post)} className="group grid w-[300px] shrink-0 snap-start overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <img src={image} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded bg-[#0b6fdc] px-2.5 py-1 text-xs font-black text-white">{index % 2 ? 'Popular' : 'Verified'}</span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-lg font-black leading-tight text-slate-950">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{getEditableExcerpt(post, 100)}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-sm font-black text-emerald-700"><Star className="h-4 w-4 fill-current" /> {(4 + (index % 8) / 10).toFixed(1)}</span>
          <span className="text-sm font-bold text-[#0b6fdc]">Explore</span>
        </div>
      </div>
    </Link>
  )
}

function ActivityCard({ post, index }: { post: SitePost; index: number }) {
  return (
    <Link href={listingHref(post)} className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-xl font-black text-slate-950">{post.title}</h3>
            <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" /> Local area</p>
          </div>
          <span className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-700">WhatsApp</span>
        </div>
      </div>
      <div className="aspect-[16/8] overflow-hidden bg-slate-100">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex text-[#ff4b2f]">{Array.from({ length: 5 }).map((_, item) => <Star key={item} className="h-4 w-4 fill-current" />)}</div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-700">{getEditableExcerpt(post, 130) || `Customers are exploring this business for reliable service, quick response, and local availability.`}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryRoute }: HomeSectionProps) {
  const route = listingRoute() || primaryRoute
  return (
    <section className="border-b border-black/10 bg-white">
      <SectionShell className="py-8 sm:py-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div>
            <p className="text-sm font-bold text-slate-600">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Search across trusted <span className="text-[#0b6fdc]">businesses</span>
            </h1>
            <form action="/search" className="mt-5 grid gap-3 sm:grid-cols-[220px_minmax(0,1fr)_56px]">
              <label className="flex h-12 items-center gap-2 rounded-md border border-black/20 bg-white px-4 shadow-sm">
                <MapPin className="h-5 w-5 text-slate-400" />
                <input name="location" defaultValue="Mumbai" className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none" />
              </label>
              <label className="flex h-12 items-center gap-2 rounded-md border border-black/20 bg-white px-4 shadow-sm">
                <Search className="h-5 w-5 text-slate-400" />
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-bold outline-none placeholder:text-slate-400" />
              </label>
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-[#ff4b2f] text-white shadow-sm" aria-label="Search"><Search className="h-5 w-5" /></button>
            </form>
            <div className="mt-6 grid gap-4 overflow-hidden rounded-lg border border-black/10 bg-[#f8fbff] p-4 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="min-h-40 rounded-lg bg-[linear-gradient(90deg,#dff0ff,#ffffff)] p-6">
                <p className="text-sm font-bold text-slate-700">CCTV & Security Solutions</p>
                <h2 className="mt-2 max-w-sm text-3xl font-black leading-tight text-slate-950">Get best deals from nearby providers</h2>
                <Link href="/search?q=security services" className="mt-5 inline-flex rounded-md bg-[#ff4b2f] px-4 py-2 text-sm font-black text-white">Explore</Link>
              </div>
              {[
                ['B2B', 'Quick quotes'],
                ['Repairs', 'Nearest vendor'],
                ['Real Estate', 'Find agents'],
              ].map(([title, body]) => (
                <Link key={title} href={`/search?q=${encodeURIComponent(title)}`} className="rounded-lg bg-[#0b6fdc] p-5 text-white transition hover:-translate-y-1">
                  <p className="text-2xl font-black">{title}</p>
                  <p className="mt-2 text-sm font-bold text-white/80">{body}</p>
                  <ArrowRight className="mt-8 h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-black/10 bg-[#e8f2ff] p-6">
            <p className="text-sm font-bold text-slate-600">List your business on {slot4BrandConfig.siteName}</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[#0b6fdc]">Reach customers looking for you today</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Add services, coverage area, contact details, and photos in one focused profile.</p>
            <Link href="/create" className={dc.button.primary + ' mt-5'}>Free Listing</Link>
          </aside>
        </div>
      </SectionShell>
      <SectionShell className="pb-8">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
          {categoryTiles.map((item) => (
            <Link key={item.label} href={item.href} className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-black/10 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#0b6fdc]">
              <item.icon className="h-7 w-7 text-[#0b6fdc]" />
              <span className="mt-2 text-xs font-bold leading-tight text-slate-950">{item.label}</span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </section>
  )
}

export function EditableStoryRail({ posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <SectionShell className="py-9">
      <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Trending searches near you</h2>
            <p className="mt-1 text-sm text-slate-600">Popular services customers are exploring right now.</p>
          </div>
          <Link href={listingRoute()} className="hidden text-sm font-black text-[#0b6fdc] sm:inline-flex">View all</Link>
        </div>
        <Rail>
          {railPosts.map((post, index) => <BusinessMiniCard key={post.id || post.slug} post={post} index={index} />)}
        </Rail>
      </div>
    </SectionShell>
  )
}

export function EditableMagazineSplit({ posts }: HomeSectionProps) {
  const groupPosts = posts.slice(0, 8)
  return (
    <SectionShell className="pb-9">
      <div className="grid gap-5 md:grid-cols-2">
        {serviceGroups.map((group, index) => (
          <div key={group.title} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">{group.title}</h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {group.items.map((item, itemIndex) => {
                const post = groupPosts[(index + itemIndex) % Math.max(groupPosts.length, 1)]
                return (
                  <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="block text-center">
                    <div className={`aspect-[4/3] overflow-hidden rounded-lg ${group.tone}`}>
                      {post ? <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-cover transition hover:scale-105" /> : null}
                    </div>
                    <p className="mt-2 text-sm font-bold text-slate-950">{item}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export function EditableTimeCollections({ posts }: HomeSectionProps) {
  const activity = posts.slice(0, 6)
  return (
    <section className="bg-[#f4f4f4] py-9">
      <SectionShell>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Recent activity</h2>
            <p className="mt-1 text-sm text-slate-600">Fresh business pages, reviews, and service updates.</p>
          </div>
          <Link href={listingRoute()} className="hidden text-sm font-black text-[#0b6fdc] sm:inline-flex">Explore more</Link>
        </div>
        {activity.length ? (
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {activity.map((post, index) => <ActivityCard key={post.id || post.slug} post={post} index={index} />)}
          </div>
        ) : null}
        <div className="mt-9 rounded-lg border border-black/10 bg-white p-6">
          <h2 className="text-xl font-black text-slate-950">Popular categories</h2>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-slate-600">
            {footerSearches.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="hover:text-[#0b6fdc]">{item}</Link>)}
          </div>
          <h2 className="mt-8 text-xl font-black text-slate-950">Popular cities</h2>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-6 text-slate-600">
            {cityLinks.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="hover:text-[#0b6fdc]">{item}</Link>)}
          </div>
        </div>
      </SectionShell>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <SectionShell className="py-10">
        <div className="grid gap-5 rounded-lg border border-black/10 bg-[#0b2d57] p-6 text-white shadow-sm md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em]"><ShieldCheck className="h-4 w-4" /> Business owners</div>
            <h2 className="mt-4 text-3xl font-black leading-tight">Create a useful listing that customers can act on.</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">Add clear services, local coverage, contact details, and photos so customers can choose you with confidence.</p>
          </div>
          <Link href="/create" className="inline-flex items-center justify-center rounded-md bg-[#ff4b2f] px-6 py-3 text-sm font-black text-white">Add Business <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
      </SectionShell>
    </section>
  )
}
