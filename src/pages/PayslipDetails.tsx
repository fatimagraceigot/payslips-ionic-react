import { FileOpener } from "@capacitor-community/file-opener";
import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import {
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  useIonViewWillEnter,
} from "@ionic/react";
import { format } from "date-fns/format";
import { useState } from "react";
import { useParams } from "react-router";
import AppContent, { ContentBackButtonProps } from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import { Payslip, getPayslip } from "../data/payslip";
import "./PayslipDetails.css";

const getPayslipFormatDate = (date: Date) => {
  return format(date, "MMMM do, yyyy");
};

const PayslipDetails: React.FC = () => {
  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const payslip = getPayslip(parseInt(params.id));
    setPayslip(payslip);
  });

  const downloadPayslip = async (file: string) => {
    const assetFile = "assets/" + file;

    fetch(assetFile).then(async (response) => {
      const blob = await response.blob();

      if (Capacitor.isNativePlatform()) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const systemFile = await Filesystem.writeFile({
            path: file,
            data: reader.result as string,
            directory: Directory.Data,
            recursive: true,
          });

          FileOpener.open({
            filePath: systemFile.uri,
          });
        };
      } else {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = file;
        alink.click();
      }
    });
  };

  const backButtonProp: ContentBackButtonProps = {
    text: "Back to Payslips",
    link: "/payslips",
  };

  return (
    <IonPage>
      <AppHeader></AppHeader>

      <AppContent
        content={
          payslip ? (
            <>
              <h4>Payslip # {payslip.id}</h4>
              <IonItem lines="none">
                <IonLabel color="medium">ID</IonLabel>
                <IonNote color="dark" slot="end">
                  {payslip.id}
                </IonNote>
              </IonItem>
              <IonItem lines="none">
                <IonLabel color="medium">Cycle</IonLabel>
                <IonNote color="dark" slot="end">
                  {getPayslipFormatDate(payslip.fromDate)} to{" "}
                  {getPayslipFormatDate(payslip.toDate)}
                </IonNote>
              </IonItem>
              <IonItem lines="none">
                <IonLabel color="medium">Payslip</IonLabel>

                <IonNote
                  color="primary"
                  className="payslip-link"
                  onClick={() => downloadPayslip(payslip.file)}
                  slot="end"
                >
                  Download payslip
                </IonNote>
              </IonItem>
            </>
          ) : (
            <div>Payslip not found</div>
          )
        }
        backButton={backButtonProp}
      ></AppContent>
    </IonPage>
  );
};

export default PayslipDetails;
