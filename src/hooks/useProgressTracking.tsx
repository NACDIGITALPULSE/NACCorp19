
import { useState, useEffect } from 'react';

export interface ProcedureStatus {
  id: string;
  type: 'nif' | 'rccm' | 'logo' | 'website' | 'financial' | 'social-media';
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'waiting';
  progress: number;
  estimatedDays: number;
  startDate?: Date;
  completionDate?: Date;
  nextSteps?: string[];
}

export interface UserProcedures {
  userId: string;
  procedures: ProcedureStatus[];
  overallProgress: number;
}

export const useProgressTracking = (userId?: string) => {
  const [procedures, setProcedures] = useState<ProcedureStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulation des données - dans un vrai projet, ceci viendrait d'une API
  useEffect(() => {
    if (!userId) return;

    // Simulation d'un délai de chargement
    setTimeout(() => {
      const mockProcedures: ProcedureStatus[] = [
        {
          id: '1',
          type: 'nif',
          title: 'Création NIF',
          status: 'completed',
          progress: 100,
          estimatedDays: 2,
          startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          completionDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        },
        {
          id: '2',
          type: 'rccm',
          title: 'Enregistrement RCCM',
          status: 'in-progress',
          progress: 65,
          estimatedDays: 5,
          startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          nextSteps: ['Validation des documents', 'Signature numérique']
        },
        {
          id: '3',
          type: 'logo',
          title: 'Création logo',
          status: 'waiting',
          progress: 0,
          estimatedDays: 3,
          nextSteps: ['En attente de finalisation RCCM']
        }
      ];

      setProcedures(mockProcedures);
      setIsLoading(false);
    }, 1000);
  }, [userId]);

  const getStatusColor = (status: ProcedureStatus['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'in-progress':
        return 'text-orange-600 bg-orange-50';
      case 'waiting':
        return 'text-gray-500 bg-gray-50';
      default:
        return 'text-blue-600 bg-blue-50';
    }
  };

  const getStatusText = (status: ProcedureStatus['status']) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'waiting':
        return 'En attente';
      default:
        return 'En attente';
    }
  };

  const getEstimatedCompletion = (procedure: ProcedureStatus) => {
    if (procedure.completionDate) return procedure.completionDate;
    if (!procedure.startDate) return null;
    
    const remainingDays = Math.ceil(procedure.estimatedDays * (1 - procedure.progress / 100));
    return new Date(Date.now() + remainingDays * 24 * 60 * 60 * 1000);
  };

  const getOverallProgress = () => {
    if (procedures.length === 0) return 0;
    const totalProgress = procedures.reduce((sum, proc) => sum + proc.progress, 0);
    return Math.round(totalProgress / procedures.length);
  };

  return {
    procedures,
    isLoading,
    getStatusColor,
    getStatusText,
    getEstimatedCompletion,
    overallProgress: getOverallProgress()
  };
};
