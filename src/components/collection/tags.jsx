import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getTopTags, checkingToggle } from '../../actions/tags'
import { Badge } from './index'

class TagsGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount(){
        const { dispatch } = this.props
        dispatch(getTopTags());
    }

    colorByRank(rank){

        if (rank > 2000000)
            return "badge-veryhigh";
        if (rank > 1500000)
            return "badge-high";
        if (rank > 1000000)
            return "badge-medium";
        if (rank > 500000)
            return "badge-low";

        return "badge-verylow";
    }

    clickHandler(e, props){  
        const { dispatch } = this.props
        const newCheckedState = props.isChecked ? false : true;
        dispatch(checkingToggle(props._id, newCheckedState));

        if(this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <div className="tags-container">
            {
                this.props.topTags.map((tag, key) => {
                    return (
                        <Badge _id={tag._id} key={key} className={this.colorByRank(tag.songCounter)} name={tag.name} onClick={this.clickHandler} isChecked={tag.isChecked}> </Badge>
                    )
                })
            }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { topTags, error } = state.tags
    
    return {
        topTags,
        error
    }
}

export default connect(mapStateToProps)(TagsGallery);