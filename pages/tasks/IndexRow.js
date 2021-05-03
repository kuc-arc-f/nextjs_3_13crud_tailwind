import Link from 'next/link';
//
const TaskIndexRow = props => (
  <tr className="bg-white">
    <td className="border px-4 py-2">
      <div className="row_title_wrap  p-2">
        <Link href={`/tasks/${props.id}`}>
        <a className="my-2"><h3 className="h3_title">{props.title}</h3>
        </a>
        </Link>
        ID: {props.id}  
      </div>    
    </td>
    <td className="border px-4 py-2">
      <div className="row_action_wrap text-right p-2">
        <Link href={`/tasks/edit/${props.id}`}>
          <a className="btn-outline-blue">Edit</a>
        </Link>    
      </div>
    </td>
  </tr>
);
export default TaskIndexRow;
