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
    this.removeLinkCurrent();
    this.addLinkCurrent('services');
    this.scrollTo({
      anchor: '#services', 
      offset: 300
    });
  },

  works: function() {
    this.removeLinkCurrent();
    this.addLinkCurrent('works');
    this.scrollTo({
      anchor: '#services'
    });
  },

  worksShow: function(id) {
    var url = '/data/dialogs/works_show.html';
    this.openDialog(url);
    return this;
  },

  blog: function() {
    this.removeLinkCurrent();
    this.addLinkCurrent('blog');
    this.scrollTo({
      anchor: '#blog', 
      offset: -1
    });
  },

  contacts: function() {
    this.removeLinkCurrent();
    this.addLinkCurrent('contacts');    
    this.scrollTo({
      anchor: '#contacts', 
      offset: -1
    });
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

  removeLinkCurrent: function() {
    $('.menu_i_a__current').removeClass('menu_i_a__current');
  },

  addLinkCurrent: function(hash) {
    $('.menu_i_a[href="/#/' + hash + '/"]').addClass('menu_i_a__current');
  },

  scrollTo: function(options) {

    console.log(options);

    options.offset = options.offset || 0;

    var headerH = $('.header_inner').outerHeight();
    var destination = $(options.anchor).offset().top - (options.offset + headerH);

    $('html, body').animate({scrollTop: destination}, 500);
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