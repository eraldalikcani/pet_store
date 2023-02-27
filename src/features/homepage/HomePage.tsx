import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Segment } from "semantic-ui-react";
import { useStore } from '../../app/store/store';
import Login from '../account/Login';
import Catalog from './Catalog';


export default observer(function HomePage() {
    const { userStore } = useStore();
    return (
        <>
            {userStore.isLoggedIn ? (
                <Catalog />
            ) : (
                <h1>You have to login to see the items of the store!</h1>
            )}
        </>
    )
})