import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface DonationOption {
  amount: number;
  description: string;
  impact?: string;
}

interface DonationOptionsProps {
  options: DonationOption[];
  onSelectAmount: (amount: number) => void;
}

const DonationOptions: React.FC<DonationOptionsProps> = ({ options, onSelectAmount }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose a Donation Amount</CardTitle>
        <CardDescription>
          Select one of our suggested amounts or enter your own
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer m-1"
              onClick={() => onSelectAmount(option.amount)}
            >
              <div className="font-bold text-xl mb-2">${option.amount}</div>
              <p className="text-sm text-gray-600 mb-1">{option.description}</p>
              {option.impact && (
                <p className="text-xs text-blue-600 italic">{option.impact}</p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          variant="outline" 
          onClick={() => onSelectAmount(0)}
          className="w-full md:w-auto"
        >
          Enter Custom Amount
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationOptions;