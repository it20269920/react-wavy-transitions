import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

function App() {
    return (
        <BrowserRouter>
            <WavyContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <WavyLink to="/" color="#ff44fd">
                                Home
                            </WavyLink>
                            <WavyLink direction="up" to="/about" color="#8f44fd">
                                About
                            </WavyLink>
                            <WavyLink duration={1000} to="/contact" color="#2f44fd">
                                Contact
                            </WavyLink>
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<>No Match</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;