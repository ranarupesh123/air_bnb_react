import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
    return (
        <div className="home">
                <Banner/>
                <div className="home__section">
                    <Card
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Entire Homes"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    <Card
                    src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Entire Homes"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    <Card
                    src="https://images.unsplash.com/photo-1491955478222-69ae25414368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    title="Entire Homes"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    </div>
                <div className="home__section">
                <Card
                    src="https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1085&q=80"
                    title="Entire Homes"
                    price="$50/night"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    <Card
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    title="Entire Homes"
                    price="$80/night"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    <Card
                    src="https://images.unsplash.com/photo-1464288550599-43d5a73451b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1072&q=80"
                    title="Entire Homes"
                    price="$67/night"
                    description="Comfortable private places,with rooms for friend and family "
                    />
                    </div>
        </div>
    )
}

export default Home;
