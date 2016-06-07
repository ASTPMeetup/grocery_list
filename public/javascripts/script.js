$(document).ready(function(){
  var ItemsModel = Backbone.Model.extend({
          urlRoot: '/items',
          idAttribute: '_id'
  });

  // var item1 = new ItemsModel({name: 'poptarts', quantity: 3});
  // item1.save();
  // console.log(item1);
  //
  // var item2 = new ItemsModel({name: 'bacon', quantity: 10});
  // item2.save();
  // console.log(item2);
  //
  // var item3 = new ItemsModel({name: 'nachos', quantity: 2});
  // item3.save();
  // console.log(item2);

  var ItemsCollection = Backbone.Collection.extend({
    model: ItemsModel,
    url: '/items'
  });

  var ItemsView = Backbone.View.extend({
    el: '<div></div>',

    template: _.template('\
      <ul>\
      <% items.forEach(function(item) { %>\
        <li><%= item.get("name") %> (<%= item.get("quantity") %>)</li>\
      <% }) %>\
      </ul>\
    '),

    initialize: function(options){
      console.log('TaskView working', options);
      this.listenTo(this.collection, 'update', this.render);
    },

    render: function() {
      $(this.el).html(this.template({ items: this.collection }));
      return this;
    }
  });

  var itemsCollection = new ItemsCollection();

  itemsCollection.fetch({
      success: function(items){
        console.log('collection fetch working', items);
        var itemsView = new ItemsView({collection: itemsCollection});
        $('#app').html(itemsView.render().el);
      }
  });

  $('#form').submit(function(e){
    e.preventDefault();
    var $form = $(e.currentTarget);
    var name = $form.find('[name="name"]').val();
    var quantity = $form.find('[name="quantity"]').val();
    var item4 = new ItemsModel({name: name, quantity: quantity});
    item4.save();
    itemsCollection.add(item4);
  });
});
