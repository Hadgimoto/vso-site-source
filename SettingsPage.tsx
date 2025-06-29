import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home } from 'lucide-react';
import ApiKeyInput from '@/components/settings/ApiKeyInput';
import { DomainSetup } from '@/components/settings/DomainSetup';
import { DomainTroubleshooting } from '@/components/settings/DomainTroubleshooting';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>Settings | Veterans Support</title>
        <meta name="description" content="Configure your application settings" />
      </Helmet>
      
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-600">Configure your application settings and preferences</p>
        </div>
        <Button 
          onClick={handleHomeClick}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Home className="h-4 w-4" />
          Home
        </Button>
      </div>
      
      <Tabs defaultValue="api" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="api">API Configuration</TabsTrigger>
          <TabsTrigger value="domain">Domain Setup</TabsTrigger>
          <TabsTrigger value="troubleshoot">Troubleshooting</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="space-y-6">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">API Configuration</h2>
              <ApiKeyInput 
                onSave={(apiKey) => {
                  console.log('API key saved:', apiKey.substring(0, 3) + '...');
                }} 
              />
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">About API Keys</h2>
              <p className="mb-4">
                Your OpenAI API key is required to use AI-powered features in this application. 
                The key is stored securely in your browser's local storage and is not transmitted 
                to our servers.
              </p>
              <p className="mb-4">
                You can get an API key by signing up for an account at
                <a 
                  href="https://platform.openai.com/signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  OpenAI's platform
                </a>.
              </p>
              <p>
                Keep your API key secure and never share it publicly.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="domain" className="space-y-6">
          <DomainSetup />
        </TabsContent>
        
        <TabsContent value="troubleshoot" className="space-y-6">
          <DomainTroubleshooting />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;