# Idź przez

## Po instalacji

Najpierw przed rozpoczęciem tworzenia bloków i tym samym sugeruje się uruchomienie Minecraft co najmniej raz z zainstalowanym ContentTweaker. Pozwoli to ContentTweaker na stworzenie folderu zasobów, którego potrzebuje.

## Ważne foldery

ContentTweaker powinien utworzyć dodatkowy folder w twoim katalogu minecraft: "resources". Folder zasobów będzie w którym znajdziesz wszystkie modele, tekstury i pliki językowe. Więcej na ten folder zostanie wyjaśnione później. Folder "scripts" dodany przez CraftTweaker to miejsce, w którym należy umieścić wszystkie skrypty ContentTweaker, jednak skrypty ContentTweaker powinny zaczynać się od ```#loader contenttweaker``` na górze pliku.

## Pierwszy blok

Dla najlepszego przykładu działania treści ContentTweaker, Pokażę ci jeden z podstawowych elementów, które stworzysz, blok. Istnieje inna treść, która może zostać utworzona, ale nie będę wliczać jej do tego przejść. Po pierwsze, oto skrypt bloku, którego użyję jako przykładu. Wyjaśnienie tych metod można znaleźć na stronie Blocks.

```zenscript
#loader contenttweaker

importuje mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:ice>);
antiIceBlock.setLightOpacity(3);
antiIceBlock.setLightValue(0);
antiIceBlock. etBlockHardness (5.0);
antiIceBlock.setBlockResistance(5.0);
antiIceBlock.setToolClass("pickaxe");
antiIceBlock.setToolLevel(0);
antiIceBlock.setBlockSoundType(<soundtype:snow>);
antiIceBlock.setSlipperiness(0.3);
antiIceBlock.register();
```

Spowoduje to utworzenie bloku, który wygląda i działa nieco jak Lodowy Blok Minecrafta. Chcesz umieścić ten skrypt w folderze , zgodnie z tymi samymi zasadami, co w skryptach CraftTweaker.

## Zasoby

Pacjent będzie również musiał wziąć . ng plik i umieść go w 'resources/contenttweaker/textures/blocks' (ten folder powinien być stworzony dla Ciebie, jeśli uruchomiłeś już ContentTweaker) Nazwa pliku powinna odpowiadać nazwie, którą umieściłeś w createBlock, która w tym przypadku jest „anty_lodowa”. Jeśli planujesz użyć domyślnego kształtu kostki z blokiem, ContentTweaker wygeneruje formaty potrzebne do prawidłowego działania.

Druga część dla tego będzie plikiem językowym. ContentTweaker wygenerował już plik en_us.lang , który będzie musiał wyglądać jak `tile.contenttweaker.<block_name>.name=Block name` lub w naszym przypadku z Antylodem będzie `tile.contenttweaker.anti_ice.name=Anti Lce`. Z zarówno lang, jak i teksturą, powinieneś być w stanie załadować grę i zobaczyć swój blok, który będzie miał model, teksturę i nazwę.