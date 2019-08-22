import React, { useState } from 'react';
import styled from "styled-components";
import { device } from "../lib/device";
import { Modal } from 'antd';

const FooterLink = styled.button`
    background: transparent;
    color: ${props => props.theme.white};
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    border: none;
    border-right: solid 1px ${props => props.theme.white};
    padding: 2px 10px;
    cursor: pointer;

    &.last {
        border: none;
    }

    @media ${device.mobileM} {
        font-size: 16px;
    }
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    &.last {
        align-items: flex-end;
    }

    @media ${device.mobileM} {
        width: 100%;

        &.last {
            align-items: flex-start;
        }
    }
`;

const StyledFooterLinks = styled.button`
    display: flex;
    background: none;
    border: none;
    
`;

const CreativeCommonsBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterImage = styled.img`
    margin: 20px 0;
    width: 150px;

    @media ${device.mobileM} {
        width: 170px;
    }
`;

const FooterNotes = styled.div`
    font-size: 12px;
    color: ${props => props.theme.white};

    & p {
        margin: 0;
    }

    @media ${device.mobileM} {
        font-size: 16px;

        & p {
            font-size: 16px;
        }
    }
`;

const FooterBody = () => {
    return (
        <>
            <FooterSection>
                <FooterLinks />
                <CreativeCommons />
                <FooterNotes>
                    <p>This work is licenced under a Creative Commons Attribution 4.0 International Licence</p>
                    <p>For more information view the  HPA copyright statement</p>
                </FooterNotes>
            </FooterSection>
            <FooterSection className="last">
                <FooterImage src={require("../images/logos/hpa.svg")}/>
                <FooterImage src={require("../images/logos/nz-govt.svg")}/>
            </FooterSection>
        </>
    )
};

const FooterLinks = () => {
    const links = ["Contact", "Privacy", "Terms of use"];

    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    const handleModalClick = name => {
        if(name === "Contact") {
            setIsContactOpen(!isContactOpen);
        } else if(name === "Privacy") {
            setIsPrivacyOpen(!isPrivacyOpen);
        } else {
            setIsTermsOpen(!isTermsOpen);
        }
    }

    return (
        <StyledFooterLinks>
            {links.map((link, i) => (
            <>
                <FooterLink
                key={link}
                className={i === links.length - 1 ? "last" : null}
                onClick={() => handleModalClick(links)}
                >
                    {link}
                </FooterLink>
                <Modal
                 visible={link === "Contact" ?
                  isContactOpen :
                  link === "Privacy" ? 
                  isPrivacyOpen : 
                  isTermsOpen}
                 title={link}
                 onCancel={() => handleModalClick(link)}
                >
                    <p>Footer content</p>
                </Modal>
            </>     
            ))}
        </StyledFooterLinks>
    )
};

const CreativeCommons = () => (
    <CreativeCommonsBody>
        <FooterImage src={require("../images/logos/creative-commons.png")} />
    </CreativeCommonsBody>
);

export default FooterBody;
