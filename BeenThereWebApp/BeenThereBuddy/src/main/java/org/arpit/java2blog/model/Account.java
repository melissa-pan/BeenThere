package org.arpit.java2blog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/////////////////////////////////////////////////////////////////
/* Define the Accounts class that map to the Accounts table in */
/* the database, which is responsible for authentication info. */
/////////////////////////////////////////////////////////////////
@Entity
@Table(name="ACCOUNTS")
public class Account {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="UID", unique=true, nullable=false)
    int UID;
	
	@Column(name="phoneNumber")
    String phoneNumber;
	
	@Column(name="emailAddress")
    String emailAddress;
	
	@Column(name="password")
    // TODO: confirm on saving password or hashed password
    private String password;

    // Default constructor
    public Account() {
    	super();
    }

    // TODO: confirm if we will encounter this scenario?
    // Create account by both phone and email address
    public Account(String pNum, String email, String pw) {
    	super();
        this.phoneNumber = pNum;
        this.emailAddress = email;
        this.password = pw;
    }

    public int getUID() {
        return this.UID;
    }

    public void setID(int id) {
        this.UID = id;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(String pNum) {
        this.phoneNumber = pNum;
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public void setEmailAddress(String email) {
        this.emailAddress = email;
    }

    public void setPassword(String pw) {
        this.password = pw;
    }

    public boolean comparePassword(String pw) {
        return this.password == pw;
    }
}