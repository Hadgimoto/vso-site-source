import React, { useState, useEffect } from 'react';
import DonationForm from './DonationForm';
import DonationSummary from './DonationSummary';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const donationOptions = [
  {
    amount: 5,
    description: 'Provides a meal for a veteran',
    impact: 'Basic nutrition support'
  },
  {
    amount: 10,
    description: 'Supports transportation assistance',
    impact: 'Helps veterans get to appointments'
  },
  {
    amount: 20,
    description: 'Funds emergency supplies',
    impact: 'Provides essential items'
  },
  {
    amount: 50,
    description: 'Supports housing assistance programs',
    impact: 'Helps with emergency housing needs'
  },
  {
    amount: 100,
    description: 'Funds career training resources',
    impact: 'Enables job placement services'
  }
];

const DonationPage: React.FC = () => {
  const [totalRaised, setTotalRaised] = useState<number>(0);
  const [donorCount, setDonorCount] = useState<number>(0);
  const [recentDonations, setRecentDonations] = useState<any[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDonationStats = async () => {
      try {
        const { data: totalData, error: totalError } = await supabase
          .from('donations')
          .select('amount')
          .eq('status', 'completed');

        if (totalError) throw totalError;

        const total = totalData.reduce((sum, donation) => sum + donation.amount, 0);
        setTotalRaised(total);

        const { count, error: countError } = await supabase
          .from('donations')
          .select('email', { count: 'exact', head: true })
          .eq('status', 'completed');

        if (countError) throw countError;
        setDonorCount(count || 0);

        const { data: recentData, error: recentError } = await supabase
          .from('donations')
          .select('name, amount, created_at')
          .eq('status', 'completed')
          .order('created_at', { ascending: false })
          .limit(5);

        if (recentError) throw recentError;

        const formattedRecentDonations = recentData.map(donation => ({
          name: donation.name,
          amount: donation.amount,
          date: new Date(donation.created_at).toLocaleDateString()
        }));

        setRecentDonations(formattedRecentDonations);
      } catch (error) {
        console.error('Error fetching donation stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonationStats();
  }, []);

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Support Our Veterans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps us provide essential services, housing support, and community resources 
            to veterans in need throughout Ohio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* Donation Options */}
            <Card>
              <CardHeader>
                <CardTitle>Choose a Donation Amount</CardTitle>
                <CardDescription>
                  Select one of our suggested amounts or enter your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                  {donationOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className="border rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer text-center"
                      onClick={() => handleSelectAmount(option.amount)}
                    >
                      <div className="font-bold text-lg mb-1">${option.amount}</div>
                      <p className="text-xs text-gray-600 mb-1">{option.description}</p>
                      <p className="text-xs text-blue-600 italic">{option.impact}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    onClick={() => handleSelectAmount(0)}
                    className="w-full md:w-auto"
                  >
                    Enter Custom Amount
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Donation Form */}
            <DonationForm selectedAmount={selectedAmount} />
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-4">
              <DonationSummary 
                totalRaised={totalRaised}
                donorCount={donorCount}
                campaignGoal={50000}
                recentDonations={recentDonations}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;