# IBlockDropHandler

Funkcja IBlockDropHandler jest używana, aby umożliwić zaawansowaną obsługę bloków [bloków](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) utworzonych w fabryce [Vanilla](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Importowanie klasy

Czy chcesz zaimportować klasę? Tutaj idziesz:

```zenscript
import mods.contenttweaker.DropHandler,
```

## Struktura funkcji

Funkcja jest funkcją unieważniającą, która przyjmuje następujące parametry:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) zrzuty.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) świat -> świat w którym się znajdujemy, możliwy [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), możesz chcieć być na przykład i w dół
- [IBlockPos](/Vanilla/World/IBlockPos/) pozycja -> pozycja bloku
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) stan -> stan blokady bloku
- int fortune -> poziom szczęścia użytego narzędzia

Ponieważ ta metoda niczego nie zwraca - wszystkie krople muszą być dodane do listy `kropki` przy użyciu metod ekspozycji.  
Przeczytaj o nich [tutaj](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Przykład

```zenscript
block.setDropHandler(function(drops, world, position position state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```