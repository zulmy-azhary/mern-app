import type { TDamage, TProcess, TServiceAdvisor, TStatus, TVendor } from ".";

export interface TUnitData {
  workOrder: string;
  plateNumber: string;
  carType: string;
  entryDate: string;
  handOver: string;
  damageType: TDamage;
  vendor: TVendor;
  process: TProcess;
  serviceAdvisor: TServiceAdvisor;
  status: TStatus;
}
