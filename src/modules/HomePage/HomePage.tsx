import { ChangeEvent, LegacyRef, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import "./homePage.css";

export const HomePage = () => {

  useEffect(() => {
    Cookies.set("CookieConsent", "true");
    Cookies.set("hostApp", "Remix-js",
      {
        sameSite: "None",
        secure: true,
      }
    )
  }, [])

  const ref = useRef<HTMLIFrameElement>();

  const sendMessage = (message: string) => {
    const iframe = ref.current;
    iframe?.contentWindow?.postMessage(message, "*");
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    sendMessage(value);
  }

  const hostApp = Cookies.get("hostApp")

  return (
    <div className="home-page">
      <h1> I am home page</h1>
      <p>I am hosting:{hostApp}</p>
      <input
        name="message"
        placeholder="Remix Input"
        onChange={handleChange}
        className="remix-message-input"
      />
      <iframe
        ref={ref as LegacyRef<HTMLIFrameElement>}
        src="http://localhost:4202/"
        className="iframe-container"
        title="Iframe Example"
        allow="*"
      />
    </div>
  );
};
