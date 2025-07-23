export interface MonthData {
  activePartners: number;
  income: number;
}

export interface AdminData {
  adminId: number;
  adminName: string;
  id: number;
  months: {
    activePartners: number;
    fact: MonthData;
    plan: MonthData;
  }[];
}

export interface TotalData {
  fact: MonthData;
  plan: MonthData;
}

export interface ApiData {
  data: {
    success: boolean;
    data: {
      table: AdminData[];
      total: TotalData[];
    };
  };
}
