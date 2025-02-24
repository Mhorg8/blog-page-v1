import React from 'react';
import {LuPencil} from "react-icons/lu";
import CustomTooltip from "@/components/CustomTooltip";
import Image from "next/image";

const ProfilePage = () => {
    return (
        <div className="container h-full mt-10">
            <div className="flex items-start justify-between">
                <div className="w-1/2">
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
                <div className="w-1/2 h-full space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h4 className="font-semibold ">First name</h4>
                            <p className="text-sm text-darkGray">Mohamamd hosein</p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold ">Last name</h4>
                            <p className="text-sm text-darkGray">Alirezaie</p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold ">Birthday</h4>
                            <p className="text-sm text-darkGray">2002/12/16</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h4 className="font-semibold">Email</h4>
                            <p className="text-sm text-darkGray ">mohamamdalirezaie081...</p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold ">Phone number</h4>
                            <p className="text-sm text-darkGray">+98 923 22 989 76</p>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold ">Location</h4>
                            <p className="text-sm text-darkGray">Tehran</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;