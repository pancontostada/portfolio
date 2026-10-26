import search from './assets/home/search.png'
import mclResearchPreview from './assets/home/mcl-research-preview.webp'
import mclDsPreview from './assets/home/mcl-ds-preview.webp'
import budderPreview from './assets/home/budder-preview.webp'

// Case studies in the order they appear on the home page; each one links to the next.
// The one marked featured is pulled out above the list on the home page.
export const projects = [
    {
        to: '/projects/search',
        image: search,
        title: 'Search grows up',
        summary: 'Redesigned test-catalog search for Mayo Clinic Labs: one search bar, Fast Facts, labels, filters and an AI overview built to earn trust.',
        tags: ['Product design', 'Research', 'AI'],
        featured: true,
    },
    {
        to: '/projects/mclResearch',
        image: mclResearchPreview,
        title: 'Usability testing at MCL',
        summary: 'Led 7 moderated and 3 asynchronous studies, and turned each into recommendations developers could build.',
        tags: ['Research', 'Synthesis'],
    },
    {
        to: '/projects/mclDs',
        image: mclDsPreview,
        title: 'A design system MVP',
        summary: 'Audited 16 high-traffic pages, then built buttons, forms and tables with tokens in Figma and React. Dark mode was then a few clicks away.',
        tags: ['Design systems', 'Front end'],
    },
    {
        to: '/projects/budder',
        image: budderPreview,
        title: 'Budder',
        summary: "Master's thesis: a social reading app that turns a podcast moment into a conversation, shaped by 13 interviews.",
        tags: ['0 to 1', 'Mobile'],
    },
]
