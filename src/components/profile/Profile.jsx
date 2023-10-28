import { ProfileContainer, Description, ProfileImg, ProfileText, AccentName, StatsList, StatsItem, StatsLabel, StatsQuantity  } from "./profile.styled";


export const Profile = ({ username, tag, location, avatar, stats}) =>{
    return (
      
<ProfileContainer>
  <Description >
    <ProfileImg
      src={avatar}
      alt="User avatar"
      className="avatar"
      width="80" height="80"
    />
    <AccentName className="name">{username}</AccentName>
    <ProfileText className="tag">@{tag}</ProfileText>
    <ProfileText className="location">{location}</ProfileText>
  </Description>

  <StatsList className="stats">
    <StatsItem>
      <StatsLabel className="label">Followers</StatsLabel>
      <StatsQuantity className="quantity">{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel className="label">Views</StatsLabel>
      <StatsQuantity className="quantity">{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel className="label">Likes</StatsLabel>
      <StatsQuantity className="quantity">{stats.likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
</ProfileContainer>
    );
};

