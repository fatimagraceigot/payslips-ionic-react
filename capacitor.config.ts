import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.fatima.payslips",
  appName: "payslips-react",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
