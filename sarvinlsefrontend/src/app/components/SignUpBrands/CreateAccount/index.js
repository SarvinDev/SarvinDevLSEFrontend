const CreateAccount = ({goToNext, setGoToNext, setEmail, setPassword, setUsername }) => {
  const handleSubmit = () => {
    setGoToNext(!goToNext)
  };
  return (
    <>
      <div className="h-full w-full px-8 sm:px-0 flex flex-col items-center justify-center ">
        <div>
          <h1 className="text-[32px] font-[500] text-center">Enter your details</h1>
          <h2 className="text-[20px] font-[300] text-center mt-3">More Discoverability, More Opportunities</h2>
        </div>
        <div className="h-full w-full max-w-[400px] mt-16">
          <form className="space-y-24" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="name@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Set your password (at least 8 characters)"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="fullname"
                  id="fullname"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="px-4 ">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-[4px] shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#fc8545] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Continue
              </button>
            </div>
          </form>
          <div className="mt-6 text-gray-300 flex justify-center">---------------- or ----------------</div>
          <div className="px-4 mt-6">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 border border-[#E2E8F0] rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
