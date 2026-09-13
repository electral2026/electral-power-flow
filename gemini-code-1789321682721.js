import React, { useState } from 'react';
import { 
  Zap, 
  Activity, 
  BatteryCharging, 
  Sun, 
  ArrowUpRight, 
  ShieldAlert, 
  Cpu, 
  RefreshCw, 
  Search, 
  Bell, 
  User,
  Sliders
} from 'lucide-react';

export default function App() {
  const [systemState] = useState({
    solarGen: '28.5 kW',
    gridFlow: '10.2 kW',
    consumption: '18.3 kW',
    batteryLevel: '85%',
  });

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 p-4 md:p-6 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl shadow-lg shadow-cyan-500/10">
            <Zap className="text-cyan-400 w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-wider text-white">ELECTRAL</h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                POWERFLOW
              </span>
            </div>
            <p className="text-xs text-slate-400">Plataforma de Monitoramento e Inteligência Energética</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Buscar unidade, inversor..." 
              className="w-full bg-slate-900/90 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
            />
          </div>
          <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Sliders className="w-5 h-5" />
          </button>
          <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard title="GERAÇÃO SOLAR" value={systemState.solarGen} subtitle="+5.2% eficiência hoje" icon={<Sun className="text-amber-400" />} accentColor="border-amber-500/30" />
        <MetricCard title="EXPORTAÇÃO REDE" value={systemState.gridFlow} subtitle="Rede operando estável" icon={<ArrowUpRight className="text-cyan-400" />} accentColor="border-cyan-500/30" />
        <MetricCard title="CONSUMO TOTAL" value={systemState.consumption} subtitle="Carga balanceada" icon={<Activity className="text-indigo-400" />} accentColor="border-indigo-500/30" />
        <MetricCard title="BANCO DE BATERIAS" value={systemState.batteryLevel} subtitle="22.1 kWh de reserva" icon={<BatteryCharging className="text-emerald-400" />} accentColor="border-emerald-500/30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm font-bold tracking-widest text-slate-300 uppercase">Fluxo de Energia ao Vivo</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Sincronizado
              </span>
              <RefreshCw className="w-4 h-4 text-slate-500 ml-2" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center py-8 relative">
            <div className="flex flex-col items-center p-5 bg-slate-900/90 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all">
              <Sun className="w-8 h-8 text-amber-400 mb-2" />
              <span className="text-xs text-slate-400 font-medium">Usina Solar</span>
              <span className="text-base font-bold text-amber-400 mt-1">10.2 kW</span>
            </div>

            <div className="flex flex-col items-center p-5 bg-slate-900/90 border border-cyan-500/40 rounded-xl shadow-lg shadow-cyan-500/5 hover:border-cyan-500 transition-all">
              <Cpu className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-xs text-slate-400 font-medium">Inversor Electral</span>
              <span className="text-base font-bold text-cyan-400 mt-1">18.3 kW</span>
            </div>

            <div className="flex flex-col items-center p-5 bg-slate-900/90 border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all">
              <Activity className="w-8 h-8 text-indigo-400 mb-2" />
              <span className="text-xs text-slate-400 font-medium">Rede Concessionária</span>
              <span className="text-base font-bold text-indigo-400 mt-1">29.7 kW</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur">
          <h2 className="text-sm font-bold tracking-widest text-slate-300 uppercase mb-4">Curva de Carga (24h)</h2>
          <div className="h-48 flex items-end justify-between gap-2 pt-6">
            <Bar height="h-24" color="bg-cyan-500" label="00h" />
            <Bar height="h-32" color="bg-cyan-500" label="04h" />
            <Bar height="h-40" color="bg-emerald-500" label="08h" />
            <Bar height="h-48" color="bg-amber-500" label="12h" />
            <Bar height="h-36" color="bg-emerald-500" label="16h" />
            <Bar height="h-28" color="bg-cyan-500" label="20h" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
        <h2 className="text-sm font-bold tracking-widest text-slate-300 uppercase mb-4 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400" /> Log de Eventos Electral
        </h2>
        <div className="space-y-3">
          <AlertItem title="Sistema Fotovoltaico Operando na Capacidade Máxima" time="há 1 hora" status="Normal" />
          <AlertItem title="Ajuste Automático de Fator de Potência Concluído" time="há 3 horas" status="Concluído" />
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, subtitle, icon, accentColor }) {
  return (
    <div className={`bg-slate-900/80 border ${accentColor} p-5 rounded-xl flex justify-between items-start hover:bg-slate-900 transition-all`}>
      <div>
        <p className="text-xs font-bold text-slate-400 tracking-wider mb-1">{title}</p>
        <h3 className="text-2xl font-black text-white">{value}</h3>
        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
      </div>
      <div className="p-2.5 bg-slate-800/80 rounded-xl">{icon}</div>
    </div>
  );
}

function Bar({ height, color, label }) {
  return (
    <div className="flex flex-col items-center flex-1 h-full justify-end">
      <div className={`w-full ${height} ${color} rounded-t-md opacity-80 hover:opacity-100 transition-all`}></div>
      <span className="text-[11px] text-slate-500 mt-2 font-medium">{label}</span>
    </div>
  );
}

function AlertItem({ title, time, status }) {
  return (
    <div className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl text-xs">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span className="text-slate-300 font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <span>{time}</span>
        <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-semibold">{status}</span>
      </div>
    </div>
  );
}