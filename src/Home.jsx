import React from 'react'
import TopBar from './components/TopBar'
import ProductList from './components/ProductList'


function Home() {
    return (
        <React.Fragment>
            <TopBar></TopBar>
            <ProductList></ProductList>
        </React.Fragment>
    )
}

export default Home
