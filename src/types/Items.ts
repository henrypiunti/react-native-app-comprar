import { FilterStatus } from "@/enums/FilterStatus";

export type ItemType = {
  id: string;
  status: FilterStatus;
  description: string;
};
