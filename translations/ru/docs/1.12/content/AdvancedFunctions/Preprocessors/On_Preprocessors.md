# О препроцессорах

## Что такое препроцессоры
As the name suggests, preprocessors are executed before the script is executed.  
They can perform various actions like enabling Debug Mode or Supress Bracket Errors.

## Вызов препроцессора
A preprocessor can be called using the #comment function.  
Be careful with the comments though as you might start one with a preprocessor keyword.

```zenscript
#debug &mdash; мое любимое слово, и мне нравится добавлять его везде в качестве комментария
```

↑ Включит режим отладки, так как будет найден препроцессор `#debug`. Если вы действительно хотите удостовериться, что так ни в коем случае не произойдет, используйте `//` для комментариев.