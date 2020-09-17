# Пользовательские типы

Пользовательские Типы - это новый мощный способ для вас создать свои *пользовательские* вещи на сцене. В основном это то, что вы можете сделать, скажем, например, событие из Minecraft или этап списка блоков, чтобы не допустить взаимодействия или поломки игрока. Использование [событий](/Vanilla/Events/IEventManager/) предоставляет Craftweaker. Это дает вам возможность заблокировать больше вещей. Создание полного пользовательского опыта в игре без необходимости дополнительных модов. Как все, что вам нужно, ZenStages и CraftTweaker звучит довольно круто, да?

Это еще довольно новая система, и *может содержать ошибки*. Если вы заметите что-нибудь, сообщите о них [нашему репозиторию](https://github.com/DarkPacks/ZenStages/issues) , чтобы мы могли посмотреть на нее!

Замечание: This is a complete custom type nothing will check against this internally. Вам нужно создать и прослушать [События](/Vanilla/Events/IEventManager/) , а затем вызвать предложенные методы в [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) для выполнения проверки. Итак, *slug/name* , которое вы используете для типа, вам нужно отметить где-то внизу, чтобы узнать, что делает.

Примечание: Это также рекомендуемый стандарт, который вы используете для **всех** пользовательских типов.

## Импорт пакета

`import mods.zenstages.type.CustomStageType;`

## Как их создать

Пользовательские типы создаются через [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) , используя следующий метод.

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("Запрещенный размер", 14);
```

После создания пользовательского типа вы можете назначить этот тип на [этап](/Mods/GameStages/ZenStages/Stage/). Звонив следующее.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Как выполнить проверку на пользовательский тип

Этот метод требует установки этапа на тип. Используя приведенный выше метод. В противном случае он возвращает null.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Этот метод не требует установки пользовательского типа *на сцену*

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```