import React from 'react'
import groupAvatar from "../../assets/women.png";
import styled from 'styled-components';
import avatarr from "../../assets/avatar.jpeg";
import Icon from "../LoaderPage/Icon";
import media from "../../assets/placeholder.jpeg";

const groups = [
    {
        name: "Donia",
        avatar: groupAvatar,
        members: "Amal Marwa Sirine Sarra"
    },
    {
        name: "group2",
        avatar: groupAvatar,
        members: "Amal Marwa Sirine Sarra"
    },
    {
        name: "group4",
        avatar: groupAvatar,
        members: "Amal Marwa Sirine Sarra"
    },
    {
        name: "SArra",
        avatar: groupAvatar,
        members: "Amal Marwa Sirine Sarra"
    },
];


const Profile = () => {
    return (
        <ProfileComponent>
            <ProfileSection>
                <div className="profile-component-avatar">
                    <img src={avatarr} alt="avatar" className="avatar" />
                </div>
                <h2 className="profile-name">
                    Donia
                </h2>
            </ProfileSection>
            <ProfileMedia>
                <ProfileMediaHeading>
                    <WrapperProfile>
                        <h2 className="profile-media-heading">Media, Links and Documents</h2>
                        <button >
                            <Icon id="rightArrow" className="profile__heading-icon" />
                        </button>
                    </WrapperProfile>
                    <ProfileMediaSection>
                        <img src={media} alt="media" className="profile-media" />
                        <img src={media} alt="media" className="profile-media" />
                        <img src={media} alt="media" className="profile-media" />
                    </ProfileMediaSection>

                </ProfileMediaHeading>
            </ProfileMedia>
            <ProfileActions>
                <div className="mute-notifications">
                    <div className="mute-notification-left">
                        <p className="mute-notification-title">
                            Mute Notifications
                        </p>
                    </div>
                    <div className="mute-notification-right">
                        <label htmlFor="checkbox" className="checkbox__label">
                            <Icon id="check" className="checkbox__icon" />
                        </label>
                    </div>
                </div>
                <div className="mute-notifications">
                    <div className="mute-notification-left">
                        <p className="mute-notification-title">
                            Starred Messages
                        </p>
                    </div>
                    <div className="mute-notification-right">
                    </div>
                </div>
                <div className="mute-notifications">
                    <div className="mute-notification-left">
                        <p className="mute-notification-title">
                            Disappearing Messages
                        </p>
                    </div>
                    <div className="mute-notification-right">

                    </div>
                </div>
            </ProfileActions>
            <AboutAndPhoneNumber>
                <div className="profile__heading-wrapper">
                    <h2 className="about-number "> About and phone number </h2>
                </div>
                <ul>
                    <li className="profile__about-item">
                        Out here saving the world, one block of code at a time.
                    </li>
                    <li className="profile__about-item">+23423456789</li>
                </ul>
            </AboutAndPhoneNumber>
            <CommonGroups>
                <div className="profile__heading-wrapper">
                    <h2 className="common-groups-heading">
                        <span> Groups in common </span> <span> 3</span>
                    </h2>
                </div>
                {
                    groups.map((group) => (
                        <div key={group.name} className="group-wrapper">
                            <div className="avatar-group">
                                <img src={group.avatar} alt="group-avatar" className="group-avatar" />
                            </div>
                            <div className="group-content">
                                <p className="group-name">
                                    {group.name}
                                </p>
                                <p className="group-members">
                                    {group.members}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </CommonGroups>

            <div className="profile-danger">
                <Icon id="block" className="danger-icon" />
                <p className="profile__danger-text"> Block </p>
            </div>

            <div className="profile-danger">
                <Icon id="thumbsDown" className="danger-icon" />
                <p className="profile__danger-text"> Report contact </p>
            </div>

            <div className="profile-danger">
                <Icon id="delete" className="danger-icon" />
                <p className="profile__danger-text"> Delete chat </p>
            </div>
        </ProfileComponent>
    )
}

export const ProfileComponent = styled.div`
    background: #0D151A;
    padding-bottom: 2pc;
 
  
`
export const ProfileSection = styled.div`
    margin-bottom: 10px;
    background: rgb(19, 28, 33);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
`

export const ProfileMedia = styled.div`
    margin-bottom: 10px;
    background: rgb(19, 28, 33);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;
    padding: 10px 20px;
`

export const ProfileMediaHeading = styled.div`
    margin-top: 5px;
    margin-bottom: 10px;
`

export const ProfileMediaSection = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`

export const WrapperProfile = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom:20px;
`

export const ProfileActions = styled.div`
    margin-bottom: 10px;
    background: rgb(19, 28, 33);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;
`

export const AboutAndPhoneNumber = styled.div`
    margin-bottom: 10px;
    background: rgb(19, 28, 33);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;
`

export const CommonGroups = styled.div`
    margin-bottom: 10px;
    background: rgb(19, 28, 33);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px 0px;`


export default Profile