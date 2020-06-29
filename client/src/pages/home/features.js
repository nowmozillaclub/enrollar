import React from 'react'
import feature1 from '../../assets/home/feature1.jpg'
import feature2 from '../../assets/home/feature2.png'
import feature3 from '../../assets/home/feature3.png'

const features=()=> {
    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{borderRadius:"24px"}}>
                <div className="card-panel teal" style={{borderRadius:"24px 24px 0 0"}}>
                    <span className="white-text">
                        <h4>What's new?</h4>
                        <br />
                        Let's have a look...
                    </span>
                </div>

                <div className="container white" id="featWrapper" style={{width:"100%"}}>
                    <div className="row container center featTab">
                        <h3 className="header flow-text postTitle col s12 center"
                        >All in one place!</h3>
                        <img src={ feature1 } alt="feature 1" className="featImg col s8 offset-s2 l6 push-l6 responsive-img"/>
                        <p className="grey-text text-darken-3 lighten-3 col s10 offset-s1 l6 pull-l6 center">
                            Explore the best of all worlds. Find all your favourite courses from different sites at one place!
                        </p>
                    </div>
                    <div className="row container center featTab">
                        <h3 className="header flow-text postTitle col s12 center"
                        >Quality over quantity?</h3>
                        <img src={ feature2 } alt="feature 1" className="featImg col s8 offset-s2 l6 push-l6 responsive-img"/>
                        <p className="grey-text text-darken-3 lighten-3 col s10 offset-s1 l6 pull-l6 center">
                            While we strive hard to make the user experience as
                            smooth as possible, we'd also like to have you your desired results at the click of a button. Inorder to acheive this, we have limited the search results for each topic!
                        </p>
                    </div>
                    <div className="row container center featTab">
                        <h3 className="header flow-text postTitle col s12 center"
                        >Privacy...</h3>
                        <img src={ feature3 } alt="feature 1" className="featImg col s8 offset-s2 l6 push-l6 responsive-img"/>
                        <p className="grey-text text-darken-3 lighten-3 col s10 offset-s1 l6 pull-l6 center">
                            Our friends at enrollar make sure no personal information is ever taken from you as a compensation for our services. <br />It's free and it always will be!
                        </p>
                    </div>
                </div>

                <div className="card-panel teal" style={{borderRadius:"0 0 24px 24px"}}>
                    <span className="white-text">
                        <h4>and lots more.</h4>
                        <br />
                        Hop on then!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default features
