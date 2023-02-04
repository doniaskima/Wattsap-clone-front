import React from 'react'
import groupAvatar from "../../assets/women.png";
import styled from 'styled-components';
import avatarr from "../../assets/avatar.jpeg";
import Icon from "../LoaderPage/Icon"

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
                    <h2 className="profile-media-heading">Media, Links and Documents</h2>
                    <button >
                        <Icon id="rightArrow" className="profile__heading-icon" />
                    </button>
                </ProfileMediaHeading>
            </ProfileMedia>
        </ProfileComponent>
    )
}

export const ProfileComponent = styled.div`
  background: #0D151A;
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

export default Profile