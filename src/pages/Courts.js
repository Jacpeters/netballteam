const Court = () =>  {
	
	constructor(props) {
		super(props);
		this.state = {
		  Name: "Default Name",
		  Description: "Default Description",
		  Rating: 5
	};

	return (
	<div>
	<button className="square" onClick={function() { console.log('click'); }}>
		{this.props.value}
	</button>
	</div>
	)
}

const ListOfCourts = () =>  {

	renderCourt(){
		return <Court value={i} />;
	}

	render() {
	  return (
		<h1>Courts</h1>
		<p>This is a Courts page. Hello there, user!</p>
		<Wrapper>
			<p>A list of courst is provided below, check it out</p>
			<div className="CourtList">
				{this.renderCourt(0)}
				{this.renderCourt(1)}
				{this.renderCourt(2)}
			</div>
		</Wrapper>
	  )
	}
}

export default ListOfCourts