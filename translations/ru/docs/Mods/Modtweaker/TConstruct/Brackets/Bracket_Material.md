# ITICMaterial Bracket Handler

Обработчик деталей Material Part дает вам доступ к [материалам цинкеров](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) в игре. Вы можете получить только зарегистрированные в игре материалы, поэтому при добавлении или удалении определенных модификаций вам необходимо быть осторожными.

Материалы ссылаются на обработчик Material Bracket таким образом:

```zenscript
<ticmat:mat>

<ticmat:stone>
```

If the ITICMaterial is found, this will return an [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) Object.  
Please refer to the [respective Wiki entry](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) for further information on what you can do with these.