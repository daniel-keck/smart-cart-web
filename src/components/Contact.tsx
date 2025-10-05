import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [mapboxToken, setMapboxToken] = useState("");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [9.2109, 49.1427], // Heilbronn, Germany
      zoom: 4,
      pitch: 0,
    });

    // Add marker for Heilbronn
    const el = document.createElement('div');
    el.className = 'custom-marker';
    el.style.width = '2px';
    el.style.height = '80px';
    el.style.background = 'linear-gradient(to bottom, hsl(var(--primary)) 0%, transparent 100%)';
    el.style.position = 'relative';

    const popup = document.createElement('div');
    popup.className = 'marker-popup';
    popup.textContent = 'We are here';
    popup.style.position = 'absolute';
    popup.style.top = '-35px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = 'hsl(var(--card))';
    popup.style.padding = '8px 16px';
    popup.style.borderRadius = '6px';
    popup.style.whiteSpace = 'nowrap';
    popup.style.color = 'hsl(var(--foreground))';
    popup.style.fontSize = '14px';
    popup.style.border = '1px solid hsl(var(--primary) / 0.3)';
    el.appendChild(popup);

    new mapboxgl.Marker({ element: el })
      .setLngLat([9.2109, 49.1427])
      .addTo(map.current);

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: false,
      }),
      'top-right'
    );

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns so schnell wie möglich bei Ihnen.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info and map */}
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Contact us
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <a href="mailto:contact@smartcart.de" className="hover:text-primary transition-colors">
                contact@smartcart.de
              </a>
              <span>•</span>
              <a href="tel:+4970001234567" className="hover:text-primary transition-colors">
                +49 (700) 123 4567
              </a>
              <span>•</span>
              <a href="mailto:support@smartcart.de" className="hover:text-primary transition-colors">
                support@smartcart.de
              </a>
            </div>

            {/* Map */}
            {!mapboxToken ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Um die Karte anzuzeigen, fügen Sie bitte Ihren Mapbox Public Token hinzu.
                  Sie finden Ihren Token unter: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <Input
                  type="text"
                  placeholder="Mapbox Public Token eingeben"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="bg-card/50 border-primary/20"
                />
              </div>
            ) : (
              <div 
                ref={mapContainer} 
                className="w-full h-[400px] rounded-xl border border-primary/20 shadow-[0_0_30px_rgba(0,255,255,0.15)]"
              />
            )}
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Manu Arora"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="support@aceternity.com"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Aceternity Labs LLC"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message here"
                  rows={6}
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary/10 text-foreground hover:bg-primary/20 border border-primary/30"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
