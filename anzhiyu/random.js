var posts=["8ea2fbe8b8db/","8159bca7abcd/","10ab07f6c6c9/","f4985376a128/","72de75b96592/","f0b6078aa8de/","fab2071f499b/","c12055e6ecf6/","e7b57229acd4/","df5996b70de7/","4a8a40c466f6/","280ff73bac80/","cc72c04a110b/","031a4fb624db/","047559a4bb5f/","d01acd7e5674/","20993293a762/","70458b910afa/","693bccaf2128/","721a3f9ff3ad/","2dc15143d194/","5f9e4d2c65bf/","93bdfa3a6163/","b24e231b6701/","db7aa6742c0a/","6febc592d3fe/","05d8ba34e313/","9af76ba34d89/","56b661ecbc2b/","e12d07c4a704/","5cf08051cca4/","2e85edb981c3/","15e677942aff/","e39ae38ff688/","b77d15ce3b54/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };