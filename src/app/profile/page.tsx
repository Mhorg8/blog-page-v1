import React from 'react';
import {LuPencil} from "react-icons/lu";
import CustomTooltip from "@/components/CustomTooltip";
import Image from "next/image";
import NotificationMessage from "@/components/NotificationMessage";

const ProfilePage = () => {
    return (
        <div className="container h-full mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 justify-between">
                {/* user profile image and name*/}
                <div className="w-1/2 border-b md:border-none pb-5 md:pb-0">
                    <div className="">
                        <div className="w-[120px] h-[120px] bg-zinc-200 rounded-full  relative shadow-md ">
                            <div className="absolute top-0 right-0">
                                <CustomTooltip contentText="edit image" Icon={<LuPencil/>}/>
                            </div>
                            <Image src='/placeholder.png' width={120} height={120} alt=''
                                   className="object-bottom object-cover rounded-full"/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-semibold text-lg">Mohammad hosein</h2>
                        <p>age : 23</p>
                        <p className="max-w-[300px] text-sm text-darkGray mt-2">Hello I&apos;m mohamamd, I&apos;m
                            Front-end developer and i work in &quot;sarvehana&quot;. Sarvehana
                            is a company works on Game development and generate SAAS. </p>
                    </div>
                </div>

                {/* user profile info section */}
                <div className="w-1/2 h-full">
                    <div className="w-100 h-full space-y-5 border-b pb-5">
                        <div className="flex flex-wrap gap-3 items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text0-m md:text-base">First name</h4>
                                <p className="text-sm text-darkGray">Mohamamd hosein</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text0-m md:text-base">Last name</h4>
                                <p className="text-sm text-darkGray">Alirezaie</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text0-m md:text-base">Birthday</h4>
                                <p className="text-sm text-darkGray">2002/12/16</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-sm md:text-base">Email</h4>
                                <p className="text-sm text-darkGray ">mohamamdalirezaie081...</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text0-m md:text-base">Phone</h4>
                                <p className="text-sm text-darkGray ">+98 923 22 989 76</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text0-m md:text-base">Location</h4>
                                <p className="text-sm text-darkGray">Tehran</p>
                            </div>
                        </div>
                    </div>
                    {/* Notifications*/}
                    <div className="mt-5 w-full ">
                        <h3 className="text-2xl font-medium">Notifications</h3>
                        <div className="mt-5 flex items-center w-full flex-wrap justify-between gap-3">
                            {/* Notification message*/}
                            <NotificationMessage/>
                            <NotificationMessage/>
                            <NotificationMessage/>
                            <NotificationMessage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;