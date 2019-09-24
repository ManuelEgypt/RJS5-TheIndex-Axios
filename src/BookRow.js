import React from "react";

function BookRow(props) {
  const book = props.book;
  const author = props.author;
  return (
    <tr>
      <td>{book.title}</td>
      <td>
        {book.authors.map(author => (
          <div>{author.name}</div>
        ))}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
