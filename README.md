# gohantimes-instapost

# Preface

Lately I've been posting my cooking on Instagram quite frequently, and I usually use the same format for all of my post captions. Of course, repetitive tasks call for solutions solved by programming. Perfect way to practice development is working on a project that benefits yourself. Thanks for reading. 

To start, here is the link to my Instagram, which is the main focus here.

> https://www.instagram.com/gohantimeadventures/?hl=en

### Check the wiki for the git workflow I use [here](https://github.com/shinmm/gohantimes-instapost/wiki/Git-workflow):

# Table of Contents

- [Problem](https://github.com/shinmm/gohantimes-instapost#problem)
- [Solution](https://github.com/shinmm/gohantimes-instapost#solution)
- [Demo](https://github.com/shinmm/gohantimes-instapost#demo)
- [Usage](https://github.com/shinmm/gohantimes-instapost#usage)
- [Moving Forward](https://github.com/shinmm/gohantimes-instapost#moving-forward)
- [Caption Format](https://github.com/shinmm/gohantimes-instapost#caption-format)
  * [Actual Example](https://github.com/shinmm/gohantimes-instapost#actual-caption-example-httpswwwinstagramcompb9zv3gwfg-t)
  * [General Format](https://github.com/shinmm/gohantimes-instapost#general-format)


# Problem
I write recipe captions for my instagram posts everyday, and these posts have somewhat repetitive tasks that are time consuming. In these captions, I write comments, recipe notes, ingredients and hashtags.
Here is a list of some of these problems:
1. Having to check what number post the is
1. Translating ingredients list between Japanese and English
1. Listing the recipe notes nicely
1. Coming up with 30 hashtags for each post


# Solution

My goal here was to minimize the time it would take me to write a post's captions, while learning more JS along the way.
I'll list some of the things I did here to acheive this goal.
1. AJAX request to detect what the next post number should be
1. Using an Internal dictionary and the Google Translate API to automatically translate ingredients list
1. Format the content nicely so caption looks neat, for example new lines showing up properly when caption is posted.
1. Randomly generate 30 popular hashtags(US and JPN) to add to caption
1. Add a "copy to clipboard" functionality to quickly add caption to post

# Demo
COMING SOON

# Usage
//TODO: Usage

# Moving Forward
This is a tool I use almost everyday, and will continue to use and enhance this tool for as long as I use instagram. I've thought about deploying this as a web app with AWS, but because this tool is too specific to my needs, I really don't think anyone could benefit from it. However, there are many things I learned while working on this project, such as using the Google Translate Api in real time and other JS related things, I will definitely use my knowledge for future projects. 
I will continue to work on this project as time goes on, and keeping it open-sourced if for some reason people want to use snippets of code from it. This project to me was a good way to also practive git workflow as well. 

# Caption Format


### Actual Caption Example https://www.instagram.com/p/B9zv3gWFG-t/
#### ============ BEGIN ============

Homemade food pt28&nbsp;

🍙🍙豚の角煮まん🍙🍙&nbsp;  

コロナやばいです.

豚の角煮まだめっちゃ残ってます。

材料:
- 小麦粉 (350g)
- ベーキングパウダー(4g)
- イースト(5)
- 砂糖 (35g)
- 塩 (little bit)
- 水(200ml)
- オリーブオイル(35g)

Ingredients:
- All purpose flour(350g)
- Baking powder (4g)
- Instant yeast (5)
- Sugar (35g)
- Salt (little bit)
- Water (200ml)
- Olive oil (35g)

Mix all the dry ingredients first, then in a separate cup mix warm water and oil. Be sure to use warm water to help the yeast activate. Mix wet and dry ingredients until you feel like you can't. Take put dough and knead for like 10 min. Rest for an hour or so in a warm area. After resting, knead out the gas, and flatten into 8cm circles. Oil one side and fold the dough in half. Steam for like 12 min.
#japanese #japanesefood #food #homemadefood #てづくり #手作り #自炊 #大学生 #豚の角煮 #meat #角煮まん #bao #buns

#### ============ END ============


### General Format

#### ============ BEGIN ============

Homemade food pt[POST NUMBER]\
🍙🍙[NAME OF DISH(JPN)]🍙🍙\

[COMMENT ON DISH, CURRENT EVENTS, ETC (JPN)]

材料:
- [INGREDIENT] ([AMOUNT]) (JPN)

Ingredients:
- [INGREDIENT] ([AMOUNT]) (ENG)

[BRiEF RECIPE/NOTES]

#[POPULAR/RELEVANT HASHTAGS]

#### ============ END ============





### More about me
----------

#### Shin Mitsuno
Feel free to connect with me on LinkedIn <br>
<a href="https://www.linkedin.com/in/shin-mitsuno-89428613b" >
  <img alt="Connect me on LinkedIn" src="linkedin_logo.png" width = "150" />
</a>

Please feel free to check out my personal website : [shinmitsuno.com](shinmitsuno.com)
