[##_Image|kage@chEmnL/btqUf06ZYMz/X6xknktwYhw6soDBkd3DGK/img.png|alignLeft|data-filename="jsimg.png" data-origin-width="225" data-origin-height="225" data-ke-mobilestyle="widthContent"|||_##]

- #### **Immutable.JS**

immutable.js는 자바스크립트 상에서 불변성의 데이터를 다루는 것을 도와준다.

리액트/리덕스에서 상태 값 혹은 상위 컴포넌트에서 전달받은 props를 변경해줄 때 값에 직접 접근하여 수정하는 것이 아닌 스프레드를 이용해서 새로운객체/배열을 만들어서 수정해주었다.

이런 작업이 계속 되다 보면 코드가 복잡해지는 문제점이 있다. 가령 중첩객체의 값을 업데이트하게 된다면 아래와 같은 성가신 단계를 거쳐야한다.

```js
let object1 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: {
      g: 5,
      h: 6,
    },
  },
};

// h값을 10으로 업데이트함
let object2 = {
  ...object,
  d: {
    ...object.d,
    f: {
      ...object.d.f,
      h: 10,
    },
  },
};

//! 배열에서는 타겟 원소의 위치 전후로 slice를 통해 가져와야하는 성가신 일이 발생한다.
```

이런 복잡한 단계 때문에 facebook 개발팀에서는 immutable.js라는 라이브러리를 만들어냈다.

immutable.js에 대해서 알아보기 전에 자바스크립트의 불변성이란 개념에 대해서 먼저 정리해보려 한다.

- ** 자바스크립트의 불변성**

객체는 참조형태로 값을 주고 받는다. A라는 객체가 생성되고 B라는 객체가 A객체를 참조하고 있다면 B의 변형만으로 A객체의 값이 변형이 되는 문제가 일어날 수 있다. 이런 것을 막기 위해 보통 spread나 assign을 통해 제 3의 객체를 복사해내어 사용하곤한다.

자바스크립트에는 immutable value와 mutable value가 있다.

immutable value :  boolean, strign, number, undefined, null  (원시값)

```js
//var
var x = 1;
var y = 2;
x = 3;
y = 4; //메모리 상에는 1,2,3,4가 모두 존재하나 x,y가 재할당된 값을 가리키도록 변경됨.
console.log(x, y); // 3, 4

//let
let x = 1;
let y = 2;
x = 3;
y = 4;
console.log(x, y); // 3, 4

//const 재선언/재할당 불가능
const x = 1;
const y = 2;
x = 3; // TypeError: Assignment to constant variable.
y = 4; // TypeError: Assignment to constant variable.
console.log(x, y); // 1, 2

//immut의 값은 원시타입이기 때문에 새로운 문자를 생성해서 반환
let immut = "immutable";
let mut = immut.replace("imm", "m"); //대상값에 영향을 주지 않는다.

console.log(immut, mut); // immutable, mutable
```

mutable value : 원시타입을 제외한 이하를 객체 타입으로 볼 수 있으며 새로운 값을 만들지 않고 직접 변경이 가능한 mutable value이다.

```js
let arr = [1];
let arrCopy = arr;
arrCopy.push(2);
console.log(arr, arrCopy); //[1,2], [1,2]
//배열도 객체이므로 mutable하다. 그러므로 push()는 arrCopy가 참조하고 있는 arr의 값에도 영향을 준다.

let obj = { name: "hanur" };
let objCopy = obj;
objCopy.name = "han_ur";
objCopy.LastName = "kang";
console.log(obj, objCopy); //{name: "han_ur", LastName: "kang"}, {name: "han_ur", LastName: "kang"}
```

```js
1. Object.assign(target,...obj) : 객체 복사 (중첩객체에서는 완전한 복사를 하지 못함.)

let obj = {name : 'hanur'}
let objCopy = Object.assign({},obj)
objCopy.name = 'han_ur'
objCopy.LastName = 'kang'
console.log(obj, objCopy)// {name: "hanur"} {name: "han_ur", LastName: "kang"}
---------------------------
let user = {
  name: 'hanur',
  body: {
    weight: 75
  }
}
let userCopy = Object.assign({}, user)
console.log(user === userCopy)// false - user와 userCopy의 참조는 다르다.
console.log(user.body === userCopy.body)// true - 객체 내부 객체의 참조는 같다.
user.body.weight = 65

console.log(user.body.weight); //65
console.log(userCopy.body.weight); //65



2. spread : 객체 복사
let obj = {name : 'hanur'}
let objCopy = {...obj} //스프레드로 복사본 생성
objCopy.name = 'han_ur'
objCopy.LastName = 'kang'
console.log(obj, objCopy) //name: "hanur"} {name: "han_ur", LastName: "kang"}


3. Object.freeze() : 객체의 불변화를 통한 객체 변경 방지(중첩객체에 대응하지 못한다.)
let user = { name: 'hanur' }
Object.freeze(user)
user.name = 'han_ur' // 재할당 할 수 없다.
console.log(user)// {name: "hanur"}name: "hanur"
-------------------------
let user = {
  name: 'hanur',
  body: {
    weight: 75
  }
}
Object.freeze(user)
user.body.weight = 65 // 재할당 가능하다.
console.log(user) //{ user: 'hanur', body: { weight: 65 } }

```

- **Immutable JS**

<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.7.3/immutable.min.js"></script>

**\- Map**

immutable에서 map은 객체 대신 사용되는 데이터 타입이다. (JS method 'map()'과는 다른 것).

1 : 타겟 객체를 Map으로 감싸서 선언해준다.

```js
let Map = Immutable.Map;

let data = Map({
  name: "hanur",
  age: "28",
  sex: "male",
  height: "174",
  weight: "74",
  dev: Map({
    lang: "JavaScript",
    frameW: "react",
  }),
});

console.log(data); // Map data를 출력할 수 없음.
console.log(data.name); // undefined
```

2 : 자바스크립트 객체로 변환해준다.

```js
data.toJS();
//[object Object] {
//  age: "28",
//  dev: [object Object] {
//    frameW: "react",
//    lang: "JavaScript"
//  },
//  height: "174",
//  name: "hanur",
//  sex: "male",
//  weight: "74"
//}
```

3 : 값을 불러올 때.

```js
//일반객체
data.get("name"); // hanur
//중첩객체
data.getIn(["dev", "lang"]); // JavaScript
```

4 : 값 설정할 때

```js
//일반객체
let newData = data.set('name','han_ur')
console.log(newData.get('name'))  //han_ur

//중첩객체
let newData = data.setIn(['dev','lang'],'JS')
console.log(newData.get('name')) //JS

//여러 개의 값 설정
1.let newData = data.mergeIn(['dev'], { lang: 'js', frameW: 'REACT' });
2.let newData = data.setIn(['dev','lang'],'js').setIn(['dev','frameW'],'REACT' );
```

**\- List**
List는 Immutable.js에서 배열 대신 사용되는 데이터 구조이다. 배열에서 사용되는 메소드인 map(), filter(), sort(), push(),pop() 들을 내장하고 있다.

이들의 리턴값은 또 다른 List이다.

1 : 새로운 List 생성

```
let List = Immutable.List;
let list = List(['han','ur',['kang']])
```

2 : 객체들의 배열일 경우.

```
//일반배열 생성 (Map과 마찬가지로 일반 배열로 변환 가능)
let List = Immutable.List;
let list = List(['han','ur',['kang']])
list.Immutable.fromJS();

//원소가 객체인 배열
let List = Immutable.List;
let Map = Immutable.Map;
let fromJS = Immutable.fromJS;

1.let ImList = List([
Map({name:'hanur'}),
Map({age:'28'})
]);

2.let ImList = fromJS([
{name:'hanur'},
{age:'28'}
])
```

3 : 값 읽어오기

```
let List = Immutable.List;
let list = List(['han','ur',['kang']])

list.get(index)
list.get(0) //'han'
```

4 : 원소 수정/추가/제거/크기 가져오기

```
//일반배열 생성 (Map과 마찬가지로 일반 배열로 변환 가능)
let List = Immutable.List;
let list = List(['han','ur',['kang']])
list.Immutable.fromJS();

list.get(2) //['kang']

//원소가 객체인 배열
let List = Immutable.List;
let Map = ImImmutable.Map;
let fromJS = Immutable.fromJS;

let list = List([
Map({name:'hanur'}),
Map({age:'28'})
]);

1.//.setIn([index, key],targetValue)
	let newList = list.setIn([0, name],'Kang_han_ur')


2.//.update(index ,item=>item.set(key,item.get(key) * targetValue))
```
