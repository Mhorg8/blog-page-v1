import {LuChartSpline, LuClipboardCheck, LuUsers} from "react-icons/lu";
import {RiUserFollowLine} from "react-icons/ri";
import {TbLogout2} from "react-icons/tb";

const SettingPage = () => {
    return (
        <section className="container">
            <div className="flex items-center justify-between gap-5 w-full h-full md:h-[calc(100dvh-75px)]">
                {/*    sidebar*/}
                <aside
                    className="bg-zinc-200 w-[300px] h-full rounded-xl shadow-md flex flex-col items-center justify-between">
                    <ul className="flex flex-col items-center justify-center gap-4 w-full">
                        <li className="flex items-center justify-center gap-2 hover:bg-zinc-300 py-3 first:rounded-t-xl cursor-pointer hover:text-white hoverEffect w-full">
                            <LuChartSpline/>
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center justify-center gap-2 hover:bg-zinc-300 py-3 first:rounded-t-xl cursor-pointer hover:text-white hoverEffect w-full">
                            <LuUsers/>
                            <span>Followers</span>
                        </li>
                        <li className="flex items-center justify-center gap-2 hover:bg-zinc-300 py-3 first:rounded-t-xl cursor-pointer hover:text-white hoverEffect w-full">
                            <RiUserFollowLine/>
                            <span>Followings</span>
                        </li>
                        <li className="flex items-center justify-center gap-2 hover:bg-zinc-300 py-3 first:rounded-t-xl cursor-pointer hover:text-white hoverEffect w-full ">
                            <LuClipboardCheck/>
                            <span>Blogs</span>
                        </li>
                    </ul>

                    <button className="pb-5 flex items-center gap-2">
                        <TbLogout2/>
                        Logout
                    </button>
                </aside>
                {/* main content*/}
                <div className="flex-1 h-full bg-zinc-100/80 rounded-xl shadow-md"></div>
            </div>
        </section>
    );
};

export default SettingPage;