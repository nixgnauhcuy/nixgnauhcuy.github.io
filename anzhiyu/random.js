var posts=["8159bca7abcd/","72de75b96592/","8ea2fbe8b8db/","f4985376a128/","fab2071f499b/","c476b577ab06/","272c4a3365cb/","10ab07f6c6c9/","e7b57229acd4/","2b6702a14918/","c12055e6ecf6/","f0b6078aa8de/","df5996b70de7/","4a8a40c466f6/","8d34424033d0/","f1b80f317887/","a0c7dce1d4fa/","cc72c04a110b/","047559a4bb5f/","423b1931ce58/","93cfe9c2432d/","42c8065d1ad6/","732fd0ca5c67/","280ff73bac80/","031a4fb624db/","693bccaf2128/","d01acd7e5674/","721a3f9ff3ad/","2dc15143d194/","70458b910afa/","20993293a762/","5f9e4d2c65bf/","9af76ba34d89/","6febc592d3fe/","93bdfa3a6163/","db7aa6742c0a/","b24e231b6701/","05d8ba34e313/","5cf08051cca4/","56b661ecbc2b/","e12d07c4a704/","2e85edb981c3/","b77d15ce3b54/","15e677942aff/","e39ae38ff688/","91206d67d16b/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };