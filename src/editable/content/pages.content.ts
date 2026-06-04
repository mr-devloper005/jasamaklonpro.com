import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted local businesses near you',
      description: 'Search local businesses, compare services, and discover verified listings across popular categories.',
      openGraphTitle: 'Find trusted local businesses near you',
      openGraphDescription: 'Discover businesses, services, and local providers through a fast directory experience.',
      keywords: ['business directory', 'local listings', 'business search', 'service providers'],
    },
    hero: {
      badge: 'Business discovery made simple',
      title: ['Search across trusted', 'local business listings.'],
      description: 'Find nearby services, compare business details, and connect with providers across everyday categories.',
      primaryCta: { label: 'Browse listings', href: '/listings' },
      secondaryCta: { label: 'Add your business', href: '/create' },
      searchPlaceholder: 'Search for salons, contractors, doctors, restaurants...',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for fast local search and better business visibility.',
      paragraphs: [
        'This site brings local businesses, service categories, contact details, and useful discovery pages into one clear directory experience.',
        'Visitors can search by need, location, or category, then move from shortlist to business detail without losing context.',
        'Business owners get a focused place to present services, coverage, images, and quick contact paths.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the directory',
    title: 'A clearer way to find and compare local businesses.',
    description: `${slot4BrandConfig.siteName} helps customers discover trusted local providers while giving businesses a practical listing surface for services, coverage, and contact details.`,
    paragraphs: [
      'The experience is designed around real search behavior: people need categories, locations, photos, service notes, and quick actions that are easy to scan.',
      'Every listing page is shaped to help visitors understand what a business offers, where it operates, and how to contact it without digging through clutter.',
      'For owners, the goal is simple: make a business easier to find, easier to trust, and easier to contact.',
    ],
    values: [
      {
        title: 'Local-first discovery',
        description: 'Categories, locations, and listing cards are arranged so visitors can move from intent to provider quickly.',
      },
      {
        title: 'Business-ready profiles',
        description: 'Listings highlight service details, images, contact paths, and trust signals in a compact format.',
      },
      {
        title: 'Clear, useful content',
        description: 'About, archive, search, and detail pages use practical business copy instead of generic filler.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Get help with listings, leads, and local visibility.',
    description: 'Send listing updates, partnership questions, correction requests, or support notes. The team can help with business profiles, category placement, and contact visibility.',
    formTitle: 'Tell us what you need',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search business listings, categories, services, and local providers across the site.',
    },
    hero: {
      badge: 'Search businesses',
      title: 'Find the right business faster.',
      description: 'Search by service, category, business name, or area to compare local providers quickly.',
      placeholder: 'Search restaurants, dentists, repairs, real estate...',
    },
    resultsTitle: 'Latest business listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a business listing for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to add or manage a business listing.',
      description: 'Use your account to open the listing workspace and prepare a business profile with services, contact details, and photos.',
    },
    hero: {
      badge: 'Business listing workspace',
      title: 'Create a listing customers can understand quickly.',
      description: 'Add your business name, service category, location, images, contact links, and a useful description.',
    },
    formTitle: 'Listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing draft submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for business listing access.',
      badge: 'Business access',
      title: 'Welcome back to your listing dashboard.',
      description: 'Login to add business details, prepare listing drafts, and keep your local profile ready for customers.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for business listing access.',
      badge: 'Create business access',
      title: 'Create an account to list your business.',
      description: 'Set up an account so you can prepare business listings, update details, and improve how customers find you.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
