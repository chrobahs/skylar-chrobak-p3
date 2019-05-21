var data=[
  {
    id: 1,
    title: 'Donkey and his Rock Fasination',
    body: 'I like that boulder, that is a nice boulder',
    author: 'Donkey'
  },
  {
    id: 2,
    title:'Motto of Shrek',
    body:'Ogres are like Onions... Onions have layers, Ogres have layers',
    author:'Shrek'
  },
  {
    id: 3,
    title:'Gingy Giving it to Farquaad',
    body:'Eat Me.',
    author:'Gingy'
  },
  {
    id: 4,
    title:'The Sacrifice of Farquaad',
    body:'Some of You may die, but that is a Sacrifice I am willing to take',
    author:'Lord Farquaad'
  },
  {
    id: 5,
    title:'The Cries of Princess Fiona',
    body:'You are unbelievable!',
    author: 'Princess Fiona'
  },
  {
    id: 6,
    title:'Sassiness of the Magic Mirror',
    body:'Though she lives with Seven Men, she is not easy... Presenting Snow White!',
    author: 'Magic Mirror'
  }
]
var $nav=$('#nav-container')
var $intro=$('#intro')
var $posts=$('#post-container')
function initPosts(){
  for(var j=0;j<data.length; j++){
    var postId='post-'+data[j].id,
    $post=$('<section class="post"></section>'),
    $title=$('<h2 class="title"></h2>'),
    $body=$('<p class="quote"></p>'),
    $body=$('<blockquote></blockquote>');
    ($author=$('<span class="author"></span>')), ($navItem=$('<li></li>'))
    $title.text(data[j].title)
    $body.text(data[j].body)
    $author.text(data[j].author)
    $navItem.attr('id', data[j].id)
    $navItem.text(data[j].title)
    $post.attr('id', postId)
    $post.append($title)
    $post.append($body)
    $post.append($author)
    $posts.append($post)
    $nav.append($navItem)
    $navItem.on('click', function(){
      var id=$(this).attr('id')
      $posts.children().hide()
      $posts.find('#post-'+id).fadeIn()
    })
    $posts.children('.post').hide()
    $intro.fadeIn(1000)
  }
}
initPosts()
var email =[];
var person=[];
alert("Hello Shrek-ers!");
var person = prompt("Please enter your name:","First Name & Last Name");
var email = prompt("Please enter your email for update:","shrekislove@gmail.com");
alert("Thanks for subscribing "+person+". We will be sending you updates at "+email);
console.log(document.images);
