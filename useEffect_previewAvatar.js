function Content() {
    const [avatar, setAvatar] = useState();

    // khi sử dụng URL sẽ tốn bộ nhớ xóa trước khi thay đổi lại ảnh khác
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setAvatar(file)
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
        
            <img src={avatar.preview} width="80%"/>
        </div>
    )
}

export default Content