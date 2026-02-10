// Misskey.ts - High-level TypeScript wrapper for Misskey API
import { MisskeyClient, Notes as NotesApi, Reactions as ReactionsApi, Antennas as AntennasApi } from './generated/misskey-io/wrapper/index';
import * as S from "sury"
S.enableJson();
// Re-export generated client for advanced usage
export { MisskeyClient };
export * from './generated/misskey-io/wrapper/index';

export type Visibility = 'public' | 'home' | 'followers' | 'specified';

export type TimelineType =
  | 'home'
  | 'local'
  | 'global'
  | 'hybrid'
  | { type: 'antenna'; antennaId: string }
  | { type: 'list'; listId: string }
  | { type: 'channel'; channelId: string };

/**
 * Main entry point for the Misskey API.
 * Provides a high-level, intuitive API similar to the ReScript bindings.
 */
export class Misskey {
  public client: MisskeyClient;
  public notes: NotesWrapper;
  public miAuth: MiAuthWrapper;

  constructor(origin: string, token?: string) {
    this.client = new MisskeyClient(origin, token);
    this.notes = new NotesWrapper(this.client);
    this.miAuth = new MiAuthWrapper(origin);
  }

  /**
   * Get the client origin (instance URL).
   */
  get origin(): string {
    return this.client.baseUrl;
  }

  static connect(origin: string, token?: string): Misskey {
    return new Misskey(origin, token);
  }
}

export default Misskey;

class NotesWrapper {
  constructor(private client: MisskeyClient) {}

  /**
   * Create a new note.
   */
  async create(
    text: string,
    options: {
      visibility?: Visibility;
      cw?: string;
      localOnly?: boolean;
      replyId?: string;
      renoteId?: string;
      files?: string[];
      poll?: any;
    } = {}
  ) {
    return NotesApi.postNotesCreate(this.client, {
      text,
      visibility: options.visibility ?? 'public',
      cw: options.cw ?? undefined,
      localOnly: options.localOnly ?? false,
      replyId: options.replyId ?? undefined,
      renoteId: options.renoteId ?? undefined,
      fileIds: options.files ?? undefined,
      poll: options.poll ?? undefined,
    });
  }

  /**
   * Delete a note.
   */
  async delete(noteId: string) {
    return NotesApi.postNotesDelete(this.client, { noteId });
  }

  /**
   * React to a note.
   */
  async react(noteId: string, reaction: string) {
    return ReactionsApi.postNotesReactionsCreate(this.client, { noteId, reaction });
  }

  /**
   * Unreact (delete reaction) from a note.
   */
  async unreact(noteId: string) {
    return ReactionsApi.postNotesReactionsDelete(this.client, { noteId });
  }

  /**
   * Fetch a timeline.
   */
  async timeline(
    type: TimelineType,
    options: {
      limit?: number;
      sinceId?: string;
      untilId?: string;
    } = {}
  ) {
    const limit = options.limit ?? 10;
    const sinceId = options.sinceId;
    const untilId = options.untilId;

    if (typeof type === 'string') {
      switch (type) {
        case 'home':
          return NotesApi.postNotesTimeline(this.client, { limit, sinceId, untilId });
        case 'local':
          return NotesApi.postNotesLocalTimeline(this.client, { limit, sinceId, untilId });
        case 'global':
          return NotesApi.postNotesGlobalTimeline(this.client, { limit, sinceId, untilId });
        case 'hybrid':
          return NotesApi.postNotesHybridTimeline(this.client, { limit, sinceId, untilId });
      }
    } else {
      switch (type.type) {
        case 'antenna':
          return AntennasApi.postAntennasNotes(this.client, { antennaId: type.antennaId, limit, sinceId, untilId });
        
        case 'list':
          return NotesApi.postNotesUserListTimeline(this.client, { listId: type.listId, limit, sinceId, untilId });
        
        case 'channel':
          return NotesApi.postChannelsTimeline(this.client, { channelId: type.channelId, limit, sinceId, untilId });
      }
    }
  }
}

class MiAuthWrapper {
  constructor(private origin: string) {}

  generateUrl(
    name: string,
    permissions: string[],
    options: {
      callback?: string;
      icon?: string;
    } = {}
  ) {
    const sessionId = this.generateSessionId();
    const permissionParam = permissions.join(',');
    const query = new URLSearchParams({
      name,
      permission: permissionParam,
    });
    
    if (options.callback) query.append('callback', options.callback);
    if (options.icon) query.append('icon', options.icon);

    return {
      sessionId,
      authUrl: `${this.origin}/miauth/${sessionId}?${query.toString()}`
    };
  }

  async check(sessionId: string) {
    const response = await fetch(`${this.origin}/api/miauth/${sessionId}/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    
    if (!response.ok) {
       throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    
    const json = await response.json();
    if (json.ok) {
      return { token: json.token as string, user: json.user };
    } else {
      return { token: null, user: null };
    }
  }

  private generateSessionId(): string {
    // Simple UUID-like generator for Node/Browser
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}