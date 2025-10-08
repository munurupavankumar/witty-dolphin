import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoForm from '@/components/DemoForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, RefreshCw, UserPlus, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WdRag: React.FC = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const WEBHOOK_URL = "https://peakless-psychically-amiee.ngrok-free.dev/webhook-test/849d78d9-c7ed-4f5e-b4f0-69888eb848fb";

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Send file as binary using FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('filename', file.name);
      formData.append('type', 'renew_same_tenant');

      try {
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          toast({
            title: "Success",
            description: "Agreement uploaded successfully",
          });
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        toast({
          title: "Upload failed",
          description: "Failed to send file to webhook",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while processing the file",
        variant: "destructive",
      });
      setIsUploading(false);
    }
  };

  const handleRenewSameTenant = () => {
    fileInputRef.current?.click();
  };

  const handleRenewNewTenant = () => {
    toast({
      title: "Coming Soon",
      description: "Renew with new tenant functionality will be available soon",
    });
  };

  const handleCreateNew = () => {
    toast({
      title: "Coming Soon",
      description: "Create new agreement functionality will be available soon",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onTryDemo={() => setShowDemoForm(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Rental Agreement Generator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Simplify your rental agreements with AI-powered document generation
          </p>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 flex flex-col items-center gap-4">
              <RefreshCw className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Renew with Same Tenant</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Upload existing agreement to renew
              </p>
              <Button 
                onClick={handleRenewSameTenant}
                disabled={isUploading}
                className="w-full"
              >
                {isUploading ? (
                  <>
                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload PDF
                  </>
                )}
              </Button>
              <Input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 flex flex-col items-center gap-4">
              <UserPlus className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Renew with New Tenant</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Update agreement with new tenant details
              </p>
              <Button 
                onClick={handleRenewNewTenant}
                variant="outline"
                className="w-full"
              >
                Start Renewal
              </Button>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 flex flex-col items-center gap-4">
              <FileText className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Create New Agreement</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Generate a brand new rental agreement
              </p>
              <Button 
                onClick={handleCreateNew}
                variant="outline"
                className="w-full"
              >
                Create New
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <DemoForm open={showDemoForm} onOpenChange={setShowDemoForm} />
    </div>
  );
};

export default WdRag;