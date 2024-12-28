export const fetchTweetsFromApi = async () => {
    const res = await fetch("http://localhost:3000/tweets")
    if(!res.ok) {
        throw new Error("Failed to fetch tweets")
    }
    const data = await res.json()

    return data.tweets
}

export const fetchUsersFromApi = async () => {
    const res = await fetch("http://localhost:3000/tweets")
    if(!res.ok) {
        throw new Error("Failed to fetch tweets")
    }
    const data = await res.json()

    return data.users
}