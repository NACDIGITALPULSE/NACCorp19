
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface ProcedureStatus {
  id: string;
  procedure_type: 'nif' | 'rccm' | 'logo' | 'website' | 'financial' | 'social-media' | 'offshore';
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'waiting';
  progress: number;
  current_step: number;
  total_steps: number;
  data?: any;
  created_at: string;
  updated_at: string;
}

export const useProgressTracking = (userId?: string) => {
  const [procedures, setProcedures] = useState<ProcedureStatus[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    fetchUserProcedures();
  }, [userId]);

  const fetchUserProcedures = async () => {
    try {
      const { data, error } = await supabase
        .from('user_procedures')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching procedures:', error);
        return;
      }

      setProcedures(data || []);
    } catch (error) {
      console.error('Error fetching user procedures:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createProcedure = async (procedureData: Partial<ProcedureStatus>) => {
    try {
      const { data, error } = await supabase
        .from('user_procedures')
        .insert({
          user_id: userId,
          ...procedureData
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating procedure:', error);
        return null;
      }

      setProcedures(prev => [data, ...prev]);
      return data;
    } catch (error) {
      console.error('Error creating procedure:', error);
      return null;
    }
  };

  const updateProcedure = async (procedureId: string, updates: Partial<ProcedureStatus>) => {
    try {
      const { data, error } = await supabase
        .from('user_procedures')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', procedureId)
        .select()
        .single();

      if (error) {
        console.error('Error updating procedure:', error);
        return null;
      }

      setProcedures(prev => 
        prev.map(proc => proc.id === procedureId ? data : proc)
      );
      return data;
    } catch (error) {
      console.error('Error updating procedure:', error);
      return null;
    }
  };

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
    overallProgress: getOverallProgress(),
    createProcedure,
    updateProcedure,
    refreshProcedures: fetchUserProcedures
  };
};
