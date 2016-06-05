
  var itemsModel = Backbone.Model.extend({
          urlRoot: '/Item',
          idAttribute: '_id',
          name: '',
          quantity: ''
  });

  var item1 = new itemsModel({name: 'poptarts', quantity: 3});
  item1.save();
  console.log(item1);

  var item2 = new itemsModel({name: 'bacon', quantity: 10});
  item2.save();
  console.log(item2);

  var item3 = new itemsModel({name: 'nachos', quantity: 2});
  item3.save();
  console.log(item2);

  var ItemsCollection = Backbone.Collection.extend({
    model: itemsModel,
    url: '/Item'
  });

  var ItemsView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
      <ul>\
      <% items.forEach(function(item) { %>\
        <li><%= item.get("name") %></li>\
      <% }) %>\
      </ul>\
    '),

    initialize: function(options){
      console.log('TaskView working', options);
    },

    render: function() {
      $(this.el).html(this.template({ items: this.collection }));
      return this;
    }
  });

  var itemsCollection = new ItemsCollection([item1, item2, item3]);

  itemsCollection.fetch({
      success: function(items){
        console.log('collection fetch working', items);
        // var itemsView = new ItemsView({collection: itemsCollection});
        // $('#app').html(itemsView.render().el);
      }
  });
