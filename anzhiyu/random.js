var posts=["8ea2fbe8b8db/","f4985376a128/","fab2071f499b/","8159bca7abcd/","72de75b96592/","c476b577ab06/","10ab07f6c6c9/","272c4a3365cb/","e7b57229acd4/","df5996b70de7/","c12055e6ecf6/","f0b6078aa8de/","047559a4bb5f/","4a8a40c466f6/","cc72c04a110b/","280ff73bac80/","93cfe9c2432d/","031a4fb624db/","732fd0ca5c67/","693bccaf2128/","721a3f9ff3ad/","d01acd7e5674/","2dc15143d194/","20993293a762/","70458b910afa/","93bdfa3a6163/","5f9e4d2c65bf/","9af76ba34d89/","6febc592d3fe/","db7aa6742c0a/","b24e231b6701/","05d8ba34e313/","56b661ecbc2b/","e12d07c4a704/","b77d15ce3b54/","5cf08051cca4/","2e85edb981c3/","e39ae38ff688/","91206d67d16b/","15e677942aff/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };