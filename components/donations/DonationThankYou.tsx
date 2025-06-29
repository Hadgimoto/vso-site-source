import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DonationThankYouProps {
  donorName: string;
  amount: number;
  donationType: 'one-time' | 'monthly';
  donationId: string;
  shareUrl?: string;
}

const DonationThankYou: React.FC<DonationThankYouProps> = ({
  donorName,
  amount,
  donationType,
  donationId,
  shareUrl
}) => {
  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl">Thank You, {donorName}!</CardTitle>
        <CardDescription>
          Your {donationType === 'monthly' ? 'monthly' : 'one-time'} donation of ${amount} has been received.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Your contribution will help us provide essential services to veterans in need. 
            We've sent a receipt to your email for your records.
          </p>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-gray-500">Donation Reference</p>
            <p className="font-mono text-sm">{donationId}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        {shareUrl && (
          <Button variant="outline" className="w-full">
            Share Your Support
          </Button>
        )}
        <Link to="/" className="w-full">
          <Button variant="default" className="w-full">
            Return to Homepage
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DonationThankYou;