import React from 'react'

const Register = () => {
  return (
    <div className="wrapper">
      <section className="main">
        <section>
          <div className="row">
            <div className="col-6 col-12-medium">
              <header>
                <h2>Register</h2>
                <p>Important! A parent must create an account before a youth can create their account.</p>
              </header>
              <p>To register for Summer Friendship you must first create an account.</p>
              <p>Youth, if you do not see your address in the drop down list, please ask your parent to create their account first.</p>
              <p>After creating your account, log in and check your tasks to complete registration.</p>
            </div>
            <div className="col-6 col-12-medium">
              <h2>Account Creation</h2>
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" placeholder="Name or Nickname"/>
                </div>
                <div className="col-6 col-12-xsmall">
                  
                  <select name="role">
                    <option value="">I am a ...</option>
                    <option value="parent" >Parent</option>
                    <option value="youth">Youth</option>
                    <option value="volunteer">Volunteer</option>
                  </select>
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="email_check" placeholder="Confirm Email"/>
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="password" name="password_check" placeholder="Confirm Password"/>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Address" list="ice-cream-choice"/>
                  <datalist id="ice-cream-choice">
                    <option value="12751 Silvia Loop"/>
                  </datalist>

                </div>
                <div className="col-6 col-8-small">
                  <input type="text" name="city" placeholder="City" list="cities"/>
                  <datalist id="cities">
                    <option value="Woodbridge"/>
                    <option value="Dale City"/>
                    <option value="Lake Ridge"/>
                    <option value="Dumfries"/>
                  </datalist>
                </div>
                <div className="col-3 col-4-small">
                  <input type="text" name="state" placeholder="State" list="states"/>
                  <datalist id="states">
                    <option value="VA"/>
                  </datalist>
                </div>
                <div className="col-3 col-8-small">
                  <input type="text" name="zip" placeholder="Zip Code" list="zip-codes"/>
                  <datalist id="zip-codes">
                    <option value="22191"/>
                    <option value="22192"/>
                    <option value="22193"/>
                  </datalist>
                </div>
              </div>
            </div>
          </div>

        </section>
      </section>
    </div>
  )
}

export default Register
