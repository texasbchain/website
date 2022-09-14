import styled from 'styled-components';
import React from 'react'
import { routes } from './constant';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../resources/logo.png";
import Menu from "./Menu"
import {
    useDynamicContext,
    DynamicAuthFlow,
    DynamicContextProvider,
} from '@dynamic-labs/sdk-react';
import axios, * as others from 'axios';

const Navbar = ({ toggleDrawer, routes }) => {

    const [walletPublicKey, setWalletPublicKey] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');

    const { user, handleLogOut, setShowAuthFlow, showAuthFlow } = useDynamicContext();

    return (
        <SNavbar>
            <NavContainer>
                <DrawerButton onClick={toggleDrawer}>
                    <FaBars />
                </DrawerButton>
                <a href="/"><SNavbarBrand><img style={{ width: "160px", height: "160px" }} src={Logo} /></SNavbarBrand></a>
                <RightNav>
                    <NavRoutes>
                        {routes.map((route) => {
                            if (route.subRoutes) {
                                return <Menu route={route} key={route.name} />
                            }
                            return (
                                <NavRoute to={route.link} key={route.name}>
                                    {route.name}
                                </NavRoute>
                            );
                        })}
                        {user && !showAuthFlow &&
                            (
                                <div style={{ display: "flex", }}>
                                    <LoginButton type='button' href='/' onClick={handleLogOut}>
                                        Log Out
                                    </LoginButton>
                                </div>
                            )}
                    </NavRoutes>
                    <a>
                        <div>
                            {!user &&
                                (<LoginButton type='button' onClick={() => setShowAuthFlow(true)}>
                                    Connect Wallet
                                </LoginButton>
                                )}
                            {showAuthFlow &&
                                (
                                    <DynamicAuthFlow
                                        onAuthSuccess={({ authToken, user }) => {
                                            console.log(
                                                `Welcome ${user.walletPublicKey} your token is ${authToken}`,
                                            );
                                            axios.put("http://localhost:4000/upsert", {
                                                walletPublicKey: user.walletPublicKey,
                                                firstName: user.firstName,
                                                lastName: user.lastName,
                                                userName: user.alias,
                                            });
                                            window.location.assign('/');
                                        }}
                                    />
                                )}
                            {user && !showAuthFlow &&
                                (
                                    <div style={{marginTop: "1%", textAlign: "right"}}>
                                        <UserButton>
                                            {user.alias}
                                        </UserButton>
                                    </div>
                                )}
                        </div>
                    </a>
                </RightNav>
            </NavContainer>
        </SNavbar>
    )
}

export default Navbar;

const DrawerButton = styled.button`
    all: unset;
    font-size: 1.7rem;
    display: grid;
    @media (min-width: 768px) {
        display: none;
    }
`


const SNavbar = styled.nav`
    background-color: #0d1026;
`
const NavContainer = styled.div`
    padding: 1rem;
    height: 70px;
    align-items: center;
    color: white;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`
const SNavbarBrand = styled.h2`
    font-size: 1rem;
    align-items: center;
    display: inline-flex;
    opacity: 1;
    &:hover {
        transition: 0.3s ease;
        opacity: 0.8;
    }
`
const RightNav = styled.div`
    display: flex;
    gap: 2.4rem;
`
const NavRoutes = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 1rem;
    align-items: center;
    margin-right: rem;
    @media (max-width: 768px) {
        display: none;
    }
`
const NavRoute = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.4rem;
    border-radius: 3rem;
    transition: 0.3s ease;
    &:hover {
        transition: 0.3s ease;
        color: #2f4e92;
        background-color: white;
    }
`

const LoginButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    background-color: #2f4e92;
    border: 1px solid black;
    border-radius: 3rem;
    &:hover {
        transition: 0.3s ease;
        border: 1px solid transparent;
        background-color: #83a0df;
    }
`


const UserButton = styled.button`
    font-family: 'Poppins', sans-serif;
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: 550;
    background-color: transparent;
    border-radius: 3rem;
    border: 1px solid transparent;
`