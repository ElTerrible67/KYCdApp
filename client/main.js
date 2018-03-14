import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    var template = Template.instance();
    web3.eth.getBalance("0x789d63800D3426565F048b7bBcc1a0e84d55567E",
    function (err, res){
    	TemplateVar.set(template, "counter" , res);
    })
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
