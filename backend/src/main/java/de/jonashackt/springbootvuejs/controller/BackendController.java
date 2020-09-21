package de.jonashackt.springbootvuejs.controller;

import de.jonashackt.springbootvuejs.service.DebitCreditService;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    @Autowired
    private DebitCreditService debitCreditService;

    @RequestMapping(path = "/account/debit/{amount}", method = RequestMethod.POST)
    public int debit(@PathVariable int amount) {
        LOG.info("GET called on /debit resource " + amount);
        return debitCreditService.add(amount);
    }

    @RequestMapping(path = "/account/credit/{amount}", method = RequestMethod.POST)
    public int credit(@PathVariable int amount) {
        LOG.info("GET called on /credit resource " + amount);
        return debitCreditService.remove(amount);
    }

    @RequestMapping(path = "/account/history")
    public List<DebitCreditService.HistoryItem> accountHistory() {
        LOG.info("GET called on /history resource");
        return debitCreditService.getAccountHistory();
    }
}
