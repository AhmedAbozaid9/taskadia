import "./globals.css";
import Providers from "@/utils/Providers";
import React from "react";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/general/Layout";

export const metadata = {
  title: "Taskadia",
  description: "The correct way to manage your tasks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-[100dvh]`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              color: "white",
              backgroundColor: "#151419",
            },
          }}
        />
      </body>
    </html>
  );
}
