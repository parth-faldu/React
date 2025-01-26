import { useEffect, useState } from "react"
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    let isEmpty = Object.keys(updateDataApi).length == 0;

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        });
    }, [updateDataApi]);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev, [name]: value,
            }
        });
    }

    const addPostData = async () => {
        const res = await postData(addData);

        if (res.status == 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
        }
    }

    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData);

            if(res.status == 200){
                setData((data) => {
                    return data.map((curElem) => {
                       return curElem.id == res.data.id ? res.data : curElem;
                });
            });

            setAddData({title:"",body:""});
            setUpdateDataApi({});
        }
    } catch (error) {
        console.log(error);
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    addPostData();
    if (action == "Add") addPostData();
    if (action == "Edit") updatePostData();
}

return <>
    <form action="" onSubmit={handleFormSubmit}>
        <div>
            <label htmlFor="title">
                <input type="text" autoComplete="off" id="title" name="title" placeholder="Add Title" value={addData.title} onChange={handleInputChange} />
            </label>
        </div>
        <div>
            <label htmlFor="body">
                <input type="text" autoComplete="off" placeholder="Add Post" id="body" name="body" value={addData.body} onChange={handleInputChange} />
            </label>
        </div>
        <button type="submit" value={isEmpty ? "Add" : "Edit"}>
            {isEmpty ? "Add" : "Edit"}
        </button>
    </form>
</>
}