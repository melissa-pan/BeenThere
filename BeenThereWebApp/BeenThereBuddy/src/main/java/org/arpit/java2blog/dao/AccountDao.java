package org.arpit.java2blog.dao;
 
import java.util.List;
 
import org.arpit.java2blog.model.Account;
 
public interface AccountDao {
	public List<Account> getAllAccounts() ;
 
	public Account getAccount(int uid) ;
 
	public Account addAccount(Account account);
 
	public void updateAccount(Account account) ;
 
	public void deleteAccount(int uid) ;
}