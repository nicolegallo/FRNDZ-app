
// storage.js
// All app state logic (currently using localStorage, ready for Firebase switch)

export function saveRole(role) {
  localStorage.setItem('frndz_role', role);
}

export function getRole() {
  return localStorage.getItem('frndz_role');
}

export function saveLinkedPlayer(name) {
  localStorage.setItem('frndz_player', name);
}

export function getLinkedPlayer() {
  return localStorage.getItem('frndz_player');
}

export function saveProfile(profileObj) {
  localStorage.setItem('frndz_profile', JSON.stringify(profileObj));
}

export function getProfile() {
  const data = localStorage.getItem('frndz_profile');
  return data ? JSON.parse(data) : null;
}

export function clearAppData() {
  localStorage.removeItem('frndz_role');
  localStorage.removeItem('frndz_player');
  localStorage.removeItem('frndz_profile');
}

export function getCode() {
  return localStorage.getItem("frndz_code");
}
