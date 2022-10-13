# On Preprocessors

## Preprocessors란?
As the name suggests, preprocessors are executed before the script is executed.  
They can perform various actions like enabling Debug Mode or Supress Bracket Errors.

## Preprocessor 호출
A preprocessor can be called using the #comment function.  
Be careful with the comments though as you might start one with a preprocessor keyword.

```zenscript
#debug 는 내가 가장 좋아하는 단어이고, 어디에나 주석으로 사용하고 싶습니다.
```

↑ `#debug`가 발견되면 디버그 모드를 활성화합니다. 이와같은 원치 않는 상황이 발생하지 않도록 하려면 주석은 `//`를 사용하십시오.