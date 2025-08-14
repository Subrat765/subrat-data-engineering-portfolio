import * as React from 'react';

type Props = { value: number; className?: string };
export function Progress({ value, className }: Props) {
  return (
    <div className={className} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div style={{ width: `${value}%` }} />
    </div>
  );
}
