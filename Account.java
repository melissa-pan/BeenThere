/////////////////////////////////////////////////////////////////
/* Define the Accounts class that map to the Accounts table in */
/* the database, which is responsible for authentication info. */
/////////////////////////////////////////////////////////////////
public class Accounts {
    private int UID;
    private int phoneNumber;
    private String emailAddress;
    // TODO: confirm on saving password or hashed password
    private String password;

    // Default constructor
    public Accounts() {}

    // Create account by phone number only
    public Accounts(int pNum, String pw)
    {
        this.phoneNumber = pNum;
        this.password = pw;
    }

    // Create account by email address only
    public Accounts(String email, String pw)
    {
        this.emailAddress = email;
        this.password = pw;
    }

    // TODO: confirm if we will encounter this scenario?
    // Create account by both phone and email address
    public Accounts(int pNum, String email, String pw)
    {
        this.phoneNumber = pNum;
        this.emailAddress = email;
        this.password = pw;
    }

    public int getUID()
    {
        return this.UID;
    }

    public void setID(int id)
    {
        this.UID = id;
    }

    public int getPhoneNumber()
    {
        return this.phoneNumber;
    }

    public void setPhoneNumber(int pNum)
    {
        this.phoneNumber = pNum;
    }

    public String getEmailAddress()
    {
        return this.emailAddress;
    }

    public void setEmailAddress(String email)
    {
        this.emailAddress = email;
    }

    public void setPassword(String pw)
    {
        this.password = pw;
    }

    public boolean comparePassword(String pw)
    {
        return this.password == pw;
    }
}