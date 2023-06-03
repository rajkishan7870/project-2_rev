import React from 'react'
import { tweetsAtom } from '../../Recoil/Tweets';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import FeedCard from './FeedCard';


export default function Feeds() {
  const tweets = useRecoilValue(tweetsAtom);
  const setTweets = useSetRecoilState(tweetsAtom);

  function toggleLike(index) {
    console.log(`like this tweet , ${index}`);

    const tweet = { ...tweets[index] };

    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    updated[index] = tweet;
    setTweets(updated);
  }

  return (
    <div>
       {tweets.slice(0,50).map((tweet,index)=>{
        return(
            <FeedCard
            onToggleLike={() => toggleLike(index)}
            key={tweet.id}
            tweet={tweet}
          />
        )
       })}

    </div>
  )
}
