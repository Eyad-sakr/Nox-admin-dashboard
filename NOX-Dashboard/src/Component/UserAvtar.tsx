type UserAvatarProp = {
  username: string;
  role: string;
};

function UserAvatar({ username, role }: UserAvatarProp) {
  const initials = (username[0] + username.split(" ")[1]?.[0] || "").toUpperCase();

  return (
    <div className="user-avatar">
      {/* Avatar Circle */}
      <div className="avatar-circle">
        {initials}
      </div>

      {/* User Info */}
      <div className="user-info">
        <h4 >{username}</h4>
        <p >{role}</p>
      </div>
    </div>
  );
}

export default UserAvatar;