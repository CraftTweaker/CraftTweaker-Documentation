# Calculations

때로는 숫자를 입력해도 그것을 자르지 않습니다. 때로는 계산이 필요합니다. 하나에서 두 개 이상의 숫자를 사용할 수 있다는 점을 기억하십시오 `1+1+1+1`. 잘 작동 할 것입니다.

## A word of advice

계산에서 예상치 못한 결과가 발생할 경우, 두 가지 다른 유형을 사용했을 가능성이 매우 높습니다.  
예를 들어 `13 % 6.5 `은 정확한 결과가 0임에도 불구하고 1을 반환합니다. 왜? ZenScript는 항상 동일한 유형의 두 변수를 사용하여 계산을 수행합니다. ZenScript는 항상 동일한 유형의 두 변수를 사용하여 계산을 수행합니다. 이 예에서 두 번째 숫자(복수) 가 첫 번째 숫자( 정수) 와 일치하도록 변환되었기 때문에 수행된 계산은 `13 % 6`입니다.

항상 사용하는 두 가지 변수 유형에 주의해야 하며, 확실하지 않을 경우 인쇄 기능을 사용하여 출력을 로그에 인쇄하고 결과를 확인하십시오.

## Arithmetic Operators

여러분 모두 이미 알고 계실 겁니다, 그렇지 않으세요?

| Token | Tokenassign | Function       | Example |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Addition       | 1+2     |
| `-`   | `-=`        | Substraction   | 2-1     |
| `*`   | `*=`        | Multiplication | 1*1     |
| `/`   | `/=`        | Division       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concatenation

한 가지를 다른쪽에 둡니다.

    //prints "Hello World"
    print("Hello" ~ " " ~ "World");
    

## Calculation results

계산은 보통 결과로 끝납니다. 그럼 어떻게해야할까요?

### Assigning a variable

변수에 값을 할당하는 두 가지 방법은 다음과 같습니다.

    var test = 0;
    
    //Option 1:
    //assigns test with the value 3 (1+2)
    test = 1+2;
    
    //Option 2:
    //assigns test with 5 (3+2)
    test = test + 2;
    
    //Option 3:
    //assigns test with 2 (5-3)
    test -= 3;
    

옵션 1과 2는 `=` 토큰을 사용하여 반환 변수를 할당합니다.  
계산에 사용되지 않는 변수를 할당하려는 경우 이 방법이 초보자에게 가장 쉬운 방법일 수 있습니다.

옵션 3은 정상 감산 결과로 `->/0 앞에 변수를 할당합니다.<br />
이 페이지의 모든 연산자는 각각의 할당 토큰을 가지고 있습니다. 위의 표를 확인하십시오.</p>

<h3>Using the result otherwise</h3>

<p>계산 결과는 항상 함수 또는 조건문에서 사용할 수 있습니다.</p>

<pre><code>//prints 4
print(3+1);

//removes the item on array[4]
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("Used a calculation!")}
`</pre>