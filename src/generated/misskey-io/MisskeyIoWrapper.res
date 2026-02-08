// Generated thin wrapper

type client = {
  baseUrl: string,
  token: option<string>,
  fetch: (~url: string, ~method_: string, ~body: option<JSON.t>) => Promise.t<JSON.t>,
}

/** Create a client for Misskey API */
let connect = (~baseUrl: string, ~token: option<string>=?, ~fetch: (~url: string, ~method_: string, ~body: option<JSON.t>) => Promise.t<JSON.t>, ()): client => {
  baseUrl,
  token,
  fetch,
}

module Admin = {
  /** admin/abuse-report-resolver/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  let postAdminAbuseReportResolverCreate = (request: MisskeyIoAdmin.postAdminAbuseReportResolverCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportResolverCreateResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportResolverCreate(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report-resolver/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  let postAdminAbuseReportResolverDelete = (request: MisskeyIoAdmin.postAdminAbuseReportResolverDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportResolverDeleteResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportResolverDelete(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report-resolver/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report-resolvers* */
  let postAdminAbuseReportResolverList = (request: MisskeyIoAdmin.postAdminAbuseReportResolverListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportResolverListResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportResolverList(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report-resolver/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  let postAdminAbuseReportResolverUpdate = (request: MisskeyIoAdmin.postAdminAbuseReportResolverUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportResolverUpdateResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportResolverUpdate(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report/notification-recipient/create - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  let postAdminAbuseReportNotificationRecipientCreate = (request: MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientCreateResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientCreate(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report/notification-recipient/delete - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  let postAdminAbuseReportNotificationRecipientDelete = (request: MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientDeleteResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientDelete(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report/notification-recipient/list - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report:notification-recipient* */
  let postAdminAbuseReportNotificationRecipientList = (request: MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientListResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientList(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report/notification-recipient/show - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report:notification-recipient* */
  let postAdminAbuseReportNotificationRecipientShow = (request: MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientShowRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientShowResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientShow(~body=request, ~fetch=client.fetch)

  /** admin/abuse-report/notification-recipient/update - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  let postAdminAbuseReportNotificationRecipientUpdate = (request: MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientUpdateResponse> => 
    MisskeyIoAdmin.postAdminAbuseReportNotificationRecipientUpdate(~body=request, ~fetch=client.fetch)

  /** admin/abuse-user-reports - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:abuse-user-reports* */
  let postAdminAbuseUserReports = (request: MisskeyIoAdmin.postAdminAbuseUserReportsRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAbuseUserReportsResponse> => 
    MisskeyIoAdmin.postAdminAbuseUserReports(~body=request, ~fetch=client.fetch)

  /** admin/accounts/create - No description provided.

**Credential required**: *No* */
  let postAdminAccountsCreate = (request: MisskeyIoAdmin.postAdminAccountsCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAccountsCreateResponse> => 
    MisskeyIoAdmin.postAdminAccountsCreate(~body=request, ~fetch=client.fetch)

  /** admin/accounts/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  let postAdminAccountsDelete = (request: MisskeyIoAdmin.postAdminAccountsDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAccountsDeleteResponse> => 
    MisskeyIoAdmin.postAdminAccountsDelete(~body=request, ~fetch=client.fetch)

  /** admin/accounts/find-by-email - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:account* */
  let postAdminAccountsFindByEmail = (request: MisskeyIoAdmin.postAdminAccountsFindByEmailRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAccountsFindByEmailResponse> => 
    MisskeyIoAdmin.postAdminAccountsFindByEmail(~body=request, ~fetch=client.fetch)

  /** admin/accounts/pending/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:account* */
  let postAdminAccountsPendingList = (request: MisskeyIoAdmin.postAdminAccountsPendingListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAccountsPendingListResponse> => 
    MisskeyIoAdmin.postAdminAccountsPendingList(~body=request, ~fetch=client.fetch)

  /** admin/accounts/pending/revoke - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  let postAdminAccountsPendingRevoke = (request: MisskeyIoAdmin.postAdminAccountsPendingRevokeRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAccountsPendingRevokeResponse> => 
    MisskeyIoAdmin.postAdminAccountsPendingRevoke(~body=request, ~fetch=client.fetch)

  /** admin/ad/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  let postAdminAdCreate = (request: MisskeyIoAdmin.postAdminAdCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAdCreateResponse> => 
    MisskeyIoAdmin.postAdminAdCreate(~body=request, ~fetch=client.fetch)

  /** admin/ad/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  let postAdminAdDelete = (request: MisskeyIoAdmin.postAdminAdDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAdDeleteResponse> => 
    MisskeyIoAdmin.postAdminAdDelete(~body=request, ~fetch=client.fetch)

  /** admin/ad/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:ad* */
  let postAdminAdList = (request: MisskeyIoAdmin.postAdminAdListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAdListResponse> => 
    MisskeyIoAdmin.postAdminAdList(~body=request, ~fetch=client.fetch)

  /** admin/ad/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  let postAdminAdUpdate = (request: MisskeyIoAdmin.postAdminAdUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAdUpdateResponse> => 
    MisskeyIoAdmin.postAdminAdUpdate(~body=request, ~fetch=client.fetch)

  /** admin/announcements/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  let postAdminAnnouncementsCreate = (request: MisskeyIoAdmin.postAdminAnnouncementsCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAnnouncementsCreateResponse> => 
    MisskeyIoAdmin.postAdminAnnouncementsCreate(~body=request, ~fetch=client.fetch)

  /** admin/announcements/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  let postAdminAnnouncementsDelete = (request: MisskeyIoAdmin.postAdminAnnouncementsDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAnnouncementsDeleteResponse> => 
    MisskeyIoAdmin.postAdminAnnouncementsDelete(~body=request, ~fetch=client.fetch)

  /** admin/announcements/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:announcements* */
  let postAdminAnnouncementsList = (request: MisskeyIoAdmin.postAdminAnnouncementsListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAnnouncementsListResponse> => 
    MisskeyIoAdmin.postAdminAnnouncementsList(~body=request, ~fetch=client.fetch)

  /** admin/announcements/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  let postAdminAnnouncementsUpdate = (request: MisskeyIoAdmin.postAdminAnnouncementsUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAnnouncementsUpdateResponse> => 
    MisskeyIoAdmin.postAdminAnnouncementsUpdate(~body=request, ~fetch=client.fetch)

  /** admin/avatar-decorations/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  let postAdminAvatarDecorationsCreate = (request: MisskeyIoAdmin.postAdminAvatarDecorationsCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAvatarDecorationsCreateResponse> => 
    MisskeyIoAdmin.postAdminAvatarDecorationsCreate(~body=request, ~fetch=client.fetch)

  /** admin/avatar-decorations/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  let postAdminAvatarDecorationsDelete = (request: MisskeyIoAdmin.postAdminAvatarDecorationsDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAvatarDecorationsDeleteResponse> => 
    MisskeyIoAdmin.postAdminAvatarDecorationsDelete(~body=request, ~fetch=client.fetch)

  /** admin/avatar-decorations/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:avatar-decorations* */
  let postAdminAvatarDecorationsList = (request: MisskeyIoAdmin.postAdminAvatarDecorationsListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAvatarDecorationsListResponse> => 
    MisskeyIoAdmin.postAdminAvatarDecorationsList(~body=request, ~fetch=client.fetch)

  /** admin/avatar-decorations/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  let postAdminAvatarDecorationsUpdate = (request: MisskeyIoAdmin.postAdminAvatarDecorationsUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminAvatarDecorationsUpdateResponse> => 
    MisskeyIoAdmin.postAdminAvatarDecorationsUpdate(~body=request, ~fetch=client.fetch)

  /** admin/captcha/current - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:meta* */
  let postAdminCaptchaCurrent = (~client: client): promise<MisskeyIoAdmin.postAdminCaptchaCurrentResponse> => 
    MisskeyIoAdmin.postAdminCaptchaCurrent(~fetch=client.fetch)

  /** admin/captcha/save - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:meta* */
  let postAdminCaptchaSave = (request: MisskeyIoAdmin.postAdminCaptchaSaveRequest, ~client: client): promise<MisskeyIoAdmin.postAdminCaptchaSaveResponse> => 
    MisskeyIoAdmin.postAdminCaptchaSave(~body=request, ~fetch=client.fetch)

  /** admin/drive/clean-remote-files - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  let postAdminDriveCleanRemoteFiles = (~client: client): promise<MisskeyIoAdmin.postAdminDriveCleanRemoteFilesResponse> => 
    MisskeyIoAdmin.postAdminDriveCleanRemoteFiles(~fetch=client.fetch)

  /** admin/drive/cleanup - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  let postAdminDriveCleanup = (~client: client): promise<MisskeyIoAdmin.postAdminDriveCleanupResponse> => 
    MisskeyIoAdmin.postAdminDriveCleanup(~fetch=client.fetch)

  /** admin/drive/delete-all-files-of-a-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  let postAdminDriveDeleteAllFilesOfAUser = (request: MisskeyIoAdmin.postAdminDriveDeleteAllFilesOfAUserRequest, ~client: client): promise<MisskeyIoAdmin.postAdminDriveDeleteAllFilesOfAUserResponse> => 
    MisskeyIoAdmin.postAdminDriveDeleteAllFilesOfAUser(~body=request, ~fetch=client.fetch)

  /** admin/drive/files - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:drive* */
  let postAdminDriveFiles = (request: MisskeyIoAdmin.postAdminDriveFilesRequest, ~client: client): promise<MisskeyIoAdmin.postAdminDriveFilesResponse> => 
    MisskeyIoAdmin.postAdminDriveFiles(~body=request, ~fetch=client.fetch)

  /** admin/drive/show-file - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:drive* */
  let postAdminDriveShowFile = (request: MisskeyIoAdmin.postAdminDriveShowFileRequest, ~client: client): promise<MisskeyIoAdmin.postAdminDriveShowFileResponse> => 
    MisskeyIoAdmin.postAdminDriveShowFile(~body=request, ~fetch=client.fetch)

  /** admin/emoji/add - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiAdd = (request: MisskeyIoAdmin.postAdminEmojiAddRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiAddResponse> => 
    MisskeyIoAdmin.postAdminEmojiAdd(~body=request, ~fetch=client.fetch)

  /** admin/emoji/add-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiAddAliasesBulk = (request: MisskeyIoAdmin.postAdminEmojiAddAliasesBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiAddAliasesBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiAddAliasesBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/copy - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiCopy = (request: MisskeyIoAdmin.postAdminEmojiCopyRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiCopyResponse> => 
    MisskeyIoAdmin.postAdminEmojiCopy(~body=request, ~fetch=client.fetch)

  /** admin/emoji/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiDelete = (request: MisskeyIoAdmin.postAdminEmojiDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiDeleteResponse> => 
    MisskeyIoAdmin.postAdminEmojiDelete(~body=request, ~fetch=client.fetch)

  /** admin/emoji/delete-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiDeleteBulk = (request: MisskeyIoAdmin.postAdminEmojiDeleteBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiDeleteBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiDeleteBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  let postAdminEmojiList = (request: MisskeyIoAdmin.postAdminEmojiListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiListResponse> => 
    MisskeyIoAdmin.postAdminEmojiList(~body=request, ~fetch=client.fetch)

  /** admin/emoji/list-remote - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  let postAdminEmojiListRemote = (request: MisskeyIoAdmin.postAdminEmojiListRemoteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiListRemoteResponse> => 
    MisskeyIoAdmin.postAdminEmojiListRemote(~body=request, ~fetch=client.fetch)

  /** admin/emoji/remove-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiRemoveAliasesBulk = (request: MisskeyIoAdmin.postAdminEmojiRemoveAliasesBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiRemoveAliasesBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiRemoveAliasesBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/set-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiSetAliasesBulk = (request: MisskeyIoAdmin.postAdminEmojiSetAliasesBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiSetAliasesBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiSetAliasesBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/set-category-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiSetCategoryBulk = (request: MisskeyIoAdmin.postAdminEmojiSetCategoryBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiSetCategoryBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiSetCategoryBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/set-license-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiSetLicenseBulk = (request: MisskeyIoAdmin.postAdminEmojiSetLicenseBulkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiSetLicenseBulkResponse> => 
    MisskeyIoAdmin.postAdminEmojiSetLicenseBulk(~body=request, ~fetch=client.fetch)

  /** admin/emoji/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  let postAdminEmojiUpdate = (request: MisskeyIoAdmin.postAdminEmojiUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminEmojiUpdateResponse> => 
    MisskeyIoAdmin.postAdminEmojiUpdate(~body=request, ~fetch=client.fetch)

  /** admin/federation/delete-all-files - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  let postAdminFederationDeleteAllFiles = (request: MisskeyIoAdmin.postAdminFederationDeleteAllFilesRequest, ~client: client): promise<MisskeyIoAdmin.postAdminFederationDeleteAllFilesResponse> => 
    MisskeyIoAdmin.postAdminFederationDeleteAllFiles(~body=request, ~fetch=client.fetch)

  /** admin/federation/refresh-remote-instance-metadata - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  let postAdminFederationRefreshRemoteInstanceMetadata = (request: MisskeyIoAdmin.postAdminFederationRefreshRemoteInstanceMetadataRequest, ~client: client): promise<MisskeyIoAdmin.postAdminFederationRefreshRemoteInstanceMetadataResponse> => 
    MisskeyIoAdmin.postAdminFederationRefreshRemoteInstanceMetadata(~body=request, ~fetch=client.fetch)

  /** admin/federation/remove-all-following - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  let postAdminFederationRemoveAllFollowing = (request: MisskeyIoAdmin.postAdminFederationRemoveAllFollowingRequest, ~client: client): promise<MisskeyIoAdmin.postAdminFederationRemoveAllFollowingResponse> => 
    MisskeyIoAdmin.postAdminFederationRemoveAllFollowing(~body=request, ~fetch=client.fetch)

  /** admin/federation/update-instance - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  let postAdminFederationUpdateInstance = (request: MisskeyIoAdmin.postAdminFederationUpdateInstanceRequest, ~client: client): promise<MisskeyIoAdmin.postAdminFederationUpdateInstanceResponse> => 
    MisskeyIoAdmin.postAdminFederationUpdateInstance(~body=request, ~fetch=client.fetch)

  /** admin/forward-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  let postAdminForwardAbuseUserReport = (request: MisskeyIoAdmin.postAdminForwardAbuseUserReportRequest, ~client: client): promise<MisskeyIoAdmin.postAdminForwardAbuseUserReportResponse> => 
    MisskeyIoAdmin.postAdminForwardAbuseUserReport(~body=request, ~fetch=client.fetch)

  /** admin/get-index-stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:index-stats* */
  let postAdminGetIndexStats = (~client: client): promise<MisskeyIoAdmin.postAdminGetIndexStatsResponse> => 
    MisskeyIoAdmin.postAdminGetIndexStats(~fetch=client.fetch)

  /** admin/get-table-stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:table-stats* */
  let postAdminGetTableStats = (~client: client): promise<MisskeyIoAdmin.postAdminGetTableStatsResponse> => 
    MisskeyIoAdmin.postAdminGetTableStats(~fetch=client.fetch)

  /** admin/get-user-ips - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:user-ips* */
  let postAdminGetUserIps = (request: MisskeyIoAdmin.postAdminGetUserIpsRequest, ~client: client): promise<MisskeyIoAdmin.postAdminGetUserIpsResponse> => 
    MisskeyIoAdmin.postAdminGetUserIps(~body=request, ~fetch=client.fetch)

  /** admin/indie-auth/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  let postAdminIndieAuthCreate = (request: MisskeyIoAdmin.postAdminIndieAuthCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminIndieAuthCreateResponse> => 
    MisskeyIoAdmin.postAdminIndieAuthCreate(~body=request, ~fetch=client.fetch)

  /** admin/indie-auth/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  let postAdminIndieAuthDelete = (request: MisskeyIoAdmin.postAdminIndieAuthDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminIndieAuthDeleteResponse> => 
    MisskeyIoAdmin.postAdminIndieAuthDelete(~body=request, ~fetch=client.fetch)

  /** admin/indie-auth/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:indie-auth* */
  let postAdminIndieAuthList = (request: MisskeyIoAdmin.postAdminIndieAuthListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminIndieAuthListResponse> => 
    MisskeyIoAdmin.postAdminIndieAuthList(~body=request, ~fetch=client.fetch)

  /** admin/indie-auth/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  let postAdminIndieAuthUpdate = (request: MisskeyIoAdmin.postAdminIndieAuthUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminIndieAuthUpdateResponse> => 
    MisskeyIoAdmin.postAdminIndieAuthUpdate(~body=request, ~fetch=client.fetch)

  /** admin/invite/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:invite-codes* */
  let postAdminInviteCreate = (request: MisskeyIoAdmin.postAdminInviteCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminInviteCreateResponse> => 
    MisskeyIoAdmin.postAdminInviteCreate(~body=request, ~fetch=client.fetch)

  /** admin/invite/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:invite-codes* */
  let postAdminInviteList = (request: MisskeyIoAdmin.postAdminInviteListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminInviteListResponse> => 
    MisskeyIoAdmin.postAdminInviteList(~body=request, ~fetch=client.fetch)

  /** admin/promo/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:promo* */
  let postAdminPromoCreate = (request: MisskeyIoAdmin.postAdminPromoCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminPromoCreateResponse> => 
    MisskeyIoAdmin.postAdminPromoCreate(~body=request, ~fetch=client.fetch)

  /** admin/queue/clear - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:queue* */
  let postAdminQueueClear = (request: MisskeyIoAdmin.postAdminQueueClearRequest, ~client: client): promise<MisskeyIoAdmin.postAdminQueueClearResponse> => 
    MisskeyIoAdmin.postAdminQueueClear(~body=request, ~fetch=client.fetch)

  /** admin/queue/deliver-delayed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:queue* */
  let postAdminQueueDeliverDelayed = (~client: client): promise<MisskeyIoAdmin.postAdminQueueDeliverDelayedResponse> => 
    MisskeyIoAdmin.postAdminQueueDeliverDelayed(~fetch=client.fetch)

  /** admin/queue/inbox-delayed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:queue* */
  let postAdminQueueInboxDelayed = (~client: client): promise<MisskeyIoAdmin.postAdminQueueInboxDelayedResponse> => 
    MisskeyIoAdmin.postAdminQueueInboxDelayed(~fetch=client.fetch)

  /** admin/queue/promote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:queue* */
  let postAdminQueuePromote = (request: MisskeyIoAdmin.postAdminQueuePromoteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminQueuePromoteResponse> => 
    MisskeyIoAdmin.postAdminQueuePromote(~body=request, ~fetch=client.fetch)

  /** admin/queue/stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  let postAdminQueueStats = (~client: client): promise<MisskeyIoAdmin.postAdminQueueStatsResponse> => 
    MisskeyIoAdmin.postAdminQueueStats(~fetch=client.fetch)

  /** admin/regenerate-user-token - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:regenerate-user-token* */
  let postAdminRegenerateUserToken = (request: MisskeyIoAdmin.postAdminRegenerateUserTokenRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRegenerateUserTokenResponse> => 
    MisskeyIoAdmin.postAdminRegenerateUserToken(~body=request, ~fetch=client.fetch)

  /** admin/relays/add - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:relays* */
  let postAdminRelaysAdd = (request: MisskeyIoAdmin.postAdminRelaysAddRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRelaysAddResponse> => 
    MisskeyIoAdmin.postAdminRelaysAdd(~body=request, ~fetch=client.fetch)

  /** admin/relays/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:relays* */
  let postAdminRelaysList = (~client: client): promise<MisskeyIoAdmin.postAdminRelaysListResponse> => 
    MisskeyIoAdmin.postAdminRelaysList(~fetch=client.fetch)

  /** admin/relays/remove - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:relays* */
  let postAdminRelaysRemove = (request: MisskeyIoAdmin.postAdminRelaysRemoveRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRelaysRemoveResponse> => 
    MisskeyIoAdmin.postAdminRelaysRemove(~body=request, ~fetch=client.fetch)

  /** admin/reset-password - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:reset-password* */
  let postAdminResetPassword = (request: MisskeyIoAdmin.postAdminResetPasswordRequest, ~client: client): promise<MisskeyIoAdmin.postAdminResetPasswordResponse> => 
    MisskeyIoAdmin.postAdminResetPassword(~body=request, ~fetch=client.fetch)

  /** admin/resolve-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  let postAdminResolveAbuseUserReport = (request: MisskeyIoAdmin.postAdminResolveAbuseUserReportRequest, ~client: client): promise<MisskeyIoAdmin.postAdminResolveAbuseUserReportResponse> => 
    MisskeyIoAdmin.postAdminResolveAbuseUserReport(~body=request, ~fetch=client.fetch)

  /** admin/roles/assign - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesAssign = (request: MisskeyIoAdmin.postAdminRolesAssignRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesAssignResponse> => 
    MisskeyIoAdmin.postAdminRolesAssign(~body=request, ~fetch=client.fetch)

  /** admin/roles/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesCreate = (request: MisskeyIoAdmin.postAdminRolesCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesCreateResponse> => 
    MisskeyIoAdmin.postAdminRolesCreate(~body=request, ~fetch=client.fetch)

  /** admin/roles/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesDelete = (request: MisskeyIoAdmin.postAdminRolesDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesDeleteResponse> => 
    MisskeyIoAdmin.postAdminRolesDelete(~body=request, ~fetch=client.fetch)

  /** admin/roles/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:roles* */
  let postAdminRolesList = (~client: client): promise<MisskeyIoAdmin.postAdminRolesListResponse> => 
    MisskeyIoAdmin.postAdminRolesList(~fetch=client.fetch)

  /** admin/roles/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:roles* */
  let postAdminRolesShow = (request: MisskeyIoAdmin.postAdminRolesShowRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesShowResponse> => 
    MisskeyIoAdmin.postAdminRolesShow(~body=request, ~fetch=client.fetch)

  /** admin/roles/unassign - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesUnassign = (request: MisskeyIoAdmin.postAdminRolesUnassignRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesUnassignResponse> => 
    MisskeyIoAdmin.postAdminRolesUnassign(~body=request, ~fetch=client.fetch)

  /** admin/roles/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesUpdate = (request: MisskeyIoAdmin.postAdminRolesUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesUpdateResponse> => 
    MisskeyIoAdmin.postAdminRolesUpdate(~body=request, ~fetch=client.fetch)

  /** admin/roles/update-default-policies - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesUpdateDefaultPolicies = (request: MisskeyIoAdmin.postAdminRolesUpdateDefaultPoliciesRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesUpdateDefaultPoliciesResponse> => 
    MisskeyIoAdmin.postAdminRolesUpdateDefaultPolicies(~body=request, ~fetch=client.fetch)

  /** admin/roles/update-inline-policies - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  let postAdminRolesUpdateInlinePolicies = (request: MisskeyIoAdmin.postAdminRolesUpdateInlinePoliciesRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesUpdateInlinePoliciesResponse> => 
    MisskeyIoAdmin.postAdminRolesUpdateInlinePolicies(~body=request, ~fetch=client.fetch)

  /** admin/roles/users - No description provided.

**Credential required**: *No* / **Permission**: *read:admin:roles* */
  let postAdminRolesUsers = (request: MisskeyIoAdmin.postAdminRolesUsersRequest, ~client: client): promise<MisskeyIoAdmin.postAdminRolesUsersResponse> => 
    MisskeyIoAdmin.postAdminRolesUsers(~body=request, ~fetch=client.fetch)

  /** admin/send-email - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:send-email* */
  let postAdminSendEmail = (request: MisskeyIoAdmin.postAdminSendEmailRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSendEmailResponse> => 
    MisskeyIoAdmin.postAdminSendEmail(~body=request, ~fetch=client.fetch)

  /** admin/show-moderation-logs - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-moderation-log* */
  let postAdminShowModerationLogs = (request: MisskeyIoAdmin.postAdminShowModerationLogsRequest, ~client: client): promise<MisskeyIoAdmin.postAdminShowModerationLogsResponse> => 
    MisskeyIoAdmin.postAdminShowModerationLogs(~body=request, ~fetch=client.fetch)

  /** admin/show-user - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-user* */
  let postAdminShowUser = (request: MisskeyIoAdmin.postAdminShowUserRequest, ~client: client): promise<MisskeyIoAdmin.postAdminShowUserResponse> => 
    MisskeyIoAdmin.postAdminShowUser(~body=request, ~fetch=client.fetch)

  /** admin/show-user-account-move-logs - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-account-move-log* */
  let postAdminShowUserAccountMoveLogs = (request: MisskeyIoAdmin.postAdminShowUserAccountMoveLogsRequest, ~client: client): promise<MisskeyIoAdmin.postAdminShowUserAccountMoveLogsResponse> => 
    MisskeyIoAdmin.postAdminShowUserAccountMoveLogs(~body=request, ~fetch=client.fetch)

  /** admin/show-users - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-user* */
  let postAdminShowUsers = (request: MisskeyIoAdmin.postAdminShowUsersRequest, ~client: client): promise<MisskeyIoAdmin.postAdminShowUsersResponse> => 
    MisskeyIoAdmin.postAdminShowUsers(~body=request, ~fetch=client.fetch)

  /** admin/sso/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  let postAdminSsoCreate = (request: MisskeyIoAdmin.postAdminSsoCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSsoCreateResponse> => 
    MisskeyIoAdmin.postAdminSsoCreate(~body=request, ~fetch=client.fetch)

  /** admin/sso/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  let postAdminSsoDelete = (request: MisskeyIoAdmin.postAdminSsoDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSsoDeleteResponse> => 
    MisskeyIoAdmin.postAdminSsoDelete(~body=request, ~fetch=client.fetch)

  /** admin/sso/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:sso* */
  let postAdminSsoList = (request: MisskeyIoAdmin.postAdminSsoListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSsoListResponse> => 
    MisskeyIoAdmin.postAdminSsoList(~body=request, ~fetch=client.fetch)

  /** admin/sso/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  let postAdminSsoUpdate = (request: MisskeyIoAdmin.postAdminSsoUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSsoUpdateResponse> => 
    MisskeyIoAdmin.postAdminSsoUpdate(~body=request, ~fetch=client.fetch)

  /** admin/suspend-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:suspend-user* */
  let postAdminSuspendUser = (request: MisskeyIoAdmin.postAdminSuspendUserRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSuspendUserResponse> => 
    MisskeyIoAdmin.postAdminSuspendUser(~body=request, ~fetch=client.fetch)

  /** admin/system-webhook/create - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  let postAdminSystemWebhookCreate = (request: MisskeyIoAdmin.postAdminSystemWebhookCreateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSystemWebhookCreateResponse> => 
    MisskeyIoAdmin.postAdminSystemWebhookCreate(~body=request, ~fetch=client.fetch)

  /** admin/system-webhook/delete - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  let postAdminSystemWebhookDelete = (request: MisskeyIoAdmin.postAdminSystemWebhookDeleteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSystemWebhookDeleteResponse> => 
    MisskeyIoAdmin.postAdminSystemWebhookDelete(~body=request, ~fetch=client.fetch)

  /** admin/system-webhook/list - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  let postAdminSystemWebhookList = (request: MisskeyIoAdmin.postAdminSystemWebhookListRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSystemWebhookListResponse> => 
    MisskeyIoAdmin.postAdminSystemWebhookList(~body=request, ~fetch=client.fetch)

  /** admin/system-webhook/show - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  let postAdminSystemWebhookShow = (request: MisskeyIoAdmin.postAdminSystemWebhookShowRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSystemWebhookShowResponse> => 
    MisskeyIoAdmin.postAdminSystemWebhookShow(~body=request, ~fetch=client.fetch)

  /** admin/system-webhook/update - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  let postAdminSystemWebhookUpdate = (request: MisskeyIoAdmin.postAdminSystemWebhookUpdateRequest, ~client: client): promise<MisskeyIoAdmin.postAdminSystemWebhookUpdateResponse> => 
    MisskeyIoAdmin.postAdminSystemWebhookUpdate(~body=request, ~fetch=client.fetch)

  /** admin/unset-user-avatar - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-avatar* */
  let postAdminUnsetUserAvatar = (request: MisskeyIoAdmin.postAdminUnsetUserAvatarRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUnsetUserAvatarResponse> => 
    MisskeyIoAdmin.postAdminUnsetUserAvatar(~body=request, ~fetch=client.fetch)

  /** admin/unset-user-banner - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-banner* */
  let postAdminUnsetUserBanner = (request: MisskeyIoAdmin.postAdminUnsetUserBannerRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUnsetUserBannerResponse> => 
    MisskeyIoAdmin.postAdminUnsetUserBanner(~body=request, ~fetch=client.fetch)

  /** admin/unset-user-mutual-link - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-mutual-link* */
  let postAdminUnsetUserMutualLink = (request: MisskeyIoAdmin.postAdminUnsetUserMutualLinkRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUnsetUserMutualLinkResponse> => 
    MisskeyIoAdmin.postAdminUnsetUserMutualLink(~body=request, ~fetch=client.fetch)

  /** admin/unsuspend-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:unsuspend-user* */
  let postAdminUnsuspendUser = (request: MisskeyIoAdmin.postAdminUnsuspendUserRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUnsuspendUserResponse> => 
    MisskeyIoAdmin.postAdminUnsuspendUser(~body=request, ~fetch=client.fetch)

  /** admin/update-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  let postAdminUpdateAbuseUserReport = (request: MisskeyIoAdmin.postAdminUpdateAbuseUserReportRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUpdateAbuseUserReportResponse> => 
    MisskeyIoAdmin.postAdminUpdateAbuseUserReport(~body=request, ~fetch=client.fetch)

  /** admin/update-meta - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:meta* */
  let postAdminUpdateMeta = (request: MisskeyIoAdmin.postAdminUpdateMetaRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUpdateMetaResponse> => 
    MisskeyIoAdmin.postAdminUpdateMeta(~body=request, ~fetch=client.fetch)

  /** admin/update-proxy-account - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  let postAdminUpdateProxyAccount = (request: MisskeyIoAdmin.postAdminUpdateProxyAccountRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUpdateProxyAccountResponse> => 
    MisskeyIoAdmin.postAdminUpdateProxyAccount(~body=request, ~fetch=client.fetch)

  /** admin/update-user-name - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-name* */
  let postAdminUpdateUserName = (request: MisskeyIoAdmin.postAdminUpdateUserNameRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUpdateUserNameResponse> => 
    MisskeyIoAdmin.postAdminUpdateUserName(~body=request, ~fetch=client.fetch)

  /** admin/update-user-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-note* */
  let postAdminUpdateUserNote = (request: MisskeyIoAdmin.postAdminUpdateUserNoteRequest, ~client: client): promise<MisskeyIoAdmin.postAdminUpdateUserNoteResponse> => 
    MisskeyIoAdmin.postAdminUpdateUserNote(~body=request, ~fetch=client.fetch)

  /** v2/admin/emoji/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  let postV2AdminEmojiList = (request: MisskeyIoAdmin.postV2AdminEmojiListRequest, ~client: client): promise<MisskeyIoAdmin.postV2AdminEmojiListResponse> => 
    MisskeyIoAdmin.postV2AdminEmojiList(~body=request, ~fetch=client.fetch)
}

module Default = {
  /** admin/emoji/import-zip - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postAdminEmojiImportZip = (request: MisskeyIoDefault.postAdminEmojiImportZipRequest, ~client: client): promise<MisskeyIoDefault.postAdminEmojiImportZipResponse> => 
    MisskeyIoDefault.postAdminEmojiImportZip(~body=request, ~fetch=client.fetch)

  /** bubble-game/ranking - No description provided.

**Credential required**: *No* */
  let getBubbleGameRanking = (request: MisskeyIoDefault.getBubbleGameRankingRequest, ~client: client): promise<MisskeyIoDefault.getBubbleGameRankingResponse> => 
    MisskeyIoDefault.getBubbleGameRanking(~body=request, ~fetch=client.fetch)

  /** bubble-game/ranking - No description provided.

**Credential required**: *No* */
  let postBubbleGameRanking = (request: MisskeyIoDefault.postBubbleGameRankingRequest, ~client: client): promise<MisskeyIoDefault.postBubbleGameRankingResponse> => 
    MisskeyIoDefault.postBubbleGameRanking(~body=request, ~fetch=client.fetch)

  /** bubble-game/register - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postBubbleGameRegister = (request: MisskeyIoDefault.postBubbleGameRegisterRequest, ~client: client): promise<MisskeyIoDefault.postBubbleGameRegisterResponse> => 
    MisskeyIoDefault.postBubbleGameRegister(~body=request, ~fetch=client.fetch)

  /** export-custom-emojis - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postExportCustomEmojis = (~client: client): promise<MisskeyIoDefault.postExportCustomEmojisResponse> => 
    MisskeyIoDefault.postExportCustomEmojis(~fetch=client.fetch)

  /** i/2fa/done - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faDone = (request: MisskeyIoDefault.postI2faDoneRequest, ~client: client): promise<MisskeyIoDefault.postI2faDoneResponse> => 
    MisskeyIoDefault.postI2faDone(~body=request, ~fetch=client.fetch)

  /** i/2fa/key-done - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faKeyDone = (request: MisskeyIoDefault.postI2faKeyDoneRequest, ~client: client): promise<MisskeyIoDefault.postI2faKeyDoneResponse> => 
    MisskeyIoDefault.postI2faKeyDone(~body=request, ~fetch=client.fetch)

  /** i/2fa/password-less - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faPasswordLess = (request: MisskeyIoDefault.postI2faPasswordLessRequest, ~client: client): promise<MisskeyIoDefault.postI2faPasswordLessResponse> => 
    MisskeyIoDefault.postI2faPasswordLess(~body=request, ~fetch=client.fetch)

  /** i/2fa/register - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faRegister = (request: MisskeyIoDefault.postI2faRegisterRequest, ~client: client): promise<MisskeyIoDefault.postI2faRegisterResponse> => 
    MisskeyIoDefault.postI2faRegister(~body=request, ~fetch=client.fetch)

  /** i/2fa/register-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faRegisterKey = (request: MisskeyIoDefault.postI2faRegisterKeyRequest, ~client: client): promise<MisskeyIoDefault.postI2faRegisterKeyResponse> => 
    MisskeyIoDefault.postI2faRegisterKey(~body=request, ~fetch=client.fetch)

  /** i/2fa/remove-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faRemoveKey = (request: MisskeyIoDefault.postI2faRemoveKeyRequest, ~client: client): promise<MisskeyIoDefault.postI2faRemoveKeyResponse> => 
    MisskeyIoDefault.postI2faRemoveKey(~body=request, ~fetch=client.fetch)

  /** i/2fa/unregister - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faUnregister = (request: MisskeyIoDefault.postI2faUnregisterRequest, ~client: client): promise<MisskeyIoDefault.postI2faUnregisterResponse> => 
    MisskeyIoDefault.postI2faUnregister(~body=request, ~fetch=client.fetch)

  /** i/2fa/update-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postI2faUpdateKey = (request: MisskeyIoDefault.postI2faUpdateKeyRequest, ~client: client): promise<MisskeyIoDefault.postI2faUpdateKeyResponse> => 
    MisskeyIoDefault.postI2faUpdateKey(~body=request, ~fetch=client.fetch)

  /** i/apps - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIApps = (request: MisskeyIoDefault.postIAppsRequest, ~client: client): promise<MisskeyIoDefault.postIAppsResponse> => 
    MisskeyIoDefault.postIApps(~body=request, ~fetch=client.fetch)

  /** i/authorized-apps - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIAuthorizedApps = (request: MisskeyIoDefault.postIAuthorizedAppsRequest, ~client: client): promise<MisskeyIoDefault.postIAuthorizedAppsResponse> => 
    MisskeyIoDefault.postIAuthorizedApps(~body=request, ~fetch=client.fetch)

  /** i/change-password - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIChangePassword = (request: MisskeyIoDefault.postIChangePasswordRequest, ~client: client): promise<MisskeyIoDefault.postIChangePasswordResponse> => 
    MisskeyIoDefault.postIChangePassword(~body=request, ~fetch=client.fetch)

  /** i/claim-achievement - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIClaimAchievement = (request: MisskeyIoDefault.postIClaimAchievementRequest, ~client: client): promise<MisskeyIoDefault.postIClaimAchievementResponse> => 
    MisskeyIoDefault.postIClaimAchievement(~body=request, ~fetch=client.fetch)

  /** i/delete-account - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIDeleteAccount = (request: MisskeyIoDefault.postIDeleteAccountRequest, ~client: client): promise<MisskeyIoDefault.postIDeleteAccountResponse> => 
    MisskeyIoDefault.postIDeleteAccount(~body=request, ~fetch=client.fetch)

  /** i/export-antennas - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportAntennas = (~client: client): promise<MisskeyIoDefault.postIExportAntennasResponse> => 
    MisskeyIoDefault.postIExportAntennas(~fetch=client.fetch)

  /** i/export-blocking - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportBlocking = (~client: client): promise<MisskeyIoDefault.postIExportBlockingResponse> => 
    MisskeyIoDefault.postIExportBlocking(~fetch=client.fetch)

  /** i/export-clips - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportClips = (~client: client): promise<MisskeyIoDefault.postIExportClipsResponse> => 
    MisskeyIoDefault.postIExportClips(~fetch=client.fetch)

  /** i/export-favorites - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportFavorites = (~client: client): promise<MisskeyIoDefault.postIExportFavoritesResponse> => 
    MisskeyIoDefault.postIExportFavorites(~fetch=client.fetch)

  /** i/export-following - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportFollowing = (request: MisskeyIoDefault.postIExportFollowingRequest, ~client: client): promise<MisskeyIoDefault.postIExportFollowingResponse> => 
    MisskeyIoDefault.postIExportFollowing(~body=request, ~fetch=client.fetch)

  /** i/export-mute - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportMute = (~client: client): promise<MisskeyIoDefault.postIExportMuteResponse> => 
    MisskeyIoDefault.postIExportMute(~fetch=client.fetch)

  /** i/export-notes - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportNotes = (~client: client): promise<MisskeyIoDefault.postIExportNotesResponse> => 
    MisskeyIoDefault.postIExportNotes(~fetch=client.fetch)

  /** i/export-user-lists - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIExportUserLists = (~client: client): promise<MisskeyIoDefault.postIExportUserListsResponse> => 
    MisskeyIoDefault.postIExportUserLists(~fetch=client.fetch)

  /** i/import-antennas - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIImportAntennas = (request: MisskeyIoDefault.postIImportAntennasRequest, ~client: client): promise<MisskeyIoDefault.postIImportAntennasResponse> => 
    MisskeyIoDefault.postIImportAntennas(~body=request, ~fetch=client.fetch)

  /** i/import-blocking - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIImportBlocking = (request: MisskeyIoDefault.postIImportBlockingRequest, ~client: client): promise<MisskeyIoDefault.postIImportBlockingResponse> => 
    MisskeyIoDefault.postIImportBlocking(~body=request, ~fetch=client.fetch)

  /** i/import-following - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIImportFollowing = (request: MisskeyIoDefault.postIImportFollowingRequest, ~client: client): promise<MisskeyIoDefault.postIImportFollowingResponse> => 
    MisskeyIoDefault.postIImportFollowing(~body=request, ~fetch=client.fetch)

  /** i/import-muting - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIImportMuting = (request: MisskeyIoDefault.postIImportMutingRequest, ~client: client): promise<MisskeyIoDefault.postIImportMutingResponse> => 
    MisskeyIoDefault.postIImportMuting(~body=request, ~fetch=client.fetch)

  /** i/import-user-lists - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIImportUserLists = (request: MisskeyIoDefault.postIImportUserListsRequest, ~client: client): promise<MisskeyIoDefault.postIImportUserListsResponse> => 
    MisskeyIoDefault.postIImportUserLists(~body=request, ~fetch=client.fetch)

  /** i/regenerate-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIRegenerateToken = (request: MisskeyIoDefault.postIRegenerateTokenRequest, ~client: client): promise<MisskeyIoDefault.postIRegenerateTokenResponse> => 
    MisskeyIoDefault.postIRegenerateToken(~body=request, ~fetch=client.fetch)

  /** i/registry/get - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIRegistryGet = (request: MisskeyIoDefault.postIRegistryGetRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryGetResponse> => 
    MisskeyIoDefault.postIRegistryGet(~body=request, ~fetch=client.fetch)

  /** i/registry/get-all - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIRegistryGetAll = (request: MisskeyIoDefault.postIRegistryGetAllRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryGetAllResponse> => 
    MisskeyIoDefault.postIRegistryGetAll(~body=request, ~fetch=client.fetch)

  /** i/registry/get-detail - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIRegistryGetDetail = (request: MisskeyIoDefault.postIRegistryGetDetailRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryGetDetailResponse> => 
    MisskeyIoDefault.postIRegistryGetDetail(~body=request, ~fetch=client.fetch)

  /** i/registry/keys - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIRegistryKeys = (request: MisskeyIoDefault.postIRegistryKeysRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryKeysResponse> => 
    MisskeyIoDefault.postIRegistryKeys(~body=request, ~fetch=client.fetch)

  /** i/registry/keys-with-type - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIRegistryKeysWithType = (request: MisskeyIoDefault.postIRegistryKeysWithTypeRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryKeysWithTypeResponse> => 
    MisskeyIoDefault.postIRegistryKeysWithType(~body=request, ~fetch=client.fetch)

  /** i/registry/remove - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIRegistryRemove = (request: MisskeyIoDefault.postIRegistryRemoveRequest, ~client: client): promise<MisskeyIoDefault.postIRegistryRemoveResponse> => 
    MisskeyIoDefault.postIRegistryRemove(~body=request, ~fetch=client.fetch)

  /** i/registry/scopes-with-domain - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIRegistryScopesWithDomain = (~client: client): promise<MisskeyIoDefault.postIRegistryScopesWithDomainResponse> => 
    MisskeyIoDefault.postIRegistryScopesWithDomain(~fetch=client.fetch)

  /** i/registry/set - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIRegistrySet = (request: MisskeyIoDefault.postIRegistrySetRequest, ~client: client): promise<MisskeyIoDefault.postIRegistrySetResponse> => 
    MisskeyIoDefault.postIRegistrySet(~body=request, ~fetch=client.fetch)

  /** i/revoke-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIRevokeToken = (request: MisskeyIoDefault.postIRevokeTokenRequest, ~client: client): promise<MisskeyIoDefault.postIRevokeTokenResponse> => 
    MisskeyIoDefault.postIRevokeToken(~body=request, ~fetch=client.fetch)

  /** i/signin-history - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postISigninHistory = (request: MisskeyIoDefault.postISigninHistoryRequest, ~client: client): promise<MisskeyIoDefault.postISigninHistoryResponse> => 
    MisskeyIoDefault.postISigninHistory(~body=request, ~fetch=client.fetch)

  /** i/update-email - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIUpdateEmail = (request: MisskeyIoDefault.postIUpdateEmailRequest, ~client: client): promise<MisskeyIoDefault.postIUpdateEmailResponse> => 
    MisskeyIoDefault.postIUpdateEmail(~body=request, ~fetch=client.fetch)

  /** page-push - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postPagePush = (request: MisskeyIoDefault.postPagePushRequest, ~client: client): promise<MisskeyIoDefault.postPagePushResponse> => 
    MisskeyIoDefault.postPagePush(~body=request, ~fetch=client.fetch)

  /** reversi/cancel-match - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postReversiCancelMatch = (request: MisskeyIoDefault.postReversiCancelMatchRequest, ~client: client): promise<MisskeyIoDefault.postReversiCancelMatchResponse> => 
    MisskeyIoDefault.postReversiCancelMatch(~body=request, ~fetch=client.fetch)

  /** reversi/games - No description provided.

**Credential required**: *No* */
  let postReversiGames = (request: MisskeyIoDefault.postReversiGamesRequest, ~client: client): promise<MisskeyIoDefault.postReversiGamesResponse> => 
    MisskeyIoDefault.postReversiGames(~body=request, ~fetch=client.fetch)

  /** reversi/invitations - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postReversiInvitations = (~client: client): promise<MisskeyIoDefault.postReversiInvitationsResponse> => 
    MisskeyIoDefault.postReversiInvitations(~fetch=client.fetch)

  /** reversi/match - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postReversiMatch = (request: MisskeyIoDefault.postReversiMatchRequest, ~client: client): promise<MisskeyIoDefault.postReversiMatchResponse> => 
    MisskeyIoDefault.postReversiMatch(~body=request, ~fetch=client.fetch)

  /** reversi/show-game - No description provided.

**Credential required**: *No* */
  let postReversiShowGame = (request: MisskeyIoDefault.postReversiShowGameRequest, ~client: client): promise<MisskeyIoDefault.postReversiShowGameResponse> => 
    MisskeyIoDefault.postReversiShowGame(~body=request, ~fetch=client.fetch)

  /** reversi/surrender - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postReversiSurrender = (request: MisskeyIoDefault.postReversiSurrenderRequest, ~client: client): promise<MisskeyIoDefault.postReversiSurrenderResponse> => 
    MisskeyIoDefault.postReversiSurrender(~body=request, ~fetch=client.fetch)

  /** reversi/verify - No description provided.

**Credential required**: *No* */
  let postReversiVerify = (request: MisskeyIoDefault.postReversiVerifyRequest, ~client: client): promise<MisskeyIoDefault.postReversiVerifyResponse> => 
    MisskeyIoDefault.postReversiVerify(~body=request, ~fetch=client.fetch)

  /** users/achievements - No description provided.

**Credential required**: *No* */
  let postUsersAchievements = (request: MisskeyIoDefault.postUsersAchievementsRequest, ~client: client): promise<MisskeyIoDefault.postUsersAchievementsResponse> => 
    MisskeyIoDefault.postUsersAchievements(~body=request, ~fetch=client.fetch)

  /** users/lists/create-from-public - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsCreateFromPublic = (request: MisskeyIoDefault.postUsersListsCreateFromPublicRequest, ~client: client): promise<MisskeyIoDefault.postUsersListsCreateFromPublicResponse> => 
    MisskeyIoDefault.postUsersListsCreateFromPublic(~body=request, ~fetch=client.fetch)

  /** users/lists/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsFavorite = (request: MisskeyIoDefault.postUsersListsFavoriteRequest, ~client: client): promise<MisskeyIoDefault.postUsersListsFavoriteResponse> => 
    MisskeyIoDefault.postUsersListsFavorite(~body=request, ~fetch=client.fetch)

  /** users/lists/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsUnfavorite = (request: MisskeyIoDefault.postUsersListsUnfavoriteRequest, ~client: client): promise<MisskeyIoDefault.postUsersListsUnfavoriteResponse> => 
    MisskeyIoDefault.postUsersListsUnfavorite(~body=request, ~fetch=client.fetch)
}

module Meta = {
  /** admin/meta - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:meta* */
  let postAdminMeta = (~client: client): promise<MisskeyIoMeta.postAdminMetaResponse> => 
    MisskeyIoMeta.postAdminMeta(~fetch=client.fetch)

  /** announcement - No description provided.

**Credential required**: *No* */
  let postAnnouncement = (request: MisskeyIoMeta.postAnnouncementRequest, ~client: client): promise<MisskeyIoMeta.postAnnouncementResponse> => 
    MisskeyIoMeta.postAnnouncement(~body=request, ~fetch=client.fetch)

  /** announcements - No description provided.

**Credential required**: *No* */
  let postAnnouncements = (request: MisskeyIoMeta.postAnnouncementsRequest, ~client: client): promise<MisskeyIoMeta.postAnnouncementsResponse> => 
    MisskeyIoMeta.postAnnouncements(~body=request, ~fetch=client.fetch)

  /** announcements/show - No description provided.

**Credential required**: *No* */
  let postAnnouncementsShow = (request: MisskeyIoMeta.postAnnouncementsShowRequest, ~client: client): promise<MisskeyIoMeta.postAnnouncementsShowResponse> => 
    MisskeyIoMeta.postAnnouncementsShow(~body=request, ~fetch=client.fetch)

  /** emoji - No description provided.

**Credential required**: *No* */
  let getEmoji = (request: MisskeyIoMeta.getEmojiRequest, ~client: client): promise<MisskeyIoMeta.getEmojiResponse> => 
    MisskeyIoMeta.getEmoji(~body=request, ~fetch=client.fetch)

  /** emoji - No description provided.

**Credential required**: *No* */
  let postEmoji = (request: MisskeyIoMeta.postEmojiRequest, ~client: client): promise<MisskeyIoMeta.postEmojiResponse> => 
    MisskeyIoMeta.postEmoji(~body=request, ~fetch=client.fetch)

  /** emojis - No description provided.

**Credential required**: *No* */
  let getEmojis = (~client: client): promise<MisskeyIoMeta.getEmojisResponse> => 
    MisskeyIoMeta.getEmojis(~fetch=client.fetch)

  /** emojis - No description provided.

**Credential required**: *No* */
  let postEmojis = (~client: client): promise<MisskeyIoMeta.postEmojisResponse> => 
    MisskeyIoMeta.postEmojis(~fetch=client.fetch)

  /** endpoint - No description provided.

**Credential required**: *No* */
  let postEndpoint = (request: MisskeyIoMeta.postEndpointRequest, ~client: client): promise<MisskeyIoMeta.postEndpointResponse> => 
    MisskeyIoMeta.postEndpoint(~body=request, ~fetch=client.fetch)

  /** endpoints - No description provided.

**Credential required**: *No* */
  let postEndpoints = (~client: client): promise<MisskeyIoMeta.postEndpointsResponse> => 
    MisskeyIoMeta.postEndpoints(~fetch=client.fetch)

  /** fetch-external-resources - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postFetchExternalResources = (request: MisskeyIoMeta.postFetchExternalResourcesRequest, ~client: client): promise<MisskeyIoMeta.postFetchExternalResourcesResponse> => 
    MisskeyIoMeta.postFetchExternalResources(~body=request, ~fetch=client.fetch)

  /** fetch-rss - No description provided.

**Credential required**: *No* */
  let getFetchRss = (request: MisskeyIoMeta.getFetchRssRequest, ~client: client): promise<MisskeyIoMeta.getFetchRssResponse> => 
    MisskeyIoMeta.getFetchRss(~body=request, ~fetch=client.fetch)

  /** fetch-rss - No description provided.

**Credential required**: *No* */
  let postFetchRss = (request: MisskeyIoMeta.postFetchRssRequest, ~client: client): promise<MisskeyIoMeta.postFetchRssResponse> => 
    MisskeyIoMeta.postFetchRss(~body=request, ~fetch=client.fetch)

  /** get-online-users-count - No description provided.

**Credential required**: *No* */
  let getGetOnlineUsersCount = (~client: client): promise<MisskeyIoMeta.getGetOnlineUsersCountResponse> => 
    MisskeyIoMeta.getGetOnlineUsersCount(~fetch=client.fetch)

  /** get-online-users-count - No description provided.

**Credential required**: *No* */
  let postGetOnlineUsersCount = (~client: client): promise<MisskeyIoMeta.postGetOnlineUsersCountResponse> => 
    MisskeyIoMeta.postGetOnlineUsersCount(~fetch=client.fetch)

  /** invite/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:invite-codes* */
  let postInviteCreate = (~client: client): promise<MisskeyIoMeta.postInviteCreateResponse> => 
    MisskeyIoMeta.postInviteCreate(~fetch=client.fetch)

  /** invite/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:invite-codes* */
  let postInviteDelete = (request: MisskeyIoMeta.postInviteDeleteRequest, ~client: client): promise<MisskeyIoMeta.postInviteDeleteResponse> => 
    MisskeyIoMeta.postInviteDelete(~body=request, ~fetch=client.fetch)

  /** invite/limit - No description provided.

**Credential required**: *Yes* / **Permission**: *read:invite-codes* */
  let postInviteLimit = (~client: client): promise<MisskeyIoMeta.postInviteLimitResponse> => 
    MisskeyIoMeta.postInviteLimit(~fetch=client.fetch)

  /** invite/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:invite-codes* */
  let postInviteList = (request: MisskeyIoMeta.postInviteListRequest, ~client: client): promise<MisskeyIoMeta.postInviteListResponse> => 
    MisskeyIoMeta.postInviteList(~body=request, ~fetch=client.fetch)

  /** meta - No description provided.

**Credential required**: *No* */
  let getMeta = (request: MisskeyIoMeta.getMetaRequest, ~client: client): promise<MisskeyIoMeta.getMetaResponse> => 
    MisskeyIoMeta.getMeta(~body=request, ~fetch=client.fetch)

  /** meta - No description provided.

**Credential required**: *No* */
  let postMeta = (request: MisskeyIoMeta.postMetaRequest, ~client: client): promise<MisskeyIoMeta.postMetaResponse> => 
    MisskeyIoMeta.postMeta(~body=request, ~fetch=client.fetch)

  /** ping - No description provided.

**Credential required**: *No* */
  let postPing = (~client: client): promise<MisskeyIoMeta.postPingResponse> => 
    MisskeyIoMeta.postPing(~fetch=client.fetch)

  /** stats - No description provided.

**Credential required**: *No* */
  let getStats = (~client: client): promise<MisskeyIoMeta.getStatsResponse> => 
    MisskeyIoMeta.getStats(~fetch=client.fetch)

  /** stats - No description provided.

**Credential required**: *No* */
  let postStats = (~client: client): promise<MisskeyIoMeta.postStatsResponse> => 
    MisskeyIoMeta.postStats(~fetch=client.fetch)
}

module Webhooks = {
  /** admin/system-webhook/test - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:system-webhook* */
  let postAdminSystemWebhookTest = (request: MisskeyIoWebhooks.postAdminSystemWebhookTestRequest, ~client: client): promise<MisskeyIoWebhooks.postAdminSystemWebhookTestResponse> => 
    MisskeyIoWebhooks.postAdminSystemWebhookTest(~body=request, ~fetch=client.fetch)

  /** i/webhooks/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIWebhooksCreate = (request: MisskeyIoWebhooks.postIWebhooksCreateRequest, ~client: client): promise<MisskeyIoWebhooks.postIWebhooksCreateResponse> => 
    MisskeyIoWebhooks.postIWebhooksCreate(~body=request, ~fetch=client.fetch)

  /** i/webhooks/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIWebhooksDelete = (request: MisskeyIoWebhooks.postIWebhooksDeleteRequest, ~client: client): promise<MisskeyIoWebhooks.postIWebhooksDeleteResponse> => 
    MisskeyIoWebhooks.postIWebhooksDelete(~body=request, ~fetch=client.fetch)

  /** i/webhooks/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIWebhooksList = (~client: client): promise<MisskeyIoWebhooks.postIWebhooksListResponse> => 
    MisskeyIoWebhooks.postIWebhooksList(~fetch=client.fetch)

  /** i/webhooks/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIWebhooksShow = (request: MisskeyIoWebhooks.postIWebhooksShowRequest, ~client: client): promise<MisskeyIoWebhooks.postIWebhooksShowResponse> => 
    MisskeyIoWebhooks.postIWebhooksShow(~body=request, ~fetch=client.fetch)

  /** i/webhooks/test - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:account* */
  let postIWebhooksTest = (request: MisskeyIoWebhooks.postIWebhooksTestRequest, ~client: client): promise<MisskeyIoWebhooks.postIWebhooksTestResponse> => 
    MisskeyIoWebhooks.postIWebhooksTest(~body=request, ~fetch=client.fetch)

  /** i/webhooks/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIWebhooksUpdate = (request: MisskeyIoWebhooks.postIWebhooksUpdateRequest, ~client: client): promise<MisskeyIoWebhooks.postIWebhooksUpdateResponse> => 
    MisskeyIoWebhooks.postIWebhooksUpdate(~body=request, ~fetch=client.fetch)
}

module Antennas = {
  /** antennas/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postAntennasCreate = (request: MisskeyIoAntennas.postAntennasCreateRequest, ~client: client): promise<MisskeyIoAntennas.postAntennasCreateResponse> => 
    MisskeyIoAntennas.postAntennasCreate(~body=request, ~fetch=client.fetch)

  /** antennas/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postAntennasDelete = (request: MisskeyIoAntennas.postAntennasDeleteRequest, ~client: client): promise<MisskeyIoAntennas.postAntennasDeleteResponse> => 
    MisskeyIoAntennas.postAntennasDelete(~body=request, ~fetch=client.fetch)

  /** antennas/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postAntennasList = (~client: client): promise<MisskeyIoAntennas.postAntennasListResponse> => 
    MisskeyIoAntennas.postAntennasList(~fetch=client.fetch)

  /** antennas/notes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postAntennasNotes = (request: MisskeyIoAntennas.postAntennasNotesRequest, ~client: client): promise<MisskeyIoAntennas.postAntennasNotesResponse> => 
    MisskeyIoAntennas.postAntennasNotes(~body=request, ~fetch=client.fetch)

  /** antennas/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postAntennasShow = (request: MisskeyIoAntennas.postAntennasShowRequest, ~client: client): promise<MisskeyIoAntennas.postAntennasShowResponse> => 
    MisskeyIoAntennas.postAntennasShow(~body=request, ~fetch=client.fetch)

  /** antennas/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postAntennasUpdate = (request: MisskeyIoAntennas.postAntennasUpdateRequest, ~client: client): promise<MisskeyIoAntennas.postAntennasUpdateResponse> => 
    MisskeyIoAntennas.postAntennasUpdate(~body=request, ~fetch=client.fetch)
}

module Federation = {
  /** ap/get - No description provided.

**Credential required**: *Yes* / **Permission**: *read:federation* */
  let postApGet = (request: MisskeyIoFederation.postApGetRequest, ~client: client): promise<MisskeyIoFederation.postApGetResponse> => 
    MisskeyIoFederation.postApGet(~body=request, ~fetch=client.fetch)

  /** ap/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postApShow = (request: MisskeyIoFederation.postApShowRequest, ~client: client): promise<MisskeyIoFederation.postApShowResponse> => 
    MisskeyIoFederation.postApShow(~body=request, ~fetch=client.fetch)

  /** federation/followers - No description provided.

**Credential required**: *No* */
  let postFederationFollowers = (request: MisskeyIoFederation.postFederationFollowersRequest, ~client: client): promise<MisskeyIoFederation.postFederationFollowersResponse> => 
    MisskeyIoFederation.postFederationFollowers(~body=request, ~fetch=client.fetch)

  /** federation/following - No description provided.

**Credential required**: *No* */
  let postFederationFollowing = (request: MisskeyIoFederation.postFederationFollowingRequest, ~client: client): promise<MisskeyIoFederation.postFederationFollowingResponse> => 
    MisskeyIoFederation.postFederationFollowing(~body=request, ~fetch=client.fetch)

  /** federation/instances - No description provided.

**Credential required**: *No* */
  let getFederationInstances = (request: MisskeyIoFederation.getFederationInstancesRequest, ~client: client): promise<MisskeyIoFederation.getFederationInstancesResponse> => 
    MisskeyIoFederation.getFederationInstances(~body=request, ~fetch=client.fetch)

  /** federation/instances - No description provided.

**Credential required**: *No* */
  let postFederationInstances = (request: MisskeyIoFederation.postFederationInstancesRequest, ~client: client): promise<MisskeyIoFederation.postFederationInstancesResponse> => 
    MisskeyIoFederation.postFederationInstances(~body=request, ~fetch=client.fetch)

  /** federation/show-instance - No description provided.

**Credential required**: *No* */
  let postFederationShowInstance = (request: MisskeyIoFederation.postFederationShowInstanceRequest, ~client: client): promise<MisskeyIoFederation.postFederationShowInstanceResponse> => 
    MisskeyIoFederation.postFederationShowInstance(~body=request, ~fetch=client.fetch)

  /** federation/stats - No description provided.

**Credential required**: *No* */
  let getFederationStats = (request: MisskeyIoFederation.getFederationStatsRequest, ~client: client): promise<MisskeyIoFederation.getFederationStatsResponse> => 
    MisskeyIoFederation.getFederationStats(~body=request, ~fetch=client.fetch)

  /** federation/stats - No description provided.

**Credential required**: *No* */
  let postFederationStats = (request: MisskeyIoFederation.postFederationStatsRequest, ~client: client): promise<MisskeyIoFederation.postFederationStatsResponse> => 
    MisskeyIoFederation.postFederationStats(~body=request, ~fetch=client.fetch)

  /** federation/update-remote-user - No description provided.

**Credential required**: *No* */
  let postFederationUpdateRemoteUser = (request: MisskeyIoFederation.postFederationUpdateRemoteUserRequest, ~client: client): promise<MisskeyIoFederation.postFederationUpdateRemoteUserResponse> => 
    MisskeyIoFederation.postFederationUpdateRemoteUser(~body=request, ~fetch=client.fetch)

  /** federation/users - No description provided.

**Credential required**: *No* */
  let postFederationUsers = (request: MisskeyIoFederation.postFederationUsersRequest, ~client: client): promise<MisskeyIoFederation.postFederationUsersResponse> => 
    MisskeyIoFederation.postFederationUsers(~body=request, ~fetch=client.fetch)
}

module App = {
  /** app/create - No description provided.

**Credential required**: *No* */
  let postAppCreate = (request: MisskeyIoApp.postAppCreateRequest, ~client: client): promise<MisskeyIoApp.postAppCreateResponse> => 
    MisskeyIoApp.postAppCreate(~body=request, ~fetch=client.fetch)

  /** app/show - No description provided.

**Credential required**: *No* */
  let postAppShow = (request: MisskeyIoApp.postAppShowRequest, ~client: client): promise<MisskeyIoApp.postAppShowResponse> => 
    MisskeyIoApp.postAppShow(~body=request, ~fetch=client.fetch)
}

module Auth = {
  /** auth/accept - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postAuthAccept = (request: MisskeyIoAuth.postAuthAcceptRequest, ~client: client): promise<MisskeyIoAuth.postAuthAcceptResponse> => 
    MisskeyIoAuth.postAuthAccept(~body=request, ~fetch=client.fetch)

  /** auth/session/generate - No description provided.

**Credential required**: *No* */
  let postAuthSessionGenerate = (request: MisskeyIoAuth.postAuthSessionGenerateRequest, ~client: client): promise<MisskeyIoAuth.postAuthSessionGenerateResponse> => 
    MisskeyIoAuth.postAuthSessionGenerate(~body=request, ~fetch=client.fetch)

  /** auth/session/show - No description provided.

**Credential required**: *No* */
  let postAuthSessionShow = (request: MisskeyIoAuth.postAuthSessionShowRequest, ~client: client): promise<MisskeyIoAuth.postAuthSessionShowResponse> => 
    MisskeyIoAuth.postAuthSessionShow(~body=request, ~fetch=client.fetch)

  /** auth/session/userkey - No description provided.

**Credential required**: *No* */
  let postAuthSessionUserkey = (request: MisskeyIoAuth.postAuthSessionUserkeyRequest, ~client: client): promise<MisskeyIoAuth.postAuthSessionUserkeyResponse> => 
    MisskeyIoAuth.postAuthSessionUserkey(~body=request, ~fetch=client.fetch)

  /** miauth/gen-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postMiauthGenToken = (request: MisskeyIoAuth.postMiauthGenTokenRequest, ~client: client): promise<MisskeyIoAuth.postMiauthGenTokenResponse> => 
    MisskeyIoAuth.postMiauthGenToken(~body=request, ~fetch=client.fetch)
}

module Account = {
  /** blocking/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:blocks* */
  let postBlockingCreate = (request: MisskeyIoAccount.postBlockingCreateRequest, ~client: client): promise<MisskeyIoAccount.postBlockingCreateResponse> => 
    MisskeyIoAccount.postBlockingCreate(~body=request, ~fetch=client.fetch)

  /** blocking/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:blocks* */
  let postBlockingDelete = (request: MisskeyIoAccount.postBlockingDeleteRequest, ~client: client): promise<MisskeyIoAccount.postBlockingDeleteResponse> => 
    MisskeyIoAccount.postBlockingDelete(~body=request, ~fetch=client.fetch)

  /** blocking/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:blocks* */
  let postBlockingList = (request: MisskeyIoAccount.postBlockingListRequest, ~client: client): promise<MisskeyIoAccount.postBlockingListResponse> => 
    MisskeyIoAccount.postBlockingList(~body=request, ~fetch=client.fetch)

  /** clips/add-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postClipsAddNote = (request: MisskeyIoAccount.postClipsAddNoteRequest, ~client: client): promise<MisskeyIoAccount.postClipsAddNoteResponse> => 
    MisskeyIoAccount.postClipsAddNote(~body=request, ~fetch=client.fetch)

  /** clips/my-favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:clip-favorite* */
  let postClipsMyFavorites = (~client: client): promise<MisskeyIoAccount.postClipsMyFavoritesResponse> => 
    MisskeyIoAccount.postClipsMyFavorites(~fetch=client.fetch)

  /** clips/notes - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  let postClipsNotes = (request: MisskeyIoAccount.postClipsNotesRequest, ~client: client): promise<MisskeyIoAccount.postClipsNotesResponse> => 
    MisskeyIoAccount.postClipsNotes(~body=request, ~fetch=client.fetch)

  /** clips/remove-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postClipsRemoveNote = (request: MisskeyIoAccount.postClipsRemoveNoteRequest, ~client: client): promise<MisskeyIoAccount.postClipsRemoveNoteResponse> => 
    MisskeyIoAccount.postClipsRemoveNote(~body=request, ~fetch=client.fetch)

  /** flash/my - No description provided.

**Credential required**: *Yes* / **Permission**: *read:flash* */
  let postFlashMy = (request: MisskeyIoAccount.postFlashMyRequest, ~client: client): promise<MisskeyIoAccount.postFlashMyResponse> => 
    MisskeyIoAccount.postFlashMy(~body=request, ~fetch=client.fetch)

  /** flash/my-likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:flash-likes* */
  let postFlashMyLikes = (request: MisskeyIoAccount.postFlashMyLikesRequest, ~client: client): promise<MisskeyIoAccount.postFlashMyLikesResponse> => 
    MisskeyIoAccount.postFlashMyLikes(~body=request, ~fetch=client.fetch)

  /** i - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postI = (~client: client): promise<MisskeyIoAccount.postIResponse> => 
    MisskeyIoAccount.postI(~fetch=client.fetch)

  /** i/favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:favorites* */
  let postIFavorites = (request: MisskeyIoAccount.postIFavoritesRequest, ~client: client): promise<MisskeyIoAccount.postIFavoritesResponse> => 
    MisskeyIoAccount.postIFavorites(~body=request, ~fetch=client.fetch)

  /** i/gallery/likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:gallery-likes* */
  let postIGalleryLikes = (request: MisskeyIoAccount.postIGalleryLikesRequest, ~client: client): promise<MisskeyIoAccount.postIGalleryLikesResponse> => 
    MisskeyIoAccount.postIGalleryLikes(~body=request, ~fetch=client.fetch)

  /** i/gallery/posts - No description provided.

**Credential required**: *Yes* / **Permission**: *read:gallery* */
  let postIGalleryPosts = (request: MisskeyIoAccount.postIGalleryPostsRequest, ~client: client): promise<MisskeyIoAccount.postIGalleryPostsResponse> => 
    MisskeyIoAccount.postIGalleryPosts(~body=request, ~fetch=client.fetch)

  /** i/notifications - No description provided.

**Credential required**: *Yes* / **Permission**: *read:notifications* */
  let postINotifications = (request: MisskeyIoAccount.postINotificationsRequest, ~client: client): promise<MisskeyIoAccount.postINotificationsResponse> => 
    MisskeyIoAccount.postINotifications(~body=request, ~fetch=client.fetch)

  /** i/notifications-grouped - No description provided.

**Credential required**: *Yes* / **Permission**: *read:notifications* */
  let postINotificationsGrouped = (request: MisskeyIoAccount.postINotificationsGroupedRequest, ~client: client): promise<MisskeyIoAccount.postINotificationsGroupedResponse> => 
    MisskeyIoAccount.postINotificationsGrouped(~body=request, ~fetch=client.fetch)

  /** i/page-likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:page-likes* */
  let postIPageLikes = (request: MisskeyIoAccount.postIPageLikesRequest, ~client: client): promise<MisskeyIoAccount.postIPageLikesResponse> => 
    MisskeyIoAccount.postIPageLikes(~body=request, ~fetch=client.fetch)

  /** i/pages - No description provided.

**Credential required**: *Yes* / **Permission**: *read:pages* */
  let postIPages = (request: MisskeyIoAccount.postIPagesRequest, ~client: client): promise<MisskeyIoAccount.postIPagesResponse> => 
    MisskeyIoAccount.postIPages(~body=request, ~fetch=client.fetch)

  /** i/pin - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIPin = (request: MisskeyIoAccount.postIPinRequest, ~client: client): promise<MisskeyIoAccount.postIPinResponse> => 
    MisskeyIoAccount.postIPin(~body=request, ~fetch=client.fetch)

  /** i/purge-timeline-cache - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIPurgeTimelineCache = (request: MisskeyIoAccount.postIPurgeTimelineCacheRequest, ~client: client): promise<MisskeyIoAccount.postIPurgeTimelineCacheResponse> => 
    MisskeyIoAccount.postIPurgeTimelineCache(~body=request, ~fetch=client.fetch)

  /** i/read-announcement - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIReadAnnouncement = (request: MisskeyIoAccount.postIReadAnnouncementRequest, ~client: client): promise<MisskeyIoAccount.postIReadAnnouncementResponse> => 
    MisskeyIoAccount.postIReadAnnouncement(~body=request, ~fetch=client.fetch)

  /** i/unpin - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIUnpin = (request: MisskeyIoAccount.postIUnpinRequest, ~client: client): promise<MisskeyIoAccount.postIUnpinResponse> => 
    MisskeyIoAccount.postIUnpin(~body=request, ~fetch=client.fetch)

  /** i/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postIUpdate = (request: MisskeyIoAccount.postIUpdateRequest, ~client: client): promise<MisskeyIoAccount.postIUpdateResponse> => 
    MisskeyIoAccount.postIUpdate(~body=request, ~fetch=client.fetch)

  /** mute/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  let postMuteCreate = (request: MisskeyIoAccount.postMuteCreateRequest, ~client: client): promise<MisskeyIoAccount.postMuteCreateResponse> => 
    MisskeyIoAccount.postMuteCreate(~body=request, ~fetch=client.fetch)

  /** mute/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  let postMuteDelete = (request: MisskeyIoAccount.postMuteDeleteRequest, ~client: client): promise<MisskeyIoAccount.postMuteDeleteResponse> => 
    MisskeyIoAccount.postMuteDelete(~body=request, ~fetch=client.fetch)

  /** mute/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:mutes* */
  let postMuteList = (request: MisskeyIoAccount.postMuteListRequest, ~client: client): promise<MisskeyIoAccount.postMuteListResponse> => 
    MisskeyIoAccount.postMuteList(~body=request, ~fetch=client.fetch)

  /** my/apps - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postMyApps = (request: MisskeyIoAccount.postMyAppsRequest, ~client: client): promise<MisskeyIoAccount.postMyAppsResponse> => 
    MisskeyIoAccount.postMyApps(~body=request, ~fetch=client.fetch)

  /** renote-mute/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  let postRenoteMuteCreate = (request: MisskeyIoAccount.postRenoteMuteCreateRequest, ~client: client): promise<MisskeyIoAccount.postRenoteMuteCreateResponse> => 
    MisskeyIoAccount.postRenoteMuteCreate(~body=request, ~fetch=client.fetch)

  /** renote-mute/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  let postRenoteMuteDelete = (request: MisskeyIoAccount.postRenoteMuteDeleteRequest, ~client: client): promise<MisskeyIoAccount.postRenoteMuteDeleteResponse> => 
    MisskeyIoAccount.postRenoteMuteDelete(~body=request, ~fetch=client.fetch)

  /** renote-mute/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:mutes* */
  let postRenoteMuteList = (request: MisskeyIoAccount.postRenoteMuteListRequest, ~client: client): promise<MisskeyIoAccount.postRenoteMuteListResponse> => 
    MisskeyIoAccount.postRenoteMuteList(~body=request, ~fetch=client.fetch)

  /** sw/register - Register to receive push notifications.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postSwRegister = (request: MisskeyIoAccount.postSwRegisterRequest, ~client: client): promise<MisskeyIoAccount.postSwRegisterResponse> => 
    MisskeyIoAccount.postSwRegister(~body=request, ~fetch=client.fetch)

  /** sw/show-registration - Check push notification registration exists.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postSwShowRegistration = (request: MisskeyIoAccount.postSwShowRegistrationRequest, ~client: client): promise<MisskeyIoAccount.postSwShowRegistrationResponse> => 
    MisskeyIoAccount.postSwShowRegistration(~body=request, ~fetch=client.fetch)

  /** sw/unregister - Unregister from receiving push notifications.

**Credential required**: *No* */
  let postSwUnregister = (request: MisskeyIoAccount.postSwUnregisterRequest, ~client: client): promise<MisskeyIoAccount.postSwUnregisterResponse> => 
    MisskeyIoAccount.postSwUnregister(~body=request, ~fetch=client.fetch)

  /** sw/update-registration - Update push notification registration.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postSwUpdateRegistration = (request: MisskeyIoAccount.postSwUpdateRegistrationRequest, ~client: client): promise<MisskeyIoAccount.postSwUpdateRegistrationResponse> => 
    MisskeyIoAccount.postSwUpdateRegistration(~body=request, ~fetch=client.fetch)

  /** users/update-memo - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersUpdateMemo = (request: MisskeyIoAccount.postUsersUpdateMemoRequest, ~client: client): promise<MisskeyIoAccount.postUsersUpdateMemoResponse> => 
    MisskeyIoAccount.postUsersUpdateMemo(~body=request, ~fetch=client.fetch)
}

module Channels = {
  /** channels/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsCreate = (request: MisskeyIoChannels.postChannelsCreateRequest, ~client: client): promise<MisskeyIoChannels.postChannelsCreateResponse> => 
    MisskeyIoChannels.postChannelsCreate(~body=request, ~fetch=client.fetch)

  /** channels/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsFavorite = (request: MisskeyIoChannels.postChannelsFavoriteRequest, ~client: client): promise<MisskeyIoChannels.postChannelsFavoriteResponse> => 
    MisskeyIoChannels.postChannelsFavorite(~body=request, ~fetch=client.fetch)

  /** channels/featured - No description provided.

**Credential required**: *No* */
  let postChannelsFeatured = (~client: client): promise<MisskeyIoChannels.postChannelsFeaturedResponse> => 
    MisskeyIoChannels.postChannelsFeatured(~fetch=client.fetch)

  /** channels/featured-games - No description provided.

**Credential required**: *No* */
  let postChannelsFeaturedGames = (~client: client): promise<MisskeyIoChannels.postChannelsFeaturedGamesResponse> => 
    MisskeyIoChannels.postChannelsFeaturedGames(~fetch=client.fetch)

  /** channels/follow - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsFollow = (request: MisskeyIoChannels.postChannelsFollowRequest, ~client: client): promise<MisskeyIoChannels.postChannelsFollowResponse> => 
    MisskeyIoChannels.postChannelsFollow(~body=request, ~fetch=client.fetch)

  /** channels/followed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  let postChannelsFollowed = (request: MisskeyIoChannels.postChannelsFollowedRequest, ~client: client): promise<MisskeyIoChannels.postChannelsFollowedResponse> => 
    MisskeyIoChannels.postChannelsFollowed(~body=request, ~fetch=client.fetch)

  /** channels/my-favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  let postChannelsMyFavorites = (~client: client): promise<MisskeyIoChannels.postChannelsMyFavoritesResponse> => 
    MisskeyIoChannels.postChannelsMyFavorites(~fetch=client.fetch)

  /** channels/owned - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  let postChannelsOwned = (request: MisskeyIoChannels.postChannelsOwnedRequest, ~client: client): promise<MisskeyIoChannels.postChannelsOwnedResponse> => 
    MisskeyIoChannels.postChannelsOwned(~body=request, ~fetch=client.fetch)

  /** channels/search - No description provided.

**Credential required**: *No* */
  let postChannelsSearch = (request: MisskeyIoChannels.postChannelsSearchRequest, ~client: client): promise<MisskeyIoChannels.postChannelsSearchResponse> => 
    MisskeyIoChannels.postChannelsSearch(~body=request, ~fetch=client.fetch)

  /** channels/show - No description provided.

**Credential required**: *No* */
  let postChannelsShow = (request: MisskeyIoChannels.postChannelsShowRequest, ~client: client): promise<MisskeyIoChannels.postChannelsShowResponse> => 
    MisskeyIoChannels.postChannelsShow(~body=request, ~fetch=client.fetch)

  /** channels/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsUnfavorite = (request: MisskeyIoChannels.postChannelsUnfavoriteRequest, ~client: client): promise<MisskeyIoChannels.postChannelsUnfavoriteResponse> => 
    MisskeyIoChannels.postChannelsUnfavorite(~body=request, ~fetch=client.fetch)

  /** channels/unfollow - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsUnfollow = (request: MisskeyIoChannels.postChannelsUnfollowRequest, ~client: client): promise<MisskeyIoChannels.postChannelsUnfollowResponse> => 
    MisskeyIoChannels.postChannelsUnfollow(~body=request, ~fetch=client.fetch)

  /** channels/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  let postChannelsUpdate = (request: MisskeyIoChannels.postChannelsUpdateRequest, ~client: client): promise<MisskeyIoChannels.postChannelsUpdateResponse> => 
    MisskeyIoChannels.postChannelsUpdate(~body=request, ~fetch=client.fetch)
}

module Notes = {
  /** channels/timeline - No description provided.

**Credential required**: *No* */
  let postChannelsTimeline = (request: MisskeyIoNotes.postChannelsTimelineRequest, ~client: client): promise<MisskeyIoNotes.postChannelsTimelineResponse> => 
    MisskeyIoNotes.postChannelsTimeline(~body=request, ~fetch=client.fetch)

  /** notes - No description provided.

**Credential required**: *No* */
  let postNotes = (request: MisskeyIoNotes.postNotesRequest, ~client: client): promise<MisskeyIoNotes.postNotesResponse> => 
    MisskeyIoNotes.postNotes(~body=request, ~fetch=client.fetch)

  /** notes/children - No description provided.

**Credential required**: *No* */
  let postNotesChildren = (request: MisskeyIoNotes.postNotesChildrenRequest, ~client: client): promise<MisskeyIoNotes.postNotesChildrenResponse> => 
    MisskeyIoNotes.postNotesChildren(~body=request, ~fetch=client.fetch)

  /** notes/conversation - No description provided.

**Credential required**: *No* */
  let postNotesConversation = (request: MisskeyIoNotes.postNotesConversationRequest, ~client: client): promise<MisskeyIoNotes.postNotesConversationResponse> => 
    MisskeyIoNotes.postNotesConversation(~body=request, ~fetch=client.fetch)

  /** notes/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  let postNotesCreate = (request: MisskeyIoNotes.postNotesCreateRequest, ~client: client): promise<MisskeyIoNotes.postNotesCreateResponse> => 
    MisskeyIoNotes.postNotesCreate(~body=request, ~fetch=client.fetch)

  /** notes/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  let postNotesDelete = (request: MisskeyIoNotes.postNotesDeleteRequest, ~client: client): promise<MisskeyIoNotes.postNotesDeleteResponse> => 
    MisskeyIoNotes.postNotesDelete(~body=request, ~fetch=client.fetch)

  /** notes/favorites/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:favorites* */
  let postNotesFavoritesCreate = (request: MisskeyIoNotes.postNotesFavoritesCreateRequest, ~client: client): promise<MisskeyIoNotes.postNotesFavoritesCreateResponse> => 
    MisskeyIoNotes.postNotesFavoritesCreate(~body=request, ~fetch=client.fetch)

  /** notes/favorites/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:favorites* */
  let postNotesFavoritesDelete = (request: MisskeyIoNotes.postNotesFavoritesDeleteRequest, ~client: client): promise<MisskeyIoNotes.postNotesFavoritesDeleteResponse> => 
    MisskeyIoNotes.postNotesFavoritesDelete(~body=request, ~fetch=client.fetch)

  /** notes/featured - No description provided.

**Credential required**: *No* */
  let getNotesFeatured = (request: MisskeyIoNotes.getNotesFeaturedRequest, ~client: client): promise<MisskeyIoNotes.getNotesFeaturedResponse> => 
    MisskeyIoNotes.getNotesFeatured(~body=request, ~fetch=client.fetch)

  /** notes/featured - No description provided.

**Credential required**: *No* */
  let postNotesFeatured = (request: MisskeyIoNotes.postNotesFeaturedRequest, ~client: client): promise<MisskeyIoNotes.postNotesFeaturedResponse> => 
    MisskeyIoNotes.postNotesFeatured(~body=request, ~fetch=client.fetch)

  /** notes/global-timeline - No description provided.

**Credential required**: *No* */
  let postNotesGlobalTimeline = (request: MisskeyIoNotes.postNotesGlobalTimelineRequest, ~client: client): promise<MisskeyIoNotes.postNotesGlobalTimelineResponse> => 
    MisskeyIoNotes.postNotesGlobalTimeline(~body=request, ~fetch=client.fetch)

  /** notes/hybrid-timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesHybridTimeline = (request: MisskeyIoNotes.postNotesHybridTimelineRequest, ~client: client): promise<MisskeyIoNotes.postNotesHybridTimelineResponse> => 
    MisskeyIoNotes.postNotesHybridTimeline(~body=request, ~fetch=client.fetch)

  /** notes/local-timeline - No description provided.

**Credential required**: *No* */
  let postNotesLocalTimeline = (request: MisskeyIoNotes.postNotesLocalTimelineRequest, ~client: client): promise<MisskeyIoNotes.postNotesLocalTimelineResponse> => 
    MisskeyIoNotes.postNotesLocalTimeline(~body=request, ~fetch=client.fetch)

  /** notes/mentions - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesMentions = (request: MisskeyIoNotes.postNotesMentionsRequest, ~client: client): promise<MisskeyIoNotes.postNotesMentionsResponse> => 
    MisskeyIoNotes.postNotesMentions(~body=request, ~fetch=client.fetch)

  /** notes/polls/recommendation - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesPollsRecommendation = (request: MisskeyIoNotes.postNotesPollsRecommendationRequest, ~client: client): promise<MisskeyIoNotes.postNotesPollsRecommendationResponse> => 
    MisskeyIoNotes.postNotesPollsRecommendation(~body=request, ~fetch=client.fetch)

  /** notes/polls/vote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:votes* */
  let postNotesPollsVote = (request: MisskeyIoNotes.postNotesPollsVoteRequest, ~client: client): promise<MisskeyIoNotes.postNotesPollsVoteResponse> => 
    MisskeyIoNotes.postNotesPollsVote(~body=request, ~fetch=client.fetch)

  /** notes/reactions - No description provided.

**Credential required**: *No* */
  let getNotesReactions = (request: MisskeyIoNotes.getNotesReactionsRequest, ~client: client): promise<MisskeyIoNotes.getNotesReactionsResponse> => 
    MisskeyIoNotes.getNotesReactions(~body=request, ~fetch=client.fetch)

  /** notes/reactions - No description provided.

**Credential required**: *No* */
  let postNotesReactions = (request: MisskeyIoNotes.postNotesReactionsRequest, ~client: client): promise<MisskeyIoNotes.postNotesReactionsResponse> => 
    MisskeyIoNotes.postNotesReactions(~body=request, ~fetch=client.fetch)

  /** notes/renotes - No description provided.

**Credential required**: *No* */
  let postNotesRenotes = (request: MisskeyIoNotes.postNotesRenotesRequest, ~client: client): promise<MisskeyIoNotes.postNotesRenotesResponse> => 
    MisskeyIoNotes.postNotesRenotes(~body=request, ~fetch=client.fetch)

  /** notes/replies - No description provided.

**Credential required**: *No* */
  let postNotesReplies = (request: MisskeyIoNotes.postNotesRepliesRequest, ~client: client): promise<MisskeyIoNotes.postNotesRepliesResponse> => 
    MisskeyIoNotes.postNotesReplies(~body=request, ~fetch=client.fetch)

  /** notes/scheduled/cancel - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  let postNotesScheduledCancel = (request: MisskeyIoNotes.postNotesScheduledCancelRequest, ~client: client): promise<MisskeyIoNotes.postNotesScheduledCancelResponse> => 
    MisskeyIoNotes.postNotesScheduledCancel(~body=request, ~fetch=client.fetch)

  /** notes/scheduled/list - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  let postNotesScheduledList = (request: MisskeyIoNotes.postNotesScheduledListRequest, ~client: client): promise<MisskeyIoNotes.postNotesScheduledListResponse> => 
    MisskeyIoNotes.postNotesScheduledList(~body=request, ~fetch=client.fetch)

  /** notes/search - No description provided.

**Credential required**: *No* */
  let postNotesSearch = (request: MisskeyIoNotes.postNotesSearchRequest, ~client: client): promise<MisskeyIoNotes.postNotesSearchResponse> => 
    MisskeyIoNotes.postNotesSearch(~body=request, ~fetch=client.fetch)

  /** notes/search-by-tag - No description provided.

**Credential required**: *No* */
  let postNotesSearchByTag = (request: MisskeyIoNotes.postNotesSearchByTagRequest, ~client: client): promise<MisskeyIoNotes.postNotesSearchByTagResponse> => 
    MisskeyIoNotes.postNotesSearchByTag(~body=request, ~fetch=client.fetch)

  /** notes/show - No description provided.

**Credential required**: *No* */
  let postNotesShow = (request: MisskeyIoNotes.postNotesShowRequest, ~client: client): promise<MisskeyIoNotes.postNotesShowResponse> => 
    MisskeyIoNotes.postNotesShow(~body=request, ~fetch=client.fetch)

  /** notes/state - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesState = (request: MisskeyIoNotes.postNotesStateRequest, ~client: client): promise<MisskeyIoNotes.postNotesStateResponse> => 
    MisskeyIoNotes.postNotesState(~body=request, ~fetch=client.fetch)

  /** notes/thread-muting/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postNotesThreadMutingCreate = (request: MisskeyIoNotes.postNotesThreadMutingCreateRequest, ~client: client): promise<MisskeyIoNotes.postNotesThreadMutingCreateResponse> => 
    MisskeyIoNotes.postNotesThreadMutingCreate(~body=request, ~fetch=client.fetch)

  /** notes/thread-muting/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postNotesThreadMutingDelete = (request: MisskeyIoNotes.postNotesThreadMutingDeleteRequest, ~client: client): promise<MisskeyIoNotes.postNotesThreadMutingDeleteResponse> => 
    MisskeyIoNotes.postNotesThreadMutingDelete(~body=request, ~fetch=client.fetch)

  /** notes/timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesTimeline = (request: MisskeyIoNotes.postNotesTimelineRequest, ~client: client): promise<MisskeyIoNotes.postNotesTimelineResponse> => 
    MisskeyIoNotes.postNotesTimeline(~body=request, ~fetch=client.fetch)

  /** notes/translate - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesTranslate = (request: MisskeyIoNotes.postNotesTranslateRequest, ~client: client): promise<MisskeyIoNotes.postNotesTranslateResponse> => 
    MisskeyIoNotes.postNotesTranslate(~body=request, ~fetch=client.fetch)

  /** notes/unrenote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  let postNotesUnrenote = (request: MisskeyIoNotes.postNotesUnrenoteRequest, ~client: client): promise<MisskeyIoNotes.postNotesUnrenoteResponse> => 
    MisskeyIoNotes.postNotesUnrenote(~body=request, ~fetch=client.fetch)

  /** notes/user-list-timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postNotesUserListTimeline = (request: MisskeyIoNotes.postNotesUserListTimelineRequest, ~client: client): promise<MisskeyIoNotes.postNotesUserListTimelineResponse> => 
    MisskeyIoNotes.postNotesUserListTimeline(~body=request, ~fetch=client.fetch)

  /** promo/read - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postPromoRead = (request: MisskeyIoNotes.postPromoReadRequest, ~client: client): promise<MisskeyIoNotes.postPromoReadResponse> => 
    MisskeyIoNotes.postPromoRead(~body=request, ~fetch=client.fetch)

  /** users/featured-notes - No description provided.

**Credential required**: *No* */
  let getUsersFeaturedNotes = (request: MisskeyIoNotes.getUsersFeaturedNotesRequest, ~client: client): promise<MisskeyIoNotes.getUsersFeaturedNotesResponse> => 
    MisskeyIoNotes.getUsersFeaturedNotes(~body=request, ~fetch=client.fetch)

  /** users/featured-notes - No description provided.

**Credential required**: *No* */
  let postUsersFeaturedNotes = (request: MisskeyIoNotes.postUsersFeaturedNotesRequest, ~client: client): promise<MisskeyIoNotes.postUsersFeaturedNotesResponse> => 
    MisskeyIoNotes.postUsersFeaturedNotes(~body=request, ~fetch=client.fetch)
}

module Charts = {
  /** charts/active-users - No description provided.

**Credential required**: *No* */
  let getChartsActiveUsers = (request: MisskeyIoCharts.getChartsActiveUsersRequest, ~client: client): promise<MisskeyIoCharts.getChartsActiveUsersResponse> => 
    MisskeyIoCharts.getChartsActiveUsers(~body=request, ~fetch=client.fetch)

  /** charts/active-users - No description provided.

**Credential required**: *No* */
  let postChartsActiveUsers = (request: MisskeyIoCharts.postChartsActiveUsersRequest, ~client: client): promise<MisskeyIoCharts.postChartsActiveUsersResponse> => 
    MisskeyIoCharts.postChartsActiveUsers(~body=request, ~fetch=client.fetch)

  /** charts/ap-request - No description provided.

**Credential required**: *No* */
  let getChartsApRequest = (request: MisskeyIoCharts.getChartsApRequestRequest, ~client: client): promise<MisskeyIoCharts.getChartsApRequestResponse> => 
    MisskeyIoCharts.getChartsApRequest(~body=request, ~fetch=client.fetch)

  /** charts/ap-request - No description provided.

**Credential required**: *No* */
  let postChartsApRequest = (request: MisskeyIoCharts.postChartsApRequestRequest, ~client: client): promise<MisskeyIoCharts.postChartsApRequestResponse> => 
    MisskeyIoCharts.postChartsApRequest(~body=request, ~fetch=client.fetch)

  /** charts/drive - No description provided.

**Credential required**: *No* */
  let getChartsDrive = (request: MisskeyIoCharts.getChartsDriveRequest, ~client: client): promise<MisskeyIoCharts.getChartsDriveResponse> => 
    MisskeyIoCharts.getChartsDrive(~body=request, ~fetch=client.fetch)

  /** charts/drive - No description provided.

**Credential required**: *No* */
  let postChartsDrive = (request: MisskeyIoCharts.postChartsDriveRequest, ~client: client): promise<MisskeyIoCharts.postChartsDriveResponse> => 
    MisskeyIoCharts.postChartsDrive(~body=request, ~fetch=client.fetch)

  /** charts/federation - No description provided.

**Credential required**: *No* */
  let getChartsFederation = (request: MisskeyIoCharts.getChartsFederationRequest, ~client: client): promise<MisskeyIoCharts.getChartsFederationResponse> => 
    MisskeyIoCharts.getChartsFederation(~body=request, ~fetch=client.fetch)

  /** charts/federation - No description provided.

**Credential required**: *No* */
  let postChartsFederation = (request: MisskeyIoCharts.postChartsFederationRequest, ~client: client): promise<MisskeyIoCharts.postChartsFederationResponse> => 
    MisskeyIoCharts.postChartsFederation(~body=request, ~fetch=client.fetch)

  /** charts/instance - No description provided.

**Credential required**: *No* */
  let getChartsInstance = (request: MisskeyIoCharts.getChartsInstanceRequest, ~client: client): promise<MisskeyIoCharts.getChartsInstanceResponse> => 
    MisskeyIoCharts.getChartsInstance(~body=request, ~fetch=client.fetch)

  /** charts/instance - No description provided.

**Credential required**: *No* */
  let postChartsInstance = (request: MisskeyIoCharts.postChartsInstanceRequest, ~client: client): promise<MisskeyIoCharts.postChartsInstanceResponse> => 
    MisskeyIoCharts.postChartsInstance(~body=request, ~fetch=client.fetch)

  /** charts/notes - No description provided.

**Credential required**: *No* */
  let getChartsNotes = (request: MisskeyIoCharts.getChartsNotesRequest, ~client: client): promise<MisskeyIoCharts.getChartsNotesResponse> => 
    MisskeyIoCharts.getChartsNotes(~body=request, ~fetch=client.fetch)

  /** charts/notes - No description provided.

**Credential required**: *No* */
  let postChartsNotes = (request: MisskeyIoCharts.postChartsNotesRequest, ~client: client): promise<MisskeyIoCharts.postChartsNotesResponse> => 
    MisskeyIoCharts.postChartsNotes(~body=request, ~fetch=client.fetch)

  /** charts/user/drive - No description provided.

**Credential required**: *No* */
  let getChartsUserDrive = (request: MisskeyIoCharts.getChartsUserDriveRequest, ~client: client): promise<MisskeyIoCharts.getChartsUserDriveResponse> => 
    MisskeyIoCharts.getChartsUserDrive(~body=request, ~fetch=client.fetch)

  /** charts/user/drive - No description provided.

**Credential required**: *No* */
  let postChartsUserDrive = (request: MisskeyIoCharts.postChartsUserDriveRequest, ~client: client): promise<MisskeyIoCharts.postChartsUserDriveResponse> => 
    MisskeyIoCharts.postChartsUserDrive(~body=request, ~fetch=client.fetch)

  /** charts/user/following - No description provided.

**Credential required**: *No* */
  let getChartsUserFollowing = (request: MisskeyIoCharts.getChartsUserFollowingRequest, ~client: client): promise<MisskeyIoCharts.getChartsUserFollowingResponse> => 
    MisskeyIoCharts.getChartsUserFollowing(~body=request, ~fetch=client.fetch)

  /** charts/user/following - No description provided.

**Credential required**: *No* */
  let postChartsUserFollowing = (request: MisskeyIoCharts.postChartsUserFollowingRequest, ~client: client): promise<MisskeyIoCharts.postChartsUserFollowingResponse> => 
    MisskeyIoCharts.postChartsUserFollowing(~body=request, ~fetch=client.fetch)

  /** charts/user/notes - No description provided.

**Credential required**: *No* */
  let getChartsUserNotes = (request: MisskeyIoCharts.getChartsUserNotesRequest, ~client: client): promise<MisskeyIoCharts.getChartsUserNotesResponse> => 
    MisskeyIoCharts.getChartsUserNotes(~body=request, ~fetch=client.fetch)

  /** charts/user/notes - No description provided.

**Credential required**: *No* */
  let postChartsUserNotes = (request: MisskeyIoCharts.postChartsUserNotesRequest, ~client: client): promise<MisskeyIoCharts.postChartsUserNotesResponse> => 
    MisskeyIoCharts.postChartsUserNotes(~body=request, ~fetch=client.fetch)

  /** charts/user/pv - No description provided.

**Credential required**: *No* */
  let getChartsUserPv = (request: MisskeyIoCharts.getChartsUserPvRequest, ~client: client): promise<MisskeyIoCharts.getChartsUserPvResponse> => 
    MisskeyIoCharts.getChartsUserPv(~body=request, ~fetch=client.fetch)

  /** charts/user/pv - No description provided.

**Credential required**: *No* */
  let postChartsUserPv = (request: MisskeyIoCharts.postChartsUserPvRequest, ~client: client): promise<MisskeyIoCharts.postChartsUserPvResponse> => 
    MisskeyIoCharts.postChartsUserPv(~body=request, ~fetch=client.fetch)

  /** charts/user/reactions - No description provided.

**Credential required**: *No* */
  let getChartsUserReactions = (request: MisskeyIoCharts.getChartsUserReactionsRequest, ~client: client): promise<MisskeyIoCharts.getChartsUserReactionsResponse> => 
    MisskeyIoCharts.getChartsUserReactions(~body=request, ~fetch=client.fetch)

  /** charts/user/reactions - No description provided.

**Credential required**: *No* */
  let postChartsUserReactions = (request: MisskeyIoCharts.postChartsUserReactionsRequest, ~client: client): promise<MisskeyIoCharts.postChartsUserReactionsResponse> => 
    MisskeyIoCharts.postChartsUserReactions(~body=request, ~fetch=client.fetch)

  /** charts/users - No description provided.

**Credential required**: *No* */
  let getChartsUsers = (request: MisskeyIoCharts.getChartsUsersRequest, ~client: client): promise<MisskeyIoCharts.getChartsUsersResponse> => 
    MisskeyIoCharts.getChartsUsers(~body=request, ~fetch=client.fetch)

  /** charts/users - No description provided.

**Credential required**: *No* */
  let postChartsUsers = (request: MisskeyIoCharts.postChartsUsersRequest, ~client: client): promise<MisskeyIoCharts.postChartsUsersResponse> => 
    MisskeyIoCharts.postChartsUsers(~body=request, ~fetch=client.fetch)
}

module Clips = {
  /** clips/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postClipsCreate = (request: MisskeyIoClips.postClipsCreateRequest, ~client: client): promise<MisskeyIoClips.postClipsCreateResponse> => 
    MisskeyIoClips.postClipsCreate(~body=request, ~fetch=client.fetch)

  /** clips/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postClipsDelete = (request: MisskeyIoClips.postClipsDeleteRequest, ~client: client): promise<MisskeyIoClips.postClipsDeleteResponse> => 
    MisskeyIoClips.postClipsDelete(~body=request, ~fetch=client.fetch)

  /** clips/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postClipsList = (~client: client): promise<MisskeyIoClips.postClipsListResponse> => 
    MisskeyIoClips.postClipsList(~fetch=client.fetch)

  /** clips/show - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  let postClipsShow = (request: MisskeyIoClips.postClipsShowRequest, ~client: client): promise<MisskeyIoClips.postClipsShowResponse> => 
    MisskeyIoClips.postClipsShow(~body=request, ~fetch=client.fetch)

  /** clips/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postClipsUpdate = (request: MisskeyIoClips.postClipsUpdateRequest, ~client: client): promise<MisskeyIoClips.postClipsUpdateResponse> => 
    MisskeyIoClips.postClipsUpdate(~body=request, ~fetch=client.fetch)

  /** notes/clips - No description provided.

**Credential required**: *No* */
  let postNotesClips = (request: MisskeyIoClips.postNotesClipsRequest, ~client: client): promise<MisskeyIoClips.postNotesClipsResponse> => 
    MisskeyIoClips.postNotesClips(~body=request, ~fetch=client.fetch)
}

module Clip = {
  /** clips/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:clip-favorite* */
  let postClipsFavorite = (request: MisskeyIoClip.postClipsFavoriteRequest, ~client: client): promise<MisskeyIoClip.postClipsFavoriteResponse> => 
    MisskeyIoClip.postClipsFavorite(~body=request, ~fetch=client.fetch)

  /** clips/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:clip-favorite* */
  let postClipsUnfavorite = (request: MisskeyIoClip.postClipsUnfavoriteRequest, ~client: client): promise<MisskeyIoClip.postClipsUnfavoriteResponse> => 
    MisskeyIoClip.postClipsUnfavorite(~body=request, ~fetch=client.fetch)
}

module Drive = {
  /** drive - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDrive = (~client: client): promise<MisskeyIoDrive.postDriveResponse> => 
    MisskeyIoDrive.postDrive(~fetch=client.fetch)

  /** drive/files - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFiles = (request: MisskeyIoDrive.postDriveFilesRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesResponse> => 
    MisskeyIoDrive.postDriveFiles(~body=request, ~fetch=client.fetch)

  /** drive/files/attached-notes - Find the notes to which the given file is attached.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFilesAttachedNotes = (request: MisskeyIoDrive.postDriveFilesAttachedNotesRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesAttachedNotesResponse> => 
    MisskeyIoDrive.postDriveFilesAttachedNotes(~body=request, ~fetch=client.fetch)

  /** drive/files/check-existence - Check if a given file exists.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFilesCheckExistence = (request: MisskeyIoDrive.postDriveFilesCheckExistenceRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesCheckExistenceResponse> => 
    MisskeyIoDrive.postDriveFilesCheckExistence(~body=request, ~fetch=client.fetch)

  /** drive/files/create - Upload a new drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFilesCreate = (request: MisskeyIoDrive.postDriveFilesCreateRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesCreateResponse> => 
    MisskeyIoDrive.postDriveFilesCreate(~body=request, ~fetch=client.fetch)

  /** drive/files/delete - Delete an existing drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFilesDelete = (request: MisskeyIoDrive.postDriveFilesDeleteRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesDeleteResponse> => 
    MisskeyIoDrive.postDriveFilesDelete(~body=request, ~fetch=client.fetch)

  /** drive/files/find - Search for a drive file by the given parameters.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFilesFind = (request: MisskeyIoDrive.postDriveFilesFindRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesFindResponse> => 
    MisskeyIoDrive.postDriveFilesFind(~body=request, ~fetch=client.fetch)

  /** drive/files/find-by-hash - Search for a drive file by a hash of the contents.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFilesFindByHash = (request: MisskeyIoDrive.postDriveFilesFindByHashRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesFindByHashResponse> => 
    MisskeyIoDrive.postDriveFilesFindByHash(~body=request, ~fetch=client.fetch)

  /** drive/files/show - Show the properties of a drive file.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFilesShow = (request: MisskeyIoDrive.postDriveFilesShowRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesShowResponse> => 
    MisskeyIoDrive.postDriveFilesShow(~body=request, ~fetch=client.fetch)

  /** drive/files/update - Update the properties of a drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFilesUpdate = (request: MisskeyIoDrive.postDriveFilesUpdateRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesUpdateResponse> => 
    MisskeyIoDrive.postDriveFilesUpdate(~body=request, ~fetch=client.fetch)

  /** drive/files/upload-from-url - Request the server to download a new drive file from the specified URL.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFilesUploadFromUrl = (request: MisskeyIoDrive.postDriveFilesUploadFromUrlRequest, ~client: client): promise<MisskeyIoDrive.postDriveFilesUploadFromUrlResponse> => 
    MisskeyIoDrive.postDriveFilesUploadFromUrl(~body=request, ~fetch=client.fetch)

  /** drive/folders - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFolders = (request: MisskeyIoDrive.postDriveFoldersRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersResponse> => 
    MisskeyIoDrive.postDriveFolders(~body=request, ~fetch=client.fetch)

  /** drive/folders/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFoldersCreate = (request: MisskeyIoDrive.postDriveFoldersCreateRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersCreateResponse> => 
    MisskeyIoDrive.postDriveFoldersCreate(~body=request, ~fetch=client.fetch)

  /** drive/folders/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFoldersDelete = (request: MisskeyIoDrive.postDriveFoldersDeleteRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersDeleteResponse> => 
    MisskeyIoDrive.postDriveFoldersDelete(~body=request, ~fetch=client.fetch)

  /** drive/folders/find - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFoldersFind = (request: MisskeyIoDrive.postDriveFoldersFindRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersFindResponse> => 
    MisskeyIoDrive.postDriveFoldersFind(~body=request, ~fetch=client.fetch)

  /** drive/folders/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveFoldersShow = (request: MisskeyIoDrive.postDriveFoldersShowRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersShowResponse> => 
    MisskeyIoDrive.postDriveFoldersShow(~body=request, ~fetch=client.fetch)

  /** drive/folders/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  let postDriveFoldersUpdate = (request: MisskeyIoDrive.postDriveFoldersUpdateRequest, ~client: client): promise<MisskeyIoDrive.postDriveFoldersUpdateResponse> => 
    MisskeyIoDrive.postDriveFoldersUpdate(~body=request, ~fetch=client.fetch)

  /** drive/stream - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  let postDriveStream = (request: MisskeyIoDrive.postDriveStreamRequest, ~client: client): promise<MisskeyIoDrive.postDriveStreamResponse> => 
    MisskeyIoDrive.postDriveStream(~body=request, ~fetch=client.fetch)
}

module Users = {
  /** email-address/available - No description provided.

**Credential required**: *No* */
  let postEmailAddressAvailable = (request: MisskeyIoUsers.postEmailAddressAvailableRequest, ~client: client): promise<MisskeyIoUsers.postEmailAddressAvailableResponse> => 
    MisskeyIoUsers.postEmailAddressAvailable(~body=request, ~fetch=client.fetch)

  /** get-avatar-decorations - No description provided.

**Credential required**: *No* */
  let postGetAvatarDecorations = (~client: client): promise<MisskeyIoUsers.postGetAvatarDecorationsResponse> => 
    MisskeyIoUsers.postGetAvatarDecorations(~fetch=client.fetch)

  /** i/move - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  let postIMove = (request: MisskeyIoUsers.postIMoveRequest, ~client: client): promise<MisskeyIoUsers.postIMoveResponse> => 
    MisskeyIoUsers.postIMove(~body=request, ~fetch=client.fetch)

  /** pinned-users - No description provided.

**Credential required**: *No* */
  let postPinnedUsers = (~client: client): promise<MisskeyIoUsers.postPinnedUsersResponse> => 
    MisskeyIoUsers.postPinnedUsers(~fetch=client.fetch)

  /** retention - No description provided.

**Credential required**: *No* */
  let getRetention = (~client: client): promise<MisskeyIoUsers.getRetentionResponse> => 
    MisskeyIoUsers.getRetention(~fetch=client.fetch)

  /** retention - No description provided.

**Credential required**: *No* */
  let postRetention = (~client: client): promise<MisskeyIoUsers.postRetentionResponse> => 
    MisskeyIoUsers.postRetention(~fetch=client.fetch)

  /** username/available - No description provided.

**Credential required**: *No* */
  let postUsernameAvailable = (request: MisskeyIoUsers.postUsernameAvailableRequest, ~client: client): promise<MisskeyIoUsers.postUsernameAvailableResponse> => 
    MisskeyIoUsers.postUsernameAvailable(~body=request, ~fetch=client.fetch)

  /** users - No description provided.

**Credential required**: *No* */
  let postUsers = (request: MisskeyIoUsers.postUsersRequest, ~client: client): promise<MisskeyIoUsers.postUsersResponse> => 
    MisskeyIoUsers.postUsers(~body=request, ~fetch=client.fetch)

  /** users/clips - Show all clips this user owns.

**Credential required**: *No* */
  let postUsersClips = (request: MisskeyIoUsers.postUsersClipsRequest, ~client: client): promise<MisskeyIoUsers.postUsersClipsResponse> => 
    MisskeyIoUsers.postUsersClips(~body=request, ~fetch=client.fetch)

  /** users/flashs - Show all flashs this user created.

**Credential required**: *No* */
  let postUsersFlashs = (request: MisskeyIoUsers.postUsersFlashsRequest, ~client: client): promise<MisskeyIoUsers.postUsersFlashsResponse> => 
    MisskeyIoUsers.postUsersFlashs(~body=request, ~fetch=client.fetch)

  /** users/followers - Show everyone that follows this user.

**Credential required**: *No* */
  let postUsersFollowers = (request: MisskeyIoUsers.postUsersFollowersRequest, ~client: client): promise<MisskeyIoUsers.postUsersFollowersResponse> => 
    MisskeyIoUsers.postUsersFollowers(~body=request, ~fetch=client.fetch)

  /** users/following - Show everyone that this user is following.

**Credential required**: *No* */
  let postUsersFollowing = (request: MisskeyIoUsers.postUsersFollowingRequest, ~client: client): promise<MisskeyIoUsers.postUsersFollowingResponse> => 
    MisskeyIoUsers.postUsersFollowing(~body=request, ~fetch=client.fetch)

  /** users/gallery/posts - Show all gallery posts by the given user.

**Credential required**: *No* */
  let postUsersGalleryPosts = (request: MisskeyIoUsers.postUsersGalleryPostsRequest, ~client: client): promise<MisskeyIoUsers.postUsersGalleryPostsResponse> => 
    MisskeyIoUsers.postUsersGalleryPosts(~body=request, ~fetch=client.fetch)

  /** users/get-following-birthday-users - Find users who have a birthday on the specified range.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postUsersGetFollowingBirthdayUsers = (request: MisskeyIoUsers.postUsersGetFollowingBirthdayUsersRequest, ~client: client): promise<MisskeyIoUsers.postUsersGetFollowingBirthdayUsersResponse> => 
    MisskeyIoUsers.postUsersGetFollowingBirthdayUsers(~body=request, ~fetch=client.fetch)

  /** users/get-frequently-replied-users - Get a list of other users that the specified user frequently replies to.

**Credential required**: *No* */
  let postUsersGetFrequentlyRepliedUsers = (request: MisskeyIoUsers.postUsersGetFrequentlyRepliedUsersRequest, ~client: client): promise<MisskeyIoUsers.postUsersGetFrequentlyRepliedUsersResponse> => 
    MisskeyIoUsers.postUsersGetFrequentlyRepliedUsers(~body=request, ~fetch=client.fetch)

  /** users/get-security-info - No description provided.

**Credential required**: *No* */
  let postUsersGetSecurityInfo = (request: MisskeyIoUsers.postUsersGetSecurityInfoRequest, ~client: client): promise<MisskeyIoUsers.postUsersGetSecurityInfoResponse> => 
    MisskeyIoUsers.postUsersGetSecurityInfo(~body=request, ~fetch=client.fetch)

  /** users/get-skeb-status - No description provided.

**Credential required**: *No* */
  let getUsersGetSkebStatus = (request: MisskeyIoUsers.getUsersGetSkebStatusRequest, ~client: client): promise<MisskeyIoUsers.getUsersGetSkebStatusResponse> => 
    MisskeyIoUsers.getUsersGetSkebStatus(~body=request, ~fetch=client.fetch)

  /** users/get-skeb-status - No description provided.

**Credential required**: *No* */
  let postUsersGetSkebStatus = (request: MisskeyIoUsers.postUsersGetSkebStatusRequest, ~client: client): promise<MisskeyIoUsers.postUsersGetSkebStatusResponse> => 
    MisskeyIoUsers.postUsersGetSkebStatus(~body=request, ~fetch=client.fetch)

  /** users/notes - No description provided.

**Credential required**: *No* */
  let postUsersNotes = (request: MisskeyIoUsers.postUsersNotesRequest, ~client: client): promise<MisskeyIoUsers.postUsersNotesResponse> => 
    MisskeyIoUsers.postUsersNotes(~body=request, ~fetch=client.fetch)

  /** users/pages - Show all pages this user created.

**Credential required**: *No* */
  let postUsersPages = (request: MisskeyIoUsers.postUsersPagesRequest, ~client: client): promise<MisskeyIoUsers.postUsersPagesResponse> => 
    MisskeyIoUsers.postUsersPages(~body=request, ~fetch=client.fetch)

  /** users/reactions - Show all reactions this user made.

**Credential required**: *No* */
  let postUsersReactions = (request: MisskeyIoUsers.postUsersReactionsRequest, ~client: client): promise<MisskeyIoUsers.postUsersReactionsResponse> => 
    MisskeyIoUsers.postUsersReactions(~body=request, ~fetch=client.fetch)

  /** users/recommendation - Show users that the authenticated user might be interested to follow.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postUsersRecommendation = (request: MisskeyIoUsers.postUsersRecommendationRequest, ~client: client): promise<MisskeyIoUsers.postUsersRecommendationResponse> => 
    MisskeyIoUsers.postUsersRecommendation(~body=request, ~fetch=client.fetch)

  /** users/relation - Show the different kinds of relations between the authenticated user and the specified user(s).

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postUsersRelation = (request: MisskeyIoUsers.postUsersRelationRequest, ~client: client): promise<MisskeyIoUsers.postUsersRelationResponse> => 
    MisskeyIoUsers.postUsersRelation(~body=request, ~fetch=client.fetch)

  /** users/report-abuse - File a report.

**Credential required**: *Yes* / **Permission**: *write:report-abuse* */
  let postUsersReportAbuse = (request: MisskeyIoUsers.postUsersReportAbuseRequest, ~client: client): promise<MisskeyIoUsers.postUsersReportAbuseResponse> => 
    MisskeyIoUsers.postUsersReportAbuse(~body=request, ~fetch=client.fetch)

  /** users/search - Search for users.

**Credential required**: *No* */
  let postUsersSearch = (request: MisskeyIoUsers.postUsersSearchRequest, ~client: client): promise<MisskeyIoUsers.postUsersSearchResponse> => 
    MisskeyIoUsers.postUsersSearch(~body=request, ~fetch=client.fetch)

  /** users/search-by-username-and-host - Search for a user by username and/or host.

**Credential required**: *No* */
  let postUsersSearchByUsernameAndHost = (request: MisskeyIoUsers.postUsersSearchByUsernameAndHostRequest, ~client: client): promise<MisskeyIoUsers.postUsersSearchByUsernameAndHostResponse> => 
    MisskeyIoUsers.postUsersSearchByUsernameAndHost(~body=request, ~fetch=client.fetch)

  /** users/show - Show the properties of a user.

**Credential required**: *No* */
  let postUsersShow = (request: MisskeyIoUsers.postUsersShowRequest, ~client: client): promise<MisskeyIoUsers.postUsersShowResponse> => 
    MisskeyIoUsers.postUsersShow(~body=request, ~fetch=client.fetch)

  /** users/stats - Show statistics about a user.

**Credential required**: *No* */
  let postUsersStats = (request: MisskeyIoUsers.postUsersStatsRequest, ~client: client): promise<MisskeyIoUsers.postUsersStatsResponse> => 
    MisskeyIoUsers.postUsersStats(~body=request, ~fetch=client.fetch)
}

module Flash = {
  /** flash/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  let postFlashCreate = (request: MisskeyIoFlash.postFlashCreateRequest, ~client: client): promise<MisskeyIoFlash.postFlashCreateResponse> => 
    MisskeyIoFlash.postFlashCreate(~body=request, ~fetch=client.fetch)

  /** flash/featured - No description provided.

**Credential required**: *No* */
  let postFlashFeatured = (request: MisskeyIoFlash.postFlashFeaturedRequest, ~client: client): promise<MisskeyIoFlash.postFlashFeaturedResponse> => 
    MisskeyIoFlash.postFlashFeatured(~body=request, ~fetch=client.fetch)

  /** flash/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash-likes* */
  let postFlashLike = (request: MisskeyIoFlash.postFlashLikeRequest, ~client: client): promise<MisskeyIoFlash.postFlashLikeResponse> => 
    MisskeyIoFlash.postFlashLike(~body=request, ~fetch=client.fetch)

  /** flash/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash-likes* */
  let postFlashUnlike = (request: MisskeyIoFlash.postFlashUnlikeRequest, ~client: client): promise<MisskeyIoFlash.postFlashUnlikeResponse> => 
    MisskeyIoFlash.postFlashUnlike(~body=request, ~fetch=client.fetch)

  /** flash/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  let postFlashUpdate = (request: MisskeyIoFlash.postFlashUpdateRequest, ~client: client): promise<MisskeyIoFlash.postFlashUpdateResponse> => 
    MisskeyIoFlash.postFlashUpdate(~body=request, ~fetch=client.fetch)
}

module Flashs = {
  /** flash/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  let postFlashDelete = (request: MisskeyIoFlashs.postFlashDeleteRequest, ~client: client): promise<MisskeyIoFlashs.postFlashDeleteResponse> => 
    MisskeyIoFlashs.postFlashDelete(~body=request, ~fetch=client.fetch)

  /** flash/show - No description provided.

**Credential required**: *No* */
  let postFlashShow = (request: MisskeyIoFlashs.postFlashShowRequest, ~client: client): promise<MisskeyIoFlashs.postFlashShowResponse> => 
    MisskeyIoFlashs.postFlashShow(~body=request, ~fetch=client.fetch)
}

module Following = {
  /** following/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingCreate = (request: MisskeyIoFollowing.postFollowingCreateRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingCreateResponse> => 
    MisskeyIoFollowing.postFollowingCreate(~body=request, ~fetch=client.fetch)

  /** following/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingDelete = (request: MisskeyIoFollowing.postFollowingDeleteRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingDeleteResponse> => 
    MisskeyIoFollowing.postFollowingDelete(~body=request, ~fetch=client.fetch)

  /** following/invalidate - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingInvalidate = (request: MisskeyIoFollowing.postFollowingInvalidateRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingInvalidateResponse> => 
    MisskeyIoFollowing.postFollowingInvalidate(~body=request, ~fetch=client.fetch)

  /** following/requests/accept - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingRequestsAccept = (request: MisskeyIoFollowing.postFollowingRequestsAcceptRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingRequestsAcceptResponse> => 
    MisskeyIoFollowing.postFollowingRequestsAccept(~body=request, ~fetch=client.fetch)

  /** following/requests/cancel - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingRequestsCancel = (request: MisskeyIoFollowing.postFollowingRequestsCancelRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingRequestsCancelResponse> => 
    MisskeyIoFollowing.postFollowingRequestsCancel(~body=request, ~fetch=client.fetch)

  /** following/requests/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:following* */
  let postFollowingRequestsList = (request: MisskeyIoFollowing.postFollowingRequestsListRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingRequestsListResponse> => 
    MisskeyIoFollowing.postFollowingRequestsList(~body=request, ~fetch=client.fetch)

  /** following/requests/reject - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingRequestsReject = (request: MisskeyIoFollowing.postFollowingRequestsRejectRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingRequestsRejectResponse> => 
    MisskeyIoFollowing.postFollowingRequestsReject(~body=request, ~fetch=client.fetch)

  /** following/requests/sent - No description provided.

**Credential required**: *Yes* / **Permission**: *read:following* */
  let postFollowingRequestsSent = (request: MisskeyIoFollowing.postFollowingRequestsSentRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingRequestsSentResponse> => 
    MisskeyIoFollowing.postFollowingRequestsSent(~body=request, ~fetch=client.fetch)

  /** following/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingUpdate = (request: MisskeyIoFollowing.postFollowingUpdateRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingUpdateResponse> => 
    MisskeyIoFollowing.postFollowingUpdate(~body=request, ~fetch=client.fetch)

  /** following/update-all - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  let postFollowingUpdateAll = (request: MisskeyIoFollowing.postFollowingUpdateAllRequest, ~client: client): promise<MisskeyIoFollowing.postFollowingUpdateAllResponse> => 
    MisskeyIoFollowing.postFollowingUpdateAll(~body=request, ~fetch=client.fetch)
}

module Gallery = {
  /** gallery/featured - No description provided.

**Credential required**: *No* */
  let postGalleryFeatured = (request: MisskeyIoGallery.postGalleryFeaturedRequest, ~client: client): promise<MisskeyIoGallery.postGalleryFeaturedResponse> => 
    MisskeyIoGallery.postGalleryFeatured(~body=request, ~fetch=client.fetch)

  /** gallery/popular - No description provided.

**Credential required**: *No* */
  let postGalleryPopular = (~client: client): promise<MisskeyIoGallery.postGalleryPopularResponse> => 
    MisskeyIoGallery.postGalleryPopular(~fetch=client.fetch)

  /** gallery/posts - No description provided.

**Credential required**: *No* */
  let postGalleryPosts = (request: MisskeyIoGallery.postGalleryPostsRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsResponse> => 
    MisskeyIoGallery.postGalleryPosts(~body=request, ~fetch=client.fetch)

  /** gallery/posts/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  let postGalleryPostsCreate = (request: MisskeyIoGallery.postGalleryPostsCreateRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsCreateResponse> => 
    MisskeyIoGallery.postGalleryPostsCreate(~body=request, ~fetch=client.fetch)

  /** gallery/posts/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  let postGalleryPostsDelete = (request: MisskeyIoGallery.postGalleryPostsDeleteRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsDeleteResponse> => 
    MisskeyIoGallery.postGalleryPostsDelete(~body=request, ~fetch=client.fetch)

  /** gallery/posts/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery-likes* */
  let postGalleryPostsLike = (request: MisskeyIoGallery.postGalleryPostsLikeRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsLikeResponse> => 
    MisskeyIoGallery.postGalleryPostsLike(~body=request, ~fetch=client.fetch)

  /** gallery/posts/show - No description provided.

**Credential required**: *No* */
  let postGalleryPostsShow = (request: MisskeyIoGallery.postGalleryPostsShowRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsShowResponse> => 
    MisskeyIoGallery.postGalleryPostsShow(~body=request, ~fetch=client.fetch)

  /** gallery/posts/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery-likes* */
  let postGalleryPostsUnlike = (request: MisskeyIoGallery.postGalleryPostsUnlikeRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsUnlikeResponse> => 
    MisskeyIoGallery.postGalleryPostsUnlike(~body=request, ~fetch=client.fetch)

  /** gallery/posts/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  let postGalleryPostsUpdate = (request: MisskeyIoGallery.postGalleryPostsUpdateRequest, ~client: client): promise<MisskeyIoGallery.postGalleryPostsUpdateResponse> => 
    MisskeyIoGallery.postGalleryPostsUpdate(~body=request, ~fetch=client.fetch)
}

module Hashtags = {
  /** hashtags/list - No description provided.

**Credential required**: *No* */
  let postHashtagsList = (request: MisskeyIoHashtags.postHashtagsListRequest, ~client: client): promise<MisskeyIoHashtags.postHashtagsListResponse> => 
    MisskeyIoHashtags.postHashtagsList(~body=request, ~fetch=client.fetch)

  /** hashtags/search - No description provided.

**Credential required**: *No* */
  let postHashtagsSearch = (request: MisskeyIoHashtags.postHashtagsSearchRequest, ~client: client): promise<MisskeyIoHashtags.postHashtagsSearchResponse> => 
    MisskeyIoHashtags.postHashtagsSearch(~body=request, ~fetch=client.fetch)

  /** hashtags/show - No description provided.

**Credential required**: *No* */
  let postHashtagsShow = (request: MisskeyIoHashtags.postHashtagsShowRequest, ~client: client): promise<MisskeyIoHashtags.postHashtagsShowResponse> => 
    MisskeyIoHashtags.postHashtagsShow(~body=request, ~fetch=client.fetch)

  /** hashtags/trend - No description provided.

**Credential required**: *No* */
  let getHashtagsTrend = (~client: client): promise<MisskeyIoHashtags.getHashtagsTrendResponse> => 
    MisskeyIoHashtags.getHashtagsTrend(~fetch=client.fetch)

  /** hashtags/trend - No description provided.

**Credential required**: *No* */
  let postHashtagsTrend = (~client: client): promise<MisskeyIoHashtags.postHashtagsTrendResponse> => 
    MisskeyIoHashtags.postHashtagsTrend(~fetch=client.fetch)

  /** hashtags/users - No description provided.

**Credential required**: *No* */
  let postHashtagsUsers = (request: MisskeyIoHashtags.postHashtagsUsersRequest, ~client: client): promise<MisskeyIoHashtags.postHashtagsUsersResponse> => 
    MisskeyIoHashtags.postHashtagsUsers(~body=request, ~fetch=client.fetch)
}

module Reactions = {
  /** notes/reactions/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:reactions* */
  let postNotesReactionsCreate = (request: MisskeyIoReactions.postNotesReactionsCreateRequest, ~client: client): promise<MisskeyIoReactions.postNotesReactionsCreateResponse> => 
    MisskeyIoReactions.postNotesReactionsCreate(~body=request, ~fetch=client.fetch)

  /** notes/reactions/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:reactions* */
  let postNotesReactionsDelete = (request: MisskeyIoReactions.postNotesReactionsDeleteRequest, ~client: client): promise<MisskeyIoReactions.postNotesReactionsDeleteResponse> => 
    MisskeyIoReactions.postNotesReactionsDelete(~body=request, ~fetch=client.fetch)
}

module Notifications = {
  /** notifications/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  let postNotificationsCreate = (request: MisskeyIoNotifications.postNotificationsCreateRequest, ~client: client): promise<MisskeyIoNotifications.postNotificationsCreateResponse> => 
    MisskeyIoNotifications.postNotificationsCreate(~body=request, ~fetch=client.fetch)

  /** notifications/flush - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  let postNotificationsFlush = (~client: client): promise<MisskeyIoNotifications.postNotificationsFlushResponse> => 
    MisskeyIoNotifications.postNotificationsFlush(~fetch=client.fetch)

  /** notifications/mark-all-as-read - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  let postNotificationsMarkAllAsRead = (~client: client): promise<MisskeyIoNotifications.postNotificationsMarkAllAsReadResponse> => 
    MisskeyIoNotifications.postNotificationsMarkAllAsRead(~fetch=client.fetch)

  /** notifications/test-notification - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  let postNotificationsTestNotification = (~client: client): promise<MisskeyIoNotifications.postNotificationsTestNotificationResponse> => 
    MisskeyIoNotifications.postNotificationsTestNotification(~fetch=client.fetch)
}

module Pages = {
  /** pages/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  let postPagesCreate = (request: MisskeyIoPages.postPagesCreateRequest, ~client: client): promise<MisskeyIoPages.postPagesCreateResponse> => 
    MisskeyIoPages.postPagesCreate(~body=request, ~fetch=client.fetch)

  /** pages/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  let postPagesDelete = (request: MisskeyIoPages.postPagesDeleteRequest, ~client: client): promise<MisskeyIoPages.postPagesDeleteResponse> => 
    MisskeyIoPages.postPagesDelete(~body=request, ~fetch=client.fetch)

  /** pages/featured - No description provided.

**Credential required**: *No* */
  let postPagesFeatured = (~client: client): promise<MisskeyIoPages.postPagesFeaturedResponse> => 
    MisskeyIoPages.postPagesFeatured(~fetch=client.fetch)

  /** pages/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:page-likes* */
  let postPagesLike = (request: MisskeyIoPages.postPagesLikeRequest, ~client: client): promise<MisskeyIoPages.postPagesLikeResponse> => 
    MisskeyIoPages.postPagesLike(~body=request, ~fetch=client.fetch)

  /** pages/show - No description provided.

**Credential required**: *No* */
  let postPagesShow = (request: MisskeyIoPages.postPagesShowRequest, ~client: client): promise<MisskeyIoPages.postPagesShowResponse> => 
    MisskeyIoPages.postPagesShow(~body=request, ~fetch=client.fetch)

  /** pages/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:page-likes* */
  let postPagesUnlike = (request: MisskeyIoPages.postPagesUnlikeRequest, ~client: client): promise<MisskeyIoPages.postPagesUnlikeResponse> => 
    MisskeyIoPages.postPagesUnlike(~body=request, ~fetch=client.fetch)

  /** pages/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  let postPagesUpdate = (request: MisskeyIoPages.postPagesUpdateRequest, ~client: client): promise<MisskeyIoPages.postPagesUpdateResponse> => 
    MisskeyIoPages.postPagesUpdate(~body=request, ~fetch=client.fetch)
}

module ResetPassword = {
  /** request-reset-password - Request a users password to be reset.

**Credential required**: *No* */
  let postRequestResetPassword = (request: MisskeyIoResetPassword.postRequestResetPasswordRequest, ~client: client): promise<MisskeyIoResetPassword.postRequestResetPasswordResponse> => 
    MisskeyIoResetPassword.postRequestResetPassword(~body=request, ~fetch=client.fetch)

  /** reset-password - Complete the password reset that was previously requested.

**Credential required**: *No* */
  let postResetPassword = (request: MisskeyIoResetPassword.postResetPasswordRequest, ~client: client): promise<MisskeyIoResetPassword.postResetPasswordResponse> => 
    MisskeyIoResetPassword.postResetPassword(~body=request, ~fetch=client.fetch)
}

module NonProductive = {
  /** reset-db - Only available when running with <code>NODE_ENV=testing</code>. Reset the database and flush Redis.

**Credential required**: *No* */
  let postResetDb = (~client: client): promise<MisskeyIoNonProductive.postResetDbResponse> => 
    MisskeyIoNonProductive.postResetDb(~fetch=client.fetch)

  /** test - Endpoint for testing input validation.

**Credential required**: *No* */
  let postTest = (request: MisskeyIoNonProductive.postTestRequest, ~client: client): promise<MisskeyIoNonProductive.postTestResponse> => 
    MisskeyIoNonProductive.postTest(~body=request, ~fetch=client.fetch)
}

module Role = {
  /** roles/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postRolesList = (~client: client): promise<MisskeyIoRole.postRolesListResponse> => 
    MisskeyIoRole.postRolesList(~fetch=client.fetch)

  /** roles/notes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  let postRolesNotes = (request: MisskeyIoRole.postRolesNotesRequest, ~client: client): promise<MisskeyIoRole.postRolesNotesResponse> => 
    MisskeyIoRole.postRolesNotes(~body=request, ~fetch=client.fetch)

  /** roles/show - No description provided.

**Credential required**: *No* */
  let postRolesShow = (request: MisskeyIoRole.postRolesShowRequest, ~client: client): promise<MisskeyIoRole.postRolesShowResponse> => 
    MisskeyIoRole.postRolesShow(~body=request, ~fetch=client.fetch)

  /** roles/users - No description provided.

**Credential required**: *No* */
  let postRolesUsers = (request: MisskeyIoRole.postRolesUsersRequest, ~client: client): promise<MisskeyIoRole.postRolesUsersResponse> => 
    MisskeyIoRole.postRolesUsers(~body=request, ~fetch=client.fetch)
}

module Lists = {
  /** users/lists/create - Create a new list of users.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsCreate = (request: MisskeyIoLists.postUsersListsCreateRequest, ~client: client): promise<MisskeyIoLists.postUsersListsCreateResponse> => 
    MisskeyIoLists.postUsersListsCreate(~body=request, ~fetch=client.fetch)

  /** users/lists/delete - Delete an existing list of users.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsDelete = (request: MisskeyIoLists.postUsersListsDeleteRequest, ~client: client): promise<MisskeyIoLists.postUsersListsDeleteResponse> => 
    MisskeyIoLists.postUsersListsDelete(~body=request, ~fetch=client.fetch)

  /** users/lists/get-memberships - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  let postUsersListsGetMemberships = (request: MisskeyIoLists.postUsersListsGetMembershipsRequest, ~client: client): promise<MisskeyIoLists.postUsersListsGetMembershipsResponse> => 
    MisskeyIoLists.postUsersListsGetMemberships(~body=request, ~fetch=client.fetch)

  /** users/lists/list - Show all lists that the authenticated user has created.

**Credential required**: *No* / **Permission**: *read:account* */
  let postUsersListsList = (request: MisskeyIoLists.postUsersListsListRequest, ~client: client): promise<MisskeyIoLists.postUsersListsListResponse> => 
    MisskeyIoLists.postUsersListsList(~body=request, ~fetch=client.fetch)

  /** users/lists/pull - Remove a user from a list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsPull = (request: MisskeyIoLists.postUsersListsPullRequest, ~client: client): promise<MisskeyIoLists.postUsersListsPullResponse> => 
    MisskeyIoLists.postUsersListsPull(~body=request, ~fetch=client.fetch)

  /** users/lists/push - Add a user to an existing list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsPush = (request: MisskeyIoLists.postUsersListsPushRequest, ~client: client): promise<MisskeyIoLists.postUsersListsPushResponse> => 
    MisskeyIoLists.postUsersListsPush(~body=request, ~fetch=client.fetch)

  /** users/lists/show - Show the properties of a list.

**Credential required**: *No* / **Permission**: *read:account* */
  let postUsersListsShow = (request: MisskeyIoLists.postUsersListsShowRequest, ~client: client): promise<MisskeyIoLists.postUsersListsShowResponse> => 
    MisskeyIoLists.postUsersListsShow(~body=request, ~fetch=client.fetch)

  /** users/lists/update - Update the properties of a list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsUpdate = (request: MisskeyIoLists.postUsersListsUpdateRequest, ~client: client): promise<MisskeyIoLists.postUsersListsUpdateResponse> => 
    MisskeyIoLists.postUsersListsUpdate(~body=request, ~fetch=client.fetch)

  /** users/lists/update-membership - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  let postUsersListsUpdateMembership = (request: MisskeyIoLists.postUsersListsUpdateMembershipRequest, ~client: client): promise<MisskeyIoLists.postUsersListsUpdateMembershipResponse> => 
    MisskeyIoLists.postUsersListsUpdateMembership(~body=request, ~fetch=client.fetch)
}