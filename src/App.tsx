import React from "react";
import {
  BrowserView,
  MobileView,
  isIE,
  isChrome,
  isFirefox,
  isSafari,
  isEdge,
  isAndroid,
  isWinPhone,
  isIOS,
  isMacOs,
  isWindows,
} from "react-device-detect";

const App = () => {
  const detectBrowser = (): string => {
    let browser = "";
    if (isIE) {
      browser = "IE";
    } else if (isEdge) {
      browser = "Edge";
    } else if (isChrome) {
      browser = "Chrome";
    } else if (isFirefox) {
      browser = "Firefox";
    } else if (isSafari) {
      browser = "Safari";
    } else {
      browser = "...すいません、わかりません";
    }
    return browser;
  };

  const detectOs = (): string => {
    let os = "";
    if (isIOS) {
      os = "IOS";
    } else if (isAndroid) {
      os = "Android";
    } else if (isWinPhone) {
      os = "WindowsPhone";
    } else if (isWindows) {
      os = "Windows";
    } else if (isMacOs) {
      os = "MacOs";
    } else {
      os = "...すいません、わかりません";
    }
    return os;
  };

  return (
    <>
      <BrowserView>
        <h3> あなたはPCからこの画面を見ている </h3>
      </BrowserView>
      <MobileView>
        <h3> あなたはスマホからこの画面を見ている </h3>
      </MobileView>
      <div>ブラウザは{detectBrowser()}</div>
      <div>OSは{detectOs()}</div>
    </>
  );
};

export default App;
