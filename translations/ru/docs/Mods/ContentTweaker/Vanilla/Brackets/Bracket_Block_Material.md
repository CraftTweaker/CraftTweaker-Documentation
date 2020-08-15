# Обработчик фигурных скобок

Обработчик Блок Material Bracket дает вам доступ к Блочным материалам в игре. В настоящее время поддерживается единственный блок материалов:

<details>
    <summary>Нажмите, чтобы расширить список материалов</summary>
    <ul>
        <li>Воздушный</li>
        <li>Трава</li>
        <li>Земля</li>
        <li>Дерево</li>
        <li>Камень</li>
        <li>Железо</li>
        <li>Наковальня</li>
        <li>Вода</li>
        <li>Lava</li>
        <li>Листья</li>
        <li>Растения</li>
        <li>Vine</li>
        <li>Sponge</li>
        <li>Ткань</li>
        <li>Огонь</li>
        <li>песок</li>
        <li>Схемы</li>
        <li>Ковер</li>
        <li>Стекло</li>
        <li>Редстоун_светлый</li>
        <li>TNT</li>
        <li>Корал</li>
        <li>Лед</li>
        <li>Упакованный льд</li>
        <li>Снег создан</li>
        <li>Cactus</li>
        <li>Глина</li>
        <li>Gourd</li>
        <li>Яйцо Дракона</li>
        <li>Портал</li>
        <li>Торт</li>
        <li>Веб</li>
    </ul>
</details>

Материалы блока ссылаются в обработчике материала таким образом:

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

Если блок материала будет найден, это приведет к возврату объекта [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/).