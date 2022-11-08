import { Box, Pagination } from "@mui/material"
import { PaginationProps } from "./models";

export default function AppPagination({ itemsPerPage, totalItems, paginate }: PaginationProps) {
	const handleChange = (event: any, value: number) => {
		paginate(value);
	}

	return (
		<Box justifyContent={"center"} alignItems="center" display={"flex"}>
			<Pagination
				count={Math.ceil(totalItems / itemsPerPage)}
				color='primary'
				onChange={handleChange}
			/>
		</Box>
	)
}