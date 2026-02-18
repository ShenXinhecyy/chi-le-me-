
import React, { useState } from 'react';
import { AppView } from './types';
import ModeSelection from './views/ModeSelection';
import ElderlyDashboard from './views/ElderlyDashboard';
import YouthDashboard from './views/YouthDashboard';
import CDTAssessment from './views/CDTAssessment';
import VoiceJournal from './views/VoiceJournal';
import CognitiveTrends from './views/CognitiveTrends';
import GodMode from './views/GodMode';
import PassiveMonitoring from './views/PassiveMonitoring';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('MODE_SELECTION');

  const renderView = () => {
    switch (currentView) {
      case 'MODE_SELECTION':
        return <ModeSelection onSelect={(mode) => setCurrentView(mode === 'elderly' ? 'ELDERLY_DASHBOARD' : 'YOUTH_DASHBOARD')} onAdmin={() => setCurrentView('GOD_MODE')} />;
      case 'ELDERLY_DASHBOARD':
        return <ElderlyDashboard onNavigate={setCurrentView} />;
      case 'YOUTH_DASHBOARD':
        return <YouthDashboard onNavigate={setCurrentView} />;
      case 'CDT_ASSESSMENT':
        return <CDTAssessment onBack={() => setCurrentView('ELDERLY_DASHBOARD')} />;
      case 'VOICE_JOURNAL':
        return <VoiceJournal onBack={() => setCurrentView('ELDERLY_DASHBOARD')} />;
      case 'COGNITIVE_TRENDS':
        return <CognitiveTrends onBack={() => setCurrentView('YOUTH_DASHBOARD')} />;
      case 'GOD_MODE':
        return <GodMode onBack={() => setCurrentView('MODE_SELECTION')} onNavigate={setCurrentView} />;
      case 'PASSIVE_MONITORING':
        return <PassiveMonitoring onBack={() => setCurrentView('GOD_MODE')} />;
      default:
        return <ModeSelection onSelect={() => {}} onAdmin={() => {}} />;
    }
  };

  return (
    <div className="min-h-screen max-w-2xl mx-auto shadow-2xl relative bg-background-dark overflow-hidden flex flex-col">
      {renderView()}
    </div>
  );
};

export default App;
