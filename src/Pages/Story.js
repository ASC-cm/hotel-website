import Navbar from '../Components/Navbar';
import Footer from "./Footer";
import background from '../assets/story.webp';
import SearchBar from '../Components/Searchbar';
import "../Stylesheet/Story.css"


const Story = () => {
    return(
        <>
            <Navbar />
            <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay1" />
            </div>
            <SearchBar />
            <div className='Story-line'>
                <h2>About our Story</h2>
                <p>No story yet</p>
            </div>
            <Footer />
        </>
    )
}

export default Story;