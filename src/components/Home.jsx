import React, { useEffect, useRef, useState } from "react";

const Home = ({ searchInput, setSearchInput}) => {
  const [articles, setarticles] = useState([]);

  
  const Access = async (url) => {
    //  let data = await fetch(url);
    // let pure = await data.json();
    // console.log(pure);
     setarticles({
      "status": "ok",
      "totalResults": 7806,
      "articles": [
          {
              "source": {
                  "id": null,
                  "name": "Mail.ru"
              },
              "author": "Алексей Хорошев",
              "title": "На заводе по выпуску аккумуляторов для Tesla произошел пожар",
              "description": "ЧП произошло на заводе CATL Z в китайской провинции Фуцзянь",
              "url": "https://auto.mail.ru/article/96708-na-zavode-po-vyipusku-akkumulyatorov-dlya-tesla-proizoshel-pozhar/",
              "urlToImage": "https://resizer.mail.ru/p/20da3c0e-05fe-5200-91aa-7af0777f9304/AQABWyJmoDtV-DyiTmFV3VUoI8-55x7GuPOQzKs6Tl-Q4olDGAhBpSJrOhsz2GGy5hLgSRLN3MOAsEjuhlZ10g1FV1k.jpg",
              "publishedAt": "2024-09-30T13:50:00Z",
              "content": "29   11:26          ,    CATL Z  .  , .     CATL Z. 15 000 ."
          },
          {
              "source": {
                  "id": null,
                  "name": "Investor's Business Daily"
              },
              "author": "Investor's Business Daily",
              "title": "Dow Jones Falls Ahead Of Powell Speech; Nvidia Falls, Tesla Reverses Higher",
              "description": "Nvidia and Tesla led the stock market lower Monday morning,",
              "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-powell-speech-nvidia-stock-nvda-tsla/",
              "urlToImage": "https://www.investors.com/wp-content/uploads/2022/06/Stock-jeromepowell2022-05-gov.jpg",
              "publishedAt": "2024-09-30T13:48:46Z",
              "content": "The Dow Jones Industrial Average and the other major stock indexes dropped Monday, as Wall Street awaited an afternoon speech from Federal Reserve Chairman Jerome Powell. Early movers on the stock ma… [+5736 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Freerepublic.com"
              },
              "author": "mediaite",
              "title": "Elon Musk Declares: ‘If Trump is Not Elected, This Will Be the Last Election’ — Says Voting Trump is the ‘Only Way’ to ‘Save’ Democracy",
              "description": "Elon Musk claimed Sunday that electing former President Donald Trump in November is the “only way” to save the country from the tyranny of Democrats and illegal migrants. The billionaire SpaceX, Tesla, and X CEO claimed the Democratic Party would naturalize e…",
              "url": "https://freerepublic.com/focus/f-chat/4268017/posts",
              "urlToImage": null,
              "publishedAt": "2024-09-30T13:46:32Z",
              "content": "Skip to comments.\r\nElon Musk Declares: If Trump is Not Elected, This Will Be the Last Election Says Voting Trump is the Only Way to Save Democracymediaite ^\r\n | Sep 29\r\n | Kipp Jones\r\nPosted on 09/30… [+5536 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Securityaffairs.com"
              },
              "author": "Pierluigi Paganini",
              "title": "Community Clinic of Maui discloses a data breach following May Lockbit ransomware attack",
              "description": "Community Clinic of Maui experienced a data breach impacting over 120,000 people following a LockBit ransomware attack. In May, the Community Clinic of Maui experienced a major IT outage that impacted thousands of patients following a cyber attack. In June, t…",
              "url": "https://securityaffairs.com/169125/data-breach/community-clinic-of-maui-lockbit-ransomware.html",
              "urlToImage": "https://securityaffairs.com/wp-content/uploads/2019/06/ransomware.jpg",
              "publishedAt": "2024-09-30T13:45:31Z",
              "content": "Community Clinic of Maui discloses a data breach following May Lockbit ransomware attack\r\n | A British national has been charged for his execution of a hack-to-trade scheme\r\n | Critical NVIDIA Contai… [+104907 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
              },
              "author": "AJ Fabino",
              "title": "Millennials Are 'House-Rich': How One Generation Doubled Their Wealth",
              "description": "A generational shift in wealth dynamics is happening right now and millennials are coming out on top.Many millennials aged between 28 and 43 see their net...",
              "url": "https://finance.yahoo.com/news/millennials-house-rich-one-generation-134519469.html",
              "urlToImage": "https://media.zenfs.com/en/Benzinga/a2a8f26798979a424cb6cc29a9f31abe",
              "publishedAt": "2024-09-30T13:45:19Z",
              "content": "Millennials Are 'House-Rich': How One Generation Doubled Their Wealth\r\nA generational shift in wealth dynamics is happening right now and millennials are coming out on top.\r\nMany millennials aged bet… [+4260 chars]"
          }]});

  }


  const [inputValue, setInputValue] = useState('');



  useEffect(() => {
    // const url= `https://newsapi.org/v2/everything?q=tesla&from=2024-09-01&sortBy=publishedAt&apiKey=0d0df4aabd5a4015bbe4fb6a69b322bb`;
    // Access(url);
   Access(`https://www.google.com`)
  }, [searchInput]);

  



  return (
    <div
      className="container"
      style={{
        display: "flex",
        position: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
    >
        {articles.map((item) => {
          return (
            <div  key={item.url}>
                  {item.title}
            </div>
          );
        })}
      </div>
  );
};

export default Home;
