# Обработчик скобок повреждения

Обработчик исходных скобок урона позволяет ссылаться на [IDamageSources](/Vanilla/Damage/IDamageSource/) в игре.

Если источник повреждения не является одним из предопределенных, то это создаст новый источник с заданным именем.

<details>
    <summary>Предварительно зарегистрированные типы источников урона</summary>
    <ul>
        <li>В начало</li>
        <li>LIGNING_BOLT</li>
        <li>ON_FIRE</li>
        <li>LAVA</li>
        <li>HOT_FLOOR</li>
        <li>В WALL</li>
        <li>СОЗДАНИЕ</li>
        <li>БРОНИРОВАНИЕ</li>
        <li>НАЧАТЬ</li>
        <li>CACTUS</li>
        <li>СНОЙ</li>
        <li>FLY_INTO_WALL</li>
        <li>OUT_WORLD</li>
        <li>GENERIC</li>
        <li>МАГИЧЕСКИЙ</li>
        <li>СВОБОДА</li>
        <li>ПРИГЛАСИТЬ</li>
        <li>FALLING BLOCK</li>
        <li>ДЕРЖАНИЕ_СТАНДАРТЫ</li>
        <li>ПОДРОБНО</li>
    </ul>
</details>

```zenscript
<damageSource:type>;

<damageSource:IN_FIRE>;
```