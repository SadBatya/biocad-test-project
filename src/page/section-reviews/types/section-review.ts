import { type IReview } from "@/shared/types";

export interface ISectionReview {
  enabled: boolean;
  title: string;
  description: string;
  count: number;
  data: IReview[];
}
