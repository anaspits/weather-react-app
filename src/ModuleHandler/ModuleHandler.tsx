import { parse } from "next-useragent";

export function detectDevice(userAgent: any) {
    const ua = parse(userAgent);
    return {
      isMobile: ua.isMobile,
      isTablet: ua.isTablet,
      isDesktop: !ua.isMobile && !ua.isTablet,
    };
  }