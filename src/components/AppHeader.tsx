import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "./AppHeader.css";

const AppHeader: React.FC = () => {
  return (
    <IonHeader translucent={true}>
      <IonToolbar color="primary">
        <IonTitle>Payslips Homework</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
