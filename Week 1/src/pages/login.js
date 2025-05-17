export const login = `
    <form class="form-container">
        <div class="form-heading">
            <h1>Login to your account</h1>
            <h3>Enter your credentials to login to your account</h3>
        </div>
        <div class="form-content">
            <div class="input-container">
                <label for="email">Email<span>*</span></label>
                <input type="text" name="email" placeholder="johndoe@gmail.com">
            </div>
            <div class="input-container">
                <label for="password">Password<span>*</span></label>
                <input type="password" placeholder="*******">
            </div>
        </div>
        
        <button type="submit" class="button">Login</button>
        <span class="hint">Don’t have an account? <a href="/register" class="link">Create an account</a></span>
    </form>
`