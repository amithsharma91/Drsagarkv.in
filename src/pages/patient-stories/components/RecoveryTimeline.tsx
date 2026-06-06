interface TimelinePhase {
  day: string;
  description: string;
}

interface RecoveryTimelineProps {
  phases: TimelinePhase[];
}

export default function RecoveryTimeline({ phases }: RecoveryTimelineProps) {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-background-300" />

        <div className="flex flex-col gap-6">
          {phases.map((phase, idx) => (
            <div key={phase.day} className="flex items-start gap-5">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  idx === 0
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'bg-background-50 border-accent-200 text-accent-600'
                }`}>
                  <i className={`text-sm ${
                    idx === phases.length - 1
                      ? 'ri-flag-line'
                      : idx === 0
                      ? 'ri-play-circle-line'
                      : 'ri-check-line'
                  }`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-heading font-bold text-foreground-900">{phase.day}</span>
                </div>
                <p className="text-foreground-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
