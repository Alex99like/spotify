import { Song } from "@/types";

import { usePlayer } from "./use-player";
import { useAuthModal } from "./use-auth-modal";
import { useUser } from "./use-user";

export const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
//   const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    // if (!subscription) {
    //   return subscribeModal.onOpen();
    // }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
};
