import { useEffect, useState } from 'react'

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

function Content() {
    const [posts,setPosts] = useState([]);
    const [showToGoTop, setShowToGoTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    }, []);

    // VD scroll
    useEffect(() => {
        const handlerScroll = () => {
            (window.scrollY >= 200) ? 
                setShowToGoTop(true) : 
                setShowToGoTop(false);

            // setShowToGoTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handlerScroll);
        console.log("addEventListener");

        //cleanup function
        // ko có function sẽ xảy ra memory leak
        return () => {
            window.removeEventListener('scroll', handlerScroll);
            console.log("removeEventListener");
        }
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                   <li key={post.id}>{post.title || post.name}</li> 
                ))}
            </ul>
            {showToGoTop && (
                <button 
                    style={{ position: 'fixed', right: 20, bottom: 20 }}
                >
                    Go to Top
                </button>
            )}
        </div>
    )
}

export default Content