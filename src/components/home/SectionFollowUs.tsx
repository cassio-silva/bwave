import styled from "styled-components"
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { Heading } from "../../styles/ComponentGlobalStyles";

type LikeButtonProps = {
  isLiked: boolean;
  likes: number;
}

export function LikeButtons({ isLiked, likes }: LikeButtonProps) {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(0);

  useEffect(() => {
    setIsPostLiked(isLiked);
    setPostLikes(likes);
  }, [])

  function handleLikes() {
    if (isPostLiked) {
      setIsPostLiked(false);
      setPostLikes(postLikes - 1);
    } else {
      setIsPostLiked(true);
      setPostLikes(postLikes + 1);
    }
  }

  return (
    <div className="block">
      <button onClick={handleLikes}>
        {isPostLiked ? (
          <IoIosHeart size={36} />
        ) : (
          <IoIosHeartEmpty size={36} />
        )}
      </button>
      <span>{postLikes}</span>
    </div>
  )
}

type DataArray = {
  id: string,
  img: string;
  likes: number
  isLiked: boolean;
}

export function SectionFollowUs() {
  const mockData: DataArray[] = [
    {
      id: "1",
      img: "/assets/posts/1.png",
      isLiked: false,
      likes: 276
    },
    {
      id: "34",
      img: "/assets/posts/2.png",
      isLiked: true,
      likes: 604
    },
    {
      id: "7849",
      img: "/assets/posts/3.png",
      isLiked: false,
      likes: 994
    },
    {
      id: "89",
      img: "/assets/posts/4.png",
      isLiked: false,
      likes: 654
    },
    {
      id: "234",
      img: "/assets/posts/5.png",
      isLiked: false,
      likes: 837
    },
  ]

  const responsive = {
    mobile: {
      breakpoint: { min: 0, max: 1024 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 110
    },
    tablet: {
      breakpoint: { min: 1025, max: 1279 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    dekstop: {
      breakpoint: { min: 1280, max: 4000 },
      items: 5,
      slidesToSlide: 1,
      partialVisibilityGutter: 20
    },
  }

  return (
    <Container>
      <Heading
        width="85%"
        textAlign="left"
      >
        follow <br />
        us
      </Heading>

      <Content>
        <Carousel
          responsive={responsive}
          swipeable
          arrows={false}
          autoPlay={false}
          autoPlaySpeed={1000000}
          infinite
          partialVisible
        >
          {mockData.map((item) => (
            <CardItem key={item.id}>
              <img src={item.img} draggable="false" />
              <LikeButtons key={item.id} isLiked={item.isLiked} likes={item.likes} />
            </CardItem>
          ))}
        </Carousel>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin: 6rem auto;
`;

const Content = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
`;

const CardItem = styled.div`  
  width: 295px;
  max-height: 420px;
  position: relative;
  
  cursor: grab;
  
  img {
    width: 295px;
    height: 350px;

    margin-bottom: 12px;
  }

  div.block {
    display: flex;
    flex-direction: row;
    width: 100%;
    z-index: 3;

    bottom: -2rem;
    left: 0;

    button {
      border: none;
      background-color: transparent;
      margin-right: 1.125rem;
    }
    span {
      font-size: 2.25rem;
      line-height: 100%;
      font-weight: 400;

    }
  }
`;