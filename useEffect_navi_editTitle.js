import { useEffect, useState } from 'react'

// Event: Add / Remove event listener
// Observer pattern: Subscribe / Unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / Unmounted
// Toan tu "==="
// Call API

// Side effects

// Callback luôn được gọi sau khi component mounted
// 1. useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// (Trường hợp call API thì không nên sài vì khi set lại 1 useState sẽ re-render --> callback được gọi liên tục làm lặp vô hạn)
// 2. useEffect(callback, [])
// Chỉ gọi Callback 1 lần sau khi compoment mount (ko liên quan đến việc render)
// Ví dụ: call API, …
// 3. useEffect(callback, [deps])
// Callback được gọi lại mỗi khi deps thay đổi


const tabs = ["posts", "comments", "albums"]

function Content() {
    const [title, setTitle] = useState('');
    const [posts,setPosts] = useState([]);
    const [type, setType] = useState('posts');

    // callback được thực hiện sau khi return thực hiện
    // ưu tiên UI trước rồi tới effect xử lý sau

    //TH1: useEffect(callback)
    useEffect(() => {
        // console.log('Mounted')
        document.title = title;
    })

    //TH2: useEffect(callback, [])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => {
    //             setPosts(posts);
    //         });
    // }, []);
    
    //TH2: useEffect(callback, [deps])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    }, [type]);

    return (
        <div>

            {tabs.map((tab, index) => (
                <button
                    key={index}
                    style={type === tab ? { 
                            color: "#fff", 
                            backgroundColor: "#333"
                        } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            {/* {console.log('Render')} */}
            <ul>
                {posts.map(post => (
                   <li key={post.id}>{post.title || post.name}</li> 
                ))}
            </ul>
        </div>
    )
}

export default Content