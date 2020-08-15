# Wynik IRayTraceReult

When a player is looking or clicking at something he fires a ray that goes until it hits what it needs to hit, or misses.  
The result of such a hit is an IRayTraceResult object.

## Importowanie klasy

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.world.IRayTraceResult`

## ZenGetters

All you can do is retrieve information from these objects, here's which:  
Be careful though, since all getters that do not return a bool can return `null`!

| Nazwa    | typ                                    |
| -------- | -------------------------------------- |
| isMiss   | bool                                   |
| isEntity | bool                                   |
| isBlock  | bool                                   |
| podmiot  | [IEntity](/Vanilla/Entities/IEntity/)  |
| bloki    | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |