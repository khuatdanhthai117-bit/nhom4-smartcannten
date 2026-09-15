import { roles } from "./store.js";

export function canAccess(role, allowedRoles) {
  return roles.includes(role) && allowedRoles.includes(role);
}

export function sanitizeUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}
