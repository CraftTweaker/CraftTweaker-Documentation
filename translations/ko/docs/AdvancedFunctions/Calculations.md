# Calculations

때로는 숫자를 입력해도 그것을 자르지 않습니다. 때로는 계산이 필요합니다. 하나에서 두 개 이상의 숫자를 사용할 수 있다는 점을 기억하십시오 `1+1+1+1`. 잘 작동 할 것입니다.

## A word of advice

계산에서 예상치 못한 결과가 발생할 경우, 두 가지 다른 유형을 사용했을 가능성이 매우 높습니다.  
예를 들어 `13 % 6.5 `은 정확한 결과가 0임에도 불구하고 1을 반환합니다. 왜? ZenScript는 항상 동일한 유형의 두 변수를 사용하여 계산을 수행합니다. ZenScript는 항상 동일한 유형의 두 변수를 사용하여 계산을 수행합니다. In this example, the calculation performed was `13 % 6`, as the 2nd number (a double) was converted to match the first one (an Integer).

Always be careful about what two variable types you use and when in doubt, just use a print function to print the output to the log and confirm the results.

## Arithmetic Operators

I'm pretty sure all of you know these already, don't you?

| Token | Tokenassign | Function       | Example |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Addition       | 1+2     |
| `-`   | `-=`        | Substraction   | 2-1     |
| `*`   | `*=`        | Multiplication | 1*1     |
| `/`   | `/=`        | Division       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concatenation

Puts one thing at the and of the other

    //prints "Hello World"
    print("Hello" ~ " " ~ "World");
    

## Calculation results

A calculation usually ends up with a result. So what to do with that?

### Assigning a variable

There are two ways of assigning a value to a variable:

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
    

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### Using the result otherwise

You can always use the result of a calculation in a function or a conditional statement:

    //prints 4
    print(3+1);
    
    //removes the item on array[4]
    recipes.remove(array[3+1]);
    
    //
    if(3+1 == 2*2) {print("Used a calculation!")}