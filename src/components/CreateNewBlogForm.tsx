import React from 'react';
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/blogs/CustomSelect";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input"

const categories = [
    'Personal Development', 'Fantasy', 'Romance', 'History', 'Philosophy', "Fantasy", 'Psychology'
]
const CreateNewBlogForm = () => {
    return (
        <form className="flex flex-col md:flex-row gap-4 justify-center relative">
            <div className="space-y-4 w-full md:w-1/2">
                <CustomInput label="Intro" name="intro" type="text"/>
                <CustomInput label="Title" name="title" type="text"/>

                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <label
                            className="text-zinc-800 capitalize text-sm font-semibold">Category</label>
                        <CustomSelect placeHolder="Select a category"
                                      className='max-w-[280px] md:max-w-[300px]'
                                      bgColor=" bg-zinc-100"
                                      values={categories}/>

                    </div>
                    <div className="flex-1">
                        <label className="text-zinc-800 capitalize text-sm font-semibold">Image</label>
                        <Input id="image" type="file"/>
                    </div>
                </div>
                <Button className="w-full py-5" variant="default">Create</Button>

            </div>
            <div className=" w-full md:w-1/2 sticky top-20 h-fit ">
                <label className="text-zinc-800 capitalize text-sm font-semibold">Description</label>
                <textarea cols={12} rows={3} placeholder="Anything you want you can write here"
                          className="bg-zinc-100 w-full h-full placeholder:text-sm  rounded-lg  shadow-sm focus:outline-green/60 px-2 py-1"/>

            </div>
        </form>
    );
};

export default CreateNewBlogForm;