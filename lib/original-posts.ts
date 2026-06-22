import type { PortableTextBlock } from '@portabletext/types';
import type { Post } from './sample-posts';

type Item = [style: string, text: string];

/** Build PortableText blocks from a simple [style, text] list. */
function blocks(items: Item[]): PortableTextBlock[] {
  return items.map(([style, text], i) => ({
    _type: 'block',
    _key: `b${i}`,
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: `b${i}s0`, text, marks: [] }],
  })) as PortableTextBlock[];
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`;

/**
 * Original long-form essays written for the site. These render as internal
 * posts at /blog/[slug] with full body content.
 */
export const originalPosts: Post[] = [
  {
    _id: 'orig-vibecoding',
    title: 'Vibecoding is a validation tool. It is not a foundation.',
    slug: 'vibecoding-is-a-validation-tool-not-a-foundation',
    excerpt:
      'For the founder who shipped an MVP in a weekend and is quietly dealing with the fallout — a mental model for when to vibe and when to build.',
    publishedAt: '2026-06-18',
    readingTime: 9,
    tags: ['Vibecoding', 'Engineering', 'Founders'],
    author: 'Taiwo',
    coverImage: unsplash('1555066931-4365d14bab8c'),
    body: blocks([
      [
        'normal',
        'The pitch is intoxicating, and I understand why. You open Lovable or Bolt or Replit on a Friday night, you describe the thing you have wanted to build for two years, and by Sunday you are holding a working app. Real screens. Real buttons. A login that logs you in. For the first time, the gap between the idea in your head and a thing on a screen is measured in hours, not in the salary of an engineer you cannot afford. The story writes itself: domain expertise finally beats engineering skill. You posted about it. People clapped. You deserved the clap.',
      ],
      [
        'normal',
        'Then a real person used it.',
      ],
      [
        'normal',
        'Not you, clicking through the path you already know works. A stranger, on a phone you have never seen, on a network you do not control, doing the one thing you never tested. They hit sign-up and the confirmation email never arrives. Or it arrives, and the link goes to a page that loads forever. Or they pay, and the payment succeeds, and your app forgets it happened. The thing that worked forty times in a row for you fails the first time it matters, and you find out from a one-line message that just says "is this broken?"',
      ],
      ['h2', 'The wall nobody posts about'],
      [
        'normal',
        'Here is the part the weekend-build threads leave out. It is two in the morning. A query that ran fine in development is timing out in production, and you do not know why, because you never knew how it worked in the first place. You go back to the AI that built it. You paste the error. It suggests a fix. The fix does not work, because the model has lost the thread — the context window has rolled past the decisions it made on Saturday, so it is now confidently guessing about code it no longer remembers writing. You are debugging a stranger’s codebase, and the stranger is a machine that has forgotten the crime.',
      ],
      [
        'normal',
        'This is not "technical debt." Technical debt is an abstraction you can put on a roadmap. This is concrete and it is happening to you tonight, while a customer who gave you money waits for an answer you cannot give. The difference between those two things is the difference between reading about a fire and standing in one.',
      ],
      ['h2', 'The product you cannot defend'],
      [
        'normal',
        'Underneath the broken auth flow is something more uncomfortable than a bug. Vibecoding hands you a product you cannot fully defend. When it breaks, you have exactly two moves: prompt your way out, or be stuck. There is no third option, because the third option — actually understanding the system well enough to reason about it — is the thing you skipped to go fast. Most of the time prompting works, and that is the trap. It works often enough that you never learn to do without it, and then one day it does not work, and the floor is just gone.',
      ],
      [
        'normal',
        'A demo only has to survive you. A business has to survive everyone else. The moment you have paying customers, you have made promises — that their data is safe, that the thing will be up when they need it, that money moves correctly. Those promises do not care how the code was written. And at some point you will hire a developer, because you have to, and they will open the codebase, and they will go quiet in the particular way engineers go quiet when they are deciding how to tell you something. They will ask why the auth is rolled by hand. They will ask where the tests are. They will ask what happens when two people do the same thing at the same time. If your only honest answer to every hard question is "the AI wrote it," you have not built a company. You have built a thing that has to be rebuilt, and you are paying full price to start over.',
      ],
      ['h2', 'A model that actually helps'],
      [
        'normal',
        'So here is the distinction I wish someone had handed me, stated plainly, before I confused speed with progress. Vibecoding is a validation tool. It is not a foundation. Those are different jobs, and almost all the pain comes from using one for the other.',
      ],
      [
        'normal',
        'As a validation tool it is close to miraculous, and you should use it shamelessly. Proving that anyone wants the thing at all. Putting something real in front of ten customers to watch what they actually do instead of what they say. Building the internal tool that saves your ops person four hours a week and only ever has one user who already trusts it. A personal project where the worst case is your own annoyance. In all of these, the cost of being wrong is low, and speed is the entire point. Vibe away.',
      ],
      [
        'normal',
        'It stops being the right tool the moment the thing touches money, user data, or scale. Anything that moves a payment. Anything that stores something a stranger would be hurt to have leaked. Anything that has to keep working when a thousand people show up at once instead of one. Those are foundations, and foundations are not where you find out whether the idea works. They are where you have already decided it does, and now the job is to not let people down.',
      ],
      [
        'normal',
        'I am not going to tell you to learn to code. That advice is lazy and it is often wrong for a founder whose time is better spent selling. The actual skill in 2026 is not coding and it is not prompting. It is knowing which of these two situations you are in — validating or building — and being honest with yourself about it before the bill comes due. Vibe to find out if you are right. Build once you know you are. Confusing the two is the most expensive mistake you can make quickly, and right now it is the easiest one to make.',
      ],
    ]),
  },
  {
    _id: 'orig-founder-os',
    title: 'I spent a year buying tools. What I needed was architecture.',
    slug: 'i-spent-a-year-buying-tools-what-i-needed-was-architecture',
    excerpt:
      'A confession about the year I collected every AI tool that promised leverage — and the week that finally showed me the bill came due in attention, not dollars.',
    publishedAt: '2026-06-10',
    readingTime: 8,
    tags: ['Founder OS', 'AI Tools', 'Systems'],
    author: 'Taiwo',
    coverImage: unsplash('1460925895917-afdab827c52f'),
    body: blocks([
      [
        'normal',
        'For about twelve months, my answer to feeling behind was to buy something. A new AI writer. A smarter inbox. A scheduler that promised to read my mind. A note app that would finally become my second brain. Each one was, on its own, a good decision. I could justify every single purchase, and I did, usually to myself, late at night, with a free trial open in another tab. And still, every Monday, I woke up feeling like the business was ahead of me instead of the other way around.',
      ],
      [
        'normal',
        'I want to be honest about that year, because the story we tell about tools is always a success story, and mine was not. Let me walk you through one ordinary week, because that is where I finally saw the shape of the problem.',
      ],
      ['h2', 'One week'],
      [
        'normal',
        'Monday, a lead came in through a form. The form lived in one place. My list of customers lived in another. So I copied the name, the email, the little note about what they wanted, and I pasted it into the place where I track deals. Five minutes. Nothing. Except I did that four more times that day, and each time I was the integration. I was the wire connecting two tools that had no idea the other existed.',
      ],
      [
        'normal',
        'Tuesday, I wrote a good post with one of my shiny AI tools. It did not know anything about the conversation I had just had with that Monday lead, so I told it. Again. Wednesday, I scheduled three calls, and my scheduler did not know who those people were or what we had already discussed, so before each call I went digging through four apps to reassemble a person I had spoken to a week earlier. Thursday, something I had promised someone fell through a crack, because the promise lived in a message thread and the thread was not anywhere my task list could see it. Friday, I spent the morning doing what I had started calling "reconnecting" — manually carrying information from one tool to another so the week would not unravel.',
      ],
      [
        'normal',
        'That Friday is when it landed. I was not behind because I had too few tools. I was behind because every tool I had added without a way to connect it had quietly levied a tax. Not a tax in dollars, though there was that too. A tax on attention. Each new app meant one more place to check, one more context to rebuild from memory, one more thing that only worked because I was personally standing between it and everything else. I had bought leverage and installed labor.',
      ],
      ['h2', 'The thing I was actually missing'],
      [
        'normal',
        'The problem was never the tools. The problem was the absence of architecture. I had a pile of excellent parts and no design for how they were supposed to hold together, so I had appointed myself the design — the slow, forgetful, easily-distracted human glue holding a dozen smart things in a shape only I could see, and only on a good day.',
      ],
      [
        'normal',
        'When I finally sat down to draw what a real operating layer for a founder would need to hold, it came down to five things, and the value is not in any one of them. It is in the fact that they share.',
      ],
      [
        'normal',
        'First, memory. One place that actually remembers who a person is — every conversation, every promise, every detail — so I never have to reassemble a human being from four apps before a call again. Without shared memory, everything else is just well-organized amnesia.',
      ],
      [
        'normal',
        'Second, communication. The messages cannot live on an island. What I say to someone and what I know about them have to be the same record, or I will keep being the wire that carries one to the other.',
      ],
      [
        'normal',
        'Third, the pipeline. A lead arriving should move forward on its own, drawing on the memory and the conversation, instead of waiting for me to copy it into existence on a Monday afternoon.',
      ],
      [
        'normal',
        'Fourth, content. What I publish should be fed by what I actually know — the real conversations, the real objections, the real customer — not generated in a vacuum and then hand-stuffed with context I have to supply every time.',
      ],
      [
        'normal',
        'Fifth, scheduling. Time is where all of it either becomes real or quietly dies. A scheduled call should arrive already knowing who is on the other end and what we are there to do.',
      ],
      [
        'normal',
        'Memory, communication, pipeline, content, scheduling. Five pillars, one shared spine. The day I stopped shopping for the sixth tool and started asking how the five I needed would talk to each other was the day the business stopped being something I carried and started being something that, finally, carried a little of me.',
      ],
    ]),
  },
  {
    _id: 'orig-bilingual',
    title: "The AI you were sold was built for people who only think in one language.",
    slug: 'the-ai-you-were-sold-was-built-for-one-language',
    excerpt:
      'An op-ed for the operators running real businesses in two languages, and the friction no product page will admit out loud.',
    publishedAt: '2026-05-22',
    readingTime: 7,
    tags: ['Bilingual', 'AI', 'Market Analysis'],
    author: 'Taiwo',
    coverImage: unsplash('1486312338219-ce68d2c6f44d'),
    body: blocks([
      [
        'normal',
        'A customer called me on a Tuesday, in Spanish, upset about a delivery, and I sat down afterward to draft the apology and the fix. I opened the AI everyone tells me to use. And before I could write a word that was usable, I had to do something the product never anticipated: I had to translate the customer. Not her words — those I had. I had to translate her. The fact that in her world an apology that leads with an excuse is an insult. The fact that the warmth has to come first or the rest does not land. The fact that the way she described the problem was not literal and I would mangle everything if I treated it as if it were. I was not prompting a tool. I was teaching it a culture, in real time, so it could help me with a person it was never designed to imagine.',
      ],
      [
        'normal',
        'I think about that moment a lot, because it is the small, daily version of something nobody in tech will say plainly: most of these tools were built for someone who thinks, sells, and operates in exactly one language, and quietly assumes everyone worth serving does the same.',
      ],
      [
        'normal',
        'You feel it as friction, and friction is easy to blame on yourself. You write your prompt in English because that is where the model is sharpest, and you ask it for Spanish, and what comes back is technically Spanish and emotionally nothing. It is the Spanish of an airport sign. Correct, lifeless, faintly foreign to the very people who are supposed to feel at home in it. So you rewrite it by hand, adding back the warmth and the rhythm and the small signals that tell a reader you are one of them. You do this every time. You have stopped noticing that you do it, which is exactly how a tax becomes invisible.',
      ],
      [
        'normal',
        'And it is a tax. Every piece of content takes you longer than it takes your monolingual competitor, because you are doing a second job the tool was supposed to do. Every nuance you lose is a customer who feels, without being able to say why, that this business does not quite get them. You are paying in time on the input and in trust on the output, and the people being quietly left behind are not a niche. They are the operators serving the communities that monolingual founders cannot reach at all — which, if anyone were measuring it honestly, is the opposite of a small market.',
      ],
      [
        'normal',
        'This is the part where I am supposed to be angry, and I am not, because anger is not useful and this is not a complaint. It is a market analysis, and the market is being mispriced. There is a population of founders who can sell to two worlds at once, who carry the cultural fluency that is the single hardest thing to fake, and the tools they are handed treat that fluency as a problem to work around instead of the advantage it is. Someone is going to notice that the people doing twice the work are also sitting on twice the reach. Someone is going to build for them on purpose.',
      ],
      [
        'normal',
        'What would that even look like? Not a translate button bolted onto an English brain. A tool that holds a customer in both languages at once and knows they are the same person, so the context does not evaporate when the language switches. A tool you can speak to in whichever language the thought arrived in, that answers in the language the moment calls for, without you ever acting as the bridge. One that treats cultural context as something it should already know about the people you serve, rather than something you have to load by hand into every prompt, every time, forever. A tool that assumes, from the first screen, that operating across two languages is not an edge case to be tolerated. It is the whole job.',
      ],
      [
        'normal',
        'Until then, those of us who run our businesses in more than one language will keep paying the quiet tax, doing the second job, translating not just words but entire worlds so a machine can keep up with a customer it was never built to picture. I wrote this down because I am tired of pretending the friction is mine. It is not. It is a design decision someone made, and a design decision can be unmade. The first step is saying it out loud.',
      ],
    ]),
  },
  {
    _id: 'orig-hustle',
    title: "You didn't build a business. You built a job you can't quit.",
    slug: 'you-didnt-build-a-business-you-built-a-job-you-cant-quit',
    excerpt:
      'Hustle became a brand, and the brand is keeping you broke and tired. A hard conversation about whether anything you built can run without you in the room.',
    publishedAt: '2026-04-30',
    readingTime: 7,
    tags: ['Founders', 'Hustle Culture', 'Systems'],
    author: 'Taiwo',
    coverImage: unsplash('1611162617474-5b21e879e113'),
    body: blocks([
      [
        'normal',
        'I am going to describe someone, and I want you to tell me, honestly, how much of it is you.',
      ],
      [
        'normal',
        'You are first in. You are last out. You answer the message that comes in at nine on a Sunday because if you do not, who will. You have not taken a real vacation in three years, and the one time you tried, you spent it on your phone in a hotel bathroom so your family would not see. You wear the exhaustion like a medal. When people ask how you do it, you say the word "passion," and you mean it, and that is the saddest part — you mean it.',
      ],
      [
        'normal',
        'Here is the thing nobody close to you will say, so I will. That is not a business. That is a job. You are not the owner of the thing; you are the single most important employee, and you cannot be fired, promoted, or replaced, which sounds like power and is actually a cage. You built yourself a position you can never leave, and then you branded the not-leaving as dedication.',
      ],
      [
        'normal',
        'Hustle did that. Somewhere along the way, hustle stopped being a phase you push through to reach something and became a personality you perform on the internet. We started congratulating the grind itself, as if tiredness were the product. And a whole generation of founders learned to measure their seriousness by how depleted they are, which is a fantastic way to keep people busy, broke, and too exhausted to notice the difference between motion and progress.',
      ],
      [
        'normal',
        'So let me move the question. The question was never how hard you work. The question is whether the business behaves any differently on the day you are not in the room. If you got sick — really sick, gone for a month — does the thing keep its promises to customers, or does it quietly stop being a business and become a voicemail? Be precise with yourself. Not "would it survive." Would it run.',
      ],
      [
        'normal',
        'For most founders, the honest answer is no, and the reason is not laziness. It is that everything important lives in one head — yours. How the work actually gets done is not written anywhere; it is just known, by you. The repetitive things that eat your week are done by you because teaching someone else felt slower than doing it, every single time, until "every single time" became your entire life. And the people who do work for you cannot actually decide anything, because every real decision routes back through you, so they are not a team. They are hands waiting for your head.',
      ],
      [
        'normal',
        'For the thing to run without you, three things have to become true, and none of them are comfortable. The way the work gets done has to leave your head and live somewhere outside it, written plainly enough that someone who is not you can follow it — which means admitting your process is not actually magic, just undocumented. The repetition has to be handed off, and a great deal of it can now be handed to software that does not get tired or quit, but only if you are willing to stop being the one who does it. And the people around you have to be given real decisions to make and the right to be wrong sometimes, which means giving up the small, constant hit of being needed for everything. That last one is the hardest, because being needed is the drug. It feels like importance. It is actually a leash.',
      ],
      [
        'normal',
        'I am not going to give you five steps. Steps would let you turn this into a task, and a task you can defer. I want you to sit with one thing instead.',
      ],
      [
        'normal',
        'Three years ago, someone should have asked you whether you were building something that could one day let you go, or just building a more elaborate way to never leave. Nobody did. So I am asking now, and the uncomfortable part is that you already know the answer, and you have known it for a while, and the work you are so proud of has been very good at keeping you too busy to say it out loud.',
      ],
    ]),
  },
  {
    _id: 'orig-breach',
    title: 'The bill that did not make sense: what a breach actually feels like',
    slug: 'the-bill-that-did-not-make-sense-what-a-breach-feels-like',
    excerpt:
      'Not the technical breakdown — the human one. The charge that made no sense, the 72 hours after, and the three changes I would beg every founder to make this week.',
    publishedAt: '2026-03-18',
    readingTime: 8,
    tags: ['Security', 'Founders', 'Infrastructure'],
    author: 'Taiwo',
    coverImage: unsplash('1550751827-4bd374c3f58b'),
    body: blocks([
      [
        'normal',
        'It started with a number. I was half-awake, scrolling through an email I almost did not open, and there was a charge from one of our service providers that was wrong by an amount that did not make sense. Not double. Not a billing mistake. A figure with too many digits in it, the kind your brain refuses to read correctly the first time, so you read it again, and then a third time, and somewhere in that third read the bottom drops out of your stomach. You already know. Before you understand anything, you know.',
      ],
      [
        'normal',
        'I am writing this the way a friend would tell you over coffee, because everything I found afterward was written for engineers at companies with security teams, and that was not me, and it is probably not you. I had one person on the technical side and a real business with real customers, and I want to tell you what the next three days were actually like, because nobody warned me.',
      ],
      ['h2', 'The first 72 hours'],
      [
        'normal',
        'The first thing that surprised me was how alone you are. You assume that the moment you report this, someone competent and calm takes over. They do not. You enter a queue. You explain what happened to a support person who did not write the playbook and cannot deviate from it, and then you explain it again to a different one, and you start to realize the script is designed to slow you down, not help you. You are bleeding and you are on hold.',
      ],
      [
        'normal',
        'The second thing was the documentation. To get anyone to take it seriously, I had to build a case from nothing, in real time, while exhausted. Timestamps. Screenshots. A timeline of who accessed what and when, assembled out of logs I had never looked at before and barely understood. I was doing forensic work on my own business at two in the morning, learning the tools as I went, because there was no record of normal to compare the abnormal against. I had never written down what our own systems were supposed to look like, so I could not prove what they were not supposed to be doing.',
      ],
      [
        'normal',
        'The third thing was the quiet, specific grief of realizing the platform does not care about you the way you cared about it. You trusted it. You built your livelihood on top of it. And in the worst moment, it treated you like a ticket number, because to it, that is what you are. That is not cruelty. It is just the truth of the arrangement, and you only feel it when you need them to feel it too.',
      ],
      ['h2', 'Why we let this happen'],
      [
        'normal',
        'When the adrenaline drained, I had to ask the harder question: how was I this exposed? And the answer was not that I was ignorant. I knew, in the abstract, all the things I was supposed to do. The real answer is misplaced trust. I trusted that because nothing had gone wrong, nothing would. I trusted that the defaults were safe. I trusted that this was the kind of thing that happened to bigger or more careless people. Founders do not underprotect their infrastructure because they do not understand the risk. They underprotect it because the work of protecting it is invisible and dull right up until the single day it is the only thing that matters, and that day never feels like today.',
      ],
      ['h2', 'Three things, this week'],
      [
        'normal',
        'I am not going to send you to an enterprise vendor or hand you a checklist of forty controls. I want you to do three things this week, and they are the three I wish someone had made me do.',
      ],
      [
        'normal',
        'Turn on two-factor authentication everywhere that money or customer data can be reached, and do it with an app or a hardware key, not text messages. This one change closes the door that most of these incidents walk through, and it takes an afternoon you will never miss.',
      ],
      [
        'normal',
        'Set up billing and usage alerts on every account that can charge you, with a threshold low enough to wake you up. The reason a breach gets expensive is not that it happens; it is that it runs for days before anyone notices. The whole disaster I lived through was, underneath, a notification I never set up.',
      ],
      [
        'normal',
        'Stop sharing one login. Every person who touches your systems gets their own access, scoped to only what they need, so that when something goes wrong you can see who, and you can shut one door without locking everyone out. Shared credentials feel efficient until the day you cannot tell your own people apart from a stranger.',
      ],
      [
        'normal',
        'None of this is sophisticated. That is the point. The gap between me and the version of me who would have slept through that month was not expertise. It was three boring decisions I kept meaning to make and never did, because the business felt fine, right up until the morning it did not. Make them before you have your own number to stare at. You do not want to learn this the way I did.',
      ],
    ]),
  },
];
