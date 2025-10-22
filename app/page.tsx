import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import InfoBox from '@/app/components/ui/InfoBox';

export default function Home() {
  return (
    <div className="">
      <header className="flex w-full justify-end p-4">
        <Button type="primary" icon="default" text="Join us" />
        <Button type="primary" icon="default" text="Get in touch" />
      </header>
      <main className="flex flex-row">
        <aside className="w-full">
          <p className="">Hello World</p>
        </aside>
        <section className="w-full max-w-[563px]">
          <InfoBox
            subheading="The Office of Applied Compute® • 25th October, 2025"
            heading="Agent workforces are coming; this is now a fact."
          >
            <p>
              The same way companies today compete by having the best human workforce, companies
              building for the future will compete by having the best agent workforce supporting
              their human bosses.
            </p>
            <div className="flex flex-col gap-3">
              <p>
                Like human top performers, agent top performers must be intelligent, dedicated, and
                the best in the world at what they do. And like elite employees, they are
                non-fungible; they must be highly specialized for your industry, your company, and
                your work.
              </p>

              <p>We call these Special Agents, and we are already building them today.</p>

              <p>
                The most advanced companies have already captured the easy wins from off-the-shelf,
                general-purpose models. Now they&apos;re moving on to specialized AI, custom-built
                for their own operations.
              </p>

              <p>
                These frontier enterprises want a purpose-built, in-house agent workforce: not just
                general AI or models that are good at tasks, but systems that are the best in the
                world at their tasks — learning continuously. Think of it as SOTA-as-a-Service.
              </p>

              <p>
                Your employees aren&apos;t fungible. You wouldn&apos;t share your top performers
                with competitors. You hire the best because excellence depends on specialization.
                The same is true for agents.
              </p>

              <p>
                When you use generic or outsourced talent, you don&apos;t have an edge. You might be
                good, but you&apos;ll never be great. Greatness comes from mastery — from systems
                and people purpose-built for your mission.
              </p>

              <p>
                We are seeing this with early customers including Cognition, DoorDash, Mercor, and
                Microsoft. Together we are building and validating models and agents in days instead
                of months, accelerating time to value while providing the assurance needed to scale
                AI responsibly. What was manual, expensive, and risky becomes a disciplined path to
                adoption and differentiation.
              </p>

              <p>
                We are fortunate to be supported by Benchmark, Sequoia, Lux, Greenoaks, Hanabi
                Capital, and angels like Elad Gil. Their backing helps us grow the team, scale
                deployments, and develop the first generation of agent workforces. Our team pairs
                deep research experience with hard-won enterprise execution. We worked on ChatGPT
                and reinforcement learning systems at OpenAI, on the data foundations and model
                customization business at Scale AI, and we bring additional expertise from Together
                AI, Two Sigma, and Watershed. We know how to turn new ideas into production systems
                that work.
              </p>

              <p>
                Just as our agents Special Agents are fully owned and integrated within your
                company, the process for building them is fully owned and integrated within ours. We
                run our business the same way we serve our customers - we build it soup to nuts and
                do it all in house for full quality control, because we believe we can do it better
                than anybody else.
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
                founders all worked on different parts of this problem while at OpenAI. Yash helped
                start the RL agents effort at OpenAI and was a key researcher behind Codex, the
                company&apos;s agentic software engineer. Rhythm was part of the team that created
                RL for reasoning and was a core contributor to o1, the first reasoning model. Linden
                was a key contributor for ML systems, infrastructure, and correctness in
                OpenAI&apos;s high-compute RL runs.
              </p>

              <p>
                Two-thirds of the team are former founders, and everyone brings a deep technical
                background, from top AI researchers to math olympiad winners.
              </p>

              <p>
                We&apos;re unlocking the full potential of AI through humanity&apos;s greatest
                engine of progress: thriving corporations in a free market.
              </p>

              <p>If this mission speaks to you, you should speak with us.</p>
            </div>
          </InfoBox>
        </section>
      </main>
    </div>
  );
}
