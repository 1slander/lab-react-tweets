

function Action() {
  return (
    <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart" onClick={(e) =>{
            e.target.classList.toggle('active')
          }}></i>
          <i className="fas fa-share"></i>
        </div>
  )
}

export default Action;