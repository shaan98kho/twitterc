export const fetchTweetsFromApi = async () => {
    const res = await fetch("http://localhost:3000/tweets")
    if(!res.ok) {
        throw new Error("Failed to fetch tweets")
    }
    const data = await res.json()

    return data.tweets
}

export const fetchUsersFromApi = async () => {
    const res = await fetch("http://localhost:3000/users")
    if(!res.ok) {
        throw new Error("Failed to fetch tweets")
    }
    const data = await res.json()
    
    return data.users
}

export const updateLikesIntoApi = async ({ tweetId, updatedLikes, isLiked }) => {
    const res = await fetch(`http://localhost:3000/tweets/${tweetId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            likes: updatedLikes,
            isLiked: isLiked,
        }),
    });

    if(!res.ok) {
        throw new Error("Failed")
    }

    const data = await res.json();

    return data
}