import React from 'react';
import './form.css';

const Form = () => {
    return (
        <div className="strip">
            <div class="formbox">
                <h1 class="formtitle"> Get in Touch </h1>
                <div class="forminputs">
                    <form>
                        <div class="formcolumn">
                            <label for="name">Name*</label>
                            <input type="text" id="name" name="name"></input>
                            <br></br>
                            <label for="company">Company*</label>
                            <input type="text" id="company" name="company"></input>
                        </div>
                        <div class="formcolumn">
                            <label for="email">Email*</label>
                            <input type="text" id="email" name="email"></input>
                            <br></br>
                            <label for="subject">Subject*</label>
                            <input type="text" id="subject" name="subject"></input>
                            <br></br>

                        </div>

                        <label for="message">Message</label>
                        <input type="text" id="message" name="message"></input>
                        <br></br>

                        <input type="submit" class="submitbutton highlighted"></input>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Form
