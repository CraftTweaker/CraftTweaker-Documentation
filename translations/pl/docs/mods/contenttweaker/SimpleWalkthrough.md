# Proste przejście

Cześć, uprzejmie tutaj. Więc wypróbujesz ContentTweaker dla 1.15, co?

Czasami zazwyczaj skrócę ContentTweaker za pomocą CoT, aby mnie oszczędzić kilka liter (jest to już bardziej automatyka z Discorda), więc zostań ze mną, dobrze? Następnie najpierw zalecam zainstalowanie modu menedżera zasobów, tak aby bloki/elementy które masz do dodawania tekstur i modeli dla bloków i przedmiotów później włączono.

ContentTweaker spróbuje utworzyć pliki modelowe oraz prosty obraz bez tekstur w folderze zasobów, tak długo, jak będzie wykrywać modyfikację [loader](https://www.curseforge.com/minecraft/mc-mods/the-loader) lub [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) zainstalowany. Jeśli żaden z nich nie jest zainstalowany, wyświetli on tylko wiadomość do dziennika stwierdzającą, że nie utworzy dla Ciebie tekstur. W pewnym momencie możliwe będzie również całkowite wyłączenie generowania tekstur, ale nie w wersji curren Alpha/Beta.

Dla wygenerowanych tekstur, CoT nie zastąpi plików, jeśli już istnieją, więc możesz po prostu zastąpić istniejące pliki własnymi plikami i CoT nie cofnie tych zmian.


Teraz dotrzemy do tego, prawda? Podam przykłady kilku prostych bloków i przedmiotów. Jeśli chcesz zobaczyć wszystko w tej klasie, możesz znaleźć eksport API w folderze API bezpośrednio poniżej tego pliku w pasku nawigacyjnym!

## Loader ContentTweaker
Ponieważ CraftTweaker w 1.14+ będzie ładował się, gdy serwer jest gotowy i działa, potrzebujemy sposobu na załadowanie skryptów gdzieś indziej. Dla tego jest `#loader contenttweaker` !  
Po prostu umieść go gdzieś w pliku (preferowane z góry) i jesteś gotowy.  
Pamiętaj **skrypty słabszego rzemieślnika nie są dozwolone** w `#loader contenttweaker`, ponieważ działają w różnych fazach cyklu laodowego!


## Bloki

Aby utworzyć bloki musisz utworzyć obiekt [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) .  
Gdy już będziesz mieć taką możliwość, możesz ustawić najbardziej proste właściwości w wzorcu konstruktora.

Możesz wtedy bezpośrednio wywołać `build(nazwa)` i zrobić jeśli chcesz utworzyć podstawowy blok.  
Możesz też specjalizować budowniczego używając `withType` i zapewnić specjalistyczną klasę konstruktora, na przykład [BuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) lub [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Sprawdź swoje strony, aby zobaczyć, jakie dodatkowe funkcje oferują. Pamiętaj, że gdy zadzwonisz withType, nie ma cofania się, więc ustaw wszystkie podstawowe właściwości przed połączeniem.

Pamiętaj, cokolwiek zrobisz, na końcu łańcucha **potrzebujesz połączenia `build(name)`**, ponieważ w przeciwnym razie nic się nie stanie!

Wystarczająco mówić, chcesz podać przykład kopiowania/wklejania, prawda?

```zenscript
#loader contenttweaker

importuje mods.contenttweaker.block.BlockBuilder;
importuje mods.contenttweaker.block.stairs.BlockBuilderStairs;
importuje mods.contenttweaker.block.basic.BlockBuilderBasic;
importuje mods.contenttweaker. bloczka.filar. lockBuilderPillarRotatable;


//Najprostszy sposób, używa blockamterial IRON
new BlockBuilder()
    //Will delegate to the Basic Builder
    . uild("generic_block");


//Ustawia inny materiał blokowy.
nowy Kreator Block(<blockmaterial:earth>
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


//Filar jest zasadniczo taki sam jak logi, jedna tekstura na górze/dole i jedna na boki.
//Może być obracany na wszystkich osiach, tak jak logi.
//Nazwy tekstury będą domyślnie "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Schody.
//Ma 3 tekstylia, górze, dół, boki, domyślnie będą to "block_name" + "_top", "_bottom", "_bokes"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Przedmioty

Dla przedmiotów, robisz to samo, ale tym razem potrzebujesz [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
Możesz ponownie użyć `build(nazwa)` bezpośrednio, lub przełącz się na specjalną wersję używając `withType`.  
W czasie tego pisania istnieje jednak tylko [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool).

Pamiętaj, cokolwiek zrobisz, na końcu łańcucha **potrzebujesz połączenia `build(name)`**, ponieważ w przeciwnym razie nic się nie stanie!

Wystarczająco mówić, chcesz podać przykład kopiowania/wklejania, prawda?
```zenscript
#loader contenttweaker

importuje mods.contenttweaker.item.ItemBuilder;
importuje mods.contenttweaker.item.tool.ItemBuilderTool;

//Najprostszy sposób tworzenia przedmiotów.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize i MaxDamage są ze sobą sprzeczne, więc używaj tylko 1
    . uild("other_item");


//Jeśli chcesz użyć narzędzi, musisz ustawić typ.
//Od momentu ustawienia typu zmieniasz konteksty, więc inne metody nie będą już dostępne.
//Oznacza to, że musisz ustawić trwałość i podobną _przed_ połączenie withType.
nowy ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //poziom zbioru Axe = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //Łopata poziomu 3 i niszcz szybkość 4.0
    . uild("my_tool");



//Jeśli chcesz użyć narzędzia, które zadaje obrażenia, możesz również użyć narzędzia
nowy ItemBuilder()
    . ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withTrabilityCostAttack(1) //Domyślnie: 2
    .build("my_mace");

```

## Nazwisko
Jak więc posunąć się o nadanie przedmiotom odpowiednich nazw?  
W tym celu potrzebujesz pliku lang.  
W momencie pisania CoT nie utworzyło jeszcze tego dla Ciebie, więc będziesz musiał utworzyć to sam.  
W twoim pakiecie zasobów znajdź folder `zasobów/contenttweaker` .  
W tym miejscu utwórz folder o nazwie `lang` , jeśli jeszcze nie istnieje, i utwórz plik o nazwie `en_us. syn` w tym miejscu.  
Polecam zawsze zaczynać się od en_us, ponieważ do tego wróci gra, jeśli nie może znaleźć nazwy dla innego języka. Następnie możesz to powtórzyć również z innymi kodami językowymi.

W tym miejscu będziesz musiał utworzyć mapę Key-Value dla swoich wpisów. Klucze zwane również kluczami tłumaczeniowymi lub we wcześniejszych wersjach niezlokalizowanej nazwy, zależą od nazwy użytego bloku/przedmiotu i będą wyglądać jak
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Dla tej wartości możesz ustawić, w jaki sposób przedmiot jest tam nazwany. Jeśli nie masz pewności co do składni, sprawdź poniższy przykład lub spróbuj walidatora JSON.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Generic Item",
  "item.contenttweaker.generic_item_2": "Generic Item the 2nd",
  "item.contenttweaker.generic_item_3": "Generic Item the charmed one"
}
```