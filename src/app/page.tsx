"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Briefcase, Building, Gift, HelpCircle, Heart, Home, MessageCircle, Sparkles, Star, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "Dining", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Beyond Compare"
          description="Discover the perfect blend of elegance and comfort at Grand Azure Hotel, where every moment becomes an unforgettable memory."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "View Rooms",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Home}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Ocean View",
              price: "$399/night",
              imageSrc: "https://images.pexels.com/photos/31817153/pexels-photo-31817153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe room with ocean view"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "$799/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite with luxury amenities"
            },
            {
              id: "penthouse",
              name: "Presidential Penthouse",
              price: "$1,999/night",
              imageSrc: "https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential penthouse with panoramic views"
            }
          ]}
          buttons={[
            {
              text: "View All Rooms",
              href: "https://booking.example.com/rooms"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our extensive collection of premium facilities and services designed to exceed your every expectation."
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring therapeutic treatments and state-of-the-art wellness facilities.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa wellness center",
              button: {
                text: "Book Spa",
                href: "https://booking.example.com/spa"
              }
            },
            {
              title: "Rooftop Infinity Pool",
              description: "Take a refreshing dip in our stunning infinity pool while enjoying breathtaking panoramic city views from the rooftop.",
              imageSrc: "https://images.pexels.com/photos/2149421/pexels-photo-2149421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop infinity pool with city views",
              button: {
                text: "Pool Hours",
                href: "https://booking.example.com/pool"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite culinary creations prepared by our world-renowned chefs in an atmosphere of refined elegance.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant interior",
              button: {
                text: "Make Reservation",
                href: "https://booking.example.com/dining"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Exceptional Value Packages"
          description="Choose the perfect package that combines luxury accommodations with exclusive experiences tailored to your preferences."
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$599/night",
              subtitle: "Perfect for couples seeking romance",
              features: [
                "Deluxe Ocean View Room",
                "Champagne & chocolate amenity",
                "Couples spa treatment",
                "Private beach dinner",
                "Late checkout until 2 PM"
              ]
            },
            {
              id: "business",
              badge: "Executive Choice",
              badgeIcon: Briefcase,
              price: "$899/night",
              subtitle: "Ideal for business travelers",
              features: [
                "Executive Suite with workspace",
                "Complimentary airport transfer",
                "Business center access",
                "Priority concierge service",
                "Meeting room privileges"
              ]
            },
            {
              id: "family",
              badge: "Family Fun",
              badgeIcon: Users,
              price: "$1,299/night",
              subtitle: "Great for family vacations",
              features: [
                "Two-bedroom family suite",
                "Kids club activities",
                "Family dining experiences",
                "Pool and beach access",
                "Babysitting services available"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Award-Winning Excellence"
          description="Our commitment to exceptional service and luxury experiences has earned recognition from guests and industry experts worldwide."
          tag="Achievements"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "satisfied",
              description: "Happy guests from around the world",
              icon: Users
            },
            {
              id: "2",
              value: "4.9",
              title: "rating",
              description: "Average guest satisfaction score",
              icon: Star
            },
            {
              id: "3",
              value: "25",
              title: "awards",
              description: "International hospitality honors",
              icon: Trophy
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover what makes Grand Azure Hotel unforgettable through the words of our cherished guests."
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Richardson",
              role: "CEO, Global Ventures",
              testimonial: "Absolutely exceptional experience from check-in to departure. The attention to detail and personalized service exceeded all expectations. The ocean view from our suite was breathtaking.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Richardson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "The perfect blend of luxury and comfort. Every staff member went above and beyond to ensure our stay was perfect. The spa treatments were world-class and the dining was extraordinary.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Martinez",
              role: "Creative Director",
              testimonial: "From the moment we arrived, we felt like royalty. The penthouse suite was magnificent and the rooftop pool offered incredible views. This hotel sets the standard for luxury hospitality.",
              imageSrc: "https://images.pexels.com/photos/34520848/pexels-photo-34520848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Martinez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Technology Executive",
              testimonial: "Outstanding service and facilities that truly define five-star luxury. The business amenities were excellent and the concierge team made our corporate event seamless and memorable.",
              imageSrc: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Fortune 500 companies and industry leaders choose Grand Azure Hotel for their corporate events and executive accommodations."
          tag="Corporate Partners"
          tagIcon={Building}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5207507/pexels-photo-5207507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay, amenities, and services at Grand Azure Hotel."
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for our guests. Please contact our concierge 24 hours in advance to arrange your transfer."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We offer three dining venues: our signature fine dining restaurant, a casual poolside café, and 24-hour room service featuring gourmet cuisine."
            },
            {
              id: "4",
              title: "Is parking available on-site?",
              content: "Yes, we offer complimentary valet parking for all registered guests. Self-parking is also available at no additional charge."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Plan Your Perfect Stay"
          description="Ready to experience luxury redefined? Contact our reservation specialists to create your personalized Grand Azure Hotel experience."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal stay...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Dining",
                  href: "about"
                },
                {
                  label: "Special Offers",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "https://booking.example.com/spa"
                },
                {
                  label: "Business Center",
                  href: "https://booking.example.com/business"
                },
                {
                  label: "Concierge",
                  href: "contact"
                },
                {
                  label: "Valet Parking",
                  href: "faq"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "https://booking.example.com/support"
                },
                {
                  label: "Event Planning",
                  href: "https://booking.example.com/events"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Azure Hotel"
        />
      </div>
    </ThemeProvider>
  );
}