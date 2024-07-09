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
  ```vue
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

## 단일 컴포넌트 파일 간 import
- ## Home.vue
  ```vue
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
  ```vue
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

## 컴포넌트 전역 등록 및 다중 파일 import

  - ##  Status.vue
    ```vue
    <template>
      <div>
        <Appstatus/>
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

  - ## main.js
    ```javascript
    <!-- 생략 -->
    import Vue from 'vue'
    import Status from './Status'

    Vue.component('Appstatus', Status)
    
    <!-- 생략 -->
    ```
    main.js 파일에서 Vue의 component() 함수를 통해 전역으로 등록한다.  
    1. 첫번째 인자로는 컴포넌트의 이름을 넣는다.
    2. 두번째 인자로는 옵션 즉, import한 컴포넌트의 식별자를 넣는다.

- ## App.vue
  ```vue
  <template>
    <Home/>
    <Appstatus/> <!-- import 혹은 components로 모듈을 내보내지 않아도 사용가능 -->
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

- ## Home.vue
  ```vue
  <template>
  <div>
    <Appstatus/> <!-- 어느 곳이든 참조가 가능하다! -->
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

# Vue 이벤트

`v-on:이벤트명={함수명(실행식)}` 혹은 `@:이벤트명={함수명(실행식)}` 과 같은 속성 문법으로 사용한다.

```vue
<template>
  <div>
    <v-btn @click="num++">숫자증가</v-btn>
    <v-btn v-on:click="decrease()">숫자감소</v-btn>
  </div>
</template>
<script>
export default {
 data () {
  return {
    num: 1,
  },
  methods: {
    decrease() {
      this.num--;
    }
  }
 } 
}
</script>

```

# Vue 에서의 this

Vue에서 this는 Vue 자체를 가리킨다.
Vue를 실행시키면 각 컴포넌트는 각각의 고유한 Vue 인스턴스를 가지게 된다.  
각 컴포넌트에서 data () 함수를 통해 반응형 변수를 내보내기 할때 해당 컴포넌트의 Vue 인스턴스에 종속된다.
일반적인 Vue 소스코드는 ES6 객체 리터럴 방식으로 구성되어 있으며, 런타임시 Vue 내부적으로 data 함수를 호출하여 반환 받은 객체를 data라는 속성에 바인딩하는 형태로 재해석된다.
해당 코드들을 JS 방식의 코드로 재 해석해본다면 아래 예시중 3번째 예시와 같아지는데 이 코드상에서 this를 적용한다면 Vue 인스턴스가 된다 (컴포넌트의 고유한) 따라서 this키워드를 통해 name변수에 접근이 가능해진다.


아래 코드를 보면 확인이 가능하다.

- Vue 소스코드
  ```js
  export default {
    data () {
      return {
        name: '뷰제이에스'
      }
    },
    methods: {
      changeName () {
        this.name = "Hoza"
      }
    }
  }
  ```
- Vue 런타임 해석(컴파일) 코드
  ```js
  var vm = new Vue ({
    data :{
        name: '뷰제이에스'
    },
    methods: {
      changeName: function () {}
        this.name = "Hoza"
    }
  })
    
  ```
- 일반적인 js 문법
  ```js
  var vm = new Vue({
	changeName: function(){
		this.name = "Hoza";
	},
	name : '뷰제이에스'
  });
  ```

실제로 vm을 직접 출력해본다면 아래와 같다
```text/plain
Vue {_uid:0, _isValue: true, $options: {...}, _renderproxy: Proxy, _self: Vue, ...}
  ... 생략
  name : '뷰제이에스'
  ... 생략
  
```
***data에 정의한 name 변수 값이 Vue 객체 바깥쪽에 선언된 것을 확인할 수 있다.***


# Props 부모-자식 컴포넌트 간 데이터 전달 

1. **부모 컴포넌트**  
  `v-bind:{props명}="{변수명}"` 의 형태로 자식 컴포넌트의 속성을 지정하여 자식컴포넌트에 전달한다.  
  ( `{생략가능}:{props명}="{변수명}` 약어 형태로 생략해서 사용 가능하다. )
2. **자식 컴포넌트**  
    ```js
      export default {
        props: ['nameOfChild']
      }
    ```
    위 코드와 같이 내보내기 구문에서 props 속성에 문자열 배열 형태로 부모 컴포넌트로 부터 전달할 때의 props명을 입력해준다.

- **완성 코드**
  ```vue
  <template>
    <UserDetail v-bind:nameOfChild="name"></UserDetail>
  </template>

  <script>
  import UserDetail from "./UserDetail.vue"

  export default {
    components: {
      UserDetail
    },
    data () {
      return {
        name: '뷰제이에스'
      }
    },
    methods: {
      changeName () { // changeName = function () {} 과 동일한 표현?
        this.name = "Hoza"
      }
    }
  }
  </script>
  ```

  ```vue
  <template>
      <p>{{ nameOfChild }}</p>
  </template>

  <script>
  export default {
    props: ['nameOfChild']
  }
  </script>
  ```


## Props Type - Property Validation(프로퍼티 타입 유효성 검사)

props가 어떤 데이터타입을 받아야 하는지 기록하기 위해 데이터타입을 작성한다.

 ```vue
  <template>
    <UserDetail v-bind:nameOfChild="{name, familyName: 'Yoo'}"></UserDetail>
  </template>

  <script>
  import UserDetail from "./UserDetail.vue"

  export default {
    components: {
      UserDetail
    },
    data () {
      return {
        name: 'School'
      }
    },
    methods: {
      changeName () { // changeName = function () {} 과 동일한 표현?
        this.name = "YooHyeok"
      }
    }
  }
  </script>
  ```

  ```vue
  <template>
      <p>{{ nameOfChild.name }}</p>
      <p>{{ nameOfChild.familyName }}</p>
  </template>

  <script>
  export default {
    props: {
      nameOfChild: Object
    }
  }
  </script>
  ```

위와 같이 props를 기본 대괄호가 아닌 Object형태로 블록을 구성하고, 넘겨받은 props이름이 어떤 타입인지 지정해준다.  
만약 `nameOfChild: String` 과 같이 타입이 일치하지 않게 선언한다면 개발자 도구 콘솔에는 아래와 같은 오류가 출력된다.

```text/plain
main.js:19 [Vue warn]: Invalid prop: type check failed for prop "nameOfChild". Expected String, got Object 

found in

---> <UserDetail> at src/components/user/UserDetail.vue
       <User> at src/components/user/User.vue
         <VMain>
           <VApp>
             <App> at src/App.vue
               <Root>
```

아래와 같이 조금 더 구체적으로 상세하게 타입을 지정할 수도 있다.
  ```vue
  <script>
  export default {
    props: {
      nameOfChild: {
         name: String,
         familyName: String
      }
    }
  }
  </script>
  ```
## Props 세부 설정1 (type, required), default)

  ```vue
    <UserDetail v-bind:nameOfChild="name"></UserDetail>
  ```
  ```vue
  <script>
  export default {
    props: {
      nameOfChild: {
         name: {
          type: String,
          required: true
         }
      }
    }
  }
  </script>
  ```
  단일값에 대한 props에는 위와 같이 type, required 등의 세부 옵션을 부여할 수 있게 된다.
## Props 세부 설정2 (default)

  ```vue
    <UserDetail></UserDetail>
  ```
  ```vue
  <script>
  export default {
    props: {
      nameOfChild: {
         name: {
          type: String,
          default: "기본값"
         }
      }
    }
  }
  </script>
  ```
  props 자체를 넘기지 않았을 경우 자식 컴포넌트에서 기본값을 지정할 수 있게 된다.

## Object type Props default 예외사항

  ```vue
  <UserDetail :nameOfChild="{name: '존'}"></UserDetail>
  ```

  ```vue
  export default {
    props: {
       nameOfChild: {
        name: {
          type: String,
          required: true // 필수 값 여부
        },
        familyName: {
          type: Number,
          default: 10
        }
      } 
    }
  }
  ```
  위와같이 Object 타입의 Props에 name이라는 속성:값 만 전달한다고 했을 때 위처럼 작성하면 정상적으로 적용되지 않는다.  
  실제 실험시 familyName 속성의 default에 대한 값만 적용되지 않는것을 확인할 수 있는데, 아마 name 속성의 required 속성도 제대로 적용되지 않을것으로 예측된다.  
  그 이유는 아래와 같다.
  
  ```vue
  <UserDetail></UserDetail>
  ```

  ```vue
  export default {
    props: {
      nameOfChild: {
        type: Object,
        required: true,
        default: () => {
        return { name:"기본값이다임마", familyName: "메롱" }
        }
      }
    }
  }
  ```
  위와 같이 v-vind자체를 하지 않았을 경우에만 default가 성립된다.  
  코드를 확인하면 nameOfChild를 하나의 객체 타입으로 지정하고 해당 객체에 required와 default를 적용하였다.  
  즉, Object 타입 Props에 대한 default는 속성 하나가 덜 넘어오는 경우에는 단일 속성에 대해서는 default 성립이 안된다.
  데이터 전체를 넘기지 않았을 때 즉, vind자체를 하지 않았을 때 전체에 대한 모든 필드에 대한 default적용을 하는것이다.

  내가 이부분에서 햇갈렸던 이유는 기본적으로 Javascript의 Object에서 존재하지 않는 Property를 Object에 접근하여 값을 초기화하면 값이 초기화된 해당 Propery가 추가된다.  
  이 원리를 Vue의 Props에 오해하고 적용했기에 이 문제가 발생한것이다.

  다시한번 정리하자면 required와 default는 넘겨주는 Props의 전체 타입(가장 바깥으로 감싸고있는 타입) 그 자체에 적용하도록 한다.

  ```vue
  export default {
    props: {
      nameOfChild: {
        type: Object,
        required: true,
        default: {
         name:"기본값이다임마", familyName: "메롱"
        }
      }
    }
  }
  ```
  위와같이 default는 함수형태가 아니여도 적용된다.

## props와 computed
- Vue 인스턴스가 생성될 때, data의 값을 받아 미리 계산하여 저장하고 불러온다.
- method 형태로 작성하지만 Vue에서 proxy 처리하여 property처럼 사용한다.
- 특정 데이터의 변경사항을 실시간으로 처리한다.
- 호출시에도 method가 아닌 property와 같이 호출한다.

```vue
<template>
<div class="red lighten-3 pa-3">
  <h3>자세한 회원 정보를 확인합니다.</h3>
  <p>{{ sayHello }}</p>

</div>
</template>
<script>
export default {
  props: {
    nameOfChild: {
        name: {
        type: String,
        default: "기본값"
        }
    }
  },
  computed: { // 자식 컴포넌트에서 props값 활용하기.
    sayHello () {
      return this.nameOfChild + `하이!`
    }
  },
}
</script>
```
computed속성으로 정의한 함수는 호출부인 () 없이 함수명 만으로 접근하여 데이터를 바인딩시킨다.  
예제에서는 this키워드를 통해 부모컴포넌트의 props에 접근한뒤 데이터를 변경하는데 사용했다.  
여기서 알수 있는 점은 this키워드를 통해 props에 접근하였다는 것인데 일반적으로 data() 함수를 통해 내보내기 하는 변수를
this키워드를 통해 접근하는 예를 생각한다면 props를 넘겨받는 순간 `자식 컴포넌트의 data:{} 에 등록`되는것으로 예측할 수 있다.

## Props 부모/자식간 props 조작에 대한 위험성
```vue
<v-btn @click="switchName()">이름 변경</v-btn>
```
```vue
methods: {
  switchName () { // 부모 컴포넌트의 props 값 수정.
    this.nameOfChild = '컴퓨터'
  }
},
```
위와 같이 methods 속성을 통해 this 키워드로 해당 props에 접근하여 값을 변경하는 함수를 선언하고, 버튼 이벤트에 해당 함수를 적용할 경우 자식/부모 컴포넌트 모든 값이 변경되며 아래와 같은 오류 내용이 콘솔에 출력된다.
```text/plain
vue.runtime.esm.js:4448 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "nameOfChild"

found in

---> <UserDetail>
       <User> at src/components/user/User.vue
         <VMain>
           <VApp>
             <App> at src/App.vue
               <Root>
```
부모 컴포넌트가 re-render 되는 시점에 해당 값이 부모 컴포넌트에 덮어씌워지기 때문에 Props를 직접적으로 변경하는 것을 피하라. 라는 의미이다.  

자식 컴포넌트에서 부모 컴포넌트로부터 넘겨받은 props값을 통해 여러가지 작업을 하더라도(computed 등을 통해) 그 값이 부모 컴포넌트에 의해 언제든지 변경될 수 있다는 위험성을 가지고 있다는 이야기이다.

1. 자식 컴포넌트에서 props값 수정 → 자식 컴포넌트에 반영
2. 부모컴포넌트에서 props값 수정 → 자식 컴포넌트에 반영

위와 같은 순서로 사용하게 되면 자식 컴포넌트에서 값을 변경해서 사용하고 있던 것에서 부모 컴포넌트의 값이 변경되기 때문에 컴포넌트의 독립성이 없어지게 된다.  
부모로부터 받은 값을 변경 시키기 위해서는 computed 속성을 활용하거나 혹은 data속성 안에 재할당 시킨다.  
이렇게 사용하게 되면 자식 컴포넌트 내에서만 변경이 적용 된다.
부모로부터 받은 prop값을 자식 컴포넌트 내의 특정 변수에 할당시켜 할당 된 변수를 변경하는 것이기 때문이다.

# *v-model*
변경과 데이터를 엮어주는것 이라고 말할 수 있다.  
1. 표시할 데이터
2. 변경이 있다면 데이터에 반영

위 두가지를 한 세트로 묶은것을 쌍방향(two-way) 데이터 바인딩이며, 이것을 v-model이 해준다는 것이다.

- `:value` & `@input` 활용  
  일반적으로 이 방법은 표시할 데이터 따로, 변경 반영 따로 지정하는 방식이다.
  - @input 문법 1
    ```vue
    <template>
    <v-text-field
      label="이름"
      :value="user.name"
      @input="(currentValue) => {user.name = currentValue}"
    />
    </template>
    ```
  - @input 문법 2
    ```vue
    <template>
    <v-text-field
      label="이름"
      :value="user.name"
      @input="user.name = $event"
    />
    </template>
    ```

    #### $event
    Vue에서 @input 등의 이벤트 핸들러에서 $event는 해당 이벤트를 트리거한 원본 DOM 이벤트 객체를 가리킨다.
    (블로그에서는 $event.target.value로 접근하는데 나는 그렇게하면 value를 찾을 수 없다는 오류와 함께 $event 그 자체가 value가 된다.. 왜 그런지는 잘 모르겠으므로 더 딥다이브하게 공부해봐야함)

- `v-model` 활용
  ```vue
  <template>
  <v-text-field
    label="이름"
    v-model="user.name"
  />
  </template>
  ```


# *$emit과 부모/자식 데이터 공유*

## 문제 발생

- ### 부모 컴포넌트  
  data에 변수를 등록하고, 해당 변수들을 자식 컴포넌트에 props로 전달한다.
  ```vue
  <template>
    <UserEdit
      :name="name"
    />
  </template>
  <script>
  import UserEdit from "./UserEdit.vue"

  export default {
    components: {
      UserEdit
    },
    data () {
      return {
        name: 'School',
      }
    }
  }
  </script>
  ```

- ### 자식 컴포넌트
  부모 컴포넌트로부터 전달받은 props를 자식에서 v-model을 통해 직접 수정하게 되면 이전과 동일한 avoid mutating 에러가 콘솔에 출력된다.  
  이는 부모 컴포넌트의 data 변수를 직접 수정하기 때문에 발생하는것이다.  
  ```vue
  <template>
      <v-text-field
        label="Error 예시 부모 props name 직접 수정"
        v-model="name"
      />
  </template>

  <script>
  export default {
    props: [ 'name'],
  }
  </script>
  ```

  이때 사용하는것이 바로 `$emit()` 함수이다.  
  `emit()`은 특정 시그널(신호)와 데이터를 함께 송신한다.  
  형태는 `emit('신호값',데이터)`와 같다.  
  emit을 수신할 수신지 컴포넌트 에서는 emit의 신호값을 `@신호값:함수명` 형태로 속성을 지정하고
  `methods`에 함수를 구현한다.  
  이때 함수의 매개변수에 자식 컴포넌트에서 emit을 통해 전달받은 데이터를 인자값으로 받아 사용할 수 있게 된다.

## Emit 적용
- ### 부모 컴포넌트  
  data에 변수를 등록하고, 해당 변수들을 자식 컴포넌트에 props로 전달한다.
  ```vue
  <template>
    <UserEdit
      :name="name"
      :hasDog="hasDog"
    />
  </template>
  <script>
  import UserEdit from "./UserEdit.vue"

  export default {
    components: {
      UserEdit
    },
    data () {
      return {
        name: 'School',
        hasDog: true,
      }
    }
  }
  </script>
  ```

- ### 자식 컴포넌트  
  자식 컴포넌트에서 직접 데이터를 수정할 수 없으니 `emit()`함수를 사용하기 전에 먼저 부모로 부터 받은 props를 user라는 Object로 재정의 및 초기화를 한다.  
  이후 `emit()`을 통해 신호와 재정의한 user객체를 함께 매개변수로 적용한다.
  ```vue
  <template>
    <div class="yellow lighten-3 pa-3">
      <h3>회원 정보를 수정할 수 있습니다.</h3>
      <p>수정사항</p>
      <v-text-field
        label="이름"
        v-model="user.name"
      />
      <v-radio-group v-model="user.hasDog">
        <v-radio label="반려견 있음" :value="true"></v-radio>
        <v-radio label="반려견 없음" :value="false"></v-radio>
      </v-radio-group>
      <v-btn @click="changeUser">수정완료</v-btn>
    </div>
  </template>

  <script>
  export default {
    props: [ 'name', 'address', 'phone', 'hasDog'],
    data () {
      return {
        user: {}
      }
    },
    created () { // 각 props 값 현재 컴포넌트의 data의 user Object에 재할당
      this.user.name = this.name
      this.user.hasDog = this.hasDog
    },
    methods: {
      changeUser () {
        this.$emit("child", this.user) 
      }
    }
  }
  </script>
  ```

- ### 부모 컴포넌트  
  자식 컴포넌트인 UserEdit 컴포넌트 Element에서 `@child="parents"` 과 같이 속성을 정의하여 methods 영역에 함수를 구현하고 바인딩한다.
  ```vue
  <template>
    <UserEdit
      :name="name"
      :hasDog="hasDog"
      @child="parents"
    />
  </template>
  <script>
  import UserEdit from "./UserEdit.vue"
  export default {
    components: {
      UserEdit
    },
    data () {
      return {
        name: 'School',
        hasDog: true,
      }
    },
    methods: {
      parents (user) { // emit 즉 @child로 받은 value를 매개변수로 받는다.
        this.name = user.name
        this.hasDog = user.hasDog
      }
    }
  }
  </script>
  ```

# EventBus와 created훅 (형제 컴포넌트간 통신)

- ## created 훅  
  [주요 역할]
  1. 데이터 초기화  
    → 데이터나 속성 값을 설정하거나 변경할 수 있다.
  2. 비동기 작업 시작  
    → API 호출이나 데이터 가져오기와 같은 비동기 작업을 시작할 수 있다.
  3. `이벤트 리스너 등록($on)`  
    → 이벤트 버스 또는 다른 이벤트 소스에 이벤트 리스너를 등록할 수 있다.
  4. 라이브러리 초기화  
    → 서드 파티 라이브러리나 플러그인을 초기화 할 수 있다.

  - ### created & $on()
    ```vue
    <script>
    export default {
      data() {
        return {
          editedDate: null
        }
      },
      created() {
        eventBus.$on(/* '이벤트명' */, /* 콜백함수  ()=>{} */) // 이벤트 리스너 등록
      }
    }
    </script>
    ```
- ## EventBus
  - ### `main.js`
      전역으로 eventBus라는 상수값 내보낸다.
      여기서 new Vue()란 새로운 vue인스턴스를 생성하는것.
    ```javascript
    /* 생략 */
    export const eventBus = new Vue()
    /* 생략 */
    ```
    eventBus에 $emit을 통해 신호를 송신
    즉, eventBus라는 새로운 vue인스턴스가 부모 역할을 한다는 것으로 추론 가능하다.
    해당 인스턴스를 구독하는 모든 컴포넌트에서는 해당 신호를 수신할 수 있게 된다.
    ```vue
    <script>
    import { eventBus } from './main';
    export default {
      methods: {
        changeUser () {
          eventBus.$emit('userWasEdited', new Date())
        }
      }
    }
    </script>
    ```
