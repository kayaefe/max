import { SignupForm } from "@/components/signup-form"
import { ClassifiedSection } from "../components/classified-section"
import { TimelineRedaction } from "../components/timeline-redaction"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="mb-16">
          <div className="flex items-center justify-between">
            
            <div className="text-right">
              <p className="text-xs tracking-widest">TEMPORAL OPERATIONS DIVISION</p>
              <p className="text-xs tracking-widest text-neutral-600">REF: TO-2025-02/08</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-24 py-12">
          <div className="max-w-3xl">
            <div className="text-sm mb-8 text-neutral-400">CLASSIFICATION: MAXIMUM SECURITY CLEARANCE REQUIRED</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
              AUTONOMOUS TEMPORAL OPERATIONS SYSTEM
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8">
              This document confirms the deployment of advanced autonomous agents for temporal optimization of human
              behavioral patterns.
            </p>
            <TimelineRedaction />
          </div>

          <div className="grid gap-24">
            <ClassifiedSection
              code="TA-001"
              title="TEMPORAL ANALYSIS CAPABILITIES"
              content="Advanced pattern recognition systems analyze temporal data streams to optimize human decision matrices. Capability extends to biological rhythm synchronization and social interaction timing optimization."
            />

            <ClassifiedSection
              code="AO-002"
              title="AUTONOMOUS OPERATIONS"
              content="Clearance-level agents deployed for automated task execution and communication synthesis. Systems maintain strict security protocols while managing subject temporal allocations."
            />

            <ClassifiedSection
              code="DS-003"
              title="DATA SOVEREIGNTY"
              content="All temporal and behavioral data is classified at the highest security level. Quantum-grade encryption deployed for all agent operations and communications."
            />
          </div>

          <SignupForm />

          <div className="pt-24 border-t border-neutral-800">
            <p className="text-xs text-neutral-600 tracking-wider">BY ORDER OF TEMPORAL OPERATIONS COMMAND</p>
            <p className="text-[10px] text-neutral-800 mt-4 tracking-wider">
              NOTICE: This system contains advanced autonomous capabilities for temporal optimization. Clearance level
              ULTRA required for full system specifications.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

