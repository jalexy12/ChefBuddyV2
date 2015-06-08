var Ingredient = React.createClass({

	render: function(){
		return(<span>this.props.ingredient.name</span>)
	}
})

var IngredientList = React.createClass({

	render: function(){
		var ingredients = this.props.ingredients.map(function(ingredient){
			return <li><Ingredient ingredient={ingredient} /></li>
		})
		return(
		<div>
		  <ul>
			{ingredients}
		  </ul>
		</div>
			)
	}
})

var Dish = React.createClass({

	getInitialState: function(){
		return {
			dishes: []
		}
	},

	deleteDish: function (dish){
		console.log(this.state.dishes[dish])
		var newDishes = _.filter(this.state.dishes, function(oldDish){
			return oldDish.id != dish.id
		})
		console.log(newDishes)
		return this.setState({
			dishes: newDishes
		})
	},

	getDishes: function(){
		var that = this
		$.get('/dishes.json	', function(data){
			that.setState({
				dishes: data
			})
		})
	},

	componentDidMount: function(){
		this.getDishes();	
	},

	render: function(){
		var that = this;
		var dishes = this.state.dishes.map(function(dish, i){
			return <tr>
					  <td> {dish.name} </td>
					  <td> {dish.price} </td>
					  <td> {dish.in_stock.toString()} </td>
					  <td><a className="btn waves-effect" onClick={that.deleteDish.bind(this, i)}> Delete Dish</a></td>	
				   </tr>
		})
		return(
			<table>
			  <thead>
			    <tr>
			      <th>Name</th>
			      <th>Price</th>
			      <th>In stock</th>
			      <th colSpan="3"></th>
			    </tr>
			  </thead>
			  <tbody>
			    {dishes}
			  </tbody>
			 </table>

			)
	}


})