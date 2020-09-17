# Składnia wymagań logistycznych

Teraz, gdy wiesz, jakie bramki logiczne są w stanie opisać składnię zaimplementowaną w Reskillable która pozwala na ich użycie. W dalszej części znajdą się bardziej szczegółowe przykłady.

We wszystkich poniższych wymogach składni `` jest reprezentacja ciągów wszystkich innych wspieranych wymagań (w tym tych dodanych przez CompatSkills lub inne dodatki).

* * *

## Bramki wymagań bezwarunkowych

### NIE wymagane

Najprostszym wymogiem logicznym, który obsługuje Reskillable jest możliwość odwrócenia wymogu. Czyni to używając bramki **NOT** i składnia `nie|wymaganie`. As described above in the section about Logic Gates, this logic requirement will only be marked as met if the specified `requirement` is not met.

* * *

## Bramki wymagań binarnych

Pozostałe wymagania logiczne są nieco bardziej złożone, ponieważ wymagają one dwóch wymogów *wejściowych*. Ponieważ bramki logiczne są stosunkowo proste, kolejność wymagań nie ma znaczenia, jednakże, będę się do nich odnosić jako `wymóg<sub>1</sub>` i `wymóg<sub>2</sub>` dotyczący rozróżnienia tego, który z nich jest taki.

Udostępniają również składnię: `brama|[wymóg<sub>1</sub>]~[wymóg<sub>2</sub>]`. Brama jest `i`, `nand`, `lub`, `lub`, `xor`lub `xani`.  
**Uwaga**: Wymagane są nawiasy wokół `wymagań<sub>1</sub>` i `wymagania<sub>2</sub>`.

* * *

### ORAZ wymaganie

Wymóg **AND** w przeciwieństwie do innych wymagań logicznych jest przede wszystkim przydatny dla zagnieżdżonych wymagań logicznych (bardziej na tym niższym szczeblu), jako blokowanie elementu lub innego obiektu o wielu wymaganiach wymaga spełnienia wszystkich określonych wymagań. Jest to takie samo jak funkcja **AND** , więc powinna być używana, jeśli to możliwe, ponieważ sprawi, że podpowiedź zostanie sformatowana w sposób łatwiejszy do odczytania.

## Przykłady

Wszystkie poniższe przykłady będą wyświetlane przy użyciu składni z pomocy CompatSkill CraftTweaker, ponieważ łatwiej jest czytać. Wymagania logiki działają bardzo dobrze również z konfiguracji.

Wszystkie przykładowe wpisy skryptu CrT poniżej używają polecenia importu: `importuj mods.compatskills.Requirement. ddWymaganie;` ma to na celu głównie skrócenie długości innych linii i zwiększenie ich czytelności. (So jeśli kopiujesz dowolny przykład, musisz go umieścić w górnej części pliku skryptu. Kilka poniższych przykładów, które zaczynają się bezpośrednio od `modów. ompatumiejętności.` są blokadami, które są specyficzne dla CompatSkills i wymyśliłem przykłady przyzwoitych wymagań logicznych.

* * *

Zezwalaj tylko na atakowanie pigmanów zombie poza nim: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Zezwalaj na wejście na nether jeśli gracz ma poziom ataku lub obrony co najmniej 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "lub|[przekwalifikowalny:attack|15]~[przekwalifikowalny:obrona|15]");`

* * *

Gdy gracz dotrze do poziomu 24 i umiejętności 24 przestaje używać skórzanego pancerza:

    addRequirement(<minecraft:leather_helmet:*>, "nand|[przekwalifikowalne:obrona|24]~[przekwalifikowalne:agility|24]");
    addRequire(<minecraft:leather_chestplate:*>, "nand|[przekwalifikowalne:defse|24]~[przekwalifikowalne:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[przekwalifikowalne:defens|24]~[przekwalifikowalne:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[przekwalifikowalne|24]~[przekwalifikowalne:agility|24]");
    

* * *

Zezwalaj tylko na używanie drewnianej łopaty, dopóki gracz nie uzyska 5 poziomu dodawania: `wymagania(<minecraft:wooden_shovel:*>, "nor|[przekwalifikowalne:mining|5]~[przekwalifikowalne:gromadzenie|5]");`

* * *

Pozwól graczowi na używanie pereł na kółkach tylko wtedy, gdy mają magię 32 lub gdy mają sprawność 32. Nie pozwól jednak im jej używać, jeśli mają obie umiejętności na poziomie 32: `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32]");`. Może to być przydatne, jeśli chcesz mieć wiele drzew progresji i upewnić się, że muszą się one podążać, jeśli chcą nadal korzystać z określonych przedmiotów.

* * *

Trudno było znaleźć przykład dla **XNOR**, ale jest to przykład tego, jak może on działać.

Pozwól graczowi na podniesienie poziomu obrony do poziomu 5 tylko wtedy, gdy jeszcze nie wstawił żadnych punktów do ataku lub jeśli jest na poziomie 32 ataku: `modów. ompatumiejętności.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[przekwalifikowalne:attack|2]~[przekwalifikowalne:attack|32]");`

### Zagnieżdżone wymagania logistyczne

Zagnieżdżone wymagania logiczne są wymagane, gdy używasz wymagań logicznych jako jednego z `wymagań` w innym wymaganiu logicznym. Należy zwrócić szczególną uwagę na umieszczenie nawiasów w zagnieżdżonych wymaganiach.

* * *

Pozwól na zniszczenie rudy diamentów tylko wtedy, gdy gracz ma 20 poziom wydobycia lub gdy gracz ma zarówno poziom zbierania 25 jak i poziom wydobycia 15: `wymaganie (<minecraft:diamond_ore>, "lub|[przekwalifikowalne:mining|20]~[i|[przekwalifikowalne:zbieranie|25]~[przekwalifikowalne:mining|15]]");` *Uwaga*: To również powoduje efekt uboczny polegający na tym, że gracze nie mogą umieszczać rudy diamentu, chyba że również spełniają wymagania.

* * *

Zezwalaj tylko na używanie elytra z pobudzeniem 15 na końcu lub posiadając magiczne i magiczne poziomy 25, gdy nie znajdują się na końcu: `addRequirement(<minecraft:elytra:*>, "xor|[i|[dim|1]~[przekwalifikowalne:agility|15]]~[i|[przekwalifikowalne:agility|25]~[przekwalifikowalne:magic|25]]");` *Uwaga*: Kiedy osiągniesz sprawność i magię 25 nie możesz użyć elytra na końcu. Jest to częściowo przykład i niekoniecznie to, czego ktoś chce.

Innym sposobem, w jaki powyższe wymaganie może być napisane, jest: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[i|[reskillable:agility|25]~[reskillable:magic|25]");` ponieważ obie strony wymagają co najmniej 15 sprawności.