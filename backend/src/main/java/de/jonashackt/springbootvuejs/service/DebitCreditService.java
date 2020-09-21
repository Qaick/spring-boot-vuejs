package de.jonashackt.springbootvuejs.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DebitCreditService
{
	private volatile int account;
	private final List<HistoryItem> accountHistory = new ArrayList<>();

	public static class HistoryItem {
		private final int change;
		private final int result;
		HistoryItem(int change, int result) {
			this.change = change;
			this.result = result;
		}

		public int getChange()
		{
			return change;
		}

		public int getResult()
		{
			return result;
		}
	}

	public int add(int amount) {
		return change(amount);
	}

	public int remove(int amount) {
		return change(-amount);
	}

	private synchronized int change(int amount) {
		int tmpAccount = account + amount;
		validate(tmpAccount);
		accountHistory.add(new HistoryItem(amount, tmpAccount));
		return account = tmpAccount;
	}

	private void validate(int value) {
		if (value < 0) throw new RuntimeException("Operation cannot result less than zero: " + value);
	}

	public int get() {
		return account;
	}

	public List<HistoryItem> getAccountHistory() {
		return Collections.unmodifiableList(accountHistory);
	}
}
