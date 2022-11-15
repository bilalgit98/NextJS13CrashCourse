//activiating tailwindCSS
import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>To-Do NextJS 13 Crash Course</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
