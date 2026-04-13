// Generated wrapper
import * as AdminApi from '../api/MisskeyIoAdmin.res.mjs';
import * as DefaultApi from '../api/MisskeyIoDefault.res.mjs';
import * as MetaApi from '../api/MisskeyIoMeta.res.mjs';
import * as WebhooksApi from '../api/MisskeyIoWebhooks.res.mjs';
import * as AntennasApi from '../api/MisskeyIoAntennas.res.mjs';
import * as FederationApi from '../api/MisskeyIoFederation.res.mjs';
import * as AppApi from '../api/MisskeyIoApp.res.mjs';
import * as AuthApi from '../api/MisskeyIoAuth.res.mjs';
import * as AccountApi from '../api/MisskeyIoAccount.res.mjs';
import * as ChannelsApi from '../api/MisskeyIoChannels.res.mjs';
import * as NotesApi from '../api/MisskeyIoNotes.res.mjs';
import * as ChartsApi from '../api/MisskeyIoCharts.res.mjs';
import * as ClipsApi from '../api/MisskeyIoClips.res.mjs';
import * as ClipApi from '../api/MisskeyIoClip.res.mjs';
import * as DriveApi from '../api/MisskeyIoDrive.res.mjs';
import * as UsersApi from '../api/MisskeyIoUsers.res.mjs';
import * as FlashApi from '../api/MisskeyIoFlash.res.mjs';
import * as FlashsApi from '../api/MisskeyIoFlashs.res.mjs';
import * as FollowingApi from '../api/MisskeyIoFollowing.res.mjs';
import * as GalleryApi from '../api/MisskeyIoGallery.res.mjs';
import * as HashtagsApi from '../api/MisskeyIoHashtags.res.mjs';
import * as ReactionsApi from '../api/MisskeyIoReactions.res.mjs';
import * as NotificationsApi from '../api/MisskeyIoNotifications.res.mjs';
import * as PagesApi from '../api/MisskeyIoPages.res.mjs';
import * as ResetPasswordApi from '../api/MisskeyIoResetPassword.res.mjs';
import * as NonProductiveApi from '../api/MisskeyIoNonProductive.res.mjs';
import * as RoleApi from '../api/MisskeyIoRole.res.mjs';
import * as ListsApi from '../api/MisskeyIoLists.res.mjs';
export class MisskeyClient {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  async _fetch(url, method, body) {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    const response = await fetch(this.baseUrl + url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    return response.json();
  }
}

export const Admin = {
  async postAdminAbuseReportResolverCreate(client, request) {
    return AdminApi.postAdminAbuseReportResolverCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportResolverDelete(client, request) {
    return AdminApi.postAdminAbuseReportResolverDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportResolverList(client, request) {
    return AdminApi.postAdminAbuseReportResolverList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportResolverUpdate(client, request) {
    return AdminApi.postAdminAbuseReportResolverUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportNotificationRecipientCreate(client, request) {
    return AdminApi.postAdminAbuseReportNotificationRecipientCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportNotificationRecipientDelete(client, request) {
    return AdminApi.postAdminAbuseReportNotificationRecipientDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportNotificationRecipientList(client, request) {
    return AdminApi.postAdminAbuseReportNotificationRecipientList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportNotificationRecipientShow(client, request) {
    return AdminApi.postAdminAbuseReportNotificationRecipientShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseReportNotificationRecipientUpdate(client, request) {
    return AdminApi.postAdminAbuseReportNotificationRecipientUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAbuseUserReports(client, request) {
    return AdminApi.postAdminAbuseUserReports({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAccountsCreate(client, request) {
    return AdminApi.postAdminAccountsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAccountsDelete(client, request) {
    return AdminApi.postAdminAccountsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAccountsFindByEmail(client, request) {
    return AdminApi.postAdminAccountsFindByEmail({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAccountsPendingList(client, request) {
    return AdminApi.postAdminAccountsPendingList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAccountsPendingRevoke(client, request) {
    return AdminApi.postAdminAccountsPendingRevoke({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAdCreate(client, request) {
    return AdminApi.postAdminAdCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAdDelete(client, request) {
    return AdminApi.postAdminAdDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAdList(client, request) {
    return AdminApi.postAdminAdList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAdUpdate(client, request) {
    return AdminApi.postAdminAdUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAnnouncementsCreate(client, request) {
    return AdminApi.postAdminAnnouncementsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAnnouncementsDelete(client, request) {
    return AdminApi.postAdminAnnouncementsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAnnouncementsList(client, request) {
    return AdminApi.postAdminAnnouncementsList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAnnouncementsUpdate(client, request) {
    return AdminApi.postAdminAnnouncementsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAvatarDecorationsCreate(client, request) {
    return AdminApi.postAdminAvatarDecorationsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAvatarDecorationsDelete(client, request) {
    return AdminApi.postAdminAvatarDecorationsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAvatarDecorationsList(client, request) {
    return AdminApi.postAdminAvatarDecorationsList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminAvatarDecorationsUpdate(client, request) {
    return AdminApi.postAdminAvatarDecorationsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminCaptchaCurrent(client) {
    return AdminApi.postAdminCaptchaCurrent({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminCaptchaSave(client, request) {
    return AdminApi.postAdminCaptchaSave({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminDriveCleanRemoteFiles(client) {
    return AdminApi.postAdminDriveCleanRemoteFiles({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminDriveCleanup(client) {
    return AdminApi.postAdminDriveCleanup({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminDriveDeleteAllFilesOfAUser(client, request) {
    return AdminApi.postAdminDriveDeleteAllFilesOfAUser({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminDriveFiles(client, request) {
    return AdminApi.postAdminDriveFiles({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminDriveShowFile(client, request) {
    return AdminApi.postAdminDriveShowFile({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiAdd(client, request) {
    return AdminApi.postAdminEmojiAdd({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiAddAliasesBulk(client, request) {
    return AdminApi.postAdminEmojiAddAliasesBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiCopy(client, request) {
    return AdminApi.postAdminEmojiCopy({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiDelete(client, request) {
    return AdminApi.postAdminEmojiDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiDeleteBulk(client, request) {
    return AdminApi.postAdminEmojiDeleteBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiList(client, request) {
    return AdminApi.postAdminEmojiList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiListRemote(client, request) {
    return AdminApi.postAdminEmojiListRemote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiRemoveAliasesBulk(client, request) {
    return AdminApi.postAdminEmojiRemoveAliasesBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiSetAliasesBulk(client, request) {
    return AdminApi.postAdminEmojiSetAliasesBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiSetCategoryBulk(client, request) {
    return AdminApi.postAdminEmojiSetCategoryBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiSetLicenseBulk(client, request) {
    return AdminApi.postAdminEmojiSetLicenseBulk({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminEmojiUpdate(client, request) {
    return AdminApi.postAdminEmojiUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminFederationDeleteAllFiles(client, request) {
    return AdminApi.postAdminFederationDeleteAllFiles({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminFederationRefreshRemoteInstanceMetadata(client, request) {
    return AdminApi.postAdminFederationRefreshRemoteInstanceMetadata({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminFederationRemoveAllFollowing(client, request) {
    return AdminApi.postAdminFederationRemoveAllFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminFederationUpdateInstance(client, request) {
    return AdminApi.postAdminFederationUpdateInstance({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminForwardAbuseUserReport(client, request) {
    return AdminApi.postAdminForwardAbuseUserReport({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminGetIndexStats(client) {
    return AdminApi.postAdminGetIndexStats({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminGetTableStats(client) {
    return AdminApi.postAdminGetTableStats({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminGetUserIps(client, request) {
    return AdminApi.postAdminGetUserIps({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminIndieAuthCreate(client, request) {
    return AdminApi.postAdminIndieAuthCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminIndieAuthDelete(client, request) {
    return AdminApi.postAdminIndieAuthDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminIndieAuthList(client, request) {
    return AdminApi.postAdminIndieAuthList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminIndieAuthUpdate(client, request) {
    return AdminApi.postAdminIndieAuthUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminInviteCreate(client, request) {
    return AdminApi.postAdminInviteCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminInviteList(client, request) {
    return AdminApi.postAdminInviteList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminPromoCreate(client, request) {
    return AdminApi.postAdminPromoCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminQueueClear(client, request) {
    return AdminApi.postAdminQueueClear({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminQueueDeliverDelayed(client) {
    return AdminApi.postAdminQueueDeliverDelayed({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminQueueInboxDelayed(client) {
    return AdminApi.postAdminQueueInboxDelayed({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminQueuePromote(client, request) {
    return AdminApi.postAdminQueuePromote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminQueueStats(client) {
    return AdminApi.postAdminQueueStats({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRegenerateUserToken(client, request) {
    return AdminApi.postAdminRegenerateUserToken({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRelaysAdd(client, request) {
    return AdminApi.postAdminRelaysAdd({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRelaysList(client) {
    return AdminApi.postAdminRelaysList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRelaysRemove(client, request) {
    return AdminApi.postAdminRelaysRemove({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminResetPassword(client, request) {
    return AdminApi.postAdminResetPassword({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminResolveAbuseUserReport(client, request) {
    return AdminApi.postAdminResolveAbuseUserReport({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesAssign(client, request) {
    return AdminApi.postAdminRolesAssign({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesCreate(client, request) {
    return AdminApi.postAdminRolesCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesDelete(client, request) {
    return AdminApi.postAdminRolesDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesList(client) {
    return AdminApi.postAdminRolesList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesShow(client, request) {
    return AdminApi.postAdminRolesShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesUnassign(client, request) {
    return AdminApi.postAdminRolesUnassign({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesUpdate(client, request) {
    return AdminApi.postAdminRolesUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesUpdateDefaultPolicies(client, request) {
    return AdminApi.postAdminRolesUpdateDefaultPolicies({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesUpdateInlinePolicies(client, request) {
    return AdminApi.postAdminRolesUpdateInlinePolicies({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminRolesUsers(client, request) {
    return AdminApi.postAdminRolesUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSendEmail(client, request) {
    return AdminApi.postAdminSendEmail({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminShowModerationLogs(client, request) {
    return AdminApi.postAdminShowModerationLogs({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminShowUser(client, request) {
    return AdminApi.postAdminShowUser({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminShowUserAccountMoveLogs(client, request) {
    return AdminApi.postAdminShowUserAccountMoveLogs({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminShowUsers(client, request) {
    return AdminApi.postAdminShowUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSsoCreate(client, request) {
    return AdminApi.postAdminSsoCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSsoDelete(client, request) {
    return AdminApi.postAdminSsoDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSsoList(client, request) {
    return AdminApi.postAdminSsoList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSsoUpdate(client, request) {
    return AdminApi.postAdminSsoUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSuspendUser(client, request) {
    return AdminApi.postAdminSuspendUser({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSystemWebhookCreate(client, request) {
    return AdminApi.postAdminSystemWebhookCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSystemWebhookDelete(client, request) {
    return AdminApi.postAdminSystemWebhookDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSystemWebhookList(client, request) {
    return AdminApi.postAdminSystemWebhookList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSystemWebhookShow(client, request) {
    return AdminApi.postAdminSystemWebhookShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminSystemWebhookUpdate(client, request) {
    return AdminApi.postAdminSystemWebhookUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUnsetUserAvatar(client, request) {
    return AdminApi.postAdminUnsetUserAvatar({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUnsetUserBanner(client, request) {
    return AdminApi.postAdminUnsetUserBanner({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUnsetUserMutualLink(client, request) {
    return AdminApi.postAdminUnsetUserMutualLink({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUnsuspendUser(client, request) {
    return AdminApi.postAdminUnsuspendUser({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUpdateAbuseUserReport(client, request) {
    return AdminApi.postAdminUpdateAbuseUserReport({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUpdateMeta(client, request) {
    return AdminApi.postAdminUpdateMeta({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUpdateProxyAccount(client, request) {
    return AdminApi.postAdminUpdateProxyAccount({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUpdateUserName(client, request) {
    return AdminApi.postAdminUpdateUserName({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAdminUpdateUserNote(client, request) {
    return AdminApi.postAdminUpdateUserNote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postV2AdminEmojiList(client, request) {
    return AdminApi.postV2AdminEmojiList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Default = {
  async postAdminEmojiImportZip(client, request) {
    return DefaultApi.postAdminEmojiImportZip({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getBubbleGameRanking(client, request) {
    return DefaultApi.getBubbleGameRanking({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postBubbleGameRanking(client, request) {
    return DefaultApi.postBubbleGameRanking({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postBubbleGameRegister(client, request) {
    return DefaultApi.postBubbleGameRegister({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postExportCustomEmojis(client) {
    return DefaultApi.postExportCustomEmojis({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faDone(client, request) {
    return DefaultApi.postI2faDone({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faKeyDone(client, request) {
    return DefaultApi.postI2faKeyDone({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faPasswordLess(client, request) {
    return DefaultApi.postI2faPasswordLess({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faRegister(client, request) {
    return DefaultApi.postI2faRegister({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faRegisterKey(client, request) {
    return DefaultApi.postI2faRegisterKey({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faRemoveKey(client, request) {
    return DefaultApi.postI2faRemoveKey({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faUnregister(client, request) {
    return DefaultApi.postI2faUnregister({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI2faUpdateKey(client, request) {
    return DefaultApi.postI2faUpdateKey({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIApps(client, request) {
    return DefaultApi.postIApps({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIAuthorizedApps(client, request) {
    return DefaultApi.postIAuthorizedApps({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIChangePassword(client, request) {
    return DefaultApi.postIChangePassword({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIClaimAchievement(client, request) {
    return DefaultApi.postIClaimAchievement({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIDeleteAccount(client, request) {
    return DefaultApi.postIDeleteAccount({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportAntennas(client) {
    return DefaultApi.postIExportAntennas({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportBlocking(client) {
    return DefaultApi.postIExportBlocking({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportClips(client) {
    return DefaultApi.postIExportClips({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportFavorites(client) {
    return DefaultApi.postIExportFavorites({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportFollowing(client, request) {
    return DefaultApi.postIExportFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportMute(client) {
    return DefaultApi.postIExportMute({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportNotes(client) {
    return DefaultApi.postIExportNotes({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIExportUserLists(client) {
    return DefaultApi.postIExportUserLists({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIImportAntennas(client, request) {
    return DefaultApi.postIImportAntennas({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIImportBlocking(client, request) {
    return DefaultApi.postIImportBlocking({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIImportFollowing(client, request) {
    return DefaultApi.postIImportFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIImportMuting(client, request) {
    return DefaultApi.postIImportMuting({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIImportUserLists(client, request) {
    return DefaultApi.postIImportUserLists({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegenerateToken(client, request) {
    return DefaultApi.postIRegenerateToken({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryGet(client, request) {
    return DefaultApi.postIRegistryGet({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryGetAll(client, request) {
    return DefaultApi.postIRegistryGetAll({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryGetDetail(client, request) {
    return DefaultApi.postIRegistryGetDetail({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryKeys(client, request) {
    return DefaultApi.postIRegistryKeys({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryKeysWithType(client, request) {
    return DefaultApi.postIRegistryKeysWithType({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryRemove(client, request) {
    return DefaultApi.postIRegistryRemove({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistryScopesWithDomain(client) {
    return DefaultApi.postIRegistryScopesWithDomain({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRegistrySet(client, request) {
    return DefaultApi.postIRegistrySet({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIRevokeToken(client, request) {
    return DefaultApi.postIRevokeToken({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postISigninHistory(client, request) {
    return DefaultApi.postISigninHistory({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIUpdateEmail(client, request) {
    return DefaultApi.postIUpdateEmail({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagePush(client, request) {
    return DefaultApi.postPagePush({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiCancelMatch(client, request) {
    return DefaultApi.postReversiCancelMatch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiGames(client, request) {
    return DefaultApi.postReversiGames({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiInvitations(client) {
    return DefaultApi.postReversiInvitations({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiMatch(client, request) {
    return DefaultApi.postReversiMatch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiShowGame(client, request) {
    return DefaultApi.postReversiShowGame({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiSurrender(client, request) {
    return DefaultApi.postReversiSurrender({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postReversiVerify(client, request) {
    return DefaultApi.postReversiVerify({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersAchievements(client, request) {
    return DefaultApi.postUsersAchievements({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsCreateFromPublic(client, request) {
    return DefaultApi.postUsersListsCreateFromPublic({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsFavorite(client, request) {
    return DefaultApi.postUsersListsFavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsUnfavorite(client, request) {
    return DefaultApi.postUsersListsUnfavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Meta = {
  async postAdminMeta(client) {
    return MetaApi.postAdminMeta({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAnnouncement(client, request) {
    return MetaApi.postAnnouncement({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAnnouncements(client, request) {
    return MetaApi.postAnnouncements({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAnnouncementsShow(client, request) {
    return MetaApi.postAnnouncementsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getEmoji(client, request) {
    return MetaApi.getEmoji({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postEmoji(client, request) {
    return MetaApi.postEmoji({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getEmojis(client) {
    return MetaApi.getEmojis({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postEmojis(client) {
    return MetaApi.postEmojis({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postEndpoint(client, request) {
    return MetaApi.postEndpoint({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postEndpoints(client) {
    return MetaApi.postEndpoints({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFetchExternalResources(client, request) {
    return MetaApi.postFetchExternalResources({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getFetchRss(client, request) {
    return MetaApi.getFetchRss({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFetchRss(client, request) {
    return MetaApi.postFetchRss({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getGetOnlineUsersCount(client) {
    return MetaApi.getGetOnlineUsersCount({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGetOnlineUsersCount(client) {
    return MetaApi.postGetOnlineUsersCount({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postInviteCreate(client) {
    return MetaApi.postInviteCreate({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postInviteDelete(client, request) {
    return MetaApi.postInviteDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postInviteLimit(client) {
    return MetaApi.postInviteLimit({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postInviteList(client, request) {
    return MetaApi.postInviteList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getMeta(client, request) {
    return MetaApi.getMeta({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMeta(client, request) {
    return MetaApi.postMeta({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPing(client) {
    return MetaApi.postPing({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getStats(client) {
    return MetaApi.getStats({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postStats(client) {
    return MetaApi.postStats({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Webhooks = {
  async postAdminSystemWebhookTest(client, request) {
    return WebhooksApi.postAdminSystemWebhookTest({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksCreate(client, request) {
    return WebhooksApi.postIWebhooksCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksDelete(client, request) {
    return WebhooksApi.postIWebhooksDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksList(client) {
    return WebhooksApi.postIWebhooksList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksShow(client, request) {
    return WebhooksApi.postIWebhooksShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksTest(client, request) {
    return WebhooksApi.postIWebhooksTest({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIWebhooksUpdate(client, request) {
    return WebhooksApi.postIWebhooksUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Antennas = {
  async postAntennasCreate(client, request) {
    return AntennasApi.postAntennasCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAntennasDelete(client, request) {
    return AntennasApi.postAntennasDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAntennasList(client) {
    return AntennasApi.postAntennasList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAntennasNotes(client, request) {
    return AntennasApi.postAntennasNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAntennasShow(client, request) {
    return AntennasApi.postAntennasShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAntennasUpdate(client, request) {
    return AntennasApi.postAntennasUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Federation = {
  async postApGet(client, request) {
    return FederationApi.postApGet({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postApShow(client, request) {
    return FederationApi.postApShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationFollowers(client, request) {
    return FederationApi.postFederationFollowers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationFollowing(client, request) {
    return FederationApi.postFederationFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getFederationInstances(client, request) {
    return FederationApi.getFederationInstances({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationInstances(client, request) {
    return FederationApi.postFederationInstances({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationShowInstance(client, request) {
    return FederationApi.postFederationShowInstance({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getFederationStats(client, request) {
    return FederationApi.getFederationStats({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationStats(client, request) {
    return FederationApi.postFederationStats({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationUpdateRemoteUser(client, request) {
    return FederationApi.postFederationUpdateRemoteUser({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFederationUsers(client, request) {
    return FederationApi.postFederationUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const App = {
  async postAppCreate(client, request) {
    return AppApi.postAppCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAppShow(client, request) {
    return AppApi.postAppShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Auth = {
  async postAuthAccept(client, request) {
    return AuthApi.postAuthAccept({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAuthSessionGenerate(client, request) {
    return AuthApi.postAuthSessionGenerate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAuthSessionShow(client, request) {
    return AuthApi.postAuthSessionShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postAuthSessionUserkey(client, request) {
    return AuthApi.postAuthSessionUserkey({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMiauthGenToken(client, request) {
    return AuthApi.postMiauthGenToken({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Account = {
  async postBlockingCreate(client, request) {
    return AccountApi.postBlockingCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postBlockingDelete(client, request) {
    return AccountApi.postBlockingDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postBlockingList(client, request) {
    return AccountApi.postBlockingList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsAddNote(client, request) {
    return AccountApi.postClipsAddNote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsMyFavorites(client) {
    return AccountApi.postClipsMyFavorites({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsNotes(client, request) {
    return AccountApi.postClipsNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsRemoveNote(client, request) {
    return AccountApi.postClipsRemoveNote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashMy(client, request) {
    return AccountApi.postFlashMy({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashMyLikes(client, request) {
    return AccountApi.postFlashMyLikes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postI(client) {
    return AccountApi.postI({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIFavorites(client, request) {
    return AccountApi.postIFavorites({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIGalleryLikes(client, request) {
    return AccountApi.postIGalleryLikes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIGalleryPosts(client, request) {
    return AccountApi.postIGalleryPosts({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postINotifications(client, request) {
    return AccountApi.postINotifications({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postINotificationsGrouped(client, request) {
    return AccountApi.postINotificationsGrouped({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIPageLikes(client, request) {
    return AccountApi.postIPageLikes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIPages(client, request) {
    return AccountApi.postIPages({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIPin(client, request) {
    return AccountApi.postIPin({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIPurgeTimelineCache(client, request) {
    return AccountApi.postIPurgeTimelineCache({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIReadAnnouncement(client, request) {
    return AccountApi.postIReadAnnouncement({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIUnpin(client, request) {
    return AccountApi.postIUnpin({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIUpdate(client, request) {
    return AccountApi.postIUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMuteCreate(client, request) {
    return AccountApi.postMuteCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMuteDelete(client, request) {
    return AccountApi.postMuteDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMuteList(client, request) {
    return AccountApi.postMuteList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postMyApps(client, request) {
    return AccountApi.postMyApps({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRenoteMuteCreate(client, request) {
    return AccountApi.postRenoteMuteCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRenoteMuteDelete(client, request) {
    return AccountApi.postRenoteMuteDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRenoteMuteList(client, request) {
    return AccountApi.postRenoteMuteList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postSwRegister(client, request) {
    return AccountApi.postSwRegister({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postSwShowRegistration(client, request) {
    return AccountApi.postSwShowRegistration({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postSwUnregister(client, request) {
    return AccountApi.postSwUnregister({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postSwUpdateRegistration(client, request) {
    return AccountApi.postSwUpdateRegistration({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersUpdateMemo(client, request) {
    return AccountApi.postUsersUpdateMemo({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Channels = {
  async postChannelsCreate(client, request) {
    return ChannelsApi.postChannelsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsFavorite(client, request) {
    return ChannelsApi.postChannelsFavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsFeatured(client) {
    return ChannelsApi.postChannelsFeatured({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsFeaturedGames(client) {
    return ChannelsApi.postChannelsFeaturedGames({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsFollow(client, request) {
    return ChannelsApi.postChannelsFollow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsFollowed(client, request) {
    return ChannelsApi.postChannelsFollowed({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsMyFavorites(client) {
    return ChannelsApi.postChannelsMyFavorites({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsOwned(client, request) {
    return ChannelsApi.postChannelsOwned({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsSearch(client, request) {
    return ChannelsApi.postChannelsSearch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsShow(client, request) {
    return ChannelsApi.postChannelsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsUnfavorite(client, request) {
    return ChannelsApi.postChannelsUnfavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsUnfollow(client, request) {
    return ChannelsApi.postChannelsUnfollow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChannelsUpdate(client, request) {
    return ChannelsApi.postChannelsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Notes = {
  async postChannelsTimeline(client, request) {
    return NotesApi.postChannelsTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotes(client, request) {
    return NotesApi.postNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesChildren(client, request) {
    return NotesApi.postNotesChildren({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesConversation(client, request) {
    return NotesApi.postNotesConversation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesCreate(client, request) {
    return NotesApi.postNotesCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesDelete(client, request) {
    return NotesApi.postNotesDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesFavoritesCreate(client, request) {
    return NotesApi.postNotesFavoritesCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesFavoritesDelete(client, request) {
    return NotesApi.postNotesFavoritesDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getNotesFeatured(client, request) {
    return NotesApi.getNotesFeatured({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesFeatured(client, request) {
    return NotesApi.postNotesFeatured({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesGlobalTimeline(client, request) {
    return NotesApi.postNotesGlobalTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesHybridTimeline(client, request) {
    return NotesApi.postNotesHybridTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesLocalTimeline(client, request) {
    return NotesApi.postNotesLocalTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesMentions(client, request) {
    return NotesApi.postNotesMentions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesPollsRecommendation(client, request) {
    return NotesApi.postNotesPollsRecommendation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesPollsVote(client, request) {
    return NotesApi.postNotesPollsVote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getNotesReactions(client, request) {
    return NotesApi.getNotesReactions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesReactions(client, request) {
    return NotesApi.postNotesReactions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesRenotes(client, request) {
    return NotesApi.postNotesRenotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesReplies(client, request) {
    return NotesApi.postNotesReplies({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesScheduledCancel(client, request) {
    return NotesApi.postNotesScheduledCancel({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesScheduledList(client, request) {
    return NotesApi.postNotesScheduledList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesSearch(client, request) {
    return NotesApi.postNotesSearch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesSearchByTag(client, request) {
    return NotesApi.postNotesSearchByTag({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesShow(client, request) {
    return NotesApi.postNotesShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesState(client, request) {
    return NotesApi.postNotesState({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesThreadMutingCreate(client, request) {
    return NotesApi.postNotesThreadMutingCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesThreadMutingDelete(client, request) {
    return NotesApi.postNotesThreadMutingDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesTimeline(client, request) {
    return NotesApi.postNotesTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesTranslate(client, request) {
    return NotesApi.postNotesTranslate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesUnrenote(client, request) {
    return NotesApi.postNotesUnrenote({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesUserListTimeline(client, request) {
    return NotesApi.postNotesUserListTimeline({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPromoRead(client, request) {
    return NotesApi.postPromoRead({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getUsersFeaturedNotes(client, request) {
    return NotesApi.getUsersFeaturedNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersFeaturedNotes(client, request) {
    return NotesApi.postUsersFeaturedNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Charts = {
  async getChartsActiveUsers(client, request) {
    return ChartsApi.getChartsActiveUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsActiveUsers(client, request) {
    return ChartsApi.postChartsActiveUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsApRequest(client, request) {
    return ChartsApi.getChartsApRequest({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsApRequest(client, request) {
    return ChartsApi.postChartsApRequest({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsDrive(client, request) {
    return ChartsApi.getChartsDrive({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsDrive(client, request) {
    return ChartsApi.postChartsDrive({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsFederation(client, request) {
    return ChartsApi.getChartsFederation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsFederation(client, request) {
    return ChartsApi.postChartsFederation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsInstance(client, request) {
    return ChartsApi.getChartsInstance({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsInstance(client, request) {
    return ChartsApi.postChartsInstance({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsNotes(client, request) {
    return ChartsApi.getChartsNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsNotes(client, request) {
    return ChartsApi.postChartsNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUserDrive(client, request) {
    return ChartsApi.getChartsUserDrive({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUserDrive(client, request) {
    return ChartsApi.postChartsUserDrive({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUserFollowing(client, request) {
    return ChartsApi.getChartsUserFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUserFollowing(client, request) {
    return ChartsApi.postChartsUserFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUserNotes(client, request) {
    return ChartsApi.getChartsUserNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUserNotes(client, request) {
    return ChartsApi.postChartsUserNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUserPv(client, request) {
    return ChartsApi.getChartsUserPv({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUserPv(client, request) {
    return ChartsApi.postChartsUserPv({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUserReactions(client, request) {
    return ChartsApi.getChartsUserReactions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUserReactions(client, request) {
    return ChartsApi.postChartsUserReactions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getChartsUsers(client, request) {
    return ChartsApi.getChartsUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postChartsUsers(client, request) {
    return ChartsApi.postChartsUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Clips = {
  async postClipsCreate(client, request) {
    return ClipsApi.postClipsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsDelete(client, request) {
    return ClipsApi.postClipsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsList(client) {
    return ClipsApi.postClipsList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsShow(client, request) {
    return ClipsApi.postClipsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsUpdate(client, request) {
    return ClipsApi.postClipsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesClips(client, request) {
    return ClipsApi.postNotesClips({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Clip = {
  async postClipsFavorite(client, request) {
    return ClipApi.postClipsFavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postClipsUnfavorite(client, request) {
    return ClipApi.postClipsUnfavorite({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Drive = {
  async postDrive(client) {
    return DriveApi.postDrive({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFiles(client, request) {
    return DriveApi.postDriveFiles({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesAttachedNotes(client, request) {
    return DriveApi.postDriveFilesAttachedNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesCheckExistence(client, request) {
    return DriveApi.postDriveFilesCheckExistence({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesCreate(client, request) {
    return DriveApi.postDriveFilesCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesDelete(client, request) {
    return DriveApi.postDriveFilesDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesFind(client, request) {
    return DriveApi.postDriveFilesFind({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesFindByHash(client, request) {
    return DriveApi.postDriveFilesFindByHash({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesShow(client, request) {
    return DriveApi.postDriveFilesShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesUpdate(client, request) {
    return DriveApi.postDriveFilesUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFilesUploadFromUrl(client, request) {
    return DriveApi.postDriveFilesUploadFromUrl({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFolders(client, request) {
    return DriveApi.postDriveFolders({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFoldersCreate(client, request) {
    return DriveApi.postDriveFoldersCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFoldersDelete(client, request) {
    return DriveApi.postDriveFoldersDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFoldersFind(client, request) {
    return DriveApi.postDriveFoldersFind({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFoldersShow(client, request) {
    return DriveApi.postDriveFoldersShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveFoldersUpdate(client, request) {
    return DriveApi.postDriveFoldersUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postDriveStream(client, request) {
    return DriveApi.postDriveStream({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Users = {
  async postEmailAddressAvailable(client, request) {
    return UsersApi.postEmailAddressAvailable({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGetAvatarDecorations(client) {
    return UsersApi.postGetAvatarDecorations({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postIMove(client, request) {
    return UsersApi.postIMove({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPinnedUsers(client) {
    return UsersApi.postPinnedUsers({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getRetention(client) {
    return UsersApi.getRetention({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRetention(client) {
    return UsersApi.postRetention({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsernameAvailable(client, request) {
    return UsersApi.postUsernameAvailable({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsers(client, request) {
    return UsersApi.postUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersClips(client, request) {
    return UsersApi.postUsersClips({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersFlashs(client, request) {
    return UsersApi.postUsersFlashs({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersFollowers(client, request) {
    return UsersApi.postUsersFollowers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersFollowing(client, request) {
    return UsersApi.postUsersFollowing({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersGalleryPosts(client, request) {
    return UsersApi.postUsersGalleryPosts({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersGetFollowingBirthdayUsers(client, request) {
    return UsersApi.postUsersGetFollowingBirthdayUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersGetFrequentlyRepliedUsers(client, request) {
    return UsersApi.postUsersGetFrequentlyRepliedUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersGetSecurityInfo(client, request) {
    return UsersApi.postUsersGetSecurityInfo({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getUsersGetSkebStatus(client, request) {
    return UsersApi.getUsersGetSkebStatus({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersGetSkebStatus(client, request) {
    return UsersApi.postUsersGetSkebStatus({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersNotes(client, request) {
    return UsersApi.postUsersNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersPages(client, request) {
    return UsersApi.postUsersPages({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersReactions(client, request) {
    return UsersApi.postUsersReactions({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersRecommendation(client, request) {
    return UsersApi.postUsersRecommendation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersRelation(client, request) {
    return UsersApi.postUsersRelation({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersReportAbuse(client, request) {
    return UsersApi.postUsersReportAbuse({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersSearch(client, request) {
    return UsersApi.postUsersSearch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersSearchByUsernameAndHost(client, request) {
    return UsersApi.postUsersSearchByUsernameAndHost({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersShow(client, request) {
    return UsersApi.postUsersShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersStats(client, request) {
    return UsersApi.postUsersStats({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Flash = {
  async postFlashCreate(client, request) {
    return FlashApi.postFlashCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashFeatured(client, request) {
    return FlashApi.postFlashFeatured({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashLike(client, request) {
    return FlashApi.postFlashLike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashUnlike(client, request) {
    return FlashApi.postFlashUnlike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashUpdate(client, request) {
    return FlashApi.postFlashUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Flashs = {
  async postFlashDelete(client, request) {
    return FlashsApi.postFlashDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFlashShow(client, request) {
    return FlashsApi.postFlashShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Following = {
  async postFollowingCreate(client, request) {
    return FollowingApi.postFollowingCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingDelete(client, request) {
    return FollowingApi.postFollowingDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingInvalidate(client, request) {
    return FollowingApi.postFollowingInvalidate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingRequestsAccept(client, request) {
    return FollowingApi.postFollowingRequestsAccept({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingRequestsCancel(client, request) {
    return FollowingApi.postFollowingRequestsCancel({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingRequestsList(client, request) {
    return FollowingApi.postFollowingRequestsList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingRequestsReject(client, request) {
    return FollowingApi.postFollowingRequestsReject({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingRequestsSent(client, request) {
    return FollowingApi.postFollowingRequestsSent({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingUpdate(client, request) {
    return FollowingApi.postFollowingUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postFollowingUpdateAll(client, request) {
    return FollowingApi.postFollowingUpdateAll({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Gallery = {
  async postGalleryFeatured(client, request) {
    return GalleryApi.postGalleryFeatured({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPopular(client) {
    return GalleryApi.postGalleryPopular({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPosts(client, request) {
    return GalleryApi.postGalleryPosts({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsCreate(client, request) {
    return GalleryApi.postGalleryPostsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsDelete(client, request) {
    return GalleryApi.postGalleryPostsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsLike(client, request) {
    return GalleryApi.postGalleryPostsLike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsShow(client, request) {
    return GalleryApi.postGalleryPostsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsUnlike(client, request) {
    return GalleryApi.postGalleryPostsUnlike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postGalleryPostsUpdate(client, request) {
    return GalleryApi.postGalleryPostsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Hashtags = {
  async postHashtagsList(client, request) {
    return HashtagsApi.postHashtagsList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postHashtagsSearch(client, request) {
    return HashtagsApi.postHashtagsSearch({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postHashtagsShow(client, request) {
    return HashtagsApi.postHashtagsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async getHashtagsTrend(client) {
    return HashtagsApi.getHashtagsTrend({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postHashtagsTrend(client) {
    return HashtagsApi.postHashtagsTrend({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postHashtagsUsers(client, request) {
    return HashtagsApi.postHashtagsUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Reactions = {
  async postNotesReactionsCreate(client, request) {
    return ReactionsApi.postNotesReactionsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotesReactionsDelete(client, request) {
    return ReactionsApi.postNotesReactionsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Notifications = {
  async postNotificationsCreate(client, request) {
    return NotificationsApi.postNotificationsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotificationsFlush(client) {
    return NotificationsApi.postNotificationsFlush({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotificationsMarkAllAsRead(client) {
    return NotificationsApi.postNotificationsMarkAllAsRead({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postNotificationsTestNotification(client) {
    return NotificationsApi.postNotificationsTestNotification({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Pages = {
  async postPagesCreate(client, request) {
    return PagesApi.postPagesCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesDelete(client, request) {
    return PagesApi.postPagesDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesFeatured(client) {
    return PagesApi.postPagesFeatured({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesLike(client, request) {
    return PagesApi.postPagesLike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesShow(client, request) {
    return PagesApi.postPagesShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesUnlike(client, request) {
    return PagesApi.postPagesUnlike({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postPagesUpdate(client, request) {
    return PagesApi.postPagesUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const ResetPassword = {
  async postRequestResetPassword(client, request) {
    return ResetPasswordApi.postRequestResetPassword({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postResetPassword(client, request) {
    return ResetPasswordApi.postResetPassword({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const NonProductive = {
  async postResetDb(client) {
    return NonProductiveApi.postResetDb({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postTest(client, request) {
    return NonProductiveApi.postTest({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Role = {
  async postRolesList(client) {
    return RoleApi.postRolesList({
      fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRolesNotes(client, request) {
    return RoleApi.postRolesNotes({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRolesShow(client, request) {
    return RoleApi.postRolesShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postRolesUsers(client, request) {
    return RoleApi.postRolesUsers({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

export const Lists = {
  async postUsersListsCreate(client, request) {
    return ListsApi.postUsersListsCreate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsDelete(client, request) {
    return ListsApi.postUsersListsDelete({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsGetMemberships(client, request) {
    return ListsApi.postUsersListsGetMemberships({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsList(client, request) {
    return ListsApi.postUsersListsList({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsPull(client, request) {
    return ListsApi.postUsersListsPull({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsPush(client, request) {
    return ListsApi.postUsersListsPush({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsShow(client, request) {
    return ListsApi.postUsersListsShow({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsUpdate(client, request) {
    return ListsApi.postUsersListsUpdate({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
  async postUsersListsUpdateMembership(client, request) {
    return ListsApi.postUsersListsUpdateMembership({
      body: request, fetch: (url, method, body) => client._fetch(url, method, body)
    });
  },
};

