# Обработчик SoundType

Обработчик SoundType Bracket дает вам доступ к SoundTypes в игре. В настоящее время поддерживаются только звуковые типы:

<details>
    <summary>Нажмите, чтобы развернуть список типов</summary>
    <ul>
        <li>Дерево</li>
        <li>Земля</li>
        <li>Растение</li>
        <li>Камень</li>
        <li>Металл</li>
        <li>Стекло</li>
        <li>Ткань</li>
        <li>Песок</li>
        <li>Снег</li>
        <li>Лестница</li>
        <li>Наковальня</li>
        <li>Slime</li>
    </ul>
</details>

Звуковые типы ссылаются на обработчика SoundType таким образом:

```zenscript
<soundtype:name>

<soundtype:wood>
```

If the soundType is found, this will return an [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) Object.