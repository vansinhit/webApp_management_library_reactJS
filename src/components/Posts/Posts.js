import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableContainer, TableHead, TableRow, CircularProgress} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import {deletePost} from '../../actions/posts'
import useStyles from './styles';
import { StyledTableCell, StyledTableRow } from './font.js'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    !posts.length ? <CircularProgress /> : (
      <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        
        <TableHead>
          <TableRow>
            <StyledTableCell>AUTHOR</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>
            <StyledTableCell align="right">TITLE</StyledTableCell>
            <StyledTableCell align="right">CATEGORY&nbsp;</StyledTableCell>
            <StyledTableCell align="right">ACTIONS&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {posts.map((post) => (
            <StyledTableRow key={post._id}>
              <StyledTableCell component="th" scope="row">
              {`Tác giả: ${post.creator}`}
              </StyledTableCell>
              <StyledTableCell align="right"><img src={post.selectedFile} alt="icon" height="64"/></StyledTableCell>
              <StyledTableCell align="right">{post.title}</StyledTableCell>
              <StyledTableCell align="right">{post.tags.map((tag) => `Thể Loại: ${tag} `)}</StyledTableCell>
              <StyledTableCell align="right">
              <UpdateIcon  onClick={() => setCurrentId(post._id)}>UPDATE</UpdateIcon>
              <DeleteIcon  onClick={() => dispatch(deletePost(post._id))}>DELETE</DeleteIcon>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      
      </Table>
    </TableContainer>
  )
  )
}

export default Posts;