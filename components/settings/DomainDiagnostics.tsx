import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, ExternalLink, Search } from 'lucide-react';

export function DomainDiagnostics() {
  const [domain, setDomain] = useState('veteransservicesai.com');
  const [checking, setChecking] = useState(false);
  const [results, setResults] = useState<any>(null);

  const runDiagnostics = async () => {
    setChecking(true);
    try {
      // Simulate DNS checks
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setResults({
        dnsResolution: true,
        cnameRecord: false,
        sslCert: false,
        vercelConnection: false,
        recommendations: [
          'Add CNAME record pointing to your Vercel deployment',
          'Verify domain in Vercel dashboard',
          'Wait for SSL certificate provisioning'
        ]
      });
    } catch (error) {
      console.error('Diagnostic error:', error);
    } finally {
      setChecking(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Domain Diagnostics
        </CardTitle>
        <CardDescription>
          Check your domain configuration for veteransservicesai.com
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter your domain"
          />
          <Button onClick={runDiagnostics} disabled={checking}>
            {checking ? 'Checking...' : 'Run Diagnostics'}
          </Button>
        </div>

        {results && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                {results.dnsResolution ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">DNS Resolution</span>
              </div>
              
              <div className="flex items-center gap-2">
                {results.cnameRecord ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">CNAME Record</span>
              </div>
              
              <div className="flex items-center gap-2">
                {results.sslCert ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">SSL Certificate</span>
              </div>
              
              <div className="flex items-center gap-2">
                {results.vercelConnection ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                <span className="text-sm">Vercel Connection</span>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Next Steps:</strong>
                <ul className="mt-2 space-y-1">
                  {results.recommendations.map((rec: string, i: number) => (
                    <li key={i} className="text-sm">• {rec}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}