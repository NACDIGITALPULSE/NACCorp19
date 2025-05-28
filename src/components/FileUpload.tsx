
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, File, X, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  currentFile?: File | null;
  maxSize?: number; // en MB
}

export const FileUpload = ({ 
  onFileSelect, 
  accept = ".pdf,.jpg,.jpeg,.png", 
  currentFile,
  maxSize = 5 
}: FileUploadProps) => {
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setError(null);
    
    // Vérifier la taille du fichier
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Le fichier ne doit pas dépasser ${maxSize}MB`);
      return;
    }
    
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    onFileSelect(null);
    setError(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-3">
      {!currentFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragOver 
              ? 'border-niger-orange bg-niger-orange/5' 
              : 'border-gray-300 hover:border-niger-orange/50'
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
        >
          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600 mb-2">
            Glissez votre fichier ici ou{' '}
            <label className="text-niger-orange hover:text-niger-orange-dark cursor-pointer font-medium">
              parcourez
              <input
                type="file"
                className="hidden"
                accept={accept}
                onChange={handleFileInput}
              />
            </label>
          </p>
          <p className="text-sm text-gray-500">
            Formats acceptés: {accept.replace(/\./g, '').toUpperCase()} • Max {maxSize}MB
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-green-900">{currentFile.name}</p>
              <p className="text-xs text-green-700">{formatFileSize(currentFile.size)}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-600 flex items-center space-x-1">
          <X className="w-4 h-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
