'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  metrics: {
    reputationScore: number;
    networkGrowth: number;
    engagementRate: number;
    tokenValue: number;
    marketCap: number;
    stakingRewards: number;
  };
  outcomes: {
    title: string;
    description: string;
    probability: number;
    impact: 'positive' | 'neutral' | 'negative';
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'startup-founder',
    title: 'Tech Startup Founder',
    description: 'Sarah, a startup founder, leverages her reputation to attract investors and talent',
    metrics: {
      reputationScore: 88,
      networkGrowth: 160,
      engagementRate: 78,
      tokenValue: 2.8,
      marketCap: 28000000,
      stakingRewards: 12
    },
    outcomes: [
      {
        title: 'Venture Capital Interest',
        description: 'High reputation score attracts top-tier VCs, leading to successful funding rounds',
        probability: 75,
        impact: 'positive'
      },
      {
        title: 'Talent Acquisition',
        description: 'Reputation helps attract senior engineers and executives from FAANG companies',
        probability: 70,
        impact: 'positive'
      },
      {
        title: 'Industry Recognition',
        description: 'Featured in TechCrunch and invited to speak at major tech conferences',
        probability: 65,
        impact: 'positive'
      }
    ]
  },
  {
    id: 'content-creator',
    title: 'Digital Content Creator',
    description: 'Alex, a content creator, builds a loyal community and monetizes through reputation',
    metrics: {
      reputationScore: 82,
      networkGrowth: 140,
      engagementRate: 85,
      tokenValue: 1.9,
      marketCap: 15000000,
      stakingRewards: 14
    },
    outcomes: [
      {
        title: 'Brand Partnerships',
        description: 'High reputation attracts premium brand deals and sponsorships',
        probability: 80,
        impact: 'positive'
      },
      {
        title: 'Community Growth',
        description: 'Loyal fan base leads to successful merchandise and course launches',
        probability: 75,
        impact: 'positive'
      },
      {
        title: 'Platform Algorithm Boost',
        description: 'High reputation score leads to increased content visibility',
        probability: 70,
        impact: 'positive'
      }
    ]
  },
  {
    id: 'defi-trader',
    title: 'DeFi Professional',
    description: 'Michael, a DeFi trader, uses reputation to access exclusive pools and better rates',
    metrics: {
      reputationScore: 92,
      networkGrowth: 180,
      engagementRate: 65,
      tokenValue: 4.5,
      marketCap: 45000000,
      stakingRewards: 16
    },
    outcomes: [
      {
        title: 'Premium Pool Access',
        description: 'Reputation grants access to high-yield liquidity pools with lower fees',
        probability: 85,
        impact: 'positive'
      },
      {
        title: 'Early Protocol Access',
        description: 'Invited to private betas of new DeFi protocols',
        probability: 70,
        impact: 'positive'
      },
      {
        title: 'Risk Assessment',
        description: 'Better borrowing rates and higher leverage limits',
        probability: 75,
        impact: 'positive'
      }
    ]
  },
  {
    id: 'freelancer',
    title: 'Global Freelancer',
    description: 'Elena, a freelance designer, builds global credibility through reputation scoring',
    metrics: {
      reputationScore: 78,
      networkGrowth: 130,
      engagementRate: 72,
      tokenValue: 1.6,
      marketCap: 16000000,
      stakingRewards: 11
    },
    outcomes: [
      {
        title: 'Premium Client Access',
        description: 'Reputation score attracts high-paying international clients',
        probability: 80,
        impact: 'positive'
      },
      {
        title: 'Work Flexibility',
        description: 'Able to command better rates and choose preferred projects',
        probability: 75,
        impact: 'positive'
      },
      {
        title: 'Cross-platform Recognition',
        description: 'Reputation transfers across multiple freelance platforms',
        probability: 70,
        impact: 'positive'
      }
    ]
  }
];

const ScenarioModeling = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [isMetricsVisible, setIsMetricsVisible] = useState(true);

  const getMetricColor = (value: number, metric: string) => {
    const thresholds: Record<string, [number, number]> = {
      reputationScore: [60, 80],
      networkGrowth: [100, 150],
      engagementRate: [50, 70],
      tokenValue: [1, 2],
      marketCap: [10000000, 30000000],
      stakingRewards: [5, 10]
    };

    const [low, high] = thresholds[metric];
    if (value >= high) return 'text-emerald-400';
    if (value >= low) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatMetricValue = (value: number, metric: string) => {
    if (metric === 'marketCap') return `$${(value / 1000000).toFixed(1)}M`;
    if (metric === 'tokenValue') return `$${value.toFixed(2)}`;
    if (metric === 'stakingRewards') return `${value}%`;
    if (metric === 'networkGrowth') return `${value}%`;
    if (metric === 'engagementRate') return `${value}%`;
    return value;
  };

  const getMaxValue = (metric: string) => {
    switch (metric) {
      case 'reputationScore':
        return 100;
      case 'networkGrowth':
        return 200;
      case 'engagementRate':
        return 100;
      case 'tokenValue':
        return 10;
      case 'marketCap':
        return 100000000;
      case 'stakingRewards':
        return 20;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full p-6 glassmorphism-dark rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Persona Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white/90 mb-4">Choose Your Path</h3>
          <div className="space-y-3">
            {scenarios.map((scenario) => (
              <motion.div
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedScenario.id === scenario.id
                    ? 'bg-violet-500/20 border border-violet-500/30'
                    : 'bg-black/20 border border-white/5 hover:border-violet-500/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-lg font-medium text-white/90">{scenario.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{scenario.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics and Outcomes */}
        <div className="space-y-6">
          {/* Key Metrics */}
          <div>
            <h3 className="text-xl font-semibold text-white/90 mb-4">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(selectedScenario.metrics).map(([key, value]) => (
                <div key={key} className="bg-black/30 p-4 rounded-lg border border-white/5">
                  <div className="text-sm text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className={`text-lg font-semibold mt-1 ${getMetricColor(value, key)}`}>
                    {formatMetricValue(value, key)}
                  </div>
                  <motion.div
                    className="h-1 mt-2 rounded-full bg-violet-500/20"
                    style={{
                      scaleX: value / getMaxValue(key),
                      transformOrigin: 'left',
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: value / getMaxValue(key) }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-xl font-semibold text-white/90 mb-4">Potential Outcomes</h3>
            <div className="space-y-3">
              {selectedScenario.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="bg-black/30 p-4 rounded-lg border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white/90">{outcome.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{outcome.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`text-lg font-semibold ${
                        outcome.impact === 'positive' ? 'text-emerald-400' :
                        outcome.impact === 'negative' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {outcome.probability}%
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className={`h-1 mt-3 rounded-full ${
                      outcome.impact === 'positive' ? 'bg-emerald-500/30' :
                      outcome.impact === 'negative' ? 'bg-red-500/30' :
                      'bg-yellow-500/30'
                    }`}
                    style={{ width: `${outcome.probability}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${outcome.probability}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioModeling;
