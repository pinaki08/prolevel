import Pagination from "react-bootstrap/Pagination";

function Paginate() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev  />
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Paginate;
