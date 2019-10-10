import React, { Component } from 'react';
import SingleDetail from './SingleDetail';
import  { connect } from 'react-redux';
import Moment from 'react-moment';
import { withRouter } from 'react-router-dom';
import Paginate from './paginate';
import { getAllCryptocurrencyDetails } from '../../stores/actions/cryptocurrency';
import Loaders from './loader'

export class Detail extends Component {
  state = {
    currentPage: 1,
  };

   componentDidMount() { 
     const { getDetails } = this.props
     getDetails()
  }

  handleChangePage(e) {
    const { id } = e.target
    const { currentPage } = this.state
    const { getDetails } = this.props

    if(id === 'next'){
      let next = parseInt(currentPage, 10) + 1
       if(next > 10){
         next = 1
       }
      getDetails(next)
      this.setState({
        currentPage: next
      })
    }else if (id === 'prev'){
      let prev = parseInt(currentPage, 10) - 1
      if(prev < 1){
       prev = 0
      }
      getDetails(prev)
      this.setState({
        currentPage: prev
      })
    } else {
      getDetails(id)
      this.setState({
        currentPage: id
      })
      
    }    
  }


  render() {
    const { details, loading } = this.props;
    const { currentPage } = this.state;
    return (
      <div className="main__body">
       {loading ? (<Loaders />) : (<ul className="details">
          {details.map(detail => (
            <SingleDetail
            key = {detail.id}
            name = {detail.name}
            sym = {detail.symbol}
            supply= {detail.total_supply}
            updated= {<Moment format="LLLL">
            {detail.quote.USD.last_updated}
               </Moment>}
            pchange1 = {detail.quote.USD.percent_change_1h}
            pchange2 = {detail.quote.USD.percent_change_24h}
            pchange3 = {detail.quote.USD.percent_change_7d}
            price= {detail.quote.USD.price}
            created={<Moment format="LLLL">
            {detail.quote.USD.date_added}
               </Moment>}
            rank = {detail.cmc_rank}
            />
          ))}
       </ul>)  }
        <div className="paginate-box">
        <Paginate items={10} changePage={(e) => this.handleChangePage(e)} page={parseInt(currentPage, 10)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.cryptocurrency.details,
  loading: state.cryptocurrency.isLoading
});
const mapDispatchToProps = {
  getDetails: getAllCryptocurrencyDetails,
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
