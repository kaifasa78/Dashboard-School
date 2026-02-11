export interface Student {
  id: string;
  name: string;
  nisn: string;
  school: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  score: number;
  date: string;
  path: 'Zonasi' | 'Prestasi' | 'Afirmasi';
}

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
}

export enum UserRole {
  GUEST,
  STUDENT,
  ADMIN
}

export interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
  color?: string;
}
