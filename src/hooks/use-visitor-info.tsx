import { useState, useEffect } from "react";

interface VisitorInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  continent: string;
  timezone: string;
  timezoneOffset: string;
  browser: string;
  os: string;
  localTime: string;
  page_url: string
}

export function useVisitorInfo(): VisitorInfo | null {
  const [info, setInfo] = useState<VisitorInfo | null>(null);

  useEffect(() => {
    async function fetchInfo() {
      try {
        // 1. get public IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        // 2. get geo data from ipapi
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geo = await geoRes.json();

        // 3. get browser / os from userAgent
        const ua = navigator.userAgent;
        let browser = "Unknown", os = "Unknown";

        if (ua.includes("Firefox")) browser = "Firefox";
        else if (ua.includes("Chrome")) browser = "Chrome";
        else if (ua.includes("Safari")) browser = "Safari";
        else if (ua.includes("Edge")) browser = "Edge";
        // you may add more checks for IE etc

        if (ua.includes("Win")) os = "Windows";
        else if (ua.includes("Mac")) os = "macOS";
        else if (ua.includes("Linux")) os = "Linux";
        else if (/Android/.test(ua)) os = "Android";
        else if (/iPhone|iPad/.test(ua)) os = "iOS";

        // 4. local time from timezone
        const localTime = new Date().toLocaleString("en-US", {
          timeZone: geo.timezone
        });

        setInfo({
          ip,
          city: geo.city,
          region: geo.region,        // state / region
          country: geo.country_name,
          continent: geo.continent_code,
          timezone: geo.timezone,
          timezoneOffset: geo.utc_offset, // optional
          browser,
          os,
          localTime,
          page_url: window?.location?.href
        });
      } catch (err) {
        console.error("Failed to fetch visitor info:", err);
      }
    }

    fetchInfo();
  }, []);

  return info;
}
