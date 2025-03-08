function getAccessPrivileges(user) {
    return user.role === "admin"
      ? user.active
        ? user.experience > 5
          ? `Full ${user.department} Admin Access`
          : "Limited Admin Access"
        : "Admin Access Revoked"
      : user.role === "manager"
      ? user.active
        ? user.experience > 3
          ? "Full Manager Access"
          : "Limited Manager Access"
        : "Manager Access Revoked"
      : user.role === "user"
      ? user.active
        ? user.department === "Support"
          ? "Priority Support Access"
          : "User Access"
        : "User Access Revoked"
      : "Invalid Role"
  }
  
  let people = {
    person1: { role: "admin", experience: 7, active: true, department: "IT" },
    person2: { role: "manager", experience: 4, active: true, department: "Marketing" },
    person3: { role: "user", experience: 2, active: true, department: "Support" },
    person4: { role: "admin", experience: 3, active: false, department: "Finance" }
  };
  
  console.log(getAccessPrivileges(people.person1))
  console.log(getAccessPrivileges(people.person2))
  console.log(getAccessPrivileges(people.person3))
  console.log(getAccessPrivileges(people.person4))
 