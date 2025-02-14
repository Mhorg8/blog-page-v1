import {Button} from "@/components/ui/button";
import {IoArrowUndoOutline} from "react-icons/io5";
import CreateNewBlogForm from "@/components/CreateNewBlogForm";

const NewBlogPage = () => {

    return (
        <div className="container relative h-full md:min-h-[calc(100vh-100px)]">
            <Button
                className="undo-button w-10 h-10 rounded-full absolute right-0 top-0"
                size="icon">
                <IoArrowUndoOutline/>
            </Button>

            {/*  create new blog form  */}

            <div className="py-12">
                <h1 className="text-2xl md:text-3xl font-semibold ">Start sharing your Notes</h1>

                <div className="mt-5">
                    <CreateNewBlogForm/>

                    <div className="flex items-center justify-around w-full md:w-1/2 mt-7 gap-3">
                        <div
                            className="info-box">
                            <p>Total Blog </p>
                            <span className="font-semibold">+100</span>
                        </div>
                        <div
                            className="info-box">
                            <p>Total User </p>
                            <span className="font-semibold">+222</span>
                        </div>
                        <div
                            className="info-box">
                            <p>Total Writer </p>
                            <span className="font-semibold">+100</span>
                        </div>
                        <div
                            className="info-box">
                            <p>Total Seem</p>
                            <span className="font-semibold">+1M</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBlogPage;