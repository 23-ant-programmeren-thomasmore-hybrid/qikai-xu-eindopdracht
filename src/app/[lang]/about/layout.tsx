export const metadata = {
    title: "Qikai | About",
    description: "The about page of Qikai's portfolio.",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="">
        <body>{children}</body>
      </html>
    );
  }