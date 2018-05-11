import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends PureComponent {
  handleClick = event => {
    this.props.openModal(this.props);
  }
  render(){
    const {title, author, cover} = this.props;
    return(
      <div className = "Media" onClick={this.handleClick}>
        <div className = "Media-cover">
          <img className = "Media-image"
            src={cover}
            alt=""
            width={260}
            height={160}
          />
          <h3 className = "Media-title">{title}</h3>
          <p className = "Media-author">{author}</p>
        </div>
      </div>
    )
  }
}
Media.propTypes={
  cover:PropTypes.string,
  title:PropTypes.string.isRequired,
  author:PropTypes.string
}
export default Media;

/*class NombreComponente extends React.component {
render(){
return(
----Acá va todo el HTML que queremos devolver----
)
}
}*/
