package org.arpit.java2blog.service;
 
import java.util.List;
 
import javax.transaction.Transactional;
 
import org.arpit.java2blog.dao.AccountDao;
import org.arpit.java2blog.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("accountService")
public class AccountService {

	@Autowired
	AccountDao accountDao;

	@Transactional
	public List<Account> getAllAccounts() {
		return accountDao.getAllAccounts();
	}

	@Transactional
	public Account getAccount(int uid) {
		return accountDao.getAccount(uid);
	}

	@Transactional
	public Account addAccount(Account account) {
		accountDao.addAccount(account);
		return account;
	}

	@Transactional
	public Account updateAccount(Account account) {
		accountDao.updateAccount(account);
		return account;
	}

	@Transactional
	public void deleteAccount(int uid) {
		accountDao.deleteAccount(uid);
	}
}
