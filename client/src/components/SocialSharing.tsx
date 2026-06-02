import { useState } from "react";
import { Share2, Twitter, Facebook, Linkedin, Mail, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface SocialSharingProps {
  wheelId: string;
  wheelTitle: string;
  wheelUrl: string;
  description?: string;
}

export default function SocialSharing({
  wheelId,
  wheelTitle,
  wheelUrl,
  description = "Try spinning my wheel!",
}: SocialSharingProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `Check out my wheel: "${wheelTitle}" - ${description}`;
  const encodedUrl = encodeURIComponent(wheelUrl);
  const encodedText = encodeURIComponent(shareText);

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      color: "text-blue-400 hover:bg-blue-50",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "text-blue-600 hover:bg-blue-50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "text-blue-700 hover:bg-blue-50",
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(wheelTitle)}&body=${encodedText}%0A%0A${encodedUrl}`,
      color: "text-gray-600 hover:bg-gray-50",
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(wheelUrl);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-700">Share this wheel:</p>

      <div className="flex flex-wrap gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-colors ${social.color} border border-gray-200 hover:border-gray-300`}
              title={`Share on ${social.name}`}
            >
              <Icon size={18} />
            </a>
          );
        })}

        <button
          onClick={copyLink}
          className="p-2.5 rounded-lg transition-colors text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
          title="Copy link"
        >
          {copied ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
        </button>
      </div>

      {/* Share Stats */}
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
        <p className="text-xs font-semibold text-gray-700 mb-2">💡 Sharing Tips:</p>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Share on social media for more engagement</li>
          <li>• Add a fun description to encourage clicks</li>
          <li>• Tag friends to increase visibility</li>
          <li>• Use relevant hashtags (#wheeloname #spinwheel)</li>
        </ul>
      </div>
    </div>
  );
}
