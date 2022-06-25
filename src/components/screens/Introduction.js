import React, { useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow-down.svg'
import down from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import databiz from '../assets/images/client-databiz.svg'
import audiophile from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'
import right from '../assets/images/image-hero-desktop.png'
import close from '../assets/images/icon-close-menu.svg'
import open from '../assets/images/icon-menu.svg'
import mobile from '../assets/images/image-hero-mobile.png'

   


export default function Introduction() {
    const [ show1, setShow1 ] = useState(false)
    const [ show2, setShow2 ] = useState(false)
    const [ menu,setMenu ] = useState(false)

    const companies = [
        {
            id:1,
            image:databiz,
        },
        {
            id:2,
            image:audiophile,
        },
        {
            id:3,
            image:meet,
        },
        {
            id:4,
            image:maker,
        }
    ]
    const renderCompanies = () => {
        return (
            companies.map((company)=>(
                <Li key={company.id}>
                    <LiImg src={company.image} alt="image" />
                </Li>
            ))
        )
    }
    
  return (
    <>
        <Section>
            <HamburgerMenu onClick={()=>{setMenu(true)}} className={menu && "hide"}>
                <OpenSvg src={open} alt="" />
            </HamburgerMenu>
            <HeaderSection>
                <HeaderLeft>
                    <Logo>
                        <LogoImg src={logo} alt="snap"/>
                    </Logo>
                    <HeaderUl>
                        <HeaderLi>
                            <NavLink onClick= {() => {setShow1(!show1)}}>
                                <HeaderLiP className={show1 && 'show'}>Features</HeaderLiP> 
                                <ArrowSpan className={show1 ? "" : "show"}><ArrowSpanImg src={arrow} alt="Features"/></ArrowSpan>
                                <ArrowSpan className={show1 ? "show" : ""}><ArrowSpanImg src={down} alt="Features"/></ArrowSpan>
                            </NavLink>
                            <Display className={ show1 && "show" }>
                                <LiChild>
                                    <ChildFragment>
                                        <Icon src={todo}/>
                                        <Goto>Todo List</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={calender}/>
                                        <Goto>Calender</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={reminders}/>
                                        <Goto>Reminders</Goto>
                                    </ChildFragment>
                                    <ChildFragment>
                                        <Icon src={planning}/>
                                        <Goto>Planning</Goto>
                                    </ChildFragment>
                                </LiChild>
                            </Display>
                        </HeaderLi>
                        <HeaderLi>
                            <NavLink onClick={() => {setShow2(!show2)}}>
                                <HeaderLiP>Company</HeaderLiP>
                                <ArrowSpan className={show2 ? "" : "show"}><ArrowSpanImg src={arrow} alt="Comapanies"/></ArrowSpan>
                                <ArrowSpan className={show2 ? "show" : ""}><ArrowSpanImg src={down} alt="Features"/></ArrowSpan>
                            </NavLink>
                            <Display className={`company ${show2 && "show"}`}>
                                <LiChild>
                                    <ChildFragment><Goto>History</Goto></ChildFragment>
                                    <ChildFragment><Goto>Our Team</Goto></ChildFragment>
                                    <ChildFragment><Goto>Blog</Goto></ChildFragment>
                                </LiChild>
                            </Display>
                        </HeaderLi>
                        <HeaderLi className='other'><HeaderLiP>Careers</HeaderLiP></HeaderLi>
                        <HeaderLi className='other'><HeaderLiP>About</HeaderLiP></HeaderLi>
                    </HeaderUl>
                </HeaderLeft>
                <HeaderRight>
                    <Login>Login</Login>
                    <Register>Register</Register>
                </HeaderRight>
            </HeaderSection>
            
            <SpotlightWrapper>
                <SpotlightSection>
                    <Left>
                        <Heading1>Make</Heading1>
                        <Heading2>remote work</Heading2>

                        <Description>
                            Get your team in sync. no matter your location.
                            Streamline processes, create team rituals, and
                            watch productivity soar.
                        </Description>
                        <LearnMore>Learn More</LearnMore>
                        <BottomUl>
                            {renderCompanies()}
                        </BottomUl>
                    </Left>
                    <Right>
                        <RightImg src={right}/>
                    </Right>
                    <Right1>
                        <RightImg src={mobile}/>
                    </Right1>
                </SpotlightSection>
            </SpotlightWrapper>


            <Menu className={ menu && "show" }>
                <MenuField >
                    <MenuButtons onClick={()=>{ setMenu(!menu) }}>
                        <OpenSvg src={close} />
                    </MenuButtons>
                    <MenuUl>
                        <MenuLi>
                            <MenuNavLink onClick= {() => {setShow1(!show1)}}>
                                <MenuLiDiv>
                                    <HeaderLiP className={show1 && 'show'}>Features</HeaderLiP> 
                                    <ArrowSpan className={show1 ? "" : "show"}><ArrowSpanImg src={arrow} alt="Features"/></ArrowSpan>
                                    <ArrowSpan className={show1 ? "show" : ""}><ArrowSpanImg src={down} alt="Features"/></ArrowSpan>
                                </MenuLiDiv>
                                <MenuLiDisplay className={ show1 && "show" }>
                                    <LiChild>
                                        <ChildFragment>
                                            <Icon src={todo}/>
                                            <Goto>Todo List</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={calender}/>
                                            <Goto>Calender</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={reminders}/>
                                            <Goto>Reminders</Goto>
                                        </ChildFragment>
                                        <ChildFragment>
                                            <Icon src={planning}/>
                                            <Goto>Planning</Goto>
                                        </ChildFragment>
                                    </LiChild>
                                </MenuLiDisplay>
                            </MenuNavLink>
                            
                        </MenuLi>
                        <MenuLi>
                            <MenuNavLink onClick={() => {setShow2(!show2)}}>
                                <MenuLiDiv>
                                    <HeaderLiP className={show2 && 'show'}>Company</HeaderLiP> 
                                    <ArrowSpan className={show2 ? "" : "show"}><ArrowSpanImg src={arrow} alt="Features"/></ArrowSpan>
                                    <ArrowSpan className={show2 ? "show" : ""}><ArrowSpanImg src={down} alt="Features"/></ArrowSpan>
                                </MenuLiDiv>  
                                <MenuLiDisplay className={`company ${show2 && "show"}`}>
                                    <LiChild>
                                        <ChildFragment><Goto>History</Goto></ChildFragment>
                                        <ChildFragment><Goto>Our Team</Goto></ChildFragment>
                                        <ChildFragment><Goto>Blog</Goto></ChildFragment>
                                    </LiChild>
                                </MenuLiDisplay>                          
                            </MenuNavLink>
                            
                        </MenuLi>
                        <MenuLi className='other'><HeaderLiP>Careers</HeaderLiP></MenuLi>
                        <MenuLi className='other'><HeaderLiP>About</HeaderLiP></MenuLi>
                    </MenuUl>
                    <MenuButtonsAuth>
                        <Login>Login</Login>
                        <Register>Register</Register>
                    </MenuButtonsAuth> 
                </MenuField>
            </Menu>
        </Section>

        
    </>
    
  )
}
const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    /* @media screen and (max-width:960px){
        height: 50vh;
        
    } */
`
const HamburgerMenu = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top:30px;
    right:50px;
    z-index: 2;
    display: none;
    &.hide{
        display: none;
    }
    @media screen and (max-width:720px){
        display: block;
    }
    @media screen and (max-width:540px){
        width: 20px;
        height: 20px;
        top: 40px;
    }

`

const  HeaderSection = styled.section`
    width: 95%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    position: absolute;
    @media screen and (max-width:540px){
        width: 80%;
    }
`
const HeaderLeft = styled.div`
    width: 570px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 500px;
    }
    
`
const HeaderRight = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 200px;
    }
    @media screen and (max-width:720px){
        display: none;
    }
`
const Logo = styled.div`
    width: 80px;
    margin-top: 15px;
    @media screen and (max-width:960px){
        margin-top: 10px;
    }
    
`
const LogoImg = styled.img`
    width: 100%;
`
const HeaderUl = styled.ul`
    width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:960px){
        width: 400px;
    }
    @media screen and (max-width:720px){
        display: none;
    }
`
const HeaderLi = styled.li`
    color: hsl(0, 0%, 41%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    width: 90px;
    height: 20px;
    cursor: pointer;
    position: relative;
    &.other{
        margin-top: 5px;
    }
    &:hover{
        color: #111;
    }
    @media screen and (max-width:960px){
        font-size: 15px;
    }
`
const NavLink = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
`

const Display = styled.div`
    padding: 20px;    
    position: relative;
    top: 30px;
    left: -20px;
    min-width: 140px;
    height: 180px;
    box-sizing: border-box;
    box-shadow: rgba(90, 90, 111, 0.5) 0px 7px 42px 0px;
    border-radius: 15px;
    display: none;
    z-index: 1;

    &.show{
        display: block;
    }

    &.company{
        margin-left: 80px;
    }
`
const LiChild = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    background: #fff;
`
const ChildFragment = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    background: #fff;
`
const Icon = styled.img`
    width: 15px;
    height: 15px;
    display: block;
`
const Goto = styled.a`
    width: auto;
    font-size: 15px;
    margin-left: 15px;
    background: #fff;
`

const HeaderLiP = styled.p`
    background: #fff;
`
const ArrowSpan = styled.span`
    width: 0px;
    display: block;
    padding-bottom: 5px;
    background: #fff;
    box-sizing: border-box;
    &.show{
        width: 10px;
    }
`
const ArrowSpanImg = styled.img`
    width: 100%;
    fill: black;
`
const Login = styled.div`
    color: hsl(0, 0%, 41%);
    background: #fff;
    width: 100px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 17px;
    cursor: pointer;
    @media screen and (max-width:960px){
        font-size: 15px;
    }
`
const Register = styled.div`
    background: #fff;
    color: hsl(0, 0%, 41%);
    width: 120px;
    height: 50px;
    border: 2px solid hsl(0, 0%, 41%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
    font-size: 17px;
    @media screen and (max-width:960px){
        font-size: 15px;
        width: 100px;
        height: 40px;
    }
`
const Menu = styled.section`
    background: rgba(0,0,0,0.7);
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    &.show{
        display: block;
    }
`
const MenuField = styled.section`
    width: 300px;
    height: 100vh;
    background: #fff;
    position: absolute;
    margin-right: 0px;
    right: 0px;
    padding: 100px 20px;
    display: flex ;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width:376px){
        width: 200px;
    }
`
const MenuUl = styled.ul`
    width: 250px;
    min-height: 200px;
    max-height: 400px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 50px;
    margin-top: 30px;
`
const MenuLi = styled.li`
    background: #fff;
    width:100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`
const MenuLiDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    ${HeaderLiP}{
        margin-right: 10px;
    }
    ${ArrowSpan}{
        padding-top: -10px;
    }
`
const MenuLiDisplay = styled.div`
    overflow: hidden;
    width: 100%;
    height: 0px;
    background: #fff;
    &.show{
        margin-top: 20px;
        min-height: 120px;
        max-height: 220px;
    }
`
const MenuNavLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
    
`
const MenuButtons = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top:30px;
    right: 50px;
`
const Open = styled.div`
    width: 100%;
    height: 100%;
`
const OpenSvg = styled.img`
    width: 100%;
    height: 100%;
`
const Close = styled.div`

`
const CloseSvg = styled(OpenSvg)``
const MenuButtonsAuth = styled.div`
    width: 100%;
    height:100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
` 

const SpotlightWrapper = styled.section`
    width: 80%;
    height: 610px;
    left: 0px;
    right: 0px;
    margin: auto;
    position: absolute;
    top: 100px;
    @media screen and (max-width:720px){
        height: 850px;
    }
`
const SpotlightSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media screen and (max-width:720px){
        flex-direction: column-reverse;
    }
    
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 50%;
    @media screen and (max-width:720px){
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
const Right = styled.div`
    width: 37%;
    height: 570px;
    padding-top: 40px;
    overflow: hidden;
    @media screen and (max-width:1200px){
        height: 500px;
        width: 42%;
    }
    @media screen and (max-width:960px){
        width: 45%;
    }
    @media screen and (max-width:720px){
        width: 0px;
    }
`

const Right1 = styled.div`
    width: 0%;
    height: 350px;
    @media screen and (max-width:720px){
        width: 100%;
    }
`
const Heading1 = styled.h1`
    font-weight: 700;
    font-size: 50px;
    @media screen and (max-width:1200px){
        font-size: 45px;
    }
    @media screen and (max-width:414px){
        font-size: 30px;
    }
`
const Heading2 = styled(Heading1)`
    margin-bottom: 50px;
    @media screen and (max-width:1200px){
        margin-bottom: 40px;
    }
`
const Description = styled.p`
    color: hsl(0, 0%, 41%);
    font-size: 20px;
    font-weight: 600;
    line-height:2.5ch;
    text-align: justify;
    width: 80%;
    margin-bottom: 50px;
    @media screen and (max-width:1200px){
        font-size: 18px;
    }
    @media screen and (max-width:960px){
        font-size: 16px;
    }
    @media screen and (max-width:414px){
        font-size: 12px;
    }
`
const LearnMore = styled.button`
    color: #fff;
    background: #111;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 90px;
    border:none;
    font-size: 15px;
    font-weight: 600;
    &:hover{
        color:#111;
        background: #fff;
        border:2px solid #111;
    }
    @media screen and (max-width:1200px){
        margin-bottom: 90px;
        font-size: 13px;
    }
    @media screen and (max-width:960px){
        margin-bottom: 80px;
    }

    @media screen and (max-width:420px){
        width: 100px;
        font-size: 10px;
        height: 40px;
    }
`
const BottomUl = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:1200px){
        width: 82%;
    }
`
const Li = styled.li`
    width: 18%;
    @media screen and (max-width:1200px){
        width: 19%;
    }
`
const LiImg = styled.img`
    width: 100%;
`
const RightImg = styled.img`
    width: 100%;
    height: 100%;
`

