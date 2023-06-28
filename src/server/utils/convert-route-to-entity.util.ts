const mapping: Record<string, string> = {
  'loyalty-programs': 'loyalty_program',
  'loyalty-program-managers': 'loyalty_program_manager',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
