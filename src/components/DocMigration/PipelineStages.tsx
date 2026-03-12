import { CheckCircle } from 'lucide-react';
import { stages } from './constants';

interface PipelineStagesProps {
  currentStage: number;
}

export default function PipelineStages({ currentStage }: PipelineStagesProps) {
  const getStageStyle = (stageId: number) => {
    if (stageId < currentStage) {
      return {
        bg: 'linear-gradient(135deg, #00D492 0%, #00C950 100%)',
        iconColor: 'text-white',
        labelColor: 'text-[#62748E]',
        labelWeight: 'font-normal',
        size: 'w-12 h-12'
      };
    }
    if (stageId === currentStage) {
      if (stageId === 3) {
        return {
          bg: '#FFF0F0',
          iconColor: 'text-[#E11D48]',
          labelColor: 'text-[#5F4050]',
          labelWeight: 'font-medium',
          size: 'w-[52.8px] h-[52.8px]'
        };
      }
      return {
        bg: '#FFEDD4',
        iconColor: 'text-[#F54900]',
        labelColor: 'text-[#5F4050]',
        labelWeight: 'font-medium',
        size: 'w-[52.8px] h-[52.8px]'
      };
    }
    return {
      bg: '#F1F5F9',
      iconColor: 'text-[#90A1B9]',
      labelColor: 'text-[#62748E]',
      labelWeight: 'font-normal',
      size: 'w-12 h-12'
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-[rgba(226,232,240,0.6)] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] p-[33px] mb-6">
      <div className="relative">
        <div className="flex items-start justify-between">
          {stages.map((stage) => {
            const style = getStageStyle(stage.id);
            const Icon = stage.icon;
            const isCompleted = stage.id < currentStage;
            
            return (
              <div key={stage.id} className="flex flex-col items-center" style={{ width: '172.84px' }}>
                <div
                  className={`${style.size} rounded-full flex items-center justify-center relative z-10`}
                  style={{ background: style.bg }}
                >
                  {isCompleted ? (
                    <CheckCircle size={24} className="text-white" />
                  ) : (
                    <Icon size={24} className={style.iconColor} />
                  )}
                </div>
                <span className={`mt-3 text-xs ${style.labelColor} ${style.labelWeight} text-center leading-[150%]`}>
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="absolute top-6 left-0 right-0 h-[2px] -z-0">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-[#E2E8F0]" />
            <div
              className="absolute left-0 h-full transition-all duration-500"
              style={{
                width: `${((currentStage - 1) / 5) * 100}%`,
                background: 'linear-gradient(90deg, #2B7FFF 0%, #FF6900 50%, #AD46FF 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
