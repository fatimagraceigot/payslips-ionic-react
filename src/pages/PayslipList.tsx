import { IonList, IonPage, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import PayslipListItem from "../components/PayslipListItem";
import { Payslip, getPayslips } from "../data/payslip";
import "./PayslipList.css";

const Payslips: React.FC = () => {
  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useIonViewWillEnter(() => {
    const payslips = getPayslips();
    setPayslips(payslips);
  });

  return (
    <IonPage>
      <AppHeader></AppHeader>

      <AppContent
        content={
          <>
            <h4>Payslips</h4>
            <IonList>
              {payslips.map((p) => (
                <PayslipListItem key={p.id} payslip={p} />
              ))}
            </IonList>
          </>
        }
      ></AppContent>
    </IonPage>
  );
};

export default Payslips;
