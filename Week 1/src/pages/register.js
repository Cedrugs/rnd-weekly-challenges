export const register = `
    <form class="form-container">
        <div class="form-heading">
            <h1>Create your account</h1>
            <h3>Let’s get started with your 30 days free trial</h3>
        </div>
        <div class="form-content">                
            <div class="input-container">
                <label for="name">Name<span>*</span></label>
                <input type="text" name="name" placeholder="johndoe" id="name">
                <span class="error-message" id="Name-Error"></span>
            </div>
            <div class="input-container">
                <label for="email">Email<span>*</span></label>
                <input type="text" name="email" placeholder="johndoe@gmail.com" id="email">
                <span class="error-message" id="Email-Error"></span>
            </div>
            <div class="input-container">
                <label for="password">Password<span>*</span></label>
                <input type="password" placeholder="*******" id="password">
                <span class="hint">Password needs to have a minimal of 8 characters, 1 uppercase and 1 symbol</span>
                <span class="error-message" id="Password-Error"></span>
            </div>
            <div class="input-container">
                <label for="re-password">Retype Password<span>*</span></label>
                <input type="password" placeholder="*******" id="re-password">
                <span class="error-message" id="Repassword-Error"></span>
            </div>
            <div class="tos-container">
                <input type="checkbox">
                <span class="hint">I agree to all term, privacy policy and fees</span>
            </div>
        </div>
        
        <button type="submit" class="button">Sign Up</button>
        <span class="hint">Already have an account? <a href="/login" class="link">Log in</a></span>
    </form>
`