import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, seeImages, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesDetails
  const activeImage = isActive ? 'thumbnail' : 'active'

  const getImages = () => {
    seeImages(id)
  }

  return (
    <li className="images-list">
      <button type="button" className="button" onClick={getImages}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
