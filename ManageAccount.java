import java.util.List; 
import java.util.Date;
import java.util.Iterator; 
 
import org.hibernate.HibernateException; 
import org.hibernate.Session; 
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class ManageAccount {
    private static SessionFactory factory; 

    // Method to CREATE an account by email in the database
    public Integer addAccountByEmail(String email, String pw){
        Session session = factory.openSession();
        Transaction tx = null;
        Integer uid = null;
      
        try {
            tx = session.beginTransaction();
            Account account = new Account(email, pw);
            uid = (Integer) session.save(account); 
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace(); 
        } finally {
            session.close(); 
        }
        return uid;
   }

    // Method to CREATE an account by phone number in the database
    public Integer addAccountByPhone(int pNum, String pw){
        Session session = factory.openSession();
        Transaction tx = null;
        Integer uid = null;
      
        try {
            tx = session.beginTransaction();
            Account account = new Account(pNum, pw);
            uid = (Integer) session.save(account); 
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace(); 
        } finally {
            session.close(); 
        }
        return uid;
   }

    // Method to CREATE an account by both email and phone number in the database
    public Integer addAccountByEmailAndPhone(String email, int pNum, String pw){
        Session session = factory.openSession();
        Transaction tx = null;
        Integer uid = null;
      
        try {
            tx = session.beginTransaction();
            Account account = new Account(pNum, email, pw);
            uid = (Integer) session.save(account); 
            tx.commit();
        } catch (HibernateException e) {
            if (tx!=null) tx.rollback();
            e.printStackTrace(); 
        } finally {
            session.close(); 
        }
        return uid;
   }

   /* Method to  READ all the accounts */
   public void listAccounts( ){
      Session session = factory.openSession();
      Transaction tx = null;
      
      try {
         tx = session.beginTransaction();
         // TODO: confirm Accounts or Account?
         List accounts = session.createQuery("FROM Accounts").list(); 
         for (Iterator iterator = accounts.iterator(); iterator.hasNext();){
            Account account = (Account) iterator.next(); 
            System.out.print("phone: " + account.getPhoneNumber()); 
            System.out.print("  email: " + account.getEmailAddress()); 
         }
         tx.commit();
      } catch (HibernateException e) {
         if (tx!=null) tx.rollback();
         e.printStackTrace(); 
      } finally {
         session.close(); 
      }
   }
   
   /* Method to UPDATE password for an account */
   public void updatePassword(String email, String pw ){
      Session session = factory.openSession();
      Transaction tx = null;
      
      try {
         tx = session.beginTransaction();
         Account account = (Account)session.get(Account.class, emailAddress); 
         account.setPassword( pw );
		 session.update(account); 
         tx.commit();
      } catch (HibernateException e) {
         if (tx!=null) tx.rollback();
         e.printStackTrace(); 
      } finally {
         session.close(); 
      }
   }

   /* Method to UPDATE password for an account */
   public void updatePassword(Integer pNum, String pw ){
        Session session = factory.openSession();
        Transaction tx = null;
        
        try {
            tx = session.beginTransaction();
            Account account = (Account)session.get(Account.class, phoneNumber); 
            account.setPassword( pw );
            session.update(account); 
            tx.commit();
        } catch (HibernateException e) {
        if (tx!=null) tx.rollback();
            e.printStackTrace(); 
        } finally {
            session.close(); 
        }
    }

    /* Method to UPDATE email for an account */
    // TODO: confirm can user update email when they already has one?
    //       or is it only allowed when current email is NULL
    public void updatePassword(Int pNum, String email ){
        Session session = factory.openSession();
        Transaction tx = null;
        
        try {
            tx = session.beginTransaction();
            Account account = (Account)session.get(Account.class, phoneNumber); 
            account.setEmailAddress( email );
            session.update(account); 
            tx.commit();
        } catch (HibernateException e) {
        if (tx!=null) tx.rollback();
            e.printStackTrace(); 
        } finally {
            session.close(); 
        }
    }


   /* Method to DELETE an account from the records */
   // TODO: do we need this?
}