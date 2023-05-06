import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  toggleAnswer = () => {
    this.setState(prevState => ({isAnswerShow: !prevState.isAnswerShow}))
  }

  render() {
    const {faqsDerails} = this.props
    console.log(faqsDerails)
    const {questionText, id, answerText} = faqsDerails
    const {isAnswerShow} = this.state

    const iconUrl = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconAltText = isAnswerShow ? 'minus' : 'plus'

    return (
      <li className="item">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button className="button" type="button" onClick={this.toggleAnswer}>
            <img src={iconUrl} alt={iconAltText} className="icon" />
          </button>
        </div>
        {isAnswerShow && (
          <div className="answer-container">
            <hr className="line" />
            <p className="answer-text">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
