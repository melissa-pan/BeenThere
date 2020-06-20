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
	@Column(name="UID", unique=true, nullable=false)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    int UID;
	
	@Column(name="phoneNumber")
    int phoneNumber;
	
	@Column(name="emailAddress")
    private String emailAddress;
	
	@Column(name="password")
    // TODO: confirm on saving password or hashed password
    private String password;

    // Default constructor
    public Account() {
    	super();
    }

    // Create account by phone number only
    public Account(int pNum, String pw) {
    	super();
        this.phoneNumber = pNum;
        this.password = pw;
    }

    // Create account by email address only
    public Account(String email, String pw) {
    	super();
        this.emailAddress = email;
        this.password = pw;
    }

    // TODO: confirm if we will encounter this scenario?
    // Create account by both phone and email address
    public Account(int pNum, String email, String pw) {
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

    public int getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(int pNum) {
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