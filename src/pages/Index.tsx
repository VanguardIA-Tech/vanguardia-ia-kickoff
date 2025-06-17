
import { ProgressBar } from '@/components/ProgressBar';
import { NavigationControls } from '@/components/NavigationControls';
import { HeroSection } from '@/components/HeroSection';
import { WhySection } from '@/components/WhySection';
import { StatsSection } from '@/components/StatsSection';
import { ProgramSection } from '@/components/ProgramSection';
import { MethodologySection } from '@/components/MethodologySection';
import { AgentsSection } from '@/components/AgentsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { ROISection } from '@/components/ROISection';
import { DeliverablesSection } from '@/components/DeliverablesSection';
import { ParticipationSection } from '@/components/ParticipationSection';
import { MetricsSection } from '@/components/MetricsSection';
import { QASection } from '@/components/QASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-vanguardia-dark text-white overflow-x-hidden">
      <ProgressBar />
      <NavigationControls />
      
      <HeroSection />
      <WhySection />
      <StatsSection />
      <ProgramSection />
      <MethodologySection />
      <AgentsSection />
      <TimelineSection />
      <ROISection />
      <DeliverablesSection />
      <ParticipationSection />
      <MetricsSection />
      <QASection />
    </div>
  );
};

export default Index;
