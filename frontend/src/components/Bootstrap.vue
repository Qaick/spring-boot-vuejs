<template>
  <div class="bootstrap">
    <h1>AgileEngine test task</h1>
    <p></p>
    <b-btn variant="success" @click="callDebitApi(10)" id="btnCallDebit">Debit 10</b-btn>
    <b-btn variant="success" @click="callCreditApi(20)" id="btnCallCredit">Credit 20</b-btn>
    <p></p>
    <h4>Account changes history:
    </h4>

    <p></p>
    <p v-if="history && history.length">
      <div v-for="(historyItem, index) of history">
        <li>
          <b-btn v-b-toggle="'collapse_inner_' + index" size="sm" :id="'btnHttpHeaders-'+index" variant="warning">Item:
            {{ index }}, change: {{ historyItem.change }}
          </b-btn>
          <b-collapse :id="'collapse_inner_'+index" class="mt-2">
            <b-card>Change: {{ historyItem.change }}, Result: {{ historyItem.result }}</b-card>
          </b-collapse>
        </li>
        <p></p>
      </div>
    </p>
  </div>
</template>

<script>
import api from './backend-api'

export default {
  name: 'bootstrap',

  data () {
    return {
      history: [],
      errors: []
    }
  },
  methods: {
    callDebitApi(amount) {
      api.debit(amount).then(response => {
        console.log(response);
      })
      .catch(e => {
        this.errors.push(e)
      })
      this.callHistoryApi();
    },
    callCreditApi(amount) {
      api.credit(amount).then(response => {
        console.log(response);
      })
      .catch(e => {
        alert(e)
        this.errors.push(e)
      })
      this.callHistoryApi();
    },
    callHistoryApi() {
      api.getHistory().then(response => {
        this.history = response.data.slice().reverse();
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-bottom: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#btnCallCredit {
  margin-left: 15px;
}
</style>
