import { Instagram, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} James River. All rights reserved.
        </p>
      </div>
    </footer>
  );
};