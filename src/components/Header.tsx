import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-[70px] px-5 bg-white shadow-sm">
      <div className="flex items-center">
        <img
          src="/Gsynergy Logo V2 Long Description.svg"
          alt="Gsynergy Logo"
          className="h-12"
        />
      </div>
      <h1 className="text-3xl font-semibold text-gray-700">Data Viewer App</h1>

      <div className="flex gap-4 items-center">
        <SignedIn>
          {/* This content will only be shown to signed-in users */}
          <UserButton />
        </SignedIn>

        <SignedOut>
          {/* This content will only be shown to signed-out users */}
          <div className="flex gap-3">
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};
