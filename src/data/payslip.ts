export interface Payslip {
  id: number;
  fromDate: Date;
  toDate: Date;
  file: string;
}

const generateMockPayslips = (): Payslip[] => {
  let payslipsList: Payslip[] = [];
  const year: number = 2023;

  for (let a = 0; a < 12; a++) {
    payslipsList.push({
      id: a + 1,
      fromDate: new Date(year, a, 1, 0, 0, 0, 0),
      toDate: new Date(year, a + 1, 0, 0, 0, 0),
      file: "deel-homework.pdf",
    });
  }
  return payslipsList;
};

const payslips: Payslip[] = generateMockPayslips();

export const getPayslips = () => generateMockPayslips();

export const getPayslip = (id: number) => payslips.find((p) => p.id === id);
