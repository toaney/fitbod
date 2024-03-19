import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fitbod Demo",
  description: "Fitbod Demo - Thomas Toan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-between min-h-[100vh] ${inter.variable}`}>
        <div className="h-[60px] bg-[#0085BF] pl-[32px] flex flex-col justify-center">
          <Link href="/">
            <svg width="160" height="24" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3030_19514)">
            <path d="M13.1792 8.00326L12.565 10.0107C12.5597 10.0284 12.5586 10.0471 12.5618 10.0653C12.5649 10.0835 12.5722 10.1007 12.5831 10.1156C12.5939 10.1304 12.6081 10.1425 12.6244 10.1508C12.6407 10.1591 12.6587 10.1635 12.6769 10.1635H23.8224C23.8964 10.1637 23.9693 10.1815 24.0354 10.2153C24.1014 10.2492 24.1586 10.2983 24.2025 10.3586C24.2464 10.4189 24.2757 10.4888 24.2881 10.5627C24.3005 10.6365 24.2956 10.7123 24.2739 10.7839L22.615 16.261C22.585 16.3584 22.525 16.4436 22.4437 16.504C22.3625 16.5645 22.2643 16.597 22.1635 16.5969H10.9152C10.8143 16.5971 10.716 16.6299 10.6348 16.6905C10.5536 16.7512 10.4936 16.8365 10.4637 16.9341L8.49639 23.3293C8.46626 23.4267 8.40626 23.512 8.32509 23.5726C8.24391 23.6332 8.14577 23.6661 8.0449 23.6665H0.472316C0.3989 23.6661 0.326589 23.6483 0.261093 23.6148C0.195596 23.5812 0.138708 23.5326 0.0949211 23.473C0.0511337 23.4133 0.021646 23.3442 0.00878658 23.271C-0.00407287 23.1978 4.80457e-05 23.1226 0.0208239 23.0513L6.85956 0.67022C6.88951 0.572645 6.94946 0.487305 7.03068 0.426646C7.1119 0.365986 7.21013 0.333179 7.31106 0.333008H30.6872C30.7613 0.332918 30.8344 0.35048 30.9005 0.384276C30.9667 0.418071 31.024 0.467152 31.068 0.52755C31.1119 0.587948 31.1412 0.657969 31.1535 0.731951C31.1658 0.805934 31.1607 0.881803 31.1387 0.953425L29.187 7.32884C29.157 7.42641 29.0971 7.51175 29.0158 7.57241C28.9346 7.63307 28.8364 7.66588 28.7355 7.66605H13.6306C13.5297 7.66622 13.4315 7.69903 13.3503 7.75969C13.2691 7.82035 13.2091 7.90568 13.1792 8.00326Z" fill="white"/>
            <path d="M34.4409 23.6665H26.8696C26.7958 23.6669 26.7228 23.6498 26.6567 23.6165C26.5905 23.5833 26.5329 23.5349 26.4886 23.4751C26.4442 23.4153 26.4142 23.3459 26.4011 23.2723C26.388 23.1987 26.392 23.1231 26.4129 23.0513L33.2569 0.67022C33.2868 0.572645 33.3468 0.487305 33.428 0.426646C33.5092 0.365986 33.6074 0.333179 33.7084 0.333008H41.2796C41.3537 0.332918 41.4268 0.35048 41.493 0.384276C41.5591 0.418071 41.6165 0.467152 41.6605 0.52755C41.7044 0.587948 41.7337 0.657969 41.746 0.731951C41.7583 0.805934 41.7532 0.881803 41.7311 0.953425L34.8924 23.3293C34.8626 23.427 34.8027 23.5124 34.7215 23.5731C34.6402 23.6338 34.5419 23.6665 34.4409 23.6665Z" fill="white"/>
            <path d="M69.6782 7.66612H60.5026C60.4017 7.66609 60.3033 7.69882 60.2221 7.75951C60.1408 7.82019 60.0809 7.90565 60.0511 8.00334L55.3671 23.3294C55.3371 23.4269 55.2772 23.5123 55.196 23.5729C55.1147 23.6336 55.0165 23.6664 54.9156 23.6666H47.3404C47.2663 23.6667 47.1932 23.6491 47.1271 23.6153C47.0609 23.5815 47.0035 23.5324 46.9596 23.472C46.9156 23.4116 46.8863 23.3416 46.8741 23.2676C46.8618 23.1936 46.8669 23.1178 46.8889 23.0461L51.3947 8.28654C51.4165 8.21493 51.4214 8.13915 51.409 8.06528C51.3966 7.99142 51.3672 7.92152 51.3233 7.8612C51.2794 7.80088 51.2222 7.75181 51.1562 7.71794C51.0902 7.68406 51.0172 7.66631 50.9432 7.66612H42.3519C42.2776 7.66677 42.2042 7.64967 42.1377 7.61622C42.0711 7.58276 42.0134 7.53389 41.969 7.47357C41.9246 7.41326 41.8949 7.34319 41.8823 7.26908C41.8697 7.19496 41.8746 7.11889 41.8965 7.04702L43.8482 0.670295C43.8781 0.57272 43.9381 0.48738 44.0193 0.426721C44.1005 0.366062 44.1987 0.333254 44.2997 0.333083H71.6234C71.6981 0.331737 71.7722 0.348379 71.8393 0.381639C71.9065 0.414899 71.9649 0.463828 72.0097 0.5244C72.0546 0.584972 72.0846 0.655457 72.0973 0.730056C72.1099 0.804655 72.1049 0.881236 72.0827 0.953501L70.131 7.32891C70.1012 7.42681 70.0411 7.51243 69.9595 7.57314C69.878 7.63385 69.7794 7.66644 69.6782 7.66612Z" fill="white"/>
            <path d="M97.8581 16.7668C96.6871 20.6 93.4772 23.6665 88.2428 23.6665H67.815C67.7412 23.6669 67.6683 23.6499 67.6021 23.6166C67.536 23.5834 67.4785 23.5349 67.4342 23.4751C67.3899 23.4153 67.3601 23.3458 67.3472 23.2722C67.3342 23.1986 67.3385 23.123 67.3596 23.0513L74.1984 0.67022C74.2282 0.572535 74.2881 0.487078 74.3693 0.426389C74.4506 0.365699 74.5489 0.332972 74.6499 0.333008H94.3854C99.6212 0.333008 100.501 2.73301 99.4208 6.26056C98.9628 7.76089 97.8022 9.2902 96.276 10.6272C97.836 12.0999 98.6323 14.2325 97.8581 16.7668ZM89.501 16.1003C89.8783 14.866 88.8244 14.866 87.9683 14.866H78.4206L77.6659 17.3332H87.2149C88.071 17.3332 89.1276 17.3332 89.501 16.1003ZM80.3553 8.53279H88.2571C89.1132 8.53279 90.1672 8.53279 90.5549 7.26693C90.9426 6.00107 89.8874 5.99975 89.0313 5.99975H81.1295L80.3553 8.53279Z" fill="white"/>
            <path d="M100.369 11.9671C102.845 3.86608 108.372 0 118.515 0C128.622 0 131.804 3.90033 129.344 11.9671C126.872 20.0667 121.287 24 111.179 24C101.038 24 97.8839 20.0997 100.369 11.9671ZM120.784 11.9671C121.527 9.53282 121.343 7.33304 116.273 7.33304C111.202 7.33304 109.685 9.49989 108.93 11.9671C108.165 14.4698 108.383 16.667 113.421 16.667C118.459 16.667 120.029 14.4329 120.784 11.9671Z" fill="white"/>
            <path d="M159.287 11.9997C156.863 19.9334 150.486 23.6665 144.923 23.6665H128.441C128.367 23.6663 128.294 23.6486 128.228 23.6147C128.162 23.5808 128.105 23.5317 128.061 23.4714C128.017 23.4111 127.988 23.3412 127.975 23.2673C127.963 23.1935 127.968 23.1177 127.99 23.0461L134.828 0.67022C134.858 0.572644 134.918 0.487305 135 0.426645C135.081 0.365986 135.179 0.333179 135.28 0.333008H152.053C157.618 0.333008 161.712 4.06605 159.287 11.9997ZM150.727 11.9997C152.051 7.66605 149.022 7.66605 147.177 7.66605H141.6C141.499 7.66622 141.4 7.69903 141.319 7.75969C141.238 7.82034 141.178 7.90568 141.148 8.00326L138.792 15.713C138.77 15.7846 138.765 15.8604 138.777 15.9343C138.79 16.0082 138.819 16.078 138.863 16.1384C138.907 16.1987 138.964 16.2478 139.03 16.2816C139.096 16.3155 139.169 16.3333 139.243 16.3334H144.53C146.377 16.3334 149.402 16.3334 150.727 11.9997Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_3030_19514">
            <rect width="160" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </Link>
        </div>      
        <div className="grow bg-gradient-to-b from-[#C4F7E8] to-[#A5CCF9]">
        {children}
        </div>
        <div className="h-[150px] bg-[#0085BF]"></div>
      </body>
    </html>
  );
}