'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, IconFatLoss, IconMuscle, IconRecovery, IconLongevity, IconSleep, IconCognitive } from './Icons';
import type { AssessmentAnswers } from '@/lib/assessment';

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

type Step =
  | {
      key: keyof AssessmentAnswers;
      label: string;
      q: string;
      cols: 1 | 2 | 3;
      opts: { v: string; l: string; I?: IconCmp }[];
    };

const STEPS: Step[] = [
  {
    key: 'goal',
    label: 'Step 1 of 5 · Goal',
    q: 'What outcome are you most focused on?',
    cols: 2,
    opts: [
      { v: 'fat-loss', l: 'Fat loss', I: IconFatLoss },
      { v: 'muscle-growth', l: 'Muscle growth', I: IconMuscle },
      { v: 'recovery', l: 'Recovery', I: IconRecovery },
      { v: 'longevity', l: 'Longevity', I: IconLongevity },
      { v: 'sleep', l: 'Sleep', I: IconSleep },
      { v: 'cognitive', l: 'Cognitive', I: IconCognitive },
    ],
  },
  {
    key: 'experience',
    label: 'Step 2 of 5 · Experience',
    q: 'How familiar are you with peptides?',
    cols: 3,
    opts: [
      { v: 'newcomer', l: 'Newcomer' },
      { v: 'some', l: 'Some research' },
      { v: 'experienced', l: 'Experienced' },
    ],
  },
  {
    key: 'risk',
    label: 'Step 3 of 5 · Risk tolerance',
    q: 'How conservative is your approach?',
    cols: 3,
    opts: [
      { v: 'conservative', l: 'Conservative' },
      { v: 'moderate', l: 'Moderate' },
      { v: 'higher', l: 'Higher' },
    ],
  },
  {
    key: 'timeline',
    label: 'Step 4 of 5 · Timeline',
    q: 'When do you want to see results?',
    cols: 2,
    opts: [
      { v: '1-3', l: '1–3 months' },
      { v: '3-6', l: '3–6 months' },
      { v: '6-12', l: '6–12 months' },
      { v: 'long', l: 'Long-term' },
    ],
  },
  {
    key: 'budget',
    label: 'Step 5 of 5 · Budget',
    q: 'What investment level are you comfortable with?',
    cols: 3,
    opts: [
      { v: 'low', l: '£' },
      { v: 'mid', l: '££' },
      { v: 'high', l: '£££' },
    ],
  },
];

type Props = { initialGoal?: string };

export function AssessmentQuiz({ initialGoal }: Props) {
  const router = useRouter();
  const initialAnswers: Record<string, string> = {};
  if (initialGoal) initialAnswers.goal = initialGoal;
  const [step, setStep] = useState(initialGoal ? 1 : 0);
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);

  const cur = STEPS[step];
  const selected = answers[cur.key];

  const onContinue = () => {
    if (step === STEPS.length - 1) {
      const params = new URLSearchParams(answers as Record<string, string>);
      router.push(`/assessment/results?${params.toString()}`);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="quiz quiz--full">
      <div className="quiz__progress" aria-hidden="true">
        {STEPS.map((_, i) => (
          <span key={i} className={i <= step ? 'active' : ''} />
        ))}
      </div>
      <div className="quiz__step">{cur.label}</div>
      <h3 className="quiz__q">{cur.q}</h3>
      <div
        className="quiz__opts"
        style={{
          gridTemplateColumns:
            cur.cols === 3 ? '1fr 1fr 1fr' : cur.cols === 2 ? '1fr 1fr' : '1fr',
        }}
      >
        {cur.opts.map((o) => {
          const I = o.I;
          return (
            <button
              key={o.v}
              type="button"
              className={'quiz__opt' + (selected === o.v ? ' selected' : '')}
              onClick={() => setAnswers((a) => ({ ...a, [cur.key]: o.v }))}
            >
              {I && <I className="quiz__opt-icon" size={16} />}
              {o.l}
            </button>
          );
        })}
      </div>
      <div className="quiz__nav">
        <button
          type="button"
          className="quiz__back"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
        >
          ← Back
        </button>
        <button type="button" className="quiz__next" disabled={!selected} onClick={onContinue}>
          {step === STEPS.length - 1 ? 'Get my results' : 'Continue'}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
