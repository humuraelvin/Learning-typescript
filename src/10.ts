function getUserinfo(userId?:number) {
    if (typeof userId == "number") {
        return "User Id is a number"
    }else{
        return "User id is not defined"
    }
}
