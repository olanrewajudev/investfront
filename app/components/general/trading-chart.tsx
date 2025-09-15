import { useEffect } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingViewChart() {
  useEffect(() => {
    // If script already exists, don't add it again
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Small delay to ensure script is loaded before widget call
    const interval = setInterval(() => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: 500,
          symbol: "NASDAQ:AAPL", // <-- Apple stock
          interval: "60",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_apple",
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <div id="tradingview_apple" className="lg:w-[60rem]" />;
}
