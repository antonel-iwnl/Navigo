import { atom } from 'nanostores';
import { type User, type UserResponse } from '@type/user/types';
import { checkIsTypeUser } from '@type/user/typecheckers';

const generateUserBoilerplate = (): User => ({
  userId: '',
  profilePictureUrl:
    'https://media.istockphoto.com/id/470100848/ro/vector/pictograma-profilului-masculin-alb%C4%83-pe-fundal-albastru.jpg?s=612x612&w=0&k=20&c=-We-8zY-Oj7MMSuKwpOEkm7QUX8Gnc4Bk0KcBIO8lYY=',
  name: '',
  followerCount: 0,
  followingCount: 0,
  quote: '',
  websiteUrl: '',
  bio: '',
  roadmapsCount: 0,
  isFollowing: false,
});

const storeLoggedUser = atom(generateUserBoilerplate() as User);

const parseResponse = (response: UserResponse): User => {
  if (!checkIsTypeUser(response)) {
    throw new Error('Response is not of type User');
  }
  // parses some of the response properties-page to the correct type
  const parsedResponse: User = { ...response };
  parsedResponse.followerCount = parseInt(response.followerCount, 10);
  parsedResponse.followingCount = parseInt(response.followingCount, 10);
  parsedResponse.roadmapsCount = parseInt(response.roadmapsCount, 10);
  return parsedResponse;
};

export const setProfilePictureUrl = (profilePictureUrl: string) => {
  const originalUser = storeLoggedUser.get();
  const newProfilePictureUrl =
    profilePictureUrl !== ''
      ? profilePictureUrl
      : originalUser.profilePictureUrl;
  storeLoggedUser.set({ ...originalUser, profilePictureUrl });
};

export const setProfileMini = (
  profilePictureUrl: string,
  userId: string,
  name: string
) => {
  const originalUser = storeLoggedUser.get();
  const newProfilePictureUrl =
    profilePictureUrl !== '' && profilePictureUrl
      ? profilePictureUrl
      : originalUser.profilePictureUrl;
  storeLoggedUser.set({
    ...originalUser,
    profilePictureUrl: newProfilePictureUrl,
    userId,
    name,
  });
};

export function getLoggedUserId(): string {
  return storeLoggedUser.get().userId;
}

export function getProfileMini(): User {
  return storeLoggedUser.get();
}

export default storeLoggedUser;
