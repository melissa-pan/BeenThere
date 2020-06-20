package org.arpit.java2blog.controller;
 
import java.util.List;
 
import org.arpit.java2blog.model.Account;
import org.arpit.java2blog.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

	@Autowired
	AccountService accountService;

	@RequestMapping(value = "/getAllAccounts", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Account> getAllAccounts(Model model) {

		List<Account> listOfAccounts = accountService.getAllAccounts();
		model.addAttribute("account", new Account());
		model.addAttribute("listOfAccounts", listOfAccounts);
		return listOfAccounts;
	}

//	@RequestMapping(value = "/", method = RequestMethod.GET, headers = "Accept=application/json")
//	public String goToHomePage() {
//		return "redirect:/getAllAccounts";
//	}

	//	TODO: get account by email and phone might be more realisitic than UID
	//        consider having sub functions under this function, such as using 
	//        regex to determine wheter if passin is int, email (with @) or phone (longer int).
	//        Or considering having /getAccountBy.../ instead
	@RequestMapping(value = "/getAccount/{uid}", method = RequestMethod.GET, headers = "Accept=application/json")
	public void getAccountByUid(@PathVariable int uid) {
		accountService.getAccount(uid);
	}
	
	@RequestMapping(value = "/addAccount", method = RequestMethod.POST, headers = "Accept=application/json")
	public Account addAccount(@RequestBody Account account) {
		return accountService.addAccount(account);

	}

	@RequestMapping(value = "/addAccount", method = RequestMethod.PUT, headers = "Accept=application/json")
	public Account updateAccount(@RequestBody Account account) {
		return accountService.updateAccount(account); 

	}

	@RequestMapping(value = "/deleteAccount/{uid}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void deleteAccount(@PathVariable("uid") int uid) {
		accountService.deleteAccount(uid);


	}	
}
