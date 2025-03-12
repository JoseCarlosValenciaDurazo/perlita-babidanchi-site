import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              Sonora Perlite
            </Link>
            <p className="mt-4">
              Premium perlite mining investment opportunity in Sonora, Mexico.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <p>Sonora, Mexico</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p>Email: josecarlosvalencia.contacto@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Sonora Perlite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}