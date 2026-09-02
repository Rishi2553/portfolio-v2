import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

export function trackEvent(eventName, params = {}) {
  console.log("🔥 Analytics Event:", eventName, params);

  if (!analytics) {
    console.log("❌ Analytics is not initialized");
    return;
  }

  logEvent(analytics, eventName, params);
}