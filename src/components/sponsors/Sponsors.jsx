import React from 'react';
import './sponsors.css';
import stellar_logo from '../../resources/stellar_logo.webp'
import quai_logo from '../../resources/quai_logo.png'
import near_logo from '../../resources/near_logo.png'
import coindesk_logo from '../../resources/coindesk_logo.png'
import capital_factory_logo from '../../resources/capital_factory_logo.png'
import encode_logo from '../../resources/encode_logo.png'
import mccombs_logo from '../../resources/mccombs_logo.png'

const Sponsors = () => {
    return (
        <div className="strip">
            <h1 class="sponsortitle"> Our Sponsors </h1>
            <div class="sponsorlist">
                <div><a href="https://stellar.org" target="_blank" rel="noreferrer"><img src={stellar_logo} alt="stellar" class="sponsorpic"></img></a></div>
                <div><a href="https://www.mccombs.utexas.edu/" target="_blank" rel="noreferrer"><img src={mccombs_logo} alt="mccombs school of business" class="sponsorpic"></img></a></div>
                <div><a href="https://www.capitalfactory.com" target="_blank" rel="noreferrer"><img src={capital_factory_logo} alt="capital factory" class="sponsorpic"></img></a></div>
                <div><a href="https://www.encode.club" target="_blank" rel="noreferrer"><img src={encode_logo} alt="encode club" class="sponsorpic"></img></a></div>
                <div><a href="https://quai.network" target="_blank" rel="noreferrer"><img src={quai_logo} alt="quai" class="sponsorpic"></img></a></div>
                <div><a href="https://near.org" target="_blank" rel="noreferrer"><img src={near_logo} alt="NEAR" class="sponsorpic"></img></a></div>
                <div><a href="https://www.coindesk.com/consensus2022/" target="_blank" rel="noreferrer"><img src={coindesk_logo} alt="coindesk" class="sponsorpic"></img></a></div>

            </div>
        </div>
    );
}

export default Sponsors


