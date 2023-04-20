import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";

import CustomLoader from "./CustomLoader";

const ListItems = () => {
  const { posts_data_loading: postsDataLoading, posts_data: postsData } =
    useSelector((state) => state.home);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;

  return (
    <>
      {postsDataLoading ? (
        <CustomLoader />
      ) : (
        <Stack
          sx={{
            mb: "5rem",
          }}
          spacing={2}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Title</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {postsData.slice(start, end).map((row, index) => (
                  <TableRow
                    key={index + ""}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            boundaryCount={2}
            style={{
              marginLeft: "auto",
            }}
            count={Math.ceil(postsData.length / itemsPerPage)}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      )}
    </>
  );
};

export default ListItems;
