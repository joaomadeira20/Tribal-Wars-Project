import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import api from '../services/api'
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import UpdateIcon from '@material-ui/icons/Update';
import { Link } from 'react-router-dom'

import { Response } from 'express'
interface Aldeia {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  continente: string
  username: string
  // user: {
  //   id: number
  //   name: string
  //   email: string
  // }

}
interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Aldeia;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Nome' },
  { id: 'latitude', numeric: true, disablePadding: false, label: 'Latitude' },
  { id: 'longitude', numeric: true, disablePadding: false, label: 'Longitude)' },
  { id: 'continente', numeric: true, disablePadding: false, label: 'Continente' },
  { id: 'username', numeric: false, disablePadding: false, label: 'Username' },

];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Aldeia) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property: keyof Aldeia) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
    title: {
      flex: '1 1 100%',
    },
  }),
);

interface EnhancedTableToolbarProps {
  numSelected: number;
}
function teste() {
  console.log('oi')


}
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected 
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Aldeias
          </Typography>
        )}


      <Tooltip title="aa">


        <Link to="/teste" className="enter-app">

          <FilterListIcon>
          </FilterListIcon>
        </Link>


      </Tooltip>
      {numSelected == 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="filter list">
            <FilterListIcon>
              <Link to={`teste/${numSelected}`} className="enter-app">
                <h1>ir</h1>
              </Link>
            </FilterListIcon>
          </IconButton>
        </Tooltip>

      ) : numSelected == 1 ? (
        // <Tooltip title="Filter list">
        //   <IconButton aria-label="filter list">
        //     <FilterListIcon />
        //   </IconButton>
        // </Tooltip>
        <Tooltip title="Update">
          <IconButton aria-label="update">
            <UpdateIcon />
          </IconButton>
        </Tooltip>
      ) :
          (
            // <Tooltip title="Filter list">
            //   <IconButton aria-label="filter list">
            //     <FilterListIcon />
            //   </IconButton>
            // </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          )
      }
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Aldeia>('name');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedId, setSelectedId] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [aldeias, setAldeias] = useState<Aldeia[]>([]);
  let rows: Aldeia[] = [


  ]
  useEffect(() => {
    api.get('aldeias').then(response => {
      rows = []
      setAldeias(response.data);

    });

  }, []);
  createData(aldeias)
  function createData(aldeiasz: Aldeia[]) {
    aldeiasz.map(aldeia => {

      rows.push({
        id: aldeia.id,
        name: aldeia.name,
        latitude: aldeia.latitude,
        longitude: aldeia.longitude,
        continente: aldeia.continente,
        username: aldeia.username
        // user: {
        //   id: aldeia.user.id,
        //   name: aldeia.user.name,
        //   email: aldeia.user.email

        // }
      })
    })


  }
  // console.log(rows.length)



  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Aldeia) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
    setSelectedId([])
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string, id: number) => {
    const selectedIndex = selected.indexOf(name);
    const selectedIndex2 = selectedId.indexOf(id.toString());
    
    let newSelected: string[] = [];
    let newSelectedId: string[] = []
    // console.log(selectedIndex)
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      
      // console.log("1a"+newSelectedId) 
      // console.log(selected)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
     
      // console.log("2a"+newSelectedId)
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
     
      // console.log("3a"+newSelectedId)
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
        
      );
      
     
    }
    if (selectedIndex2 === -1) {
     
      newSelectedId = newSelectedId.concat( selectedId, id.toString());
      // console.log("1a"+newSelectedId) 
      // console.log(selected)
  
    } else if (selectedIndex2 === 0) {
      
      newSelectedId = newSelectedId.concat(selectedId.slice(1));
      // console.log("2a"+newSelectedId)
    } else if (selectedIndex2 === selectedId.length - 1) {
      
      newSelectedId = newSelectedId.concat(selectedId.slice(0, -1));
    
      // console.log("3a"+newSelectedId)
    } else if (selectedIndex2 > 0) {
      
      
      newSelectedId = newSelectedId.concat(
        selectedId.slice(0, selectedIndex2),
        selectedId.slice(selectedIndex2 + 1),
      );
      
    }
    
    setSelected(newSelected);
    setSelectedId(newSelectedId);
    
    
  };
  
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name, row.id)}
                      role="checkbox"

                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.latitude}</TableCell>
                      <TableCell align="right">{row.longitude}</TableCell>
                      <TableCell align="right">{row.continente}</TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right">{



                        <Link to={`teste/${row.id}`} className="enter-app">

                          <FilterListIcon>
                          </FilterListIcon>
                        </Link>



                      }</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">

            <Link to={`teste/${selectedId}`} className="enter-app">
              <DeleteIcon />
             
            </Link>

          </IconButton>
        </Tooltip>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
