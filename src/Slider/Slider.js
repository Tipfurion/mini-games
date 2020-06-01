import React from 'react'
import leftArrow from './img/arrow_left.svg'
import rightArrow from './img/arrow_right.svg'
import './slider.css'

//few less than css duration
const TRANSITION_DURATION = 450

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliderElements: [
                {
                    title: 'Tik-tak',
                    img: 'https://via.placeholder.com/600x250',
                },
                {
                    title: 'Chess',
                    img: 'https://via.placeholder.com/600x249',
                },
                {
                    title: 'Snake',
                    img: 'https://via.placeholder.com/600x248',
                },
            ],
            currentItemIndex: 0,
            element: null,
            flag: false,
        }
    }
    arrowClick = async (id) => {
        let direction = 0
        let nextIndex = 0
        if (id === 'left-arrow') {
            direction = -1
        } else {
            direction = 1
        }
        this.state.element.classList.add('slider-fade-in')
        nextIndex = this.state.currentItemIndex + direction
        if (nextIndex >= this.state.sliderElements.length) {
            nextIndex = 0
        }
        if (nextIndex < 0) {
            nextIndex = this.state.sliderElements.length - 1
        }
        await new Promise((resolve) => setTimeout(resolve, TRANSITION_DURATION))
        this.state.element.style.opacity = 0
        this.setState({ currentItemIndex: nextIndex })
        this.state.element.classList.remove('slider-fade-in')
        this.state.element.classList.add('slider-fade-out')
        await new Promise((resolve) => setTimeout(resolve, TRANSITION_DURATION))
        this.state.element.style.opacity = 1
        this.state.element.classList.remove('slider-fade-out')
    }

    render() {
        return (
            <div className="slider">
                <img
                    id="left-arrow"
                    className="slider-arrow"
                    src={leftArrow}
                    onClick={(e) => {
                        this.arrowClick(e.target.id)
                    }}
                ></img>
                <div className="slider-element">
                    <h2>{this.state.sliderElements[this.state.currentItemIndex].title}</h2>
                    <img src={this.state.sliderElements[this.state.currentItemIndex].img}></img>
                </div>

                <img
                    id="right-arrow"
                    className="slider-arrow"
                    src={rightArrow}
                    onClick={(e) => {
                        this.arrowClick(e.target.id)
                    }}
                ></img>
            </div>
        )
    }
    componentDidMount() {
        let el = document.querySelector('.slider-element')
        this.setState({ element: el })
    }
}

export default Slider
