import { CurrentUser } from "./contexts/CurrentUser"
import { useContext } from 'react'

function Home() {

    const { setCurrentUser } = useContext(CurrentUser)

    return (
        <div>
            <header>
                <nav class="menu-container">

                    <input type="checkbox" aria-label="Toggle menu" />
                    <span></span>
                    <span></span>
                    <span></span>


                    <a href="#" class="menu-logo">
                        <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="Website placeholder logo" />
                    </a>


                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    Feed
                                </a>
                            </li>


                        </ul>
                        <ul>
                            <li>
                                <a href="#signup">
                                    Sign-up
                                </a>
                            </li>
                            <li>
                                <a href="#login">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section class="hero">
                <h1>Welcome to HelloWorld()</h1>
                <p>Connect with friends and share your life</p>
                <a href="#" class="btn btn-primary">Get Started</a>
            </section>
            <section class="features">
                <h2>Features</h2>
                <ul>
                    <li><i class="fas fa-users"></i> Connect with friends</li>
                    <li><i class="fas fa-camera"></i> Share photos and videos</li>
                    <li><i class="fas fa-comments"></i> Chat with friends</li>
                </ul>
            </section>
            <section class="post">
                <h2>Post a Picture</h2>
                <form>
                    <input type="file" name="picture" />
                    <input type="text" name="caption" placeholder="Caption" />
                    <button type="submit" class="btn btn-primary">Post</button>
                </form>
                <section />
                <section class="comments">
                    <h2>Comments</h2>
                    <ul>
                        <li>
                            <p><strong>John Doe:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi consequat, tempus velit quis, aliquam odio. Donec posuere ante et augue facilisis, a fringilla turpis vestibulum. Sed euismod, nunc eget elementum congue, lacus quam pellentesque urna, vel posuere enim mauris eu mi.</p>
                        </li>
                        <li>
                            <p><strong>Jane Smith:</strong> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse at lacus imperdiet, dignissim velit ac, feugiat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </li>
                        <li>
                            <p><strong>Bob Johnson:</strong> Proin semper dui id velit pretium, eget consequat risus pharetra. Nunc rhoncus, velit non pharetra venenatis, libero ipsum pretium justo , vel scelerisque urna nisl ac mauris. Praesent blandit, quam eu malesuada luctus, tellus est gravida tellus, sed cursus nibh nibh et mi.</p>
                        </li>
                    </ul>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <textarea name="comment" placeholder="Comment"></textarea>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </section>
                <section class="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" email="email" placeholder="Email" />
                        <textarea name="message" placeholder="Message"></textarea>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </section>
                <form />
                <footer>
                    <p>© 2023 HelloWorld()</p>
                </footer>
            </section>
        </div>
    )
}

export default Home;