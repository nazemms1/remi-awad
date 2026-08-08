import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="section py-10">
      <div className="flex flex-col items-center gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.</p>
        <div className="flex gap-5 font-medium">
          <a href={profile.linkedin} className="transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-primary">
            {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
