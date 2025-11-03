
export interface Company {
  company_id: string;
  company_name: string;
  description?: string;
  industry?: string;
  website?: string;
  location?: string;
  email_domain?: string;
  employee_count?: number;
  created_by?: string;
  created_at?: string; // or Date, depending on how backend sends it
  updated_by?: string;
  updated_at?: string;
}