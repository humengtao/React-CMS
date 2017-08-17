import React from 'react';

class Contents extends React.Component{
    render(){
        return(
            <div className="contents">
                <p className="title">饿了么的 PWA 升级实践</p>
                <p className="content">很荣幸在今年 2 月到 5 月的时间里，以顾问的身份加入饿了么，参与 PWA 的相关工作。这篇文章其实最初是在以英文写作发表在 medium
                    上的：Upgrading Ele.me to Progressive Web Apps，获得了一定的关注。所以也决定改写为中文版本再次分享出来，希望能对你有所帮助;
                    本文首发于 CSDN 与《程序员》2017 年 7 月刊，同步发布于 饿了么前端 - 知乎专栏、Hux Blog，转载请保留链接。
                    本文首发于 CSDN 与《程序员》2017 年 7 月刊，同步发布于 饿了么前端 - 知乎专栏、Hux Blog，转载请保留链接。
                </p>
                <p className="date">Posted by Hux on July 12, 2017</p>
            </div>
        )
    }
}

import '../stylesheets/contents.scss';
export default Contents;