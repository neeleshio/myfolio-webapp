let BASE_URL = "https://j2ysckzfn2.execute-api.us-east-1.amazonaws.com"

if (process.env.REACT_APP_ENV === "staging") {
    BASE_URL = "http://localhost:3000"
}

export { BASE_URL }