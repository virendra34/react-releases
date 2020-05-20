import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
// import Pokeball from '../pokeball.png';
// import {connect} from 'react-redux';

class Home extends Component{
    state = {
        series: [
            {
                "id":"man-fire-food-season-10",
                "thumbnail":"https://cdn.releases.com/img/image/dc7f6bc6-870e-48a0-8eaf-9cdcc2a1ceee.jpg/200",
                "title":"Man fire food season 10",
                "category":"TV SERIES",
                "source":"NETFLIX",
            },
            {
                "id":"married-at-first-side-couples",
                "thumbnail":"https://cdn.releases.com/img/image/742d9aee-e18e-4c3c-b82b-f7008d3c4ac0.jpg/200",
                "title":"Married at first side couples",
                "category":"TV SERIES",
                "source":"LIFETIME",
            },
            {
                "id":"at-home-with-amy-sedaris-season-3",
                "thumbnail":"https://cdn.releases.com/img/image/61a426d1-07d8-40d6-8a91-74fa7d4e6dc4.jpg/200",
                "title":"At home with Amy Sedaris Season 3",
                "category":"TV SERIES",
                "source":"TRUETV",
            },
            {
                "id":"ultimate-tag-season-1",
                "thumbnail":"https://cdn.releases.com/img/image/0de4c58f-dcfb-4749-b33f-f114c09f1bf4.jpg/200",
                "title":"Ultimate Tag Season 1",
                "category":"TV SERIES",
                "source":"NETFLIX",
            },
        ]
    };
    // componentDidMount(){
    //     axios.get('series')
    //         .then(res => {
    //             this.setState({
    //                 series:res.data.slice(0,10)
    //             });
    //         });
    // }
    render() {
        // const {series} = this.state;
        // console.log(this.props);
        const {series} = this.state;
        // console.log("SERIES",series);
        const postList = series.length ? (
            series.map((post, i) => {
                return(
                    // (console.log(i)),
                    // ({i % 4 === 0})? (<div className="row">):('')
                    <div className="col s3" key={post.id.length} style={{padding:"20px"}}>
                        <Link to={'series/'+post.id}>
                        <img src={post.thumbnail} alt={post.id}/>
                        <div className="card-content">
                            <span className="card-title red-text">{post.title}</span>
                            <br/>
                            <div className="" style={{display:"inline-flex"}}>
                                <div>{post.category}</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>{post.source}</div>
                            </div>
                        </div>
                        </Link>
                    </div>
                    // ({i % 4 === 0})? (</div>):('')
                )
            })
        ) : (
            <div className="center">No series yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                <div className="row">
                    {postList}
                </div>
            </div>
        );
    }
}
export default Home;