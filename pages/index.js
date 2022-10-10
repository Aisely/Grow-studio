export default function Home() {
  return (
    <>
      <form action="" id="login">
        <div className="max-w-[500px]">
          <div className="mb-6">
            {/* <h3 className="mb-2 text-2xl ">Login</h3> */}
          </div>
          <div className=" rounded-md border  border-[#436664] bg-[#3c5c5a] shadow">
            <div>
              <div className="grid grid-cols-12 gap-6 px-8 py-8  opacity-100  block undefined">
                <label className="text-scale-1200 col-span-12 text-2xl lg:col-span-5 ">Login</label>
                <div className="relative col-span-12 flex flex-col gap-6 lg:col-span-7">
                  {" "}
                  {/* wrapper for input boxes */}
                  <div className="grid gap-3 text-sm leading-4 md:grid md:grid-cols-12 md:gap-x-4">
                    <div className="col-span-12 flex flex-row justify-between space-x-2">
                      <div>
                        <label className="text-scale-1100 block break-all text-lg leading-4">
                          First name
                        </label>
                        <p className="opacity-70 mt-1 text-xs">Fill in your full name you used to register</p>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <input className="focus:border-  focus:ring-scale-400 border-scale-700 box-border block w-full rounded-md  border-2 border-[#436664] bg-[#3c5c5a] px-3 py-2 text-sm leading-4 shadow-sm  outline-none  transition-all focus:border-[#55817f] focus:shadow-md focus:ring-[#436664]" />
                    </div>
                  </div>
                  <div className="grid gap-3 text-sm leading-4 md:grid md:grid-cols-12 md:gap-x-4">
                    <div className="col-span-12 flex flex-row justify-between space-x-2">
                      <div>
                        <label className="text-scale-1100 block break-all text-lg leading-4">
                          OTP code
                        </label>
                        <p className="opacity-70 mt-1 text-xs">Fill in the code that was given to you after manual registration</p>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <input className="focus:border-  focus:ring-scale-400 border-scale-700 box-border block w-full rounded-md  border-2 border-[#436664] bg-[#3c5c5a] px-3 py-2 text-sm leading-4 shadow-sm  outline-none  transition-all focus:border-[#55817f] focus:shadow-md focus:ring-[#436664]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#436664]"></div>
              <div className="flex py-4 px-8">
                <div className="w-full flex justify-end">
                    <button className="text-[14px] bg-[#66cee9] opacity-90 hover:bg-[#6fe1fd] hover:opacity-100 px-5 py-2 rounded"><span class="truncate">Login</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
