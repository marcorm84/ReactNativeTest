import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import {fetchData} from './actions'

class SuperheroesList extends Component {
	constructor() {
	    super();
	    this.state ={
	      status:false
	    }
	}

	componentWillMount() {
		this.props.fetchData()
	}

	getTvShows() {
		const {dataTvMaze} = this.props
		return dataTvShow = dataTvMaze.data.map((tv, key) => {
			return <Text key={key}>{tv.show.name}</Text>
		})
	}

	showHideTextComponentView = () => {
	 
	  if(this.state.status == true)
	  {
	    this.setState({status: false})
	  }
	  else
	  {
	    this.setState({status: true})
	  }
	}

	render() {
		return (
			<View>
				<Button
				  onPress={this.showHideTextComponentView}
				  title="Cargar data"
				  color="#841584"
				/>
				<View>
					{this.props.dataTvMaze.isFetching}
					{
						(this.props.dataTvMaze.data.length && this.state.status) ?
							this.getTvShows()
						: null
					}
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {dataTvMaze: state.dataReducer}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchData())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList)