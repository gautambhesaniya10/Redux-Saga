import React, { useEffect, useState } from 'react';




const getLocalStorage = () => {
    let getData = JSON.parse(localStorage.getItem('save'))
    if (getData) {
        return getData;
    } else {
        return [];
    }
}
const Todo = () => {

    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEdit, setIsEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(null);

    console.log("name", name);
    console.log("list", list);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setName(value)
    }

    useEffect(() => {
        localStorage.setItem('save', JSON.stringify(list));
    }, [list]);

    const addHandler = () => {
        if (name === "") {
            alert("Please Enter Text !")
        } else {
            const newItem = { id: Math.random(), title: name };
            setList([...list, newItem]);
            setName("");
        }
    }

    const deleteHandler = (itemID) => {
        let delData = list.filter(item => item.id !== itemID);
        setList(delData)
    }


    const editHandler = (editItem) => {
        list.map(item => {
            if (item.id === editItem.id) {
                setIsEdit(true)
                setName(item.title)
                setIdEdit(item.id)
            }
            return item;
        })
    }

    const updateHandler = () => {

        if (name === "") {
            alert("Please Enter Text...")
        }else{
            setList(
                list.map((item) => {
                    if (item.id === idEdit) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setName("");
            setIdEdit(null);
            setIsEdit(false);
        }
    }

    return (
        <>
            <div className='main-todo'>
                <div className='input-div'>
                    <input type='text' name='list' value={name} onChange={inputHandler} placeholder='Enter Your Teext...' />
                    {
                        isEdit ? <button onClick={() => updateHandler()}>Update</button> : <button onClick={addHandler}>ADD</button>
                    }

                </div>
                <div className='list'>
                    {
                        list && list.map((item) => {
                            return (
                                <div>
                                    <p>{item.title}</p>
                                    <button onClick={() => deleteHandler(item.id)}>Delete</button>
                                    <button onClick={() => editHandler(item)}>Edit</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Todo