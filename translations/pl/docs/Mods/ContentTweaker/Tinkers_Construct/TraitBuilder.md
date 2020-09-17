# Własne cechy

Za pomocą tego pakietu możesz stworzyć cechę, którą możesz następnie umieścić na swoich narzędziach!

## Importowanie klasy

Może być wymagane zaimportowanie klasy, jeśli napotkasz jakiekolwiek problemy (np. rzucenie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj mods.contenttweaker.tconstruct.TraitBuilder;`

## Tworzenie cechy

Przede wszystkim musisz utworzyć konstruktora cech.  
Można to zrobić za pomocą funkcji statycznej:

```zenscript
//create(identyfikator ciągu, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

`identyfikator` musi być unikalny!  
Dla `koloru`sugeruje się użycie zapisu szesnastkowego jak pokazano powyżej.  
`maxLevel` to maksymalny poziom, jaki cecha może stać się i będzie domyślnie równa 0.  
`countPerLevel` to ile podpoziomów może mieć cechę (np. czerwony kamień, który ma 50).

Po zakończeniu wszystkich poniższych modyfikacji, musisz zarejestrować swoją cechę.  
Można to zrobić używając metody `Zarejestruj się` , która zwróci [Reprezentację](/Mods/ContentTweaker/Tinkers_Construct/Trait/) nowej cechy.

```zenscript
myTrait.register();
```

Po rejestracji, nadal możesz modyfikować konstruktora, sama cecha nie może być już modyfikowana.  
W ten sposób możesz łatwo tworzyć wiele podobnych cech.

## Elementy modyfikatora

Jeśli łączysz dany składnik z narzędziem w kuźni narzędzi, możesz zastosować cechę jako modyfikator.

```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeed, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `element` to element, który jest dopasowany. Możesz użyć [Warunków Elementu](/Vanilla/Items/Item_Conditions/) , ale bez Transformatorów. 
- `wartość` to ilość elementów, które są dopasowane. Możesz podzielić je na wszystkie gniazda dostarczające narzędzia, co pozwala również przejść powyżej 64. W powyższym przykładzie potrzebne są 4 żelazne bloki za każdym razem. Domyślnie do 1.
- `amountmatch` to ilość punktów cechy dodanych na `kwot`. W powyższym przykładzie cztery żelazne bloki dają dwa punkty cechy. Domyślnie do 1.
- Jeśli użyjesz funkcji `usuń`, usunie ona wszystkie składniki cechy, które pasują do elementu.

## Właściwości

Możesz ustawić i uzyskać te właściwości za pomocą podanych nazw:

| Nazwisko             | Typ         |
| -------------------- | ----------- |
| kolor                | odcień      |
| CountPerLevel        | odcień      |
| hidden               | bool        |
| identifier           | ciąg znaków |
| localizedDescription | ciąg znaków |
| localizedName        | ciąg znaków |
| maksymalny poziom    | odcień      |

## Obliczone właściwości

Niektóre właściwości będą musiały zostać obliczone.  
Możesz ustawić dane funkcje właściwości:

### CanApplyTogether

Sprawdź, czy cecha może być dodana do narzędzia, które ma już inną cechę lub [zaklęcia](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition){....};
```

### Extra info

Zwrócony ciąg znaków [] będzie wyświetlany jako dodatkowe informacje w stacji narzędziowej.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, element IItemStack tag, IData tag){....};
```

## Dodawanie funkcjonalności

Teraz, gdy utworzyłeś cechę musisz coś zmienić, prawda?  
To właśnie są osoby obsługujące zdarzenia cechy:  
Są nazywane za każdym razem, gdy użytkownik robi coś z narzędziem zawierającym cechę.

Poniżej zobaczysz wszystkie możliwe osoby obsługujące, wraz z informacjami o ich powrocie i jak zapisać dla nich funkcję. Pamiętaj, że będziesz musiał zastąpić `myTrait` własną nazwą zmiennej.  
Ponadto musisz używać tylko obsługi których potrzebujesz, nie potrzebujesz pustych obsługujących tylko tak, że wszystko wypełniłeś.

<details>
    <summary>Wszystkie uchwyty w skrócie</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">[PLACEHOLDER] beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">[PLACEHOLDER] afterBlockBreak</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">kryt kalcKrytyczny</a></li>
        <li><a href="#calcdamage">obrażenia calcDamage</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">kalcKnockback</a></li>
        <li><a href="#afterhit">po trafieniu</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">Naprawa onTool</a></li>
    </ul>
</details>

### onUpdate

Każdy zaznaczony przez narzędzie jest załadowany (oznacza to w ekwipunku gracza).  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IWorld](/Vanilla/World/IWorld/) reprezentujący `świat`
- [IEntity](/Vanilla/Entities/IEntity/) reprezentujący `właściciela`
- Int reprezentujący `element Slot`
- Wartość logiczna, która opisuje czy narzędzie jest obecnie `zaznaczone`

**Zwraca nic.**

Utworzono przy użyciu:

```zenscript
myTrait.getMiningSpeed = function(cecha, narzędzie, świat, właściciel, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Wywoływane, gdy blok jest wydobyty.  
Zachowaj ostrożność, ponieważ to wydarzenie jest również złapane przez osoby obsługujące blokadę vanilli.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [Prędkość łamania gracza](/Vanilla/Events/Events/PlayerBreakSpeed/)

**Zwraca nic.**

Utworzono przy użyciu:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### [PLACEHOLDER] beforeBlockBreak

Zadzwoniono tuż przed uszkodzeniem bloku.  
Zachowaj ostrożność, ponieważ to wydarzenie jest również złapane przez osoby obsługujące blokadę vanilli.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [Zdarzenie BlockBreakcji](/Vanilla/Events/Events/BlockBreak/)

**Zwraca nic.**

Utworzono przy użyciu:

```zenscript
myTrait.beforeBlockBreak = function(cecha, narzędzie, event) {
    //CODE
};
```

### [PLACEHOLDER] afterBlockBreak

Wywołane po zniszczeniu bloku.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IWorld](/Vanilla/World/IWorld/) reprezentujący `świat`
- [IBlockState](/Vanilla/Blocks/IBlockState/) reprezentujący uszkodzony `blok`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `górnika`
- Bolet reprezentujący jeśli wydobycie `było efektywne`

**Zwraca nic.**

Utworzono przy użyciu:

```zenscript
myTrait.afterBlockBreak = function(cecha, narzędzie, świat, blostan, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Za każdym razem, gdy blok został uszkodzony.  
Zachowaj ostrożność, ponieważ to wydarzenie jest również nazywane przez osoby obsługujące vanilla onBlockHarvestBreak.  
Jednak w przeciwieństwie do obsługi wanilii ten program obsługi będzie wykonywany tylko wtedy, gdy gracz złamał blok.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**Nic nie zwraca**

Utworzono przy użyciu:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### kryt kalcKrytyczny

Zadzwonione przed obliczeniem szkód wyrządzonych jednostce w celu ustalenia, czy będzie to krzywda czy nie.  
Zwracanie `false` nie powstrzyma trafienia, które już jest krytyką.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `cel`

**Zwraca bool** , który jest `true` jeśli trafienie powinno krytykować, fałsz za każdym razem.

Utworzono przy użyciu:

```zenscript
myTrait.calcCrit = function(cecha, narzędzie, atak, cel) {
    //CODE
    zwraca true; //or false
};
```

### obrażenia calcDamage

Zadzwoniono po uderzeniu jednostki, ale jeszcze przed zadawaniem obrażeń i przed dodaniem obrażeń krytyki.  
Obrażenia zadawane przez kradzież zostaną obliczone na podstawie wyniku tego.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `cel`
- Zmienna reprezentująca `oryginalne obrażenia` (niezmodyfikowane obrażenia narzędzi)
- A float representing the tool's `newDamage` (the damage the tool will do up until this point, can be originalDamage, or already be modified by other traits).
- Wartość logiczna, która reprezentuje, jeśli trafienie `jest krytyczne`

**Zwraca zmiennoprzecinkową** reprezentującą nowe obrażenia. W przeciwnym razie wróć `nowych obrażeń`

Utworzono używając

```zenscript
myTrait.calcDamage = function(cecha, narzędzie, atakujący, cel, originalDamage, newDamage, isCritical) {
    //CODE
    zwraca nowe obrażenia; //Or twoja zmodyfikowana wartość
};
```

### onHit

Zadzwoniono po uderzeniu jednostki, tuż przed zadaniem obrażeń.  
Wszystkie obliczenia obrażeń zostały już wykonane w tym punkcie.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `cel`
- Zmienna przedstawiająca `obrażeń zadanych przez narzędzie` (łącznie z krzywdzącymi obrażeniami)
- Wartość logiczna, która reprezentuje, jeśli trafienie `jest krytyczne`

**Nic nie zwraca**

Utworzono używając

```zenscript
myTrait.onHit = function(cecha, narzędzie, atakujący, cel, obrażenia, isCritical) {
    //CODE
};
```

### kalcKnockback

Zadzwonione po uderzeniu jednostki w celu modyfikacji zastosowanego odrzutu.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `cel`
- Pływacz przedstawiający `obrażeń zadanych przez narzędzie` (w tym krycie)
- Zmienna reprezentująca `original Knockback narzędzia` (niezmodyfikowany knockback)
- Zmienna reprezentująca `newKnockback narzędzia` (odrzut, którego narzędzie zrobi do tego punktu, może być oryginalKnockback lub już być modyfikowany przez inne cechy).
- Wartość logiczna, która reprezentuje, jeśli trafienie `jest krytyczne`

**Zwraca zmiennoprzecinek** reprezentujący nowy odrzut. W przeciwnym razie wróć `newKnockback`

Utworzono używając

```zenscript
myTrait.calcDamage = function(cecha, narzędzie, atakujący, cel, obrażenia, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    zwraca nowe obrażenia; //Or twoja zmodyfikowana wartość
};
```

### po trafieniu

Wywołane po uderzeniu obiektu i po zadaniu obrażeń.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `cel`
- Zmienna reprezentująca `zadawane obrażenia`
- Bool reprezentujący jeśli trafienie `było Krytyczne`
- Bool reprezentujący, czy obiekt `został uderzony`. Może być fałszywe, jeśli obiekt był niewrażliwy lub miał jakieś inne sposoby zaostrzenia obrażeń.

**Nic nie zwraca**

Utworzono używając

```zenscript
mytrait.afterHit = function(cecha, narzędzie, atakujący, cel, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

Zadzwoniony, gdy gracz trzymający narzędzie blokuje atak.  
W przeciwnym razie `trafień` zostanie wywołany.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IPlayer](/Vanilla/Players/IPlayer/) reprezentujący `gracza`
- [EnityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Nic nie zwraca**

Utworzono używając

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### onPlayerHurt

Zadzwoniony, gdy gracz trzymający narzędzie NIE BLOKUJ ataku.  
W przeciwnym razie `onBlock` zostanie wywołany.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- [IPlayer](/Vanilla/Players/IPlayer/) reprezentujący `gracza`
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący `atakującego`
- [EnityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Nic nie zwraca**

Utworzono używając

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Zadzwonione przed zmniejszeniem trwałości narzędzi.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- Odcień reprezentujący `niemodyfikowaną ilość` trwałości, która ma zostać zredukowana.
- Odcień reprezentujący `nową ilość` trwałości do zredukowania, która może być już modyfikowana przez inne cechy.
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący aktualny `uchwyt`

**Zwraca int** reprezentujący nową kwotę. W przeciwnym razie zwróć `nową kwotę`

Utworzono używając

```zenscript
myTrait.onToolDamage = function(cecha, narzędzie, unmodifiedAmount, newAmount, holder) {
    //CODE
    zwraca nowąAmount; //Olub zmodyfikowana wartość
};
```

### calcToolHeal

Zadzwonione przed zwiększeniem trwałości narzędzi.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący użyte `narzędzie`
- Odcień reprezentujący `niemodyfikowaną ilość` trwałości, która ma zostać zwiększona.
- Odcień reprezentujący `nową ilość` trwałości, która może być już modyfikowana przez inne cechy.
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) reprezentujący aktualny `uchwyt`

**Zwraca int** reprezentujący nową kwotę. W przeciwnym razie zwróć `nową kwotę`

Utworzono używając

```zenscript
myTrait.calcToolHeal = function(cecha, narzędzie, unmodifiedAmount, newAmount, holder) {
    //CODE
    zwraca nowąAmount; //Or twoja zmodyfikowana wartość
};
```

### Naprawa onTool

Zadzwonione, zanim narzędzie zostanie naprawione za pomocą materiału naprawczego.  
Nie należy mylić z `onToolHeal` , który jest wywoływany później.  
Zostanie wywołane wielokrotnie, jeśli wiele elementów będzie używanych jednocześnie.  
Parametry:

- [Reprezentacja cechy](/Mods/ContentTweaker/Tinkers_Construct/Trait/) reprezentująca aktualnie używaną `cechę`.
- [IItemStack](/Vanilla/Items/IItemStack/) reprezentujący `narzędzie` do naprawy
- Inhalacja reprezentująca `ilość` trwałości do zwiększenia.

**Nic nie zwraca**

Utworzono używając

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## Przykład

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testowa cecha. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whoooooooo";
testTrait.localizedDescription = "To jest zabawne! Niestety nic nie robi... \u2639”;
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```