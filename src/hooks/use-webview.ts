import { useState, useEffect } from 'react';

/**
 * Hook to detect if the app is running in a webview
 * Checks for common webview indicators
 * Can be overridden with ?webview=true URL parameter or localStorage flag for testing
 */
export function useWebView(): boolean {
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    // Check for manual override (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const forceWebView = urlParams.get('webview') === 'true' || 
      localStorage.getItem('enableWebView') === 'true';

    if (forceWebView) {
      setIsWebView(true);
      return;
    }

    // Check for webview indicators
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Check if running in a webview
    const checkWebView = () => {
      // Check for Android WebView (contains 'wv' but not 'chrome')
      const isAndroidWebView = userAgent.includes('wv') && 
        !userAgent.includes('chrome');

      // Check for iOS webview
      // iOS webview doesn't have window.safari property
      const isIOSWebView = /iphone|ipad|ipod/.test(userAgent) && 
        !(window as any).safari &&
        !userAgent.includes('crios') && // Chrome iOS
        !userAgent.includes('fxios'); // Firefox iOS

      // Check for standalone mode (PWA)
      const isStandalone = (window.navigator as any).standalone === true ||
        window.matchMedia('(display-mode: standalone)').matches;

      // Check for generic webview indicators
      const hasWebViewUA = userAgent.includes('webview') || 
        userAgent.includes('wv');

      // Check if window is embedded (iframe detection)
      const isEmbedded = window.self !== window.top;

      setIsWebView(
        isAndroidWebView || 
        isIOSWebView || 
        isStandalone || 
        hasWebViewUA ||
        isEmbedded
      );
    };

    checkWebView();
  }, []);

  return isWebView;
}
