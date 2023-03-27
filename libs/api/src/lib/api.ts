export interface Reply {
  message: string;
}

export async function api(): Promise<Reply> {
  return {
    message: 'api'
  };
}
