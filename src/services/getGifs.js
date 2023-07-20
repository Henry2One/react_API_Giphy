
export default async function getGifs({ keyword = 'programming' } = {} ){

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=dJk4eCLMC0nGszKynchjEJVNUKHxHfj7&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    return await fetch(apiURL)
    .then( res => res.json())
    .then( response => {
      const { data } = response
      const gifs = data.map( image => {
        const { images, title, id} = image
        const { url } = images.fixed_height_downsampled
        return { title, id, url }
    })
      return gifs
    })
}