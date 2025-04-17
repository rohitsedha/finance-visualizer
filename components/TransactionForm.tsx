"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  amount: z.number().min(1),
  description: z.string().min(3),
  category: z.string().min(2)
});

export default function TransactionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { amount: 0, description: '', category: '' }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" placeholder="Amount" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* Add other form fields similarly */}
        <Button type="submit">Add Transaction</Button>
      </form>
    </Form>
  );
}
