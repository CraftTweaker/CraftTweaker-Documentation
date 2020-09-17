# Прогулка

## После установки

Прежде чем начать создавать блоки и таким образом, рекомендуется запустить Minecraft хотя бы один раз с установленным содержимым . Это позволит ContentTweaker создать папку ресурсов, которая ему нужна.

## Важные папки

ContentTweaker должен создать дополнительную папку в директории minecraft: "resources". Папка ресурсов будет содержать всех моделей, текстур и языковых файлов. Подробнее об этой папке будет объяснено позже. Папка "scripts", добавленная CraftTweaker - это место, где вы должны поместить все сценарии ContentTweaker, однако ContentTweaker скрипты должны начинаться с ```#loader contenttweaker``` в верхней части файла.

## Первый блок

Так что для лучшего примера работы содержимого ContentTweaker Я буду показывать вам одну из основных частей контента, которую вы будете создавать, блок. Есть и другие материалы, которые можно создать, но я не буду включать их в проход. Итак, во-первых, вот сценарий для блока я буду использовать в качестве примера. Пояснение этих методов можно найти на странице блоков.

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness(5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("кирка");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```

Это создаст блок, который слегка выглядит как ледяной блок Minecraft. Вы хотите поместить этот скрипт в папку 'scripts', следуя тем же правилам, что и в скриптах CraftTweaker.

## Ресурсы

Вы также должны принять . ng файл и поместите его в 'resources/contenttweaker/textures/blocks' (Эта папка должна быть создана для вас, если вы уже запустили ContentTweaker ) Имя файла должно соответствовать имени, которое вы вставили в createBlock, , который в этом случае является 'anti_ice'. Если вы планируете использовать стандартную форму куба с блоком, ContentTweaker будет генерировать jsons, необходимые для правильной работы.

Другая часть — это языковой файл. ContentTweaker уже сгенерировал файл ru_us.lang, который вам понадобится в строке, которая будет выглядеть как `tile.contenttweaker.<block_name>.name=Заблокировать имя` или в нашем случае с Антильдом будет `tile.contenttweaker.anti_ice.name=Anti Ice`. С как языком, так и текстурой наложены в вы сможете загрузить игру и увидеть свой блок, в котором будут находиться модель, текстура и название.