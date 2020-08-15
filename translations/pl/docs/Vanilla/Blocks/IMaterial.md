# IMateriał

Obiekt IMaterial reprezentuje materiał, z którego blok jest wykonany.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods bez parametrów

| ZenGetter              | Metoda ZenMethod    | Typ zwrotu  |
| ---------------------- | ------------------- | ----------- |
| jasny blok             | blocksLight()       | bool        |
| blocksMovement         | blocksMovement()    | bool        |
| płonąca                | getCanBurn()        | bool        |
| mobilityFlag           | getMobilityFlag()   | ciąg znaków |
| ciecz                  | isLiquid()          | bool        |
| nieprzezroczysty       | izOpaque()          | bool        |
| wymienne               | można wymienić()    | bool        |
| solid                  | isSolid()           | bool        |
| Narzędzie Nie Wymagane | isToolNotRequired() | bool        |
|                        | setReplaceable()    | IMateriał   |

## Metody ZenMethods z parametrami

### Sprawdź, czy dwa IMateriały pasują

Używa IMateriału.  
Zwraca bool.

```zenscript
materiały dopasowane (inne) (IMateriał);
```

## Pobieranie materiałów Minecraft Vanilla

Możesz użyć tych metod, aby uzyskać materiały Vanilla minecraft

```zenscript
crafttweaker.blocks.IMaterial.air();
crafttweaker.blocks.IMaterial.anvil();
crafttweaker.blocks.IMaterial.barrier();
crafttweaker.blocks.IMaterial.cactus();
crafttweaker.blocks.IMaterial.cake();
crafttweaker.blocks.IMaterial.carpet();
crafttweaker.blocks.IMaterial.circuits();
crafttweaker.blocks.IMaterial.clay();
crafttweaker.blocks.IMaterial.cloth();
crafttweaker. locks.IMaterial.coral();
crafttweaker.blocks.IMaterial.craftedSnow();
crafttweaker.blocks.IMaterial.dragonEgg();
crafttweaker.blocks.IMaterial.fire();
crafttweaker.blocks.IMaterial.glass();
crafttweaker.blocks.IMaterial.gourd();
crafttweaker.blocks.IMaterial.traw();
crafttweaker.blocks.IMaterial.ground();
crafttweaker.blocks.IMaterial.ice();
crafttweaker. locks.IMaterial.iron();
crafttweaker.blocks.IMaterial.lava();
crafttweaker.blocks.IMaterial.lea();
crafttweaker.blocks.IMaterial.packedIce();
crafttweaker.blocks.IMaterial.piston();
crafttweaker.blocks.IMaterial.plants();
crafttweaker.blocks.IMaterial.portal();
crafttweaker.blocks.IMaterial.redstoneLight();
crafweaker.blocks.IMaterial. ock();
crafttweaker.blocks.IMaterial.sand();
crafttweaker.blocks.IMaterial.snow();
crafttweaker.blocks.IMaterial.sponge();
crafttweaker.blocks.IMaterial.structureVoid();
crafttweaker.blocks.IMaterial.tnt();
crafttweaker.blocks.IMaterial.vine();
crafttweaker.blocks.IMaterial.water();
crafttweaker.blocks.IMaterial.web();
crafttweaker.blocks.IMaterial.IMaterial.wood();
```