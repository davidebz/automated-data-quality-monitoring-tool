import Keycloak from 'keycloak-js';

// https://www.keycloak.org/securing-apps/javascript-adapter

export const kc = new Keycloak({
    url: "https://auth.opendatahub.com/auth/",
    realm: "noi",
    clientId: "odh-data-quality-web",
});

export async function initAuth() {
    await kc.init({
        onLoad: 'check-sso',
        // avoid full reload of page with check-sso & spa
        silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
    });
}
