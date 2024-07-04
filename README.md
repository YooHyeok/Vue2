# *Vue Cli*
## *Install*
<details>
<summary>펼치기/접기</summary>
<br>

- ### 개발 환경 구축 옵션 선택
  선택을 통해 개발환경을 구축할 수 있다
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: (Use arrow keys)
    Default ([Vue 3] babel, eslint)
    Default ([Vue 2] babel, eslint)
  > Manually select features
  ```

- ### 기본적으로 사용할 라이브러리 선택 (Babel, Router, Vuex)  
  Select는 `Space`-Key Next는 `Enter`-Key  
  (Ctrl + A는 전체선택이다.)  

  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and
  <enter> to proceed)
  (*) Babel
  ( ) TypeScript
  ( ) Progressive Web App (PWA) Support
  (*) Router
  (*) Vuex
  ( ) CSS Pre-processors
  ( ) Linter / Formatter
  ( ) Unit Testing
  ( ) E2E Testing
  ```

- ### Vue version 2.x 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
    3.x
  > 2.x
  ```

- ### 라우터 History 모드 사용 여부 - Yes(Y)

  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 3.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
  ```

- ### 개발 환경 관리 파일 - package.json으로 선택
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 3.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.?
    In dedicated config files
  > In package.json
  ```

- ### 현재 선택한 개발 환경을 저장할 것인지 여부- No(n)
  ```text/plain
  Vue CLI v5.0.8
  ? Please pick a preset: Manually select features
  ? Check the features needed for your project: Babel, Router, Vuex
  ? Choose a version of Vue.js that you want to start the project with 3.x
  ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
  ? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
  ? Save this as a preset for future projects? (y/N)
  ```

</details>

### 디렉토리 구조 및 파일 설명
- #### node_modules
  프로젝트에 필요한 여러가지 부품들을 모아놓는 곳이라고 할 수 있다.  
  실제로 우리가 만들지 않았지만, 누군가가 만들어 베포한 것들을 가져다가 우리 프로젝트에 사용할 수 있게된다.  
- #### package.json
  node_modules라는 폴더 안에 설치를 해야되는 내역을 정의하는 파일이다.  
  해당 파일 내에서 어떤 node module이 필요한지, 또 버전에 대해 정의 해놓는 주문서같은 개념이다.  
  npm install이라는 명령을 하게 되면 package.json 파일에 정의된 dependencies목록을 보고 node_modules 폴더에 저장시키게 된다.
  cli 3.0 부터는 npm install 명령어를 따로 입력하지 않아도 project를 생성하는 순간 프로젝트에 필요한 기본 node_modules를 생성하게 된다.  
  또한 기존에는  `npm run dev` 라는 명령어를 통해 프로젝트를 실행 시켰었는데, cli 3.0부터는 `npm run serve` 라는 명령어를 통해 프로젝트를 실행한다.
- #### public
  기본이 되는 index.html파일과 favicon.ico 파일이 구성되어 있다.
- #### src
  - directory
    - assets  
      이미지 혹은 css 등 정적파일들을 저장한다.
    - components
    - router
    - store  
      전역 상태 관리를 한다.
    - views
  - App.vue
  - main.js  
    Vue 프로젝트를 최초로 구동시켜 준다.

# 플러그인
처음 프로젝트 시작시, 프로젝트 개발환경을 구축할 때, 필요한것들을 선택했었다.  
기존 버전에서는 선택 후 추후 개발환경 수정시 굉장히 복잡한 과정을 거쳤어야 했다.  
현재는 플러그인이라는 기능을 통해 개발 도중 어느 시점에서든지 새롭게 개발환경에 대한 플러그인을 추가할 수 있게 되었다.  

## @vue/cli-plugin-{...}
vue에서 공식적으로 지원하는 플러그인이다.  

## vue-cli-plugin-{...}
npm 등 배포되어있는 오픈소스 플러그인 모듈이다.

## vuetify
vue cli를 한번도 사용해보지 않은 경우, 혹은 webpack으로 web개발을 해보지 않은 경우 잘 모를 수 있다.  
괜찮다. vue를 배우기 위해 vue cli를 통해 vue 개발환경을 구축하는 것을 위해서는 이것들에 대해 아직까지는 깊게 이해하지 못해도 상관 없으며, 추후 vue cli에서 개발한경을 구축하는것에 대한 의미와, 편하게 개발하기 위해 어떤 방식으로 적용해야 하는지를 파악하면 된다.

본격적으로 vuetify에 대해 알아보도록 한다.  
쉽게 이야기 해서 부트스트랩 같은 기능을 제공한다고 보면 된다.  
부트스트랩과의 차이점은 vue에 특화되어 있으며, component 기반으로 움직인다.  
[v2.vuetifyjs](https://v2.vuetifyjs.com/en/getting-started/installation/)  
(react에서는 mui가 대표적이다.)

vue cli에서 vue plugin으로 적용해야 하기 때문에 기본적으로 vue cli가 설치되어 있어야 한다.

## vuetify install
  ```bash
  vue add vuetify
  ```

  ```
  ✔  Successfully installed plugin: vue-cli-plugin-vuetify

  ? Choose a preset:
  > Vuetify 2 - Configure Vue CLI (advanced)
    Vuetify 2 - Vue CLI (recommended)
    Vuetify 2 - Prototype (rapid development)
    Vuetify 3 - Vite (preview)
    Vuetify 3 - Vue CLI (preview)
  ```

  ```
  ? Use a pre-made template? (will replace App.vue and HelloWorld.vue) (Y/n) Y
  ```
  ```
  ? Use custom theme? (y/N) N
  ```
  ```
  ? Use custom properties (CSS variables)? N
  ```
  ```
  ? Select icon font
    Material Design Icons
    Material Icons
  > Font Awesome 5
    Font Awesome 4
  ```
  ```
  ? Use fonts as a dependency (for Electron or offline)? (y/N) N
  ```
  ```
  ? Use a-la-carte components? (Y/n) N
  ```
  ```
  ? Use babel/polyfill? (Y/n) Y
  ```
  ```
  ? Select locale (Use arrow keys)
  > English 
    Estonian 
    Farsi 
    Finnish 
    Greek 
    French
    Croatian
  (Move up and down to reveal more choices)
  ```


# Vue 애플리케이션 기본 파일 구성
- ## App.vue
  ```html
  <template>
  </template>
  <script>
    export default {
      name: 'App',
      data () {

      },
    }
  </script>
  ```
  `<template>` HTML 코드를 구성한다.  
  (`export default`) ES6 에서 모듈을 추출하는 문법이다.  
  해당 블록 내에서는 name 속성과, data 함수 그리고 기타 다른 속성들을 하나의 객체로 구성하여 내보내게 된다.  
  `data()` 컴포넌트 인스턴스의 초기 반응 상태값을 반환하는 함수이다.

- ## main.js
  ```javascript
  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store'
  import vuetify from './plugins/vuetify'
  import '@babel/polyfill'

  Vue.config.productionTip = false

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  ```
  (`import`) ES6 에서 export default에 의해 추출된 모듈을 참조하는 문법이다.

  아직은 알 수 없는 복잡해 보이는 구문이 있지만, new 키워드와 함께 vue를 새로 선언해 주는 코드가 있다.  
  해당 코드를 통해 전체 어플리케이션이 구동된다고 보면 될것이다.  

#### 배포 명령
```
npm run dev
```

터미널에 위 명령을 입력하여 실제 배포를 진행하게 되고 dist라는 디렉토리가 추가된다.  
해당 디렉토리에 존재하는 js 확장자 파일을 열어보면, 굉장히 길고 복잡한 js 코드를 볼 수 있게 된다.  
.vue 확장자 파일 혹은 main.js 파일들을 부품 삼아 조립해서 만든 결과물이라고 말할 수 있다.  
이러한 `.vue` 파일을 하나의 부품이라고 가정한다면 각 부품에는 규격이 존재한다.  
`<template>` 태그 안에는 HTML코드가 들어가고, `<script>` 태그 안에는 `export default`를 사용하여 모듈을 추출하고, 해당 모듈 객체 안에는 `data()`나 메소드와 같은 것들로 구성되어 있으며, `main.js`의 `import` 와 같은 것들이 규격 이라고 생각하면 될것이다.  
이런 규격들을 맞춰 vue 파일들이 구성되어야만 추후 배포 명령인 `npm run dev`를 통해 생성되는 최종 결과물인 .js 파일들을 완성할 수 있게 된다.


# 컴포넌트 생성 및 사용

## 단일 컴포넌트 파일간 import
- ## Home.vue
  ```html
  <template>
  <div>
    <h1>{{ homeTitle }}</h1>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          homeTitle: "홈입니당."
        }
      }
    }
  </script>
  ```

- ## App.vue
  ```html
  <template>
    <Home/>
  </template>

  <script>

  import Home from "./Home.vue"

  export default {
    components : {
      Home
    },
    data () {
      return {}
    }
  }
  </script>
  ```

  1. `<script>` 태그 안에 import 구문을 통해 해당 vue 컴포넌트 파일을 import한다.
  2. export default 블록 내에 components 속성에 import한 컴포넌트명을 입력한다.
  3. `<template>` 태그 내에 해당 컴포넌트를 태그 문법으로 선언해준다.



