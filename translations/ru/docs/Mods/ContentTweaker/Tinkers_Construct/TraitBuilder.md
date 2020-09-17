# Настраиваемые симптомы

С помощью этого пакета вы можете создать симптом, который вы можете поместить на свои инструменты!

## Импорт класса

Возможно, вам потребуется импортировать класс, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import mods.contenttweaker.tconstruct.TraitBuilder;`

## Создание симптома

Прежде всего, вам нужно будет создать конструктор симптомов.  
Это можно сделать, используя статическую функцию:

```zenscript
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

`идентификатор` должен быть уникальным!  
Для `цвета`предлагается использовать шестнадцатеричную нотацию, как показано выше.  
`Максимальный уровень` является максимальным уровнем, который может стать симптомом, и по умолчанию 0.  
`countPerLevel` - сколько уровней может иметь симптом (например, редстоун, у которого есть 50).

После того, как вы закончите все изменения ниже, вам нужно зарегистрировать симптом.  
Это можно сделать с помощью `регистра` метода, , который вернёт [представление](/Mods/ContentTweaker/Tinkers_Construct/Trait/) нового симптома.

```zenscript
myTrait.register();
```

После регистрации, вы все еще можете изменить конструктор, сам симптом не может быть изменен.  
Таким образом можно легко создать несколько похожих симптомов.

## Элементы модификатора

Если вы комбинируете данный ингредиент вместе с инструментом в поддоне инструмента, вы можете применить симптомы в качестве модификатора.

```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `элемент` - это предмет, который соответствует данному предмету. Вы можете использовать [Условия предмета](/Vanilla/Items/Item_Conditions/) , но не преобразователей. 
- `Нужна сумма` — это совпадающее количество предметов. Вы можете разделить их на все ячейки, которые предоставляет ковка инструментов, что также позволяет вам идти выше 64. В приведенном выше примере тебе нужно 4 железных блока на добавку. По умолчанию 1.
- `Соответствующая сумма` - количество бонусных очков за `требуемое количество`. В примере выше четырех железных блоков задают две точки симптомов. По умолчанию 1.
- If you use the `remove function`, it will remove all trait ingredients that match for the item.

## Свойства

Вы можете задать и получить эти свойства, используя указанные имена:

| Название             | Тип    |
| -------------------- | ------ |
| цвет                 | int    |
| countPerLevel        | int    |
| hidden               | bool   |
| identifier           | string |
| описание локализации | string |
| localizedName        | string |
| максимальный уровень | int    |

## Вычисляемые свойства

Необходимо вычислить некоторые свойства.  
Вы можете задать определенные функции свойства:

### Капплинт вместе

Проверьте, можно ли добавить симптом к инструменту, который уже имеет другой симптом или [зачарование](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantDefinition enchant){....};
```

### Extra info

Возвращенная строка[] будет отображаться в качестве дополнительной информации на станции инструмента.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## Добавление функциональности

Теперь, когда вы создали симптом, вам нужно что-то модифицировать, не так ли?  
Это для обработчиков событий симптомов:  
Они вызываются всякий раз, когда пользователь что-то делает с инструментом, содержащим симптомы.

Ниже вы увидите все возможные обработчики, а также информацию о том, что они возвращаются, и как написать функцию для них. Помните, что вам придется заменить `myTrait` собственным именем переменных.  
Кроме того, вам нужно использовать только необходимые обработчики, пустые обработчики не нужны только для того, чтобы вы заполнили все.

<details>
    <summary>Все обработчики в оболочке</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">после блокировки</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">Кальккритит</a></li>
        <li><a href="#calcdamage">калькулятор</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockBack</a></li>
        <li><a href="#afterhit">после попадания</a></li>
        <li><a href="#onblock">onБлок</a></li>
        <li><a href="#onplayerhurt">истребление игрока</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">ремонт инструментов</a></li>
    </ul>
</details>

### onUpdate

Вызывается каждый тик инструмента загружается (это означает в инвентаре игрока).  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IWorld](/Vanilla/World/IWorld/) представляет `мир`
- [IEntity](/Vanilla/Entities/IEntity/) , представляющий владельца ``
- Подсказка, представляющая `слот элемента`
- Логическое значение, которое описывает, является ли инструмент `выбранным`

**Ничего не возвращает.**

Создано:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Вызывается, когда блок добыт.  
Будьте осторожны, так как это событие также попадает под ванильные обработчики blockBreak.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [Игровой Режим Скорости](/Vanilla/Events/Events/PlayerBreakSpeed/)

**Ничего не возвращает.**

Создано:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### beforeBlockBreak

Вызывается перед разрушением блока.  
Будьте осторожны, так как это событие также поймано ванильными обработчиками blockBreak.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [BlockBreakEvent](/Vanilla/Events/Events/BlockBreak/)

**Ничего не возвращает.**

Создано:

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### после блокировки

Вызывается после уничтожения блока.  
параметров:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IWorld](/Vanilla/World/IWorld/) представляет `мир`
- [IBlockState](/Vanilla/Blocks/IBlockState/) , представляющий сломанный `блок`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `шахтера`
- Бул, представляющий если добыча `была эффективной`

**Ничего не возвращает.**

Создано:

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Вызывается всякий раз, когда блок сломался.  
Будьте осторожны, так как это событие вызывается обработчиками onBlockHarvestBreak.  
Однако, в отличие от обработчика ванили, этот обработчик будет выполняться только когда игрок сломал блок.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**Ничего не возвращает**

Создано:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### Кальккритит

Вызывается перед повреждением объекта, рассчитывается для определения того, будет ли он критик или нет.  
Возвращение `false` не остановит попадание, которое уже является критом.  
параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `цель`

**возвращает бул** , который является `истины` , если попадание должно crit, false всякий раз, когда еще.

Создано:

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; //or false
};
```

### калькулятор

Вызывается при попадании предмета, но до нанесения урона и до того, как наносится критический урон.  
Результатом будет подсчитан критический урон.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `цель`
- Поплавка, представляющая исходный урон инструмента `` (бессменный урон инструмента)
- Поплавка, представляющая инструмент `newdamage` (урон инструмента будет наноситься до тех пор, пока он не достигнет этой точки, может быть оригинальным повреждением или уже изменен другими симптомами).
- Логическое значение, которое показывает попадание `isCritical`

**Возвращает плавающий** новый урон. Иначе верните `новый урон`

Создано

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, originalDamage, newDamage, isCritical) {
    //CODE
    возвращает newDamage; //Или измененное значение
};
```

### onHit

Вызывается при попадании сущности, перед нанесением урона.  
Расчет всего повреждения уже выполнен.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `цель`
- Поплавка, представляющая `урона от инструмента` (включая Critdamage)
- Логическое значение, которое показывает попадание `isCritical`

**Ничего не возвращает**

Создано

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
    //CODE
};
```

### calcKnockBack

Вызывается после попадания сущности, чтобы изменить применяемую обратную связь.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `цель`
- Поплавка, представляющая `повреждения инструмента` (включая крит)
- float представляющий `оригинальный откидываемый` (неизмененный откидывающийся инструмент)
- float representing the tool's `newKnockback` (nockBack the tool will do up until this point, может быть originalKnockback или уже модифицирован другими симптомами).
- Логическое значение, которое показывает попадание `isCritical`

**Возвращает float** , представляющий новый откидывающий ответ. В противном случае верните `newKnockback`

Создано

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    возвращает newDamage; //Или измененное значение
};
```

### после попадания

Вызывается после попадания объекта и после нанесения урона.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `цель`
- Поглощение с символом `урона по инструменту`
- Бул, представляющий если удар `wasCritical`
- Бул представляет, если сущность `попала`. Может быть ложным, если сущность была неуязвимой или имела некоторые другие способы причинения вреда.

**Ничего не возвращает**

Создано

```zenscript
mytrait.afterHit = function(trait, tool, attacker, target, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onБлок

Вызывается, когда игрок, удерживающий инструмент, блокирует атаку.  
Иначе `onHit` будет вызван.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IPlayer](/Vanilla/Players/IPlayer/) представляет игрока ``
- [Событие LivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Ничего не возвращает**

Создано

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### истребление игрока

Вызывается, когда игрок, держащий инструмент НЕ БЛОКИРОВАТЬ.  
В противном случае `onBlock` будет вызван.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- [IPlayer](/Vanilla/Players/IPlayer/) представляет игрока ``
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий `атакующий`
- [Событие LivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Ничего не возвращает**

Создано

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Вызывается до уменьшения прочности инструментов.  
параметров:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- Подсказка, представляющая `бесмодифицированное количество` долговечности, которая должна быть уменьшена.
- Подсказка, содержащая `новое кол-во` прочности, которая должна быть уменьшена, которая уже может быть изменена другими характеристиками.
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий текущий инструмент `держатель`

**Возвращает int** , представляющую новую сумму. В противном случае верните `новую сумму`

Создано

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    возвращает newAmount; //Или ваше измененное значение
};
```

### CalcToolHeal

Вызывается до увеличения прочности инструментов.  
параметров:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) представляющий используемый инструмент ``
- Подсказка, содержащая `бесмодифицированное количество` прочности, которая будет увеличена.
- Подсказка, содержащая `новое кол-во` прочности, которая должна быть увеличена, которая уже может быть изменена другими характеристиками.
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) , представляющий текущий инструмент `держатель`

**Возвращает int** , представляющую новую сумму. В противном случае верните `новую сумму`

Создано

```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    возвращает newAmount; //Или ваше измененное значение
};
```

### ремонт инструментов

Вызывается перед инструментом ремонт и ремонт чугуна.  
Не следует путать с `onToolHeal` , который называется позднее.  
Будет вызвано несколько раз, если используется несколько предметов одновременно.  
Параметры:

- [Представление симптомов](/Mods/ContentTweaker/Tinkers_Construct/Trait/) , представляющее используемый в настоящее время `симптом`.
- [IItemStack](/Vanilla/Items/IItemStack/) , представляющий инструмент `` , который будет отремонтирован
- Подсказка, представляющая `количество` прочности, которая будет увеличена.

**Ничего не возвращает**

Создано

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## Пример

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooo";
testTrait.localizedDescription = "Это весело! К сожалению, это ничего не делает... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```