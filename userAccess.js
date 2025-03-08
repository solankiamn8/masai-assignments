let users = {
    Alice: { role: "admin", active: false },
    Bob: { role: "user", active: true },
    Charlie: { role: "user", active: false },
    David: { role: "admin", active: true },
    Eve: { role: "guest", active: true }
  }

  function getAccessDetails(user){
    return user.role === "admin" ? user.active ? "Admin Access Granted" : "Admin Access Revoked"
        : user.role === "user" ? user.active ? "User Access Granted" : "User Access Revoked"
        : "Access Denied"
  }

  for(let name in users){
    console.log(`${name} - ${getAccessDetails(users[name])}`)
  }