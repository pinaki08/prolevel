import moment from "moment";
import Table from "react-bootstrap/Table";

import { GoTriangleUp } from "react-icons/go";
import { IFrontdata } from "../../Pages/Home";

interface ITabledata {
  data: IFrontdata[];
}
function TableOne({ data }: ITabledata) {
  return (
    <Table striped bordered hover className = "tablescope" >
      <thead>
        <tr className = "tableStyle">
          <th>coments</th>
          <th>voteCount</th>
          <th>upvote</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: IFrontdata, index) => {
          return (
            <tr key={index}>
              <td>{item?.num_comments}</td>
              <td>{item?.points}</td>
              <td>
                {item?.upvote}
                <GoTriangleUp />{" "}
              </td>
              <td>
                <b>{item?.title} </b>({item?.url}) by
                <b> ({item.author})</b>
                {moment().startOf("day").fromNow()}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableOne;
