import React, {Component} from 'react';
import Iframe from 'react-iframe';


class BlockRightDescriptionGraphicSingle extends Component{

    constructor(props){
        super(props);
        this._altdesc_ = this.props.altdescription;
        this._title_= this.props.title;
        this._list_=this.props.list;
        this._imglist_=this.props.imglist;
        this._maxindex_=this._list_.length;
        this.state={
            active:0
        };

    }
    componentDidMount(){
        this.interval = setInterval(() => {var i=this.state.active;
            i++;
            i=this._maxindex_<=i? 0:i;
            this.setState(
                {active:i}
            );}, 3000);

    }

    handleClick(i){
        this.setState(
            {active:i}
        );
        clearInterval(this.interval);
    }
    
    render(){
        const imgurl = this._imglist_[this.state.active];
        const alt = this._altdesc_;
        const title = this._title_;
        var activeindex = this.state.active;
        var bool=false;
        if (typeof(this.props.children) === "undefined") bool=true;
        console.log(bool);
        const list=this._list_.map((item,i)=> <Listitemsproperly item={item} active={activeindex===i} onClick={() => this.handleClick(i)} large={bool}/>);
        const graphics = (imgurl.includes("youtube.com")?<YoutubeVideo imgurl={imgurl} alt={alt}></YoutubeVideo> : <Img imgurl={imgurl}></Img>);
        return(
            <div className="container-fluid mt-0 mb-0 pt-3 pb-3 block-height d-flex align-items-center">
                <div className="container">
                    <div className="row block-row-height">
                        <div className="col-12 col-md-6 description mt-4 mt-md-0 text-dark pr-5">
                            <div className="servicedescriptiontitle text-center my-1 section-title"><h1 className="oswald-font-style">
                            {title}</h1></div>
                            <div className="mt-3">
                                <div className="servicedescriptionlist ml-2 my-1">
                                    <ul className="list-unstyled roboto-font-style">
                                        <li>
                                            <h4> {this.props.children} </h4>
                                        </li>
                                        <ul className="list-inline mx-3 mt-5">
                                        {list}
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 align-items-center text-center text-dark justify-content-center d-flex align-items-center">
                            <img className="graphics" src={imgurl} style={{maxWidth: "100%"}} alt={alt} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}

function Listitemsproperly (props){
    var classnormal = "list-inline-item ml-3 sq-gold-btn";
    var classactive = "list-inline-item ml-3 sq-gold-btn active";
    const item = props.item;
    var ret;
    if(props.large) ret = <li className = {(props.active) ? classactive:classnormal} onClick={props.onClick}><h5 className="my-auto">{item}</h5></li>;
    else ret = <li className = {(props.active) ? classactive:classnormal} onClick={props.onClick}><h6 className="my-auto">{item}</h6></li>;
    return(ret);

}
function Img(props) {
    const ret = <img className="graphics" src={props.imgurl} style={{maxWidth: "100%"}} alt={props.alt} />;
    return (ret);
}

function YoutubeVideo(props) {
    return (
			<Iframe width="100%" height="90%" url={props.imgurl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    );
}

export default BlockRightDescriptionGraphicSingle;