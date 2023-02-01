const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: true,
    listFolded: true,
    preload: 'auto',
    mutex: true,
    // theme: '#FADFA3', //列表标签颜色,audio有设置theme这个就会失效
    loop: 'all',
    lrcType: 1,
    // volume: 0.5, //默认音量
    audio: [{
        theme: 'pink',
        name: '有幸来过',
        artist: '要不要买菜',
        url: 'https://music.163.com/#/song?id=1458986027',
        cover: 'http://p2.music.126.net/Cf7rCSKENcWSTCh3GDQfyg==/109951165099307945.jpg?param=130y130',
        lrc: ""
      }, {
        theme: '#46718b',
        name: '追',
        artist: '陈壹千',
        url: 'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        name: "断线",
        artist: 'Shang / lil sophy',
        url: 'https://music.163.com/#/song?id=496370620',
        cover: 'http://p2.music.126.net/W-4b64hCb_s8OAGROQXgig==/109951162995598984.jpg?param=130y130',
        // theme: '#fff' //进度条颜色
      }
    ]
  });
  