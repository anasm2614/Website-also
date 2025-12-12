import { useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

const ImagePreview = ({ src, alt, className }: ImagePreviewProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div 
        className={cn('relative overflow-hidden cursor-pointer group', className)}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Large Preview Modal on Hover */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fade-in pointer-events-none"
          style={{ animationDuration: '0.2s' }}
        >
          <div className="relative max-w-4xl max-h-[80vh] rounded-xl overflow-hidden shadow-2xl animate-scale-in">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <p className="text-background text-lg font-medium">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;
