import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const BookConsultation = () => {
    return (
        <>
            {/* Contact Form */}
            <motion.form
                className="space-y-6 bg-card p-8 rounded-2xl shadow-medium"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+91 123-4567" />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                    Submit
                </Button>
            </motion.form>
        </>
    )
}

export default BookConsultation
