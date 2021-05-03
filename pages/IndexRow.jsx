import Link from 'next/link';

const IndexRow = props => (
  <div className="flex flex-row shadow-lg mb-4" key={props.ID}>
    <div className="hidden sm:block flex-none w-24 h-24 lg:h-auto text-center text-white bg-gray-200 p-2 rounded-l-lg">
      <span className="text-5xl text-gray-400 ">
        <i className="far fa-sticky-note mt-3 lg:mt-1"></i>
      </span>
    </div>
    <div className="flex-grow bg-white px-4 py-2 rounded-r-lg">
      <div className="text-gray-900 font-bold text-2xl mb-1">
        {props.title}
      </div>
      <p className="text-gray-700 text-base">Date : {props.date} , ID : {props.id} 
      </p>
      <p className="text-gray-700 text-base">Category : {props.category_name}
      </p>
    </div>    
  </div>
);
export default IndexRow;
