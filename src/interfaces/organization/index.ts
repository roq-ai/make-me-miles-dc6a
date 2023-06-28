import { LoyaltyProgramInterface } from 'interfaces/loyalty-program';
import { LoyaltyProgramManagerInterface } from 'interfaces/loyalty-program-manager';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  loyalty_program?: LoyaltyProgramInterface[];
  loyalty_program_manager?: LoyaltyProgramManagerInterface[];
  user?: UserInterface;
  _count?: {
    loyalty_program?: number;
    loyalty_program_manager?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
