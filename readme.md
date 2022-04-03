# HTML5 & CSS3

## HTML5

<p align="center"><img src="./images/vendor/html5.png"></p>

> HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용한다.

> _[HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML)_

<br>

<br>

### Document and website structure

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Contents -->
  </body>
</html>
```

<center>html의 기본 구조</center>

<br>

`.html`

- Browser에서 실행 가능한 가장 기본적인 파일.
- Markup 언어로, 태그를 이용하여 구조적으로 보여준다.

`<!DOCTYPE html>`

- HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문.
- DOCTYPE 선언은 HTML 문서에서 <html> 태그를 정의하기 전에 가장 먼저 선언되어야 한다.

`<html lang="ko">`

- 웹 페이지 전체를 감싸는 root 요소이다.
- 웹 페이지의 언어를 ko(한국어)로 설정한다.

`<head>`

- 문서정보(metadata)를 담는 태그.

`<meta charset="UTF-8">`

- 글자 포맷을 UTF-8로 설정
- UTF-8은 모든 유니코드 문자를 표현할 수 있다.

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

- viewport(device screen)의 너비를 모두 사용.
- 기본 배율 1.0배.

`<title>`

- 브라우저 탭에 표시되는 문서 제목.

`<body>`

- 사용자에게 보여지는 Contents를 담는 태그.

<br>

html 기본 구조는 빈 html 파일에서 `!` 혹은 `html5` 작성 후 `Tab` key를 입력하면 간편하게 구현 가능하다.

또한 아래와 같은 emmet 문법을 통해 html 구조를 쉽게 작성할 수 있다.

- `<body>` 요소 안에서 `header+nav+aside+main{<!--content-->}+footer` 입력 후 `Tab` key 입력.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <header></header>
    <nav></nav>
    <aside></aside>
    <main>
      <!-- contents -->
    </main>
    <footer></footer>
  </body>
</html>
```

<center>emmet 문법 사용 결과</center>

<br>

`<header>`, `<nav>`, `<aside>`, `<main>`, `<footer>`는 의미론적(Semantics) 요소들이다.

<br>

<br>

### HTML elements

<br>

```html
<a href="http://google.com" target="_blank">Click</a>
```

<center>a</center>

`<a>`

- 다른 URL로 연결할 수 있는 하이퍼링크를 생성.
- `href` attribute를 통해 URL를 지정한다.
- `target="_blank"` 세팅 시 새 탭(혹은 새 창)에서 URL를 연다.

<br>

```html
<p>This is a sentence. <strong>That</strong> is..</p>
<p>This is a sentence. <span>That</span> is..</p>
<p>This is a sentence. <div>That</div> is..</p>
```

<center>Block vs Inline</center>

<br>

`<div>`와 `<p>`는 block 요소.

`<span>`와 `<strong>`은 inline 요소.

<br>

```html
<ol type="i" reversed>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ol>
<ul>
  <li>Hello</li>
  <li></li>
  <li></li>
</ul>
```

<center>List (ol, ul, li)</center>

<br>

`<ol>`

- ordered list
- type에 따라 카운터 유형이 지정된다. (Default 숫자)
- type 유형:
  - a(소문자 알파뱃)
  - A(대문자 알파뱃)
  - i(소문자 로마 숫자)
  - I(대문자 로마 숫자)
  - 1(숫자)
- reversed 시 목록 순서가 역전된다.

`<ul>`

- unordered list

`<li>`

- list item

<br>

```html
<label for="input_name">Name: </label> <input id="input_name" type="text" />
```

<center>Input</center>

<br>

label과 input은 한 쌍이며, for과 id로 서로 연결된다.

input의 type은 text, checkbox, date, email, file, password 등이 있다.

<br>

<br>

### Validator

html 파일의 코드 검증은 [W3C Validator](https://validator.w3.org/)에서 가능하다.

<br>

<br>

### Learn More

[HTML 요소(Elements & Attributes) 총정리](https://heropy.blog/2019/05/26/html-elements/)<br>
[Emmet Documentation](https://docs.emmet.io/)<br>

<br>

<br>

### 참고 자료(References)

https://www.youtube.com/c/드림코딩by엘리<br>
https://developer.mozilla.org/<br>
https://heropy.blog/<br>
http://www.tcpschool.com/<br>

<br>

<br>

<br>

<br>

<br>

## CSS3

<p align="center"><img src="./images/vendor/css3.png"></p>

> Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어이다.

> _[CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS)_

<br>

<br>

### Cascading

1. Browser

1. User Style

1. Author stule

1. !important

<br>

<br>

### Selectors

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <ol>
      <li id="special">First</li>
      <li>Second</li>
    </ol>
    <h1 id="special">Hello</h1>
    <button>Button1</button>
    <button>Button2</button>
    <div class="red"></div>
    <div class="blue"></div>
    <a href="naver.com">Naver</a>
    <a href="google.com">Google</a>
    <a>Empty</a>
  </body>
</html>
```

<center>html</center>

<br>

```css
/* selector {
  property: value;
} */

* {
  color: green;
}

#special {
  color: pink;
}

.red {
  width: 100px;
  height: 100px;
  background: yellow;
}

button:hover {
  color: red;
  background: beige;
}

a[href^='naver'] {
  color: purple;
}
```

<center>css</center>

- `*`: Universal.

- `TagName`: Tag.

- `#id`: id attribute.

- `.class`: class attribute.

- `[attribute]`: attribute.

- `[attribute^=value]`: value로 시작하는 값.

<br>

<br>

### Box Models

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <div class="red"></div>
    <div class="blue"></div>
  </body>
</html>
```

<center>html</center>

<br>

```css
.red {
  width: 100px;
  height: 100px;
  padding: 20px 0; /* 안쪽 여백. 위 20px, 아래 0 */
  margin: 20px; /* 바깥 여백. 전체(상우하좌) 20px */
  border: 2px dashed red; /* 테두리. 2px 점선 빨간색 */
  background: yellow; /* 배경 노란색 */
}
```

<center>css</center>

<br>

<br>

### Display

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <!-- Block-level -->
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <!-- Inline-level -->
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </body>
</html>
```

<center>html</center>

<br>

```css
div,
span {
  width: 80px;
  height: 80px;
  margin: 20px;
}

div {
  background: red;
  display: inline;
}

sapn {
  background: blue;
  display: block;
}
```

<center>css</center>

<br>

`inline`

- contents 자체만을 꾸며준다.

- contents의 크기에 따라 size가 달라진다.

- 한 줄에 여러 개 배치.

`inline-block`

- inline과 block의 특성을 동시에 가진다.

- contents size와 관계없이 width와 height 만큼의 크기를 가진다.

- 한 줄에 여러 개 배치.

`block`

- 한 줄에 하나만 배치.

<br>

<br>

### Position

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <article class="container">
      <div></div>
      <div class="box">I'm Box</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </article>
  </body>
</html>
```

<center>html</center>

<br>

```css
div,
span {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  background: red;
}

.container {
  background: yellow;
  left: 20px;
  top: 20px;
  position: relative;
}

.box {
  background: blue;
  left: 20px;
  top: 20px;
  position: fixed;
}
```

<center>css</center>

<br>

`static`

- 모든 요소는 position default 값인 static을 갖는다.

`relative`

- 원래 item 있어야 할 위치를 기준으로 상대적으로 옮겨간다.

`absolute`

- item이 담겨있던 container 안을 기준으로 옮겨간다.

- 기준이 되는 container는 relative 상태여야하며, 부모 요소에 relative가 적용되어있지 않으면 relative 상태인 상위 요소로 점차 올라가는데, 상위 요소 중 relative 상태인 요소가 없을 경우 최상위 요소에 자동으로 relative 상태가 적용됨.

`fixed`

- item이 속한 container에서 완전히 벗어나 window를 기준으로 옮겨간다.

<br>

<br>

### Float

<br>

이미지와 텍스트를 어떻게 배치할 것인지 정의.

Flexbox 등장 이전까지는 본래의 목적에 맞지않는 방법으로 활용되어 왔다.

`float: left`

- 이미지가 왼쪽에 배치되고 텍스트가 해당 이미지를 감싸면서 배치.

`float: center`

- 이미지가 가운데에 배치되고 텍스트가 해당 이미지를 감싸면서 배치.

`float: right`

- 이미지가 오른쪽에 배치되고 텍스트가 해당 이미지를 감싸면서 배치.

<br>

item에 float 적용 시 container에도 특정한 영향을 미치는데, 해당 영향을 없애기 위해서는 아래의 CSS를 부모 요소에게 적용하면 된다.

```css
/* float 적용 요소의 부모 요소에게 class="clearfix"로 CSS float 속성에 따른 현상 제거 */
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

<center>clearfix</center>

<br>

<br>

### Flexbox

<br>

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <!-- metadata -->
  </head>
  <body>
    <div class="container">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <div class="item item8">8</div>
      <div class="item item9">9</div>
      <div class="item item10">10</div>
    </div>
  </body>
</html>
```

<center>html</center>

<br>

```css
.container {
  background: beige;
  height: 100vh; /* 부모와 상관없이 viewport height만큼 세팅 */
  display: flex;
}

.item
  [width: 40px;
  height: 40px;]
  .item1 {
  background: #ef9a9a;
}
.item2 {
  background: #f48fb1;
}
.item3 {
  background: #ce93d8;
}
.item4 {
  background: #b39ddb;
}
.item5 {
  background: #90caf9;
}
.item6 {
  background: #a5d6a7;
}
.item7 {
  background: #e6ee9c;
}
.item1 {
  background: #fff59d;
}
.item1 {
  background: #ffcc80;
}
.item1 {
  background: #ffab91;
}
```

<center>css</center>

<br>

container 속성값

- `display`

  - `flex`

  - `inline-flex`

- `flex-direction` (default row)

  - `row`: 가로 정렬.

  - `row-reverse`: 가로 정렬 역방향.

  - `column`: 세로 정렬.

  - `column-reverse`: 세로 정렬 역방향.

- `flex-wrap` (default nowrap)

  - `nowrap`: 한 줄에 다 나타남.

  - `wrap`: item들이 container를 너비를 초과할 때 다음줄에 나머지 item 세팅.

  - `wrap-reverse`

- `flex-flow` (direction과 wrap을 한 번에 표현)

- `justify-content`: 중심축(main-axis) 기준 (default flex-start)

  - `flex-start`: 시작점 밀집.

  - `flex-end`: 끝점 밀집.

  - `center`: 가운데 밀집.

  - `space-around`: 각 item 좌우 여백.

  - `space-evenly`: 양쪽 끝과 item 간 일정 여백.

  - `space-between`: item 간 일정 여백.

- `align-items`

  - `center`: container의 수직축 가운데정렬.

  - `baseline`: item text 위치 균등.

- `align-content`: 반대축(cross axis) 기준. (default flex-start)

  - `flex-start`: 시작점 밀집.

  - `flex-end`: 끝점 밀집.

  - `center`: 가운데 밀집.

  - `space-around`: 각 item 좌우 여백.

  - `space-evenly`: 양쪽 끝과 item 간 일정 여백.

  - `space-between`: item 간 일정 여백.

<br>

item 속성값

- `order`: 각 item의 container 내 순서를 지정.

- `flex-grow`: container 중심축(main axis)의 증감에 따라 각 item의 증가 정도. (default 0)

- `flex-shrink`: container 중심축(main axis)의 증감에 따라 각 item의 감소 정도. (default 0)

- `flex-basis`: container 중심축(main axis) 대비 item의 비율. (default auto)

- `flex`: grow, shrink, basis를 순서대로 지정 가능.

- `align-self`: 각 item별로 배치. (default auto)

  - `auto`

  - `stretch`: container 반대축(cross axis)만큼 item을 늘림 .

  - `flex-start`: 시작점으로 정렬.

  - `flex-end`: 끝점으로 정렬.

  - `center`: 가운데 정렬.

  - `baseline`: 문자 기준선에 정렬.

중심축(main axis)과 반대축(cross axis)

- 중심축이 수평이냐 수직에 두냐에 따라 반대축이 바뀜.

<br>

<br>

### Learn More

[CSS 개요](https://happy-noether-c87ffa.netlify.app/presentations/level1/css/summary/)<br>
[CSS 속성](https://happy-noether-c87ffa.netlify.app/presentations/level1/css/properties/)<br>
[CSS++](https://happy-noether-c87ffa.netlify.app/presentations/level2/css3/)<br>
[CSS Grid 완벽 가이드](https://heropy.blog/2019/08/17/css-grid/)<br>

<br>

<br>

### 참고 자료(References)

https://www.youtube.com/c/드림코딩by엘리<br>
https://developer.mozilla.org/<br>
https://heropy.blog/<br>
