import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Iframe from 'react-iframe';

import ShowImg from './ImgShower';



const BootstrapCarousel = (props) => {
    const items = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [showimg, setshowimg] = useState(false);
    const [showimgsrc, setshowimgsrc] = useState();
    const [showimgaltText, setshowimgaltText] = useState();

    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const myOnclickhandlershowimg = (src, altText) => {
        setshowimg(true);
        setshowimgsrc(src);
        setshowimgaltText(altText);
    }

    const myOnclickhandlershowimgclose = () => {
      setshowimg(false);
      setshowimgsrc("");
      setshowimgaltText("");
    }
   

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <CarouselItemAdjust src={item.src} alt={item.altText} onClickHandler={myOnclickhandlershowimg}/>
          <CarouselCaption captionText={""} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    var showimage;
    if(showimg){
      showimage = <ShowImg src={showimgsrc} alttext ={showimgaltText} closeonClick={myOnclickhandlershowimgclose}/>
    }
    return (
      <>
      {showimage}

      <div className="col-12 mb-3" style={{height:"300px"}}>

      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
      <Listimagesproperly list={items} onClickHandler={goToIndex}/>
      </>

    );
}



function YoutubeVideo(props) {
    var item;  
    if (props.showcontrols){
        item = <Iframe width="100%" height="100%" url={props.imgurl} rel="0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>

    }
    else{
      item = <Iframe width="100%" height="100%" url={props.imgurl} frameBorder="0" controls="0" modestbranding rel="0"></Iframe>

    }
    return (
      <>
      {item}
      </>
    );
}


function CarouselItemAdjust(props){
    var item;
    if(props.src.includes("youtube")){
      item =  <YoutubeVideo imgurl={props.src} alt = {props.alt} showcontrols/>
      ;
    }
    else{
      item = <img className="mediadescription-img" style={{cursor:"pointer"}} src={props.src} alt={props.alt} onClick={function onClick(e){
        e.preventDefault();
        props.onClickHandler(props.src, props.alt);
      } }/>;
    }

    return (<>{item}</>);
}
function ListimagesproperlyAdjust(props){
    var onClickHandler = props.onClickHandler;
    var item;
      if(props.src.includes("youtube")){
        var videoid = props.src.split("/");
        videoid = videoid[videoid.length -1];
        var source = "https://img.youtube.com/vi/" + videoid + "/0.jpg";
        item =  <img className="mediadescription-imgthumbnail" src={source} onClick={function onClick(e) {
          e.preventDefault();
          onClickHandler(props.i);
        }
        }/>
        ;
      }
      else{
        item = <img className="mediadescription-imgthumbnail" src={props.src} onClick={function onClick(e) {
          e.preventDefault();
          onClickHandler(props.i);
        }
        }/>;
      }

      return (<>{item}</>);
}

function Listimagesproperly(props){
  var onClickHandler = props.onClickHandler;
  const imagelist = props.list;
  var content=imagelist.map((item,i) =>
      <div className="col-2 mb-2 d-none d-sm-block" style={{height:"70px"}}>
          <ListimagesproperlyAdjust src={item.src} onClickHandler={onClickHandler} i={i}/>
      </div>
      );
  return(
      <>
          {content}
      </>
  );
}

export default BootstrapCarousel;