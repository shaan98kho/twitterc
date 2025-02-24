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

export const fetchCurrentUserFromApi = async () => {
    const res = await fetch("http://localhost:3000/currentUser")
    if(!res.ok) {
        throw new Error("Failed to fetch tweets")
    }
    const data = await res.json()
    
    return data.currentUser
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

export const postTweetToApi = async ({tweetText, cuid}) => {
    const today = new Date()

    const formattedDate = new Intl.DateTimeFormat('en', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(today)

    const res = await fetch("http://localhost:3000/tweets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            likes: 0,
            retweets: 0,
            tweetText: tweetText,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            timeStamp: formattedDate,
            uuid: cuid,
            tid: 1
        })
    })
}