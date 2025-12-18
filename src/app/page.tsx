"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoCarousel from '@/components/sections/hero/HeroLogoCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Heart, Clock, Award, Coffee, Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="animatedGrid"
      cardStyle="solid-accent-light"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="BrewHaven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074495498-0yx5qtoc.jpg"
          logoAlt="BrewHaven Coffee Shop"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Hours", id: "contact" },
            { name: "Contact", id: "footer" }
          ]}
          button={{
            text: "Order Online",
            href: "#contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogoCarousel
          logoText="BrewHaven"
          description="Handcrafted coffee for the soul. Experience premium specialty coffee in our cozy neighborhood coffee shop. Fresh beans, expert baristas, and a welcoming community await."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074496333-6ekdmup3.jpg",
              imageAlt: "Latte art coffee specialty drink"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074497408-i8nje535.jpg",
              imageAlt: "Fresh roasted coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074498225-rtml4xv8.jpg",
              imageAlt: "Espresso shot brewing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074499002-tlfhuh9i.jpg",
              imageAlt: "Cozy coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074500103-ku7357hs.jpg",
              imageAlt: "Barista pouring milk into coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074500812-b60ctnzg.jpg",
              imageAlt: "Coffee and pastry breakfast"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="Brewing Excellence Since 2015. We source the finest single-origin beans from ethical farms around the world, roast them fresh in-house, and serve each cup with care and passion."
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Our Story",
              href: "#"
            },
            {
              text: "Visit Us",
              href: "#contact"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu"
          description="Discover our signature drinks and freshly baked pastries"
          tag="Coffee & Treats"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="three-columns-all-equal-width"
          containerStyle="default"
          products={[
            {
              id: "1",
              name: "Espresso",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074502329-y152hm03.jpg",
              imageAlt: "Double shot espresso"
            },
            {
              id: "2",
              name: "Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074503181-zrdfjvxw.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "3",
              name: "Americano",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074504019-g1ga7ijk.jpg",
              imageAlt: "Classic americano black coffee"
            },
            {
              id: "4",
              name: "Cold Brew",
              price: "$5.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074504907-bnosw4zh.jpg",
              imageAlt: "Iced cold brew coffee"
            },
            {
              id: "5",
              name: "Croissant",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074505701-4ieu1in2.jpg",
              imageAlt: "Fresh baked croissant pastry"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFifteen
          testimonial="BrewHaven has become my daily sanctuary. The coffee is exceptional, the atmosphere is welcoming, and the baristas genuinely care. Best local coffee shop around."
          rating={5}
          author="Sarah Johnson, Regular Customer"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074506571-b15p7cd8.jpg",
              alt: "Sarah Johnson"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074507870-bcg6ay96.jpg",
              alt: "Customer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074508761-92elohzi.jpg",
              alt: "Customer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074509542-9rsedjbe.jpg",
              alt: "Customer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074510547-h11vyz85.jpg",
              alt: "Customer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/uploaded-1766074511451-w0kpjjue.jpg",
              alt: "Customer"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose BrewHaven"
          description="By the numbers - our commitment to quality and community"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="four-items-2x2-equal-grid"
          containerStyle="default"
          metrics={[
            {
              id: "1",
              icon: Heart,
              title: "Customers Served",
              value: "15,000+"
            },
            {
              id: "2",
              icon: Clock,
              title: "Years in Business",
              value: "9"
            },
            {
              id: "3",
              icon: Award,
              title: "Specialty Drinks",
              value: "25+"
            },
            {
              id: "4",
              icon: Coffee,
              title: "Daily Visitors",
              value: "200+"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactInline
          text="Join our coffee community. Get updates on new drinks, special events, and member perks."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="BrewHaven"
          description="Your neighborhood coffee destination since 2015. Premium coffee, exceptional service, and a welcoming community."
          copyrightText="© 2025 BrewHaven Coffee Shop. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday", href: "#" },
                { label: "7:00 AM - 8:00 PM", href: "#" },
                { label: "Saturday - Sunday", href: "#" },
                { label: "8:00 AM - 9:00 PM", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "#" },
                { label: "Pastries", href: "#" },
                { label: "Cold Drinks", href: "#" },
                { label: "Merchandise", href: "#" }
              ]
            },
            {
              title: "Visit Us",
              items: [
                { label: "123 Main Street", href: "#" },
                { label: "Downtown District", href: "#" },
                { label: "(555) 123-4567", href: "#" },
                { label: "hello@brewhaven.local", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}