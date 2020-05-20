import React, {Component} from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';


class Series extends Component{
    state = {
        Series: [
            {
                "id":"man-fire-food-season-10",
                "thumbnail":"https://cdn.releases.com/img/image/dc7f6bc6-870e-48a0-8eaf-9cdcc2a1ceee.jpg/200",
                "title":"Man fire food season 10",
                "category":"TV SERIES",
                "source":"NETFLIX",
                "description":"Earlier this year, Chef Roger Mooking hit the road to meet pit masters, chefs and home cooks using the most innovative and outrageous ways to cook with fire. On Wednesday, May 20th at 9:00pm ET/6:00pm PT, viewers can escape from their at home quarantine and join Roger on Man Fire Food, as he travels across the country discovering how smokers, fire pits, and rigs are used to serve up one-of-a-kind dishes that sizzle the taste buds.",
            },
            {
                "id":"married-at-first-side-couples",
                "thumbnail":"https://cdn.releases.com/img/image/742d9aee-e18e-4c3c-b82b-f7008d3c4ac0.jpg/200",
                "title":"Married at first side couples",
                "category":"TV SERIES",
                "source":"LIFETIME",
                "description":"truTV invites guests back into the rich, imaginative - and slightly deranged - world of At Home with Amy Sedaris for the 10-episode third season of the Emmy-nominated variety sketch series. Returning on Wednesday, May 20 at 10:00pm ET/PT, the show was created by Amy Sedaris and showcases her unique, distinctive brand of hospitality each week. This season, Sedaris is joined by a formidable group of guest stars, including: Laura Benanti, Arturo Castro, Michael Cera, Ann Dowd, Rachel Dratch, Bridget Everett, Ana Gasteyer, David Alan Grier, Josh Hamilton, Darrell Hammond, Jackie Hoffman, Richard Kind, David Koechner, Jane Krakowski, Debi Mazar, Michael McKean, Chris Parnell, Tim Robinson, Paul Rudd, James Saito, Peter Serafinowicz, Michael Shannon, Jason Sudeikis, Justin Theroux, and Matt Walsh.",
            },
            {
                "id":"at-home-with-amy-sedaris-season-3",
                "thumbnail":"https://cdn.releases.com/img/image/61a426d1-07d8-40d6-8a91-74fa7d4e6dc4.jpg/200",
                "title":"At home with Amy Sedaris Season 3",
                "category":"TV SERIES",
                "source":"TRUETV",
                "description":"A self-shot series following the highs, lows, humor, drama and domestic life of fan favorite Married at First Sight couples from ten seasons on the air. Following the couples ongoing stories in real time, in the completely raw and self-shot show, the couples invite viewers into their homes via mounted cameras, diary cams and virtual group chats. The series will also feature never-before-seen footage captured by couples, revealing deeply intimate access to their lives, including births of their MAFS babies, and other personal highlights of their lives, since their time on their seasons. The show will also bring the couples together virtually as they discuss their own hopes, dreams and futures. Six episodes have been ordered to premiere beginning May 20 at 8pm ET/PT on Lifetime.",
            },
            {
                "id":"ultimate-tag-season-1",
                "thumbnail":"https://cdn.releases.com/img/image/0de4c58f-dcfb-4749-b33f-f114c09f1bf4.jpg/200",
                "title":"Ultimate Tag Season 1",
                "category":"TV SERIES",
                "source":"NETFLIX",
                "description":"Hosted by football superstars and brothers JJ, TJ and Derek Watt, ULTIMATE TAG is a high-octane physical competition show based on the classic playground game of chase.",
            },
        ]
    };
    componentDidMount(){
        let id = this.props.match.params.Series_id;
        // console.log('series_id', this.props.match.params.Series_id, id);
        // axios.get('series/'+id)
        //     .then(res => {
        //         this.setState({
        //             Series: res.data
        //         });
        //     });
        // console.log("series by id", series);
    }
    handleClick = () => {
        if(window.confirm("Really?")){
            this.props.deleteSeries(this.props.Series.id);
            this.props.history.push('/');
        }
    }
    render(){
        // console.log(this.props.series);
        let seriesById = this.state.Series.filter((post) => {
            return post.id === this.props.match.params.Series_id;
        });
        seriesById = seriesById[0];
        const Series = seriesById ?
        (
            <div className="Series">
                <div className="center">
                <img src={seriesById.thumbnail} alt={seriesById.id}/>
                </div>
                <h4 className="center">{seriesById.title}</h4>
                <p>{seriesById.description}</p>
                {/* <button className="btn grey" onClick={this.handleClick}>
                    Delete Series
                </button> */}
            </div>
        ) : (
            <div className="center">Loading Series...</div>
        );
        return(
            <div className="container" style={{padding:"20px"}}>
                {Series}
            </div>
        )
    }

}
export default Series;