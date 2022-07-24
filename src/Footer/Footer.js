import React from 'react';
import Image from "mui-image";

import Phone from '../img/phone.svg'
import Email from '../img/email.svg'
import Info from '../img/info.svg'
import Help from '../img/help.svg'

import {PHONE_NUM} from "../Configs/constant";
import {EMAIL} from "../Configs/constant";
import {FlexWrapper} from "../Configs/FlexTheme.styled";
import {Description, PaddingWrapper} from "../Configs/Global.styled";
import {FooterWrapper} from "./Footer.styled";

const Footer = () => {
    return (
        <FooterWrapper>
            <FlexWrapper justify='space-around'>
                <div className='Phone'>
                    <FlexWrapper align='center'>
                        <Image
                            src={Phone}
                            height={25}
                            width={25}
                            alt='Phone'
                        />
                        <Description padding='10px'>CALL US</Description>
                    </FlexWrapper>
                    <PaddingWrapper padding='10px'>
                        <a href={`tel:${PHONE_NUM}`}>
                            <p>{PHONE_NUM}</p>
                        </a>
                    </PaddingWrapper>
                </div>

                <div className='Email'>
                    <FlexWrapper align='center'>
                        <Image
                            src={Email}
                            height={25}
                            width={25}
                            alt='Email'
                        />
                        <Description padding='10px'>EMAIL US</Description>
                    </FlexWrapper>
                    <PaddingWrapper padding='10px'>
                        <a href={`mailto:${EMAIL}`}>
                            <p>{EMAIL}</p>
                        </a>
                    </PaddingWrapper>
                </div>
                <div className='About us'>
                    <FlexWrapper align='center'>
                        <Image
                            src={Info}
                            height={25}
                            width={25}
                            alt='Info'
                        />
                        <Description padding='10px'>ABOUT US</Description>
                    </FlexWrapper>
                    <PaddingWrapper padding='10px'>We create stickers for telegram and other socials.</PaddingWrapper>
                </div>
                <div className='Help center'>
                    <FlexWrapper align='center'>
                        <Image
                            src={Help}
                            height={25}
                            width={25}
                            alt='Help'
                        />
                        <Description padding='10px'>HELP CENTER</Description>
                    </FlexWrapper>
                    <PaddingWrapper padding='10px'>Find answers online anytime.</PaddingWrapper>
                </div>
            </FlexWrapper>
        </FooterWrapper>
    );
};

export default Footer;