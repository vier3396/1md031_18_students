'use strict';
var socket = io();

/*var vm2 = new Vue({
  el: '#burgerMenu',
  data: {
        menu: menuArray



  }
});*/

var vm3 = new Vue({
  el:'#burgerMenu',
  data:{
    menu: food
  }
});

var vm = new Vue({
    el: '#mapButton',
    data: {  isHidden:false,
             contact: contactArray,
             ordToDisp: ordDisp,
             cord: {x: 0, y: 0},
             lastorder: 0,


    },
    created: function () {
      socket.on('initialize', function (data) {
        this.orders = data.orders;
      }.bind(this));

      socket.on('currentQueue', function (data) {
        this.orders = data.orders;
      }.bind(this));
    },



    methods: {
      getNext: function () {
      this.lastorder = this.lastorder +1 ;
      console.log(this.lastorder);
      return this.lastorder;
},
        addOrder: function(event) {
         var contactArray = contactInfo();
         this.contact = contactArray;
         this.isHidden = true;
         var ordDisp = getBurgers();
         this.ordToDisp = ordDisp

        console.log(contactArray);
        socket.emit("addOrder", {orderId: this.getNext(),details: this.cord ,orderItems: this.ordToDisp, personalInformation: this.contact });

          },
            //Add some functionality
        displayOrder: function(event) {
          var offset = {x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top};

          this.cord = { x: event.clientX - 10 - offset.x,
                  y:event.clientY - 10 - offset.y }

                      },


    }
  });
