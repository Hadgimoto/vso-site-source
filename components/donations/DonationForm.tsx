import React, { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const donationFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  amount: z.string().min(1, { message: 'Please enter a donation amount.' }),
  message: z.string().optional(),
  donationType: z.enum(['one-time', 'monthly'], {
    required_error: 'Please select a donation type.',
  }),
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

interface DonationFormProps {
  selectedAmount?: number | null;
}

const DonationForm: React.FC<DonationFormProps> = ({ selectedAmount }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      name: '',
      email: '',
      amount: '',
      message: '',
      donationType: 'one-time',
    },
  });

  // Update amount when selectedAmount changes
  useEffect(() => {
    if (selectedAmount !== null && selectedAmount > 0) {
      form.setValue('amount', selectedAmount.toString());
    } else if (selectedAmount === 0) {
      form.setValue('amount', '');
    }
  }, [selectedAmount, form]);

  const onSubmit = async (data: DonationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('donations').insert([
        {
          name: data.name,
          email: data.email,
          amount: parseFloat(data.amount),
          message: data.message || null,
          donation_type: data.donationType,
          status: 'pending'
        }
      ]);

      if (error) throw error;
      
      toast({
        title: 'Thank you for your donation!',
        description: 'Your contribution will help support our veterans.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting donation:', error);
      toast({
        title: 'Donation Error',
        description: 'There was a problem processing your donation. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Make a Donation</CardTitle>
        <CardDescription>
          Your contribution helps us support veterans in need.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" placeholder="50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="donationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time Donation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly Donation</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share why you're supporting our cause..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Donate Now'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;