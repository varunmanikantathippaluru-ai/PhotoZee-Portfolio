import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Event date is required"),
  message: z.string().min(20, "Please provide more details (minimum 20 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    },
  });

  import emailjs from "@emailjs/browser";

const onSubmit = async (data: FormValues) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
     "service_z4ku08k",
      "template_opsotc4",
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        event_type: data.eventType,
        event_date: data.eventDate,
        message: data.message,
      },
      "LlDPB-_fH6UDxt1ei"
    );

    toast({
      title: "Success",
      description: "Inquiry sent successfully!",
    });

    form.reset();
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send inquiry.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};
  return (
    <div className="bg-card border border-border p-8 rounded-lg shadow-xl">
      <h3 className="font-serif text-3xl font-bold text-foreground mb-6">Send an Inquiry</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-input border-border focus-visible:ring-primary" />
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
                  <FormLabel className="text-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} className="bg-input border-border focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 98765 43210" {...field} className="bg-input border-border focus-visible:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Event Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-input border-border focus:ring-primary text-foreground">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                      <SelectItem value="birthday">Birthday/Anniversary</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Event Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-input border-border focus-visible:ring-primary text-foreground" />
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
                <FormLabel className="text-foreground">Message / Details</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your event, venue, and what you're looking for..." 
                    className="min-h-[120px] bg-input border-border focus-visible:ring-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
