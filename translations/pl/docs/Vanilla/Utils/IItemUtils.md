# IItemUtils

Interfejs ItemUtils zawiera różne elementy elementu.  
Można go uzyskać za pomocą `elementów` słów kluczowych.

## Tworzenie mikstur

Funkcja createPotions pozwala tworzyć niestandardowe mikstury.  
Zwraca miksturę jako [IItemStack](/Vanilla/Items/IItemStack/).  
Ponieważ parametr dla tej funkcji jest vararg, można podać jeden obiekt [][] lub wiele obiektów[].  
W obu przypadkach każdy obiekt [] musi zawierać

1. [Mikstura](/Vanilla/Potions/IPotion/)
2. Barwa opisująca wzmacniacze/wytrzymałość
3. Wycinek opisujący czas trwania efektu. 

Jeśli obiekt [] nie ma tej długości lub nie jest w tej kolejności, zostanie zignorowany.

```zenscript
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
walna mikstura = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Pobierz przedmioty po nazwie

Te dwie funkcje zwracają [IItemStack](/Vanilla/Items/IItemStack/)[] zawierający wszystkie pasujące elementy.  
Pierwsze sprawdzanie nazw rejestrów elementów, drugie używa niezlokalizowanych nazw.

```zenscript
//getItemsByRegexRegistryName(Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // wszystkie rzeczy, które mają miecz w nazwie
itemUtils.getItemsByRegexRegistryName(". termiczne*"); // wszystkie ekspansje termiczne/fundamenty/dynamiki

//getItemsByRegexUnlocalizedName(Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // różowe!! <3
```

## Imituj uchwyt wspornika przedmiotów

Ta metoda działa tak samo jak [Obsługa nawiasów Produktu](/Vanilla/Brackets/Bracket_Item/).  
W przeciwieństwie do BH, musisz jednak podać meta jako opcjonalny parametr.  
Jeśli chcesz użyć wieloznacznika meta, użyj `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## Utwórz jajko Spawn

Funkcja createSpawnEgg pozwala na tworzenie niestandardowych jaj spawnu modów.  
Niestandardowy NBT jest OPTIONAL i może zastąpić znacznik obiektu.  
Zwraca ff spawn jako [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(entity, @optional customNBT)
//NBT nadpisuje obiekt (tworzy creeper egg!)
jajko owalne = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 jako byte,PersistenceRequired:1 jako bajte}});
```