import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DonationSummaryProps {
  totalRaised: number;
  donorCount: number;
  campaignGoal?: number;
  recentDonations?: {
    name: string;
    amount: number;
    date: string;
  }[];
}

const DonationSummary: React.FC<DonationSummaryProps> = ({
  totalRaised,
  donorCount,
  campaignGoal,
  recentDonations = [],
}) => {
  // Calculate percentage of goal reached if goal is provided
  const percentComplete = campaignGoal ? Math.min(Math.round((totalRaised / campaignGoal) * 100), 100) : null;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Donation Summary</CardTitle>
        <CardDescription>Together we're making a difference</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Raised</p>
              <p className="text-2xl font-bold">${totalRaised.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Donors</p>
              <p className="text-2xl font-bold">{donorCount}</p>
            </div>
            {campaignGoal && (
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Campaign Goal</p>
                <p className="text-2xl font-bold">${campaignGoal.toLocaleString()}</p>
              </div>
            )}
          </div>

          {campaignGoal && percentComplete !== null && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{percentComplete}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
            </div>
          )}

          {recentDonations.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Recent Supporters</h3>
              <ul className="space-y-2">
                {recentDonations.map((donation, index) => (
                  <li key={index} className="flex justify-between items-center text-sm border-b pb-2">
                    <span>{donation.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">${donation.amount}</Badge>
                      <span className="text-xs text-muted-foreground">{donation.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationSummary;