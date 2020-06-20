package org.arpit.java2blog.dao;
 
import java.util.List;
 
import org.arpit.java2blog.model.Account;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AccountDaoImpl implements AccountDao{
 
	@Autowired
	private SessionFactory sessionFactory;
 
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
 
	public List<Account> getAllAccounts() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Account>  accountList = session.createQuery("from Account").list();
		return accountList;
	}
 
	public Account getAccount(int uid) {
		Session session = this.sessionFactory.getCurrentSession();
		Account account = (Account) session.get(Account.class, uid);
		return account;
	}
 
	public Account addAccount(Account account) {
		Session session = this.sessionFactory.getCurrentSession();
		session.save(account);
		return account;
	}
 
	public void updateAccount(Account account) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(account);
	}
 
	public void deleteAccount(int uid) {
		Session session = this.sessionFactory.getCurrentSession();
		Account p = (Account) session.load(Account.class, new Integer(uid));
		if (null != p) {
			session.delete(p);
		}
	} 
}