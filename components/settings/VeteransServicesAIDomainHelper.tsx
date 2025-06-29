import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, AlertTriangle, CheckCircle } from 'lucide-react';

export function VeteransServicesAIDomainHelper() {
  const openVercelDashboard = () => {
    window.open('https://vercel.com/dashboard', '_blank');
  };

  const openDNSChecker = () => {
    window.open('https://dnschecker.org/#CNAME/veteransservicesai.com', '_blank');
  };

  const openWhoIs = () => {
    window.open('https://whois.net/veteransservicesai.com', '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            veteransservicesai.com Setup
          </CardTitle>
          <CardDescription>
            Specific configuration steps for your domain
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Current Status:</strong> Domain needs proper DNS configuration to connect to your Vercel deployment.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Step 1</Badge>
                Check Your Domain Registrar
              </h3>
              <p className="text-sm mb-3">
                Log into your domain registrar (where you bought veteransservicesai.com) and navigate to DNS settings.
              </p>
              <Button variant="outline" size="sm" onClick={openWhoIs}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Check Domain Info
              </Button>
            </div>

            <div className="border rounded-lg p-4 bg-green-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Step 2</Badge>
                Add DNS Records
              </h3>
              <div className="space-y-2">
                <div className="bg-white p-3 rounded border">
                  <p className="font-mono text-sm">
                    <strong>Type:</strong> CNAME<br/>
                    <strong>Name:</strong> www<br/>
                    <strong>Value:</strong> cname.vercel-dns.com
                  </p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-mono text-sm">
                    <strong>Type:</strong> A<br/>
                    <strong>Name:</strong> @ (or root)<br/>
                    <strong>Value:</strong> 76.76.19.61
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-yellow-50">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Step 3</Badge>
                Add Domain in Vercel
              </h3>
              <p className="text-sm mb-3">
                In your Vercel project dashboard, add veteransservicesai.com as a custom domain.
              </p>
              <Button variant="outline" size="sm" onClick={openVercelDashboard}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Vercel Dashboard
              </Button>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Step 4</Badge>
                Verify DNS Propagation
              </h3>
              <p className="text-sm mb-3">
                Check if your DNS changes have propagated globally (can take up to 48 hours).
              </p>
              <Button variant="outline" size="sm" onClick={openDNSChecker}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Check DNS Status
              </Button>
            </div>
          </div>

          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro Tip:</strong> If you're using Cloudflare, make sure the DNS record is set to "DNS only" (gray cloud) not "Proxied" (orange cloud) initially.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}