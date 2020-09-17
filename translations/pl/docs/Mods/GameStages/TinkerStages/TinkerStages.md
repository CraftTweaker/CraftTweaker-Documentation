# Etapy nurkowania

Ten mod jest dodatkiem dla [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Etapy Tinker pozwalają na umieszczenie modyfikacji Tinkers Construct w niestandardowym systemie progresji skonfigurowanym przez autora paczki modów. Aby uzyskać więcej informacji, sprawdź stronę modów [tutaj](https://minecraft.curseforge.com/projects/tinkerstages)

## Ogólne ograniczenia

Ogranicza wytwarzanie narzędzi do etapu. Jeśli wiele etapów zostanie dodanych za pomocą tej metody, gracz będzie potrzebował co najmniej jednego z nich.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(etap ciągu);
mods.TinkerStages.addGeneralCraftingStage("one");
```

Ogranicza wymianę części na etap. Jeśli wiele etapów zostanie dodanych za pomocą tej metody, gracz będzie potrzebował co najmniej jednego z nich.

```zenscript
// mods.TinkerStages.addGeneralPartRereplacingStage(etap ciągu);
mods.TinkerStages.addGeneralPartRereplacingStage("one");
```

Ogranicza budowę części do etapu. Jeśli wiele etapów zostanie dodanych za pomocą tej metody, gracz będzie potrzebował co najmniej jednego z nich.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(etap String);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

Ogranicza stosowanie modyfikatorów na etapie. Jeśli wiele etapów zostanie dodanych za pomocą tej metody, gracz będzie potrzebował co najmniej jednego z nich.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## Szczególne ograniczenia

Zapobiega tworzeniu określonego typu narzędzia na stacji narzędzi. Na przykład można ograniczyć wytwarzanie młotków do określonego etapu.

```zenscript
// mods.TinkerStages.addToolTypeStage(String, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:kilkaxe");
```

Zapobiega używaniu materiału przez gracza. W tym tworzenie, budowanie części i używanie narzędzia.

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

Zapobiega stosowaniu określonego modyfikatora do narzędzia lub używaniu.

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## Przykładowy skrypt

```zenscript
//OGÓLNE OGÓLNE OGRANICZENIA
//Zapobiega wszystkim narzędziom, chyba że etap zostanie odblokowany.
mods.TinkerStages.addGeneralCraftingStage("one");

//Zapobiega wymianie wszystkich narzędzi, chyba że scena jest rozcokowana.
mods.TinkerStages.addGeneralPartRechangeingStage("one");

//Wydrukuje cały budynek części, chyba że scena jest odblokowana.
mods.TinkerStages.addGeneralPartBuildingStage("one");

//Zapobiega stosowaniu jakichkolwiek modyfikatorów narzędzi, chyba że scena jest odblokowana.
mods.TinkerStages.addGeneralModifierStage("one");


//SZCZEGÓŁOWE OGRANICZENIA
//Zapobiega tworzeniu kilofów, chyba że scena zostanie odblokowana.
mods.TinkerStages.addToolTypeStage("dwa, "tconstruct:kilkaxe");

//Zapobiega używaniu materiału. 
mods.TinkerStages.addMaterialStage("dwa, "stone");

//Zapobiega stosowaniu modyfikatora.
mods.TinkerStages.addModifierStage("dwa, "mending_moss");
```