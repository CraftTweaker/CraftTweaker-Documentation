# Обработчик звуковых событий

Обработчик SoundEvent дает вам доступ к SoundEvents в игре.  
Проверьте [](https://minecraft.gamepedia.com/Sounds.json) на список ванильных звуковых событий!

Звуковые типы упоминаются в обработчике звуковых событий следующим образом:

Vanilla

```zenscript
<soundevent:name>

<soundevent:ambient.cave>
```

Мод добавлен

```zenscript
<soundevent:modID:name>

<soundevent:minecraft:ambient.cave>
```

Если звуковой тип найден, это вернет объект [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/).