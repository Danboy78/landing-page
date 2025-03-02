import './index.css'

export default function Login(){
    return(
       <div className='Wrapper'>
        <div className='login_menu'>
           <h1>Welcome</h1>
           <div className='inputs'>
              <span className='email'>
              <label htmlFor="email">Email</label>
              <input type="email" /><br />
              </span>

              <span className='password'>
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="" />
              </span>
              <span className='signup'>
                <input type="button" value="Sign up" />
              </span>
           </div>
        </div>

        <div className='image'>

        </div>
       </div>
    );
}