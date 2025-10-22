import Image from 'next/image';
import Button from '@/app/components/ui/Button';

export default function Home() {
  return (
    <main>
      <p className="font-normal">
        Like human top performers, agent top performers must be intelligent, dedicated, and the best
        in the world at what they do. And like elite employees, they are non-fungible; they must be
        highly specialized for your industry, your company, and your work.
      </p>
      <Button type="primary" icon="default" text="Join us" />
    </main>
  );
}
