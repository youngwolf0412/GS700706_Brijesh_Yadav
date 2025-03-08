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
      <div className="text-gray-600 font-medium cursor-pointer hover:text-gray-800">
        Signup/Signin
      </div>
    </div>
  );
};
