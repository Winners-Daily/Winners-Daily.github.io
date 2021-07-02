import serviceStyles from '../styles/services.module.css'
import Meta from '../components/Meta'

const services = () => {
    return (
        <div className={serviceStyles.main}>
            <Meta title='Services' />
            <div className={serviceStyles.sec}>
                <h1>Services</h1>
            </div>

            <div className={serviceStyles.row}>
                <div className={serviceStyles.textBox} style={{ backgroundColor: 'white' }}>
                    <p className={serviceStyles.p2}>
                        Model
                        Imagery.
                        <br/>
                        <br/>
                        Wait, is it handmade?
                    </p>
                </div>
                <div className={serviceStyles.textBox} style={{ backgroundColor: 'gainsboro' }}>
                    <img className={serviceStyles.postImg} src="/services/post.png" />
                </div>
            </div>

            <div className={serviceStyles.row}>
                <div className={serviceStyles.textBoxSpecial} style={{ backgroundColor: 'white'}}>
                    <img className={serviceStyles.postImg} src="/services/post3.png" />
                </div>
                <div className={serviceStyles.col}>

                    <div className={serviceStyles.textBox} style={{ backgroundColor: 'white' }}>
                        <p className={serviceStyles.p2}>
                            Are you a winner, but no render was asked?
                        </p>
                        
                    </div>

                    <div className={serviceStyles.textBox} style={{ backgroundColor: '#FAFAFA' }}>
                        <p className={serviceStyles.p} style={{margin:30}}>
                            You ever got that feeling when sitting in your office, waiting for inspiration to fall from grace for the next competition. Maybe a picture on the wall might help…a sunset in the Caribbean… a snowy hilltop by the Alps… or a carefully crafted model of your last winning competition!
                            Why not send us your digital 3D model and go buy a hammer and some nails?

                        </p>
                    </div>
                </div>
            </div>

            <div className={serviceStyles.row}>
                <div className={serviceStyles.textBox} style={{ backgroundColor: 'white' }}>
                    <p className={serviceStyles.p2}>
                        Communication.
                        <br/>
                        <br/>
                        You win,
                        we share.
                    </p>
                </div>
                <div className={serviceStyles.textBox} style={{ backgroundColor: 'gainsboro' }}>
                    <img className={serviceStyles.postImg} src="/services/post2.png" />
                </div>
            </div>

            <div className={serviceStyles.row}>
                <div className={serviceStyles.textBox} style={{ backgroundColor: '#FAFAFA' }}>
                    <p className={serviceStyles.p} style={{ margin: 30 }}>
                        In WinnersDaily we only drink champagne, winning needs to be celebrated wherever whenever. We know your work is worth thousands of likes, that’s why we make sure you get the acknowledgment and public recognition.
                    </p>
                </div>
                <div className={serviceStyles.textBox} style={{ backgroundColor: 'white' }}>
                    <p className={serviceStyles.p2}>
                        Let us cheer for your project.
                    </p>
                </div>
            </div>

            
            <div className={serviceStyles.sec}>
                <h1 className={serviceStyles.h1} >Something awesome
                    is in the work.</h1>
                <p className={serviceStyles.p} style={{ marginBottom: 40 }}>
                    Be the first to get notified when the app is launched.

                    Enter you best email to request an early invitation!
                </p>

                <form action="https://instagram.us17.list-manage.com/subscribe/post?u=db0809168e74731fc30782715&amp;id=6b2cf448c5" 
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" style={{ width: '100%' }}>
                    <div className={serviceStyles.col} style={{ width: '100 %'}}>
                        <div className={serviceStyles.inputRow}>

                            <label className={serviceStyles.lable} for="mce-FNAME">First Name  </label>
                            <input type="text" placeholder="  Name" name="FNAME" id="mce-FNAME" className={serviceStyles.inputBox} />
                        </div>
                        
                        <div className={serviceStyles.inputRow}>
                            <label className={serviceStyles.lable} for="mce-EMAIL" >Email Address </label>
                            <input type="email" placeholder="  Email" name="EMAIL" id="mce-EMAIL" className={serviceStyles.inputBox} required  />
                        </div>

                    </div>
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={serviceStyles.btn}/>
                </form>
            </div>
            

        </div>
    );

}

export default services;


/**
 * 
 * 
<form action="https://instagram.us17.list-manage.com/subscribe/post?u=db0809168e74731fc30782715&amp;id=6b2cf448c5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_db0809168e74731fc30782715_6b2cf448c5" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
 */