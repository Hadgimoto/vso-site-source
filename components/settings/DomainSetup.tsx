import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, CheckCircle, AlertCircle } from 'lucide-react';

export function DomainSetup() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Custom Domain Setup Guide
          </CardTitle>
          <CardDescription>
            Follow these steps to connect your custom domain to this project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Domain setup requires DNS configuration and may take 24-48 hours to propagate.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">1</span>
                Configure DNS Records
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Add these DNS records to your domain provider:
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                <div>Type: CNAME</div>
                <div>Name: www (or @)</div>
                <div>Value: your-project.vercel.app</div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">2</span>
                Add Domain in Vercel
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                In your Vercel dashboard:
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Go to Project Settings → Domains</li>
                <li>• Click "Add Domain"</li>
                <li>• Enter your custom domain</li>
                <li>• Follow verification steps</li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3</span>
                SSL Certificate
              </h3>
              <p className="text-sm text-gray-600">
                Vercel automatically provisions SSL certificates for custom domains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}