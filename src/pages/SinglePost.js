import React, { useState } from 'react'
import Edit from "../img/edit.svg";
import Delete from "../img/delete.svg";
import Menu from "../components/menu";
const SinglePost = () => {
    const [post] = useState({});
    return (
        <div className="single">
            <div className="content">
                {/* <img src={`../upload/${post?.img}`} alt="" /> */}
                <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    {post.userImg && <img
                        src={post.userImg}
                        alt=""
                    />}
                    <div className="info">
                        <span>{post.username}</span>
                        {/* <p>Posted {moment(post.date).fromNow()}</p> */}
                    </div>

                    <div className="edit">

                        <img src={Edit} alt="" />

                        <img src={Delete} alt="" />
                    </div>

                    {/* {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={Edit} alt="" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    )} */}
                </div>
                <h1>{post.title}</h1>
                {/* <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.desc),
                    }}
                ></p>     */}
            </div>
            <Menu cat={post.cat} />
        </div>
    )
}

export default SinglePost