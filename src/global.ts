import $ from 'jquery';
let timer: ReturnType<typeof setTimeout>;
const scrollListen = () => {
    // console.log('in')
    // console.log('window scroll', $(window).scrollTop())
    let currentUrl = window.location.pathname
    if (currentUrl === '/companyIntroduce') return
    // console.log(currentUrl)
    let scrollObj = {
        currentUrl: currentUrl,
        scrollTop: $(window).scrollTop()
    }

    let scrollList = []
    if (window.localStorage.getItem('scrollData') !== null) {
        try {
            scrollList = JSON.parse(window.localStorage.getItem('scrollData'))
        } catch (err) {
            // console.log(err)
            scrollList.push(scrollObj);
        }
        let flag = true;
        for (let i in scrollList) {
            if (scrollList[i]['currentUrl'] === currentUrl) {
                // console.log(scrollList[i]['currentUrl']===currentUrl)
                scrollList[i] = scrollObj
                flag = false;
                break;
            }
        }
        if (flag) {
            // console.log('in62')
            scrollList.push(scrollObj);
        }
    } else {
        // console.log('added')
        scrollList.push(scrollObj);
    }
    // console.log(scrollList)
    window.localStorage.setItem('scrollData', JSON.stringify(scrollList))
    // document.cookie = "myScrollNumber" + "=" + document.documentElement.scrollTop;
    // GetCookie('myScrollNumber');
}
window.addEventListener('scroll', scrollListen)

window.addEventListener('load', () => {
    let currentUrl = window.location.pathname
    clearTimeout(timer);
    // console.log(currentUrl)
    if (window.localStorage.getItem('scrollData') !== null) {
        let scrollList = [];
        // console.log('not null')
        try {
            scrollList = JSON.parse(window.localStorage.getItem('scrollData'))
        } catch (e) {
            return;
        }
        for (let i in scrollList) {
            // console.log(scrollList[i]['currentUrl'],currentUrl);

            if (scrollList[i]['currentUrl'] === currentUrl) {
                // console.log('matched',scrollList[i].scrollTop)
                let scrollNum = scrollList[i].scrollTop
                // console.log(currentUrl)
                window.removeEventListener('scroll', scrollListen)
                timer = setTimeout(() => {
                    $(window).scrollTop(scrollNum)
                    // window.scrollTo(0,scrollNum);
                    // console.log(scrollNum)
                    // console.log("in")
                }, 1000);
                setTimeout(() => {
                    window.addEventListener('scroll', scrollListen)
                }, 1500);

            }
        }

    } else {
        return;
    }
    // console.log('inbody2',scrollNumber)
    // if (scrollNumber !== null) {
    //     setTimeout(() => {
    //         // console.log('in timeout')
    //         // document.querySelector("#root")?.scrollTo(100,1000);
    //         window.scrollTo(0, scrollNumber);
    //     }, 200);
    // }


    // if (scrollNumber !== null) {
    //     // console.log('in')
    //     document.documentElement.scrollTop = 1000
    // }
});


// window.addEventListener('popstate', function(e) {
//     console.log('in',e.state);
//     if (e.state) {
//         //侦测是用户触发的后退操作, dosomething
//         document.cookie.set('myScrollNumber',0)
//         // this.location.reload();
//     }
// });

// document.addEventListener('ready', () => {
//     window.alert("1")
// })


// document.onreadystatechange = function () { console.log("readyState: ")}