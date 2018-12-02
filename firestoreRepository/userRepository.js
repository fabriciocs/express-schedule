//https://firebase.google.com/docs/auth/admin/manage-users

function verifyUser(user) {
    if (!user) {
        throw Error("User cannot be null");
    }
    if (!user.email) {
        throw Error("Email Required");
    }

    if (!user.password) {
        throw Error("Password cannot be null");
    }
}
function create (user) {
    verifyUser(user);
    return admin.auth().createUser(user);
}

function update (uid, user) {
    verifyUser(user);
    return admin.auth().updateUser(uid, user);

}

function remove(uid){
    return admin.auth().deleteUser(uid);
}

function getAll(nextPageToken) {
    // List batch of users, 1000 at a time.
    return admin.auth().listUsers(1000, nextPageToken);
  }