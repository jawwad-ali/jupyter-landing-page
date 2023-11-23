import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export interface MoreWidgetsProps {
  videoUrl: string
  widgetName: string
  heading: string
  text: string
}

export interface LandingPageProps {
  landingPageImage: string
}

export interface CustomizeProps {
  iconUrl: string
  heading: string
  text: string
}