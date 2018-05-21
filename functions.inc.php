<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $postId = "postId" . $number;
    $userId = "userId" . $number;
    $userName = "userName" . $number;
    $date = "date" . $number;
    $thumb = "thumb" . $number;
    $title = "title" . $number;
    $excerpt = "excerpt" . $number;
    $reviewsNum = "reviewsNum" . $number;
    $reviewsRating = "reviewsRating" . $number;
    $rateStarsNumber = '';
    $rateStarsNumberAnother = '';
    for ($x = 0; $x < $$reviewsRating; $x++){
        $rateStarsNumber .='<img src="images/star-gold.svg" width="16" />';
        $rateStarsNumber .=' ';
    }
    for ($x = 0; $x < 5 - $$reviewsRating; $x++){
        $rateStarsNumberAnother .= '<img src="images/star-white.svg" width="16" />';
        $rateStarsNumberAnother .=' ';
    }
    echo '<div class="row">
                <div class="col-md-4">
                    <a href="images/" '. $$thumb . '><img src="images/'. $$thumb . '" alt="'.$$title .'"/></a>
                </div>
                <div class="col-md-8"> 
                     <h2>'. $$title .'</h2>
                     <div class="details">Posted by <a href="" class="">'. $$userName .'</a>
                         <span class="pull-right">'. $$date .'</span>
                         <p class="ratings">
                         ' .$rateStarsNumber.$rateStarsNumberAnother .$$reviewsNum.' Reviews</p>
                     </div>
                     <p class="excerpt">'. $$excerpt .'</p>
                     <p><a href="" class="btn btn-primary btn-sm">Read more</a></p>
                </div>
           </div><hr/> ';
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>