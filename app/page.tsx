/**
 * Home Page
 *
 * Main landing page for Applied Compute showcasing:
 * - Company mission and vision
 * - Team member profiles
 * - Career opportunities
 *
 * Structure:
 * 1. Loading overlay animation
 * 2. Fixed header with navigation
 * 3. Main content with InfoBox sections
 * 4. Footer with branding and contact
 */

import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import InfoBox from '@/app/components/ui/InfoBox';
import ProfileCard from '@/app/components/ui/ProfileCard';
import LoadingOverlay from '@/app/components/LoadingOverlay';

// ============================================================================
// DATA
// ============================================================================

/**
 * Team member data for profile cards
 * Each member includes name, title, and background
 */
const teamMembers = [
  {
    name: 'Yash Patil',
    title: 'Co-Founder, CEO',
    background: 'Ex-OpenAI Codex SWE Agent Researcher',
  },
  {
    name: 'Rhythm Garg',
    title: 'Co-Founder, CTO',
    background: 'Ex-OpenAI Reinforcement Learning Researcher',
  },
  {
    name: 'Linden Li',
    title: 'Co-Founder, Chief Architect',
    background: 'Ex-OpenAI Systems and Infra Researcher',
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function Home() {
  return (
    <div className="relative">
      {/* ================================================================== */}
      {/* LOADING OVERLAY                                                   */}
      {/* ================================================================== */}
      <LoadingOverlay />

      {/* ================================================================== */}
      {/* MOBILE FIXED HEADER LOGO                                          */}
      {/* Only visible on mobile (<640px), fixed at top during scroll       */}
      {/* ================================================================== */}
      <div className="bg-background fixed top-0 z-10 w-full pt-16 sm:hidden">
        <Image
          className="bg-background w-full px-4"
          src="/logo-Applied-Compute.png"
          alt="Applied Compute Logo"
          width={300}
          height={49}
        />
      </div>

      {/* ================================================================== */}
      {/* HEADER                                                             */}
      {/* Mobile logo + desktop/mobile navigation buttons                   */}
      {/* ================================================================== */}
      <header>
        {/* Mobile logo (static, at top of page) */}
        <Image
          className="bg-background mt-16 w-full px-4 sm:hidden"
          src="/logo-Applied-Compute.png"
          alt="Applied Compute Logo"
          width={300}
          height={49}
        />

        {/* Navigation buttons - Desktop layout (hidden on mobile) */}
        <div className="flex w-full justify-end max-sm:px-4 sm:p-4">
          <Button type="primary" icon="default" text="Join us" className="max-sm:hidden" />
          <Button
            type="primary"
            icon="default"
            text="Get in touch"
            className="max-sm:hidden"
            removeBorders={['left']}
          />

          {/* Navigation buttons - Mobile layout (hidden on desktop) */}
          <Button
            type="primary"
            icon="default"
            text="Join us"
            className="w-full sm:hidden"
            removeBorders={['top']}
          />
          <Button
            type="primary"
            icon="default"
            text="Get in touch"
            removeBorders={['left', 'top']}
            className="w-full sm:hidden"
          />
        </div>
      </header>

      {/* ================================================================== */}
      {/* MAIN CONTENT                                                       */}
      {/* Two-column layout: sidebar (logo) + content (InfoBox sections)    */}
      {/* ================================================================== */}
      <main className="flex flex-row pt-24 pr-[135px] pb-[112px] max-[1228px]:pr-4 max-[1228px]:pl-4 min-[1800]:pr-[20vw]">
        {/* ---------------------------------------------------------------- */}
        {/* SIDEBAR - Desktop logo (fixed at bottom-left)                   */}
        {/* ---------------------------------------------------------------- */}
        <aside className="relative w-full max-sm:hidden">
          <Image
            className="bg-background fixed bottom-[17.5px] left-[17.5px]"
            src="/logo-Applied-Compute.png"
            alt="Applied Compute Logo"
            width={300}
            height={49}
          />
        </aside>

        {/* ---------------------------------------------------------------- */}
        {/* CONTENT SECTIONS                                                 */}
        {/* ---------------------------------------------------------------- */}
        {/* ============================================================== */}
        {/* SECTION 1: Company Mission & Vision                            */}
        {/* ============================================================== */}
        <section className="flex w-full max-w-[755px] flex-none flex-col gap-3">
          <InfoBox
            subheading={
              <>
                <span className="max-sm:hidden">The Office of </span>
                Applied Compute® • 25th October, 2025
              </>
            }
            heading="Agent workforces are coming; this is now a fact."
          >
            <div className="flex flex-col gap-16">
              <p className="text-foreground-100 font-medium">
                The same way companies today compete by having the best human workforce, companies
                building for the future will compete by having the best agent workforce supporting
                their human bosses.
              </p>
              <div className="text-foreground-100 flex flex-col gap-6">
                <p>
                  Like human top performers, agent top performers must be intelligent, dedicated,
                  and the best in the world at what they do. And like elite employees, they are
                  non-fungible; they must be highly specialized for your industry, your company, and
                  your work.
                </p>

                <p>We call these Special Agents, and we are already building them today.</p>

                <p>
                  The most advanced companies have already captured the easy wins from
                  off-the-shelf, general-purpose models. Now they&apos;re moving on to specialized
                  AI, custom-built for their own operations.
                </p>

                <p>
                  These frontier enterprises want a purpose-built, in-house agent workforce: not
                  just general AI or models that are good at tasks, but systems that are the best in
                  the world at their tasks — learning continuously. Think of it as
                  SOTA-as-a-Service.
                </p>

                <p>
                  Your employees aren&apos;t fungible. You wouldn&apos;t share your top performers
                  with competitors. You hire the best because excellence depends on specialization.
                  The same is true for agents.
                </p>

                <p>
                  When you use generic or outsourced talent, you don&apos;t have an edge. You might
                  be good, but you&apos;ll never be great. Greatness comes from mastery — from
                  systems and people purpose-built for your mission.
                </p>

                <p>
                  We are seeing this with early customers including Cognition, DoorDash, Mercor, and
                  Microsoft. Together we are building and validating models and agents in days
                  instead of months, accelerating time to value while providing the assurance needed
                  to scale AI responsibly. What was manual, expensive, and risky becomes a
                  disciplined path to adoption and differentiation.
                </p>

                <p>
                  We are fortunate to be supported by Benchmark, Sequoia, Lux, Greenoaks, Hanabi
                  Capital, and angels like Elad Gil. Their backing helps us grow the team, scale
                  deployments, and develop the first generation of agent workforces. Our team pairs
                  deep research experience with hard-won enterprise execution. We worked on ChatGPT
                  and reinforcement learning systems at OpenAI, on the data foundations and model
                  customization business at Scale AI, and we bring additional expertise from
                  Together AI, Two Sigma, and Watershed. We know how to turn new ideas into
                  production systems that work.
                </p>

                <p>
                  Just as our agents Special Agents are fully owned and integrated within your
                  company, the process for building them is fully owned and integrated within ours.
                  We run our business the same way we serve our customers - we build it soup to nuts
                  and do it all in house for full quality control, because we believe we can do it
                  better than anybody else.
                </p>

                <p>
                  The work is too delicate to outsource, which is why we &quot;drill our own
                  wells&quot; and handle the last mile: we do it all ourselves, from training and RL
                  to infrastructure to integration, even sending engineers to embed with our
                  customers. We are forward deployed, rear deployed, everywhere deployed. We&apos;re
                  not above being an AI Geek Squad.
                </p>

                <p>
                  If you&apos;re looking to train models from an expensive office and call it a day,
                  this isn&apos;t the place. We build in the field, shoulder to shoulder with
                  customers.
                </p>

                <p>
                  Our team at Applied Compute is small, talent-dense, and focused on impact. Our
                  founders all worked on different parts of this problem while at OpenAI. Yash
                  helped start the RL agents effort at OpenAI and was a key researcher behind Codex,
                  the company&apos;s agentic software engineer. Rhythm was part of the team that
                  created RL for reasoning and was a core contributor to o1, the first reasoning
                  model. Linden was a key contributor for ML systems, infrastructure, and
                  correctness in OpenAI&apos;s high-compute RL runs.
                </p>

                <p>
                  Two-thirds of the team are former founders, and everyone brings a deep technical
                  background, from top AI researchers to math olympiad winners.
                </p>

                <p>
                  We&apos;re unlocking the full potential of AI through humanity&apos;s greatest
                  engine of progress: thriving corporations in a free market.
                </p>

                <p className="font-semibold">
                  If this mission speaks to you, you should speak with us.
                </p>
              </div>
              <Button type="primaryHover" icon="default" text="Get in touch" />
            </div>
          </InfoBox>

          {/* ============================================================== */}
          {/* SECTION 2: Team Profiles                                       */}
          {/* ============================================================== */}
          <InfoBox
            subheading="Our Team"
            heading="We're a close-knit team of researchers and builders redefining the future of AI engineering."
          >
            <div className="flex flex-col gap-0">
              {teamMembers.map((member, index) => (
                <ProfileCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  background={member.background}
                  isLast={index === teamMembers.length - 1}
                />
              ))}
            </div>
          </InfoBox>

          {/* ============================================================== */}
          {/* SECTION 3: Careers                                             */}
          {/* ============================================================== */}
          <InfoBox
            subheading="Careers"
            heading="Ambiguity, setbacks, and obstacles don't shake us. It's to be expected when pioneering."
          >
            <div className="flex flex-col gap-16">
              <p className="text-foreground-100">
                We’re currently hiring for our office in San Francisco.
              </p>
              <Button type="inverted" icon="default" text="View open roles (06)" />
            </div>
          </InfoBox>
        </section>
      </main>

      {/* ================================================================== */}
      {/* FOOTER                                                             */}
      {/* Full-width orange section with logo, company info, and links      */}
      {/* ================================================================== */}
      <footer className="bg-primary relative z-20 h-full min-h-screen w-full py-[66px] pr-[135px] max-[1228px]:px-4">
        <div className="ml-auto flex max-w-[755px] flex-col gap-16">
          {/* Applied Compute logo SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="755"
            height="432"
            viewBox="0 0 755 432"
            fill="none"
            className="h-auto w-full"
          >
            <path
              d="M539.908 287.421C500.23 287.421 468.053 255.244 468.053 215.566C468.053 175.887 500.23 143.711 539.908 143.711C574.658 143.711 603.658 168.4 610.312 201.195H755C747.599 88.8419 654.13 0 539.908 0C475.21 0 417.179 28.5122 377.659 73.6517C374.569 70.1308 371.35 66.6674 367.987 63.3045C283.802 -20.8812 147.305 -20.8812 63.1339 63.3045C-21.0374 147.49 -21.0518 283.987 63.1339 368.158C143.899 448.923 272.808 452.2 357.496 377.988L255.189 275.68C227.295 294.161 189.326 291.115 164.752 266.54C136.699 238.488 136.699 192.975 164.752 164.922C192.804 136.87 238.317 136.87 266.37 164.922C290.944 189.497 293.991 227.465 275.509 255.359L377.774 357.624C377.774 357.624 377.803 357.667 377.817 357.681C417.323 402.706 475.296 431.146 539.908 431.146C654.13 431.146 747.599 342.304 755 229.951H610.312C603.658 262.746 574.658 287.436 539.908 287.436V287.421Z"
              fill="#E7E5E4"
            />
          </svg>

          {/* Company name and tagline */}
          <div className="flex flex-col gap-5 max-sm:mb-72">
            <div>
              <p className="text-background-100 text-center text-[28px] font-semibold">
                Applied Compute
              </p>
              <p className="text-background-100 text-center text-[28px] font-semibold">
                San Francisco, CA, U.S.A.
              </p>
            </div>
            <p className="text-background-100 text-center text-base font-normal">
              Bespoke A.I. for business
            </p>
          </div>

          {/* Footer navigation links */}
          <div className="flex flex-row">
            <Button
              type="invertedHover"
              icon="none"
              text="Privacy Policy"
              className="border-background-200! flex-none"
            />
            <Button
              type="invertedHover"
              icon="none"
              text="Terms"
              removeBorders={['left']}
              className="border-background-200!"
            />
            <Button
              type="invertedHover"
              icon="default"
              text="Get in touch"
              removeBorders={['left']}
              className="border-background-200! w-full"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
