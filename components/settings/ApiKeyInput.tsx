import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { useAppContext } from '@/contexts/AppContext';

const ApiKeyInput: React.FC = () => {
  const { openaiApiKey, setOpenaiApiKey } = useAppContext();
  const [apiKey, setApiKey] = useState<string>(openaiApiKey || '');
  
  useEffect(() => {
    if (openaiApiKey) {
      setApiKey(openaiApiKey);
    }
  }, [openaiApiKey]);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a valid API key',
        variant: 'destructive',
      });
      return;
    }
    
    setOpenaiApiKey(apiKey);
    
    toast({
      title: 'Success',
      description: 'API key saved successfully',
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>OpenAI API Key</CardTitle>
        <CardDescription>
          Enter your OpenAI API key to enable AI features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveApiKey} className="w-full">
          Save API Key
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApiKeyInput;