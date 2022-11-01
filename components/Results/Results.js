import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move';

function Results({results}) {
  return (
    <FlipMove className="my-5 px-2 sm:grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:flex flex-wrap justify-center">{results.map(result=><Thumbnail key={result.id} result={result}/>)}</FlipMove>
  )
}

export default Results