import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";

export default function Connect() {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/1hemmem",
      icon: <Github className="h-5 w-5" />,
      username: "1hemmem",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/baha-eddine-hemmem-charen-123231268/",
      icon: <Linkedin className="h-5 w-5" />,
      username: "Charen Bahaeddine hemmem",
    },
    {
      platform: "Twitter",
      url: "https://x.com/CharenHemmem",
      icon: <Twitter className="h-5 w-5" />,
      username: "@CharenHemmem",
    },
    {
      platform: "Email",
      url: "mailto:charenbahaeddinehemmem@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      username: "charenbahaeddinehemmem@gmail.com",
    },
  ];

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold mb-2">Find me here</h1>
      <p className="mb-6">Reach out to me on social media or via email</p>

      <div className="space-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform !== "Email" ? "_blank" : undefined}
            rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
            className="flex items-center justify-between p-3 rounded-lg transition-all hover:bg-zinc-800 group border border-transparent"
          >
            <div className="flex items-start gap-3">
              {link.icon}
              <span className="font-semibold">{link.platform}:</span>
              <span className="text-muted-foreground font-medium">
                {link.username}
              </span>
            </div>

            <ArrowRight
              className="h-4 w-4 text-muted-foreground transform transition-all duration-300 ease-in-out 
            group-hover:translate-x-2 group-hover:scale-110 group-hover:text-primary"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
