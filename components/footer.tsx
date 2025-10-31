export default function Footer() {
  return (
    <>
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <a href="#" className="hover:text-primary transition block">
                  Home
                </a>
                <a href="#" className="hover:text-primary transition block">
                  Tracker
                </a>
                <a href="#" className="hover:text-primary transition block">
                  Yoga
                </a>
                <a href="#" className="hover:text-primary transition block">
                  Chat
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <div className="space-y-2 text-muted-foreground">
                <a href="#" className="hover:text-primary transition block">
                  Learn
                </a>
                <a href="#" className="hover:text-primary transition block">
                  About
                </a>
                <a href="#" className="hover:text-primary transition block">
                  Contact
                </a>
                <a href="#" className="hover:text-primary transition block">
                  Privacy
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <a href="#" className="hover:text-primary transition block">
                  Instagram
                </a>
                <a href="#" className="hover:text-primary transition block">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-primary transition block">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            {/* <p>🔒 Flowmate respects your privacy. All data is stored securely and never shared with third parties.</p> */}
            <p>
              © {new Date().getFullYear()} Flowmate | Built with 💖 by Neha —
              empowering wellness through tech & yoga.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
