//****************************************************************************************************
//
// .. APPLICATION
//
//****************************************************************************************************
window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Router: {}
};



//****************************************************************************************************
//
// .. ROUTER
//
//****************************************************************************************************
App.Router = Backbone.Router.extend({
  
  initialize: function() {
    Backbone.history.start();
  },

  routes: {
    'services(/)' : 'services',
    'works(/)'    : 'works',
    'works/:id(/)': 'worksShow',
    'blog(/)'     : 'blog',
    'contacts(/)' : 'contacts',
    'order(/)'    : 'order'
  },

  services: function() {
    this.scrollTo({
      anchor: '#services',
      offset: 340
    });
  },

  works: function() {
    this.scrollTo({anchor: '#works'});
  },

  worksShow: function(id) {
    var url = '/data/dialogs/works_show.html';
    this.openDialog(url);
    return this;
  },

  blog: function() {
    this.scrollTo({
      anchor: '#blog',
      offset: -1
  });
  },

  contacts: function() {
    this.scrollTo({anchor: '#contacts'});
    setContactsHeight();
  },

  order: function() {
    var url = '/data/dialogs/order.html';
    this.openDialog(url);
    return this;
  },

  openDialog: function(url) {
    $.arcticmodal('close');
    $.arcticmodal({
      type: 'ajax',
      url: url,
      beforeOpen: function() {
        $('.header__sticky').find('.header_phone').css({right: 40 + getBrowserScrollSize().width});
        $('.header__sticky').find('.nav').css({marginRight: getBrowserScrollSize().width});
      },
      afterClose: function() {
        $('.header__sticky').find('.header_phone').css({right: 40});
        $('.header__sticky').find('.nav').css({marginRight: ''});
      }
    });
    return false;
  },

  scrollTo: function(options) {
    options.offset = $('.header_inner').outerHeight() + options.offset || $('.header_inner').outerHeight();
    var destination = $(options.anchor).offset().top - options.offset;
    $('html, body').animate({scrollTop: destination}, 300);
  }

});



//****************************************************************************************************
//
// .. VIEWS
//
//****************************************************************************************************
App.Views.OrderDialog = Backbone.View.extend({

  el: '#dialog-html',

  events: {
    'click #order-submit': 'renderMessage',
    'click #order-close': 'dialogClose'
  },

  initialize: function() {
    this.renderForm();
  },

  renderForm: function() {
    this.$el.html(_.template($('#order-form').html())());

    $('.js-form').customForm();
    $('.form_tx_tag.form_tx_tag__phone').mask('+7 (999) 999-99-99');

    //
    // .. ТУТ ОБРАБОТЧИК СОБЫТИЯ !!!!!!
    //

    return false;
  },
  
  renderMessage: function() {
    this.$el.html(_.template($('#order-complete').html())());
    return false;
  },

  dialogClose: function() {
    $.arcticmodal('close');
    location.href = '/#/';
  }

});