import React from 'react'

export default function blog_navbar() {
    return (
        <>
            <div class="navbar1 blogNavWeb">
                <a class="border-right-0 rounded-bl" href="/blogs/places-to-visit">Places to Visit</a>
                <a class="border-left-0 border-right-0" href="/blogs/best-of-india">Best of India</a>
                <a class="border-left-0 border-right-0" href="/blogs/places-to-eat">Places to Eat</a>
                <a class="border-left-0 border-right-0" href="/blogs/things-to-do">Things to Do</a>
                <a class="border-left-0 border-right-0" href="/blogs/top-destinations">Top Destinations</a>
                <div class="dropdown1">
                    <button class="dropbtn1 mx-0 border-left-0 rounded-br">View All&nbsp;
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown1-content rounded">
                        <a class="rounded-top" href="/blogs/travel-and-tourism">Travel and Tourism</a>
                        <a class="rounded-bottom" href="/blogs/honeymoon-destinations">Honeymoon Destinations</a>
                        <a class="rounded-bottom" href="/blogs/travel-tips">Travel Tips</a>
                        <a class="rounded-bottom" href="/blogs/adventure-travel">Adventure Travel</a>

                    </div>
                </div>
            </div>

            <div class="container blogNavbar px-0">
                <div class="tabs-navbar bg-white sticky bordernone ">
                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                        <div class="scrollmenu container px-0 blogMenu">
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/things-to-do">Things to Do</a>
                            <a class="border-right-0 border-left-0 scroller-item1 py-1" href="/blogs/travel-tips">Travel Tips</a>
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/travel-and-tourism">Travel and Tourism</a>
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/best-of-india">Best of India</a>
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/adventure-travel">Adventure Travel</a>
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/top-destinations" >Top Destinations</a>
                            <a class="border-left-0 border-right-0 scroller-item1  py-1 " href="/blogs/honeymoon-destinations">Honeymoon Destinations</a>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
