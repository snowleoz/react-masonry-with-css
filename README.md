# react-masonry-with-css
纯CSS实现的react瀑布流组件,基于column实现

# 安装
```shell
  npm install react-masonry-with-css -S
```

# 使用
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import Masonry from './masonry';
    let images = ['http://projectcommunityonline.com/wp-content/plugins/RSSPoster_PRO/cache/7b48a_code2.png','https://cdn.poststatus.com/wp-content/uploads/2015/06/code-1116x399.gif','https://cdn-images-1.medium.com/max/332/1*09rG9hwkdCB1yXUlTlrHig@2x.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2IFfE-OJ6zJfHhuKspsPvBNk6W2OOsQuo7naPue3rEBFvOHl','https://code.visualstudio.com/assets/docs/python/tutorial/social.png'];
    let items = new Array(50).fill('');
    ReactDOM.render(<Masonry width='200px' gap="5px">
        {
            items.map((item,index)=>(
                <div key={index}>
                    <div>
                        <img src={images[Math.floor(Math.random()*5)]} style={{maxWidth:'100%'}}/>
                    </div>
                </div>
            ))
        }
    </Masonry>,document.getElementById('root'))
```

# 参数
目前仅支持三个参数

> width 

必填，瀑布流中每个子元素的宽度

> gap 

必填，子元素之间的间隙；