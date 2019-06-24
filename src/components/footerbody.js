import React from 'react';
import styled from "styled-components";

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
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    &.last {
        align-items: flex-end;
    }
`;

const StyledFooterLinks = styled.div`
    display: flex;
    
`;

const CreativeCommonsBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterImage = styled.img`
    margin: 20px 0;
    width: 150px;
`;

const FooterNotes = styled.div`
    font-size: 12px;
    color: ${props => props.theme.white};

    & p {
        margin: 0;
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

    return (
        <StyledFooterLinks>
            {links.map((link, i) => <FooterLink key={link} className={i === links.length - 1 ? "last" : null}>{link}</FooterLink>)}
        </StyledFooterLinks>
    )
};

const CreativeCommons = () => (
    <CreativeCommonsBody>
        <FooterImage src={require("../images/logos/creative-commons.png")} />
    </CreativeCommonsBody>
);

export default FooterBody;
