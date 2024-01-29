// IN PRODUCTION

import styles from "../../styles/styles.module.css";

const Pagination = ({ page, total, limit, setPage }) => {
	const totalPages = Math.ceil(total / limit);

	const onClick = (newPage) => {
		setPage(newPage + 1);
	};
	const navigateToPreviousPage = () => {
		if (page > 1) {
			setPage(page - 1)
		}
	}
	const navigateToNextPage = () => {
		if (page < totalPages)
			setPage(page + 1)
	}
	return (
		<div className={styles.container}>
			<div className="pagination-main text-center">
				<ul className="pagination">
					<li><a onClick={navigateToPreviousPage}
						hidden={page === 1}
						className={page > 1 ? styles.previous : styles.disabled} class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i> </a>
					</li>
				</ul>
			</div>&nbsp;&nbsp;
			{totalPages > 0 &&
				[...Array(totalPages)].map((val, index) => (
					<button
						onClick={() => onClick(index)}
						className={
							page === index + 1
								? `${styles.page_btn} ${styles.active}`
								: styles.page_btn
						}
						key={index}
					>
						{index + 1}
					</button>
				))}

			<div className="pagination-main text-center">
				<ul className="pagination">
					<li><a onClick={navigateToNextPage}
						hidden={page >= totalPages}
						className={
							page >= totalPages
								? styles.disabled : styles.next} class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Pagination;


// TESTING 2

// import styles from "../styles/styles.module.css";




// const Pagination = ({ page, total, limit, setPage }) => {
// 	const totalPages = Math.ceil(total / limit);

// 	const onClickPage = (pageNo) => {
// 		setPage(pageNo);
// 	}

// 	const navigateToPreviousPage = () => {
// 		if (page > 1) {
// 			setPage(page - 1)
// 		}
// 	}

// 	const navigateToNextPage = () => {
// 		if (page < totalPages)
// 			setPage(page + 1)
// 	}

// 	const handleOnClick = (index) => {
// 		let pageNo = 0;
// 		if (page > 1) {
// 			pageNo = page - 4 + index;
// 			console.log(pageNo);
// 			onClickPage(pageNo);
// 		}
// 		else {
// 			onClickPage(index + 1);
// 		}
// 	}

// 	return (
// 		<div className={styles.container}>
// 			<div className="pagination-main text-center">
// 				<ul className="pagination">

// 					<li><a onClick={navigateToPreviousPage}
// 						disabled={page === 1}
// 						className={page > 1 ? styles.previous : styles.disabled} class="prev"><i class="fa fa-arrow-left" aria-hidden="true"></i> </a>
// 					</li>
// 				</ul>
// 			</div>&nbsp;&nbsp;
// 			{totalPages > 0 &&
// 				[...Array(5)].map((val, index) => (
// 					<button
// 						onClick={() => handleOnClick(index)}
// 						className={
// 							page === index + 1 || (page > 5 && page === page - 4 + index)
// 								? `${styles.page_btn} ${styles.active}`
// 								: styles.page_btn
// 						}
// 						key={index}
// 					>
// 						{page - 4 > 0 ? page - 4 + index : index + 1}
// 					</button>
// 				))}

// 			<div className="pagination-main text-center">
// 				<ul className="pagination">
// 					<li><a onClick={navigateToNextPage}
// 						disabled={page >= totalPages}
// 						className={
// 							page >= totalPages ? styles.disabled : styles.next} class="next"><i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default Pagination;