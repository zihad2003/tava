import { useState } from "react";
import Button from "../components/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="bg-cream-dark py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-brown mb-3">
          Join the Kuisine Family
        </h2>
        <p className="font-sans text-sm text-body/70 mb-8">
          Get updates on new menu items, special events, and exclusive offers — straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-teal/10 border border-teal/20 rounded-2xl px-8 py-6">
            <p className="font-serif text-lg text-teal">You're in!</p>
            <p className="font-sans text-sm text-body/70 mt-1">
              Welcome to the Kuisine family. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 border border-body/20 rounded-full px-6 py-3 bg-white font-sans text-sm text-body placeholder:text-body/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
