import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
      <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Find me here</h1>
      <p className="text-gray-800 dark:text-gray-300 mb-6">Reach out to me on social media or via email</p>

      <div className="space-y-4">
        {socialLinks.map((link) => (
          <div key={link.platform}>
            <a
              href={link.url}
              target={link.platform !== "Email" ? "_blank" : undefined}
              rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
              className="not-prose group hover:text-muted-foreground inline-flex items-center font-mono font-semibold"
            >
              <span className="flex items-center gap-2">
                {link.icon}
                <span className="font-semibold">{link.username}</span>
              </span>
              <svg
                viewBox="0 0 10 30"
                className="size-4 fill-none stroke-current stroke-[2px] transition-opacity duration-300 ease-in-out ml-1 "
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  className="translate-x-[10px] scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                ></line>
                <polyline
                  points="12 5 19 12 12 19"
                  className="-translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                ></polyline>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}