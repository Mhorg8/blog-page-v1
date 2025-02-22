import React from 'react';
import WriterProfileHeader from "@/components/writer/WriterProfileHeader";
import HeaderTitle from "@/components/HeaderTitle";
import BlogItem from "@/components/blogs/BlogItem";


const WriteAboutPage = () => {
    return (
        <div className="container">
            <WriterProfileHeader/>

            <div className="w-full h-full flex flex-col items-center justify-center">
                <HeaderTitle customStyle="text-start w-full mt-10" text="All Posts"/>

                <div className="flex flex-col mt-4 items-start w-full">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
                <button className="text-sm mt-10">Load more</button>
            </div>
        </div>
    );
};

export default WriteAboutPage;