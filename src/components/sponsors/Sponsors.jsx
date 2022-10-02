import React, { useState } from 'react';
import './sponsors.css';
import stellar_logo from '../../resources/stellar_logo.webp'
import quai_logo from '../../resources/quai_logo.png'
import near_logo from '../../resources/near_logo.png'
import coindesk_logo from '../../resources/coindesk_logo.png'
import capital_factory_logo from '../../resources/capital_factory_logo.png'
import bitcoin_logo from '../../resources/bitcoin.png'
import encode_logo from '../../resources/encode_logo.png'
import mccombs_logo from '../../resources/mccombs_logo.png'
import tron_logo from '../../resources/tron-logo.png'
import pinata_logo from '../../resources/pinata-logo.png'
import opensea_logo from '../../resources/opensea-logo.png'
import niftory_logo from '../../resources/niftory-logo.png'
import animal_logo from '../../resources/animal-ventures.png'
import freetail_logo from '../../resources/freetail.png'
import binance_logo from '../../resources/binance.svg'
import solana_logo from '../../resources/solana.png'
import shardeum_logo from '../../resources/sharedeum.png'
import hiro_logo from '../../resources/hiro.png'
import steel_logo from '../../resources/steel.png'
import Modal from '../../component/modal/Modal';


const Sponsors = () => {

    const [openStellarModal,setOpenStellarModal] = useState(false);
    const [showSponsors, setShowSponsors] = useState(true);
    
    function showStellarModal() {
        setOpenStellarModal(true);
        setShowSponsors(false);
    }
    
    return (
        <div class="strip" style={{marginBottom: "30%"}}>
            {openStellarModal && <Modal closeModal={setOpenStellarModal} sponsorsShow={setShowSponsors} body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' title='Our Partnership with Stellar'/>}

            { showSponsors && <div class="sponsor-container">
                <h1 class="sponsortitle"> Our Sponsors </h1>
                <div class="sponsorlist">
                    <div class="sponsor"><a href="https://niftory.com/"><img src={niftory_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.stellar.org/"><img src={stellar_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://solana.com/"><img src={solana_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.mccombs.utexas.edu/" ><img src={mccombs_logo} class="sponsorpic"></img></a></div>                    <div class="sponsor"><a href="https://www.coindesk.com/consensus2022/"><img src={tron_logo} alt="coindesk" class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.steelperlot.com/"><img src={steel_logo} class="sponsorpic"></img></a></div>                    <div class="sponsor"><a href="https://www.coindesk.com/consensus2022/"><img src={tron_logo} alt="coindesk" class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.capitalfactory.com" ><img src={capital_factory_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.animalventures.com/"><img src={animal_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.encode.club"><img src={encode_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://freetailhackers.com/"><img src={freetail_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.binance.us/"><img src={binance_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.bitcoin.com/"><img src={bitcoin_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://shardeum.org/"><img src={shardeum_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.hiro.so/"><img src={hiro_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://www.pinata.cloud/"><img src={pinata_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://quai.network"><img src={quai_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://near.org"><img src={near_logo} class="sponsorpic"></img></a></div>
                    <div class="sponsor"><a href="https://opensea.io/"><img src={opensea_logo} class="sponsorpic"></img></a></div>
                </div>
            </div>}
        </div>
    );
}

export default Sponsors


