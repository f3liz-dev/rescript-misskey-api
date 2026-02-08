// Generated TypeScript definitions for wrapper
import type {
  PostAdminAbuseReportResolverCreateRequest,
  PostAdminAbuseReportResolverCreateResponse,
  PostAdminAbuseReportResolverDeleteRequest,
  PostAdminAbuseReportResolverDeleteResponse,
  PostAdminAbuseReportResolverListRequest,
  PostAdminAbuseReportResolverListResponse,
  PostAdminAbuseReportResolverUpdateRequest,
  PostAdminAbuseReportResolverUpdateResponse,
  PostAdminAbuseReportNotificationRecipientCreateRequest,
  PostAdminAbuseReportNotificationRecipientCreateResponse,
  PostAdminAbuseReportNotificationRecipientDeleteRequest,
  PostAdminAbuseReportNotificationRecipientDeleteResponse,
  PostAdminAbuseReportNotificationRecipientListRequest,
  PostAdminAbuseReportNotificationRecipientListResponse,
  PostAdminAbuseReportNotificationRecipientShowRequest,
  PostAdminAbuseReportNotificationRecipientShowResponse,
  PostAdminAbuseReportNotificationRecipientUpdateRequest,
  PostAdminAbuseReportNotificationRecipientUpdateResponse,
  PostAdminAbuseUserReportsRequest,
  PostAdminAbuseUserReportsResponse,
  PostAdminAccountsCreateRequest,
  PostAdminAccountsCreateResponse,
  PostAdminAccountsDeleteRequest,
  PostAdminAccountsDeleteResponse,
  PostAdminAccountsFindByEmailRequest,
  PostAdminAccountsFindByEmailResponse,
  PostAdminAccountsPendingListRequest,
  PostAdminAccountsPendingListResponse,
  PostAdminAccountsPendingRevokeRequest,
  PostAdminAccountsPendingRevokeResponse,
  PostAdminAdCreateRequest,
  PostAdminAdCreateResponse,
  PostAdminAdDeleteRequest,
  PostAdminAdDeleteResponse,
  PostAdminAdListRequest,
  PostAdminAdListResponse,
  PostAdminAdUpdateRequest,
  PostAdminAdUpdateResponse,
  PostAdminAnnouncementsCreateRequest,
  PostAdminAnnouncementsCreateResponse,
  PostAdminAnnouncementsDeleteRequest,
  PostAdminAnnouncementsDeleteResponse,
  PostAdminAnnouncementsListRequest,
  PostAdminAnnouncementsListResponse,
  PostAdminAnnouncementsUpdateRequest,
  PostAdminAnnouncementsUpdateResponse,
  PostAdminAvatarDecorationsCreateRequest,
  PostAdminAvatarDecorationsCreateResponse,
  PostAdminAvatarDecorationsDeleteRequest,
  PostAdminAvatarDecorationsDeleteResponse,
  PostAdminAvatarDecorationsListRequest,
  PostAdminAvatarDecorationsListResponse,
  PostAdminAvatarDecorationsUpdateRequest,
  PostAdminAvatarDecorationsUpdateResponse,
  PostAdminCaptchaCurrentResponse,
  PostAdminCaptchaSaveRequest,
  PostAdminCaptchaSaveResponse,
  PostAdminDriveCleanRemoteFilesResponse,
  PostAdminDriveCleanupResponse,
  PostAdminDriveDeleteAllFilesOfAuserRequest,
  PostAdminDriveDeleteAllFilesOfAuserResponse,
  PostAdminDriveFilesRequest,
  PostAdminDriveFilesResponse,
  PostAdminDriveShowFileRequest,
  PostAdminDriveShowFileResponse,
  PostAdminEmojiAddRequest,
  PostAdminEmojiAddResponse,
  PostAdminEmojiAddAliasesBulkRequest,
  PostAdminEmojiAddAliasesBulkResponse,
  PostAdminEmojiCopyRequest,
  PostAdminEmojiCopyResponse,
  PostAdminEmojiDeleteRequest,
  PostAdminEmojiDeleteResponse,
  PostAdminEmojiDeleteBulkRequest,
  PostAdminEmojiDeleteBulkResponse,
  PostAdminEmojiListRequest,
  PostAdminEmojiListResponse,
  PostAdminEmojiListRemoteRequest,
  PostAdminEmojiListRemoteResponse,
  PostAdminEmojiRemoveAliasesBulkRequest,
  PostAdminEmojiRemoveAliasesBulkResponse,
  PostAdminEmojiSetAliasesBulkRequest,
  PostAdminEmojiSetAliasesBulkResponse,
  PostAdminEmojiSetCategoryBulkRequest,
  PostAdminEmojiSetCategoryBulkResponse,
  PostAdminEmojiSetLicenseBulkRequest,
  PostAdminEmojiSetLicenseBulkResponse,
  PostAdminEmojiUpdateRequest,
  PostAdminEmojiUpdateResponse,
  PostAdminFederationDeleteAllFilesRequest,
  PostAdminFederationDeleteAllFilesResponse,
  PostAdminFederationRefreshRemoteInstanceMetadataRequest,
  PostAdminFederationRefreshRemoteInstanceMetadataResponse,
  PostAdminFederationRemoveAllFollowingRequest,
  PostAdminFederationRemoveAllFollowingResponse,
  PostAdminFederationUpdateInstanceRequest,
  PostAdminFederationUpdateInstanceResponse,
  PostAdminForwardAbuseUserReportRequest,
  PostAdminForwardAbuseUserReportResponse,
  PostAdminGetIndexStatsResponse,
  PostAdminGetTableStatsResponse,
  PostAdminGetUserIpsRequest,
  PostAdminGetUserIpsResponse,
  PostAdminIndieAuthCreateRequest,
  PostAdminIndieAuthCreateResponse,
  PostAdminIndieAuthDeleteRequest,
  PostAdminIndieAuthDeleteResponse,
  PostAdminIndieAuthListRequest,
  PostAdminIndieAuthListResponse,
  PostAdminIndieAuthUpdateRequest,
  PostAdminIndieAuthUpdateResponse,
  PostAdminInviteCreateRequest,
  PostAdminInviteCreateResponse,
  PostAdminInviteListRequest,
  PostAdminInviteListResponse,
  PostAdminPromoCreateRequest,
  PostAdminPromoCreateResponse,
  PostAdminQueueClearRequest,
  PostAdminQueueClearResponse,
  PostAdminQueueDeliverDelayedResponse,
  PostAdminQueueInboxDelayedResponse,
  PostAdminQueuePromoteRequest,
  PostAdminQueuePromoteResponse,
  PostAdminQueueStatsResponse,
  PostAdminRegenerateUserTokenRequest,
  PostAdminRegenerateUserTokenResponse,
  PostAdminRelaysAddRequest,
  PostAdminRelaysAddResponse,
  PostAdminRelaysListResponse,
  PostAdminRelaysRemoveRequest,
  PostAdminRelaysRemoveResponse,
  PostAdminResetPasswordRequest,
  PostAdminResetPasswordResponse,
  PostAdminResolveAbuseUserReportRequest,
  PostAdminResolveAbuseUserReportResponse,
  PostAdminRolesAssignRequest,
  PostAdminRolesAssignResponse,
  PostAdminRolesCreateRequest,
  PostAdminRolesCreateResponse,
  PostAdminRolesDeleteRequest,
  PostAdminRolesDeleteResponse,
  PostAdminRolesListResponse,
  PostAdminRolesShowRequest,
  PostAdminRolesShowResponse,
  PostAdminRolesUnassignRequest,
  PostAdminRolesUnassignResponse,
  PostAdminRolesUpdateRequest,
  PostAdminRolesUpdateResponse,
  PostAdminRolesUpdateDefaultPoliciesRequest,
  PostAdminRolesUpdateDefaultPoliciesResponse,
  PostAdminRolesUpdateInlinePoliciesRequest,
  PostAdminRolesUpdateInlinePoliciesResponse,
  PostAdminRolesUsersRequest,
  PostAdminRolesUsersResponse,
  PostAdminSendEmailRequest,
  PostAdminSendEmailResponse,
  PostAdminShowModerationLogsRequest,
  PostAdminShowModerationLogsResponse,
  PostAdminShowUserRequest,
  PostAdminShowUserResponse,
  PostAdminShowUserAccountMoveLogsRequest,
  PostAdminShowUserAccountMoveLogsResponse,
  PostAdminShowUsersRequest,
  PostAdminShowUsersResponse,
  PostAdminSsoCreateRequest,
  PostAdminSsoCreateResponse,
  PostAdminSsoDeleteRequest,
  PostAdminSsoDeleteResponse,
  PostAdminSsoListRequest,
  PostAdminSsoListResponse,
  PostAdminSsoUpdateRequest,
  PostAdminSsoUpdateResponse,
  PostAdminSuspendUserRequest,
  PostAdminSuspendUserResponse,
  PostAdminSystemWebhookCreateRequest,
  PostAdminSystemWebhookCreateResponse,
  PostAdminSystemWebhookDeleteRequest,
  PostAdminSystemWebhookDeleteResponse,
  PostAdminSystemWebhookListRequest,
  PostAdminSystemWebhookListResponse,
  PostAdminSystemWebhookShowRequest,
  PostAdminSystemWebhookShowResponse,
  PostAdminSystemWebhookUpdateRequest,
  PostAdminSystemWebhookUpdateResponse,
  PostAdminUnsetUserAvatarRequest,
  PostAdminUnsetUserAvatarResponse,
  PostAdminUnsetUserBannerRequest,
  PostAdminUnsetUserBannerResponse,
  PostAdminUnsetUserMutualLinkRequest,
  PostAdminUnsetUserMutualLinkResponse,
  PostAdminUnsuspendUserRequest,
  PostAdminUnsuspendUserResponse,
  PostAdminUpdateAbuseUserReportRequest,
  PostAdminUpdateAbuseUserReportResponse,
  PostAdminUpdateMetaRequest,
  PostAdminUpdateMetaResponse,
  PostAdminUpdateProxyAccountRequest,
  PostAdminUpdateProxyAccountResponse,
  PostAdminUpdateUserNameRequest,
  PostAdminUpdateUserNameResponse,
  PostAdminUpdateUserNoteRequest,
  PostAdminUpdateUserNoteResponse,
  PostV2adminEmojiListRequest,
  PostV2adminEmojiListResponse,
} from '../types/Admin.d.ts';
import type {
  PostAdminEmojiImportZipRequest,
  PostAdminEmojiImportZipResponse,
  GetBubbleGameRankingRequest,
  GetBubbleGameRankingResponse,
  PostBubbleGameRankingRequest,
  PostBubbleGameRankingResponse,
  PostBubbleGameRegisterRequest,
  PostBubbleGameRegisterResponse,
  PostExportCustomEmojisResponse,
  PostI2faDoneRequest,
  PostI2faDoneResponse,
  PostI2faKeyDoneRequest,
  PostI2faKeyDoneResponse,
  PostI2faPasswordLessRequest,
  PostI2faPasswordLessResponse,
  PostI2faRegisterRequest,
  PostI2faRegisterResponse,
  PostI2faRegisterKeyRequest,
  PostI2faRegisterKeyResponse,
  PostI2faRemoveKeyRequest,
  PostI2faRemoveKeyResponse,
  PostI2faUnregisterRequest,
  PostI2faUnregisterResponse,
  PostI2faUpdateKeyRequest,
  PostI2faUpdateKeyResponse,
  PostIappsRequest,
  PostIappsResponse,
  PostIauthorizedAppsRequest,
  PostIauthorizedAppsResponse,
  PostIchangePasswordRequest,
  PostIchangePasswordResponse,
  PostIclaimAchievementRequest,
  PostIclaimAchievementResponse,
  PostIdeleteAccountRequest,
  PostIdeleteAccountResponse,
  PostIexportAntennasResponse,
  PostIexportBlockingResponse,
  PostIexportClipsResponse,
  PostIexportFavoritesResponse,
  PostIexportFollowingRequest,
  PostIexportFollowingResponse,
  PostIexportMuteResponse,
  PostIexportNotesResponse,
  PostIexportUserListsResponse,
  PostIimportAntennasRequest,
  PostIimportAntennasResponse,
  PostIimportBlockingRequest,
  PostIimportBlockingResponse,
  PostIimportFollowingRequest,
  PostIimportFollowingResponse,
  PostIimportMutingRequest,
  PostIimportMutingResponse,
  PostIimportUserListsRequest,
  PostIimportUserListsResponse,
  PostIregenerateTokenRequest,
  PostIregenerateTokenResponse,
  PostIregistryGetRequest,
  PostIregistryGetResponse,
  PostIregistryGetAllRequest,
  PostIregistryGetAllResponse,
  PostIregistryGetDetailRequest,
  PostIregistryGetDetailResponse,
  PostIregistryKeysRequest,
  PostIregistryKeysResponse,
  PostIregistryKeysWithTypeRequest,
  PostIregistryKeysWithTypeResponse,
  PostIregistryRemoveRequest,
  PostIregistryRemoveResponse,
  PostIregistryScopesWithDomainResponse,
  PostIregistrySetRequest,
  PostIregistrySetResponse,
  PostIrevokeTokenRequest,
  PostIrevokeTokenResponse,
  PostIsigninHistoryRequest,
  PostIsigninHistoryResponse,
  PostIupdateEmailRequest,
  PostIupdateEmailResponse,
  PostPagePushRequest,
  PostPagePushResponse,
  PostReversiCancelMatchRequest,
  PostReversiCancelMatchResponse,
  PostReversiGamesRequest,
  PostReversiGamesResponse,
  PostReversiInvitationsResponse,
  PostReversiMatchRequest,
  PostReversiMatchResponse,
  PostReversiShowGameRequest,
  PostReversiShowGameResponse,
  PostReversiSurrenderRequest,
  PostReversiSurrenderResponse,
  PostReversiVerifyRequest,
  PostReversiVerifyResponse,
  PostUsersAchievementsRequest,
  PostUsersAchievementsResponse,
  PostUsersListsCreateFromPublicRequest,
  PostUsersListsCreateFromPublicResponse,
  PostUsersListsFavoriteRequest,
  PostUsersListsFavoriteResponse,
  PostUsersListsUnfavoriteRequest,
  PostUsersListsUnfavoriteResponse,
} from '../types/Default.d.ts';
import type {
  PostAdminMetaResponse,
  PostAnnouncementRequest,
  PostAnnouncementResponse,
  PostAnnouncementsRequest,
  PostAnnouncementsResponse,
  PostAnnouncementsShowRequest,
  PostAnnouncementsShowResponse,
  GetEmojiRequest,
  GetEmojiResponse,
  PostEmojiRequest,
  PostEmojiResponse,
  GetEmojisResponse,
  PostEmojisResponse,
  PostEndpointRequest,
  PostEndpointResponse,
  PostEndpointsResponse,
  PostFetchExternalResourcesRequest,
  PostFetchExternalResourcesResponse,
  GetFetchRssRequest,
  GetFetchRssResponse,
  PostFetchRssRequest,
  PostFetchRssResponse,
  GetGetOnlineUsersCountResponse,
  PostGetOnlineUsersCountResponse,
  PostInviteCreateResponse,
  PostInviteDeleteRequest,
  PostInviteDeleteResponse,
  PostInviteLimitResponse,
  PostInviteListRequest,
  PostInviteListResponse,
  GetMetaRequest,
  GetMetaResponse,
  PostMetaRequest,
  PostMetaResponse,
  PostPingResponse,
  GetStatsResponse,
  PostStatsResponse,
} from '../types/Meta.d.ts';
import type {
  PostAdminSystemWebhookTestRequest,
  PostAdminSystemWebhookTestResponse,
  PostIwebhooksCreateRequest,
  PostIwebhooksCreateResponse,
  PostIwebhooksDeleteRequest,
  PostIwebhooksDeleteResponse,
  PostIwebhooksListResponse,
  PostIwebhooksShowRequest,
  PostIwebhooksShowResponse,
  PostIwebhooksTestRequest,
  PostIwebhooksTestResponse,
  PostIwebhooksUpdateRequest,
  PostIwebhooksUpdateResponse,
} from '../types/Webhooks.d.ts';
import type {
  PostAntennasCreateRequest,
  PostAntennasCreateResponse,
  PostAntennasDeleteRequest,
  PostAntennasDeleteResponse,
  PostAntennasListResponse,
  PostAntennasNotesRequest,
  PostAntennasNotesResponse,
  PostAntennasShowRequest,
  PostAntennasShowResponse,
  PostAntennasUpdateRequest,
  PostAntennasUpdateResponse,
} from '../types/Antennas.d.ts';
import type {
  PostApGetRequest,
  PostApGetResponse,
  PostApShowRequest,
  PostApShowResponse,
  PostFederationFollowersRequest,
  PostFederationFollowersResponse,
  PostFederationFollowingRequest,
  PostFederationFollowingResponse,
  GetFederationInstancesRequest,
  GetFederationInstancesResponse,
  PostFederationInstancesRequest,
  PostFederationInstancesResponse,
  PostFederationShowInstanceRequest,
  PostFederationShowInstanceResponse,
  GetFederationStatsRequest,
  GetFederationStatsResponse,
  PostFederationStatsRequest,
  PostFederationStatsResponse,
  PostFederationUpdateRemoteUserRequest,
  PostFederationUpdateRemoteUserResponse,
  PostFederationUsersRequest,
  PostFederationUsersResponse,
} from '../types/Federation.d.ts';
import type {
  PostAppCreateRequest,
  PostAppCreateResponse,
  PostAppShowRequest,
  PostAppShowResponse,
} from '../types/App.d.ts';
import type {
  PostAuthAcceptRequest,
  PostAuthAcceptResponse,
  PostAuthSessionGenerateRequest,
  PostAuthSessionGenerateResponse,
  PostAuthSessionShowRequest,
  PostAuthSessionShowResponse,
  PostAuthSessionUserkeyRequest,
  PostAuthSessionUserkeyResponse,
  PostMiauthGenTokenRequest,
  PostMiauthGenTokenResponse,
} from '../types/Auth.d.ts';
import type {
  PostBlockingCreateRequest,
  PostBlockingCreateResponse,
  PostBlockingDeleteRequest,
  PostBlockingDeleteResponse,
  PostBlockingListRequest,
  PostBlockingListResponse,
  PostClipsAddNoteRequest,
  PostClipsAddNoteResponse,
  PostClipsMyFavoritesResponse,
  PostClipsNotesRequest,
  PostClipsNotesResponse,
  PostClipsRemoveNoteRequest,
  PostClipsRemoveNoteResponse,
  PostFlashMyRequest,
  PostFlashMyResponse,
  PostFlashMyLikesRequest,
  PostFlashMyLikesResponse,
  PostIResponse,
  PostIfavoritesRequest,
  PostIfavoritesResponse,
  PostIgalleryLikesRequest,
  PostIgalleryLikesResponse,
  PostIgalleryPostsRequest,
  PostIgalleryPostsResponse,
  PostInotificationsRequest,
  PostInotificationsResponse,
  PostInotificationsGroupedRequest,
  PostInotificationsGroupedResponse,
  PostIpageLikesRequest,
  PostIpageLikesResponse,
  PostIpagesRequest,
  PostIpagesResponse,
  PostIpinRequest,
  PostIpinResponse,
  PostIpurgeTimelineCacheRequest,
  PostIpurgeTimelineCacheResponse,
  PostIreadAnnouncementRequest,
  PostIreadAnnouncementResponse,
  PostIunpinRequest,
  PostIunpinResponse,
  PostIupdateRequest,
  PostIupdateResponse,
  PostMuteCreateRequest,
  PostMuteCreateResponse,
  PostMuteDeleteRequest,
  PostMuteDeleteResponse,
  PostMuteListRequest,
  PostMuteListResponse,
  PostMyAppsRequest,
  PostMyAppsResponse,
  PostRenoteMuteCreateRequest,
  PostRenoteMuteCreateResponse,
  PostRenoteMuteDeleteRequest,
  PostRenoteMuteDeleteResponse,
  PostRenoteMuteListRequest,
  PostRenoteMuteListResponse,
  PostSwRegisterRequest,
  PostSwRegisterResponse,
  PostSwShowRegistrationRequest,
  PostSwShowRegistrationResponse,
  PostSwUnregisterRequest,
  PostSwUnregisterResponse,
  PostSwUpdateRegistrationRequest,
  PostSwUpdateRegistrationResponse,
  PostUsersUpdateMemoRequest,
  PostUsersUpdateMemoResponse,
} from '../types/Account.d.ts';
import type {
  PostChannelsCreateRequest,
  PostChannelsCreateResponse,
  PostChannelsFavoriteRequest,
  PostChannelsFavoriteResponse,
  PostChannelsFeaturedResponse,
  PostChannelsFeaturedGamesResponse,
  PostChannelsFollowRequest,
  PostChannelsFollowResponse,
  PostChannelsFollowedRequest,
  PostChannelsFollowedResponse,
  PostChannelsMyFavoritesResponse,
  PostChannelsOwnedRequest,
  PostChannelsOwnedResponse,
  PostChannelsSearchRequest,
  PostChannelsSearchResponse,
  PostChannelsShowRequest,
  PostChannelsShowResponse,
  PostChannelsUnfavoriteRequest,
  PostChannelsUnfavoriteResponse,
  PostChannelsUnfollowRequest,
  PostChannelsUnfollowResponse,
  PostChannelsUpdateRequest,
  PostChannelsUpdateResponse,
} from '../types/Channels.d.ts';
import type {
  PostChannelsTimelineRequest,
  PostChannelsTimelineResponse,
  PostNotesRequest,
  PostNotesResponse,
  PostNotesChildrenRequest,
  PostNotesChildrenResponse,
  PostNotesConversationRequest,
  PostNotesConversationResponse,
  PostNotesCreateRequest,
  PostNotesCreateResponse,
  PostNotesDeleteRequest,
  PostNotesDeleteResponse,
  PostNotesFavoritesCreateRequest,
  PostNotesFavoritesCreateResponse,
  PostNotesFavoritesDeleteRequest,
  PostNotesFavoritesDeleteResponse,
  GetNotesFeaturedRequest,
  GetNotesFeaturedResponse,
  PostNotesFeaturedRequest,
  PostNotesFeaturedResponse,
  PostNotesGlobalTimelineRequest,
  PostNotesGlobalTimelineResponse,
  PostNotesHybridTimelineRequest,
  PostNotesHybridTimelineResponse,
  PostNotesLocalTimelineRequest,
  PostNotesLocalTimelineResponse,
  PostNotesMentionsRequest,
  PostNotesMentionsResponse,
  PostNotesPollsRecommendationRequest,
  PostNotesPollsRecommendationResponse,
  PostNotesPollsVoteRequest,
  PostNotesPollsVoteResponse,
  GetNotesReactionsRequest,
  GetNotesReactionsResponse,
  PostNotesReactionsRequest,
  PostNotesReactionsResponse,
  PostNotesRenotesRequest,
  PostNotesRenotesResponse,
  PostNotesRepliesRequest,
  PostNotesRepliesResponse,
  PostNotesScheduledCancelRequest,
  PostNotesScheduledCancelResponse,
  PostNotesScheduledListRequest,
  PostNotesScheduledListResponse,
  PostNotesSearchRequest,
  PostNotesSearchResponse,
  PostNotesSearchByTagRequest,
  PostNotesSearchByTagResponse,
  PostNotesShowRequest,
  PostNotesShowResponse,
  PostNotesStateRequest,
  PostNotesStateResponse,
  PostNotesThreadMutingCreateRequest,
  PostNotesThreadMutingCreateResponse,
  PostNotesThreadMutingDeleteRequest,
  PostNotesThreadMutingDeleteResponse,
  PostNotesTimelineRequest,
  PostNotesTimelineResponse,
  PostNotesTranslateRequest,
  PostNotesTranslateResponse,
  PostNotesUnrenoteRequest,
  PostNotesUnrenoteResponse,
  PostNotesUserListTimelineRequest,
  PostNotesUserListTimelineResponse,
  PostPromoReadRequest,
  PostPromoReadResponse,
  GetUsersFeaturedNotesRequest,
  GetUsersFeaturedNotesResponse,
  PostUsersFeaturedNotesRequest,
  PostUsersFeaturedNotesResponse,
} from '../types/Notes.d.ts';
import type {
  GetChartsActiveUsersRequest,
  GetChartsActiveUsersResponse,
  PostChartsActiveUsersRequest,
  PostChartsActiveUsersResponse,
  GetChartsApRequestRequest,
  GetChartsApRequestResponse,
  PostChartsApRequestRequest,
  PostChartsApRequestResponse,
  GetChartsDriveRequest,
  GetChartsDriveResponse,
  PostChartsDriveRequest,
  PostChartsDriveResponse,
  GetChartsFederationRequest,
  GetChartsFederationResponse,
  PostChartsFederationRequest,
  PostChartsFederationResponse,
  GetChartsInstanceRequest,
  GetChartsInstanceResponse,
  PostChartsInstanceRequest,
  PostChartsInstanceResponse,
  GetChartsNotesRequest,
  GetChartsNotesResponse,
  PostChartsNotesRequest,
  PostChartsNotesResponse,
  GetChartsUserDriveRequest,
  GetChartsUserDriveResponse,
  PostChartsUserDriveRequest,
  PostChartsUserDriveResponse,
  GetChartsUserFollowingRequest,
  GetChartsUserFollowingResponse,
  PostChartsUserFollowingRequest,
  PostChartsUserFollowingResponse,
  GetChartsUserNotesRequest,
  GetChartsUserNotesResponse,
  PostChartsUserNotesRequest,
  PostChartsUserNotesResponse,
  GetChartsUserPvRequest,
  GetChartsUserPvResponse,
  PostChartsUserPvRequest,
  PostChartsUserPvResponse,
  GetChartsUserReactionsRequest,
  GetChartsUserReactionsResponse,
  PostChartsUserReactionsRequest,
  PostChartsUserReactionsResponse,
  GetChartsUsersRequest,
  GetChartsUsersResponse,
  PostChartsUsersRequest,
  PostChartsUsersResponse,
} from '../types/Charts.d.ts';
import type {
  PostClipsCreateRequest,
  PostClipsCreateResponse,
  PostClipsDeleteRequest,
  PostClipsDeleteResponse,
  PostClipsListResponse,
  PostClipsShowRequest,
  PostClipsShowResponse,
  PostClipsUpdateRequest,
  PostClipsUpdateResponse,
  PostNotesClipsRequest,
  PostNotesClipsResponse,
} from '../types/Clips.d.ts';
import type {
  PostClipsFavoriteRequest,
  PostClipsFavoriteResponse,
  PostClipsUnfavoriteRequest,
  PostClipsUnfavoriteResponse,
} from '../types/Clip.d.ts';
import type {
  PostDriveResponse,
  PostDriveFilesRequest,
  PostDriveFilesResponse,
  PostDriveFilesAttachedNotesRequest,
  PostDriveFilesAttachedNotesResponse,
  PostDriveFilesCheckExistenceRequest,
  PostDriveFilesCheckExistenceResponse,
  PostDriveFilesCreateRequest,
  PostDriveFilesCreateResponse,
  PostDriveFilesDeleteRequest,
  PostDriveFilesDeleteResponse,
  PostDriveFilesFindRequest,
  PostDriveFilesFindResponse,
  PostDriveFilesFindByHashRequest,
  PostDriveFilesFindByHashResponse,
  PostDriveFilesShowRequest,
  PostDriveFilesShowResponse,
  PostDriveFilesUpdateRequest,
  PostDriveFilesUpdateResponse,
  PostDriveFilesUploadFromUrlRequest,
  PostDriveFilesUploadFromUrlResponse,
  PostDriveFoldersRequest,
  PostDriveFoldersResponse,
  PostDriveFoldersCreateRequest,
  PostDriveFoldersCreateResponse,
  PostDriveFoldersDeleteRequest,
  PostDriveFoldersDeleteResponse,
  PostDriveFoldersFindRequest,
  PostDriveFoldersFindResponse,
  PostDriveFoldersShowRequest,
  PostDriveFoldersShowResponse,
  PostDriveFoldersUpdateRequest,
  PostDriveFoldersUpdateResponse,
  PostDriveStreamRequest,
  PostDriveStreamResponse,
} from '../types/Drive.d.ts';
import type {
  PostEmailAddressAvailableRequest,
  PostEmailAddressAvailableResponse,
  PostGetAvatarDecorationsResponse,
  PostImoveRequest,
  PostImoveResponse,
  PostPinnedUsersResponse,
  GetRetentionResponse,
  PostRetentionResponse,
  PostUsernameAvailableRequest,
  PostUsernameAvailableResponse,
  PostUsersRequest,
  PostUsersResponse,
  PostUsersClipsRequest,
  PostUsersClipsResponse,
  PostUsersFlashsRequest,
  PostUsersFlashsResponse,
  PostUsersFollowersRequest,
  PostUsersFollowersResponse,
  PostUsersFollowingRequest,
  PostUsersFollowingResponse,
  PostUsersGalleryPostsRequest,
  PostUsersGalleryPostsResponse,
  PostUsersGetFollowingBirthdayUsersRequest,
  PostUsersGetFollowingBirthdayUsersResponse,
  PostUsersGetFrequentlyRepliedUsersRequest,
  PostUsersGetFrequentlyRepliedUsersResponse,
  PostUsersGetSecurityInfoRequest,
  PostUsersGetSecurityInfoResponse,
  GetUsersGetSkebStatusRequest,
  GetUsersGetSkebStatusResponse,
  PostUsersGetSkebStatusRequest,
  PostUsersGetSkebStatusResponse,
  PostUsersNotesRequest,
  PostUsersNotesResponse,
  PostUsersPagesRequest,
  PostUsersPagesResponse,
  PostUsersReactionsRequest,
  PostUsersReactionsResponse,
  PostUsersRecommendationRequest,
  PostUsersRecommendationResponse,
  PostUsersRelationRequest,
  PostUsersRelationResponse,
  PostUsersReportAbuseRequest,
  PostUsersReportAbuseResponse,
  PostUsersSearchRequest,
  PostUsersSearchResponse,
  PostUsersSearchByUsernameAndHostRequest,
  PostUsersSearchByUsernameAndHostResponse,
  PostUsersShowRequest,
  PostUsersShowResponse,
  PostUsersStatsRequest,
  PostUsersStatsResponse,
} from '../types/Users.d.ts';
import type {
  PostFlashCreateRequest,
  PostFlashCreateResponse,
  PostFlashFeaturedRequest,
  PostFlashFeaturedResponse,
  PostFlashLikeRequest,
  PostFlashLikeResponse,
  PostFlashUnlikeRequest,
  PostFlashUnlikeResponse,
  PostFlashUpdateRequest,
  PostFlashUpdateResponse,
} from '../types/Flash.d.ts';
import type {
  PostFlashDeleteRequest,
  PostFlashDeleteResponse,
  PostFlashShowRequest,
  PostFlashShowResponse,
} from '../types/Flashs.d.ts';
import type {
  PostFollowingCreateRequest,
  PostFollowingCreateResponse,
  PostFollowingDeleteRequest,
  PostFollowingDeleteResponse,
  PostFollowingInvalidateRequest,
  PostFollowingInvalidateResponse,
  PostFollowingRequestsAcceptRequest,
  PostFollowingRequestsAcceptResponse,
  PostFollowingRequestsCancelRequest,
  PostFollowingRequestsCancelResponse,
  PostFollowingRequestsListRequest,
  PostFollowingRequestsListResponse,
  PostFollowingRequestsRejectRequest,
  PostFollowingRequestsRejectResponse,
  PostFollowingRequestsSentRequest,
  PostFollowingRequestsSentResponse,
  PostFollowingUpdateRequest,
  PostFollowingUpdateResponse,
  PostFollowingUpdateAllRequest,
  PostFollowingUpdateAllResponse,
} from '../types/Following.d.ts';
import type {
  PostGalleryFeaturedRequest,
  PostGalleryFeaturedResponse,
  PostGalleryPopularResponse,
  PostGalleryPostsRequest,
  PostGalleryPostsResponse,
  PostGalleryPostsCreateRequest,
  PostGalleryPostsCreateResponse,
  PostGalleryPostsDeleteRequest,
  PostGalleryPostsDeleteResponse,
  PostGalleryPostsLikeRequest,
  PostGalleryPostsLikeResponse,
  PostGalleryPostsShowRequest,
  PostGalleryPostsShowResponse,
  PostGalleryPostsUnlikeRequest,
  PostGalleryPostsUnlikeResponse,
  PostGalleryPostsUpdateRequest,
  PostGalleryPostsUpdateResponse,
} from '../types/Gallery.d.ts';
import type {
  PostHashtagsListRequest,
  PostHashtagsListResponse,
  PostHashtagsSearchRequest,
  PostHashtagsSearchResponse,
  PostHashtagsShowRequest,
  PostHashtagsShowResponse,
  GetHashtagsTrendResponse,
  PostHashtagsTrendResponse,
  PostHashtagsUsersRequest,
  PostHashtagsUsersResponse,
} from '../types/Hashtags.d.ts';
import type {
  PostNotesReactionsCreateRequest,
  PostNotesReactionsCreateResponse,
  PostNotesReactionsDeleteRequest,
  PostNotesReactionsDeleteResponse,
} from '../types/Reactions.d.ts';
import type {
  PostNotificationsCreateRequest,
  PostNotificationsCreateResponse,
  PostNotificationsFlushResponse,
  PostNotificationsMarkAllAsReadResponse,
  PostNotificationsTestNotificationResponse,
} from '../types/Notifications.d.ts';
import type {
  PostPagesCreateRequest,
  PostPagesCreateResponse,
  PostPagesDeleteRequest,
  PostPagesDeleteResponse,
  PostPagesFeaturedResponse,
  PostPagesLikeRequest,
  PostPagesLikeResponse,
  PostPagesShowRequest,
  PostPagesShowResponse,
  PostPagesUnlikeRequest,
  PostPagesUnlikeResponse,
  PostPagesUpdateRequest,
  PostPagesUpdateResponse,
} from '../types/Pages.d.ts';
import type {
  PostRequestResetPasswordRequest,
  PostRequestResetPasswordResponse,
  PostResetPasswordRequest,
  PostResetPasswordResponse,
} from '../types/ResetPassword.d.ts';
import type {
  PostResetDbResponse,
  PostTestRequest,
  PostTestResponse,
} from '../types/NonProductive.d.ts';
import type {
  PostRolesListResponse,
  PostRolesNotesRequest,
  PostRolesNotesResponse,
  PostRolesShowRequest,
  PostRolesShowResponse,
  PostRolesUsersRequest,
  PostRolesUsersResponse,
} from '../types/Role.d.ts';
import type {
  PostUsersListsCreateRequest,
  PostUsersListsCreateResponse,
  PostUsersListsDeleteRequest,
  PostUsersListsDeleteResponse,
  PostUsersListsGetMembershipsRequest,
  PostUsersListsGetMembershipsResponse,
  PostUsersListsListRequest,
  PostUsersListsListResponse,
  PostUsersListsPullRequest,
  PostUsersListsPullResponse,
  PostUsersListsPushRequest,
  PostUsersListsPushResponse,
  PostUsersListsShowRequest,
  PostUsersListsShowResponse,
  PostUsersListsUpdateRequest,
  PostUsersListsUpdateResponse,
  PostUsersListsUpdateMembershipRequest,
  PostUsersListsUpdateMembershipResponse,
} from '../types/Lists.d.ts';

export class MisskeyClient {
  constructor(baseUrl: string, token?: string);
  readonly baseUrl: string;
  readonly token?: string;
}


export namespace Admin {
  /** admin/abuse-report-resolver/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  export function postAdminAbuseReportResolverCreate(client: MisskeyClient, request: PostAdminAbuseReportResolverCreateRequest): Promise<PostAdminAbuseReportResolverCreateResponse>;
  /** admin/abuse-report-resolver/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  export function postAdminAbuseReportResolverDelete(client: MisskeyClient, request: PostAdminAbuseReportResolverDeleteRequest): Promise<PostAdminAbuseReportResolverDeleteResponse>;
  /** admin/abuse-report-resolver/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report-resolvers* */
  export function postAdminAbuseReportResolverList(client: MisskeyClient, request: PostAdminAbuseReportResolverListRequest): Promise<PostAdminAbuseReportResolverListResponse>;
  /** admin/abuse-report-resolver/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report-resolvers* */
  export function postAdminAbuseReportResolverUpdate(client: MisskeyClient, request: PostAdminAbuseReportResolverUpdateRequest): Promise<PostAdminAbuseReportResolverUpdateResponse>;
  /** admin/abuse-report/notification-recipient/create - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  export function postAdminAbuseReportNotificationRecipientCreate(client: MisskeyClient, request: PostAdminAbuseReportNotificationRecipientCreateRequest): Promise<PostAdminAbuseReportNotificationRecipientCreateResponse>;
  /** admin/abuse-report/notification-recipient/delete - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  export function postAdminAbuseReportNotificationRecipientDelete(client: MisskeyClient, request: PostAdminAbuseReportNotificationRecipientDeleteRequest): Promise<PostAdminAbuseReportNotificationRecipientDeleteResponse>;
  /** admin/abuse-report/notification-recipient/list - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report:notification-recipient* */
  export function postAdminAbuseReportNotificationRecipientList(client: MisskeyClient, request: PostAdminAbuseReportNotificationRecipientListRequest): Promise<PostAdminAbuseReportNotificationRecipientListResponse>;
  /** admin/abuse-report/notification-recipient/show - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:abuse-report:notification-recipient* */
  export function postAdminAbuseReportNotificationRecipientShow(client: MisskeyClient, request: PostAdminAbuseReportNotificationRecipientShowRequest): Promise<PostAdminAbuseReportNotificationRecipientShowResponse>;
  /** admin/abuse-report/notification-recipient/update - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:abuse-report:notification-recipient* */
  export function postAdminAbuseReportNotificationRecipientUpdate(client: MisskeyClient, request: PostAdminAbuseReportNotificationRecipientUpdateRequest): Promise<PostAdminAbuseReportNotificationRecipientUpdateResponse>;
  /** admin/abuse-user-reports - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:abuse-user-reports* */
  export function postAdminAbuseUserReports(client: MisskeyClient, request: PostAdminAbuseUserReportsRequest): Promise<PostAdminAbuseUserReportsResponse>;
  /** admin/accounts/create - No description provided.

**Credential required**: *No* */
  export function postAdminAccountsCreate(client: MisskeyClient, request: PostAdminAccountsCreateRequest): Promise<PostAdminAccountsCreateResponse>;
  /** admin/accounts/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  export function postAdminAccountsDelete(client: MisskeyClient, request: PostAdminAccountsDeleteRequest): Promise<PostAdminAccountsDeleteResponse>;
  /** admin/accounts/find-by-email - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:account* */
  export function postAdminAccountsFindByEmail(client: MisskeyClient, request: PostAdminAccountsFindByEmailRequest): Promise<PostAdminAccountsFindByEmailResponse>;
  /** admin/accounts/pending/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:account* */
  export function postAdminAccountsPendingList(client: MisskeyClient, request: PostAdminAccountsPendingListRequest): Promise<PostAdminAccountsPendingListResponse>;
  /** admin/accounts/pending/revoke - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  export function postAdminAccountsPendingRevoke(client: MisskeyClient, request: PostAdminAccountsPendingRevokeRequest): Promise<PostAdminAccountsPendingRevokeResponse>;
  /** admin/ad/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  export function postAdminAdCreate(client: MisskeyClient, request: PostAdminAdCreateRequest): Promise<PostAdminAdCreateResponse>;
  /** admin/ad/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  export function postAdminAdDelete(client: MisskeyClient, request: PostAdminAdDeleteRequest): Promise<PostAdminAdDeleteResponse>;
  /** admin/ad/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:ad* */
  export function postAdminAdList(client: MisskeyClient, request: PostAdminAdListRequest): Promise<PostAdminAdListResponse>;
  /** admin/ad/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:ad* */
  export function postAdminAdUpdate(client: MisskeyClient, request: PostAdminAdUpdateRequest): Promise<PostAdminAdUpdateResponse>;
  /** admin/announcements/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  export function postAdminAnnouncementsCreate(client: MisskeyClient, request: PostAdminAnnouncementsCreateRequest): Promise<PostAdminAnnouncementsCreateResponse>;
  /** admin/announcements/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  export function postAdminAnnouncementsDelete(client: MisskeyClient, request: PostAdminAnnouncementsDeleteRequest): Promise<PostAdminAnnouncementsDeleteResponse>;
  /** admin/announcements/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:announcements* */
  export function postAdminAnnouncementsList(client: MisskeyClient, request: PostAdminAnnouncementsListRequest): Promise<PostAdminAnnouncementsListResponse>;
  /** admin/announcements/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:announcements* */
  export function postAdminAnnouncementsUpdate(client: MisskeyClient, request: PostAdminAnnouncementsUpdateRequest): Promise<PostAdminAnnouncementsUpdateResponse>;
  /** admin/avatar-decorations/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  export function postAdminAvatarDecorationsCreate(client: MisskeyClient, request: PostAdminAvatarDecorationsCreateRequest): Promise<PostAdminAvatarDecorationsCreateResponse>;
  /** admin/avatar-decorations/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  export function postAdminAvatarDecorationsDelete(client: MisskeyClient, request: PostAdminAvatarDecorationsDeleteRequest): Promise<PostAdminAvatarDecorationsDeleteResponse>;
  /** admin/avatar-decorations/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:avatar-decorations* */
  export function postAdminAvatarDecorationsList(client: MisskeyClient, request: PostAdminAvatarDecorationsListRequest): Promise<PostAdminAvatarDecorationsListResponse>;
  /** admin/avatar-decorations/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:avatar-decorations* */
  export function postAdminAvatarDecorationsUpdate(client: MisskeyClient, request: PostAdminAvatarDecorationsUpdateRequest): Promise<PostAdminAvatarDecorationsUpdateResponse>;
  /** admin/captcha/current - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:meta* */
  export function postAdminCaptchaCurrent(client: MisskeyClient): Promise<PostAdminCaptchaCurrentResponse>;
  /** admin/captcha/save - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:meta* */
  export function postAdminCaptchaSave(client: MisskeyClient, request: PostAdminCaptchaSaveRequest): Promise<PostAdminCaptchaSaveResponse>;
  /** admin/drive/clean-remote-files - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  export function postAdminDriveCleanRemoteFiles(client: MisskeyClient): Promise<PostAdminDriveCleanRemoteFilesResponse>;
  /** admin/drive/cleanup - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  export function postAdminDriveCleanup(client: MisskeyClient): Promise<PostAdminDriveCleanupResponse>;
  /** admin/drive/delete-all-files-of-a-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:drive* */
  export function postAdminDriveDeleteAllFilesOfAUser(client: MisskeyClient, request: PostAdminDriveDeleteAllFilesOfAuserRequest): Promise<PostAdminDriveDeleteAllFilesOfAuserResponse>;
  /** admin/drive/files - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:drive* */
  export function postAdminDriveFiles(client: MisskeyClient, request: PostAdminDriveFilesRequest): Promise<PostAdminDriveFilesResponse>;
  /** admin/drive/show-file - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:drive* */
  export function postAdminDriveShowFile(client: MisskeyClient, request: PostAdminDriveShowFileRequest): Promise<PostAdminDriveShowFileResponse>;
  /** admin/emoji/add - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiAdd(client: MisskeyClient, request: PostAdminEmojiAddRequest): Promise<PostAdminEmojiAddResponse>;
  /** admin/emoji/add-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiAddAliasesBulk(client: MisskeyClient, request: PostAdminEmojiAddAliasesBulkRequest): Promise<PostAdminEmojiAddAliasesBulkResponse>;
  /** admin/emoji/copy - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiCopy(client: MisskeyClient, request: PostAdminEmojiCopyRequest): Promise<PostAdminEmojiCopyResponse>;
  /** admin/emoji/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiDelete(client: MisskeyClient, request: PostAdminEmojiDeleteRequest): Promise<PostAdminEmojiDeleteResponse>;
  /** admin/emoji/delete-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiDeleteBulk(client: MisskeyClient, request: PostAdminEmojiDeleteBulkRequest): Promise<PostAdminEmojiDeleteBulkResponse>;
  /** admin/emoji/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  export function postAdminEmojiList(client: MisskeyClient, request: PostAdminEmojiListRequest): Promise<PostAdminEmojiListResponse>;
  /** admin/emoji/list-remote - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  export function postAdminEmojiListRemote(client: MisskeyClient, request: PostAdminEmojiListRemoteRequest): Promise<PostAdminEmojiListRemoteResponse>;
  /** admin/emoji/remove-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiRemoveAliasesBulk(client: MisskeyClient, request: PostAdminEmojiRemoveAliasesBulkRequest): Promise<PostAdminEmojiRemoveAliasesBulkResponse>;
  /** admin/emoji/set-aliases-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiSetAliasesBulk(client: MisskeyClient, request: PostAdminEmojiSetAliasesBulkRequest): Promise<PostAdminEmojiSetAliasesBulkResponse>;
  /** admin/emoji/set-category-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiSetCategoryBulk(client: MisskeyClient, request: PostAdminEmojiSetCategoryBulkRequest): Promise<PostAdminEmojiSetCategoryBulkResponse>;
  /** admin/emoji/set-license-bulk - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiSetLicenseBulk(client: MisskeyClient, request: PostAdminEmojiSetLicenseBulkRequest): Promise<PostAdminEmojiSetLicenseBulkResponse>;
  /** admin/emoji/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:emoji* */
  export function postAdminEmojiUpdate(client: MisskeyClient, request: PostAdminEmojiUpdateRequest): Promise<PostAdminEmojiUpdateResponse>;
  /** admin/federation/delete-all-files - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  export function postAdminFederationDeleteAllFiles(client: MisskeyClient, request: PostAdminFederationDeleteAllFilesRequest): Promise<PostAdminFederationDeleteAllFilesResponse>;
  /** admin/federation/refresh-remote-instance-metadata - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  export function postAdminFederationRefreshRemoteInstanceMetadata(client: MisskeyClient, request: PostAdminFederationRefreshRemoteInstanceMetadataRequest): Promise<PostAdminFederationRefreshRemoteInstanceMetadataResponse>;
  /** admin/federation/remove-all-following - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  export function postAdminFederationRemoveAllFollowing(client: MisskeyClient, request: PostAdminFederationRemoveAllFollowingRequest): Promise<PostAdminFederationRemoveAllFollowingResponse>;
  /** admin/federation/update-instance - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:federation* */
  export function postAdminFederationUpdateInstance(client: MisskeyClient, request: PostAdminFederationUpdateInstanceRequest): Promise<PostAdminFederationUpdateInstanceResponse>;
  /** admin/forward-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  export function postAdminForwardAbuseUserReport(client: MisskeyClient, request: PostAdminForwardAbuseUserReportRequest): Promise<PostAdminForwardAbuseUserReportResponse>;
  /** admin/get-index-stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:index-stats* */
  export function postAdminGetIndexStats(client: MisskeyClient): Promise<PostAdminGetIndexStatsResponse>;
  /** admin/get-table-stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:table-stats* */
  export function postAdminGetTableStats(client: MisskeyClient): Promise<PostAdminGetTableStatsResponse>;
  /** admin/get-user-ips - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:user-ips* */
  export function postAdminGetUserIps(client: MisskeyClient, request: PostAdminGetUserIpsRequest): Promise<PostAdminGetUserIpsResponse>;
  /** admin/indie-auth/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  export function postAdminIndieAuthCreate(client: MisskeyClient, request: PostAdminIndieAuthCreateRequest): Promise<PostAdminIndieAuthCreateResponse>;
  /** admin/indie-auth/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  export function postAdminIndieAuthDelete(client: MisskeyClient, request: PostAdminIndieAuthDeleteRequest): Promise<PostAdminIndieAuthDeleteResponse>;
  /** admin/indie-auth/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:indie-auth* */
  export function postAdminIndieAuthList(client: MisskeyClient, request: PostAdminIndieAuthListRequest): Promise<PostAdminIndieAuthListResponse>;
  /** admin/indie-auth/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:indie-auth* */
  export function postAdminIndieAuthUpdate(client: MisskeyClient, request: PostAdminIndieAuthUpdateRequest): Promise<PostAdminIndieAuthUpdateResponse>;
  /** admin/invite/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:invite-codes* */
  export function postAdminInviteCreate(client: MisskeyClient, request: PostAdminInviteCreateRequest): Promise<PostAdminInviteCreateResponse>;
  /** admin/invite/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:invite-codes* */
  export function postAdminInviteList(client: MisskeyClient, request: PostAdminInviteListRequest): Promise<PostAdminInviteListResponse>;
  /** admin/promo/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:promo* */
  export function postAdminPromoCreate(client: MisskeyClient, request: PostAdminPromoCreateRequest): Promise<PostAdminPromoCreateResponse>;
  /** admin/queue/clear - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:queue* */
  export function postAdminQueueClear(client: MisskeyClient, request: PostAdminQueueClearRequest): Promise<PostAdminQueueClearResponse>;
  /** admin/queue/deliver-delayed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:queue* */
  export function postAdminQueueDeliverDelayed(client: MisskeyClient): Promise<PostAdminQueueDeliverDelayedResponse>;
  /** admin/queue/inbox-delayed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:queue* */
  export function postAdminQueueInboxDelayed(client: MisskeyClient): Promise<PostAdminQueueInboxDelayedResponse>;
  /** admin/queue/promote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:queue* */
  export function postAdminQueuePromote(client: MisskeyClient, request: PostAdminQueuePromoteRequest): Promise<PostAdminQueuePromoteResponse>;
  /** admin/queue/stats - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  export function postAdminQueueStats(client: MisskeyClient): Promise<PostAdminQueueStatsResponse>;
  /** admin/regenerate-user-token - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:regenerate-user-token* */
  export function postAdminRegenerateUserToken(client: MisskeyClient, request: PostAdminRegenerateUserTokenRequest): Promise<PostAdminRegenerateUserTokenResponse>;
  /** admin/relays/add - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:relays* */
  export function postAdminRelaysAdd(client: MisskeyClient, request: PostAdminRelaysAddRequest): Promise<PostAdminRelaysAddResponse>;
  /** admin/relays/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:relays* */
  export function postAdminRelaysList(client: MisskeyClient): Promise<PostAdminRelaysListResponse>;
  /** admin/relays/remove - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:relays* */
  export function postAdminRelaysRemove(client: MisskeyClient, request: PostAdminRelaysRemoveRequest): Promise<PostAdminRelaysRemoveResponse>;
  /** admin/reset-password - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:reset-password* */
  export function postAdminResetPassword(client: MisskeyClient, request: PostAdminResetPasswordRequest): Promise<PostAdminResetPasswordResponse>;
  /** admin/resolve-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  export function postAdminResolveAbuseUserReport(client: MisskeyClient, request: PostAdminResolveAbuseUserReportRequest): Promise<PostAdminResolveAbuseUserReportResponse>;
  /** admin/roles/assign - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesAssign(client: MisskeyClient, request: PostAdminRolesAssignRequest): Promise<PostAdminRolesAssignResponse>;
  /** admin/roles/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesCreate(client: MisskeyClient, request: PostAdminRolesCreateRequest): Promise<PostAdminRolesCreateResponse>;
  /** admin/roles/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesDelete(client: MisskeyClient, request: PostAdminRolesDeleteRequest): Promise<PostAdminRolesDeleteResponse>;
  /** admin/roles/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:roles* */
  export function postAdminRolesList(client: MisskeyClient): Promise<PostAdminRolesListResponse>;
  /** admin/roles/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:roles* */
  export function postAdminRolesShow(client: MisskeyClient, request: PostAdminRolesShowRequest): Promise<PostAdminRolesShowResponse>;
  /** admin/roles/unassign - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesUnassign(client: MisskeyClient, request: PostAdminRolesUnassignRequest): Promise<PostAdminRolesUnassignResponse>;
  /** admin/roles/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesUpdate(client: MisskeyClient, request: PostAdminRolesUpdateRequest): Promise<PostAdminRolesUpdateResponse>;
  /** admin/roles/update-default-policies - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesUpdateDefaultPolicies(client: MisskeyClient, request: PostAdminRolesUpdateDefaultPoliciesRequest): Promise<PostAdminRolesUpdateDefaultPoliciesResponse>;
  /** admin/roles/update-inline-policies - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:roles* */
  export function postAdminRolesUpdateInlinePolicies(client: MisskeyClient, request: PostAdminRolesUpdateInlinePoliciesRequest): Promise<PostAdminRolesUpdateInlinePoliciesResponse>;
  /** admin/roles/users - No description provided.

**Credential required**: *No* / **Permission**: *read:admin:roles* */
  export function postAdminRolesUsers(client: MisskeyClient, request: PostAdminRolesUsersRequest): Promise<PostAdminRolesUsersResponse>;
  /** admin/send-email - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:send-email* */
  export function postAdminSendEmail(client: MisskeyClient, request: PostAdminSendEmailRequest): Promise<PostAdminSendEmailResponse>;
  /** admin/show-moderation-logs - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-moderation-log* */
  export function postAdminShowModerationLogs(client: MisskeyClient, request: PostAdminShowModerationLogsRequest): Promise<PostAdminShowModerationLogsResponse>;
  /** admin/show-user - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-user* */
  export function postAdminShowUser(client: MisskeyClient, request: PostAdminShowUserRequest): Promise<PostAdminShowUserResponse>;
  /** admin/show-user-account-move-logs - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-account-move-log* */
  export function postAdminShowUserAccountMoveLogs(client: MisskeyClient, request: PostAdminShowUserAccountMoveLogsRequest): Promise<PostAdminShowUserAccountMoveLogsResponse>;
  /** admin/show-users - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:show-user* */
  export function postAdminShowUsers(client: MisskeyClient, request: PostAdminShowUsersRequest): Promise<PostAdminShowUsersResponse>;
  /** admin/sso/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  export function postAdminSsoCreate(client: MisskeyClient, request: PostAdminSsoCreateRequest): Promise<PostAdminSsoCreateResponse>;
  /** admin/sso/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  export function postAdminSsoDelete(client: MisskeyClient, request: PostAdminSsoDeleteRequest): Promise<PostAdminSsoDeleteResponse>;
  /** admin/sso/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:sso* */
  export function postAdminSsoList(client: MisskeyClient, request: PostAdminSsoListRequest): Promise<PostAdminSsoListResponse>;
  /** admin/sso/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:sso* */
  export function postAdminSsoUpdate(client: MisskeyClient, request: PostAdminSsoUpdateRequest): Promise<PostAdminSsoUpdateResponse>;
  /** admin/suspend-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:suspend-user* */
  export function postAdminSuspendUser(client: MisskeyClient, request: PostAdminSuspendUserRequest): Promise<PostAdminSuspendUserResponse>;
  /** admin/system-webhook/create - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  export function postAdminSystemWebhookCreate(client: MisskeyClient, request: PostAdminSystemWebhookCreateRequest): Promise<PostAdminSystemWebhookCreateResponse>;
  /** admin/system-webhook/delete - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  export function postAdminSystemWebhookDelete(client: MisskeyClient, request: PostAdminSystemWebhookDeleteRequest): Promise<PostAdminSystemWebhookDeleteResponse>;
  /** admin/system-webhook/list - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  export function postAdminSystemWebhookList(client: MisskeyClient, request: PostAdminSystemWebhookListRequest): Promise<PostAdminSystemWebhookListResponse>;
  /** admin/system-webhook/show - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  export function postAdminSystemWebhookShow(client: MisskeyClient, request: PostAdminSystemWebhookShowRequest): Promise<PostAdminSystemWebhookShowResponse>;
  /** admin/system-webhook/update - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *write:admin:system-webhook* */
  export function postAdminSystemWebhookUpdate(client: MisskeyClient, request: PostAdminSystemWebhookUpdateRequest): Promise<PostAdminSystemWebhookUpdateResponse>;
  /** admin/unset-user-avatar - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-avatar* */
  export function postAdminUnsetUserAvatar(client: MisskeyClient, request: PostAdminUnsetUserAvatarRequest): Promise<PostAdminUnsetUserAvatarResponse>;
  /** admin/unset-user-banner - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-banner* */
  export function postAdminUnsetUserBanner(client: MisskeyClient, request: PostAdminUnsetUserBannerRequest): Promise<PostAdminUnsetUserBannerResponse>;
  /** admin/unset-user-mutual-link - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-mutual-link* */
  export function postAdminUnsetUserMutualLink(client: MisskeyClient, request: PostAdminUnsetUserMutualLinkRequest): Promise<PostAdminUnsetUserMutualLinkResponse>;
  /** admin/unsuspend-user - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:unsuspend-user* */
  export function postAdminUnsuspendUser(client: MisskeyClient, request: PostAdminUnsuspendUserRequest): Promise<PostAdminUnsuspendUserResponse>;
  /** admin/update-abuse-user-report - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:resolve-abuse-user-report* */
  export function postAdminUpdateAbuseUserReport(client: MisskeyClient, request: PostAdminUpdateAbuseUserReportRequest): Promise<PostAdminUpdateAbuseUserReportResponse>;
  /** admin/update-meta - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:meta* */
  export function postAdminUpdateMeta(client: MisskeyClient, request: PostAdminUpdateMetaRequest): Promise<PostAdminUpdateMetaResponse>;
  /** admin/update-proxy-account - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:account* */
  export function postAdminUpdateProxyAccount(client: MisskeyClient, request: PostAdminUpdateProxyAccountRequest): Promise<PostAdminUpdateProxyAccountResponse>;
  /** admin/update-user-name - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-name* */
  export function postAdminUpdateUserName(client: MisskeyClient, request: PostAdminUpdateUserNameRequest): Promise<PostAdminUpdateUserNameResponse>;
  /** admin/update-user-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:admin:user-note* */
  export function postAdminUpdateUserNote(client: MisskeyClient, request: PostAdminUpdateUserNoteRequest): Promise<PostAdminUpdateUserNoteResponse>;
  /** v2/admin/emoji/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:emoji* */
  export function postV2AdminEmojiList(client: MisskeyClient, request: PostV2adminEmojiListRequest): Promise<PostV2adminEmojiListResponse>;
}


export namespace Default {
  /** admin/emoji/import-zip - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postAdminEmojiImportZip(client: MisskeyClient, request: PostAdminEmojiImportZipRequest): Promise<PostAdminEmojiImportZipResponse>;
  /** bubble-game/ranking - No description provided.

**Credential required**: *No* */
  export function getBubbleGameRanking(client: MisskeyClient, request: GetBubbleGameRankingRequest): Promise<GetBubbleGameRankingResponse>;
  /** bubble-game/ranking - No description provided.

**Credential required**: *No* */
  export function postBubbleGameRanking(client: MisskeyClient, request: PostBubbleGameRankingRequest): Promise<PostBubbleGameRankingResponse>;
  /** bubble-game/register - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postBubbleGameRegister(client: MisskeyClient, request: PostBubbleGameRegisterRequest): Promise<PostBubbleGameRegisterResponse>;
  /** export-custom-emojis - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postExportCustomEmojis(client: MisskeyClient): Promise<PostExportCustomEmojisResponse>;
  /** i/2fa/done - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faDone(client: MisskeyClient, request: PostI2faDoneRequest): Promise<PostI2faDoneResponse>;
  /** i/2fa/key-done - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faKeyDone(client: MisskeyClient, request: PostI2faKeyDoneRequest): Promise<PostI2faKeyDoneResponse>;
  /** i/2fa/password-less - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faPasswordLess(client: MisskeyClient, request: PostI2faPasswordLessRequest): Promise<PostI2faPasswordLessResponse>;
  /** i/2fa/register - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faRegister(client: MisskeyClient, request: PostI2faRegisterRequest): Promise<PostI2faRegisterResponse>;
  /** i/2fa/register-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faRegisterKey(client: MisskeyClient, request: PostI2faRegisterKeyRequest): Promise<PostI2faRegisterKeyResponse>;
  /** i/2fa/remove-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faRemoveKey(client: MisskeyClient, request: PostI2faRemoveKeyRequest): Promise<PostI2faRemoveKeyResponse>;
  /** i/2fa/unregister - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faUnregister(client: MisskeyClient, request: PostI2faUnregisterRequest): Promise<PostI2faUnregisterResponse>;
  /** i/2fa/update-key - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postI2faUpdateKey(client: MisskeyClient, request: PostI2faUpdateKeyRequest): Promise<PostI2faUpdateKeyResponse>;
  /** i/apps - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIApps(client: MisskeyClient, request: PostIappsRequest): Promise<PostIappsResponse>;
  /** i/authorized-apps - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIAuthorizedApps(client: MisskeyClient, request: PostIauthorizedAppsRequest): Promise<PostIauthorizedAppsResponse>;
  /** i/change-password - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIChangePassword(client: MisskeyClient, request: PostIchangePasswordRequest): Promise<PostIchangePasswordResponse>;
  /** i/claim-achievement - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIClaimAchievement(client: MisskeyClient, request: PostIclaimAchievementRequest): Promise<PostIclaimAchievementResponse>;
  /** i/delete-account - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIDeleteAccount(client: MisskeyClient, request: PostIdeleteAccountRequest): Promise<PostIdeleteAccountResponse>;
  /** i/export-antennas - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportAntennas(client: MisskeyClient): Promise<PostIexportAntennasResponse>;
  /** i/export-blocking - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportBlocking(client: MisskeyClient): Promise<PostIexportBlockingResponse>;
  /** i/export-clips - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportClips(client: MisskeyClient): Promise<PostIexportClipsResponse>;
  /** i/export-favorites - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportFavorites(client: MisskeyClient): Promise<PostIexportFavoritesResponse>;
  /** i/export-following - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportFollowing(client: MisskeyClient, request: PostIexportFollowingRequest): Promise<PostIexportFollowingResponse>;
  /** i/export-mute - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportMute(client: MisskeyClient): Promise<PostIexportMuteResponse>;
  /** i/export-notes - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportNotes(client: MisskeyClient): Promise<PostIexportNotesResponse>;
  /** i/export-user-lists - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIExportUserLists(client: MisskeyClient): Promise<PostIexportUserListsResponse>;
  /** i/import-antennas - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIImportAntennas(client: MisskeyClient, request: PostIimportAntennasRequest): Promise<PostIimportAntennasResponse>;
  /** i/import-blocking - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIImportBlocking(client: MisskeyClient, request: PostIimportBlockingRequest): Promise<PostIimportBlockingResponse>;
  /** i/import-following - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIImportFollowing(client: MisskeyClient, request: PostIimportFollowingRequest): Promise<PostIimportFollowingResponse>;
  /** i/import-muting - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIImportMuting(client: MisskeyClient, request: PostIimportMutingRequest): Promise<PostIimportMutingResponse>;
  /** i/import-user-lists - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIImportUserLists(client: MisskeyClient, request: PostIimportUserListsRequest): Promise<PostIimportUserListsResponse>;
  /** i/regenerate-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIRegenerateToken(client: MisskeyClient, request: PostIregenerateTokenRequest): Promise<PostIregenerateTokenResponse>;
  /** i/registry/get - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIRegistryGet(client: MisskeyClient, request: PostIregistryGetRequest): Promise<PostIregistryGetResponse>;
  /** i/registry/get-all - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIRegistryGetAll(client: MisskeyClient, request: PostIregistryGetAllRequest): Promise<PostIregistryGetAllResponse>;
  /** i/registry/get-detail - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIRegistryGetDetail(client: MisskeyClient, request: PostIregistryGetDetailRequest): Promise<PostIregistryGetDetailResponse>;
  /** i/registry/keys - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIRegistryKeys(client: MisskeyClient, request: PostIregistryKeysRequest): Promise<PostIregistryKeysResponse>;
  /** i/registry/keys-with-type - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIRegistryKeysWithType(client: MisskeyClient, request: PostIregistryKeysWithTypeRequest): Promise<PostIregistryKeysWithTypeResponse>;
  /** i/registry/remove - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIRegistryRemove(client: MisskeyClient, request: PostIregistryRemoveRequest): Promise<PostIregistryRemoveResponse>;
  /** i/registry/scopes-with-domain - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIRegistryScopesWithDomain(client: MisskeyClient): Promise<PostIregistryScopesWithDomainResponse>;
  /** i/registry/set - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIRegistrySet(client: MisskeyClient, request: PostIregistrySetRequest): Promise<PostIregistrySetResponse>;
  /** i/revoke-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIRevokeToken(client: MisskeyClient, request: PostIrevokeTokenRequest): Promise<PostIrevokeTokenResponse>;
  /** i/signin-history - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postISigninHistory(client: MisskeyClient, request: PostIsigninHistoryRequest): Promise<PostIsigninHistoryResponse>;
  /** i/update-email - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIUpdateEmail(client: MisskeyClient, request: PostIupdateEmailRequest): Promise<PostIupdateEmailResponse>;
  /** page-push - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postPagePush(client: MisskeyClient, request: PostPagePushRequest): Promise<PostPagePushResponse>;
  /** reversi/cancel-match - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postReversiCancelMatch(client: MisskeyClient, request: PostReversiCancelMatchRequest): Promise<PostReversiCancelMatchResponse>;
  /** reversi/games - No description provided.

**Credential required**: *No* */
  export function postReversiGames(client: MisskeyClient, request: PostReversiGamesRequest): Promise<PostReversiGamesResponse>;
  /** reversi/invitations - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postReversiInvitations(client: MisskeyClient): Promise<PostReversiInvitationsResponse>;
  /** reversi/match - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postReversiMatch(client: MisskeyClient, request: PostReversiMatchRequest): Promise<PostReversiMatchResponse>;
  /** reversi/show-game - No description provided.

**Credential required**: *No* */
  export function postReversiShowGame(client: MisskeyClient, request: PostReversiShowGameRequest): Promise<PostReversiShowGameResponse>;
  /** reversi/surrender - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postReversiSurrender(client: MisskeyClient, request: PostReversiSurrenderRequest): Promise<PostReversiSurrenderResponse>;
  /** reversi/verify - No description provided.

**Credential required**: *No* */
  export function postReversiVerify(client: MisskeyClient, request: PostReversiVerifyRequest): Promise<PostReversiVerifyResponse>;
  /** users/achievements - No description provided.

**Credential required**: *No* */
  export function postUsersAchievements(client: MisskeyClient, request: PostUsersAchievementsRequest): Promise<PostUsersAchievementsResponse>;
  /** users/lists/create-from-public - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsCreateFromPublic(client: MisskeyClient, request: PostUsersListsCreateFromPublicRequest): Promise<PostUsersListsCreateFromPublicResponse>;
  /** users/lists/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsFavorite(client: MisskeyClient, request: PostUsersListsFavoriteRequest): Promise<PostUsersListsFavoriteResponse>;
  /** users/lists/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsUnfavorite(client: MisskeyClient, request: PostUsersListsUnfavoriteRequest): Promise<PostUsersListsUnfavoriteResponse>;
}


export namespace Meta {
  /** admin/meta - No description provided.

**Credential required**: *Yes* / **Permission**: *read:admin:meta* */
  export function postAdminMeta(client: MisskeyClient): Promise<PostAdminMetaResponse>;
  /** announcement - No description provided.

**Credential required**: *No* */
  export function postAnnouncement(client: MisskeyClient, request: PostAnnouncementRequest): Promise<PostAnnouncementResponse>;
  /** announcements - No description provided.

**Credential required**: *No* */
  export function postAnnouncements(client: MisskeyClient, request: PostAnnouncementsRequest): Promise<PostAnnouncementsResponse>;
  /** announcements/show - No description provided.

**Credential required**: *No* */
  export function postAnnouncementsShow(client: MisskeyClient, request: PostAnnouncementsShowRequest): Promise<PostAnnouncementsShowResponse>;
  /** emoji - No description provided.

**Credential required**: *No* */
  export function getEmoji(client: MisskeyClient, request: GetEmojiRequest): Promise<GetEmojiResponse>;
  /** emoji - No description provided.

**Credential required**: *No* */
  export function postEmoji(client: MisskeyClient, request: PostEmojiRequest): Promise<PostEmojiResponse>;
  /** emojis - No description provided.

**Credential required**: *No* */
  export function getEmojis(client: MisskeyClient): Promise<GetEmojisResponse>;
  /** emojis - No description provided.

**Credential required**: *No* */
  export function postEmojis(client: MisskeyClient): Promise<PostEmojisResponse>;
  /** endpoint - No description provided.

**Credential required**: *No* */
  export function postEndpoint(client: MisskeyClient, request: PostEndpointRequest): Promise<PostEndpointResponse>;
  /** endpoints - No description provided.

**Credential required**: *No* */
  export function postEndpoints(client: MisskeyClient): Promise<PostEndpointsResponse>;
  /** fetch-external-resources - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postFetchExternalResources(client: MisskeyClient, request: PostFetchExternalResourcesRequest): Promise<PostFetchExternalResourcesResponse>;
  /** fetch-rss - No description provided.

**Credential required**: *No* */
  export function getFetchRss(client: MisskeyClient, request: GetFetchRssRequest): Promise<GetFetchRssResponse>;
  /** fetch-rss - No description provided.

**Credential required**: *No* */
  export function postFetchRss(client: MisskeyClient, request: PostFetchRssRequest): Promise<PostFetchRssResponse>;
  /** get-online-users-count - No description provided.

**Credential required**: *No* */
  export function getGetOnlineUsersCount(client: MisskeyClient): Promise<GetGetOnlineUsersCountResponse>;
  /** get-online-users-count - No description provided.

**Credential required**: *No* */
  export function postGetOnlineUsersCount(client: MisskeyClient): Promise<PostGetOnlineUsersCountResponse>;
  /** invite/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:invite-codes* */
  export function postInviteCreate(client: MisskeyClient): Promise<PostInviteCreateResponse>;
  /** invite/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:invite-codes* */
  export function postInviteDelete(client: MisskeyClient, request: PostInviteDeleteRequest): Promise<PostInviteDeleteResponse>;
  /** invite/limit - No description provided.

**Credential required**: *Yes* / **Permission**: *read:invite-codes* */
  export function postInviteLimit(client: MisskeyClient): Promise<PostInviteLimitResponse>;
  /** invite/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:invite-codes* */
  export function postInviteList(client: MisskeyClient, request: PostInviteListRequest): Promise<PostInviteListResponse>;
  /** meta - No description provided.

**Credential required**: *No* */
  export function getMeta(client: MisskeyClient, request: GetMetaRequest): Promise<GetMetaResponse>;
  /** meta - No description provided.

**Credential required**: *No* */
  export function postMeta(client: MisskeyClient, request: PostMetaRequest): Promise<PostMetaResponse>;
  /** ping - No description provided.

**Credential required**: *No* */
  export function postPing(client: MisskeyClient): Promise<PostPingResponse>;
  /** stats - No description provided.

**Credential required**: *No* */
  export function getStats(client: MisskeyClient): Promise<GetStatsResponse>;
  /** stats - No description provided.

**Credential required**: *No* */
  export function postStats(client: MisskeyClient): Promise<PostStatsResponse>;
}


export namespace Webhooks {
  /** admin/system-webhook/test - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:admin:system-webhook* */
  export function postAdminSystemWebhookTest(client: MisskeyClient, request: PostAdminSystemWebhookTestRequest): Promise<PostAdminSystemWebhookTestResponse>;
  /** i/webhooks/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIWebhooksCreate(client: MisskeyClient, request: PostIwebhooksCreateRequest): Promise<PostIwebhooksCreateResponse>;
  /** i/webhooks/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIWebhooksDelete(client: MisskeyClient, request: PostIwebhooksDeleteRequest): Promise<PostIwebhooksDeleteResponse>;
  /** i/webhooks/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIWebhooksList(client: MisskeyClient): Promise<PostIwebhooksListResponse>;
  /** i/webhooks/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIWebhooksShow(client: MisskeyClient, request: PostIwebhooksShowRequest): Promise<PostIwebhooksShowResponse>;
  /** i/webhooks/test - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postIWebhooksTest(client: MisskeyClient, request: PostIwebhooksTestRequest): Promise<PostIwebhooksTestResponse>;
  /** i/webhooks/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIWebhooksUpdate(client: MisskeyClient, request: PostIwebhooksUpdateRequest): Promise<PostIwebhooksUpdateResponse>;
}


export namespace Antennas {
  /** antennas/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postAntennasCreate(client: MisskeyClient, request: PostAntennasCreateRequest): Promise<PostAntennasCreateResponse>;
  /** antennas/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postAntennasDelete(client: MisskeyClient, request: PostAntennasDeleteRequest): Promise<PostAntennasDeleteResponse>;
  /** antennas/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postAntennasList(client: MisskeyClient): Promise<PostAntennasListResponse>;
  /** antennas/notes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postAntennasNotes(client: MisskeyClient, request: PostAntennasNotesRequest): Promise<PostAntennasNotesResponse>;
  /** antennas/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postAntennasShow(client: MisskeyClient, request: PostAntennasShowRequest): Promise<PostAntennasShowResponse>;
  /** antennas/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postAntennasUpdate(client: MisskeyClient, request: PostAntennasUpdateRequest): Promise<PostAntennasUpdateResponse>;
}


export namespace Federation {
  /** ap/get - No description provided.

**Credential required**: *Yes* / **Permission**: *read:federation* */
  export function postApGet(client: MisskeyClient, request: PostApGetRequest): Promise<PostApGetResponse>;
  /** ap/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postApShow(client: MisskeyClient, request: PostApShowRequest): Promise<PostApShowResponse>;
  /** federation/followers - No description provided.

**Credential required**: *No* */
  export function postFederationFollowers(client: MisskeyClient, request: PostFederationFollowersRequest): Promise<PostFederationFollowersResponse>;
  /** federation/following - No description provided.

**Credential required**: *No* */
  export function postFederationFollowing(client: MisskeyClient, request: PostFederationFollowingRequest): Promise<PostFederationFollowingResponse>;
  /** federation/instances - No description provided.

**Credential required**: *No* */
  export function getFederationInstances(client: MisskeyClient, request: GetFederationInstancesRequest): Promise<GetFederationInstancesResponse>;
  /** federation/instances - No description provided.

**Credential required**: *No* */
  export function postFederationInstances(client: MisskeyClient, request: PostFederationInstancesRequest): Promise<PostFederationInstancesResponse>;
  /** federation/show-instance - No description provided.

**Credential required**: *No* */
  export function postFederationShowInstance(client: MisskeyClient, request: PostFederationShowInstanceRequest): Promise<PostFederationShowInstanceResponse>;
  /** federation/stats - No description provided.

**Credential required**: *No* */
  export function getFederationStats(client: MisskeyClient, request: GetFederationStatsRequest): Promise<GetFederationStatsResponse>;
  /** federation/stats - No description provided.

**Credential required**: *No* */
  export function postFederationStats(client: MisskeyClient, request: PostFederationStatsRequest): Promise<PostFederationStatsResponse>;
  /** federation/update-remote-user - No description provided.

**Credential required**: *No* */
  export function postFederationUpdateRemoteUser(client: MisskeyClient, request: PostFederationUpdateRemoteUserRequest): Promise<PostFederationUpdateRemoteUserResponse>;
  /** federation/users - No description provided.

**Credential required**: *No* */
  export function postFederationUsers(client: MisskeyClient, request: PostFederationUsersRequest): Promise<PostFederationUsersResponse>;
}


export namespace App {
  /** app/create - No description provided.

**Credential required**: *No* */
  export function postAppCreate(client: MisskeyClient, request: PostAppCreateRequest): Promise<PostAppCreateResponse>;
  /** app/show - No description provided.

**Credential required**: *No* */
  export function postAppShow(client: MisskeyClient, request: PostAppShowRequest): Promise<PostAppShowResponse>;
}


export namespace Auth {
  /** auth/accept - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postAuthAccept(client: MisskeyClient, request: PostAuthAcceptRequest): Promise<PostAuthAcceptResponse>;
  /** auth/session/generate - No description provided.

**Credential required**: *No* */
  export function postAuthSessionGenerate(client: MisskeyClient, request: PostAuthSessionGenerateRequest): Promise<PostAuthSessionGenerateResponse>;
  /** auth/session/show - No description provided.

**Credential required**: *No* */
  export function postAuthSessionShow(client: MisskeyClient, request: PostAuthSessionShowRequest): Promise<PostAuthSessionShowResponse>;
  /** auth/session/userkey - No description provided.

**Credential required**: *No* */
  export function postAuthSessionUserkey(client: MisskeyClient, request: PostAuthSessionUserkeyRequest): Promise<PostAuthSessionUserkeyResponse>;
  /** miauth/gen-token - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postMiauthGenToken(client: MisskeyClient, request: PostMiauthGenTokenRequest): Promise<PostMiauthGenTokenResponse>;
}


export namespace Account {
  /** blocking/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:blocks* */
  export function postBlockingCreate(client: MisskeyClient, request: PostBlockingCreateRequest): Promise<PostBlockingCreateResponse>;
  /** blocking/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:blocks* */
  export function postBlockingDelete(client: MisskeyClient, request: PostBlockingDeleteRequest): Promise<PostBlockingDeleteResponse>;
  /** blocking/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:blocks* */
  export function postBlockingList(client: MisskeyClient, request: PostBlockingListRequest): Promise<PostBlockingListResponse>;
  /** clips/add-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postClipsAddNote(client: MisskeyClient, request: PostClipsAddNoteRequest): Promise<PostClipsAddNoteResponse>;
  /** clips/my-favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:clip-favorite* */
  export function postClipsMyFavorites(client: MisskeyClient): Promise<PostClipsMyFavoritesResponse>;
  /** clips/notes - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  export function postClipsNotes(client: MisskeyClient, request: PostClipsNotesRequest): Promise<PostClipsNotesResponse>;
  /** clips/remove-note - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postClipsRemoveNote(client: MisskeyClient, request: PostClipsRemoveNoteRequest): Promise<PostClipsRemoveNoteResponse>;
  /** flash/my - No description provided.

**Credential required**: *Yes* / **Permission**: *read:flash* */
  export function postFlashMy(client: MisskeyClient, request: PostFlashMyRequest): Promise<PostFlashMyResponse>;
  /** flash/my-likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:flash-likes* */
  export function postFlashMyLikes(client: MisskeyClient, request: PostFlashMyLikesRequest): Promise<PostFlashMyLikesResponse>;
  /** i - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postI(client: MisskeyClient): Promise<PostIResponse>;
  /** i/favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:favorites* */
  export function postIFavorites(client: MisskeyClient, request: PostIfavoritesRequest): Promise<PostIfavoritesResponse>;
  /** i/gallery/likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:gallery-likes* */
  export function postIGalleryLikes(client: MisskeyClient, request: PostIgalleryLikesRequest): Promise<PostIgalleryLikesResponse>;
  /** i/gallery/posts - No description provided.

**Credential required**: *Yes* / **Permission**: *read:gallery* */
  export function postIGalleryPosts(client: MisskeyClient, request: PostIgalleryPostsRequest): Promise<PostIgalleryPostsResponse>;
  /** i/notifications - No description provided.

**Credential required**: *Yes* / **Permission**: *read:notifications* */
  export function postINotifications(client: MisskeyClient, request: PostInotificationsRequest): Promise<PostInotificationsResponse>;
  /** i/notifications-grouped - No description provided.

**Credential required**: *Yes* / **Permission**: *read:notifications* */
  export function postINotificationsGrouped(client: MisskeyClient, request: PostInotificationsGroupedRequest): Promise<PostInotificationsGroupedResponse>;
  /** i/page-likes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:page-likes* */
  export function postIPageLikes(client: MisskeyClient, request: PostIpageLikesRequest): Promise<PostIpageLikesResponse>;
  /** i/pages - No description provided.

**Credential required**: *Yes* / **Permission**: *read:pages* */
  export function postIPages(client: MisskeyClient, request: PostIpagesRequest): Promise<PostIpagesResponse>;
  /** i/pin - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIPin(client: MisskeyClient, request: PostIpinRequest): Promise<PostIpinResponse>;
  /** i/purge-timeline-cache - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIPurgeTimelineCache(client: MisskeyClient, request: PostIpurgeTimelineCacheRequest): Promise<PostIpurgeTimelineCacheResponse>;
  /** i/read-announcement - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIReadAnnouncement(client: MisskeyClient, request: PostIreadAnnouncementRequest): Promise<PostIreadAnnouncementResponse>;
  /** i/unpin - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIUnpin(client: MisskeyClient, request: PostIunpinRequest): Promise<PostIunpinResponse>;
  /** i/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postIUpdate(client: MisskeyClient, request: PostIupdateRequest): Promise<PostIupdateResponse>;
  /** mute/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  export function postMuteCreate(client: MisskeyClient, request: PostMuteCreateRequest): Promise<PostMuteCreateResponse>;
  /** mute/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  export function postMuteDelete(client: MisskeyClient, request: PostMuteDeleteRequest): Promise<PostMuteDeleteResponse>;
  /** mute/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:mutes* */
  export function postMuteList(client: MisskeyClient, request: PostMuteListRequest): Promise<PostMuteListResponse>;
  /** my/apps - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postMyApps(client: MisskeyClient, request: PostMyAppsRequest): Promise<PostMyAppsResponse>;
  /** renote-mute/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  export function postRenoteMuteCreate(client: MisskeyClient, request: PostRenoteMuteCreateRequest): Promise<PostRenoteMuteCreateResponse>;
  /** renote-mute/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:mutes* */
  export function postRenoteMuteDelete(client: MisskeyClient, request: PostRenoteMuteDeleteRequest): Promise<PostRenoteMuteDeleteResponse>;
  /** renote-mute/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:mutes* */
  export function postRenoteMuteList(client: MisskeyClient, request: PostRenoteMuteListRequest): Promise<PostRenoteMuteListResponse>;
  /** sw/register - Register to receive push notifications.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postSwRegister(client: MisskeyClient, request: PostSwRegisterRequest): Promise<PostSwRegisterResponse>;
  /** sw/show-registration - Check push notification registration exists.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postSwShowRegistration(client: MisskeyClient, request: PostSwShowRegistrationRequest): Promise<PostSwShowRegistrationResponse>;
  /** sw/unregister - Unregister from receiving push notifications.

**Credential required**: *No* */
  export function postSwUnregister(client: MisskeyClient, request: PostSwUnregisterRequest): Promise<PostSwUnregisterResponse>;
  /** sw/update-registration - Update push notification registration.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postSwUpdateRegistration(client: MisskeyClient, request: PostSwUpdateRegistrationRequest): Promise<PostSwUpdateRegistrationResponse>;
  /** users/update-memo - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersUpdateMemo(client: MisskeyClient, request: PostUsersUpdateMemoRequest): Promise<PostUsersUpdateMemoResponse>;
}


export namespace Channels {
  /** channels/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsCreate(client: MisskeyClient, request: PostChannelsCreateRequest): Promise<PostChannelsCreateResponse>;
  /** channels/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsFavorite(client: MisskeyClient, request: PostChannelsFavoriteRequest): Promise<PostChannelsFavoriteResponse>;
  /** channels/featured - No description provided.

**Credential required**: *No* */
  export function postChannelsFeatured(client: MisskeyClient): Promise<PostChannelsFeaturedResponse>;
  /** channels/featured-games - No description provided.

**Credential required**: *No* */
  export function postChannelsFeaturedGames(client: MisskeyClient): Promise<PostChannelsFeaturedGamesResponse>;
  /** channels/follow - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsFollow(client: MisskeyClient, request: PostChannelsFollowRequest): Promise<PostChannelsFollowResponse>;
  /** channels/followed - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  export function postChannelsFollowed(client: MisskeyClient, request: PostChannelsFollowedRequest): Promise<PostChannelsFollowedResponse>;
  /** channels/my-favorites - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  export function postChannelsMyFavorites(client: MisskeyClient): Promise<PostChannelsMyFavoritesResponse>;
  /** channels/owned - No description provided.

**Credential required**: *Yes* / **Permission**: *read:channels* */
  export function postChannelsOwned(client: MisskeyClient, request: PostChannelsOwnedRequest): Promise<PostChannelsOwnedResponse>;
  /** channels/search - No description provided.

**Credential required**: *No* */
  export function postChannelsSearch(client: MisskeyClient, request: PostChannelsSearchRequest): Promise<PostChannelsSearchResponse>;
  /** channels/show - No description provided.

**Credential required**: *No* */
  export function postChannelsShow(client: MisskeyClient, request: PostChannelsShowRequest): Promise<PostChannelsShowResponse>;
  /** channels/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsUnfavorite(client: MisskeyClient, request: PostChannelsUnfavoriteRequest): Promise<PostChannelsUnfavoriteResponse>;
  /** channels/unfollow - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsUnfollow(client: MisskeyClient, request: PostChannelsUnfollowRequest): Promise<PostChannelsUnfollowResponse>;
  /** channels/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:channels* */
  export function postChannelsUpdate(client: MisskeyClient, request: PostChannelsUpdateRequest): Promise<PostChannelsUpdateResponse>;
}


export namespace Notes {
  /** channels/timeline - No description provided.

**Credential required**: *No* */
  export function postChannelsTimeline(client: MisskeyClient, request: PostChannelsTimelineRequest): Promise<PostChannelsTimelineResponse>;
  /** notes - No description provided.

**Credential required**: *No* */
  export function postNotes(client: MisskeyClient, request: PostNotesRequest): Promise<PostNotesResponse>;
  /** notes/children - No description provided.

**Credential required**: *No* */
  export function postNotesChildren(client: MisskeyClient, request: PostNotesChildrenRequest): Promise<PostNotesChildrenResponse>;
  /** notes/conversation - No description provided.

**Credential required**: *No* */
  export function postNotesConversation(client: MisskeyClient, request: PostNotesConversationRequest): Promise<PostNotesConversationResponse>;
  /** notes/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  export function postNotesCreate(client: MisskeyClient, request: PostNotesCreateRequest): Promise<PostNotesCreateResponse>;
  /** notes/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  export function postNotesDelete(client: MisskeyClient, request: PostNotesDeleteRequest): Promise<PostNotesDeleteResponse>;
  /** notes/favorites/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:favorites* */
  export function postNotesFavoritesCreate(client: MisskeyClient, request: PostNotesFavoritesCreateRequest): Promise<PostNotesFavoritesCreateResponse>;
  /** notes/favorites/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:favorites* */
  export function postNotesFavoritesDelete(client: MisskeyClient, request: PostNotesFavoritesDeleteRequest): Promise<PostNotesFavoritesDeleteResponse>;
  /** notes/featured - No description provided.

**Credential required**: *No* */
  export function getNotesFeatured(client: MisskeyClient, request: GetNotesFeaturedRequest): Promise<GetNotesFeaturedResponse>;
  /** notes/featured - No description provided.

**Credential required**: *No* */
  export function postNotesFeatured(client: MisskeyClient, request: PostNotesFeaturedRequest): Promise<PostNotesFeaturedResponse>;
  /** notes/global-timeline - No description provided.

**Credential required**: *No* */
  export function postNotesGlobalTimeline(client: MisskeyClient, request: PostNotesGlobalTimelineRequest): Promise<PostNotesGlobalTimelineResponse>;
  /** notes/hybrid-timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesHybridTimeline(client: MisskeyClient, request: PostNotesHybridTimelineRequest): Promise<PostNotesHybridTimelineResponse>;
  /** notes/local-timeline - No description provided.

**Credential required**: *No* */
  export function postNotesLocalTimeline(client: MisskeyClient, request: PostNotesLocalTimelineRequest): Promise<PostNotesLocalTimelineResponse>;
  /** notes/mentions - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesMentions(client: MisskeyClient, request: PostNotesMentionsRequest): Promise<PostNotesMentionsResponse>;
  /** notes/polls/recommendation - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesPollsRecommendation(client: MisskeyClient, request: PostNotesPollsRecommendationRequest): Promise<PostNotesPollsRecommendationResponse>;
  /** notes/polls/vote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:votes* */
  export function postNotesPollsVote(client: MisskeyClient, request: PostNotesPollsVoteRequest): Promise<PostNotesPollsVoteResponse>;
  /** notes/reactions - No description provided.

**Credential required**: *No* */
  export function getNotesReactions(client: MisskeyClient, request: GetNotesReactionsRequest): Promise<GetNotesReactionsResponse>;
  /** notes/reactions - No description provided.

**Credential required**: *No* */
  export function postNotesReactions(client: MisskeyClient, request: PostNotesReactionsRequest): Promise<PostNotesReactionsResponse>;
  /** notes/renotes - No description provided.

**Credential required**: *No* */
  export function postNotesRenotes(client: MisskeyClient, request: PostNotesRenotesRequest): Promise<PostNotesRenotesResponse>;
  /** notes/replies - No description provided.

**Credential required**: *No* */
  export function postNotesReplies(client: MisskeyClient, request: PostNotesRepliesRequest): Promise<PostNotesRepliesResponse>;
  /** notes/scheduled/cancel - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  export function postNotesScheduledCancel(client: MisskeyClient, request: PostNotesScheduledCancelRequest): Promise<PostNotesScheduledCancelResponse>;
  /** notes/scheduled/list - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  export function postNotesScheduledList(client: MisskeyClient, request: PostNotesScheduledListRequest): Promise<PostNotesScheduledListResponse>;
  /** notes/search - No description provided.

**Credential required**: *No* */
  export function postNotesSearch(client: MisskeyClient, request: PostNotesSearchRequest): Promise<PostNotesSearchResponse>;
  /** notes/search-by-tag - No description provided.

**Credential required**: *No* */
  export function postNotesSearchByTag(client: MisskeyClient, request: PostNotesSearchByTagRequest): Promise<PostNotesSearchByTagResponse>;
  /** notes/show - No description provided.

**Credential required**: *No* */
  export function postNotesShow(client: MisskeyClient, request: PostNotesShowRequest): Promise<PostNotesShowResponse>;
  /** notes/state - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesState(client: MisskeyClient, request: PostNotesStateRequest): Promise<PostNotesStateResponse>;
  /** notes/thread-muting/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postNotesThreadMutingCreate(client: MisskeyClient, request: PostNotesThreadMutingCreateRequest): Promise<PostNotesThreadMutingCreateResponse>;
  /** notes/thread-muting/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postNotesThreadMutingDelete(client: MisskeyClient, request: PostNotesThreadMutingDeleteRequest): Promise<PostNotesThreadMutingDeleteResponse>;
  /** notes/timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesTimeline(client: MisskeyClient, request: PostNotesTimelineRequest): Promise<PostNotesTimelineResponse>;
  /** notes/translate - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesTranslate(client: MisskeyClient, request: PostNotesTranslateRequest): Promise<PostNotesTranslateResponse>;
  /** notes/unrenote - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notes* */
  export function postNotesUnrenote(client: MisskeyClient, request: PostNotesUnrenoteRequest): Promise<PostNotesUnrenoteResponse>;
  /** notes/user-list-timeline - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postNotesUserListTimeline(client: MisskeyClient, request: PostNotesUserListTimelineRequest): Promise<PostNotesUserListTimelineResponse>;
  /** promo/read - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postPromoRead(client: MisskeyClient, request: PostPromoReadRequest): Promise<PostPromoReadResponse>;
  /** users/featured-notes - No description provided.

**Credential required**: *No* */
  export function getUsersFeaturedNotes(client: MisskeyClient, request: GetUsersFeaturedNotesRequest): Promise<GetUsersFeaturedNotesResponse>;
  /** users/featured-notes - No description provided.

**Credential required**: *No* */
  export function postUsersFeaturedNotes(client: MisskeyClient, request: PostUsersFeaturedNotesRequest): Promise<PostUsersFeaturedNotesResponse>;
}


export namespace Charts {
  /** charts/active-users - No description provided.

**Credential required**: *No* */
  export function getChartsActiveUsers(client: MisskeyClient, request: GetChartsActiveUsersRequest): Promise<GetChartsActiveUsersResponse>;
  /** charts/active-users - No description provided.

**Credential required**: *No* */
  export function postChartsActiveUsers(client: MisskeyClient, request: PostChartsActiveUsersRequest): Promise<PostChartsActiveUsersResponse>;
  /** charts/ap-request - No description provided.

**Credential required**: *No* */
  export function getChartsApRequest(client: MisskeyClient, request: GetChartsApRequestRequest): Promise<GetChartsApRequestResponse>;
  /** charts/ap-request - No description provided.

**Credential required**: *No* */
  export function postChartsApRequest(client: MisskeyClient, request: PostChartsApRequestRequest): Promise<PostChartsApRequestResponse>;
  /** charts/drive - No description provided.

**Credential required**: *No* */
  export function getChartsDrive(client: MisskeyClient, request: GetChartsDriveRequest): Promise<GetChartsDriveResponse>;
  /** charts/drive - No description provided.

**Credential required**: *No* */
  export function postChartsDrive(client: MisskeyClient, request: PostChartsDriveRequest): Promise<PostChartsDriveResponse>;
  /** charts/federation - No description provided.

**Credential required**: *No* */
  export function getChartsFederation(client: MisskeyClient, request: GetChartsFederationRequest): Promise<GetChartsFederationResponse>;
  /** charts/federation - No description provided.

**Credential required**: *No* */
  export function postChartsFederation(client: MisskeyClient, request: PostChartsFederationRequest): Promise<PostChartsFederationResponse>;
  /** charts/instance - No description provided.

**Credential required**: *No* */
  export function getChartsInstance(client: MisskeyClient, request: GetChartsInstanceRequest): Promise<GetChartsInstanceResponse>;
  /** charts/instance - No description provided.

**Credential required**: *No* */
  export function postChartsInstance(client: MisskeyClient, request: PostChartsInstanceRequest): Promise<PostChartsInstanceResponse>;
  /** charts/notes - No description provided.

**Credential required**: *No* */
  export function getChartsNotes(client: MisskeyClient, request: GetChartsNotesRequest): Promise<GetChartsNotesResponse>;
  /** charts/notes - No description provided.

**Credential required**: *No* */
  export function postChartsNotes(client: MisskeyClient, request: PostChartsNotesRequest): Promise<PostChartsNotesResponse>;
  /** charts/user/drive - No description provided.

**Credential required**: *No* */
  export function getChartsUserDrive(client: MisskeyClient, request: GetChartsUserDriveRequest): Promise<GetChartsUserDriveResponse>;
  /** charts/user/drive - No description provided.

**Credential required**: *No* */
  export function postChartsUserDrive(client: MisskeyClient, request: PostChartsUserDriveRequest): Promise<PostChartsUserDriveResponse>;
  /** charts/user/following - No description provided.

**Credential required**: *No* */
  export function getChartsUserFollowing(client: MisskeyClient, request: GetChartsUserFollowingRequest): Promise<GetChartsUserFollowingResponse>;
  /** charts/user/following - No description provided.

**Credential required**: *No* */
  export function postChartsUserFollowing(client: MisskeyClient, request: PostChartsUserFollowingRequest): Promise<PostChartsUserFollowingResponse>;
  /** charts/user/notes - No description provided.

**Credential required**: *No* */
  export function getChartsUserNotes(client: MisskeyClient, request: GetChartsUserNotesRequest): Promise<GetChartsUserNotesResponse>;
  /** charts/user/notes - No description provided.

**Credential required**: *No* */
  export function postChartsUserNotes(client: MisskeyClient, request: PostChartsUserNotesRequest): Promise<PostChartsUserNotesResponse>;
  /** charts/user/pv - No description provided.

**Credential required**: *No* */
  export function getChartsUserPv(client: MisskeyClient, request: GetChartsUserPvRequest): Promise<GetChartsUserPvResponse>;
  /** charts/user/pv - No description provided.

**Credential required**: *No* */
  export function postChartsUserPv(client: MisskeyClient, request: PostChartsUserPvRequest): Promise<PostChartsUserPvResponse>;
  /** charts/user/reactions - No description provided.

**Credential required**: *No* */
  export function getChartsUserReactions(client: MisskeyClient, request: GetChartsUserReactionsRequest): Promise<GetChartsUserReactionsResponse>;
  /** charts/user/reactions - No description provided.

**Credential required**: *No* */
  export function postChartsUserReactions(client: MisskeyClient, request: PostChartsUserReactionsRequest): Promise<PostChartsUserReactionsResponse>;
  /** charts/users - No description provided.

**Credential required**: *No* */
  export function getChartsUsers(client: MisskeyClient, request: GetChartsUsersRequest): Promise<GetChartsUsersResponse>;
  /** charts/users - No description provided.

**Credential required**: *No* */
  export function postChartsUsers(client: MisskeyClient, request: PostChartsUsersRequest): Promise<PostChartsUsersResponse>;
}


export namespace Clips {
  /** clips/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postClipsCreate(client: MisskeyClient, request: PostClipsCreateRequest): Promise<PostClipsCreateResponse>;
  /** clips/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postClipsDelete(client: MisskeyClient, request: PostClipsDeleteRequest): Promise<PostClipsDeleteResponse>;
  /** clips/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postClipsList(client: MisskeyClient): Promise<PostClipsListResponse>;
  /** clips/show - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  export function postClipsShow(client: MisskeyClient, request: PostClipsShowRequest): Promise<PostClipsShowResponse>;
  /** clips/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postClipsUpdate(client: MisskeyClient, request: PostClipsUpdateRequest): Promise<PostClipsUpdateResponse>;
  /** notes/clips - No description provided.

**Credential required**: *No* */
  export function postNotesClips(client: MisskeyClient, request: PostNotesClipsRequest): Promise<PostNotesClipsResponse>;
}


export namespace Clip {
  /** clips/favorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:clip-favorite* */
  export function postClipsFavorite(client: MisskeyClient, request: PostClipsFavoriteRequest): Promise<PostClipsFavoriteResponse>;
  /** clips/unfavorite - No description provided.

**Credential required**: *Yes* / **Permission**: *write:clip-favorite* */
  export function postClipsUnfavorite(client: MisskeyClient, request: PostClipsUnfavoriteRequest): Promise<PostClipsUnfavoriteResponse>;
}


export namespace Drive {
  /** drive - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDrive(client: MisskeyClient): Promise<PostDriveResponse>;
  /** drive/files - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFiles(client: MisskeyClient, request: PostDriveFilesRequest): Promise<PostDriveFilesResponse>;
  /** drive/files/attached-notes - Find the notes to which the given file is attached.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFilesAttachedNotes(client: MisskeyClient, request: PostDriveFilesAttachedNotesRequest): Promise<PostDriveFilesAttachedNotesResponse>;
  /** drive/files/check-existence - Check if a given file exists.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFilesCheckExistence(client: MisskeyClient, request: PostDriveFilesCheckExistenceRequest): Promise<PostDriveFilesCheckExistenceResponse>;
  /** drive/files/create - Upload a new drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFilesCreate(client: MisskeyClient, request: PostDriveFilesCreateRequest): Promise<PostDriveFilesCreateResponse>;
  /** drive/files/delete - Delete an existing drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFilesDelete(client: MisskeyClient, request: PostDriveFilesDeleteRequest): Promise<PostDriveFilesDeleteResponse>;
  /** drive/files/find - Search for a drive file by the given parameters.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFilesFind(client: MisskeyClient, request: PostDriveFilesFindRequest): Promise<PostDriveFilesFindResponse>;
  /** drive/files/find-by-hash - Search for a drive file by a hash of the contents.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFilesFindByHash(client: MisskeyClient, request: PostDriveFilesFindByHashRequest): Promise<PostDriveFilesFindByHashResponse>;
  /** drive/files/show - Show the properties of a drive file.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFilesShow(client: MisskeyClient, request: PostDriveFilesShowRequest): Promise<PostDriveFilesShowResponse>;
  /** drive/files/update - Update the properties of a drive file.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFilesUpdate(client: MisskeyClient, request: PostDriveFilesUpdateRequest): Promise<PostDriveFilesUpdateResponse>;
  /** drive/files/upload-from-url - Request the server to download a new drive file from the specified URL.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFilesUploadFromUrl(client: MisskeyClient, request: PostDriveFilesUploadFromUrlRequest): Promise<PostDriveFilesUploadFromUrlResponse>;
  /** drive/folders - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFolders(client: MisskeyClient, request: PostDriveFoldersRequest): Promise<PostDriveFoldersResponse>;
  /** drive/folders/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFoldersCreate(client: MisskeyClient, request: PostDriveFoldersCreateRequest): Promise<PostDriveFoldersCreateResponse>;
  /** drive/folders/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFoldersDelete(client: MisskeyClient, request: PostDriveFoldersDeleteRequest): Promise<PostDriveFoldersDeleteResponse>;
  /** drive/folders/find - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFoldersFind(client: MisskeyClient, request: PostDriveFoldersFindRequest): Promise<PostDriveFoldersFindResponse>;
  /** drive/folders/show - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveFoldersShow(client: MisskeyClient, request: PostDriveFoldersShowRequest): Promise<PostDriveFoldersShowResponse>;
  /** drive/folders/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:drive* */
  export function postDriveFoldersUpdate(client: MisskeyClient, request: PostDriveFoldersUpdateRequest): Promise<PostDriveFoldersUpdateResponse>;
  /** drive/stream - No description provided.

**Credential required**: *Yes* / **Permission**: *read:drive* */
  export function postDriveStream(client: MisskeyClient, request: PostDriveStreamRequest): Promise<PostDriveStreamResponse>;
}


export namespace Users {
  /** email-address/available - No description provided.

**Credential required**: *No* */
  export function postEmailAddressAvailable(client: MisskeyClient, request: PostEmailAddressAvailableRequest): Promise<PostEmailAddressAvailableResponse>;
  /** get-avatar-decorations - No description provided.

**Credential required**: *No* */
  export function postGetAvatarDecorations(client: MisskeyClient): Promise<PostGetAvatarDecorationsResponse>;
  /** i/move - No description provided.

**Internal Endpoint**: This endpoint is an API for the misskey mainframe and is not intended for use by third parties.
**Credential required**: *Yes* */
  export function postIMove(client: MisskeyClient, request: PostImoveRequest): Promise<PostImoveResponse>;
  /** pinned-users - No description provided.

**Credential required**: *No* */
  export function postPinnedUsers(client: MisskeyClient): Promise<PostPinnedUsersResponse>;
  /** retention - No description provided.

**Credential required**: *No* */
  export function getRetention(client: MisskeyClient): Promise<GetRetentionResponse>;
  /** retention - No description provided.

**Credential required**: *No* */
  export function postRetention(client: MisskeyClient): Promise<PostRetentionResponse>;
  /** username/available - No description provided.

**Credential required**: *No* */
  export function postUsernameAvailable(client: MisskeyClient, request: PostUsernameAvailableRequest): Promise<PostUsernameAvailableResponse>;
  /** users - No description provided.

**Credential required**: *No* */
  export function postUsers(client: MisskeyClient, request: PostUsersRequest): Promise<PostUsersResponse>;
  /** users/clips - Show all clips this user owns.

**Credential required**: *No* */
  export function postUsersClips(client: MisskeyClient, request: PostUsersClipsRequest): Promise<PostUsersClipsResponse>;
  /** users/flashs - Show all flashs this user created.

**Credential required**: *No* */
  export function postUsersFlashs(client: MisskeyClient, request: PostUsersFlashsRequest): Promise<PostUsersFlashsResponse>;
  /** users/followers - Show everyone that follows this user.

**Credential required**: *No* */
  export function postUsersFollowers(client: MisskeyClient, request: PostUsersFollowersRequest): Promise<PostUsersFollowersResponse>;
  /** users/following - Show everyone that this user is following.

**Credential required**: *No* */
  export function postUsersFollowing(client: MisskeyClient, request: PostUsersFollowingRequest): Promise<PostUsersFollowingResponse>;
  /** users/gallery/posts - Show all gallery posts by the given user.

**Credential required**: *No* */
  export function postUsersGalleryPosts(client: MisskeyClient, request: PostUsersGalleryPostsRequest): Promise<PostUsersGalleryPostsResponse>;
  /** users/get-following-birthday-users - Find users who have a birthday on the specified range.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postUsersGetFollowingBirthdayUsers(client: MisskeyClient, request: PostUsersGetFollowingBirthdayUsersRequest): Promise<PostUsersGetFollowingBirthdayUsersResponse>;
  /** users/get-frequently-replied-users - Get a list of other users that the specified user frequently replies to.

**Credential required**: *No* */
  export function postUsersGetFrequentlyRepliedUsers(client: MisskeyClient, request: PostUsersGetFrequentlyRepliedUsersRequest): Promise<PostUsersGetFrequentlyRepliedUsersResponse>;
  /** users/get-security-info - No description provided.

**Credential required**: *No* */
  export function postUsersGetSecurityInfo(client: MisskeyClient, request: PostUsersGetSecurityInfoRequest): Promise<PostUsersGetSecurityInfoResponse>;
  /** users/get-skeb-status - No description provided.

**Credential required**: *No* */
  export function getUsersGetSkebStatus(client: MisskeyClient, request: GetUsersGetSkebStatusRequest): Promise<GetUsersGetSkebStatusResponse>;
  /** users/get-skeb-status - No description provided.

**Credential required**: *No* */
  export function postUsersGetSkebStatus(client: MisskeyClient, request: PostUsersGetSkebStatusRequest): Promise<PostUsersGetSkebStatusResponse>;
  /** users/notes - No description provided.

**Credential required**: *No* */
  export function postUsersNotes(client: MisskeyClient, request: PostUsersNotesRequest): Promise<PostUsersNotesResponse>;
  /** users/pages - Show all pages this user created.

**Credential required**: *No* */
  export function postUsersPages(client: MisskeyClient, request: PostUsersPagesRequest): Promise<PostUsersPagesResponse>;
  /** users/reactions - Show all reactions this user made.

**Credential required**: *No* */
  export function postUsersReactions(client: MisskeyClient, request: PostUsersReactionsRequest): Promise<PostUsersReactionsResponse>;
  /** users/recommendation - Show users that the authenticated user might be interested to follow.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postUsersRecommendation(client: MisskeyClient, request: PostUsersRecommendationRequest): Promise<PostUsersRecommendationResponse>;
  /** users/relation - Show the different kinds of relations between the authenticated user and the specified user(s).

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postUsersRelation(client: MisskeyClient, request: PostUsersRelationRequest): Promise<PostUsersRelationResponse>;
  /** users/report-abuse - File a report.

**Credential required**: *Yes* / **Permission**: *write:report-abuse* */
  export function postUsersReportAbuse(client: MisskeyClient, request: PostUsersReportAbuseRequest): Promise<PostUsersReportAbuseResponse>;
  /** users/search - Search for users.

**Credential required**: *No* */
  export function postUsersSearch(client: MisskeyClient, request: PostUsersSearchRequest): Promise<PostUsersSearchResponse>;
  /** users/search-by-username-and-host - Search for a user by username and/or host.

**Credential required**: *No* */
  export function postUsersSearchByUsernameAndHost(client: MisskeyClient, request: PostUsersSearchByUsernameAndHostRequest): Promise<PostUsersSearchByUsernameAndHostResponse>;
  /** users/show - Show the properties of a user.

**Credential required**: *No* */
  export function postUsersShow(client: MisskeyClient, request: PostUsersShowRequest): Promise<PostUsersShowResponse>;
  /** users/stats - Show statistics about a user.

**Credential required**: *No* */
  export function postUsersStats(client: MisskeyClient, request: PostUsersStatsRequest): Promise<PostUsersStatsResponse>;
}


export namespace Flash {
  /** flash/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  export function postFlashCreate(client: MisskeyClient, request: PostFlashCreateRequest): Promise<PostFlashCreateResponse>;
  /** flash/featured - No description provided.

**Credential required**: *No* */
  export function postFlashFeatured(client: MisskeyClient, request: PostFlashFeaturedRequest): Promise<PostFlashFeaturedResponse>;
  /** flash/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash-likes* */
  export function postFlashLike(client: MisskeyClient, request: PostFlashLikeRequest): Promise<PostFlashLikeResponse>;
  /** flash/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash-likes* */
  export function postFlashUnlike(client: MisskeyClient, request: PostFlashUnlikeRequest): Promise<PostFlashUnlikeResponse>;
  /** flash/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  export function postFlashUpdate(client: MisskeyClient, request: PostFlashUpdateRequest): Promise<PostFlashUpdateResponse>;
}


export namespace Flashs {
  /** flash/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:flash* */
  export function postFlashDelete(client: MisskeyClient, request: PostFlashDeleteRequest): Promise<PostFlashDeleteResponse>;
  /** flash/show - No description provided.

**Credential required**: *No* */
  export function postFlashShow(client: MisskeyClient, request: PostFlashShowRequest): Promise<PostFlashShowResponse>;
}


export namespace Following {
  /** following/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingCreate(client: MisskeyClient, request: PostFollowingCreateRequest): Promise<PostFollowingCreateResponse>;
  /** following/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingDelete(client: MisskeyClient, request: PostFollowingDeleteRequest): Promise<PostFollowingDeleteResponse>;
  /** following/invalidate - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingInvalidate(client: MisskeyClient, request: PostFollowingInvalidateRequest): Promise<PostFollowingInvalidateResponse>;
  /** following/requests/accept - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingRequestsAccept(client: MisskeyClient, request: PostFollowingRequestsAcceptRequest): Promise<PostFollowingRequestsAcceptResponse>;
  /** following/requests/cancel - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingRequestsCancel(client: MisskeyClient, request: PostFollowingRequestsCancelRequest): Promise<PostFollowingRequestsCancelResponse>;
  /** following/requests/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:following* */
  export function postFollowingRequestsList(client: MisskeyClient, request: PostFollowingRequestsListRequest): Promise<PostFollowingRequestsListResponse>;
  /** following/requests/reject - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingRequestsReject(client: MisskeyClient, request: PostFollowingRequestsRejectRequest): Promise<PostFollowingRequestsRejectResponse>;
  /** following/requests/sent - No description provided.

**Credential required**: *Yes* / **Permission**: *read:following* */
  export function postFollowingRequestsSent(client: MisskeyClient, request: PostFollowingRequestsSentRequest): Promise<PostFollowingRequestsSentResponse>;
  /** following/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingUpdate(client: MisskeyClient, request: PostFollowingUpdateRequest): Promise<PostFollowingUpdateResponse>;
  /** following/update-all - No description provided.

**Credential required**: *Yes* / **Permission**: *write:following* */
  export function postFollowingUpdateAll(client: MisskeyClient, request: PostFollowingUpdateAllRequest): Promise<PostFollowingUpdateAllResponse>;
}


export namespace Gallery {
  /** gallery/featured - No description provided.

**Credential required**: *No* */
  export function postGalleryFeatured(client: MisskeyClient, request: PostGalleryFeaturedRequest): Promise<PostGalleryFeaturedResponse>;
  /** gallery/popular - No description provided.

**Credential required**: *No* */
  export function postGalleryPopular(client: MisskeyClient): Promise<PostGalleryPopularResponse>;
  /** gallery/posts - No description provided.

**Credential required**: *No* */
  export function postGalleryPosts(client: MisskeyClient, request: PostGalleryPostsRequest): Promise<PostGalleryPostsResponse>;
  /** gallery/posts/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  export function postGalleryPostsCreate(client: MisskeyClient, request: PostGalleryPostsCreateRequest): Promise<PostGalleryPostsCreateResponse>;
  /** gallery/posts/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  export function postGalleryPostsDelete(client: MisskeyClient, request: PostGalleryPostsDeleteRequest): Promise<PostGalleryPostsDeleteResponse>;
  /** gallery/posts/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery-likes* */
  export function postGalleryPostsLike(client: MisskeyClient, request: PostGalleryPostsLikeRequest): Promise<PostGalleryPostsLikeResponse>;
  /** gallery/posts/show - No description provided.

**Credential required**: *No* */
  export function postGalleryPostsShow(client: MisskeyClient, request: PostGalleryPostsShowRequest): Promise<PostGalleryPostsShowResponse>;
  /** gallery/posts/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery-likes* */
  export function postGalleryPostsUnlike(client: MisskeyClient, request: PostGalleryPostsUnlikeRequest): Promise<PostGalleryPostsUnlikeResponse>;
  /** gallery/posts/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:gallery* */
  export function postGalleryPostsUpdate(client: MisskeyClient, request: PostGalleryPostsUpdateRequest): Promise<PostGalleryPostsUpdateResponse>;
}


export namespace Hashtags {
  /** hashtags/list - No description provided.

**Credential required**: *No* */
  export function postHashtagsList(client: MisskeyClient, request: PostHashtagsListRequest): Promise<PostHashtagsListResponse>;
  /** hashtags/search - No description provided.

**Credential required**: *No* */
  export function postHashtagsSearch(client: MisskeyClient, request: PostHashtagsSearchRequest): Promise<PostHashtagsSearchResponse>;
  /** hashtags/show - No description provided.

**Credential required**: *No* */
  export function postHashtagsShow(client: MisskeyClient, request: PostHashtagsShowRequest): Promise<PostHashtagsShowResponse>;
  /** hashtags/trend - No description provided.

**Credential required**: *No* */
  export function getHashtagsTrend(client: MisskeyClient): Promise<GetHashtagsTrendResponse>;
  /** hashtags/trend - No description provided.

**Credential required**: *No* */
  export function postHashtagsTrend(client: MisskeyClient): Promise<PostHashtagsTrendResponse>;
  /** hashtags/users - No description provided.

**Credential required**: *No* */
  export function postHashtagsUsers(client: MisskeyClient, request: PostHashtagsUsersRequest): Promise<PostHashtagsUsersResponse>;
}


export namespace Reactions {
  /** notes/reactions/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:reactions* */
  export function postNotesReactionsCreate(client: MisskeyClient, request: PostNotesReactionsCreateRequest): Promise<PostNotesReactionsCreateResponse>;
  /** notes/reactions/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:reactions* */
  export function postNotesReactionsDelete(client: MisskeyClient, request: PostNotesReactionsDeleteRequest): Promise<PostNotesReactionsDeleteResponse>;
}


export namespace Notifications {
  /** notifications/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  export function postNotificationsCreate(client: MisskeyClient, request: PostNotificationsCreateRequest): Promise<PostNotificationsCreateResponse>;
  /** notifications/flush - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  export function postNotificationsFlush(client: MisskeyClient): Promise<PostNotificationsFlushResponse>;
  /** notifications/mark-all-as-read - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  export function postNotificationsMarkAllAsRead(client: MisskeyClient): Promise<PostNotificationsMarkAllAsReadResponse>;
  /** notifications/test-notification - No description provided.

**Credential required**: *Yes* / **Permission**: *write:notifications* */
  export function postNotificationsTestNotification(client: MisskeyClient): Promise<PostNotificationsTestNotificationResponse>;
}


export namespace Pages {
  /** pages/create - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  export function postPagesCreate(client: MisskeyClient, request: PostPagesCreateRequest): Promise<PostPagesCreateResponse>;
  /** pages/delete - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  export function postPagesDelete(client: MisskeyClient, request: PostPagesDeleteRequest): Promise<PostPagesDeleteResponse>;
  /** pages/featured - No description provided.

**Credential required**: *No* */
  export function postPagesFeatured(client: MisskeyClient): Promise<PostPagesFeaturedResponse>;
  /** pages/like - No description provided.

**Credential required**: *Yes* / **Permission**: *write:page-likes* */
  export function postPagesLike(client: MisskeyClient, request: PostPagesLikeRequest): Promise<PostPagesLikeResponse>;
  /** pages/show - No description provided.

**Credential required**: *No* */
  export function postPagesShow(client: MisskeyClient, request: PostPagesShowRequest): Promise<PostPagesShowResponse>;
  /** pages/unlike - No description provided.

**Credential required**: *Yes* / **Permission**: *write:page-likes* */
  export function postPagesUnlike(client: MisskeyClient, request: PostPagesUnlikeRequest): Promise<PostPagesUnlikeResponse>;
  /** pages/update - No description provided.

**Credential required**: *Yes* / **Permission**: *write:pages* */
  export function postPagesUpdate(client: MisskeyClient, request: PostPagesUpdateRequest): Promise<PostPagesUpdateResponse>;
}


export namespace ResetPassword {
  /** request-reset-password - Request a users password to be reset.

**Credential required**: *No* */
  export function postRequestResetPassword(client: MisskeyClient, request: PostRequestResetPasswordRequest): Promise<PostRequestResetPasswordResponse>;
  /** reset-password - Complete the password reset that was previously requested.

**Credential required**: *No* */
  export function postResetPassword(client: MisskeyClient, request: PostResetPasswordRequest): Promise<PostResetPasswordResponse>;
}


export namespace NonProductive {
  /** reset-db - Only available when running with <code>NODE_ENV=testing</code>. Reset the database and flush Redis.

**Credential required**: *No* */
  export function postResetDb(client: MisskeyClient): Promise<PostResetDbResponse>;
  /** test - Endpoint for testing input validation.

**Credential required**: *No* */
  export function postTest(client: MisskeyClient, request: PostTestRequest): Promise<PostTestResponse>;
}


export namespace Role {
  /** roles/list - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postRolesList(client: MisskeyClient): Promise<PostRolesListResponse>;
  /** roles/notes - No description provided.

**Credential required**: *Yes* / **Permission**: *read:account* */
  export function postRolesNotes(client: MisskeyClient, request: PostRolesNotesRequest): Promise<PostRolesNotesResponse>;
  /** roles/show - No description provided.

**Credential required**: *No* */
  export function postRolesShow(client: MisskeyClient, request: PostRolesShowRequest): Promise<PostRolesShowResponse>;
  /** roles/users - No description provided.

**Credential required**: *No* */
  export function postRolesUsers(client: MisskeyClient, request: PostRolesUsersRequest): Promise<PostRolesUsersResponse>;
}


export namespace Lists {
  /** users/lists/create - Create a new list of users.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsCreate(client: MisskeyClient, request: PostUsersListsCreateRequest): Promise<PostUsersListsCreateResponse>;
  /** users/lists/delete - Delete an existing list of users.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsDelete(client: MisskeyClient, request: PostUsersListsDeleteRequest): Promise<PostUsersListsDeleteResponse>;
  /** users/lists/get-memberships - No description provided.

**Credential required**: *No* / **Permission**: *read:account* */
  export function postUsersListsGetMemberships(client: MisskeyClient, request: PostUsersListsGetMembershipsRequest): Promise<PostUsersListsGetMembershipsResponse>;
  /** users/lists/list - Show all lists that the authenticated user has created.

**Credential required**: *No* / **Permission**: *read:account* */
  export function postUsersListsList(client: MisskeyClient, request: PostUsersListsListRequest): Promise<PostUsersListsListResponse>;
  /** users/lists/pull - Remove a user from a list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsPull(client: MisskeyClient, request: PostUsersListsPullRequest): Promise<PostUsersListsPullResponse>;
  /** users/lists/push - Add a user to an existing list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsPush(client: MisskeyClient, request: PostUsersListsPushRequest): Promise<PostUsersListsPushResponse>;
  /** users/lists/show - Show the properties of a list.

**Credential required**: *No* / **Permission**: *read:account* */
  export function postUsersListsShow(client: MisskeyClient, request: PostUsersListsShowRequest): Promise<PostUsersListsShowResponse>;
  /** users/lists/update - Update the properties of a list.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsUpdate(client: MisskeyClient, request: PostUsersListsUpdateRequest): Promise<PostUsersListsUpdateResponse>;
  /** users/lists/update-membership - No description provided.

**Credential required**: *Yes* / **Permission**: *write:account* */
  export function postUsersListsUpdateMembership(client: MisskeyClient, request: PostUsersListsUpdateMembershipRequest): Promise<PostUsersListsUpdateMembershipResponse>;
}