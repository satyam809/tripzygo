

const Search = (props) => {
	const { setSearch, onPressEnter, getAllPackages } = props;

	return (
		<>
			<input
				type="text"
				className="searchTerm1"
				placeholder="Search Destinations"
				onChange={({ currentTarget: input }) => setSearch(input.value)}
				onKeyDown={onPressEnter}
			/>
			<form className='search1' onClick={getAllPackages}>
				{/* <BsSearch color="white" /> */}
			</form>
		</>
	);

};

export default Search;
