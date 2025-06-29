import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ExternalLink, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export function DomainTroubleshooting() {
  const checkDNS = (domain: string) => {
    window.open(`https://dnschecker.org/#CNAME/${domain}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Domain Troubleshooting
          </CardTitle>
          <CardDescription>
            Common issues and solutions for custom domain setup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-600">Issue: Domain not connecting</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Check:</strong> DNS records are correctly configured</p>
                <p><strong>Wait:</strong> DNS propagation can take 24-48 hours</p>
                <p><strong>Verify:</strong> CNAME points to correct Vercel URL</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => checkDNS('yourdomain.com')}
                  className="mt-2"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Check DNS Propagation
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-600">Issue: SSL Certificate errors</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Wait:</strong> SSL provisioning takes 5-10 minutes</p>
                <p><strong>Check:</strong> Domain is properly verified in Vercel</p>
                <p><strong>Try:</strong> Remove and re-add domain in Vercel</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-600">Issue: WWW vs non-WWW</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Add both:</strong> www.yourdomain.com AND yourdomain.com</p>
                <p><strong>Set redirect:</strong> Choose primary version in Vercel</p>
                <p><strong>DNS:</strong> Use A record for apex domain, CNAME for www</p>
              </div>
            </div>
          </div>

          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Most domain issues resolve within 24 hours. If problems persist, check your domain registrar's DNS settings.
            </AlertDescription>
          </Alert>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-green-800 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Quick Verification Steps
            </h3>
            <ol className="text-sm space-y-1 ml-4 text-green-700">
              <li>1. Ping your domain to check if it resolves</li>
              <li>2. Visit your domain in incognito mode</li>
              <li>3. Check Vercel dashboard for domain status</li>
              <li>4. Verify DNS records with your provider</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}