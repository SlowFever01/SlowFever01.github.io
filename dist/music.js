const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    // mini: true,
    autoplay: false,
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
        url: 'https://music.163.com/song/media/outer/url?id=1458986027',
        cover: 'http://p2.music.126.net/Cf7rCSKENcWSTCh3GDQfyg==/109951165099307945.jpg?param=130y130',
        lrc: ""
      }, 
      {
        theme: '#46718b',
        name: '追',
        artist: '陈壹千',
        url: 'https://music.163.com/song/media/outer/url?id=1358848433',
        cover: 'http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg?param=130y130',
      },
      {
        name: "断线",
        artist: 'Shang / lil sophy',
        url: 'https://music.163.com/song/media/outer/url?id=496370620',
        cover: 'http://p2.music.126.net/W-4b64hCb_s8OAGROQXgig==/109951162995598984.jpg?param=130y130',
        theme: '#fff' //进度条颜色
      },
      {
        theme: '#46718b',
        name: '心碎莫扎特',
        artist: '暴躁的兔子',
        url: 'https://music.163.com/song/media/outer/url?id=1900224553',
        cover: 'http://p2.music.126.net/KOhv-eJTghAoNegrx2CIZw==/109951166689467629.jpg?param=130y130',
      },
      {
        theme: '#46718b',
        name: '我知道',
        artist: 'WiFi歪歪',
        url: 'https://music.163.com/song/media/outer/url?id=1979313985',
        cover: 'http://p1.music.126.net/RzWnGoUOZtjiNvxzKortbA==/109951167853222659.jpg?param=130y130',
      },
      {
        theme: '#46718b',
        name: '愿你余生漫长',
        artist: '王贰浪',
        url: 'https://music.163.com/song/media/outer/url?id=1425814935',
        cover: 'http://p1.music.126.net/x8mEAmSeYWPh-lXldUujmg==/109951164738889941.jpg?param=130y130',
      },
      {
        theme: '#46718b',
        name: '可不可以',
        artist: '张紫豪',
        url: 'https://music.163.com/song/media/outer/url?id=553755659',
        cover: 'http://p2.music.126.net/WafK2OQfEtqXitdDXJ772Q==/109951163252847249.jpg?param=130y130',
      },
      {
        theme: '#46718b',
        name: 'Keep Your Head Up Princess',
        artist: 'Anson Seabra',
        url: 'https://music.163.com/song/media/outer/url?id=1886345442',
        cover: 'http://p1.music.126.net/vUZstXP4G3tBXSGi5WbSDg==/109951166512266978.jpg?param=130y130',
      },
    ]
  });
  