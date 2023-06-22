const REDIS_URL = process.env.REDIS_URL;
const BASE_URL = process.env.BASE_URL;
const ABHA_CLIENT_URL = process.env.ABHA_CLIENT_URL;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REGISTRY_URL = process.env.REGISTRY_URL;
const CERTIFICATE_API_URL = process.env.CERTIFICATE_API_URL;
const EXPIRE_PROFILE = process.env.EXPIRE_PROFILE;
const ESIGN_ESP_URL = process.env.ESIGN_ESP_URL;
const ESIGN_ESP_PDF_URL = process.env.ESIGN_ESP_PDF_URL;
const ESIGN_FORM_SIGN_URL = process.env.ESIGN_FORM_SIGN_URL;
const ESIGN_FORM_REPLACE_URL = process.env.ESIGN_FORM_REPLACE_URL;
const PORTAL_PLEDGE_REGISTER_URL = process.env.PORTAL_PLEDGE_REGISTER_URL;
const SERVICE_ACCOUNT_CLIENT_SECRET = process.env.SERVICE_ACCOUNT_CLIENT_SECRET;
const KEYCLOAK_URL = process.env.KEYCLOAK_URL;
const LOG_LEVEL = process.env.LOG_LEVEL || "INFO";
const NUMBER_OF_DIGITS = process.env.NUMBER_OF_DIGITS || 7;
const UNIQUE_ABHA_ENABLED = process.env.UNIQUE_ABHA_ENABLED === "true" || false;
const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL;
const LOGIN_LINK = process.env.LOGIN_LINK;
const INVITE_TEMPLATE_ID = process.env.INVITE_TEMPLATE_ID;
const NOTIFY_TEMPLATE_ID = process.env.NOTIFY_TEMPLATE_ID;
const UPDATE_TEMPLATE_ID = process.env.UPDATE_TEMPLATE_ID;
const UNPLEDGE_TEMPLATE_ID = process.env.UNPLEDGE_TEMPLATE_ID;
module.exports = {
    REDIS_URL,
    BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REGISTRY_URL,
    CERTIFICATE_API_URL,
    EXPIRE_PROFILE,
    ESIGN_ESP_URL,
    ESIGN_FORM_SIGN_URL,
    ESIGN_FORM_REPLACE_URL,
    PORTAL_PLEDGE_REGISTER_URL,
    ESIGN_ESP_PDF_URL,
    SERVICE_ACCOUNT_CLIENT_SECRET,
    KEYCLOAK_URL,
    LOG_LEVEL,
    NUMBER_OF_DIGITS,
    UNIQUE_ABHA_ENABLED,
    NOTIFICATION_SERVICE_URL,
    LOGIN_LINK,
    INVITE_TEMPLATE_ID,
    NOTIFY_TEMPLATE_ID,
    ABHA_CLIENT_URL,
    UPDATE_TEMPLATE_ID,
    UNPLEDGE_TEMPLATE_ID
}
