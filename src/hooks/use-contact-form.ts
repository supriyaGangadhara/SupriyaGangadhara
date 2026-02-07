import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { useVisitorInfo } from "@/hooks/use-visitor-info";

export const useContactForm = ({onSuccess}:any) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();
  const visitorInfo = useVisitorInfo();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_API_KEY
      )
      .then(() => {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        formRef.current?.reset();
        onSuccess?.();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => setIsSending(false));
  };

  return {
    formRef,
    isSending,
    visitorInfo,
    handleSubmit,
  };
};
