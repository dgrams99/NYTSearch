import PropTypes from 'prop-types';
import React from 'react';

export const DashBoard = ({type, query, queryObject}) => {
	
	let _type, _query;

	const submit = (e) => {
		e.preventDefault();
		queryObject({
			type: _type.value,
			query: _query.value
		});
	};

	const categoryChange = () => {
	}

	return(
		<nav aria-label="Book search form" id="book-form">
		<header>
<div className="jumbotron text-center">
			<h1> Book Search</h1>
			</div>	
		</header>

		<form onSubmit={submit} className="text-center ">
			<div className="form-group">
			<select aria-label="Drop-down list for book search category" 
						  defaultValue={type} 
						  ref={option => _type = option}>
				<option onClick={() => categoryChange()} value="q=intitle:">Title</option>
				<option onClick={() => categoryChange()} value="q=inauthor:">Author</option>
				<option onClick={() => categoryChange()} value="q=subject:">Subject</option>
			</select>
			<input aria-label="Book search box" 
				   className="form-control"
			       type="text" 
			       defaultValue={query} 
			       ref={input => _query = input}
			       placeholder="Search a book"
			       autoFocus/>

			<input type="submit" value="Lets Find Something" className="btn btn-warning" />
			</div>
		</form>
		</nav>
	)
}

DashBoard.propTypes = {
	type: PropTypes.string,
	query: PropTypes.string
};