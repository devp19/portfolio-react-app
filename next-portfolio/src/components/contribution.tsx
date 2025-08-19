// components/contribution.tsx
'use client';
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from '@/components/ui/kibo-ui/contribution-graph';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export type Activity = {
  date: string;
  count: number;
  level: number;
};

type ContributionProps = {
  data: Activity[];
  total: number;
};

const Example = ({ data, total }: ContributionProps) => (
  <TooltipProvider>
    <ContributionGraph data={data} totalCount={total} style={{ marginTop: '1rem' }}>
      <ContributionGraphCalendar>
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  className="cursor-pointer"
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{activity.date}</p>
              <p>{activity.count} contributions</p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>
      <ContributionGraphFooter />
    </ContributionGraph>
    <div
        className="mt-2 text-left text-sm text-zinc-500"
        style={{ fontSize: '0.8rem', lineHeight: '1.25rem' }}
      >
        {total} contributions in 2025
      </div>
  </TooltipProvider>
);

export default Example;
