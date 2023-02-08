import '../css/home.css';

function Home() {
    return (
        <div className='home'>
            <h1>React Router DOM</h1>
            <h3>Definitions</h3>
            <div className='texto'>
                <p>But first, some definitions! There are a lot of different ideas around routing from back and front end frameworks. Sometimes a word in one context might have different meaning than another. </p>
                <p>Here are some words we use a lot when we talk about React Router. The rest of this guide will go into more detail on each one. URL - The URL in the address bar.</p>
                <p>A lot of people use the term "URL" and "route" interchangeably, but this is not a route in React Router, it's just a URL. Location - This is a React Router specific object that is based on the built-in browser's window.location object. It represents "where the user is at".</p>
                <p>It's mostly an object representation of the URL but has a bit more to it than that. Location State - A value that persists with a location that isn't encoded in the URL.</p>
                <p>Much like hash or search params (data encoded in the URL), but stored invisibly in the browser's memory. History Stack - As the user navigates, the browser keeps track of each location in a stack.</p>
                <p>If you click and hold the back button in a browser you can see the browser's history stack right there. Client Side Routing (CSR) - A plain HTML document can link to other documents and the browser handles the history stack itself.</p>
                <p>Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server. History - An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically.</p>
                <p>History Action - One of POP, PUSH, or REPLACE. Users can arrive at a URL for one of these three reasons.</p>
                <p>A push when a new entry is added to the history stack (typically a link click or the programmer forced a navigation). A replace is similar except it replaces the current entry on the stack instead of pushing a new one.</p>
                <p>Finally, a pop happens when the user clicks the back or forward buttons in the browser chrome. Segment - The parts of a URL or path pattern between the / characters.</p>
                <p>For example, "/users/123" has two segments. Path Pattern - These look like URLs but can have special characters for matching URLs to routes, like dynamic segments ("/users/:userId") or star segments ("/docs/*").</p>
                <p>They aren't URLs, they're patterns that React Router will match. Dynamic Segment - A segment of a path pattern that is dynamic, meaning it can match any values in the segment.</p>
                <p>For example the pattern /users/:userId will match URLs like /users/123 URL Params - The parsed values from the URL that matched a dynamic segment. Router - Stateful, top-level component that makes all the other components and hooks work.</p>
                <p>Route Config - A tree of routes objects that will be ranked and matched (with nesting) against the current location to create a branch of route matches. Route - An object or Route Element typically with a shape of path, element or "Route path element". The path is a path pattern. When the path pattern matches the current URL, the element will be rendered. Route Element - Or Route.</p>
                <p>This element's props are read to create a route by  Routes , but otherwise does nothing. Nested Routes - Because routes can have children and each route defines a portion of the URL through segments, a single URL can match multiple routes in a nested 'branch' of the tree. This enables automatic layout nesting through outlet, relative links, and more. Relative links - Links that don't start with / will inherit the closest route in which they are rendered. This makes it easy to link to deeper URLs without having to know and build up the entire path. Match - An object that holds information when a route matches the URL, like the url params and pathname that matched. Matches - An array of routes (or branch of the route config) that matches the current location. This structure enables nested routes. Parent Route - A route with child routes. Outlet - A component that renders the next match in a set of matches. Index Route - A child route with no path that renders in the parent's outlet at the parent's URL. Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.</p>
            </div>
        </div>
    )
}

export default Home;