import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-[1120px] px-[30px] py-[50px]">
        {/* Logo and contact */}
        <div className="flex flex-col gap-[24px] mb-[40px]">
          <span className="font-heading text-[20px] font-bold text-text-primary tracking-[-0.4px]">
            {SITE_NAME}
          </span>
          <div className="flex flex-wrap gap-[24px] text-[14px] text-text-muted">
            <a
              href="mailto:hello@formvita.org"
              className="flex items-center gap-[8px] hover:text-text-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              hello@formvita.org
            </a>
            <span className="flex items-center gap-[8px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (555) 123-4567
            </span>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="text-[12px] text-text-muted leading-[18px] mb-[30px] space-y-[12px]">
          <p>
            *Prescriptions are issued only after an online consultation with an
            independent licensed provider. All medications offered through
            FormVita are FDA-approved. The decision to prescribe is at the sole
            discretion of the licensed healthcare provider.
          </p>
          <p>
            Results may vary based on starting weight and program adherence.
            FormVita patients typically experience 1-2 lbs per week weight loss
            after 4 weeks, involving a healthy diet and exercise changes. Consult
            a healthcare professional before using medication or starting any
            weight loss program.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-[24px]" />

        {/* Links */}
        <div className="flex flex-wrap gap-[16px] text-[12px] text-text-muted mb-[16px]">
          <a href="#" className="hover:text-text-primary">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-text-primary">
            Refund Policy
          </a>
          <a href="#" className="hover:text-text-primary">
            Medical Consent
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-text-muted">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
