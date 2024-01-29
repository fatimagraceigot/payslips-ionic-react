import { IonItem, IonLabel } from "@ionic/react";
import { format } from "date-fns/format";
import { Payslip } from "../data/payslip";
import "./PayslipListItem.css";

interface PayslipItemProps {
  payslip: Payslip;
}

const PayslipListItem: React.FC<PayslipItemProps> = ({ payslip }) => {
  const getPayslipFormatDate = (date: Date) => {
    return format(date, "MMM dd");
  };

  const getPayslipYear = (date: Date) => {
    return format(date, "yyyy");
  };

  return (
    <IonItem detail={true} lines="none" routerLink={`/payslip/${payslip.id}`}>
      <IonLabel>
        {getPayslipFormatDate(payslip.fromDate)} -{" "}
        {getPayslipFormatDate(payslip.toDate)}, {getPayslipYear(payslip.toDate)}
      </IonLabel>
    </IonItem>
  );
};

export default PayslipListItem;
