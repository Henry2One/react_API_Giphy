
export default function Gif({title, url, id}){
    return (
        <div><img alt={ title } src={ url } key={ id } /> <h5>{ title }</h5> </div>
    )
}