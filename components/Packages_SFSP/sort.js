// import styles from "../../styles/stylesort.module.css";

// const Sort = (props) => {
// 	const { sort, setSort, search } = props;
// 	const onSelectChange = ({ currentTarget: input }) => {
// 		setSort({ sort: input.value, order: sort.order });
// 	};

// 	const onArrowChange = () => {
// 		if (sort.order === "asc") {
// 			setSort({ sort: sort.sort, order: "desc" });
// 		} else {
// 			setSort({ sort: sort.sort, order: "asc" });
// 		}
// 	};

// 	return (
// 		<div >
			
// 			<div className="list-results d-flex align-items-center justify-content-between">
// 				<div className="list-results-sort"  >
// 					{/* Result Shown For {search} */}
// 				</div>
// 				<div className="click-menu d-flex align-items-center justify-content-between">
// 					<div className="sortby d-flex align-items-center justify-content-between ml-2">
// 						<select onChange={onSelectChange} defaultValue={sort?.sort}>
// 							<option value="" >Sort By</option>
// 							<option value="price">Price</option>
// 						</select>
// 					</div>
// 					<button className={styles.arrow_btn} onClick={onArrowChange}>
// 						<p className={styles.up_arrow}>&uarr;</p>
// 						<p className={styles.down_arrow}>&darr;</p>
// 					</button>
// 				</div>
// 			</div>


// 		</div>


// 	);
// };

// export default Sort;



import styles from "../../styles/stylesort.module.css";

const Sort = (props) => {
	const { sort, setSort, obj, setObj } = props;
	const onSelectChange = ({ currentTarget: input }) => {
		setSort({ sort: input.value, order: sort.order });
	};

	const onArrowChange = () => {
		if (sort.order === "asc") {
			setSort({ sort: sort.sort, order: "desc" });
			const sorted = [...obj].sort((a, b) => a.web_pack_price - b.web_pack_price);
			setObj(sorted);
		} else {
			setSort({ sort: sort.sort, order: "asc" });
			const sorted = [...obj].sort((a, b) => b.web_pack_price - a.web_pack_price);
			setObj(sorted);
		}
	};

	return (
		<div >
			<div className="list-results d-flex align-items-center justify-content-between">
				<div className="list-results-sort"  >
					{/* {/ Result Shown For {search} /} */}
				</div>
				<div className="click-menu d-flex align-items-center justify-content-between">
					{/* <div className="sortby d-flex align-items-center justify-content-between ml-2">
						<select onChange={onSelectChange} defaultValue={sort?.sort}>
							<option value="" >Sort By</option>
							<option value="web_pack_price">Price</option>
						</select>
					</div> */}
					<button className={styles.arrow_btn} onClick={onArrowChange}>
						<p className={styles.up_arrow}>&uarr;</p>
						<p className={styles.down_arrow}>&darr;</p>
					</button>
				</div>
			</div>


		</div>


	);
};

export default Sort;