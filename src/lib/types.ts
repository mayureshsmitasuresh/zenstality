// types.ts
export interface ReviewData {
    day: string;
    positive: number;
    negative: number;
  }
  
  export interface ChartProps {
    data: ReviewData[];
  }

 export interface MetricsProps {
    data: ReviewData[];
  }
  