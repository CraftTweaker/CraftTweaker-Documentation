# Tree Tweaker

Tweaker дерева является аддоном CraftTweaker, который позволяет добавлять пользовательские деревья к мировому поколению. Форма, высота, листья, бревна, частота, биома и многое другое можно настроить с помощью zenscript. Деревья могут использовать модовые блоки и быть настроены для генерации в модном биоме.

## Интеграция CraftTweaker

Проблемы дерева Tweaker должны обсуждаться в [Tweaker Issues tracker](https://github.com/superfluke/treetweaker/issues).

## Пакет

`import mods.treetweaker.TreeFactory;`

## Требования сценария

#### var **newtree = TreeFatory.createTree("newtree");**

создайте новое дерево под названием `newtree`, используя переменную`newtree`

`var newtree = TreeFactory.createTree("newtree");`

#### newtree.setTreeType("TREE_TYPE");

задать тип формы дерева для генерации как Принимает OAK, SPRUCE, JUNGLE, BIRCH, ACACACIA и DARK_OAK. `newtree.setTreeType("SPRUCE");`

#### newtree.register();

зарегистрировать дерево, чтобы добавить в worldgen. Не забудьте вызвать этот метод в последнюю очередь. `newtree.register();`

## Необязательные синтаксисы

#### newtree.setLog("modid:itemid");

укажите какой журнал использовать  
`newtree.setLog(("minecraft:wool:3");`

#### newtree.setLeaf("modid:itemid");

установите какой лист использовать  
`newtree.setLeaf("minecraft:melon_block");`

#### newtree.setMinHeight(INT);

задать минимальную высоту дерева. `newtree.setMinHeight(5);`

#### newtree.setExtraHeight(INT);

Дополнительная высота случайно добавляется, когда дерево генерирует `дерева.setExtraHeight(5);`

#### newtree.setGenFrequency(INT);

Используется для управления частотой генерации дерева, успешно спавна со скоростью 1 в попытках N `newtree.setGenFrequency(5)`

#### newtree.setGenAttempts(INT);

Сколько деревьев должно появляться во время успешной попытки поколения. Может быть использован для создания кластеров деревьев `newtree.setGenAttempts(1)`

#### newtree.extraThick=boolean;

Делает дерево сгенерировать толщиной 2x2. Допустимо только для деревьев LARGE_OAK, PINE, CANOPY и SPRUCE `newtree.extraThick=true;`

#### newtree.setGenBiome("string:string");

Установите биом спавна, игнорируя типичные биомные правила.  
Если дерево не установлено, дерево будет генерировать во всех биомах, которые обычно содержат деревья.  
`newtree.setGenBiome("minecraft:plains")`

#### newtree.setGenBiomeByTag("STRING");

Дерево тегов биома может генерироваться в (HOT, SWAMP, SNOWY...), игнорируя обычные правила биома . Не будет работать, пока spawnBiome не будет нулевым. `newtree.setGenBiomeByTag("HOT");`

#### newtree.setBaseBlock("modid:itemid")

Какой блок дерево должно генерироваться поверх него. Если не установлено, будет блокировать действительные для ванильных деревьев (трава, земля, земля) `newtree.setBaseBlock("minecraft:dirt");`

#### newtree.setDimWhitelist(INT);

Либо одинарная подсказка, либо массив ints, перечисляющих идентификаторы измерений, которые могут генерироваться деревом. Если null, может генерировать в любом измерении `newtree.setDimWhitelist(0);`