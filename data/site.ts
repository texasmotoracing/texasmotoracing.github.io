/**
 * Everything editable about the site lives here.
 * Change copy, links and numbers in this file — not in the components.
 */

/** Prefixes a /public path with the deploy base path (e.g. /TexasMotoRacing on a GitHub project site). */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

/** True once a link has been filled in (not blank and not the "#" placeholder). */
export const hasLink = (url: string) => url !== '' && url !== '#';

export const site = {
  name: 'Texas Moto Racing',
  short: 'TMR',
  tagline: "UT Austin's first motorcycle engineering team",
  university: 'The University of Texas at Austin',
  department: 'Walker Department of Mechanical Engineering',
  // Team address — create this mailbox before the site goes public.
  // Keep a personal address off the site: this one has to outlive every officer.
  email: 'texasmotoracing@gmail.com',
  bikeNumber: '40',
  // Credit for the hero illustration. Leave empty to hide the credit line.
  artist: '',
  edition: 'IX MotoStudent International Competition · 2026–27',

  // TODO: paste your real links. Until you do, the buttons point at "#".
  links: {
    interestForm: 'https://docs.google.com/forms/d/e/1FAIpQLSc89B1AfRKKasxbUqfGXaV42CE8RPRzphLMGyNOvnRMPZ_96Q/viewform',
    application: 'https://docs.google.com/forms/d/e/1FAIpQLSdz_d1V0xsM_rPFiV7LIxhrIZdoXmOgDgBvj9ObmGnOziaGJw/viewform',
    instagram: 'https://www.instagram.com/texasmotoracing/',
    linkedin: '#',
    // A payment link (Stripe, Venmo, UT giving page…). The Donate buttons stay hidden until this is set.
    donate: '',
  },

  // The next regulation deadline the header clock counts down to.
  // Team Plan window closes 30 Nov 2026 (Art. A.6.4.1), Central Time.
  nextDeadline: {
    label: 'MS1 Milestone 1 — Team Plan',
    dueISO: '2026-11-30T23:59:59-06:00',
    dueText: 'due 30 Nov 2026',
  },

  // Program cost figure shown on the sponsorship section. Remove if you'd rather keep it private.
  programCost: '$95,000',

  // Interest-form responses to date. Update as it grows — it appears on the Team section.
  interestCount: 23,
};

export const stats = [
  { value: '20+', label: 'Countries competing' },
  { value: '7', label: 'Graded milestones' },
  { value: '0', label: 'Texas teams before us' },
];

export const phases = {
  ms1: {
    tag: 'MS1 · Engineering & management',
    items: [
      'Team plan and internal organisation',
      'Product definition, with supporting safety calculations',
      'Innovation submission',
      'Full 3D CAD model and manufacturing drawing package',
      'Economic plan and budget control',
      'Pitch presentation',
      'Final defense before an international jury',
    ],
  },
  ms2: {
    tag: 'MS2 · Dynamic & performance',
    items: [
      "Technical scrutineering — pass or you don't run",
      'Dynamic safety check',
      'Free practice and qualifying',
      'Wheel-to-wheel racing at MotorLand Aragón',
    ],
    note: 'Autumn 2027. Both phases score independently toward the overall classification.',
  },
};

/** Straight from the MS2627 regulations. Update if the organiser amends the calendar. */
export const milestones = [
  { when: '1–30 Nov 2026', what: 'MS1 1 — Team plan', article: 'A.6.4.1', current: true },
  { when: '1–28 Feb 2027', what: 'MS1 2 — Product definition and safety calculations', article: 'A.6.4.2' },
  { when: '1–30 Apr 2027', what: 'MS1 3 — Innovation', article: 'A.6.4.3' },
  { when: '1–31 May 2027', what: 'MS1 4 — Prototype CAD and technical drawings', article: 'A.6.4.4' },
  { when: '1–31 May 2027', what: 'MS1 5 — Economical plan', article: 'A.6.4.5' },
  { when: '1–30 Jun 2027', what: 'MS1 6 — Pitch presentation', article: 'A.6.4.6' },
  { when: '1–31 Aug 2027', what: 'Rider eligibility declaration', article: 'A.6.6.1' },
  { when: 'Autumn 2027', what: 'Final Event — scrutineering, jury defense, MS2 racing', article: 'A.6.7.1' },
];

export const specs = [
  { k: 'Category', v: 'MotoStudent eFuel — internal combustion' },
  { k: 'Engine', v: 'Supplied by the organiser under lease-for-use' },
  { k: 'Bike number', v: '40 — the Forty Acres' },
  { k: 'Chassis', v: 'Designed, welded and assembled by the team' },
  { k: 'Circuit', v: 'MotorLand Aragón, Alcañiz, Spain' },
  { k: 'Registered crew', v: 'Ten students, two faculty tutors' },
];

export const subteams = [
  { name: 'Chassis & structures', blurb: 'Frame, swingarm and subframe. FEA, fixturing, welding, and the manufacturing drawing package.', open: true },
  { name: 'Vehicle dynamics', blurb: 'Steering geometry, suspension, mass distribution, brake balance and tyre behaviour.', open: true },
  { name: 'Powertrain integration', blurb: 'Installing the kit engine: intake, exhaust, cooling, fuel system and final drive.', open: true },
  { name: 'Electronics & data', blurb: 'Wiring harness, ECU calibration, sensors, and the data acquisition that makes testing mean something.', open: true },
  { name: 'Bodywork & aero', blurb: 'Fairing design, CFD, mould making and composite layup.', open: true },
  { name: 'Business & operations', blurb: "Budget control, sponsorship, freight and customs, travel, and the team's public face.", open: true },
];

/**
 * Leadership shown on the Team page. Fill in name and photo as roles are filled — a blank name
 * shows the role as open and links to the member application. Photos go in public/team/.
 */
export const leadership: { role: string; name: string; photo?: string }[] = [
  { role: 'Team Principal', name: 'Mario T Hernandez Jr' },
  { role: 'Technical Director', name: 'John Paul Moreno', photo: '/team/john-paul-moreno.jpg' },
  ...subteams.map((t) => ({ role: `${t.name} lead`, name: '' })),
  { role: 'Faculty tutor', name: 'Dr. Adrian Rodriguez', photo: '/team/adrian-rodriguez.jpg' },
];

/**
 * Sponsor logos, shown on the Sponsor page (and on the home page once there is at least one).
 * Logos go in public/sponsors/ — e.g. { name: 'Acme', logo: '/sponsors/acme.png', url: 'https://acme.com' }.
 */
export const sponsors: { name: string; logo: string; url?: string }[] = [];

/** Sponsorship tiers. These amounts are placeholders — set them to what you actually want. */
export const tiers = [
  { name: 'Paddock', amount: '$1,000+', perks: ['Logo on the website and team media', 'Season updates and build photos', 'Invitation to the roll-out'] },
  { name: 'Grid', amount: '$5,000+', perks: ['Logo on the fairing and pit board', 'Everything in Paddock', 'Resume book and a recruiting visit'], lead: true },
  { name: 'Works', amount: '$15,000+', perks: ['Title placement on the bike and team truck', 'Everything in Grid', 'Design reviews with the team, on your terms'] },
];

export const wordmark = { src: asset('/logos/bike.png'), alt: 'Texas Moto Racing bike wordmark', caption: 'Wordmark · the bike' };

export const marks = [
  { src: asset('/logos/crest.png'), alt: 'Crest', caption: 'Crest · official' },
  { src: asset('/logos/plate.png'), alt: 'Number board', caption: 'Number board · livery' },
  { src: asset('/logos/speed.png'), alt: 'Speed mark', caption: 'Speed mark · apparel' },
];

/** The HornsLink registration answers, shown to prospective members. */
export const membership = [
  { k: 'Commitment', v: '4–8 hours a week in normal build periods; 10–15 in the weeks before a competition deadline.' },
  { k: 'Dues', v: 'None. Membership is free.' },
  { k: 'Who can join', v: 'Any major, any year, any experience level. No riding background needed.' },
  { k: 'How to join', v: 'Interest form, then a short written application. Decisions in 1–2 weeks. No audition, no probationary period.' },
  { k: 'Recruiting', v: 'First three weeks of fall, a smaller round in early spring, and rolling year-round as subteams need people.' },
];
