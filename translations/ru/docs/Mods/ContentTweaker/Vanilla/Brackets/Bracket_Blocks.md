# Обработчик скобок

Обработчик браслетов дает вам доступ к блокам в игре. Можно получить только зарегистрированные в игре, так что добавление или удаление модов может вызвать проблемы, если вы ссылаетесь на блоки мода в обработчике блоков блоков.

Блоки упоминаются в обработчике Блок таким образом:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

If the block is found, this will return an [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Object.  
Please refer to the [respective Wiki entry](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) for further information on what you can do with these.