import { site } from "@/lib/site";
import { PhoneLink } from "@/components/PhoneLink";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-graphite/95 p-3 backdrop-blur-xl lg:hidden">
      <PhoneLink href={site.phones.mobile.href} variant="bar">
        Jetzt anrufen · {site.phones.mobile.display}
      </PhoneLink>
      <p className="mt-1.5 text-center text-[11px] text-white/60">{site.hours.compact}</p>
    </div>
  );
}
