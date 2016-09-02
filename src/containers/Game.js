import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { GridList } from 'material-ui/GridList';
import Card from '../components/card'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 612,
    height: 612,
    overflowY: 'auto',
    marginBottom: 0,
  },
};


class Game extends Component {
  renderCard(card, index) {
    return (
      <Card key={ index }
        index={ index } { ...card } />
      )
  }

  render() {
    const { cards } = this.props

    return (
      <div style={ styles.root }>
        <GridList cellHeight={ 150 } cols={ 4 } style={ styles.gridList }>
          { cards.map(this.renderCard.bind(this)) }
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flippedCards: state.cards.filter((card) => card.flipped),
    canFlip: (state.cards.filter((card) => card.flipped).length < 2),
    pairFlipped: (state.cards.filter((card) => card.flipped).length == 2),
  }
}

Game.propTypes = {
  cards: PropTypes.array.isRequired,
  flippedCards: PropTypes.array.isRequired,
  canFlip: PropTypes.bool.isRequired,
  pairFlipped: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, {})(Game)
