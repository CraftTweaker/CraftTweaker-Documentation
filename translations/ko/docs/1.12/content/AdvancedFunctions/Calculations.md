# 계산

때로는 숫자를 입력해도 그것을 자르지 않습니다. Sometimes you need some calculation.  
Remember that you can use more than two numbers at one, `1+1+1+1` would work fine as well.

## 충고 한마디

When unexpected results happen in a calculation, it is very well possible that you used two different types.  
For example `13 % 6.5` returns 1, even though the correct result is 0. 왜일까요? ZenScript는 항상 동일한 유형의 두 변수를 사용하여 계산을 수행합니다. 여기에서는 두번째 숫자의 타입을 첫번째와 동일하게 변환을 합니다. 이 예에서 두 번째 숫자(실수)가 첫 번째 숫자(정수)와 일치하도록 변환되었기 때문에 수행된 계산은 `13 % 6`입니다.

항상 양쪽 변수의 타입에 주의해야 하며, 확실하지 않을 경우 print 함수를 사용하여 결과를 로그에 출력하여 확인하십시오.

## 산술 연산자

다음 내용들은 이미 다 알고 있을거라고 생각합니다.

| 토큰  | 복합대입 토큰 | 함수             | 예제     |
| --- | ------- | -------------- | ------ |
| `+` | `+=`    | Addition       | 1+2    |
| `-` | `-=`    | Substraction   | 2-1    |
| `*` | `*=`    | Multiplication | 1*1    |
| `/` | `/=`    | Division       | 2/2    |
| `%` | `%=`    | Modulo         | 13 % 6 |

## 연결

한 가지를 다른쪽에 둡니다.

```zenscript
//"Hello World" 출력
print("Hello" ~ " " ~ "World");
```

## 계산 결과

계산은 보통 결과로 끝납니다. 그럼 어떻게해야할까요?

### 변수에 할당

변수에 값을 할당하는 두 가지 방법은 다음과 같습니다.

```zenscript
var test = 0;

//Option 1:
//3 (1+2) 을 test에 할당
test = 1+2;

//Option 2:
//5 (3+2) 를 test에 할당
test = test + 2;

//Option 3:
//2 (5-3) 를 test에 할당
test -= 3;
```

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### 결과의 사용

계산 결과는 항상 함수 또는 조건문에서 사용할 수 있습니다.

```zenscript
// 4
print(3+1);

//array[4] 요소를 제거
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("Used a calculation!")}
```
